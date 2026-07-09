import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const outputDir =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/gc-aloe";
const backupPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.before-gc-aloe-2026-07-09.xlsx";

const inspectOnly = process.argv.includes("--inspect");

const company = "㈜녹십초알로에";
const title = "AX(AI Transformation) 전담팀 채용";
const url = "https://www.jobkorea.co.kr/Recruit/GI_Read/49495691";
const positioning =
  "AI Creative 기반 콘텐츠/브랜드 마케팅 신입. AI 영상/콘텐츠 기획과 AHEYA first-signal 서비스 설계 경험을 바탕으로 복잡한 프로세스를 AI 작업 단위로 해석하고, 산출물 검수와 부서별 AI 활용 가이드까지 연결하는 지원자.";
const portfolioSources = "MUSINSA, ADSB, Loom/Pulso, AHEYA(first-signal 서비스/바이브코딩)";

const fullDraft = `AI로 숏폼 광고·패션 영상·AI 아이돌 음악·영상 콘텐츠를 기획하고 제작한 경험

[성장과정]

군 복무 중 수능을 준비했고, 전역 직후 대학에 입학했습니다. 늦게 시작한 만큼 오래 준비만 하기보다 직접 만들어 보며 제 방향을 찾으려 했습니다. 패션마케팅을 공부하면서 브랜드가 어떤 분위기와 이야기로 기억되는지에 관심이 생겼고, 생성형 AI를 접한 뒤에는 그 관심을 실제 콘텐츠와 서비스 형태로 옮겨 보기 시작했습니다. AI 숏폼 광고, 패션 브랜드 영상, AI 아이돌 음악·영상, 웹 기반 서비스형 프로젝트를 만들고 공개하면서, 기획은 문장으로 끝나는 것이 아니라 사용자가 보고 반응할 수 있는 형태가 되었을 때 힘이 생긴다는 점을 확인했습니다. 모든 시도가 성과로 이어진 것은 아니었지만, 그 과정에서 아이디어를 실제 결과물로 옮기고 반응을 보며 다듬는 태도를 배웠습니다.

[직무 관련 경험]

AI로 숏폼 광고·패션 영상·AI 아이돌 음악·영상 콘텐츠를 기획하고 제작한 경험

저는 AI를 활용해 기획 의도와 메시지를 숏폼 광고, 패션 영상, AI 아이돌 음악·영상 콘텐츠, 웹 경험으로 구체화해 왔습니다. 작업을 시작할 때는 먼저 타깃이 어디에서 멈추고 무엇을 기억해야 하는지 기준을 잡고, 그 기준에 맞춰 메시지 구조와 스토리보드, 장면 흐름을 설계한 뒤 레퍼런스와 AI 도구로 장면 후보를 만들고 실제 콘텐츠로 옮깁니다. 단순히 보기 좋은 장면보다, 전달하려는 메시지가 장면 흐름 안에서 분명하게 남는지를 중요하게 봅니다.

[주요 경험 및 직무 역량]

무신사 AI 광고제에서는 3인 팀으로 30초 AI 숏폼 광고 제출본을 제작하며 '편견을 벗다, 다양성을 입다, 무진장을 만나다'라는 메시지를 영상화 초안과 주요 스토리보드로 구체화했습니다. 메시지가 장면마다 흩어지지 않도록 인물, 스타일, 장면 흐름을 맞추며 광고의 전체 방향을 잡았습니다. 팀 작업에서는 많은 아이디어를 모으는 것보다, 모두가 같은 메시지 기준을 보고 결과물을 하나의 흐름으로 맞추는 데 집중했습니다.

ADSB 산학협력에서는 Andersson Bell 브랜드를 대상으로 약 3개월간 3인 팀으로 진행한 생성형 AI 기반 패션 영상 프로젝트에 참여했습니다. 팀 내에서는 초기 기획 방향과 브랜드 리서치를 바탕으로 숏폼에 필요한 장면 흐름과 컷 구성을 구체화했고, 스토리보드 기준에 맞춰 컷 이미지와 개별 AI 영상 클립을 제작했습니다. 이후 Adobe Premiere Pro에서 클립 순서와 흐름을 연결 편집하고, 실무진 피드백 반영 후 약 15초 AI 숏폼 영상으로 완성했습니다.

Loom 개인 프로젝트에서는 13명 AI 아이돌 IP를 음악, 영상, 숏폼 클립, 웹페이지가 연결된 콘텐츠로 구성했습니다. 곡 방향, 멤버별 정체성, 스토리보드, 영상 흐름을 정리했고, 실제 제작 범위는 음악, 뮤직비디오형 영상, TikTok/X/Youtube용 클립, 멤버 아카이브 중심으로 만들었습니다. Harne 투표는 팬 참여 흐름을 보여주는 기획 요소로 두었고, 뮤직비디오형 코어 영상에서 멤버/댄스 장면을 컷다운해 숏폼으로 확장하는 예시로 설계했습니다.

AHEYA 개인 프로젝트에서는 AI builder가 공개한 서비스 아이디어를 사용자가 열람하고, 소액 후원, Good/Improve 피드백, 선택적 공유, 저장 기록으로 이어지게 하는 first-signal 서비스 흐름을 설계했습니다. 처음에는 기능 설명과 기술 구조가 앞설 수 있었지만, 포트폴리오에서는 원본 X 글, 공개 아이디어 페이지, 후원/피드백 CTA, 저장된 피드백 기록, 다음 개선 판단에 쓸 이벤트 기준으로 흐름을 다시 좁혔습니다. 제가 집중한 부분은 Web3 기술을 앞세우는 것이 아니라, 낯선 서비스 구조를 사용자가 이해할 수 있는 메시지, 화면 흐름, CTA 문구, 기록 기준으로 바꾸는 일이었습니다. 이 경험은 부서별 업무 프로세스를 듣고 AI 자동화 가능 지점, 사람이 확인해야 할 검수 기준, 사용자가 따라야 할 활용 가이드를 나누는 방식과 연결됩니다.

[AI 활용 방식]

Loom에서는 생성형 AI를 역할별로 나눠, 자동화에 가깝게 반복할 수 있는 반자동 제작 루프로 활용했습니다. 먼저 LLM으로 콘텐츠 방향, 캐릭터의 감정, 장면 의도, 컷 흐름을 기획하고 구체화했습니다. 이후 coding agent의 skill을 활용해 기획 내용을 이미지 생성용 프롬프트와 생성 기준으로 정리하고, API 기반 생성 방식으로 여러 이미지 후보를 일괄 제작했습니다. 생성된 이미지는 contact sheet처럼 모아 의도한 인상, 캐릭터 일관성, 장면 흐름에 맞는지 검토했고, 필요한 경우 수정 방향을 정리해 후보를 다시 조정했습니다. 이미지 방향이 잡힌 뒤에는 coding agent의 skill로 영상화 프롬프트를 다시 구성하고, Grok Imagine으로 단편 영상과 완성형 컷 후보를 제작했습니다. 마지막으로 생성된 클립을 모아 CapCut과 coding agent를 활용해 컷 정리와 편집 확인을 진행했습니다. 이 과정을 통해 기획, 프롬프트 생성, API 기반 이미지 후보 생성, 검토와 수정, 영상화, 클립 편집으로 이어지는 반복 가능한 AI 영상 제작 루프를 구축했습니다.

무신사 AI 광고제에서도 초반 기획 흐름은 유사하게 가져갔습니다. GPT로 광고 메시지와 컷 흐름을 정리하고, GPT Image로 장면별 스토리보드와 키프레임 후보를 만든 뒤, Seedance를 활용해 실제 영상 컷으로 제작했습니다. 산학공동연구 프로젝트에서는 Midjourney, Gemini, Nano Banana, Photoshop, Kling 등을 활용해 브랜드 무드에 맞는 이미지와 영상 클립 후보를 만들고, 화면 톤, 스타일, 컷 연결을 비교하며 조정했습니다. 두 경험 모두 AI 툴을 단순히 사용하는 것이 아니라, 기획한 메시지를 실제 영상 산출물로 만들고 검수하는 과정에 AI를 적용한 사례입니다.

AHEYA에서는 같은 방식을 서비스 화면과 업무 흐름 쪽으로 확장했습니다. 먼저 사용자의 행동 흐름을 'open idea → support → Good/Improve → optional Share on X → saved record'처럼 단계화하고, 각 단계에 필요한 화면, 데이터 저장 흐름, 상태 변화, 안내 문구, 정책 기준을 나눴습니다. 이후 coding agent로 화면 흐름과 저장·상태 처리 단위를 확인하면서 어떤 설명이 앞에 와야 하는지, 어떤 기술 설명은 내부 기준이나 부록으로 내려야 하는지 조정했습니다. 이 경험을 통해 AI를 코드 작성 도구로만 쓰는 것이 아니라, 복잡한 서비스 프로세스를 실행 가능한 작업 단위와 검수 기준으로 분해하는 방식으로 활용할 수 있음을 배웠습니다.

녹십초화장품 AX 전담팀에서도 저는 단순 영상 제작자가 아니라, 부서별 업무 프로세스를 먼저 이해하고 AI로 자동화할 수 있는 단위와 콘텐츠화할 수 있는 단위를 구분하는 신입 기획자로 기여하고 싶습니다. 제품 소개 영상, 바이어용 브랜드/마케팅 콘텐츠, 부서별 AI 활용 가이드, 프롬프트 예시, 교육 자료를 실제로 써볼 수 있는 형태로 정리하고, 사용 현황을 보며 개선하는 방식으로 AX 업무에 적응하겠습니다.`;

