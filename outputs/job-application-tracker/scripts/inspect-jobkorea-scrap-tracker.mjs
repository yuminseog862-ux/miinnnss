import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const overview = await workbook.inspect({
  kind: "workbook,sheet,table",
  maxChars: 8000,
  tableMaxRows: 8,
  tableMaxCols: 18,
  tableMaxCellChars: 120,
});
console.log(overview.ndjson);

const support = await workbook.inspect({
  kind: "region",
  sheetId: "지원관리",
  range: "A1:P120",
  maxChars: 12000,
});
console.log(support.ndjson);
