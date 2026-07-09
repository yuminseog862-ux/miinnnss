import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46192; // 2026-06-19

const revisedIntro = `AI로 콘텐츠의 기획, 비주얼 방향, 이미지·영상 산출물 제작까지 연결해온 신입입니다. 레퍼런스를 볼 때는 웹툰·애니·영화 트레일러·쇼츠/MAD 영상에서 표정, 실루엣, 조명, 컷 전환, 초반 훅이 어떤 역할을 하는지 나눠 봅니다. Loom/Pulso에서는 13명 AI 아이돌 IP의 멤버 정체성, 트랙 보드, 스토리보드·영상 프롬프트, SNS/팬 참여 흐름을 설계했고, 막히는 장면은 Grok Imagine으로 썸네일 후보를 여러 개 만들어 방향성을 비교했습니다. 지로에서는 AI 아이돌/IP 비주얼 콘셉트와 캠페인 에셋을 빠르게 실험하는 인턴으로 기여하고 싶습니다.`;

const referenceAnswer = `저는 레퍼런스를 단순히 예쁜 이미지 모음으로 보지 않고, 장면이 해야 하는 역할별로 나눠 봅니다. 웹툰과 애니에서는 캐릭터의 실루엣, 표정, 포즈가 한 컷에서 성격을 어떻게 보여주는지 보고, 영화와 트레일러에서는 조명, 카메라 거리, 컷 전환이 감정을 어떻게 쌓는지 봅니다. 쇼츠나 MAD 영상은 짧은 시간 안에 시선을 붙잡는 훅, 리듬, 전환 방식을 확인할 때 봅니다. 그래도 방향이 막히면 Grok Imagine 같은 AI 툴로 rough thumbnail을 여러 개 뽑아보고, 어떤 후보가 IP의 성격과 브랜드 전략에 맞는지 비교하면서 다시 레퍼런스 기준을 좁힙니다.`;

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");
const values = sheet.getRange("A1:M200").values;

function firstBlankRow(rows, startRow) {
  let last = startRow - 1;
  for (let index = startRow - 1; index < rows.length; index += 1) {
    if (rows[index]?.some((value) => value !== null && value !== "" && value !== undefined)) {
      last = index + 1;
    }
  }
  return last + 1;
}

let updated = false;
for (let index = 0; index < values.length; index += 1) {
  const row = values[index];
  if (row?.[1] === "지로" && row?.[3] === "원티드 간단소개") {
    sheet.getRange(`A${index + 1}:M${index + 1}`).values = [[
      "작성완료",
      "지로",
      "[인턴] [AI 크리에이티브팀] 그래픽 디자이너",
      "원티드 간단소개",
      "reference curation + AI idol/IP visual concept",
      revisedIntro,
      revisedIntro.length,
      "Loom/Pulso, MUSINSA, ADSB, Grok Imagine",
      "Wanted",
      "https://www.wanted.co.kr/wd/359124",
      todaySerial,
      todaySerial,
      "자격요건의 '좋은 레퍼런스를 찾는 자신만의 노하우와 기준' 대응 보강.",
    ]];
    updated = true;
  }
}

const hasReferenceAnswer = values.some((row) => row?.[1] === "지로" && row?.[3] === "자격요건 답변 - 레퍼런스 찾는 법");
if (!hasReferenceAnswer) {
  const insertRow = firstBlankRow(sheet.getRange("A1:M200").values, 5);
  sheet.getRange(`A${insertRow}:M${insertRow}`).values = [[
    "작성완료",
    "지로",
    "[인턴] [AI 크리에이티브팀] 그래픽 디자이너",
    "자격요건 답변 - 레퍼런스 찾는 법",
    "cross-media reference method",
    referenceAnswer,
    referenceAnswer.length,
    "웹툰, 애니, 영화 트레일러, 쇼츠/MAD, Grok Imagine",
    "Wanted/면접",
    "https://www.wanted.co.kr/wd/359124",
    todaySerial,
    todaySerial,
    "면접/추가질문용. '만들어재낀다'를 rough thumbnail 후보 생성/비교로 정리.",
  ]];
}

if (!updated) {
  throw new Error("지로 원티드 간단소개 행을 찾지 못했습니다.");
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "match",
  searchTerm: "레퍼런스를 볼 때는",
  options: { maxResults: 20 },
  summary: "verify Jiro reference method draft",
});
console.log(check.ndjson);
