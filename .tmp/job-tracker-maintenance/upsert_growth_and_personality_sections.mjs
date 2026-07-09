import fs from "node:fs";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const markdownPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/master-ai-creative-cover-letter-2026-06-19.md";
const todaySerial = 46192;

const markdown = fs.readFileSync(markdownPath, "utf8");

function section(title) {
  const marker = `## ${title}\n`;
  const start = markdown.indexOf(marker);
  if (start === -1) throw new Error(`Missing section: ${title}`);
  const contentStart = start + marker.length;
  const nextHeading = markdown.indexOf("\n## ", contentStart);
  const contentEnd = nextHeading === -1 ? markdown.length : nextHeading;
  return markdown.slice(contentStart, contentEnd).trim();
}

const growth = section("성장과정 공통 문단");
const personality = section("성격의 장단점 공통 문단");

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");

sheet.getRange("A52:M53").values = [
  [
    "작성완료",
    "공통정본",
    "잡코리아 기본 자기소개서",
    "성장과정 공통 문단",
    "패션마케팅 관심 -> AI 기반 기획/제작 방식으로 확장",
    growth,
    growth.length,
    "MUSINSA, ADSB, Loom/Pulso",
    "잡코리아/공통",
    "",
    todaySerial,
    todaySerial,
    "성장과정 문항 전용. 기본 자기소개서 본문에는 자동으로 합치지 않음.",
  ],
  [
    "작성완료",
    "공통정본",
    "잡코리아 기본 자기소개서",
    "성격의 장단점 공통 문단",
    "낯선 도구 직접 실험 + 작업 단위화 + 중간 공유 보완",
    personality,
    personality.length,
    "MUSINSA, ADSB, Loom/Pulso",
    "잡코리아/공통",
    "",
    todaySerial,
    todaySerial,
    "성격의 장단점, 강점과 보완점, 일하는 방식 문항 전용. 기본 자기소개서 본문에는 자동으로 합치지 않음.",
  ],
];

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "table",
  range: "회사별자소서!A52:M53",
  include: "values,formulas",
  tableMaxRows: 2,
  tableMaxCols: 13,
});
console.log(check.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
  summary: "formula error scan",
});
console.log(errors.ndjson);
