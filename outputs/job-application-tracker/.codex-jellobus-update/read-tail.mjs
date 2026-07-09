import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("지원관리");

const tail = await workbook.inspect({
  kind: "table",
  sheetId: "지원관리",
  range: "A60:P64",
  maxChars: 12000,
  tableMaxRows: 20,
  tableMaxCols: 16,
  tableMaxCellChars: 120,
});
console.log(tail.ndjson);

const formulas = await workbook.inspect({
  kind: "formula",
  sheetId: "지원관리",
  range: "A1:P8",
  maxChars: 6000,
  options: { maxResults: 100 },
});
console.log(formulas.ndjson);

console.log(JSON.stringify(sheet.getRange("A4:D6").values));
