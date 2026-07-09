import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const backupPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.before-self-intro-tone-2026-07-09.xlsx";
const outputDir = "/Users/yuminseog/portfolio/.tmp/solomoncode-tracker";
const today = new Date("2026-07-09T00:00:00");

const titleText = "AI로 숏폼 광고·패션 영상·AI 아이돌 음악·영상 콘텐츠를 기획하고 제작한 경험";

const longText = `[성장과정]

군 복무 중 수능을 준비했고, 전역 직후 대학에 입학했습니다. 늦게 시작한 만큼 오래 준비만 하기보다 직접 만들어 보며 제 방향을 찾으려 했습니다. 패션마케팅을 공부하면서 브랜드가 어떤 분위기와 이야기로 기억되는지에 관심이 생겼고, 생성형 AI를 접한 뒤에는 그 관심을 실제 콘텐츠와 서비스 형태로 옮겨 보기 시작했습니다. AI 숏폼 광고, 패션 브랜드 영상, AI 아이돌 음악·영상, 웹 기반 프로젝트를 만들며 기획은 문장으로 끝나는 것이 아니라 사용자가 보고 반응할 수 있는 형태가 되었을 때 힘이 생긴다는 점을 배웠습니다.

[직무 관련 경험]

저는 AI를 활용해 숏폼 광고, 패션 영상, AI 아이돌 음악·영상 콘텐츠를 기획하고 제작해왔습니다. 작업을 시작할 때는 먼저 타깃이 무엇을 기억해야 하는지 기준을 잡고, 그 기준에 맞춰 메시지 구조, 스토리보드, 장면 흐름을 설계합니다. 이후 AI 이미지·영상 도구로 후보를 만들고, 의도한 메시지와 컷 흐름에 맞는지 검수하며 실제 콘텐츠로 옮깁니다. 단순히 보기 좋은 장면보다, 전달하려는 메시지가 영상 안에서 분명하게 남는지를 중요하게 봅니다.

[주요 경험 및 직무 역량]

Loom 개인 프로젝트에서는 13명 AI 아이돌 IP를 음악, 영상, 숏폼 클립, 웹페이지가 연결된 콘텐츠로 구성했습니다. 곡 방향, 멤버별 정체성, 장면 흐름, 스토리보드, 숏폼 확장 방식을 직접 기획했고, 뮤직비디오형 코어 영상에서 멤버/댄스 장면을 컷다운해 TikTok, X, YouTube용 클립으로 확장하는 흐름을 설계했습니다. 이 경험은 AI 영상 결과물 자체보다, 콘텐츠 목적에 맞는 컷을 만들고 선별하는 제작 기준을 세워본 사례입니다.

무신사 AI 광고제에서는 3인 팀으로 30초 AI 숏폼 광고 제출본을 제작했습니다. "편견을 벗다, 다양성을 입다, 무진장을 만나다"라는 메시지를 먼저 정하고, GPT로 광고 메시지와 컷 흐름을 정리한 뒤 GPT Image로 장면별 스토리보드와 키프레임 후보를 만들었습니다. 이후 Seedance를 활용해 실제 영상 컷을 제작하며 메시지, 인물 표현, 장면 전환이 하나의 광고 흐름으로 이어지도록 검수했습니다.

ADSB/Andersson Bell 산학공동연구에서는 패션 브랜드의 무드와 스타일을 짧은 AI 영상으로 전환하는 프로젝트에 참여했습니다. Midjourney, Gemini, Nano Banana, Photoshop, Kling 등을 활용해 브랜드 무드에 맞는 이미지와 영상 클립 후보를 만들고, 화면 톤, 스타일, 컷 연결을 비교하며 조정했습니다. 이를 통해 AI 영상 툴을 단순히 사용하는 데서 그치지 않고, 브랜드 목적과 콘텐츠 메시지에 맞게 결과물을 조정하는 경험을 쌓았습니다.

[AI 활용 방식]

Loom에서는 생성형 AI를 역할별로 나눠, 자동화에 가깝게 반복할 수 있는 반자동 제작 루프로 활용했습니다. 먼저 LLM으로 콘텐츠 방향, 캐릭터의 감정, 장면 의도, 컷 흐름을 기획하고 구체화했습니다. 이후 coding agent의 skill을 활용해 기획 내용을 이미지 생성용 프롬프트와 생성 기준으로 정리하고, API 기반 생성 방식으로 여러 이미지 후보를 일괄 제작했습니다. 생성된 이미지는 contact sheet처럼 모아 의도한 인상, 캐릭터 일관성, 장면 흐름에 맞는지 검토했고, 필요한 경우 수정 방향을 정리해 후보를 다시 조정했습니다. 이미지 방향이 잡힌 뒤에는 coding agent의 skill로 영상화 프롬프트를 다시 구성하고, Grok Imagine으로 단편 영상과 완성형 컷 후보를 제작했습니다. 마지막으로 생성된 클립을 모아 CapCut과 coding agent를 활용해 컷 정리와 편집 확인을 진행했습니다. 이 과정을 통해 기획, 프롬프트 생성, API 기반 이미지 후보 생성, 검토와 수정, 영상화, 클립 편집으로 이어지는 반복 가능한 AI 영상 제작 루프를 구축했습니다.

[지원 직무와의 연결]

솔로몬코드의 공고는 AI 영상 생성 및 합성 콘텐츠 제작, 웹예능·숏폼·브랜드 영상용 AI 영상 기획/제작, AI 툴 리서치와 제작 방식 고도화를 요구합니다. 저는 프로젝트 기반으로 프롬프트 설계, AI 이미지·영상 후보 생성, 결과물 개선, 컷 연결과 편집 확인까지 직접 실험해왔습니다. 입사 후에는 결과물을 빠르게 뽑는 데서 멈추지 않고, 콘텐츠 목적과 영상 문법에 맞는 컷을 선별하고 개선해 웹예능·숏폼·브랜드 영상 제작에 기여하겠습니다.`;

