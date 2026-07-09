import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46191; // 2026-06-18
const deadlineSerial = 46194; // 2026-06-21
const postingUrl = "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=54155390";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

function firstBlankRow(values, startRow) {
  let last = startRow - 1;
  for (let index = startRow - 1; index < values.length; index += 1) {
    if (values[index]?.some((value) => value !== null && value !== "" && value !== undefined)) {
      last = index + 1;
    }
  }
  return last + 1;
}

const trackerSheet = workbook.worksheets.getItem("지원관리");
const trackerValues = trackerSheet.getRange("A1:O120").values;
let trackerRow = null;
for (let index = 0; index < trackerValues.length; index += 1) {
  if (trackerValues[index]?.some((value) => String(value ?? "").includes("네이버웹툰"))) {
    trackerRow = index + 1;
    break;
  }
}
if (!trackerRow) {
  trackerRow = firstBlankRow(trackerValues, 4);
}

trackerSheet.getRange(`A${trackerRow}:O${trackerRow}`).values = [[
  "S",
  "별도작성 필요",
  "네이버웹툰",
  "[네이버웹툰] AI 애니메이션 제작 (AI animator) (신입/경력)",
  "AI Storytelling Animation Production",
  "홈페이지 지원",
  deadlineSerial,
  "신입/경력·학력무관",
  94,
  "이력서, 자기소개서 5문항, 선택 포트폴리오 자료",
  "마감 2026-06-21. 자소서 5문항 작성 후 홈페이지 지원",
  "AI 영상 워크플로우/프롬프트 디렉팅/모델 검증/서사 콘텐츠 완성 역량 요구. Loom/Pulso, MUSINSA, ADSB 연결.",
  postingUrl,
  todaySerial,
  "정자동 그린팩토리. 정규직. 실무 인터뷰 전 사전과제 포함 가능.",
]];

const draftSheet = workbook.worksheets.getItem("회사별자소서");
const draftValues = draftSheet.getRange("A1:J120").values;
for (let index = 0; index < draftValues.length; index += 1) {
  if (draftValues[index]?.[1] === "네이버웹툰") {
    draftSheet.getRange(`A${index + 1}:A${index + 1}`).values = [["작성대기"]];
  }
}
let draftRow = firstBlankRow(draftValues, 5);
const hasDrafts = draftValues.some((row) => row?.[1] === "네이버웹툰");
if (!hasDrafts) {
  const draftRows = [
    ["작성대기", "네이버웹툰", "[네이버웹툰] AI 애니메이션 제작 (AI animator) (신입/경력)", "지원동기", "WEBTOON IP AI animation workflow + creator-supportive production", null, null, "Loom/Pulso, MUSINSA, ADSB", "홈페이지 지원", postingUrl],
    ["작성대기", "네이버웹툰", "[네이버웹툰] AI 애니메이션 제작 (AI animator) (신입/경력)", "이미지 생성 툴/극복 사례", "이미지 생성 모델 비교·통제·재현", null, null, "MUSINSA, ADSB, Loom/Pulso", "홈페이지 지원", postingUrl],
    ["작성대기", "네이버웹툰", "[네이버웹툰] AI 애니메이션 제작 (AI animator) (신입/경력)", "스토리텔링 영상 생성 툴/극복 사례", "콘티·연출·프롬프트 디렉팅·재생성 루프", null, null, "MUSINSA AI 광고제, Loom/Pulso", "홈페이지 지원", postingUrl],
    ["작성대기", "네이버웹툰", "[네이버웹툰] AI 애니메이션 제작 (AI animator) (신입/경력)", "음악/TTS/효과음 생성 툴/극복 사례", "AI idol/music/IP sound workflow", null, null, "Loom/Pulso", "홈페이지 지원", postingUrl],
    ["작성대기", "네이버웹툰", "[네이버웹툰] AI 애니메이션 제작 (AI animator) (신입/경력)", "선택 자료", "AI storytelling video proof package", null, null, "Loom/Pulso, MUSINSA, ADSB", "홈페이지 지원", postingUrl],
  ];
  draftSheet.getRange(`A${draftRow}:J${draftRow + draftRows.length - 1}`).values = draftRows;
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const trackerCheck = await workbook.inspect({
  kind: "table",
  range: `지원관리!A${trackerRow}:O${trackerRow}`,
  include: "values,formulas",
  tableMaxRows: 1,
  tableMaxCols: 15,
});
console.log(trackerCheck.ndjson);

const draftCheck = await workbook.inspect({
  kind: "match",
  searchTerm: "네이버웹툰",
  options: { maxResults: 20 },
  summary: "verify naver webtoon drafts",
});
console.log(draftCheck.ndjson);
