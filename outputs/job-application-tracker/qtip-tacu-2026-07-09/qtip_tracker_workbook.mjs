import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const outputDir = "/Users/yuminseog/portfolio/outputs/job-application-tracker/qtip-tacu-2026-07-09";
const draftPath = path.join(outputDir, "qtip-tacu-jobkorea-draft-2026-07-09.md");
const company = "㈜큐팁";
const postingTitle = "[tacu.ai] AI 영상 크리에이티브 디렉터 (Creative Director) 채용";
const postingUrl = "https://www.jobkorea.co.kr/Recruit/GI_Read/49221396";
const writtenDate = new Date(Date.UTC(2026, 6, 9));

async function loadWorkbook() {
  const input = await FileBlob.load(workbookPath);
  return SpreadsheetFile.importXlsx(input);
}

async function savePreview(workbook, sheetName, filename) {
  const preview = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(path.join(outputDir, filename), new Uint8Array(await preview.arrayBuffer()));
}

async function inspectWorkbook() {
  const workbook = await loadWorkbook();
  await fs.mkdir(outputDir, { recursive: true });

  const sheetSummary = await workbook.inspect({
    kind: "sheet,table",
    include: "id,name",
    maxChars: 6000,
    tableMaxRows: 4,
    tableMaxCols: 8,
  });
  console.log("SHEET_SUMMARY");
  console.log(sheetSummary.ndjson);

  const archive = await workbook.inspect({
    kind: "region",
    sheetId: "회사별자소서",
    range: "A1:M60",
    maxChars: 12000,
    tableMaxRows: 65,
    tableMaxCols: 13,
    tableMaxCellChars: 160,
  });
  console.log("ARCHIVE_REGION");
  console.log(archive.ndjson);

  const qtipInArchive = await workbook.inspect({
    kind: "match",
    sheetId: "회사별자소서",
    searchTerm: "큐팁|tacu|Tacu",
    options: { useRegex: true, maxResults: 20 },
    maxChars: 6000,
  });
  console.log("QTIP_ARCHIVE_MATCHES");
  console.log(qtipInArchive.ndjson);

  const qtipInTracker = await workbook.inspect({
    kind: "match",
    sheetId: "지원관리",
    searchTerm: "큐팁|tacu|Tacu",
    options: { useRegex: true, maxResults: 20 },
    maxChars: 6000,
  });
  console.log("QTIP_TRACKER_MATCHES");
  console.log(qtipInTracker.ndjson);

  const archiveStyle = await workbook.inspect({
    kind: "computedStyle",
    sheetId: "회사별자소서",
    range: "A1:M4",
    maxChars: 8000,
  });
  console.log("ARCHIVE_STYLE");
  console.log(archiveStyle.ndjson);

  await savePreview(workbook, "회사별자소서", "archive-preview.png");
  await savePreview(workbook, "지원관리", "tracker-preview.png");
}

function section(markdown, heading, nextHeading) {
  const start = markdown.indexOf(`## ${heading}`);
  if (start === -1) {
    throw new Error(`Missing heading: ${heading}`);
  }
  const bodyStart = markdown.indexOf("\n", start) + 1;
  const end = nextHeading ? markdown.indexOf(`## ${nextHeading}`, bodyStart) : markdown.length;
  if (end === -1) {
    throw new Error(`Missing next heading: ${nextHeading}`);
  }
  return markdown.slice(bodyStart, end).trim();
}

function textLength(text) {
  return [...text].length;
}

function archiveRows(markdown) {
  const full = section(markdown, "잡코리아 제출용 수정 자기소개서", "짧은 버전");
  const short = section(markdown, "짧은 버전", "기타사항/포트폴리오 메모");
  const memo = section(markdown, "기타사항/포트폴리오 메모", "잡코리아 붙여넣기 순서");

  return [
    [
      "작성완료",
      company,
      postingTitle,
      "잡코리아 자기소개서",
      "AI Video Creative Direction + 콘텐츠/브랜드 마케팅 신입",
      full,
      textLength(full),
      "MUSINSA, Loom/Pulso, INK, ADSB",
      "잡코리아 즉시지원",
      postingUrl,
      writtenDate,
      writtenDate,
      "제출완료 아님. 기획·서사·광고 카피·AI 모델 판단·A/B 테스트·워크플로우 자산화 중심.",
    ],
    [
      "작성완료",
      company,
      postingTitle,
      "잡코리아 자기소개서 짧은 버전",
      "글자수 제한 대응용 AI Creative 요약",
      short,
      textLength(short),
      "MUSINSA, Loom/Pulso, ADSB",
      "잡코리아 즉시지원",
      postingUrl,
      writtenDate,
      writtenDate,
      "글자수 제한 또는 빠른 붙여넣기용. 편집툴 숙련 과장 금지.",
    ],
    [
      "작성완료",
      company,
      postingTitle,
      "기타사항/포트폴리오 메모",
      "포트폴리오 제출 전 확인 및 표현 기준",
      memo,
      textLength(memo),
      "MUSINSA, Loom/Pulso, INK, ADSB",
      "잡코리아 즉시지원",
      postingUrl,
      writtenDate,
      writtenDate,
      "포트폴리오에는 직접 제작 AI 영상, 사용 툴, 워크플로우, 시행착오, 기여범위 포함.",
    ],
  ];
}

