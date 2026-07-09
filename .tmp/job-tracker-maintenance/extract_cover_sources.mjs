import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const sourceRows = [
  "회사별자소서!A35:M38",
  "회사별자소서!A29:M31",
];

for (const range of sourceRows) {
  const result = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 8,
    tableMaxCols: 13,
  });
  console.log(result.ndjson);
}
