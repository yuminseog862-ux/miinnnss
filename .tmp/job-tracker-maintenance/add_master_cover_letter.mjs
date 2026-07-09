import fs from "node:fs";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const markdownPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/master-ai-creative-cover-letter-2026-06-19.md";

const markdown = fs.readFileSync(markdownPath, "utf8");
const masterText = markdown
  .split("## 공통 정본")[1]
  .split("## 회사별 교체 문장")[0]
  .trim();
const swapSentence = markdown
  .split("## 회사별 교체 문장")[1]
  .trim()
  .split("\n")
  .filter((line) => line.startsWith("`"))[0]
  .replaceAll("`", "");

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");

sheet.getRange("A44:M45").values = [
  [
    "작성완료",
    "공통정본",
    "AI Creative / Marketing / PMM 공통",
    "공통 자기소개서 정본",
    "AI Creative + 콘텐츠/브랜드 마케팅 + PMM",
    masterText,
    masterText.length,
    "MUSINSA, ADSB, Loom/Pulso, AHEYA(선택)",
    "공통",
    "",
    46192,
    46192,
    "루먼랩 제출본과 잡코리아 자기소개서 문안을 합쳐 회사명 없이 재사용 가능한 정본으로 작성.",
  ],
  [
    "작성완료",
    "공통정본",
    "AI Creative / Marketing / PMM 공통",
    "회사별 교체 문장",
    "회사/서비스별 마지막 문장 교체용",
    swapSentence,
    swapSentence.length,
    "공통",
    "공통",
    "",
    46192,
    46192,
    "정본 마지막 문장을 회사별로 바꿀 때 사용하는 템플릿.",
  ],
];

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "table",
  range: "회사별자소서!A44:M45",
  include: "values,formulas",
  tableMaxRows: 2,
  tableMaxCols: 13,
});
console.log(check.ndjson);
