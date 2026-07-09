import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");

sheet.getRange("A14:A16").values = [["보류"], ["보류"], ["보류"]];
sheet.getRange("E14:E16").values = [
  ["Music Content Planning + Marketing (AI 미명시)"],
  ["Track/IP content planning (AI 미명시)"],
  ["음악 콘텐츠 기획과 마케팅 실행 (AI 미명시)"],
];

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "table",
  range: "회사별자소서!A14:E16",
  include: "values,formulas",
  tableMaxRows: 3,
  tableMaxCols: 5,
});
console.log(check.ndjson);
