import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const backupPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.before-illryu-ai-reclass.xlsx";

try {
  await fs.copyFile(workbookPath, backupPath);
} catch {
  // If the backup already exists, keep the first copy.
}

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("지원관리");

sheet.getRange("A34:O34").values = [[
  "C",
  "보류",
  "일류ENT",
  "[강남] 음악 콘텐츠 기획, 마케터 모집",
  "Music Content Planning + Marketing (AI 미명시)",
  "잡코리아 온라인/이메일",
  46193,
  "신입/경력",
  68,
  "지원 시 일반 콘텐츠/음악 마케팅형 자소서",
  "AI 최우선 후보 아님. 음악 콘텐츠/마케팅 백업으로만 보류",
  "공고 자체에 AI 활용 요구 없음. Pulso/AHEYA는 보조 근거로만 사용하고 AI creative 핵심 지원군에서 제외.",
  "https://www.jobkorea.co.kr/Recruit/GI_Read/49030050",
  46191,
  "사용자 정정 반영: AI 미명시. 마감 2026-06-20",
]];

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log(errors.ndjson || "");

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "table",
  range: "지원관리!A34:O34",
  include: "values,formulas",
  tableMaxRows: 1,
  tableMaxCols: 15,
});
console.log(check.ndjson);