const shortDraft = `저는 AI를 활용해 숏폼 광고, 패션 영상, AI 아이돌 음악·영상 콘텐츠를 기획하고 제작해 왔습니다. 무신사 AI 광고제와 ADSB 산학 프로젝트에서는 브랜드 메시지를 AI 숏폼 영상 흐름으로 구조화했고, Loom에서는 LLM 기획, 이미지 후보 생성, 영상화, 편집 검토, SNS 공개까지 이어지는 제작 루프를 만들었습니다. AHEYA에서는 AI builder의 공개 아이디어를 '열람 → 소액 후원 → Good/Improve 피드백 → 선택적 공유 → 저장 기록'으로 이어지는 first-signal 서비스 흐름으로 정리하고, coding agent로 화면 구성, CTA 문구, 데이터 저장 흐름, 상태 변화, 검수 기준을 나눴습니다. 녹십초화장품 AX 전담팀에서는 부서별 업무 프로세스를 이해한 뒤 AI 자동화 워크플로우, AI 영상/콘텐츠 기획, 활용 가이드와 교육 자료로 연결하는 신입 기획자로 기여하겠습니다.`;

const excelSerial = (isoDate) => {
  const [year, month, day] = isoDate.split("-").map(Number);
  return Math.round(Date.UTC(year, month - 1, day) / 86400000 + 25569);
};

