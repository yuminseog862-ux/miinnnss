import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const manage = workbook.worksheets.getItem("지원관리");
manage.getRange("A16:O16").values = [[
  "C",
  "제외",
  "위홈",
  "AI-Native 마케터",
  "AI Creative + Marketing/PMM",
  "잡코리아 온라인",
  46190,
  "신입/졸업예정 가능",
  96,
  "마감으로 작성 중단",
  "공고마감. 동일/재오픈 공고 확인 시만 재검토",
  "최상 핏이었으나 2026-06-19 확인 기준 잡코리아 공고가 2026-06-17에 마감됨.",
  "https://www.jobkorea.co.kr/Recruit/GI_Read/49193878",
  46192,
  "2026-06-19 확인: 마감됨. WordPress보다 AHEYA Web3/결제·지갑 난이도 경험으로 보완 가능했던 후보",
]];

const drafts = workbook.worksheets.getItem("회사별자소서");
drafts.getRange("A5:A7").values = [
  ["마감보류"],
  ["마감보류"],
  ["마감보류"],
];

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

for (const range of ["지원관리!A16:O16", "회사별자소서!A5:A7"]) {
  const check = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 8,
    tableMaxCols: 15,
  });
  console.log(check.ndjson);
}
