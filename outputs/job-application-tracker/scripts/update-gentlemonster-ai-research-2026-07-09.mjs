import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const outputDir =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/gentlemonster-ai-research";
const backupPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.before-gentlemonster-ai-research-2026-07-09.xlsx";

const inspectOnly = process.argv.includes("--inspect");

const company = "㈜아이아이컴바인드";
const title = "[GENTLE MONSTER] AI Research & Exploration 담당자";
const url = "https://www.jobkorea.co.kr/Recruit/GI_Read/49347269";
const officialUrl = "https://www.iiccareers.com/ko/o/211450";
const positioning =
  "패션/브랜드 맥락의 AI Research & Exploration. AI Creative 기반 콘텐츠/브랜드 마케팅 신입으로, AI 기술·트렌드를 탐색하고 결과물을 리테일·공간·콘텐츠 등 브랜드 경험 가능성으로 연결하는 지원자.";
const portfolioSources = "MUSINSA, ADSB/Andersson Bell, Loom/Pulso, SFTI-CMU, AHEYA";

const coverLetter = `AI를 브랜드 경험으로 번역하는 지원자

저는 패션마케팅을 전공하며 브랜드가 제품 설명보다 어떤 장면과 감각으로 기억되는지에 관심을 가져왔고, 생성형 AI를 접한 뒤에는 그 관심을 직접 실험하고 산출물로 만드는 방향으로 확장해 왔습니다. AI를 단순 제작 보조툴로 쓰기보다, 리서치와 메시지 구조화, 프롬프트 실험, 이미지·영상·음악·웹 산출물 제작, 결과물 검수와 공개 흐름까지 이어지는 작업 방식으로 사용해왔습니다.

GENTLE MONSTER의 AI Research & Exploration 담당자 공고는 새로운 AI 기술을 기능 단위로만 보는 역할이 아니라, AI가 만들어낼 수 있는 낯선 감각과 가능성을 발견하고 이를 리테일, 콘텐츠, 공간 등 브랜드 경험으로 확장하는 역할이라고 이해했습니다. 저는 순수 AI/ML 연구자나 개발자는 아니지만, 패션과 브랜드 맥락을 읽고 AI 실험을 실제 결과물과 사용자 경험 가설로 연결해온 신입 지원자입니다. 이 지점이 제가 지원하는 이유입니다.

무신사 AI 광고제에서는 3인 팀으로 30초 AI 숏폼 광고를 제작하며 '편견을 벗다, 다양성을 입다, 무진장을 만나다'라는 메시지를 영상 흐름으로 구조화했습니다. 먼저 타깃이 어떤 장면에서 멈추고 무엇을 기억해야 하는지 정리한 뒤, 스토리보드와 컷 순서, 전환 흐름을 잡았습니다. AI 이미지와 영상 결과물은 보기 좋은 장면을 많이 뽑는 방식이 아니라, 캠페인 메시지와 인물, 스타일, 화면 톤이 한 흐름으로 남는지를 기준으로 검토했습니다. 이 경험은 AI 결과물을 브랜드 메시지와 연결하는 기본 판단 기준이 되었습니다.

ADSB/Andersson Bell 산학 프로젝트에서는 패션 브랜드의 무드를 AI 이미지와 숏폼 영상으로 전환하는 과정을 경험했습니다. 브랜드 리서치를 바탕으로 장면 흐름과 컷 구성을 잡고, Midjourney, Gemini, Nano Banana, Photoshop, Kling 등을 활용해 컷 이미지와 영상 클립을 만들었습니다. 이후 실무 피드백을 반영해 15초 AI 숏폼 흐름으로 정리했습니다. 이 과정에서 배운 것은 도구를 많이 쓰는 능력보다, 브랜드 무드에서 벗어난 결과물을 알아보고 다시 조정하는 기준의 중요성이었습니다.

개인 프로젝트인 Loom/Pulso에서는 AI 실험을 더 넓은 콘텐츠 시스템으로 확장했습니다. 13명 AI 아이돌 IP의 멤버 정체성, Root Signal/Pulso 트랙 보드, 스토리보드, 이미지·영상 프롬프트, 결과물 검수, 팬 참여 웹 흐름을 연결했습니다. LLM으로 곡 방향과 장면 의도, 멤버별 인상을 정리하고, coding agent와 API 기반 제작 루프를 통해 이미지 후보를 생성했습니다. 생성 결과는 컨택트 시트처럼 비교하며 의도한 감각에 가까운지 검토했고, 이후 영상화 프롬프트, 클립 생성, 편집 검토, SNS 공개 흐름까지 이어갔습니다. 이 프로젝트는 AI를 하나의 이미지 생성기가 아니라, 기획과 생성, 비교, 선택, 수정, 공개까지 이어지는 실험 운영 방식으로 사용한 사례입니다.

저는 AI 트렌드를 볼 때도 '새로운 기능이 나왔다'에서 멈추지 않고, 그 기능이 어떤 경험으로 번역될 수 있는지를 먼저 생각합니다. 예를 들어 이미지 생성 모델의 질감 변화는 제품 비주얼이나 공간 연출 가설로, 영상 생성 모델의 움직임 안정성은 숏폼 광고나 리테일 디스플레이 콘텐츠로, LLM과 에이전트형 도구는 리서치 정리와 실험 아카이브 방식으로 연결해 봅니다. 완성도 높은 최종 결과만큼, 어떤 후보를 만들었고 왜 버렸으며 어떤 기준으로 다음 실험을 설계했는지를 기록하는 것도 중요하게 봅니다.

입사 후에는 AI Experience 파트에서 빠르게 바뀌는 AI 서비스와 글로벌 트렌드를 직접 써보고, 젠틀몬스터의 브랜드 경험과 연결될 수 있는 방식으로 정리하겠습니다. 단순 툴 사용법 공유가 아니라, 리테일 공간에서 고객이 만날 수 있는 인터랙션, 캠페인 콘텐츠의 시각 언어, 제품/콜라보레이션을 확장하는 이미지·영상 실험, 웹 기반 proof surface 등으로 구체화해 제안하고 싶습니다. 내부 팀과 협업할 때는 실험 목적, 사용 도구, 생성 결과, 판단 기준, 다음 액션을 아카이빙해 다른 팀도 검토하고 확장할 수 있는 형태로 남기겠습니다.

저는 신입으로서 젠틀몬스터가 쌓아온 브랜드 감도와 내부 기준을 빠르게 배우는 태도가 필요하다고 생각합니다. 동시에 AI를 직접 실험하고, 결과물을 만들고, 그 가능성을 브랜드 경험의 언어로 정리하는 방식은 제가 이미 포트폴리오 기반으로 반복해온 일입니다. GENTLE MONSTER에서 AI가 만들어낼 수 있는 새로운 감각과 경험을 탐색하고, 이를 실제 프로젝트로 이어가는 신입 AI Creative 지원자로 기여하겠습니다.`;