const todaySerial = excelSerial("2026-07-09");
const deadlineSerial = excelSerial("2026-07-16");

const normalize = (value) => String(value ?? "").trim();
const normalizeUrl = (value) => normalize(value).split("?")[0];

const findHeaderRow = (values, requiredLabels) => {
  const index = values.findIndex((row) =>
    requiredLabels.every((label) => row.includes(label)),
  );
  if (index === -1) {
    throw new Error(`Could not find header row for ${requiredLabels.join(", ")}`);
  }
  return index + 1;
};

const nonEmpty = (row) => row.some((cell) => cell !== null && cell !== "");

const makeRecord = (headers, row) => {
  const record = {};
  headers.forEach((header, index) => {
    record[header] = row[index];
  });
  return record;
};

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const supportSheet = workbook.worksheets.getItem("지원관리");
const draftSheet = workbook.worksheets.getItem("회사별자소서");

await fs.mkdir(outputDir, { recursive: true });

const supportPreview = supportSheet.getRange("A1:P220").values;
const supportHeaderRow = findHeaderRow(supportPreview, ["우선", "상태", "회사", "공고명"]);
const supportHeaders = supportPreview[supportHeaderRow - 1];
const supportRows = supportPreview
  .slice(supportHeaderRow)
  .map((row, index) => ({
    rowNumber: supportHeaderRow + index + 1,
    row,
    record: makeRecord(supportHeaders, row),
  }))
  .filter(({ row }) => nonEmpty(row));
