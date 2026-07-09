import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";

const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(workbookPath));
const sheet = workbook.worksheets.getItem("회사별자소서");

for (const range of ["A20:M30", "A44:M55", "A70:M79"]) {
  const values = sheet.getRange(range).values;
  console.log(`\n--- ${range} ---`);
  values.forEach((row, idx) => {
    console.log(JSON.stringify({ row: Number(range.match(/\d+/)[0]) + idx, values: row }));
  });
}

const main = workbook.worksheets.getItem("지원관리");
console.log("\n--- 지원관리 A80:P84 ---");
main.getRange("A80:P84").values.forEach((row, idx) => {
  console.log(JSON.stringify({ row: 80 + idx, values: row }));
});
