import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

for (const range of ["지원관리!A16:O16", "회사별자소서!A5:J7"]) {
  const result = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 8,
    tableMaxCols: 15,
  });
  console.log(result.ndjson);
}
