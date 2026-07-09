import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const backupPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.before-solomoncode-2026-07-09.xlsx";
const outputDir = "/Users/yuminseog/portfolio/.tmp/solomoncode-tracker";
const postingUrl = "https://www.jobkorea.co.kr/Recruit/GI_Read/49356104";
const today = new Date("2026-07-09T00:00:00");

const titleText = "AI 영상의 기획 기준을 세우고 프롬프트로 장면을 완성해온 지원자";

const longText = `저는 AI Creative 기반 콘텐츠/브랜드 마케팅 신입으로, 생성형 AI를 단순 제작 보조툴이 아니라 리서치, 메시지 구조화, 스토리보드, 이미지·영상 산출물 제작, 결과물 검수까지 이어지는 작업 방식으로 사용해왔습니다. 영상 한 컷을 빨리 뽑는 것보다, 어떤 목적의 영상인지, 사용자가 어디에서 멈추고 무엇을 기억해야 하는지, 그 인상이 컷 흐름 안에서 유지되는지를 먼저 봅니다.

무신사 AI 광고제에서는 3인 팀으로 30초 AI 숏폼 광고를 제작하며 "편견을 벗다, 다양성을 입다, 무진장을 만나다"라는 메시지를 장면 흐름과 주요 스토리보드로 구체화했습니다. GPT로 메시지와 컷 구조를 정리하고, Seedance, Kling, Grok 등을 활용해 장면 후보를 만들면서 인물, 스타일, 화면 톤, 전환 리듬이 캠페인 의도에서 벗어나지 않도록 검토했습니다. ADSB 산학협력에서는 Andersson Bell 브랜드 무드를 바탕으로 약 15초 AI 패션 숏폼 영상을 만들며, 브랜드 리서치, 컷 구성, AI 이미지·영상 클립 제작, 연결 편집, 실무 피드백 반영까지 경험했습니다. 이 과정에서 AI 영상은 도구 숙련만으로 완성되는 것이 아니라, 처음 잡은 콘셉트와 장면 기준을 끝까지 유지하는 연출 판단이 중요하다는 것을 배웠습니다.

Loom/Pulso 프로젝트에서는 이 방식을 반복 가능한 제작 루프로 확장했습니다. 13명 AI 아이돌 IP를 음악, 영상, 멤버 아카이브, 숏폼, 웹페이지가 연결된 콘텐츠로 구성하며 Root Signal과 Pulso 트랙 보드, 멤버 정체성, 스토리보드, 영상 프롬프트, 결과물 검수 흐름을 정리했습니다. 먼저 LLM으로 장면 의도와 컷 흐름을 잡고, 이미지 후보를 여러 개 만든 뒤 컨택트 시트처럼 비교하며 남길 컷과 수정할 컷을 나눴습니다. 이후 영상화 프롬프트와 클립 후보를 다시 검토해, 단순히 많이 생성하는 것이 아니라 목적에 맞는 결과물만 선별하는 루프를 만들고 있습니다.

솔로몬코드의 공고에서 특히 끌린 부분은 웹예능·숏폼·브랜드 영상용 AI 영상을 기획/제작하고, 기존 촬영 영상과 AI 영상을 결합하며 제작 방식을 계속 고도화한다는 점입니다. 저는 프로젝트 기반으로 AI 영상의 기획, 연출, 프롬프트 방향성, 결과물 개선을 직접 실험해왔고, 브랜드나 콘텐츠 목적에 맞게 장면 기준을 세우는 데 강점이 있습니다. 입사 후에는 AI 툴을 빠르게 실험하되 결과물을 그대로 쓰지 않고, 스토리보드, 톤, 전환, 브랜드 메시지 기준으로 검수해 실제 숏폼·브랜드 영상 제작에 바로 쓰일 수 있는 컷과 제작 방식을 만드는 신입으로 기여하겠습니다.`;

const shortText = `AI Creative 기반 콘텐츠/브랜드 마케팅 신입으로, AI를 단순 제작 도구가 아니라 기획, 스토리보드, 프롬프트 방향성, 결과물 검수까지 이어지는 작업 방식으로 사용해왔습니다. 무신사 AI 광고제에서는 30초 AI 숏폼 광고의 메시지와 컷 흐름을 설계했고, ADSB 산학협력에서는 Andersson Bell 브랜드 무드를 AI 패션 숏폼 영상으로 구체화했습니다. Loom/Pulso에서는 13명 AI 아이돌 IP를 음악, 영상, 숏폼, 웹페이지가 연결된 콘텐츠로 구성하며 장면 의도, 영상 프롬프트, 결과물 검수 루프를 정리했습니다. 솔로몬코드에서는 웹예능·숏폼·브랜드 영상의 목적에 맞게 AI 영상 후보를 빠르게 만들고, 스토리보드와 브랜드 메시지 기준으로 선별·개선하는 신입으로 기여하겠습니다.`;

