import fs from "node:fs/promises";

import {
  FileBlob,
  SpreadsheetFile,
} from "/Users/yuminseog/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const packPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/soulblend/soulblend-application-pack-2026-06-24-rewrite.md";
const outputDir =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/soulblend/qa";

const postingUrl = "https://www.wanted.co.kr/wd/352857";
const updateSerialDate = 46197;

const pack = await fs.readFile(packPath, "utf8");
const intro = pack
  .split("## 원티드 간단소개", 2)[1]
  .split("## AI 활용 경험 A4 제출문", 1)[0]
  .trim();
const aiExperience = pack
  .split("## AI 활용 경험 A4 제출문", 2)[1]
  .split("## 제출 후 기록", 1)[0]
  .trim();

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const main = workbook.worksheets.getItem("지원관리");
const archive = workbook.worksheets.getItem("회사별자소서");

const mainRow = [
  "S",
  "지원완료",
  "소울블렌드",
  "[인턴] 콘텐츠·인플루언서 마케터",
  "AI Content Marketing + SNS/Influencer",
  "Wanted 지원",
  "상시",
  "신입·인턴",
  92,
  "Wanted 프로필, 포트폴리오, AI 활용 경험 A4 PDF 제출 반영",
  "결과 대기",
  "AI 기반 운세 앱의 사주·타로·운세 콘텐츠를 SNS 숏폼/카드뉴스/카피로 다시 구성하는 역할. AI 결과물을 그대로 쓰지 않고 브랜드 톤에 맞게 다듬는 감각을 요구해 MUSINSA/ADSB의 숏폼 제작, Loom의 코어 콘텐츠->숏폼 전환, AHEYA의 서비스 메시지/CTA 경험과 연결이 좋음.",
  postingUrl,
  updateSerialDate,
  "2026-06-24 Wanted 지원완료 처리. AI 활용 경험 PDF 1페이지 생성/렌더 확인 완료.",
  null,
];

main.getRange("A59:P59").values = [mainRow];

const archiveRows = [
  [
    "제출반영",
    "소울블렌드",
    "[인턴] 콘텐츠·인플루언서 마케터",
    "Wanted 간단소개",
    "AI 기반 운세 앱 SNS 소재 구성 + AI Creative 콘텐츠 마케팅 신입",
    intro,
    [...intro].length,
    "MUSINSA, ADSB, Loom, AHEYA",
    "Wanted",
    postingUrl,
    updateSerialDate,
    updateSerialDate,
    "2026-06-24 Wanted 지원완료 처리. 제출 반영.",
  ],
  [
    "제출반영",
    "소울블렌드",
    "[인턴] 콘텐츠·인플루언서 마케터",
    "AI 활용 경험 A4 1장",
    "운세 앱 콘텐츠를 SNS 소재로 재구성하는 AI 활용 경험",
    aiExperience,
    [...aiExperience].length,
    "MUSINSA, ADSB, Loom, AHEYA",
    "Wanted",
    postingUrl,
    updateSerialDate,
    updateSerialDate,
    "2026-06-24 Wanted 지원완료 처리. PDF 1페이지 생성/렌더 확인 완료: outputs/job-application-tracker/soulblend/soulblend-ai-experience-2026-06-24-rewrite.pdf",
  ],
];

archive.getRange("A63:M64").values = archiveRows;

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "formula error scan after Soulblend rewrite",
});
console.log(errors.ndjson);

const mainCheck = await workbook.inspect({
  kind: "table",
  sheetId: "지원관리",
  range: "A58:P60",
  tableMaxRows: 3,
  tableMaxCols: 16,
  tableMaxCellChars: 180,
  maxChars: 12000,
});
console.log(mainCheck.ndjson);

const archiveCheck = await workbook.inspect({
  kind: "table",
  sheetId: "회사별자소서",
  range: "A63:M64",
  tableMaxRows: 2,
  tableMaxCols: 13,
  tableMaxCellChars: 160,
  maxChars: 12000,
});
console.log(archiveCheck.ndjson);

await fs.mkdir(outputDir, { recursive: true });
const mainPreview = await workbook.render({
  sheetName: "지원관리",
  range: "A58:P60",
  scale: 1,
  format: "png",
});
await fs.writeFile(
  `${outputDir}/soulblend-tracker-updated-main-2026-06-24.png`,
  new Uint8Array(await mainPreview.arrayBuffer()),
);

const archivePreview = await workbook.render({
  sheetName: "회사별자소서",
  range: "A63:M64",
  scale: 1,
  format: "png",
});
await fs.writeFile(
  `${outputDir}/soulblend-tracker-updated-archive-2026-06-24.png`,
  new Uint8Array(await archivePreview.arrayBuffer()),
);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);
console.log(`saved ${workbookPath}`);
