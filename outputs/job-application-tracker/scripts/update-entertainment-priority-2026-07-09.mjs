import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const outputDir =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/entertainment-priority-2026-07-09";
const backupPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.before-entertainment-priority-2026-07-09.xlsx";

const inspectOnly = process.argv.includes("--inspect");

const excelSerial = (isoDate) => {
  const [year, month, day] = isoDate.split("-").map(Number);
  return Math.round(Date.UTC(year, month - 1, day) / 86400000 + 25569);
};

const todaySerial = excelSerial("2026-07-09");

const normalize = (value) => String(value ?? "").trim();
const normalizeUrl = (value) => normalize(value).split("?")[0];

const findHeaderRow = (values, requiredLabels) => {
  const index = values.findIndex((row) =>
    requiredLabels.every((label) => row.includes(label)),
  );
  if (index === -1) {
    throw new Error(`Could not find header row for ${requiredLabels.join(", ")}`);
  }
  return index + 1;
};

const nonEmpty = (row) => row.some((cell) => cell !== null && cell !== "");

const makeRecord = (headers, row) => {
  const record = {};
  headers.forEach((header, index) => {
    record[header] = row[index];
  });
  return record;
};

const rowsToAdd = [
  {
    priority: "S",
    status: "2차큐",
    company: "Blue Garage",
    title: "[Blue Garage] AI Artist / Marketing",
    axis: "AI Artist Marketing/Fandom Channel Operation",
    applyMethod: "홈페이지 지원",
    deadline: "공고 내 미기재",
    entryFit: "경력 0~3년, 정규직, 서울 강동구",
    fitScore: 94,
    materials:
      "JYPE/Greeting 지원서, AI 아티스트·팬덤/SNS 운영 맞춤 자소서, 영어 커뮤니케이션 근거, Loom/Pulso 포트폴리오",
    nextAction:
      "홈페이지 지원 양식 확인 후 AI 아티스트/팬덤 마케팅 중심 자소서 작성",
    classification:
      "JYP 자회사 Blue Garage의 AI사업실 포지션. AI 아티스트 팬덤 VOC, 팬 이벤트/프로모션, 팬 플랫폼·SNS 콘텐츠 기획/운영을 맡아 Loom/Pulso AI 아이돌 IP와 AI Creative 마케팅 포지셔닝 연결도가 매우 높음.",
    url: "https://recruit-apply.jype.com/ko/o/170800",
    note:
      "2026-07-09 공고 확인: AI Artist 마케팅 및 채널 운영, 경력 0~3년, 정규직. 주요업무는 글로벌 팬덤 모니터링/VOC, 팬 이벤트·프로모션, AI 아티스트 팬 플랫폼·SNS 콘텐츠 기획/운영.",
    check: "엔터 우선지원",
  },
  {
    priority: "A",
    status: "별도작성 필요",
    company: "더블랙레이블",
    title: "[더블랙레이블] 음반기획/프로모션 담당 채용",
    axis: "Music Release Planning/Promotion",
    applyMethod: "잡코리아 즉시지원",
    deadline: excelSerial("2026-07-26"),
    entryFit: "경력무관, 학력무관, 정규직, 서울 용산구",
    fitScore: 84,
    materials:
      "잡코리아 이력서, 음반기획/프로모션 맞춤 자기소개서, Loom/Pulso 음악·IP·팬덤 기획 포트폴리오",
    nextAction:
      "음반기획/프로모션용 엔터 맞춤 자기소개 문장 보강 후 지원",
    classification:
      "AI 직접 포지션은 아니지만 엔터 음반기획/프로모션 직무라 엔터 우선 전략에 부합. Loom/Pulso의 AI 아이돌 음악·영상·팬 참여 흐름을 음반 프로모션/콘텐츠 기획 근거로 전환해 지원하는 후보.",
    url: "https://www.jobkorea.co.kr/Recruit/GI_Read/49258821",
    note:
      "2026-07-09 잡코리아 공고 확인: 모집분야 음반기획/프로모션 담당자, 경력무관, 정규직(수습 3개월), 급여 회사 내규, 마감 2026-07-26 및 채용 시 마감.",
    check: "엔터 우선지원",
  },
];

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const supportSheet = workbook.worksheets.getItem("지원관리");

await fs.mkdir(`${outputDir}/qa`, { recursive: true });

const supportPreview = supportSheet.getRange("A1:P260").values;
const supportHeaderRow = findHeaderRow(supportPreview, [
  "우선",
  "상태",
  "회사",
  "공고명",
]);
const supportHeaders = supportPreview[supportHeaderRow - 1];
const supportRows = supportPreview
  .slice(supportHeaderRow)
  .map((row, index) => ({
    rowNumber: supportHeaderRow + index + 1,
    row,
    record: makeRecord(supportHeaders, row),
  }))
  .filter(({ row }) => nonEmpty(row));

