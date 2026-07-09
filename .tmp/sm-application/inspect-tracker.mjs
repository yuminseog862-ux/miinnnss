import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const summary = await workbook.inspect({
  kind: "workbook,sheet,table",
  maxChars: 10000,
  tableMaxRows: 8,
  tableMaxCols: 14,
  tableMaxCellChars: 120,
});

console.log(summary.ndjson);

for (const sheetName of ["지원관리", "회사별자소서"]) {
  try {
    const sheet = workbook.worksheets.getItem(sheetName);
    const used = sheet.getUsedRange(true);
    console.log(`\n--- ${sheetName} used range values ---`);
    console.log(JSON.stringify(used.values.slice(0, 12), null, 2));
    const match = await workbook.inspect({
      kind: "match",
      searchTerm: "에스엠|SM Entertainment|잡코리아 기본|Wanted|원티드|루먼랩|코코스타즈",
      options: { useRegex: true, maxResults: 80 },
      maxChars: 20000,
    });
    console.log(match.ndjson);
  } catch (error) {
    console.log(`Sheet ${sheetName} not available`, error.message);
  }
}
