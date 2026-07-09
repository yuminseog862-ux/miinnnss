import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

for (const range of ["지원관리!A1:O120", "회사별자소서!A1:M140"]) {
  const sheetName = range.split("!")[0];
  const values = workbook.worksheets.getItem(sheetName).getRange(range.split("!")[1]).values;
  const rows = [];
  values.forEach((row, index) => {
    if (row.some((value) => String(value ?? "").includes("네이버웹툰"))) {
      rows.push({ rowNumber: index + 1, row });
    }
  });
  console.log(JSON.stringify({ sheetName, rows }, null, 2));
}
