import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46192; // 2026-06-19

const revisedIntro = `AI로 콘텐츠의 기획, 비주얼 방향, 이미지·영상 산출물 제작까지 연결해온 신입입니다. 저는 레퍼런스를 찾을 때 먼저 음악이나 숏츠에서 떠오르는 분위기와 장면을 잡고, 비슷한 영상·트레일러·무드가 있는 레퍼런스를 이어서 찾습니다. 멋있다고 느낀 장면들을 모은 뒤 GPT로 스토리보드 방향을 여러 개 뽑아보고, 이미지 후보를 만들어 보면서 실제로 제작 가능한 비주얼 방향을 좁힙니다. Loom/Pulso에서는 13명 AI 아이돌 IP의 멤버 정체성, 트랙 보드, 스토리보드·영상 프롬프트, SNS/팬 참여 흐름을 설계했습니다. 지로에서는 AI 아이돌/IP 비주얼 콘셉트와 캠페인 에셋을 빠르게 실험하는 인턴으로 기여하고 싶습니다.`;

const referenceAnswer = `저는 처음부터 완성된 레퍼런스 보드를 만드는 편은 아닙니다. 보통 음악을 듣거나 숏츠 영상을 보다가 장면의 분위기나 리듬이 먼저 떠오르면, 그 감각과 비슷한 영상, 트레일러, 쇼츠, 무드 레퍼런스를 이어서 찾습니다. 그중 멋있다고 느낀 장면들을 모아두고, GPT로 스토리보드 방향을 여러 개 뽑아보게 합니다. 이후 이미지 후보를 몇 장 만들어보면 이 방향이 실제로 제작 가능한지, 캐릭터나 IP의 분위기와 맞는지 얼추 판단이 됩니다. 그래서 제 기준은 레퍼런스를 많이 모으는 것보다, 떠오른 감각을 실제 이미지와 컷 흐름으로 바꿔보며 쓸 수 있는 방향인지 빠르게 확인하는 쪽에 가깝습니다.`;

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");
const values = sheet.getRange("A1:M220").values;

function updateRow(kind, text, summary, evidence, note) {
  for (let index = 0; index < values.length; index += 1) {
    const row = values[index];
    if (row?.[1] === "지로" && row?.[3] === kind) {
      sheet.getRange(`A${index + 1}:M${index + 1}`).values = [[
        "작성완료",
        "지로",
        "[인턴] [AI 크리에이티브팀] 그래픽 디자이너",
        kind,
        summary,
        text,
        text.length,
        evidence,
        kind.includes("답변") ? "Wanted/면접" : "Wanted",
        "https://www.wanted.co.kr/wd/359124",
        todaySerial,
        todaySerial,
        note,
      ]];
      return true;
    }
  }
  return false;
}

const updatedIntro = updateRow(
  "원티드 간단소개",
  revisedIntro,
  "music/shorts-led reference process + AI storyboard",
  "Loom/Pulso, MUSINSA, ADSB, GPT storyboard, image candidates",
  "사용자 실제 방식 반영: 음악/숏츠에서 감을 잡고 유사 레퍼런스 확장, GPT 스토리보드와 이미지 후보로 방향 검증.",
);

const updatedReference = updateRow(
  "자격요건 답변 - 레퍼런스 찾는 법",
  referenceAnswer,
  "actual reference discovery process",
  "음악, 숏츠, 트레일러, GPT storyboard, image candidates",
  "사용자 실제 방식 반영. 과도한 분석 프레임 제거.",
);

if (!updatedIntro || !updatedReference) {
  throw new Error(`지로 문안 행 업데이트 실패: intro=${updatedIntro}, reference=${updatedReference}`);
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "match",
  searchTerm: "음악이나 숏츠",
  options: { maxResults: 20 },
  summary: "verify Jiro actual reference method",
});
console.log(check.ndjson);
