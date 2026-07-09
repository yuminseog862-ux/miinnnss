import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("지원관리");
const values = sheet.getRange("A8:P67").values;

const [header, ...rows] = values;
const records = rows
  .filter((row) => row.some((cell) => cell !== null && cell !== ""))
  .map((row, index) => {
    const record = { rowNumber: index + 9 };
    header.forEach((key, colIndex) => {
      record[key] = row[colIndex];
    });
    return record;
  });

console.log(JSON.stringify(records, null, 2));
