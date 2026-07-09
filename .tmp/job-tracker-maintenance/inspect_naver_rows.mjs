import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");
const values = sheet.getRange("A35:M55").values;

for (const [index, row] of values.entries()) {
  if (row[1] === "네이버웹툰") {
    console.log(index + 35, JSON.stringify(row.slice(0, 8)));
  }
}
