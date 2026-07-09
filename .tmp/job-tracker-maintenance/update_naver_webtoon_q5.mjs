import fs from "node:fs";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const draftPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/naver-webtoon/naver-webtoon-ai-animator-answers-draft-2026-06-21.md";
const todaySerial = 46194; // 2026-06-21
const markdownTitle = "AI 스토리텔링 영상 제작 관련 장점/경쟁력 자료";
const rowSectionTitle = "선택 자료";

const markdown = fs.readFileSync(draftPath, "utf8");
const start = markdown.indexOf(`## 5. ${markdownTitle}`);
const end = markdown.indexOf("## 있으면 좋은 제출/면접 보조자료");
if (start === -1 || end === -1 || end <= start) {
  throw new Error("Could not extract Q5 section.");
}

const answer = markdown
  .slice(start + `## 5. ${markdownTitle}`.length, end)
  .trim()
  .split("\n")
  .filter((line) => !line.startsWith("글자 수:"))
  .join("\n")
  .trim();

const count = {
  withSpace: answer.length,
  noSpace: answer.replace(/\s/g, "").length,
};

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");
const values = sheet.getRange("A1:M160").values;

let rowNumber = null;
for (const [index, row] of values.entries()) {
  if (row[1] === "네이버웹툰" && row[3] === rowSectionTitle) {
    rowNumber = index + 1;
    break;
  }
}

if (!rowNumber) {
  throw new Error("Naver Webtoon Q5 row not found.");
}

const current = sheet.getRange(`A${rowNumber}:M${rowNumber}`).values[0];
sheet.getRange(`A${rowNumber}:M${rowNumber}`).values = [[
  "작성완료",
  current[1],
  current[2],
  current[3],
  current[4],
  answer,
  `공백 포함 ${count.withSpace} / 공백 제외 ${count.noSpace}`,
  current[7],
  current[8],
  current[9],
  current[10] || todaySerial,
  todaySerial,
  "5번 선택자료 v3. 선택 자료 문항에 맞춰 공개 Loom Workflow 링크와 3문장 설명만 남긴 제출용 버전.",
]];

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "table",
  range: `회사별자소서!A${rowNumber}:M${rowNumber}`,
  include: "values,formulas",
  tableMaxRows: 2,
  tableMaxCols: 13,
  tableMaxCellChars: 180,
});
console.log(check.ndjson);
