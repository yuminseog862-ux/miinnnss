import fs from "node:fs";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const draftPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/mca/mca-ai-content-pm-cover-letter-2026-06-22.md";
const postingUrl = "https://www.jobkorea.co.kr/Recruit/GI_Read/49338369";
const todaySerial = 46197; // 2026-06-24
const deadlineSerial = 46212; // 2026-07-09

const markdown = fs.readFileSync(draftPath, "utf8");
const title = "AI 콘텐츠 PM 지원 | 생성형 AI 콘텐츠 기획·운영";
const coverLetter = markdown
  .split("## 잡코리아 자기소개서")[1]
  .split("## 사용 포트폴리오 근거")[0]
  .trim();

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

const tracker = workbook.worksheets.getItem("지원관리");
const trackerValues = tracker.getRange("A1:O220").values;
let trackerRow = null;
for (let index = 0; index < trackerValues.length; index += 1) {
  if (trackerValues[index]?.[2] === "엠씨에이" || String(trackerValues[index]?.[3] ?? "").includes("MCA AI Creative Studio")) {
    trackerRow = index + 1;
    break;
  }
}
if (!trackerRow) trackerRow = firstBlankRow(trackerValues, 9);

tracker.getRange(`A${trackerRow}:O${trackerRow}`).values = [[
  "S",
  "작성완료",
  "엠씨에이",
  "MCA AI Creative Studio AI 아티스트 및 PM 채용",
  "AI Content PM + Creative Studio",
  "잡코리아 온라인",
  deadlineSerial,
  "경력무관·졸업예정 가능",
  92,
  "회사별 자소서 작성완료, 포트폴리오 필수, 지원 분야 PM 명시",
  "잡코리아 자소서 교체 후 AI 콘텐츠 PM으로 제출",
  "AI 아티스트가 아닌 AI 콘텐츠 PM 트랙으로만 지원. PM 트랙은 콘텐츠 및 AI 프로젝트 기획·운영, 제안서/사업계획서/보고서, 클라이언트 커뮤니케이션, 일정/예산/파트너 관리라 사용자 방향과 잘 맞음.",
  postingUrl,
  todaySerial,
  "MCA PM 전용 자기소개서 수정완료. Loom을 대표 기획 프로젝트로, Pulso를 Loom 안의 트랙 사례로 정리. After Effects는 AI 아티스트 자격요건이므로 직접 언급하지 않고 제작 이해도/운영 문서화로 포지셔닝.",
]];

const drafts = workbook.worksheets.getItem("회사별자소서");
const draftValues = drafts.getRange("A1:M180").values;
const rows = [
  [
    "작성완료",
    "엠씨에이",
    "MCA AI Creative Studio AI 아티스트 및 PM 채용",
    "이력서 제목",
    "AI 콘텐츠 PM 단일 포지셔닝",
    title,
    title.length,
    "Loom, Pulso track, AHEYA, MUSINSA, ADSB",
    "잡코리아",
    postingUrl,
    todaySerial,
    todaySerial,
    "지원 분야는 AI 콘텐츠 PM으로 명시. AI 아티스트/VFX 지원처럼 보이지 않게 처리.",
  ],
  [
    "작성완료",
    "엠씨에이",
    "MCA AI Creative Studio AI 아티스트 및 PM 채용",
    "잡코리아 자기소개서",
    "AI 콘텐츠 PM 지원. 제작자가 아니라 기획·운영·문서화·협업 기준을 잡는 신입 PM으로 포지셔닝.",
    coverLetter,
    coverLetter.length,
    "Loom, Pulso track, AHEYA, MUSINSA, ADSB",
    "잡코리아",
    postingUrl,
    todaySerial,
    todaySerial,
    `원문 파일: ${draftPath}`,
  ],
];

const existingRows = draftValues
  .map((value, index) => ({ rowNumber: index + 1, value }))
  .filter(({ value }) => value?.[1] === "엠씨에이");

const titleRow = existingRows.find(({ value }) => value?.[3] === "이력서 제목");
const coverRow = existingRows.find(({ value }) => value?.[3] === "잡코리아 자기소개서");
const memoRows = existingRows.filter(({ value }) => value?.[3] !== "이력서 제목" && value?.[3] !== "잡코리아 자기소개서");

if (titleRow) {
  drafts.getRange(`A${titleRow.rowNumber}:M${titleRow.rowNumber}`).values = [rows[0]];
} else {
  const start = firstBlankRow(draftValues, 5);
  drafts.getRange(`A${start}:M${start}`).values = [rows[0]];
}

if (coverRow) {
  drafts.getRange(`A${coverRow.rowNumber}:M${coverRow.rowNumber}`).values = [rows[1]];
} else {
  const refreshedValues = drafts.getRange("A1:M180").values;
  const start = firstBlankRow(refreshedValues, 5);
  drafts.getRange(`A${start}:M${start}`).values = [rows[1]];
}

for (const memoRow of memoRows) {
  drafts.getRange(`A${memoRow.rowNumber}:A${memoRow.rowNumber}`).values = [["보류"]];
  drafts.getRange(`M${memoRow.rowNumber}:M${memoRow.rowNumber}`).values = [["제출용 완성본은 별도 작성완료 행을 사용. 이 행은 방향 메모로 보류."]];
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "match",
  searchTerm: "MCA AI Creative Studio",
  options: { maxResults: 30 },
  summary: "verify MCA PM draft rows",
});
console.log(check.ndjson);
