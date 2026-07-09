import fs from "node:fs/promises";

import {
  FileBlob,
  SpreadsheetFile,
} from "/Users/yuminseog/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const outputDir =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/soulblend/qa";

await fs.mkdir(outputDir, { recursive: true });

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const mainPreview = await workbook.render({
  sheetName: "지원관리",
  range: "A54:P60",
  scale: 1,
  format: "png",
});
await fs.writeFile(
  `${outputDir}/soulblend-tracker-current-main-2026-06-24.png`,
  new Uint8Array(await mainPreview.arrayBuffer()),
);

const archivePreview = await workbook.render({
  sheetName: "회사별자소서",
  range: "A62:M65",
  scale: 1,
  format: "png",
});
await fs.writeFile(
  `${outputDir}/soulblend-tracker-current-archive-2026-06-24.png`,
  new Uint8Array(await archivePreview.arrayBuffer()),
);

const mainStyle = await workbook.inspect({
  kind: "computedStyle",
  sheetId: "지원관리",
  range: "A59:P59",
  maxChars: 6000,
});
console.log(mainStyle.ndjson);

const archiveStyle = await workbook.inspect({
  kind: "computedStyle",
  sheetId: "회사별자소서",
  range: "A63:M64",
  maxChars: 6000,
});
console.log(archiveStyle.ndjson);
