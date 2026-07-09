import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const row = await workbook.inspect({
  kind: "table",
  range: "지원관리!A1:O1",
  include: "values,formulas",
  tableMaxRows: 1,
  tableMaxCols: 15,
});
console.log(row.ndjson);

const data = await workbook.inspect({
  kind: "table",
  range: "지원관리!A34:O34",
  include: "values,formulas",
  tableMaxRows: 1,
  tableMaxCols: 15,
});
console.log(data.ndjson);
