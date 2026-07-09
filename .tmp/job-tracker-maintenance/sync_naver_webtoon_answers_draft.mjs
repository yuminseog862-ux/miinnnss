import fs from "node:fs";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const draftPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/naver-webtoon/naver-webtoon-ai-animator-answers-draft-2026-06-21.md";
const todaySerial = 46194; // 2026-06-21
const company = "네이버웹툰";
const postingUrl = "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=54155390";

const markdown = fs.readFileSync(draftPath, "utf8");

function extractAnswer(heading, nextHeading) {
  const start = markdown.indexOf(heading);
  const end = markdown.indexOf(nextHeading);
  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`Could not extract ${heading}`);
  }
  const raw = markdown.slice(start + heading.length, end).trim();
  return raw
    .split("\n")
    .filter((line) => !line.startsWith("글자 수:"))
    .join("\n")
    .trim();
}

function countText(text) {
  return {
    withSpace: text.length,
    noSpace: text.replace(/\s/g, "").length,
  };
}

const answerMap = new Map([
  [
    "지원동기",
    extractAnswer(
      "## 1. 지원 동기",
      "## 2. 이미지 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례",
    ),
  ],
  [
    "이미지 생성 툴/극복 사례",
    extractAnswer(
      "## 2. 이미지 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례",
      "## 3. 스토리텔링 영상 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례",
    ),
  ],
  [
    "스토리텔링 영상 생성 툴/극복 사례",
    extractAnswer(
      "## 3. 스토리텔링 영상 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례",
      "## 4. 음악/TTS/효과음 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례",
    ),
  ],
  [
    "음악/TTS/효과음 생성 툴/극복 사례",
    extractAnswer(
      "## 4. 음악/TTS/효과음 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례",
      "## 5. AI 스토리텔링 영상 제작 관련 장점/경쟁력 자료",
    ),
  ],
  [
    "선택 자료",
    extractAnswer(
      "## 5. AI 스토리텔링 영상 제작 관련 장점/경쟁력 자료",
      "## 있으면 좋은 제출/면접 보조자료",
    ),
  ],
]);

const summaryMap = new Map([
  ["지원동기", "AI 아이돌 MV 제작 경험을 웹툰 IP의 AI 애니메이션 확장 관심으로 연결. 나이트런 중심 동기"],
  ["이미지 생성 툴/극복 사례", "실제 제작 이미지 생성, 생성 결과 비교표, 통과·보류·수정·제외 기준 강조"],
  ["스토리텔링 영상 생성 툴/극복 사례", "짧은 컷 제작, 섹션별 프레임 설계, 편집을 거쳐 결과물로 완성하는 구조 강조"],
  ["음악/TTS/효과음 생성 툴/극복 사례", "Suno와 Pulso track/world planning. 구간, 에너지, 축, 동작 타이밍을 영상 설계와 연결"],
  ["선택 자료", "INK narrative proof + Loom workflow page + Pulso contact sheets/ledger를 묶은 AI storytelling proof package"],
]);

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

function findRowsByCompany(sheet, range, targetCompany) {
  const values = sheet.getRange(range).values;
  const startRow = Number(range.match(/\d+/)?.[0] ?? 1);
  const rows = [];
  values.forEach((row, index) => {
    if (row.some((value) => String(value ?? "").includes(targetCompany))) {
      rows.push(startRow + index);
    }
  });
  return rows;
}

const drafts = workbook.worksheets.getItem("회사별자소서");
const rows = findRowsByCompany(drafts, "A1:M160", company);
if (rows.length === 0) {
  throw new Error("No Naver Webtoon draft rows found.");
}

for (const rowNumber of rows) {
  const current = drafts.getRange(`A${rowNumber}:M${rowNumber}`).values[0];
  const section = String(current[3] ?? "");
  const answer = answerMap.get(section);
  if (!answer) continue;

  const count = countText(answer);
  const noteBase = "초안 작성 완료. 사용자 컨펌 후 작성완료 전환.";
  const note = `${noteBase} 파일: outputs/job-application-tracker/naver-webtoon/naver-webtoon-ai-animator-answers-draft-2026-06-21.md`;

  drafts.getRange(`A${rowNumber}:M${rowNumber}`).values = [[
    "수정필요",
    current[1],
    current[2],
    current[3],
    summaryMap.get(section) || current[4],
    answer,
    `공백 포함 ${count.withSpace} / 공백 제외 ${count.noSpace}`,
    current[7],
    current[8],
    current[9],
    current[10] || todaySerial,
    todaySerial,
    note,
  ]];
}

const tracker = workbook.worksheets.getItem("지원관리");
const trackerRows = findRowsByCompany(tracker, "A1:O140", company);
const trackerRow = trackerRows[0] ?? 49;
const trackerCurrent = tracker.getRange(`A${trackerRow}:O${trackerRow}`).values[0];
tracker.getRange(`A${trackerRow}:O${trackerRow}`).values = [[
  trackerCurrent[0] || "S",
  "별도작성 필요",
  trackerCurrent[2],
  trackerCurrent[3],
  trackerCurrent[4],
  trackerCurrent[5],
  trackerCurrent[6],
  trackerCurrent[7],
  trackerCurrent[8],
  trackerCurrent[9],
  "네이버 전용 5문항 초안 컨펌 후 홈페이지 지원",
  "5문항 초안 작성 완료. INK S05-S08 실제 하네스, Grok Imagine/Grok Build/OpenAI GPT Image 2/Suno, 생성 결과 비교표/제외 기준을 반영. 제출 전 사용자 문체 확인 필요.",
  trackerCurrent[12] || postingUrl,
  todaySerial,
  "초안 파일 생성 및 회사별자소서 rows 39-43 반영. 아직 제출 전.",
]];

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

for (const range of [`지원관리!A${trackerRow}:O${trackerRow}`, "회사별자소서!A39:M43"]) {
  const check = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 8,
    tableMaxCols: 13,
    tableMaxCellChars: 140,
  });
  console.log(check.ndjson);
}
