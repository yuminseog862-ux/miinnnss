import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const outputDir = "/Users/yuminseog/portfolio/.tmp/solomoncode-tracker";

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const sheetList = await workbook.inspect({
  kind: "sheet",
  include: "id,name",
  maxChars: 4000,
});
console.log("SHEETS");
console.log(sheetList.ndjson);

const summary = await workbook.inspect({
  kind: "workbook,sheet,table",
  maxChars: 7000,
  tableMaxRows: 4,
  tableMaxCols: 14,
  tableMaxCellChars: 120,
});
console.log("SUMMARY");
console.log(summary.ndjson);

const archive = workbook.worksheets.getItem("회사별자소서");
const used = archive.getUsedRange();
console.log("USED_RANGE", used.address);

const headers = archive.getRange("A1:M1").values;
console.log("HEADERS", JSON.stringify(headers));

const rowCount = used.rowCount;
const startRow = Math.max(1, rowCount - 12);
const recent = archive.getRangeByIndexes(startRow - 1, 0, rowCount - startRow + 1, 13).values;
console.log("RECENT_START_ROW", startRow);
console.log(JSON.stringify(recent, null, 2));

const style = await workbook.inspect({
  kind: "computedStyle",
  sheetId: "회사별자소서",
  range: `A${Math.max(1, rowCount - 2)}:M${rowCount}`,
  maxChars: 5000,
});
console.log("STYLE");
console.log(style.ndjson);

const preview = await workbook.render({
  sheetName: "회사별자소서",
  range: `A1:M${Math.min(rowCount, 18)}`,
  scale: 1,
  format: "png",
});
await fs.writeFile(`${outputDir}/company-draft-archive-preview.png`, new Uint8Array(await preview.arrayBuffer()));