const rows = [
  [
    "작성완료",
    "㈜솔로몬코드",
    "기획, 연출이 가능한 AI영상 크리에이터를 모집 합니다.",
    "자소서 제목",
    "AI 영상 기획/연출 + 프롬프트 방향성",
    titleText,
    titleText.length,
    "MUSINSA, ADSB, Loom/Pulso",
    "잡코리아",
    postingUrl,
    today,
    today,
    "잡코리아 제목 칸용. 제출 전 사용자 확인 필요."
  ],
  [
    "작성완료",
    "㈜솔로몬코드",
    "기획, 연출이 가능한 AI영상 크리에이터를 모집 합니다.",
    "잡코리아 자기소개서",
    "AI 영상 기획/연출, 스토리보드, 프롬프트 설계, 결과물 검수 루프",
    longText,
    longText.length,
    "MUSINSA, ADSB, Loom/Pulso",
    "잡코리아",
    postingUrl,
    today,
    today,
    "2026-07-11 마감 임박. 정규 경력처럼 쓰지 않고 포트폴리오 기반 신입 포지셔닝으로 작성."
  ],
  [
    "작성완료",
    "㈜솔로몬코드",
    "기획, 연출이 가능한 AI영상 크리에이터를 모집 합니다.",
    "짧은 버전",
    "빠른 붙여넣기용 AI 영상 기획/검수 요약",
    shortText,
    shortText.length,
    "MUSINSA, ADSB, Loom/Pulso",
    "잡코리아",
    postingUrl,
    today,
    today,
    "글자수 제한 또는 간단 자기소개 칸용. 제출 전 사용자 확인 필요."
  ],
];

await fs.copyFile(workbookPath, backupPath);

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const archive = workbook.worksheets.getItem("회사별자소서");
const archiveUsed = archive.getUsedRange();
const startRowIndex = archiveUsed.rowCount;
const target = archive.getRangeByIndexes(startRowIndex, 0, rows.length, 13);
const sourceFormat = archive.getRangeByIndexes(archiveUsed.rowCount - 1, 0, 1, 13);
sourceFormat.copyTo(target, "all");
target.values = rows;
archive.getRangeByIndexes(startRowIndex, 10, rows.length, 2).setNumberFormat("yyyy-mm-dd");

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
  management.getCell(solomonRowIndex, 14).values = [["2026-07-09 솔로몬코드용 제목/긴 자기소개서/짧은 버전 작성완료. 실제 제출은 사용자 확인 후 진행."]];
  management.getCell(solomonRowIndex, 15).values = [["자소서 작성완료"]];
  management.getCell(solomonRowIndex, 13).setNumberFormat("yyyy-mm-dd");
}

const archiveCheck = await workbook.inspect({
  kind: "table",
  sheetId: "회사별자소서",
  range: `A${startRowIndex + 1}:M${startRowIndex + rows.length}`,
  maxChars: 9000,
  tableMaxRows: 3,
  tableMaxCols: 13,
  tableMaxCellChars: 450,
});
console.log("ARCHIVE_CHECK");
console.log(archiveCheck.ndjson);

if (solomonRowIndex >= 0) {
  const mgmtCheck = await workbook.inspect({
    kind: "table",
    sheetId: "지원관리",
    range: `A${solomonRowIndex + 1}:P${solomonRowIndex + 1}`,
    maxChars: 4000,
    tableMaxRows: 1,
    tableMaxCols: 16,
    tableMaxCellChars: 240,
  });
  console.log("MANAGEMENT_CHECK");
  console.log(mgmtCheck.ndjson);
}

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
  range: `A${Math.max(4, startRowIndex - 2)}:M${startRowIndex + rows.length}`,
  scale: 1,
  format: "png",
});
await fs.writeFile(`${outputDir}/solomoncode-draft-rows-preview.png`, new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

console.log(JSON.stringify({
  updatedWorkbook: workbookPath,
  backup: backupPath,
  addedRows: rows.length,
  startExcelRow: startRowIndex + 1,
  longChars: longText.length,
  shortChars: shortText.length,
  titleChars: titleText.length,
}, null, 2));
