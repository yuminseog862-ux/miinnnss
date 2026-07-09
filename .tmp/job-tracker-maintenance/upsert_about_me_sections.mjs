import fs from "node:fs";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const markdownPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/master-ai-creative-cover-letter-2026-06-19.md";

const markdown = fs.readFileSync(markdownPath, "utf8");

function section(title, nextTitle) {
  const after = markdown.split(`## ${title}`)[1];
  if (!after) throw new Error(`Missing section: ${title}`);
  return (nextTitle ? after.split(`## ${nextTitle}`)[0] : after).trim();
}

const aboutMe = section("나에 대한 이야기", "나에 대한 이야기 400자 압축본");
const aboutMeShort = section("나에 대한 이야기 400자 압축본", "잡코리아 500자 압축본");

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");

sheet.getRange("A48:M49").values = [
  [
    "작성완료",
    "공통정본",
    "잡코리아 기본 자기소개서",
    "나에 대한 이야기",
    "작업 태도 / 사고 방식 / 신입 자기소개",
    aboutMe,
    aboutMe.length,
    "MUSINSA, ADSB, Loom/Pulso",
    "잡코리아",
    "",
    46192,
    46192,
    "직무 적합 문안 앞뒤에 붙일 수 있는 자기소개/성향 섹션.",
  ],
  [
    "작성완료",
    "공통정본",
    "잡코리아 기본 자기소개서",
    "나에 대한 이야기 400자 압축본",
    "작업 태도 / 사고 방식 / 신입 자기소개",
    aboutMeShort,
    aboutMeShort.length,
    "MUSINSA, ADSB, Loom/Pulso",
    "잡코리아",
    "",
    46192,
    46192,
    "짧은 자기소개·성장과정·성격/강점 입력란용.",
  ],
];

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "table",
  range: "회사별자소서!A48:M49",
  include: "values,formulas",
  tableMaxRows: 2,
  tableMaxCols: 13,
});
console.log(check.ndjson);
