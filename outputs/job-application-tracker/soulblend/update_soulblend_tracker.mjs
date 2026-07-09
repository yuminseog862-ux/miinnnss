import fs from "node:fs/promises";

import {
  FileBlob,
  SpreadsheetFile,
} from "/Users/yuminseog/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const packPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/soulblend/soulblend-application-pack-2026-06-22.md";

const postingUrl = "https://www.wanted.co.kr/wd/352857?recommender_key=jDPXye__0aANy9";
const createdSerialDate = 46195;
const revisedSerialDate = 46197;

const pack = await fs.readFile(packPath, "utf8");
const intro = pack
  .split("## 원티드 간단소개", 2)[1]
  .split("## AI 활용 경험 A4 제출문", 1)[0]
  .trim();
const aiExperience = pack.split("## AI 활용 경험 A4 제출문", 2)[1].trim();

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const main = workbook.worksheets.getItem("지원관리");
const archive = workbook.worksheets.getItem("회사별자소서");

const mainRow = [
  "S",
  "별도작성 필요",
  "소울블렌드",
  "[인턴] 콘텐츠·인플루언서 마케터",
  "AI Content Marketing + SNS/Influencer",
  "Wanted 지원",
  "상시",
  "신입/경력 0-1년·인턴",
  91,
  "Wanted 프로필, 콘텐츠 포트폴리오, AI 활용 경험 원문 수정완료, PDF 생성 보류",
  "사용자 지시 후 AI 활용 경험 PDF 생성/첨부 및 원티드 최종 제출 확인",
  "AI 기반 운세 앱의 사주·타로·운세 콘텐츠를 SNS 숏폼/카드뉴스/카피로 다시 구성하는 역할. AI 도구 활용과 결과물 개선 감각을 직접 요구해 MUSINSA의 CapCut 숏폼 흐름, ADSB의 Premiere Pro 1차 컷 편집, Suno 기반 AI 음악/MV를 TikTok/YouTube Shorts/X용 클립으로 나눈 경험과 연결이 좋음.",
  postingUrl,
  revisedSerialDate,
  "2026-06-24 수정: 특정 트랙 개별 사례 제외. Suno 기반 음악 -> MV 코어 영상 -> TikTok/YouTube Shorts/X 클립 재가공 흐름으로 원문 수정. PDF 생성/렌더는 사용자 지시 전 보류.",
  null,
];

main.getRange("A59:P59").values = [mainRow];
main.getRange("B4").values = [[41]];
main.getRange("B6").values = [[6]];

const archiveRows = [
  [
    "작성완료",
    "소울블렌드",
    "[인턴] 콘텐츠·인플루언서 마케터",
    "Wanted 간단소개",
    "AI 기반 운세 앱 SNS 소재화 + AI Creative 콘텐츠 마케팅 신입",
    intro,
    [...intro].length,
    "MUSINSA, ADSB, Suno 기반 AI 음악/MV",
    "Wanted",
    postingUrl,
    createdSerialDate,
    revisedSerialDate,
    "원티드 프로필 간단소개 교체 또는 지원 모달 내 자기소개 필요 시 사용.",
  ],
  [
    "작성완료",
    "소울블렌드",
    "[인턴] 콘텐츠·인플루언서 마케터",
    "AI 활용 경험 A4 1장",
    "MUSINSA/ADSB/Suno MV 중심으로 편집·이미지·숏폼 재가공 설명",
    aiExperience,
    [...aiExperience].length,
    "MUSINSA, ADSB, Suno 기반 AI 음악/MV",
    "Wanted",
    postingUrl,
    createdSerialDate,
    revisedSerialDate,
    "원문 수정완료. PDF 생성/렌더는 사용자 지시 전 보류.",
  ],
];

archive.getRange("A63:M64").values = archiveRows;

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "formula error scan after Soulblend update",
});
console.log(errors.ndjson);

const mainCheck = await workbook.inspect({
  kind: "table",
  sheetId: "지원관리",
  range: "A54:P59",
  tableMaxRows: 6,
  tableMaxCols: 16,
  tableMaxCellChars: 180,
  maxChars: 12000,
});
console.log(mainCheck.ndjson);

const archiveCheck = await workbook.inspect({
  kind: "table",
  sheetId: "회사별자소서",
  range: "A62:M64",
  tableMaxRows: 3,
  tableMaxCols: 13,
  tableMaxCellChars: 140,
  maxChars: 10000,
});
console.log(archiveCheck.ndjson);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);
console.log(`saved ${workbookPath}`);
