import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46192; // 2026-06-19

const intro = `AI로 콘텐츠의 의도와 장면 흐름을 잡고, 이미지·영상 산출물까지 만들어온 신입입니다. Loom에서는 13명 AI 아이돌을 하나의 IP로 보고 Root Signal/Pulso 트랙, 멤버 아카이브, Harne 투표, 스토리보드·영상 프롬프트를 확인 가능한 웹페이지로 묶었습니다. 레퍼런스는 보통 음악이나 숏츠에서 떠오른 장면으로 시작해 비슷한 트레일러와 영상을 더 찾고, 마음에 드는 컷을 모은 뒤 GPT로 스토리보드 방향을 여러 개 뽑아 이미지 후보를 만들어봅니다. 나온 후보는 표정, 실루엣, 컷 흐름, 전환 기준으로 나눠 보며 실제로 쓸 수 있는 방향만 남깁니다.`;

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");
const values = sheet.getRange("A1:M240").values;

let updated = false;
for (let index = 0; index < values.length; index += 1) {
  const row = values[index];
  if (row?.[1] === "지로" && row?.[3] === "원티드 간단소개") {
    sheet.getRange(`A${index + 1}:M${index + 1}`).values = [[
      "작성완료",
      "지로",
      "[인턴] [AI 크리에이티브팀] 그래픽 디자이너",
      "원티드 간단소개",
      "portfolio wording + actual reference process",
      intro,
      intro.length,
      "Loom/Pulso, Root Signal, Harne vote, GPT storyboard, image candidates",
      "Wanted",
      "https://www.wanted.co.kr/wd/359124",
      todaySerial,
      todaySerial,
      "AI-smell pass 적용: 포트폴리오 표현 기준, 원티드용 자연어로 재수정.",
    ]];
    updated = true;
    break;
  }
}

if (!updated) {
  throw new Error("지로 원티드 간단소개 행을 찾지 못했습니다.");
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "match",
  searchTerm: "확인 가능한 웹페이지",
  options: { maxResults: 10 },
  summary: "verify natural Jiro intro",
});
console.log(check.ndjson);
