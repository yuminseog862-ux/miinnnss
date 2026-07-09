import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46192; // 2026-06-19
const url = "https://www.wanted.co.kr/wd/316143?recommender_key=jDPXye__oeOBKO";
const company = "아루(Arooo)";
const posting = "[인턴] 콘텐츠 마케팅 (전환형)";
const wantedIntro = `AI Creative 기반 콘텐츠 마케팅 신입입니다. 무신사 AI 광고제에서 30초 AI 숏폼 광고의 메시지와 컷 흐름을 설계했고, ADSB 산학협력에서는 패션 브랜드 AI 숏폼 영상을 제작했습니다. Loom/Pulso에서는 AI 아이돌 IP를 음악·영상·SNS 루프로 확장하며 콘텐츠가 실제 반응으로 이어지는 구조를 실험했습니다. 아루에서는 여성 웰니스라는 민감하지만 성장하는 카테고리를 감정과 신뢰 중심의 숏폼/광고 소재로 풀고, 캠페인 성과를 보며 개선하는 콘텐츠 마케팅 인턴으로 기여하고 싶습니다.`;

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
const trackerValues = tracker.getRange("A1:O240").values;
let trackerRow = null;
for (let index = 0; index < trackerValues.length; index += 1) {
  if (trackerValues[index]?.[2] === company && trackerValues[index]?.[3] === posting) {
    trackerRow = index + 1;
    break;
  }
}
if (!trackerRow) trackerRow = firstBlankRow(trackerValues, 9);

tracker.getRange(`A${trackerRow}:O${trackerRow}`).values = [[
  "B",
  "미지원/후보",
  company,
  posting,
  "Content/Performance Marketing Intern",
  "Wanted 지원",
  "상시",
  "신입/경력 0-1년",
  82,
  "Wanted 프로필, 포트폴리오, 아루용 간단소개",
  "민감 카테고리 수용 가능하면 지원",
  "AI 직접성은 없지만 신입 전환형, 숏폼 광고 콘텐츠 기획·제작, 인플루언서 커뮤니케이션, 캠페인 성과 분석까지 포함. AI Creative 포트폴리오를 퍼포먼스 콘텐츠 마케팅으로 돌려 쓰기 좋음.",
  url,
  todaySerial,
  "2026-06-19 확인. 아루/자기만의방/여성 웰니스. 인턴 3개월 후 전환형. 카테고리 민감도 확인 필요.",
]];

const drafts = workbook.worksheets.getItem("회사별자소서");
const draftValues = drafts.getRange("A1:M240").values;
let draftRow = null;
for (let index = 0; index < draftValues.length; index += 1) {
  if (draftValues[index]?.[1] === company && draftValues[index]?.[3] === "Wanted 간단소개") {
    draftRow = index + 1;
    break;
  }
}
if (!draftRow) draftRow = firstBlankRow(draftValues, 5);

drafts.getRange(`A${draftRow}:M${draftRow}`).values = [[
  "작성완료",
  company,
  posting,
  "Wanted 간단소개",
  "AI Creative 콘텐츠 마케팅 신입 | 숏폼 광고·캠페인 소재 기획",
  wantedIntro,
  wantedIntro.length,
  "MUSINSA, ADSB, Loom/Pulso",
  "Wanted",
  url,
  todaySerial,
  todaySerial,
  "아루용. AI 직무가 아니므로 여성 웰니스/신뢰/감정 기반 광고 소재와 캠페인 성과 개선으로 포지셔닝.",
]];

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

for (const range of [`지원관리!A${trackerRow}:O${trackerRow}`, `회사별자소서!A${draftRow}:M${draftRow}`]) {
  const check = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 1,
    tableMaxCols: 13,
  });
  console.log(check.ndjson);
}
