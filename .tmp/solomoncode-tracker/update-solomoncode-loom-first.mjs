import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const backupPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.before-loom-first-2026-07-09.xlsx";
const outputDir = "/Users/yuminseog/portfolio/.tmp/solomoncode-tracker";
const today = new Date("2026-07-09T00:00:00");

const titleText = "트랙 분석부터 컷 검수까지 AI 영상 제작 루프를 구축한 지원자";

const longText = `저는 AI Creative 기반 콘텐츠/브랜드 마케팅 신입으로, 생성형 AI를 단순 제작 보조툴이 아니라 리서치, 메시지 구조화, 스토리보드, 이미지·영상 산출물 제작, 검수와 공개 준비까지 이어지는 작업 방식으로 사용해왔습니다. 특히 영상에서는 한 컷을 빨리 뽑는 것보다, 노래와 메시지를 어떤 장면 흐름으로 나눌지, 어떤 후보가 실제 편집에 쓸 수 있는 컷인지, 최종적으로 사용자가 어떤 인상을 가져가야 하는지를 먼저 봅니다.

가장 먼저 말씀드리고 싶은 사례는 Loom 프로젝트입니다. Loom은 13명 AI 아이돌 IP를 바탕으로 멤버 정체성, 트랙, 뮤직비디오형 영상, 숏폼, 웹페이지를 연결한 개인 포트폴리오 프로젝트입니다. Root Signal, Pulso 트랙, INK 계열 MV 프리뷰까지 포함해 3개의 뮤직비디오형 콘텐츠를 만들며, 단순히 영상을 생성하는 데서 끝내지 않고 트랙 분석부터 편집 전 검수까지의 제작 과정을 정리했습니다. 먼저 Suno로 만든 노래의 후렴, 보컬 진입, 에너지 전환 구간을 표시하고, LLM과 Codex로 가사·구간·장면 메모를 정리했습니다. 이후 GPT Image와 Grok Imagine으로 멤버 얼굴, 의상, 손동작, 오브젝트가 유지되는 시작 프레임 후보를 만들고, 짧은 영상 테스트를 반복하며 얼굴 흔들림, 카메라 방향, 컷 가능성을 확인했습니다. 마지막에는 타임코드, contact sheet, 컷 길이, 컷 연결, 렌더 비율, 업로드 상태를 확인하며 남길 컷과 다시 뽑을 컷을 나누었습니다.

현재 포트폴리오에는 이 과정을 Loom 제작 과정 페이지로 따로 정리해두었습니다. 제작 순서 맵, 작업 기록, Pulso 타임라인 체크, Grok 후보 갤러리, 플랫폼 업로드 체크, 후보 contact sheet를 통해 어떤 기준으로 AI 영상 후보를 고르고 버렸는지 보여주고 있습니다. 제 강점은 AI 결과물을 많이 만드는 것보다, 트랙·프레임·클립·업로드 단계별 기준을 세워 실제 편집과 공개에 쓸 수 있는 결과물만 선별하는 데 있습니다.

이 경험은 브랜드 숏폼 프로젝트에서도 이어졌습니다. 무신사 AI 광고제에서는 3인 팀으로 30초 AI 숏폼 광고를 제작하며 "편견을 벗다, 다양성을 입다, 무진장을 만나다"라는 메시지를 장면 흐름과 주요 스토리보드로 구체화했습니다. Seedance, Kling, Grok 기반 생성 결과를 검토하며 인물, 스타일, 화면 톤, 전환 리듬이 캠페인 의도에서 벗어나지 않도록 조정했습니다. ADSB 산학협력에서는 Andersson Bell 브랜드 무드를 바탕으로 약 15초 AI 패션 숏폼 영상을 만들며, 브랜드 리서치, 컷 구성, AI 이미지·영상 클립 제작, 연결 편집, 실무 피드백 반영까지 경험했습니다.

솔로몬코드의 공고에서 끌린 부분은 웹예능·숏폼·브랜드 영상용 AI 영상을 기획/제작하고, 기존 촬영 영상과 AI 영상을 결합하며 제작 방식을 계속 고도화한다는 점입니다. 저는 프로젝트 기반으로 AI 영상의 기획, 연출, 프롬프트 방향성, 결과물 개선을 직접 실험해왔고, 특히 생성 후보를 스토리보드, 톤, 컷 연결, 브랜드/콘텐츠 목적 기준으로 검수하는 데 강점이 있습니다. 입사 후에는 AI 툴을 빠르게 실험하되 결과물을 그대로 쓰지 않고, 실제 영상 제작에 사용할 수 있는 컷과 제작 방식을 정리해 웹예능·숏폼·브랜드 영상의 완성도를 높이는 신입으로 기여하겠습니다.`;

const shortText = `AI Creative 기반 콘텐츠/브랜드 마케팅 신입으로, AI를 단순 제작 도구가 아니라 기획, 스토리보드, 프롬프트 방향성, 결과물 검수까지 이어지는 작업 방식으로 사용해왔습니다. Loom 프로젝트에서는 13명 AI 아이돌 IP를 바탕으로 Root Signal, Pulso 트랙, INK 계열 MV 프리뷰까지 3개의 뮤직비디오형 콘텐츠를 만들며 트랙 분석, 프레임 후보 생성, 짧은 영상 테스트, 타임코드/contact sheet 기반 검수 과정을 정리했습니다. 무신사 AI 광고제와 ADSB 산학협력에서는 브랜드 메시지와 무드를 AI 숏폼 영상의 장면 흐름으로 구체화했습니다. 솔로몬코드에서는 웹예능·숏폼·브랜드 영상의 목적에 맞게 AI 영상 후보를 빠르게 만들고, 스토리보드와 컷 연결 기준으로 선별·개선하는 신입으로 기여하겠습니다.`;

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
  [titleRow, titleText, titleText.length, "MUSINSA, ADSB, Loom", "Loom을 첫 근거로 올린 최신 자소서 제목. 제출 전 사용자 확인 필요."],
  [longRow, longText, longText.length, "MUSINSA, ADSB, Loom", "2026-07-09 사용자 요청 반영: 최신 포트폴리오와 Loom 제작 과정 페이지 기준, Loom을 첫 사례로 재작성."],
  [shortRow, shortText, shortText.length, "MUSINSA, ADSB, Loom", "글자수 제한 또는 간단 자기소개 칸용. Loom 제작 과정 우선 버전."],
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
  management.getCell(solomonRowIndex, 14).values = [["2026-07-09 Loom 제작 과정 우선 버전으로 자기소개서 재정리. 실제 제출은 사용자 확인 후 진행."]];
  management.getCell(solomonRowIndex, 15).values = [["자소서 작성완료"]];
  management.getCell(solomonRowIndex, 13).setNumberFormat("yyyy-mm-dd");
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
await fs.writeFile(`${outputDir}/loom-first-solomoncode-preview.png`, new Uint8Array(await preview.arrayBuffer()));

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
