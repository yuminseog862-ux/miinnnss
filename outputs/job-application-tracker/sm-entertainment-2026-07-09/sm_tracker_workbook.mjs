import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const outputDir = "/Users/yuminseog/portfolio/outputs/job-application-tracker/sm-entertainment-2026-07-09";
const draftPath = path.join(outputDir, "sm-entertainment-mv-application-draft-2026-07-09.md");
const company = "㈜에스엠엔터테인먼트";
const postingTitle = "[SM Entertainment] M/V 담당자 채용 (신입/경력)";
const jobkoreaUrl = "https://www.jobkorea.co.kr/Recruit/GI_Read/49437728";
const officialUrl = "https://recruit.smentertainment.com/ko/o/224134";
const writtenDate = new Date(Date.UTC(2026, 6, 9));

async function loadWorkbook() {
  return SpreadsheetFile.importXlsx(await FileBlob.load(workbookPath));
}

function textLength(text) {
  return [...text].length;
}

function section(markdown, heading, nextHeading) {
  const start = markdown.indexOf(`## ${heading}`);
  if (start === -1) throw new Error(`Missing heading: ${heading}`);
  const bodyStart = markdown.indexOf("\n", start) + 1;
  const end = nextHeading ? markdown.indexOf(`## ${nextHeading}`, bodyStart) : markdown.length;
  if (end === -1) throw new Error(`Missing next heading: ${nextHeading}`);
  return markdown.slice(bodyStart, end).trim();
}

function stripChecklist(text) {
  return text.replace(/^- \[ \] /gm, "- ");
}

