import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const summary = await workbook.inspect({
  kind: "sheet,match,region",
  searchTerm: "새벽네시|AI-Native Global Marketer",
  options: { useRegex: true, maxResults: 20 },
  range: "A1:O80",
  tableMaxRows: 12,
  tableMaxCols: 15,
  tableMaxCellChars: 120,
  maxChars: 12000,
});

console.log(summary.ndjson);
