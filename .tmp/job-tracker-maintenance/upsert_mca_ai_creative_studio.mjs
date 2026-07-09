import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46194; // 2026-06-21
const deadlineSerial = 46212; // 2026-07-09

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const tracker = workbook.worksheets.getItem("지원관리");

function firstBlankRow(values, startRow) {
  let last = startRow - 1;
  for (let index = startRow - 1; index < values.length; index += 1) {
    if (values[index]?.some((value) => value !== null && value !== "" && value !== undefined)) {
      last = index + 1;
    }
  }
  return last + 1;
}

const trackerValues = tracker.getRange("A1:O220").values;
let row = null;
for (let index = 0; index < trackerValues.length; index += 1) {
  if (trackerValues[index]?.[2] === "엠씨에이" || String(trackerValues[index]?.[3] ?? "").includes("MCA AI Creative Studio")) {
    row = index + 1;
    break;
  }
}
if (!row) {
  row = firstBlankRow(trackerValues, 9);
}

tracker.getRange(`A${row}:O${row}`).values = [[
  "S",
  "별도작성 필요",
  "엠씨에이",
  "MCA AI Creative Studio AI 아티스트 및 PM 채용",
  "AI Content PM + Creative Studio",
  "잡코리아 온라인",
  deadlineSerial,
  "경력무관·졸업예정 가능",
  92,
  "이력서, 포트폴리오 필수, 지원 분야 PM 명시",
  "AI 콘텐츠 PM으로 지원문안 작성 후 지원",
  "PM 트랙은 콘텐츠 및 AI 프로젝트 기획·운영, 제안서/사업계획서/보고서, 클라이언트 커뮤니케이션, 일정/예산/파트너 관리라 사용자 방향과 잘 맞음. After Effects는 AI 아티스트 자격요건에 명시되어 있어 아티스트가 아닌 PM으로 포지셔닝해야 함.",
  "https://www.jobkorea.co.kr/Recruit/GI_Read/49338369",
  todaySerial,
  "2026-06-21 확인. 모집 PM 2명/AI 아티스트 2명, 연봉 3,600만원 이상, 서울 강남, 마감 2026-07-09.",
]];

const drafts = workbook.worksheets.getItem("회사별자소서");
const draftValues = drafts.getRange("A1:M160").values;
const hasDraft = draftValues.some((draftRow) => draftRow?.[1] === "엠씨에이");
if (!hasDraft) {
  const draftRow = firstBlankRow(draftValues, 5);
  drafts.getRange(`A${draftRow}:M${draftRow}`).values = [[
    "작성대기",
    "엠씨에이",
    "MCA AI Creative Studio AI 아티스트 및 PM 채용",
    "지원분야/자기소개 방향",
    "AI 콘텐츠 PM 지원. AE 약점은 언급하지 않고 기획·운영·문서화·AI 제작 파이프라인으로 포지셔닝.",
    null,
    null,
    "Loom/Pulso, MUSINSA, ADSB, AHEYA",
    "잡코리아",
    "https://www.jobkorea.co.kr/Recruit/GI_Read/49338369",
    todaySerial,
    todaySerial,
    "공고상 제목/지원 분야 기입 필수. AI 아티스트가 아니라 AI 콘텐츠 PM으로 명시.",
  ]];
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "match",
  searchTerm: "엠씨에이",
  options: { maxResults: 20 },
  summary: "verify MCA AI Creative Studio row",
});
console.log(check.ndjson);
