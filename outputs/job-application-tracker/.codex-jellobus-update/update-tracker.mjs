import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("지원관리");

const newRow = 64;
sheet.getRange(`A${newRow}:P${newRow}`).copyFrom(sheet.getRange("A63:P63"), "all");

sheet.getRange(`A${newRow}:P${newRow}`).values = [[
  "A",
  "지원완료",
  "㈜젤로버스",
  "주식회사 젤로버스에서 AI 크리에이터 제작자 팀원을 모집합니다.",
  "AI Creative Production",
  "잡코리아 온라인",
  "상시",
  "경력무관",
  84,
  "잡코리아 기본 자기소개서",
  "미팅 일정 조율",
  "AI콘텐츠크리에이터/생성형 AI 제작자 공고. 제작자 성격이 강하지만 생성형 AI 기반 콘텐츠 제작 역할이고 연봉 하한·서울 조건은 양호. 잡코리아 기본 자기소개서로 지원 완료 후 미팅 요청 수신.",
  "https://www.jobkorea.co.kr/Recruit/GI_Read/49429478",
  46197,
  "2026-06-24 잡코리아 기본 자기소개서로 지원완료. 문자로 미팅 요청 수신. 잡코리아 검색 확인: 서울 강동구, 연봉 하한 3,600, 공고 생성 2026-06-22, 상시채용성 공고.",
  "완료",
]];

sheet.getRange("B4").values = [[45]];
sheet.getRange("B5").values = [[18]];

const verify = await workbook.inspect({
  kind: "table",
  sheetId: "지원관리",
  range: "A60:P64",
  maxChars: 12000,
  tableMaxRows: 8,
  tableMaxCols: 16,
  tableMaxCellChars: 140,
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
  range: "A60:P64",
  scale: 1,
  format: "png",
});
const previewBytes = new Uint8Array(await preview.arrayBuffer());
await fs.writeFile("/Users/yuminseog/portfolio/outputs/job-application-tracker/.codex-jellobus-update/jellobus-row-preview.png", previewBytes);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);
