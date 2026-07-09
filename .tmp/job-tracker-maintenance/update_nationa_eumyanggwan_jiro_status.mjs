import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46192; // 2026-06-19

const jiroTitle = "AI Creative / IP 비주얼 콘텐츠 기획 신입";
const jiroIntro = `저는 패션마케팅 전공을 바탕으로 AI를 리서치, 기획, 메시지 구조화, 이미지·영상·음악·웹 산출물 제작까지 연결해온 신입입니다. Loom/Pulso에서는 13명 AI 아이돌 IP를 구성하며 멤버별 정체성, 트랙 보드, 스토리보드와 영상 프롬프트, 이미지 후보 검토, SNS/팬 참여 흐름을 직접 설계했습니다. 무신사 AI 광고제와 ADSB 산학에서는 브랜드 무드와 메시지가 흩어지지 않도록 컷 흐름과 비주얼 방향을 잡고 AI 영상·이미지 결과물로 만들었습니다. 지로의 AI Creative팀에서는 좋은 레퍼런스를 찾고, 브랜드 전략에 맞는 AI 아이돌/IP 비주얼 콘셉트와 캠페인 에셋을 빠르게 실험하는 신입으로 기여하고 싶습니다.`;
const jiroShortIntro = `AI로 콘텐츠의 기획, 비주얼 방향, 이미지·영상 산출물 제작까지 연결해온 신입입니다. Loom/Pulso에서 13명 AI 아이돌 IP의 멤버 정체성, 트랙 보드, 스토리보드·영상 프롬프트, SNS/팬 참여 흐름을 설계했고, 무신사 AI 광고제와 ADSB 산학에서는 브랜드 메시지와 컷 흐름을 AI 영상·이미지 결과물로 만들었습니다. 지로에서는 AI 아이돌/IP 비주얼 콘셉트와 캠페인 에셋을 빠르게 실험하는 인턴으로 기여하고 싶습니다.`;

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const manage = workbook.worksheets.getItem("지원관리");
const values = manage.getRange("A1:O220").values;

function findRow(company, posting = null) {
  for (let index = 0; index < values.length; index += 1) {
    const row = values[index];
    if (row?.[2] === company && (!posting || row?.[3] === posting)) {
      return index + 1;
    }
  }
  return null;
}

const updates = [
  {
    company: "네이션에이",
    row: [
      "B",
      "보류",
      "네이션에이",
      "AI 콘텐츠 크리에이터",
      "AI Content Creator + Product/Growth Marketing",
      "Wanted 지원",
      "상시",
      "신입-경력 5년",
      82,
      "After Effects/모션그래픽 요구 범위 확인 필요",
      "After Effects 부담 때문에 현시점 보류",
      "직무 방향은 좋지만 AE 모션그래픽 실무 요구가 부담. AE 필수 아닌 콘텐츠 기획/AI 제작 중심으로 확인되면 재검토.",
      "https://www.wanted.co.kr/wd/365191",
      todaySerial,
      "사용자 피드백 반영: After Effects를 못 써서 보류.",
    ],
  },
  {
    company: "음양관",
    row: [
      "A",
      "미지원/후보",
      "음양관",
      "[인턴] AI 콘텐츠 서비스 퍼포먼스 마케터",
      "AI Content Service + Performance Marketing",
      "Wanted 지원",
      "상시",
      "신입/졸업예정 가능",
      86,
      "Wanted 프로필, 성과마케팅 초심자형 간단소개",
      "지로 이후 지원 여부 판단",
      "가능은 함. 다만 퍼포먼스 광고 집행/지표 분석 중심이므로 경험을 과장하지 말고 AI 콘텐츠 소재 기획, 반응 관찰, 메시지 개선을 배우는 신입으로 써야 함.",
      "https://www.wanted.co.kr/wd/363507",
      todaySerial,
      "전공·경력 무관, 신입/졸업예정 가능. 인턴 3개월 정규직전환형.",
    ],
  },
  {
    company: "지로",
    posting: "[인턴] [AI 크리에이티브팀] 그래픽 디자이너",
    row: [
      "S",
      "별도작성 필요",
      "지로",
      "[인턴] [AI 크리에이티브팀] 그래픽 디자이너",
      "AI Creative Visual/IP Planning",
      "Wanted 지원",
      "상시",
      "신입/인턴",
      89,
      "Wanted 프로필, 지로용 간단소개",
      "지금 지원: 제목/간단소개 교체 후 제출",
      "AI K-POP 아이돌 프로젝트, 비주얼 에셋, 글로벌 마케팅 광고 소재를 다루는 팀. 디자이너 경력으로 과장하지 말고 AI 아이돌/IP 비주얼 콘셉트와 캠페인 에셋 기획·제작 보조로 포지셔닝.",
      "https://www.wanted.co.kr/wd/359124",
      todaySerial,
      "공고상 AI 툴 경험은 필수 아님. 좋은 레퍼런스 기준, 미감, AI Creative 관심이 핵심.",
    ],
  },
];

