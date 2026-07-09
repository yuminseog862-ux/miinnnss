import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46195; // 2026-06-22
const company = "네이버웹툰";
const posting = "[네이버웹툰] AI 애니메이션 제작 (AI animator) (신입/경력)";
const reason =
  "Codex가 사용자의 5번 선택자료 링크 정리 요청 의도를 잘못 이해해 불필요한 문항 수정으로 시간이 지연되었고, 그 결과 2026-06-21 마감 내 제출하지 못함.";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const trackerSheet = workbook.worksheets.getItem("지원관리");
const trackerValues = trackerSheet.getRange("A1:O160").values;
let trackerRowNumber = null;

for (const [index, row] of trackerValues.entries()) {
  if (row[2] === company && row[3] === posting) {
    trackerRowNumber = index + 1;
    break;
  }
}

if (!trackerRowNumber) {
  throw new Error("지원관리 네이버웹툰 AI Animator row not found.");
}

const tracker = trackerSheet.getRange(`A${trackerRowNumber}:O${trackerRowNumber}`).values[0];
trackerSheet.getRange(`A${trackerRowNumber}:O${trackerRowNumber}`).values = [[
  tracker[0],
  "제외",
  tracker[2],
  tracker[3],
  tracker[4],
  tracker[5],
  tracker[6],
  tracker[7],
  tracker[8],
  tracker[9],
  "마감 미제출로 종료. 재사용 가능한 자소서/포트폴리오 링크 보류 보관",
  reason,
  tracker[12],
  todaySerial,
  `${reason} 회사별자소서 rows 39-43은 보류 상태로 보관.`,
]];

const draftSheet = workbook.worksheets.getItem("회사별자소서");
const draftValues = draftSheet.getRange("A1:M180").values;
const touchedDraftRows = [];

for (const [index, row] of draftValues.entries()) {
  if (row[1] === company && row[2] === posting) {
    const rowNumber = index + 1;
    const current = draftSheet.getRange(`A${rowNumber}:M${rowNumber}`).values[0];
    draftSheet.getRange(`A${rowNumber}:M${rowNumber}`).values = [[
      "보류",
      current[1],
      current[2],
      current[3],
      current[4],
      current[5],
      current[6],
      current[7],
      current[8],
      current[9],
      current[10],
      todaySerial,
      `마감 미제출 보류. ${reason}`,
    ]];
    touchedDraftRows.push(rowNumber);
  }
}

if (touchedDraftRows.length === 0) {
  throw new Error("회사별자소서 네이버웹툰 rows not found.");
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const trackerCheck = await workbook.inspect({
  kind: "table",
  range: `지원관리!A${trackerRowNumber}:O${trackerRowNumber}`,
  include: "values,formulas",
  tableMaxRows: 1,
  tableMaxCols: 15,
  tableMaxCellChars: 220,
});
console.log(trackerCheck.ndjson);

const draftCheck = await workbook.inspect({
  kind: "table",
  range: `회사별자소서!A${Math.min(...touchedDraftRows)}:M${Math.max(...touchedDraftRows)}`,
  include: "values,formulas",
  tableMaxRows: 5,
  tableMaxCols: 13,
  tableMaxCellChars: 120,
});
console.log(draftCheck.ndjson);
