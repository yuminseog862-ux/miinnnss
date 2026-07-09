import fs from "node:fs";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const draftPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/naver-webtoon/naver-webtoon-ai-animator-answers-draft-2026-06-21.md";
const todaySerial = 46194; // 2026-06-21

const sections = [
  {
    heading:
      "## 2. 이미지 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례",
    next:
      "## 3. 스토리텔링 영상 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례",
    rowKeyword: "이미지 생성",
    positioning: "GPT Image 2.0 + Codex 기반 이미지 후보 생성/검토",
    note:
      "v16. 이미지 문항을 GPT Image 2.0 + Codex 실제 사용 방식으로 수정하고, Grok Imagine 주력 표현 제거.",
  },
  {
    heading:
      "## 3. 스토리텔링 영상 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례",
    next:
      "## 4. 음악/TTS/효과음 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례",
    rowKeyword: "스토리텔링 영상",
    positioning: "짧은 클립 생성 + 컷 연결 검토",
    note:
      "v15. 영상 문항에 맞게 Grok Imagine/Seedance/Grok Build 역할을 분리하고, INK 시작부 46초 프리뷰 검토 상태와 연결.",
  },
  {
    heading:
      "## 4. 음악/TTS/효과음 생성에 가장 많이 이용하는 툴과 그 이유, 단점 및 극복 사례",
    next: "## 5. AI 스토리텔링 영상 제작 관련 장점/경쟁력 자료",
    rowKeyword: "음악/TTS/효과음",
    positioning: "Suno 음악 기반 컷 타이밍 설계 + TTS/SFX 절제",
    note:
      "v15. 음악은 Suno 기반 설계로 명확히 쓰고, TTS/효과음은 현재 낮은 비중을 과장하지 않도록 정리.",
  },
];

const markdown = fs.readFileSync(draftPath, "utf8");

function extractAnswer(section) {
  const start = markdown.indexOf(section.heading);
  const end = markdown.indexOf(section.next);
  if (start === -1 || end === -1 || end <= start) {
    throw new Error(`Could not extract section: ${section.rowKeyword}`);
  }

  return markdown
    .slice(start + section.heading.length, end)
    .trim()
    .split("\n")
    .filter((line) => !line.startsWith("글자 수:"))
    .join("\n")
    .trim();
}

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("회사별자소서");
const values = sheet.getRange("A1:M160").values;

const updatedRows = [];

for (const section of sections) {
  const answer = extractAnswer(section);
  const count = {
    withSpace: answer.length,
    noSpace: answer.replace(/\s/g, "").length,
  };

  let rowNumber = null;
  for (const [index, row] of values.entries()) {
    if (
      row[1] === "네이버웹툰" &&
      String(row[3] || "").includes(section.rowKeyword)
    ) {
      rowNumber = index + 1;
      break;
    }
  }

  if (!rowNumber) {
    throw new Error(`Naver Webtoon row not found: ${section.rowKeyword}`);
  }

  const current = sheet.getRange(`A${rowNumber}:M${rowNumber}`).values[0];
  sheet.getRange(`A${rowNumber}:M${rowNumber}`).values = [[
    "작성완료",
    current[1],
    current[2],
    current[3],
    section.positioning,
    answer,
    `공백 포함 ${count.withSpace} / 공백 제외 ${count.noSpace}`,
    "INK, IDOL production harness, Loom/Pulso",
    current[8],
    current[9],
    current[10] || todaySerial,
    todaySerial,
    section.note,
  ]];

  updatedRows.push(rowNumber);
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const minRow = Math.min(...updatedRows);
const maxRow = Math.max(...updatedRows);
const check = await workbook.inspect({
  kind: "table",
  range: `회사별자소서!A${minRow}:M${maxRow}`,
  include: "values,formulas",
  tableMaxRows: updatedRows.length,
  tableMaxCols: 13,
  tableMaxCellChars: 160,
});
console.log(check.ndjson);
