import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46194; // 2026-06-21
const deadlineSerial = 46194; // 2026-06-21
const postingUrl = "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=54155390";
const title = "[네이버웹툰] AI 애니메이션 제작 (AI animator) (신입/경력)";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

function findRowsByCompany(sheet, range, company) {
  const values = sheet.getRange(range).values;
  const startRow = Number(range.match(/\d+/)?.[0] ?? 1);
  const rows = [];
  values.forEach((row, index) => {
    if (row.some((value) => String(value ?? "").includes(company))) {
      rows.push(startRow + index);
    }
  });
  return rows;
}

const trackerSheet = workbook.worksheets.getItem("지원관리");
const trackerRows = findRowsByCompany(trackerSheet, "A1:O140", "네이버웹툰");
const trackerRow = trackerRows[0] ?? 49;

trackerSheet.getRange(`A${trackerRow}:O${trackerRow}`).values = [[
  "S",
  "별도작성 필요",
  "네이버웹툰",
  title,
  "AI Storytelling Animation Production / Workflow R&D",
  "홈페이지 지원",
  deadlineSerial,
  "신입/경력·학력무관",
  96,
  "네이버 전용 자소서 5문항, INK/Loom-Pulso 선택 포트폴리오 패키지",
  "오늘 2026-06-21 23:59 전 네이버 전용 5문항 작성 후 홈페이지 지원",
  "INK를 서사형 대표작 후보로 두고, Loom/Pulso 실제 하네스(방향 정리→생성 설계→실행 게이트/검증 승인→편집·게시 장부)를 워크플로우 증거로 사용. Codex/Grok Build/Seedance/Grok/Suno를 작업 단위별로 나눠 쓰는 판단 기준 강조.",
  postingUrl,
  todaySerial,
  "정규직. 사전과제 가능성 있음. 공통 JobKorea 자소서와 분리해서 회사별자소서 5문항으로 관리.",
]];

const draftSheet = workbook.worksheets.getItem("회사별자소서");
const draftRows = findRowsByCompany(draftSheet, "A1:M160", "네이버웹툰");
const sectionRows = {
  "지원동기": [
    "작성대기",
    "네이버웹툰",
    title,
    "지원동기",
    "WEBTOON IP를 창작자 보조형 AI storytelling workflow로 확장. INK + Loom 실제 하네스 중심",
    null,
    null,
    "INK, Loom/Pulso, MUSINSA, ADSB",
    "홈페이지 지원",
    postingUrl,
    todaySerial,
    todaySerial,
    "공통 자기소개서와 분리. 네이버웹툰 전용 톤으로 작성.",
  ],
  "이미지 생성 툴/극복 사례": [
    "작성대기",
    "네이버웹툰",
    title,
    "이미지 생성 툴/극복 사례",
    "후보 대량 생성보다 방향 카드, 캐릭터/무드/구도 기준, 통과·보류·수정 분류 강조",
    null,
    null,
    "Loom/Pulso contact sheet, Grok candidate gallery, MUSINSA, ADSB",
    "홈페이지 지원",
    postingUrl,
    todaySerial,
    todaySerial,
    "이미지 툴명보다 결과 검토 기준과 재생성 기준을 앞세울 것.",
  ],
  "스토리텔링 영상 생성 툴/극복 사례": [
    "작성대기",
    "네이버웹툰",
    title,
    "스토리텔링 영상 생성 툴/극복 사례",
    "노래 섹션 분해, 80개 내외 프레임 동시 검토, 02b 후 Grok Build 프롬프트, Seedance/Grok 컷별 선택",
    null,
    null,
    "INK, Loom/Pulso, Pulso edit timeline, Grok gallery",
    "홈페이지 지원",
    postingUrl,
    todaySerial,
    todaySerial,
    "사용자가 컷 설계를 주도하고 Codex/Grok/Seedance는 생성·검토·압축·반복 도구로 설명.",
  ],
  "음악/TTS/효과음 생성 툴/극복 사례": [
    "작성대기",
    "네이버웹툰",
    title,
    "음악/TTS/효과음 생성 툴/극복 사례",
    "Suno와 Pulso track/world planning. 구간, 에너지, 축, 동작 타이밍을 영상 설계와 연결",
    null,
    null,
    "Loom/Pulso, Root Signal/Pulso track board, INK",
    "홈페이지 지원",
    postingUrl,
    todaySerial,
    todaySerial,
    "실제 사용 툴과 범위만 기재. 과장 금지.",
  ],
  "선택 자료": [
    "작성대기",
    "네이버웹툰",
    title,
    "선택 자료",
    "INK narrative proof + Loom workflow page + Pulso contact sheets/ledger를 묶은 AI storytelling proof package",
    null,
    null,
    "INK, Loom workflow page, Pulso edit timeline, platform review ledger",
    "홈페이지 지원",
    postingUrl,
    todaySerial,
    todaySerial,
    "제출 패키지는 네이버웹툰 전용. 공통 JobKorea 정본과 섞지 않음.",
  ],
};

for (const rowNumber of draftRows) {
  const section = draftSheet.getRange(`D${rowNumber}:D${rowNumber}`).values[0][0];
  if (sectionRows[section]) {
    draftSheet.getRange(`A${rowNumber}:M${rowNumber}`).values = [sectionRows[section]];
    delete sectionRows[section];
  }
}

const remaining = Object.values(sectionRows);
if (remaining.length > 0) {
  const used = draftSheet.getRange("A1:M160").values;
  let last = 4;
  used.forEach((row, index) => {
    if (row.some((value) => value !== null && value !== "" && value !== undefined)) {
      last = index + 1;
    }
  });
  const start = last + 1;
  draftSheet.getRange(`A${start}:M${start + remaining.length - 1}`).values = remaining;
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

for (const range of [`지원관리!A${trackerRow}:O${trackerRow}`, "회사별자소서!A39:M43"]) {
  const check = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 8,
    tableMaxCols: 15,
    tableMaxCellChars: 120,
  });
  console.log(check.ndjson);
}