const optionalSummary = `정규 경력 중심의 경력기술서 대신, 프로젝트 기반 AI Exploration 요약으로 제출하는 것을 권합니다. 저는 신입/졸업예정자로서 포트폴리오 프로젝트를 정규 경력처럼 기재하지 않고, AI를 활용해 어떤 실험을 설계하고 결과물을 어떻게 판단했는지 중심으로 정리했습니다. 주요 근거는 MUSINSA AI 광고제, ADSB/Andersson Bell 산학, Loom/Pulso AI 아이돌 IP, SFTI-CMU 시각 분류/리서치, AHEYA 서비스·콘텐츠 자산입니다. 각 프로젝트는 단순 AI 생성 결과물이 아니라 브랜드/사용자 맥락 해석, 프롬프트 실험, 이미지·영상·웹 산출물 제작, 결과물 검수와 다음 실행으로 이어지는 과정을 보여주기 위한 자료입니다.`;

const portfolioDescription = `포트폴리오는 'AI로 만든 결과물 모음'이 아니라 'AI를 탐구하고 브랜드/콘텐츠/서비스 경험으로 확장한 과정'이 보이도록 구성합니다. MUSINSA AI 광고제는 패션/브랜드 광고 메시지를 30초 AI 숏폼 광고로 구조화한 사례로, 메시지, 스토리보드, 컷 흐름, 장면 전환, 생성 결과 검수 기준을 보여줍니다. ADSB/Andersson Bell 산학은 패션 브랜드의 무드와 리서치를 AI 이미지·영상으로 전환한 사례로, 도구 활용과 실무 피드백 반영 과정을 보여줍니다. Loom/Pulso는 AI 아이돌/IP를 음악, 이미지, 영상, 웹 proof surface, 팬 참여 흐름으로 확장한 사례로, 트랙 보드, 멤버 정체성, 프롬프트/결과물 레지스트리, production harness, 후보 비교와 최종 방향 조정을 전면에 둡니다. SFTI-CMU와 AHEYA는 리서치/시각화, 서비스 메시지와 CTA, 공개용 콘텐츠 자산 경험의 보조 근거로 사용합니다.`;

const formMemo = `공식 지원 페이지(${officialUrl})와 지원 작성 페이지(/ko/o/211450/apply/new)를 확인했습니다. /apply/new는 로그인 화면으로 리다이렉트되며 실제 개인정보 입력, 파일 업로드, 최종 제출은 진행하지 않았습니다. 로그인 전 공식 렌더 데이터 기준 활성 섹션은 기본정보, 병역/취업우대, 학력사항, 경력사항, 어학/자격/활동, 제출서류, 지원정보입니다. 제출서류는 입사지원서 필수(파일만), 자기소개서 필수(파일), 포트폴리오 필수(URL 허용), 경력기술서 선택(URL 허용)입니다. 활성 장문 자기소개 문항은 확인되지 않았고, 별도 자기소개서 파일 업로드 방식으로 준비하는 것이 적합합니다.`;