function archiveRows(markdown) {
  const formResult = section(markdown, "공식 지원 양식 확인 결과", "공고 분석");
  const analysis = section(markdown, "공고 분석", "필요 제출자료");
  const title = section(markdown, "SM용 이력서 제목 추천", "SM용 자기소개서/기타사항 초안");
  const full = section(markdown, "SM용 자기소개서/기타사항 초안", "SM용 짧은 자기소개/기타사항");
  const short = section(markdown, "SM용 짧은 자기소개/기타사항", "포트폴리오 선별안");
  const portfolio = section(markdown, "포트폴리오 선별안", "제출 전 체크리스트");
  const checklist = stripChecklist(section(markdown, "제출 전 체크리스트"));
  const positioning =
    "음악/IP/M/V 프로모션 영상 기획. AI Creative 기반 신입/졸업예정자로, 곡과 팬덤 맥락을 장면 흐름·스토리보드·검수 기준으로 구체화하는 지원자.";

  return [
    [
      "작성완료",
      company,
      postingTitle,
      "공식 지원 양식 확인 결과",
      positioning,
      formResult,
      textLength(formResult),
      "Loom/Pulso, INK, MUSINSA, ADSB",
      "SM Career 공식 홈페이지",
      officialUrl,
      writtenDate,
      writtenDate,
      "로그인 전 확인 가능 범위. 실제 사전질문/첨부 칸은 로그인 후 재확인 필요. 최종 제출 금지.",
    ],
    [
      "작성완료",
      company,
      postingTitle,
      "공고 분석/리스크 메모",
      positioning,
      analysis,
      textLength(analysis),
      "Loom/Pulso, INK, MUSINSA, ADSB",
      "SM Career 공식 홈페이지/잡코리아",
      `${officialUrl} / ${jobkoreaUrl}`,
      writtenDate,
      writtenDate,
      "AI 공고가 아니므로 음악/IP/영상 기획, 참여도 70% 기준, 졸업예정 리스크 중심.",
    ],
    [
      "작성완료",
      company,
      postingTitle,
      "이력서 제목",
      "M/V·프로모션 영상 기획형 제목",
      title,
      textLength(title),
      "Loom/Pulso, MUSINSA, ADSB",
      "SM Career 공식 홈페이지",
      officialUrl,
      writtenDate,
      writtenDate,
      "추천 1을 우선 사용. 이력서 제목만 바꿔 빠르게 지원할 때 필수 참고.",
    ],
    [
      "작성완료",
      company,
      postingTitle,
      "자기소개서/기타사항 초안",
      positioning,
      full,
      textLength(full),
      "Loom/Pulso, INK, MUSINSA, ADSB",
      "SM Career 공식 홈페이지",
      officialUrl,
      writtenDate,
      writtenDate,
      "로그인 후 자유입력/자기소개/기타사항이 있으면 사용. 프로젝트를 정규 경력처럼 쓰지 않음.",
    ],
    [
      "작성완료",
      company,
      postingTitle,
      "짧은 자기소개/기타사항",
      "글자수 제한 대응용 M/V 기획 요약",
      short,
      textLength(short),
      "Loom/Pulso, MUSINSA, ADSB",
      "SM Career 공식 홈페이지",
      officialUrl,
      writtenDate,
      writtenDate,
      "짧은 입력칸 또는 요약 소개용. AI보다 음악/IP/장면 흐름을 앞세움.",
    ],
    [
      "작성완료",
      company,
      postingTitle,
      "포트폴리오 선별안",
      "참여도 70% 기준을 반영한 SM 제출 포트폴리오 구성",
      portfolio,
      textLength(portfolio),
      "Loom/Pulso, INK, MUSINSA, ADSB",
      "SM Career 공식 홈페이지",
      officialUrl,
      writtenDate,
      writtenDate,
      "Loom/Pulso 메인. MUSINSA/ADSB는 참여도 70% 초과로 설명 가능한 경우만 본첨부.",
    ],
    [
      "작성완료",
      company,
      postingTitle,
      "제출 전 체크리스트",
      "제출 직전 확인 항목",
      checklist,
      textLength(checklist),
      "Loom/Pulso, INK, MUSINSA, ADSB",
      "SM Career 공식 홈페이지",
      officialUrl,
      writtenDate,
      writtenDate,
      "사용자가 최종 제출 전 직접 확인. 제출완료 상태로 변경하지 않음.",
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

async function renderPreview(workbook, sheetName, filename) {
  const preview = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(path.join(outputDir, filename), new Uint8Array(await preview.arrayBuffer()));
}

async function updateWorkbook() {
  await fs.mkdir(outputDir, { recursive: true });
  const markdown = await fs.readFile(draftPath, "utf8");
  const rows = archiveRows(markdown);
  const workbook = await loadWorkbook();
  const archiveSheet = workbook.worksheets.getItem("회사별자소서");
  const trackerSheet = workbook.worksheets.getItem("지원관리");

  await renderPreview(workbook, "회사별자소서", "archive-preview-before-sm.png");
  await renderPreview(workbook, "지원관리", "tracker-preview-before-sm.png");

  const archiveValues = archiveSheet.getUsedRange(true).values;
  const existingArchiveRows = findArchiveRowIndexes(archiveValues, rows);
  const lastArchiveRow = archiveValues.length;
  const writeStart = existingArchiveRows.length > 0 ? existingArchiveRows[0] : lastArchiveRow + 1;

  if (existingArchiveRows.length > 0) {
    for (const existingRow of existingArchiveRows) {
      archiveSheet.getRange(rowRange(existingRow)).clear({ applyTo: "contents" });
    }
  }

  for (let i = 0; i < rows.length; i += 1) {
    const targetRow = writeStart + i;
    if (targetRow > lastArchiveRow) {
      archiveSheet.getRange(rowRange(lastArchiveRow)).copyTo(archiveSheet.getRange(rowRange(targetRow)), "all");
    }
    archiveSheet.getRange(rowRange(targetRow)).values = [rows[i]];
  }

  archiveSheet.getRange(`A${writeStart}:M${writeStart + rows.length - 1}`).format.wrapText = true;
  archiveSheet.getRange(`G${writeStart}:G${writeStart + rows.length - 1}`).format.numberFormat = "0";
  archiveSheet.getRange(`K${writeStart}:L${writeStart + rows.length - 1}`).format.numberFormat =
    "yyyy-mm-dd";

  const trackerValues = trackerSheet.getUsedRange(true).values;
  const trackerIndex = trackerValues.findIndex((row) => row[2] === company && row[3] === postingTitle);
  if (trackerIndex === -1) throw new Error("Could not find SM row in 지원관리.");
  const trackerRow = trackerIndex + 1;
  const oldNote = trackerValues[trackerIndex][14] ?? "";
  const marker = "2026-07-09 공식 양식 확인 및 회사별 자소서 작성완료";
  const updatedNote = oldNote.includes(marker) ? oldNote : `${oldNote} / ${marker}`.trim();

  trackerSheet.getRange(`J${trackerRow}:K${trackerRow}`).values = [
    [
      "SM용 자소서/포트폴리오 선별안 작성완료, 공식 지원서 로그인 후 문항 확인 필요",
      "사용자 검토 후 SM Career 로그인/포트폴리오 업로드/제출 전 확인",
    ],
  ];
  trackerSheet.getRange(`N${trackerRow}:P${trackerRow}`).values = [
    [writtenDate, updatedNote, "사용자 검토/로그인 후 문항 확인"],
  ];
  trackerSheet.getRange(`N${trackerRow}`).format.numberFormat = "yyyy-mm-dd";

  const backupPath = path.join(outputDir, "ai_creative_marketing_application_tracker_2026-06-15.before-sm-update.xlsx");
  await fs.copyFile(workbookPath, backupPath);
  const output = await SpreadsheetFile.exportXlsx(workbook);
  await output.save(workbookPath);

  const verificationWorkbook = await loadWorkbook();
  const archiveCheck = await verificationWorkbook.inspect({
    kind: "region",
    sheetId: "회사별자소서",
    range: `A${writeStart}:M${writeStart + rows.length - 1}`,
    maxChars: 16000,
    tableMaxRows: rows.length,
    tableMaxCols: 13,
    tableMaxCellChars: 240,
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
    tableMaxCellChars: 240,
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

  await renderPreview(verificationWorkbook, "회사별자소서", "archive-preview-after-sm.png");
  await renderPreview(verificationWorkbook, "지원관리", "tracker-preview-after-sm.png");
  console.log(`UPDATED_ARCHIVE_ROWS ${writeStart}-${writeStart + rows.length - 1}`);
  console.log(`UPDATED_TRACKER_ROW ${trackerRow}`);
  console.log(`BACKUP ${backupPath}`);
}

const mode = process.argv[2] ?? "update";
if (mode === "update") {
  await updateWorkbook();
} else {
  throw new Error(`Unknown mode: ${mode}`);
}
