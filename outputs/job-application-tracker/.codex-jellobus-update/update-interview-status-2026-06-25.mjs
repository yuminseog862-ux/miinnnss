import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("지원관리");

const interviewRows = [
  {
    row: 64,
    company: "㈜젤로버스",
    nextAction: "면접 준비",
    noteSuffix: "2026-06-25 면접 연락/합격 반영. 회사 리서치 및 면접 질문 준비 필요.",
  },
  {
    row: 66,
    company: "에이아이투모바일",
    nextAction: "면접 준비",
    noteSuffix: "2026-06-25 면접 연락/합격 반영. 회사 리서치 및 면접 질문 준비 필요.",
  },
];

for (const item of interviewRows) {
  const company = sheet.getRange(`C${item.row}`).values[0][0];
  if (company !== item.company) {
    throw new Error(`Expected ${item.company} at row ${item.row}, found ${company}`);
  }

  sheet.getRange(`K${item.row}`).values = [[item.nextAction]];
  const currentNote = sheet.getRange(`O${item.row}`).values[0][0] ?? "";
  const nextNote = String(currentNote).includes(item.noteSuffix)
    ? String(currentNote)
    : `${currentNote} / ${item.noteSuffix}`;
  sheet.getRange(`O${item.row}`).values = [[nextNote]];
}

const verify = await workbook.inspect({
  kind: "table",
  sheetId: "지원관리",
  range: "A64:P66",
  maxChars: 12000,
  tableMaxRows: 3,
  tableMaxCols: 16,
  tableMaxCellChars: 220,
});
console.log(verify.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
  maxChars: 4000,
});
console.log(errors.ndjson);

const preview = await workbook.render({
  sheetName: "지원관리",
  range: "A64:P66",
  scale: 1,
  format: "png",
});
const previewBytes = new Uint8Array(await preview.arrayBuffer());
await fs.writeFile(
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/.codex-jellobus-update/interview-status-preview-2026-06-25.png",
  previewBytes,
);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);