const supportTarget =
  supportRows.find(({ record }) => normalizeUrl(record["공고 URL"]) === url) ??
  supportRows.find(
    ({ record }) =>
      normalize(record["회사"]) === company && normalize(record["공고명"]) === title,
  );

const draftPreview = draftSheet.getRange("A1:M220").values;
const draftHeaderRow = findHeaderRow(draftPreview, ["상태", "회사", "공고명", "섹션"]);
const draftHeaders = draftPreview[draftHeaderRow - 1];
const draftRows = draftPreview
  .slice(draftHeaderRow)
  .map((row, index) => ({
    rowNumber: draftHeaderRow + index + 1,
    row,
    record: makeRecord(draftHeaders, row),
  }))
  .filter(({ row }) => nonEmpty(row));

if (inspectOnly) {
  const overview = await workbook.inspect({
    kind: "workbook,sheet,table",
    maxChars: 10000,
    tableMaxRows: 8,
    tableMaxCols: 16,
    tableMaxCellChars: 100,
  });
  console.log(overview.ndjson);
  console.log(
    JSON.stringify(
      {
        supportHeaderRow,
        supportTarget: supportTarget
          ? { rowNumber: supportTarget.rowNumber, record: supportTarget.record }
          : null,
        draftHeaderRow,
        draftRowsForCompany: draftRows
          .filter(({ record }) => normalize(record["회사"]) === company)
          .map(({ rowNumber, record }) => ({
            rowNumber,
            section: record["섹션"],
            status: record["상태"],
            chars: record["글자수"],
          })),
      },
      null,
      2,
    ),
  );

  for (const sheetName of workbook.worksheets.items.map((sheet) => sheet.name)) {
    const preview = await workbook.render({
      sheetName,
      autoCrop: "all",
      scale: 1,
      format: "png",
    });
    await fs.writeFile(
      `${outputDir}/before-${sheetName}.png`,
      new Uint8Array(await preview.arrayBuffer()),
    );
  }
  process.exit(0);
}

try {
  await fs.access(backupPath);
} catch {
  await fs.copyFile(workbookPath, backupPath);
}

const trackerRow = [
  "완료",
  "지원완료",
  company,
  title,
  "AX + AI Content/Automation Planning",
  "잡코리아 즉시지원",
  deadlineSerial,
  "신입·경력, 학력무관",
  93,
  "제출 완료: 잡코리아 이력서/회사별 자소서",
  "결과 대기",
  "지원 완료. AI 업무 자동화, AI 영상/콘텐츠 기획, 사내 AI 도입·교육이 함께 있는 상위 타깃으로 관리.",
  url,
  todaySerial,
  "2026-07-09 잡코리아 즉시지원 완료. 녹십초용 자기소개 자유양식과 짧은 버전 제출반영.",
  "완료",
];

const lastSupportRow = Math.max(
  supportHeaderRow,
  ...supportRows.map(({ rowNumber }) => rowNumber),
);
const supportWriteRow = supportTarget?.rowNumber ?? lastSupportRow + 1;
if (!supportTarget) {
  supportSheet
    .getRange(`A${supportWriteRow}:P${supportWriteRow}`)
    .copyFrom(supportSheet.getRange(`A${lastSupportRow}:P${lastSupportRow}`), "all");
}
supportSheet.getRange(`A${supportWriteRow}:P${supportWriteRow}`).values = [
  trackerRow,
];
supportSheet.getRange(`G${supportWriteRow}`).format.numberFormat = "yyyy-mm-dd";
supportSheet.getRange(`N${supportWriteRow}`).format.numberFormat = "yyyy-mm-dd";

const draftEntries = [
  {
    section: "자기소개 자유양식",
    text: fullDraft,
    note:
      "잡코리아 기본 자기소개서 구조로 재작성. AHEYA 바이브코딩/서비스 프로토타입 경험 반영. 2026-07-09 잡코리아 실제 제출 완료.",
  },
  {
    section: "기타사항/짧은 버전",
    text: shortDraft,
    note:
      "글자수 제한 또는 기타사항용 압축본. 잡코리아 기본 자기소개서 구조와 AHEYA 바이브코딩 경험 반영. 2026-07-09 잡코리아 실제 제출 완료.",
  },
];

