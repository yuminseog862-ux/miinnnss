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

const jobkoreaMaster = section("잡코리아 기본 자기소개서 정본", "잡코리아 500자 압축본");
const jobkoreaShort = section("잡코리아 500자 압축본");

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");

sheet.getRange("A46:M47").values = [
  [
    "작성완료",
    "공통정본",
    "잡코리아 기본 자기소개서",
    "잡코리아 자기소개서 정본",
    "AI Creative + 콘텐츠/브랜드 마케팅 + PMM",
    jobkoreaMaster,
    jobkoreaMaster.length,
    "MUSINSA, ADSB, Loom/Pulso",
    "잡코리아",
    "",
    46192,
    46192,
    "루먼랩 제출본의 강한 AI 제작 루프 설명을 잡코리아 기본 자기소개서에 보강한 정본.",
  ],
  [
    "작성완료",
    "공통정본",
    "잡코리아 기본 자기소개서",
    "잡코리아 500자 압축본",
    "AI Creative + 콘텐츠/브랜드 마케팅 + PMM",
    jobkoreaShort,
    jobkoreaShort.length,
    "MUSINSA, ADSB, Loom/Pulso",
    "잡코리아",
    "",
    46192,
    46192,
    "글자수 제한이 있을 때 쓰는 압축본.",
  ],
];

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "table",
  range: "회사별자소서!A46:M47",
  include: "values,formulas",
  tableMaxRows: 2,
  tableMaxCols: 13,
});
console.log(check.ndjson);
