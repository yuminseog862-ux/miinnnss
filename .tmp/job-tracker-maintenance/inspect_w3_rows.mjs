import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

for (const sheetName of ["지원관리", "회사별자소서"]) {
  const matches = await workbook.inspect({
    kind: "match",
    searchTerm: "더블유|W3|w3company|더블유쓰리",
    options: { useRegex: true, maxResults: 50 },
    summary: `${sheetName} W3 match scan`,
  });
  console.log(matches.ndjson || "");
}

for (const range of ["지원관리!A1:O80", "회사별자소서!A1:H50"]) {
  const table = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 90,
    tableMaxCols: 15,
  });
  console.log(table.ndjson || "");
}