function findArchiveRowIndexes(values, rows) {
  const wantedSections = new Set(rows.map((row) => row[3]));
  const matches = [];
  values.forEach((row, index) => {
    if (row[1] === company && row[2] === postingTitle && wantedSections.has(row[3])) {
      matches.push(index + 1);
    }
  });
  return matches;
}

function rowRange(rowNumber) {
  return `A${rowNumber}:M${rowNumber}`;
}

async function updateWorkbook() {
  const markdown = await fs.readFile(draftPath, "utf8");
  const rows = archiveRows(markdown);
  const workbook = await loadWorkbook();
  const archiveSheet = workbook.worksheets.getItem("회사별자소서");
  const trackerSheet = workbook.worksheets.getItem("지원관리");

  const archiveUsed = archiveSheet.getUsedRange(true);
  const archiveValues = archiveUsed.values;
  const existingArchiveRows = findArchiveRowIndexes(archiveValues, rows);
  const lastArchiveRow = archiveValues.length;

  if (existingArchiveRows.length > 0) {
    for (const existingRow of existingArchiveRows) {
      archiveSheet.getRange(rowRange(existingRow)).clear({ applyTo: "contents" });
    }
  }

  const writeStart = existingArchiveRows.length > 0 ? existingArchiveRows[0] : lastArchiveRow + 1;
  for (let i = 0; i < rows.length; i += 1) {
    const targetRow = writeStart + i;
    if (targetRow > lastArchiveRow) {
      archiveSheet.getRange(rowRange(lastArchiveRow)).copyTo(archiveSheet.getRange(rowRange(targetRow)), "all");
    }
    archiveSheet.getRange(rowRange(targetRow)).values = [rows[i]];
  }

  const archiveTarget = archiveSheet.getRange(`A${writeStart}:M${writeStart + rows.length - 1}`);
  archiveTarget.format.wrapText = true;
  archiveSheet.getRange(`K${writeStart}:L${writeStart + rows.length - 1}`).format.numberFormat = "yyyy-mm-dd";
  archiveSheet.getRange(`G${writeStart}:G${writeStart + rows.length - 1}`).format.numberFormat = "0";

  const trackerValues = trackerSheet.getUsedRange(true).values;
  const trackerIndex = trackerValues.findIndex((row) => row[2] === company && row[3] === postingTitle);
  if (trackerIndex === -1) {
    throw new Error("Could not find Qtip row in 지원관리.");
  }
  const trackerRow = trackerIndex + 1;
  const oldNote = trackerValues[trackerIndex][14] ?? "";
  const updatedNote = oldNote.includes("회사별 자소서 작성완료")
    ? oldNote
    : `${oldNote} / 2026-07-09 회사별 자소서 작성완료`.trim();

  trackerSheet.getRange(`J${trackerRow}:K${trackerRow}`).values = [
    [
      "회사별 자소서 작성완료, 포트폴리오 PDF/영상 링크/기여범위 확인 필요",
      "사용자 검토 후 붙여넣고 지원",
    ],
  ];
  trackerSheet.getRange(`N${trackerRow}:P${trackerRow}`).values = [
    [writtenDate, updatedNote, "자소서 작성완료/제출 전 확인"],
  ];
  trackerSheet.getRange(`N${trackerRow}`).format.numberFormat = "yyyy-mm-dd";

  const backupPath = path.join(outputDir, "ai_creative_marketing_application_tracker_2026-06-15.before-qtip-update.xlsx");
  await fs.copyFile(workbookPath, backupPath);
  const output = await SpreadsheetFile.exportXlsx(workbook);
  await output.save(workbookPath);

  const verificationWorkbook = await loadWorkbook();
  const archiveCheck = await verificationWorkbook.inspect({
    kind: "region",
    sheetId: "회사별자소서",
    range: `A${writeStart}:M${writeStart + rows.length - 1}`,
    maxChars: 12000,
    tableMaxRows: 4,
    tableMaxCols: 13,
    tableMaxCellChars: 220,
  });
  console.log("ARCHIVE_CHECK");
  console.log(archiveCheck.ndjson);

  const trackerCheck = await verificationWorkbook.inspect({
    kind: "region",
    sheetId: "지원관리",
    range: `A${trackerRow}:P${trackerRow}`,
    maxChars: 6000,
    tableMaxRows: 2,
    tableMaxCols: 16,
    tableMaxCellChars: 220,
  });
  console.log("TRACKER_CHECK");
  console.log(trackerCheck.ndjson);

  const errors = await verificationWorkbook.inspect({
    kind: "match",
    searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
    options: { useRegex: true, maxResults: 300 },
    maxChars: 4000,
  });
  console.log("FORMULA_ERROR_SCAN");
  console.log(errors.ndjson);

  await savePreview(verificationWorkbook, "회사별자소서", "archive-preview-after.png");
  await savePreview(verificationWorkbook, "지원관리", "tracker-preview-after.png");
  console.log(`UPDATED_ARCHIVE_ROWS ${writeStart}-${writeStart + rows.length - 1}`);
  console.log(`UPDATED_TRACKER_ROW ${trackerRow}`);
  console.log(`BACKUP ${backupPath}`);
}