let lastDraftRow = Math.max(draftHeaderRow, ...draftRows.map(({ rowNumber }) => rowNumber));
const updatedDraftRows = [];
for (const entry of draftEntries) {
  const existing = draftRows.find(
    ({ record }) =>
      normalize(record["회사"]) === company &&
      normalize(record["공고명"]) === title &&
      normalize(record["섹션"]) === entry.section,
  );
  const rowNumber = existing?.rowNumber ?? lastDraftRow + 1;
  if (!existing) {
    draftSheet
      .getRange(`A${rowNumber}:M${rowNumber}`)
      .copyFrom(draftSheet.getRange(`A${lastDraftRow}:M${lastDraftRow}`), "all");
    lastDraftRow = rowNumber;
  }
  const row = [
    "제출반영",
    company,
    title,
    entry.section,
    positioning,
    entry.text,
    entry.text.length,
    portfolioSources,
    "잡코리아 즉시지원",
    url,
    todaySerial,
    todaySerial,
    entry.note,
  ];
  draftSheet.getRange(`A${rowNumber}:M${rowNumber}`).values = [row];
  draftSheet.getRange(`K${rowNumber}:L${rowNumber}`).format.numberFormat =
    "yyyy-mm-dd";
  updatedDraftRows.push({ rowNumber, section: entry.section, chars: entry.text.length });
}

const finalSupportRows = supportSheet
  .getRange(`A${supportHeaderRow + 1}:P220`)
  .values.filter((row) => nonEmpty(row));
const statusCounts = finalSupportRows.reduce((acc, row) => {
  const status = row[1];
  if (status) acc[status] = (acc[status] || 0) + 1;
  return acc;
}, {});
supportSheet.getRange("B4").values = [[finalSupportRows.length]];
supportSheet.getRange("B5").values = [[statusCounts["지원완료"] || 0]];
supportSheet.getRange("B6").values = [[statusCounts["별도작성 필요"] || 0]];
supportSheet.getRange("E4").values = [[statusCounts["포폴보강 후"] || 0]];
supportSheet.getRange("E5").values = [[statusCounts["2차큐"] || 0]];
supportSheet.getRange("E6").values = [[statusCounts["보류"] || 0]];

const verifyTracker = await workbook.inspect({
  kind: "table",
  sheetId: "지원관리",
  range: `A${supportWriteRow}:P${supportWriteRow}`,
  maxChars: 5000,
  tableMaxRows: 2,
  tableMaxCols: 16,
  tableMaxCellChars: 220,
});
console.log(verifyTracker.ndjson);

const firstDraftRow = Math.min(...updatedDraftRows.map((item) => item.rowNumber));
const lastUpdatedDraftRow = Math.max(...updatedDraftRows.map((item) => item.rowNumber));
const verifyDrafts = await workbook.inspect({
  kind: "table",
  sheetId: "회사별자소서",
  range: `A${firstDraftRow}:M${lastUpdatedDraftRow}`,
  maxChars: 9000,
  tableMaxRows: 4,
  tableMaxCols: 13,
  tableMaxCellChars: 300,
});
console.log(verifyDrafts.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "formula error scan after GC Aloe draft update",
  maxChars: 4000,
});
console.log(errors.ndjson);

for (const sheetName of workbook.worksheets.items.map((sheet) => sheet.name)) {
  const preview = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(
    `${outputDir}/after-${sheetName}.png`,
    new Uint8Array(await preview.arrayBuffer()),
  );
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);
await output.save(`${outputDir}/ai_creative_marketing_application_tracker_2026-06-15.gc-aloe-updated.xlsx`);

console.log(
  JSON.stringify(
    {
      updated: workbookPath,
      backup: backupPath,
      supportWriteRow,
      updatedDraftRows,
      statusCounts,
    },
    null,
    2,
  ),
);
