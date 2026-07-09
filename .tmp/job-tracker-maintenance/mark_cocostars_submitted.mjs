import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const matches = await workbook.inspect({
  kind: "match",
  searchTerm: "코코스타즈",
  options: { maxResults: 80 },
  summary: "Find Cocostars rows",
});
console.log(matches.ndjson);

const matchRows = String(matches.ndjson || "")
  .trim()
  .split("\n")
  .filter(Boolean)
  .map((line) => JSON.parse(line));

const manageHit = matchRows.find((row) => row.sheet === "지원관리" && /^C\d+$/.test(row.address));
if (!manageHit) {
  throw new Error("지원관리 탭에서 코코스타즈 행을 찾지 못했습니다.");
}
const manageRow = manageHit.address.match(/\d+$/)[0];

const manage = workbook.worksheets.getItem("지원관리");
manage.getRange(`A${manageRow}:O${manageRow}`).values = [[
  "A",
  "지원완료",
  "코코스타즈",
  "[AI아이돌그룹 AI 콘텐츠 총괄 채용]",
  "AI Idol Content Planning + AI Creative",
  "잡코리아 온라인",
  46204,
  "경력무관",
  91,
  "제출 완료: 잡코리아 이력서/자기소개서/포트폴리오",
  "결과 대기",
  "Loom/Pulso의 AI 아이돌 IP, 트랙 보드, 이미지·영상 생성 루프, 팬 참여 흐름을 연결해 제출 완료. 제목은 총괄이나 공고상 경력무관.",
  "https://www.jobkorea.co.kr/Recruit/GI_Read/49289035",
  46192,
  "2026-06-19 제출완료. 마감 2026-07-01, 정규직, 서울 강남",
]];

const drafts = workbook.worksheets.getItem("회사별자소서");
const draftRows = matchRows
  .filter((row) => row.sheet === "회사별자소서" && /^B\d+$/.test(row.address))
  .map((row) => Number(row.address.match(/\d+$/)[0]))
  .sort((a, b) => a - b);

for (const row of draftRows) {
  drafts.getRange(`A${row}`).values = [["제출반영"]];
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const draftCheckRange = draftRows.length
  ? `회사별자소서!A${draftRows[0]}:A${draftRows[draftRows.length - 1]}`
  : "회사별자소서!A1:A1";

for (const range of [`지원관리!A${manageRow}:O${manageRow}`, draftCheckRange]) {
  const check = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 5,
    tableMaxCols: 15,
  });
  console.log(check.ndjson);
}
