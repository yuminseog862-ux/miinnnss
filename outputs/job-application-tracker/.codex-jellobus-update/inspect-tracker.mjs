import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const summary = await workbook.inspect({
  kind: "workbook,sheet,table",
  maxChars: 12000,
  tableMaxRows: 12,
  tableMaxCols: 18,
  tableMaxCellChars: 80,
});
console.log(summary.ndjson);

const match = await workbook.inspect({
  kind: "match",
  searchTerm: "젤로버스|Zello|Jello|zeloverse",
  options: { useRegex: true, maxResults: 50 },
  maxChars: 6000,
});
console.log(match.ndjson);
