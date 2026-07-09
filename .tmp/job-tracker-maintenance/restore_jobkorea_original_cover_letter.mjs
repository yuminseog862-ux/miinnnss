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

const jobkoreaMaster = section("잡코리아 기본 자기소개서 정본");
const formatMemo = section("잡코리아 양식 대응 메모");
const jobkoreaShort = section("잡코리아 500자 압축본");

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");

sheet.getRange("A46:M47").values = [
  [
    "작성완료",
    "공통정본",
    "잡코리아 기본 자기소개서",
    "잡코리아 자기소개서 정본 - 원본형",
    "AI Creative + 직무역량 + AI 활용 방식",
    jobkoreaMaster,
    jobkoreaMaster.length,
    "MUSINSA, ADSB, Loom/Pulso",
    "잡코리아",
    "",
    todaySerial,
    todaySerial,
    "사용자 원래 문안을 기본값으로 복원. 자기소개 자유양식/역량 추가 기술/직무 적합 경험 항목에 사용.",
  ],
  [
    "작성완료",
    "공통정본",
    "잡코리아 기본 자기소개서",
    "잡코리아 500자 압축본 - 원문 축약형",
    "AI Creative + 직무역량 + AI 활용 방식",
    jobkoreaShort,
    jobkoreaShort.length,
    "MUSINSA, ADSB, Loom/Pulso",
    "잡코리아",
    "",
    todaySerial,
    todaySerial,
    "글자수 제한이 있을 때 쓰는 원문 축약형.",
  ],
];

sheet.getRange("A48:A49").values = [["보류"], ["보류"]];
sheet.getRange("M48:M49").values = [
  [
    "사용자 피드백 반영: 별도 '나에 대한 이야기' 섹션은 기본 사용 금지. 원본형 정본을 기본값으로 사용.",
  ],
  [
    "사용자 피드백 반영: 별도 '나에 대한 이야기' 압축본은 기본 사용 금지. 필요할 때만 보조 문장으로 참고.",
  ],
];

sheet.getRange("A50:M50").values = [
  [
    "작성완료",
    "공통정본",
    "잡코리아 기본 자기소개서",
    "잡코리아 양식 대응 메모",
    "자소서 항목별 대응 기준",
    formatMemo,
    formatMemo.length,
    "공통",
    "잡코리아",
    "https://www.jobkorea.co.kr/starter/passassay",
    todaySerial,
    todaySerial,
    "잡코리아 합격자소서 항목 조사 기반. 별도 문항이 있으면 지원동기/입사 후 기여/협업/성격 항목만 추가 작성.",
  ],
];

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "table",
  range: "회사별자소서!A46:M50",
  include: "values,formulas",
  tableMaxRows: 5,
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
