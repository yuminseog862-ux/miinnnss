import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46192; // 2026-06-19

const title = "AI Creative / IP 콘텐츠 기획 신입";

const intro = `AI로 콘텐츠의 의도와 장면 흐름을 잡고, 이미지·영상 산출물까지 만들어온 신입입니다. Loom에서는 13명 AI 아이돌을 하나의 IP로 보고 Root Signal/Pulso 트랙, 멤버 아카이브, Harne 투표, 스토리보드·영상 프롬프트를 웹 proof surface로 묶었습니다. 레퍼런스는 보통 음악이나 숏츠에서 떠오른 장면으로 시작해 비슷한 트레일러와 영상을 더 찾고, 마음에 드는 컷을 모은 뒤 GPT로 스토리보드 방향을 여러 개 뽑아 이미지 후보를 만들어봅니다. 나온 후보는 표정, 실루엣, 컷 흐름, 전환 기준으로 나눠 보며 실제로 쓸 수 있는 방향만 남깁니다.`;

const interviewAnswer = `저는 보통 음악을 듣거나 숏츠를 보다가 먼저 분위기와 장면이 떠오릅니다. 그다음 비슷한 무드의 트레일러, 쇼츠, 이미지 레퍼런스를 더 찾아보고, 멋있다고 느낀 컷을 모아둡니다. 거기서 바로 확정하지 않고 GPT로 스토리보드 방향을 여러 개 뽑아보고, 이미지 후보를 몇 장 만들어봅니다. 후보가 나오면 표정, 실루엣, 컷 흐름, 전환 방식처럼 실제 제작에 영향을 주는 기준으로 나눠서 봅니다. 이 컷은 캐릭터 성격을 보여주는 데 쓰고, 저 컷은 후킹이나 전환에 쓰는 식으로 정리하면서 감으로 떠오른 아이디어를 실제로 만들 수 있는 방향으로 좁혀갑니다.`;

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");
const values = sheet.getRange("A1:M240").values;

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

const okTitle = update(
  "원티드 이력서 제목",
  title,
  "portfolio-grounded AI Creative/IP title",
  "Loom/Pulso, MUSINSA, ADSB",
  "과한 비주얼/디자인 포지셔닝을 낮추고 포트폴리오 표현 기준으로 수정.",
);

const okIntro = update(
  "원티드 간단소개",
  intro,
  "portfolio wording + actual reference process",
  "Loom/Pulso, Root Signal, Harne vote, GPT storyboard, image candidates",
  "AI-smell pass 적용: JD 과잉 문장 제거, 포트폴리오 원문과 사용자 실제 설명 중심.",
);

const okAnswer = update(
  "자격요건 답변 - 레퍼런스 찾는 법",
  interviewAnswer,
  "actual reference process, natural wording",
  "음악, 숏츠, 트레일러, GPT storyboard, image candidates",
  "면접/추가질문용. 사용자가 실제로 말한 순서와 표현을 보존.",
);

if (!okTitle || !okIntro || !okAnswer) {
  throw new Error(`지로 문안 업데이트 실패: title=${okTitle}, intro=${okIntro}, answer=${okAnswer}`);
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "match",
  searchTerm: "AI로 콘텐츠의 의도와 장면 흐름",
  options: { maxResults: 20 },
  summary: "verify portfolio-voice Jiro intro",
});
console.log(check.ndjson);