async function markSubmitted() {
  const workbook = await loadWorkbook();
  const archiveSheet = workbook.worksheets.getItem("회사별자소서");
  const trackerSheet = workbook.worksheets.getItem("지원관리");

  const trackerValues = trackerSheet.getUsedRange(true).values;
  const trackerIndex = trackerValues.findIndex((row) => row[2] === company && row[3] === postingTitle);
  if (trackerIndex === -1) {
    throw new Error("Could not find Qtip row in 지원관리.");
  }

  const trackerRow = trackerIndex + 1;
  const currentNote = trackerValues[trackerIndex][14] ?? "";
  const submittedNote = currentNote.includes("2026-07-09 잡코리아 실제 제출 완료")
    ? currentNote
    : `${currentNote} / 2026-07-09 잡코리아 실제 제출 완료`.trim();

  trackerSheet.getRange(`A${trackerRow}:B${trackerRow}`).values = [["완료", "지원완료"]];
  trackerSheet.getRange(`J${trackerRow}:K${trackerRow}`).values = [
    ["제출 완료: 잡코리아 이력서/자기소개서/포트폴리오", "결과 대기"],
  ];
  trackerSheet.getRange(`N${trackerRow}:P${trackerRow}`).values = [[writtenDate, submittedNote, "완료"]];
  trackerSheet.getRange(`N${trackerRow}`).format.numberFormat = "yyyy-mm-dd";

  const archiveValues = archiveSheet.getUsedRange(true).values;
  const changedRows = [];
  archiveValues.forEach((row, index) => {
    if (row[1] === company && row[2] === postingTitle) {
      const rowNumber = index + 1;
      archiveSheet.getRange(`A${rowNumber}`).values = [["제출반영"]];
      archiveSheet.getRange(`L${rowNumber}`).values = [[writtenDate]];
      archiveSheet.getRange(`L${rowNumber}`).format.numberFormat = "yyyy-mm-dd";
      const note = row[12] ?? "";
      const nextNote = note.includes("2026-07-09 실제 잡코리아 지원 반영")
        ? note
        : `${note} / 2026-07-09 실제 잡코리아 지원 반영`.trim();
      archiveSheet.getRange(`M${rowNumber}`).values = [[nextNote]];
      changedRows.push(rowNumber);
    }
  });

  if (changedRows.length === 0) {
    throw new Error("Could not find Qtip rows in 회사별자소서.");
  }

  const backupPath = path.join(outputDir, "ai_creative_marketing_application_tracker_2026-06-15.before-qtip-submitted.xlsx");
  await fs.copyFile(workbookPath, backupPath);
  const output = await SpreadsheetFile.exportXlsx(workbook);
  await output.save(workbookPath);

  const verificationWorkbook = await loadWorkbook();
  const trackerCheck = await verificationWorkbook.inspect({
    kind: "region",
    sheetId: "지원관리",
    range: `A${trackerRow}:P${trackerRow}`,
    maxChars: 7000,
    tableMaxRows: 2,
    tableMaxCols: 16,
    tableMaxCellChars: 260,
  });
  console.log("TRACKER_SUBMIT_CHECK");
  console.log(trackerCheck.ndjson);

  const archiveCheck = await verificationWorkbook.inspect({
    kind: "region",
    sheetId: "회사별자소서",
    range: `A${Math.min(...changedRows)}:M${Math.max(...changedRows)}`,
    maxChars: 9000,
    tableMaxRows: changedRows.length + 1,
    tableMaxCols: 13,
    tableMaxCellChars: 220,
  });
  console.log("ARCHIVE_SUBMIT_CHECK");
  console.log(archiveCheck.ndjson);

  const errors = await verificationWorkbook.inspect({
    kind: "match",
    searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
    options: { useRegex: true, maxResults: 300 },
    maxChars: 4000,
  });
  console.log("FORMULA_ERROR_SCAN");
  console.log(errors.ndjson);

  await savePreview(verificationWorkbook, "지원관리", "tracker-preview-submitted.png");
  await savePreview(verificationWorkbook, "회사별자소서", "archive-preview-submitted.png");
  console.log(`UPDATED_TRACKER_ROW ${trackerRow}`);
  console.log(`UPDATED_ARCHIVE_ROWS ${changedRows.join(",")}`);
  console.log(`BACKUP ${backupPath}`);
}

const mode = process.argv[2] ?? "inspect";

if (mode === "inspect") {
  await inspectWorkbook();
} else if (mode === "update") {
  await updateWorkbook();
} else if (mode === "submit") {
  await markSubmitted();
} else {
  throw new Error(`Unknown mode: ${mode}`);
}
