import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const backupPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.before-solomoncode-submitted-2026-07-09.xlsx";
const outputDir = "/Users/yuminseog/portfolio/.tmp/solomoncode-tracker";
const today = new Date("2026-07-09T00:00:00");

await fs.copyFile(workbookPath, backupPath);

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const management = workbook.worksheets.getItem("지원관리");
const mgmtUsed = management.getUsedRange();
const mgmtValues = mgmtUsed.values;

let solomonRowIndex = -1;
for (let i = 0; i < mgmtValues.length; i += 1) {
  const row = mgmtValues[i];
  if (row?.[2] === "㈜솔로몬코드" || String(row?.[12] ?? "").includes("49356104")) {
    solomonRowIndex = i;
    break;
  }
}
if (solomonRowIndex < 0) {
  throw new Error("Could not find Solomoncode row in 지원관리.");
}

management.getCell(solomonRowIndex, 1).values = [["지원완료"]];
management.getCell(solomonRowIndex, 9).values = [["잡코리아 즉시지원 완료, 회사별 자소서 제출반영"]];
management.getCell(solomonRowIndex, 10).values = [["결과 대기"]];
management.getCell(solomonRowIndex, 13).values = [[today]];
management.getCell(solomonRowIndex, 14).values = [["2026-07-09 사용자 제출 완료 확인. AI 영상 크리에이터 포지션, 제작/기획/프롬프트 중심 지원."]];
management.getCell(solomonRowIndex, 15).values = [["지원완료"]];
management.getCell(solomonRowIndex, 13).setNumberFormat("yyyy-mm-dd");

const archive = workbook.worksheets.getItem("회사별자소서");
const archiveUsed = archive.getUsedRange();
const archiveValues = archiveUsed.values;
const archiveRows = [];
for (let i = 0; i < archiveValues.length; i += 1) {
  const row = archiveValues[i];
  if (row?.[1] === "㈜솔로몬코드") archiveRows.push(i);
}
if (archiveRows.length === 0) {
  throw new Error("Could not find Solomoncode rows in 회사별자소서.");
}

for (const rowIndex of archiveRows) {
  archive.getCell(rowIndex, 0).values = [["제출반영"]];
  archive.getCell(rowIndex, 11).values = [[today]];
  const existingNote = String(archiveValues[rowIndex]?.[12] ?? "").trim();
  const submittedNote = "2026-07-09 잡코리아 실제 제출 완료.";
  archive.getCell(rowIndex, 12).values = [[existingNote ? `${existingNote} ${submittedNote}` : submittedNote]];
}
archive.getRangeByIndexes(Math.min(...archiveRows), 11, archiveRows.length, 1).setNumberFormat("yyyy-mm-dd");

const managementCheck = await workbook.inspect({
  kind: "table",
  sheetId: "지원관리",
  range: `A${solomonRowIndex + 1}:P${solomonRowIndex + 1}`,
  maxChars: 5000,
  tableMaxRows: 1,
  tableMaxCols: 16,
  tableMaxCellChars: 500,
});
console.log("MANAGEMENT_ROW");
console.log(managementCheck.ndjson);

const firstArchiveRow = Math.min(...archiveRows);
const lastArchiveRow = Math.max(...archiveRows);
const archiveCheck = await workbook.inspect({
  kind: "table",
  sheetId: "회사별자소서",
  range: `A${firstArchiveRow + 1}:M${lastArchiveRow + 1}`,
  maxChars: 8000,
  tableMaxRows: archiveRows.length,
  tableMaxCols: 13,
  tableMaxCellChars: 400,
});
console.log("ARCHIVE_ROWS");
console.log(archiveCheck.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
console.log("ERROR_SCAN");
console.log(errors.ndjson);

const managementPreview = await workbook.render({
  sheetName: "지원관리",
  range: `A${Math.max(1, solomonRowIndex - 2)}:P${solomonRowIndex + 2}`,
  scale: 1,
  format: "png",
});
await fs.writeFile(`${outputDir}/solomoncode-submitted-management-preview.png`, new Uint8Array(await managementPreview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

console.log(JSON.stringify({
  updatedWorkbook: workbookPath,
  backup: backupPath,
  managementRow: solomonRowIndex + 1,
  archiveRows: archiveRows.map((rowIndex) => rowIndex + 1),
}, null, 2));