if (inspectOnly) {
  const overview = await workbook.inspect({
    kind: "workbook,sheet,table",
    maxChars: 10000,
    tableMaxRows: 8,
    tableMaxCols: 16,
    tableMaxCellChars: 100,
  });
  console.log(overview.ndjson);
  console.log(
    JSON.stringify(
      {
        supportHeaderRow,
        lastSupportRows: supportRows.slice(-10).map(({ rowNumber, record }) => ({
          rowNumber,
          priority: record["우선"],
          status: record["상태"],
          company: record["회사"],
          title: record["공고명"],
          url: record["공고 URL"],
        })),
        targets: rowsToAdd.map((entry) => ({
          company: entry.company,
          title: entry.title,
          exists:
            supportRows.find(
              ({ record }) => normalizeUrl(record["공고 URL"]) === entry.url,
            )?.rowNumber ?? null,
        })),
      },
      null,
      2,
    ),
  );
  process.exit(0);
}

try {
  await fs.access(backupPath);
} catch {
  await fs.copyFile(workbookPath, backupPath);
}

let lastSupportRow = Math.max(
  supportHeaderRow,
  ...supportRows.map(({ rowNumber }) => rowNumber),
);
const writtenRows = [];

for (const entry of rowsToAdd) {
  const existing =
    supportRows.find(
      ({ record }) => normalizeUrl(record["공고 URL"]) === entry.url,
    ) ??
    supportRows.find(
      ({ record }) =>
        normalize(record["회사"]) === entry.company &&
        normalize(record["공고명"]) === entry.title,
    );
  const rowNumber = existing?.rowNumber ?? lastSupportRow + 1;
  if (!existing) {
    supportSheet
      .getRange(`A${rowNumber}:P${rowNumber}`)
      .copyFrom(supportSheet.getRange(`A${lastSupportRow}:P${lastSupportRow}`), "all");
    lastSupportRow = rowNumber;
  }

  supportSheet.getRange(`A${rowNumber}:P${rowNumber}`).values = [
    [
      entry.priority,
      entry.status,
      entry.company,
      entry.title,
      entry.axis,
      entry.applyMethod,
      entry.deadline,
      entry.entryFit,
      entry.fitScore,
      entry.materials,
      entry.nextAction,
      entry.classification,
      entry.url,
      todaySerial,
      entry.note,
      entry.check,
    ],
  ];
  if (typeof entry.deadline === "number") {
    supportSheet.getRange(`G${rowNumber}`).format.numberFormat = "yyyy-mm-dd";
  } else {
    supportSheet.getRange(`G${rowNumber}`).format.numberFormat = "@";
  }
  supportSheet.getRange(`N${rowNumber}`).format.numberFormat = "yyyy-mm-dd";
  writtenRows.push({ rowNumber, company: entry.company, title: entry.title });
}

const finalSupportRows = supportSheet
  .getRange(`A${supportHeaderRow + 1}:P260`)
  .values.filter((row) => nonEmpty(row));
const statusCounts = finalSupportRows.reduce((acc, row) => {
  const status = row[1];
  if (status) acc[status] = (acc[status] || 0) + 1;
  return acc;
}, {});
supportSheet.getRange("B4").values = [[finalSupportRows.length]];
supportSheet.getRange("B5").values = [[statusCounts["지원완료"] || 0]];
supportSheet.getRange("B6").values = [[statusCounts["별도작성 필요"] || 0]];
supportSheet.getRange("E4").values = [[statusCounts["포폴보강 후"] || 0]];
supportSheet.getRange("E5").values = [[statusCounts["2차큐"] || 0]];
supportSheet.getRange("E6").values = [[statusCounts["보류"] || 0]];

const verifyRows = await workbook.inspect({
  kind: "table",
  sheetId: "지원관리",
  range: `A${writtenRows[0].rowNumber}:P${
    writtenRows[writtenRows.length - 1].rowNumber
  }`,
  maxChars: 9000,
  tableMaxRows: 4,
  tableMaxCols: 16,
  tableMaxCellChars: 180,
});
const verifySummary = await workbook.inspect({
  kind: "table",
  sheetId: "지원관리",
  range: "A4:E6",
  maxChars: 2000,
  tableMaxRows: 4,
  tableMaxCols: 5,
  tableMaxCellChars: 80,
});
const errorScan = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});

for (const sheetName of workbook.worksheets.items.map((sheet) => sheet.name)) {
  const preview = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(
    `${outputDir}/qa/preview-${sheetName}.png`,
    new Uint8Array(await preview.arrayBuffer()),
  );
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

console.log(
  JSON.stringify(
    {
      workbookPath,
      backupPath,
      writtenRows,
      statusCounts,
      verifyRows: verifyRows.ndjson,
      verifySummary: verifySummary.ndjson,
      errorScan: errorScan.ndjson,
    },
    null,
    2,
  ),
);
