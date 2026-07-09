import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46192; // 2026-06-19

const intro = `AI로 콘텐츠의 기획, 비주얼 방향, 이미지·영상 산출물 제작까지 연결해온 신입입니다. 저는 음악이나 숏츠에서 먼저 떠오른 분위기와 장면을 잡고, 비슷한 영상·트레일러·무드 레퍼런스를 이어서 찾습니다. 이후 GPT로 스토리보드 방향을 여러 개 뽑고 이미지 후보를 만들어 보며, 표정·실루엣·컷·전환 방식으로 분류해 실제 제작 가능한 비주얼 방향을 좁힙니다. Loom/Pulso에서는 13명 AI 아이돌 IP의 멤버 정체성, 트랙 보드, 스토리보드·영상 프롬프트, SNS/팬 참여 흐름을 설계했습니다. 지로에서는 AI 아이돌/IP 비주얼 콘셉트와 캠페인 에셋을 빠르게 실험하는 인턴으로 기여하고 싶습니다.`;

const answer = `저는 보통 음악을 듣거나 숏츠를 보다가 먼저 분위기와 장면이 떠오릅니다. 그다음 비슷한 무드의 영상, 트레일러, 쇼츠, 이미지 레퍼런스를 이어서 찾고, 멋있다고 느낀 것들을 모아둡니다. 여기서 바로 확정하지 않고 GPT로 스토리보드 방향을 여러 개 뽑아보고, 이미지 후보를 몇 장 만들어봅니다. 후보가 나오면 표정, 실루엣, 컷 구성, 전환 방식처럼 실제 제작에 영향을 주는 기준으로 나눠서 봅니다. 이 장면은 캐릭터 성격을 보여주는 데 쓰고, 저 장면은 후킹 컷이나 전환 컷으로 쓰는 식으로 분류하면서, 감으로 떠오른 아이디어를 실제로 만들 수 있는 비주얼 방향으로 좁혀갑니다.`;

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");
const values = sheet.getRange("A1:M220").values;

function update(kind, text, summary, evidence, note) {
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

const okIntro = update(
  "원티드 간단소개",
  intro,
  "music/shorts reference expansion + storyboard/image classification",
  "Loom/Pulso, GPT storyboard, image candidates, reference classification",
  "표정·실루엣·컷·전환 분류를 간단소개에 짧게 반영.",
);

const okAnswer = update(
  "자격요건 답변 - 레퍼런스 찾는 법",
  answer,
  "actual reference process with classification",
  "음악, 숏츠, 트레일러, GPT storyboard, image candidates",
  "면접/추가질문용. 감각 출발점과 이후 분류 과정을 함께 설명.",
);

if (!okIntro || !okAnswer) {
  throw new Error(`지로 문안 업데이트 실패: intro=${okIntro}, answer=${okAnswer}`);
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "match",
  searchTerm: "표정·실루엣·컷·전환",
  options: { maxResults: 20 },
  summary: "verify Jiro intro classification wording",
});
console.log(check.ndjson);
