import fs from "node:fs";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const draftPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/naver-webtoon/naver-webtoon-ai-animator-answers-draft-2026-06-21.md";
const todaySerial = 46194; // 2026-06-21

const markdown = fs.readFileSync(draftPath, "utf8");
const start = markdown.indexOf("## 1. 지원 동기");
const end = markdown.indexOf("## 2. 이미지 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례");
if (start === -1 || end === -1 || end <= start) {
  throw new Error("Could not extract motivation section.");
}

const answer = markdown
  .slice(start + "## 1. 지원 동기".length, end)
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
  if (row[1] === "네이버웹툰" && row[3] === "지원동기") {
    rowNumber = index + 1;
    break;
  }
}

if (!rowNumber) {
  throw new Error("Naver Webtoon motivation row not found.");
}

const current = sheet.getRange(`A${rowNumber}:M${rowNumber}`).values[0];
sheet.getRange(`A${rowNumber}:M${rowNumber}`).values = [[
  "작성완료",
  current[1],
  current[2],
  current[3],
  "메시지 기획 + INK/IDOL 하네스 기반 AI animation workflow",
  answer,
  `공백 포함 ${count.withSpace} / 공백 제외 ${count.noSpace}`,
  "INK, IDOL production harness, Loom/Pulso",
  current[8],
  current[9],
  current[10] || todaySerial,
  todaySerial,
  "지원동기 v15 최종. 지원동기 원칙에 맞춰 공고 선택 이유를 앞세우고 작업 흐름은 직무 적합 근거로 압축.",
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
