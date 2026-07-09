import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const previewPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/saebyeoknesi-tracker-preview.png";

const submittedDateSerial = 46197; // 2026-06-24 in the existing tracker convention.
const jobUrl = "https://www.wanted.co.kr/wd/355789?recommender_key=jDPXye__okmJzZ";
const wantedIntro =
  "AI Creative 기반 콘텐츠/브랜드 마케팅 신입입니다. 저는 AI를 단순 제작 도구가 아니라, 고객과 브랜드 맥락을 읽고 어떤 메시지와 장면이 실제 반응으로 이어질지 빠르게 검증하는 작업 방식으로 사용해왔습니다. 무신사 AI 광고제에서는 캠페인 메시지를 30초 숏폼 광고 구조로 전환했고, ADSB 산학협력에서는 브랜드 무드와 피드백을 15초 AI 숏폼의 컷 흐름으로 정리했습니다. Loom에서는 13명 AI 아이돌 IP를 트랙, 스토리보드, 영상 후보, TikTok/X용 클립과 공개 웹 경험으로 연결하며 콘텐츠가 어떻게 소비되고 반응될지까지 설계했습니다. AHEYA에서는 서비스 메시지, CTA, 초기 반응 흐름을 공개 채널 콘텐츠와 시각 자산으로 풀어냈습니다. TikCle에서는 글로벌 브랜드가 원하는 고객 반응을 읽고, 인플루언서 시딩이 단순 노출이 아니라 구매와 브랜드 경험으로 이어질 수 있도록 메시지, 콘텐츠 가설, 실행 기록을 빠르게 만드는 신입 마케터로 기여하고 싶습니다.";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const tracker = workbook.worksheets.getItem("지원관리");
const drafts = workbook.worksheets.getItem("회사별자소서");

const trackerValues = tracker.getRange("A9:P220").values;
let trackerRowIndex = -1;
for (let i = 0; i < trackerValues.length; i += 1) {
  const row = trackerValues[i] ?? [];
  if (row.includes("새벽네시") || row.includes("AI-Native Global Marketer")) {
    trackerRowIndex = i + 9;
    break;
  }
}

const trackerRow = [
  "완료",
  "지원완료",
  "새벽네시",
  "AI-Native Global Marketer",
  "AI-native Global Marketing + TikCle CSM",
  "Wanted",
  "상시/미표시",
  "신입/경력 0-4년",
  84,
  "Wanted 이력서 / 간단소개 새벽네시·TikCle 방향 교체 / 포트폴리오 링크",
  "결과 대기",
  "지원 완료. 제목은 AI-Native Global Marketer지만 실제 역할은 TikCle 글로벌 인플루언서 시딩을 성장시키는 고객 성공형 마케팅 실행자에 가까움. 고객 니즈, 콘텐츠 스토리, 성과 연결 중심으로 해석.",
  jobUrl,
  submittedDateSerial,
  "2026-06-24 사용자가 직접 Wanted 제출. 원티드 간단소개를 고객 니즈·성과·글로벌 시딩 방향으로 교체해 제출한 것으로 기록.",
  "완료",
];

if (trackerRowIndex === -1) {
  tracker.getRange("A65:P65").copyFrom(tracker.getRange("A64:P64"), "all");
  tracker.getRange("A65:P65").values = [trackerRow];
} else {
  tracker.getRange(`A${trackerRowIndex}:P${trackerRowIndex}`).values = [trackerRow];
}

const draftValues = drafts.getRange("A5:M220").values;
let draftRowIndex = -1;
for (let i = 0; i < draftValues.length; i += 1) {
  const row = draftValues[i] ?? [];
  if (row[1] === "새벽네시" && row[2] === "AI-Native Global Marketer" && row[3] === "Wanted 간단소개") {
    draftRowIndex = i + 5;
    break;
  }
}

const draftRow = [
  "제출반영",
  "새벽네시",
  "AI-Native Global Marketer",
  "Wanted 간단소개",
  "TikCle 글로벌 인플루언서 시딩 + 고객 성공형 AI-native marketer",
  wantedIntro,
  wantedIntro.length,
  "MUSINSA, ADSB, Loom/Pulso, AHEYA",
  "Wanted",
  jobUrl,
  submittedDateSerial,
  submittedDateSerial,
  "2026-06-24 원티드 이력서 간단소개 교체 후 사용자가 직접 제출. 공고 데이터상 별도 외부 지원 링크/추가 지원 타입 없음.",
];

if (draftRowIndex === -1) {
  drafts.getRange("A67:M67").copyFrom(drafts.getRange("A66:M66"), "all");
  drafts.getRange("A67:M67").values = [draftRow];
} else {
  drafts.getRange(`A${draftRowIndex}:M${draftRowIndex}`).values = [draftRow];
}

tracker.getRange("B4").values = [[46]];
tracker.getRange("B5").values = [[19]];

const trackerCheck = await workbook.inspect({
  kind: "match,region",
  searchTerm: "새벽네시|AI-Native Global Marketer",
  options: { useRegex: true, maxResults: 20 },
  range: "A60:P68",
  tableMaxRows: 10,
  tableMaxCols: 16,
  tableMaxCellChars: 140,
  maxChars: 12000,
});
console.log(trackerCheck.ndjson);

const errorScan = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
console.log(errorScan.ndjson);

const preview = await workbook.render({
  sheetName: "지원관리",
  range: "A1:P68",
  scale: 1,
  format: "png",
});
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

console.log(JSON.stringify({ saved: workbookPath, preview: previewPath }));