for (const update of updates) {
  const rowNumber = findRow(update.company, update.posting);
  if (!rowNumber) {
    throw new Error(`${update.company} row not found`);
  }
  manage.getRange(`A${rowNumber}:O${rowNumber}`).values = [update.row];
}

const drafts = workbook.worksheets.getItem("회사별자소서");
const draftValues = drafts.getRange("A1:M180").values;
function firstBlankRow(rows, startRow) {
  let last = startRow - 1;
  for (let index = startRow - 1; index < rows.length; index += 1) {
    if (rows[index]?.some((value) => value !== null && value !== "" && value !== undefined)) {
      last = index + 1;
    }
  }
  return last + 1;
}

const existingDraftRows = draftValues
  .map((row, index) => ({ row, number: index + 1 }))
  .filter(({ row }) => row?.[1] === "지로" && row?.[2] === "[인턴] [AI 크리에이티브팀] 그래픽 디자이너");

for (const { number } of existingDraftRows) {
  drafts.getRange(`A${number}:M${number}`).clear();
}

const insertRow = firstBlankRow(drafts.getRange("A1:M180").values, 5);
const draftRows = [
  [
    "작성완료",
    "지로",
    "[인턴] [AI 크리에이티브팀] 그래픽 디자이너",
    "원티드 이력서 제목",
    "AI Creative / IP visual planning",
    jiroTitle,
    jiroTitle.length,
    "Loom/Pulso, MUSINSA, ADSB",
    "Wanted",
    "https://www.wanted.co.kr/wd/359124",
    todaySerial,
    todaySerial,
    "지로 즉시지원용. 디자이너 경력 과장 없이 AI Creative/IP 비주얼 기획 중심.",
  ],
  [
    "작성완료",
    "지로",
    "[인턴] [AI 크리에이티브팀] 그래픽 디자이너",
    "원티드 간단소개",
    "AI idol/IP visual concept + campaign assets",
    jiroIntro,
    jiroIntro.length,
    "Loom/Pulso, MUSINSA, ADSB",
    "Wanted",
    "https://www.wanted.co.kr/wd/359124",
    todaySerial,
    todaySerial,
    "길이 여유 있을 때 사용. AI 아이돌/IP와 캠페인 에셋 포지셔닝.",
  ],
  [
    "작성완료",
    "지로",
    "[인턴] [AI 크리에이티브팀] 그래픽 디자이너",
    "원티드 간단소개 짧은버전",
    "AI Creative short intro",
    jiroShortIntro,
    jiroShortIntro.length,
    "Loom/Pulso, MUSINSA, ADSB",
    "Wanted",
    "https://www.wanted.co.kr/wd/359124",
    todaySerial,
    todaySerial,
    "글자수 제한/빠른 제출용.",
  ],
];

drafts.getRange(`A${insertRow}:M${insertRow + draftRows.length - 1}`).values = draftRows;

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

for (const term of ["네이션에이", "음양관", "지로"]) {
  const check = await workbook.inspect({
    kind: "match",
    searchTerm: term,
    options: { maxResults: 20 },
    summary: `verify ${term}`,
  });
  console.log(check.ndjson);
}
