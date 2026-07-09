import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const manage = workbook.worksheets.getItem("지원관리");
manage.getRange("A48:O48").values = [[
  "S",
  "지원완료",
  "루먼랩",
  "AI 콘텐츠 기획자 (신입~)",
  "AI Content Planning + User Creative Experience",
  "Wanted",
  46247,
  "신입",
  94,
  "제출 완료: Wanted 프로필/포트폴리오/회사별 자소서 확장본",
  "결과 대기",
  "ADSB 실무 피드백, 무신사 적용, Loom/Pulso 반복 제작 루프, LLM 기획-coding agent 프롬프트-API 이미지 생성-영상화 제작 흐름을 반영해 제출 완료.",
  "https://www.wanted.co.kr/wd/361431",
  46192,
  "2026-06-19 제출완료. 트렌드/니즈, 포맷 기획, LLM 실험, 결과 개선, 사용자 반응, 협업까지 JD 대응",
]];

const drafts = workbook.worksheets.getItem("회사별자소서");
drafts.getRange("A35:A38").values = [
  ["제출반영"],
  ["제출반영"],
  ["제출반영"],
  ["제출반영"],
];

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "formula error scan",
});
console.log(errors.ndjson || "");

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

for (const range of ["지원관리!A48:O48", "회사별자소서!A35:A38"]) {
  const check = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 8,
    tableMaxCols: 15,
  });
  console.log(check.ndjson);
}