const shortText = `AI Creative 기반 콘텐츠/브랜드 마케팅 신입으로, AI를 기획, 프롬프트 설계, 이미지·영상 후보 생성, 결과물 검수까지 이어지는 작업 방식으로 사용해왔습니다. Loom에서는 LLM과 coding agent skill, API 기반 이미지 생성, Grok Imagine, CapCut을 활용해 기획, 프롬프트 생성, 후보 생성, 검토와 수정, 영상화, 클립 편집으로 이어지는 반복 가능한 AI 영상 제작 루프를 구축했습니다. 무신사 AI 광고제에서는 GPT Image로 스토리보드와 키프레임 후보를 만들고 Seedance로 영상 컷을 제작했으며, ADSB 산학공동연구에서는 Midjourney, Gemini, Nano Banana, Photoshop, Kling으로 브랜드 무드에 맞는 이미지·영상 후보를 제작했습니다. 솔로몬코드에서는 웹예능·숏폼·브랜드 영상의 목적에 맞게 AI 영상 후보를 빠르게 만들고 선별·개선하는 신입으로 기여하겠습니다.`;

await fs.copyFile(workbookPath, backupPath);

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const archive = workbook.worksheets.getItem("회사별자소서");
const used = archive.getUsedRange();
const values = used.values;

let titleRow = -1;
let longRow = -1;
let shortRow = -1;
for (let i = 0; i < values.length; i += 1) {
  const row = values[i];
  if (row?.[1] === "㈜솔로몬코드" && row?.[3] === "자소서 제목") titleRow = i;
  if (row?.[1] === "㈜솔로몬코드" && row?.[3] === "잡코리아 자기소개서") longRow = i;
  if (row?.[1] === "㈜솔로몬코드" && row?.[3] === "짧은 버전") shortRow = i;
}

if (titleRow < 0 || longRow < 0 || shortRow < 0) {
  throw new Error(`Could not find all Solomoncode rows: ${JSON.stringify({ titleRow, longRow, shortRow })}`);
}

