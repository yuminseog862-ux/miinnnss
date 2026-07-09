import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const collectedPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/jobkorea-scrap-2026-07-09/jobkorea-scrap-collected.json";

const toCanonical = (url = "") => {
  const match = String(url).match(/GI_Read\/(\d+)/);
  return match ? `https://www.jobkorea.co.kr/Recruit/GI_Read/${match[1]}` : String(url).split("?")[0];
};

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("지원관리");
const values = sheet.getRange("A1:P80").values;
const formulas = sheet.getRange("A1:P8").formulas;
const headers = values[7];
const rows = values
  .slice(8)
  .map((row, idx) => ({ rowNumber: idx + 9, row }))
  .filter(({ row }) => row.some((cell) => cell !== null && cell !== ""));
const records = rows.map(({ rowNumber, row }) => {
  const record = { rowNumber };
  headers.forEach((header, index) => {
    record[header] = row[index];
  });
  record.canonical = toCanonical(record["공고 URL"]);
  return record;
});

const collected = JSON.parse(await fs.readFile(collectedPath, "utf8"));
const matched = collected.map((job) => {
  const canonical = toCanonical(job.canonicalUrl || job.url);
  const existing = records.find((record) => record.canonical === canonical);
  return {
    company: job.fullCompany || job.company,
    title: job.title,
    canonical,
    existingRow: existing?.rowNumber ?? null,
    existingStatus: existing?.["상태"] ?? null,
    existingCompany: existing?.["회사"] ?? null,
    existingTitle: existing?.["공고명"] ?? null,
  };
});

console.log(
  JSON.stringify(
    {
      summaryFormulas: formulas.slice(3, 6).map((row) => row.slice(0, 6)),
      currentRows: records.length,
      matches: matched,
    },
    null,
    2,
  ),
);
