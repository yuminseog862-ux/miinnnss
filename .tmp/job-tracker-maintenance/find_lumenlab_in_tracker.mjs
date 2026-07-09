import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const result = await workbook.inspect({
  kind: "match",
  searchTerm: "루먼랩",
  options: { maxResults: 50 },
  summary: "Find LumenLab rows",
});

console.log(result.ndjson);
