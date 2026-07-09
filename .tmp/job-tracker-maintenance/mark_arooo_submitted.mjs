import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46195; // 2026-06-22
const company = "아루(Arooo)";
const posting = "[인턴] 콘텐츠 마케팅 (전환형)";
const url = "https://www.wanted.co.kr/wd/316143?recommender_key=jDPXye__oeOBKO";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const tracker = workbook.worksheets.getItem("지원관리");
const trackerValues = tracker.getRange("A1:O260").values;
let trackerRow = null;
for (let index = 0; index < trackerValues.length; index += 1) {
  const row = trackerValues[index] || [];
  if (row[2] === company && row[3] === posting) {
    trackerRow = index + 1;
    break;
  }
}

if (!trackerRow) {
  throw new Error("지원관리 탭에서 아루(Arooo) row를 찾지 못했습니다.");
}

tracker.getRange(`A${trackerRow}:O${trackerRow}`).values = [[
  "B",
  "지원완료",
  company,
  posting,
  "Content/Performance Marketing Intern",
  "Wanted 지원",
  "상시",
  "신입/경력 0-1년",
  82,
  "제출 완료: Wanted 프로필/포트폴리오/아루용 간단소개",
  "결과 대기",
  "지원 완료. AI 직접성은 없지만 신입 전환형, 숏폼 광고 콘텐츠 기획·제작, 인플루언서 커뮤니케이션, 캠페인 성과 분석까지 포함. AI Creative 포트폴리오를 퍼포먼스 콘텐츠 마케팅으로 돌려 쓴 지원.",
  url,
  todaySerial,
  "2026-06-22 지원완료. 아루/자기만의방/여성 웰니스. 인턴 3개월 후 전환형. 카테고리 민감도 확인 필요.",
]];

const drafts = workbook.worksheets.getItem("회사별자소서");
const draftValues = drafts.getRange("A1:M260").values;
const draftRows = [];
for (let index = 0; index < draftValues.length; index += 1) {
  const row = draftValues[index] || [];
  if (row[1] === company) {
    draftRows.push(index + 1);
  }
}

for (const row of draftRows) {
  drafts.getRange(`A${row}:A${row}`).values = [["제출반영"]];
  drafts.getRange(`L${row}:L${row}`).values = [[todaySerial]];
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

for (const range of [
  `지원관리!A${trackerRow}:O${trackerRow}`,
  draftRows.length ? `회사별자소서!A${draftRows[0]}:M${draftRows[draftRows.length - 1]}` : "회사별자소서!A1:M1",
]) {
  const check = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 5,
    tableMaxCols: 15,
  });
  console.log(check.ndjson);
}