const updates = [
  [titleRow, titleText, titleText.length, "Loom, MUSINSA, ADSB", "솔로몬코드 최종 검토 버전 제목."],
  [longRow, longText, longText.length, "Loom, MUSINSA, ADSB", "2026-07-09 솔로몬코드 공고 최종 검토 반영: AI 영상 생성/합성, 프롬프트 설계, 결과물 개선, 툴 리서치/제작 방식 고도화 중심."],
  [shortRow, shortText, shortText.length, "Loom, MUSINSA, ADSB", "글자수 제한 또는 간단 자기소개 칸용. 솔로몬코드 최종 검토 버전."],
];

for (const [rowIndex, text, chars, portfolio, note] of updates) {
  archive.getCell(rowIndex, 5).values = [[text]];
  archive.getCell(rowIndex, 6).values = [[chars]];
  archive.getCell(rowIndex, 7).values = [[portfolio]];
  archive.getCell(rowIndex, 11).values = [[today]];
  archive.getCell(rowIndex, 12).values = [[note]];
}
archive.getRangeByIndexes(titleRow, 10, shortRow - titleRow + 1, 2).setNumberFormat("yyyy-mm-dd");

const management = workbook.worksheets.getItem("지원관리");
const mgmtUsed = management.getUsedRange();
const mgmtValues = mgmtUsed.values;
let solomonRowIndex = -1;
for (let i = 0; i < mgmtValues.length; i += 1) {
  const row = mgmtValues[i];
  if (row?.[2] === "㈜솔로몬코드" || String(row?.[12] ?? "").includes("49356104")) {
    solomonRowIndex = i;
    break;
  }
}
if (solomonRowIndex >= 0) {
  management.getCell(solomonRowIndex, 9).values = [["회사별 자소서 작성완료, 잡코리아 이력서/AI 영상 포트폴리오 확인"]];
  management.getCell(solomonRowIndex, 10).values = [["사용자 검토 후 붙여넣고 지원"]];
  management.getCell(solomonRowIndex, 13).values = [[today]];
  management.getCell(solomonRowIndex, 14).values = [["2026-07-09 솔로몬코드 공고 최종 검토 반영: AI 영상 생성/합성, 프롬프트 설계, 결과물 개선, 툴 리서치/제작 방식 고도화 중심. 실제 제출은 사용자 확인 후 진행."]];
  management.getCell(solomonRowIndex, 15).values = [["자소서 작성완료"]];
  management.getCell(solomonRowIndex, 13).setNumberFormat("yyyy-mm-dd");
}

for (const badPhrase of ["가장 먼저 말씀", "끌린 부분", "처음 보는 사람", "Loom/Pulso", "Pulso", "Root Signal", "INK 계열", "후렴", "보컬 진입"]) {
  if (longText.includes(badPhrase) || shortText.includes(badPhrase)) {
    throw new Error(`Bad phrase still present: ${badPhrase}`);
  }
}

const check = await workbook.inspect({
  kind: "table",
  sheetId: "회사별자소서",
  range: `A${titleRow + 1}:M${shortRow + 1}`,
  maxChars: 11000,
  tableMaxRows: 3,
  tableMaxCols: 13,
  tableMaxCellChars: 700,
});
console.log("UPDATED_ROWS");
console.log(check.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
console.log("ERROR_SCAN");
console.log(errors.ndjson);

const preview = await workbook.render({
  sheetName: "회사별자소서",
  range: `A${Math.max(4, titleRow - 2)}:M${shortRow + 1}`,
  scale: 1,
  format: "png",
});
await fs.writeFile(`${outputDir}/self-intro-tone-solomoncode-preview.png`, new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

console.log(JSON.stringify({
  updatedWorkbook: workbookPath,
  backup: backupPath,
  titleRow: titleRow + 1,
  longRow: longRow + 1,
  shortRow: shortRow + 1,
  titleChars: titleText.length,
  longChars: longText.length,
  shortChars: shortText.length,
}, null, 2));