const excelSerial = (isoDate) => {
  const [year, month, day] = isoDate.split("-").map(Number);
  return Math.round(Date.UTC(year, month - 1, day) / 86400000 + 25569);
};

const todaySerial = excelSerial("2026-07-09");
const deadlineSerial = excelSerial("2026-08-09");

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

const supportPreview = supportSheet.getRange("A1:P260").values;
const supportHeaderRow = findHeaderRow(supportPreview, [
  "우선",
  "상태",
  "회사",
  "공고명",
]);
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

const draftPreview = draftSheet.getRange("A1:M260").values;
const draftHeaderRow = findHeaderRow(draftPreview, [
  "상태",
  "회사",
  "공고명",
  "섹션",
]);
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
  process.exit(0);
}

try {
  await fs.access(backupPath);
} catch {
  await fs.copyFile(workbookPath, backupPath);
}

const trackerRow = [
  "S",
  "2차큐",
  company,
  title,
  "Fashion Brand AI Research/Exploration",
  "홈페이지 지원",
  deadlineSerial,
  "경력무관, 학력무관",
  91,
  "공식 홈페이지 양식 확인완료, 자기소개서 파일 문안 작성완료, 포트폴리오 URL/파일 필요",
  "로그인 후 지원서 입력·파일 업로드, 최종 제출 전 사용자 확인",
  "AI Experience 파트의 기술·트렌드 탐색을 리테일·공간·콘텐츠 등 브랜드 경험으로 연결하는 역할. 패션마케팅 전공과 MUSINSA/ADSB/Loom 기반 AI Creative 포트폴리오 연결도가 높음.",
  url,
  todaySerial,
  "2026-07-09 공식 iiccareers 양식 확인: 입사지원서 필수(파일만), 자기소개서 필수(파일), 포트폴리오 필수(URL 허용), 경력기술서 선택(URL 허용). 실제 제출/업로드 전 사용자 확인 필요.",
  "제출 전 확인",
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
    section: "공식 지원 양식 확인 결과",
    text: formMemo,
    note: "공식 iiccareers 및 잡코리아 링크 확인. 로그인 전 접근 가능 범위와 로그인 필요 지점 기록.",
  },
  {
    section: "자기소개서 파일",
    text: coverLetter,
    note: "홈페이지 제출서류의 필수 자기소개서 파일용 완성문. 제출 전 사용자가 파일화 및 최종 확인 필요.",
  },
  {
    section: "경력기술서/기타사항 선택",
    text: optionalSummary,
    note: "선택 경력기술서 URL/파일 또는 기타사항 대응용. 정규 경력이 아닌 프로젝트 기반 요약으로 사용.",
  },
  {
    section: "포트폴리오 설명",
    text: portfolioDescription,
    note: "필수 포트폴리오 URL/파일 설명용. 단순 AI 결과물이 아닌 실험·판단·확장 과정 중심.",
  },
];

let lastDraftRow = Math.max(
  draftHeaderRow,
  ...draftRows.map(({ rowNumber }) => rowNumber),
);
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
    "작성완료",
    company,
    title,
    entry.section,
    positioning,
    entry.text,
    entry.text.length,
    portfolioSources,
    "아이아이컴바인드 공식 채용 홈페이지",
    officialUrl,
    todaySerial,
    todaySerial,
    entry.note,
  ];
  draftSheet.getRange(`A${rowNumber}:M${rowNumber}`).values = [row];
  draftSheet.getRange(`K${rowNumber}:L${rowNumber}`).format.numberFormat =
    "yyyy-mm-dd";
  updatedDraftRows.push({
    rowNumber,
    section: entry.section,
    chars: entry.text.length,
  });
}

const finalSupportRows = supportSheet
  .getRange(`A${supportHeaderRow + 1}:P260`)
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
  tableMaxCellChars: 160,
});
const verifyDrafts = await workbook.inspect({
  kind: "table",
  sheetId: "회사별자소서",
  range: `A${updatedDraftRows[0].rowNumber}:M${
    updatedDraftRows[updatedDraftRows.length - 1].rowNumber
  }`,
  maxChars: 8000,
  tableMaxRows: 8,
  tableMaxCols: 13,
  tableMaxCellChars: 160,
});
const errorScan = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});

for (const sheetName of workbook.worksheets.items.map((sheet) => sheet.name)) {
  const preview = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(
    `${outputDir}/preview-${sheetName}.png`,
    new Uint8Array(await preview.arrayBuffer()),
  );
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

console.log(
  JSON.stringify(
    {
      workbookPath,
      backupPath,
      supportWriteRow,
      updatedDraftRows,
      verifyTracker: verifyTracker.ndjson,
      verifyDrafts: verifyDrafts.ndjson,
      errorScan: errorScan.ndjson,
    },
    null,
    2,
  ),
);
