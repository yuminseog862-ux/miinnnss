import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";
import fs from "node:fs";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const manifestPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/w3company/w3company-application-manifest.json";
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const manage = workbook.worksheets.getItem("지원관리");
manage.getRange("B18:B18").values = [["작성완료"]];
manage.getRange("J18:L18").values = [[
  "영문 CV(PDF/DOCX), 회사별 자기소개서, 이메일 문안 작성완료. 포트폴리오 링크 본문 삽입.",
  "weare@w3company.team 이메일 제출",
  "W3 맞춤 문안 작성 완료: Moji/SeriUs, global Gen-Z, meme/social format, AI tool experimentation, campaign creative 중심. 제출 전 이메일 철자/영문 이름 확인.",
]];
manage.getRange("O18:O18").values = [[
  "2026-06-19 W3용 English CV PDF/DOCX + cover letter + email draft 생성. Wanted PDF는 포트폴리오 방향과 일치하나 W3용 키워드 보강 필요.",
]];

const drafts = workbook.worksheets.getItem("회사별자소서");
const sectionEntries = [
  ["지원동기 / 회사 관심 이유", "Moji/SeriUs global Gen-Z AI creative"],
  ["직무 적합 경험", "AI-native campaign creative workflow"],
  ["입사 후 기여 / 실행 계획", "Trend/meme-driven AI content testing loop"],
].map(([section, positioning]) => {
  const text = manifest.cover_sections[section];
  return [
    "작성완료",
    "더블유쓰리컴퍼니",
    "AI 콘텐츠 마케터 (인턴)",
    section,
    positioning,
    text,
    [...text].length,
    "MUSINSA, Loom/Pulso, ADSB, AHEYA",
  ];
});

drafts.getRange("A11:H13").values = sectionEntries;

const headline = "AI Content Marketer Intern | AI Creative / Content Marketing";
const emailRecord = `Subject: ${manifest.email_subject}\n\n${manifest.email_body}`;
drafts.getRange("A44:H45").values = [
  [
    "작성완료",
    "더블유쓰리컴퍼니",
    "AI 콘텐츠 마케터 (인턴)",
    "영문 CV 헤드라인",
    "AI Content Marketer Intern",
    headline,
    [...headline].length,
    "MUSINSA, Loom/Pulso, ADSB, AHEYA",
  ],
  [
    "작성완료",
    "더블유쓰리컴퍼니",
    "AI 콘텐츠 마케터 (인턴)",
    "이메일 제목/본문",
    "W3Company email submission",
    emailRecord,
    [...emailRecord].length,
    "English CV, Portfolio links",
  ],
];

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "formula error scan",
});
console.log(errors.ndjson || "");

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

for (const range of ["지원관리!A18:O18", "회사별자소서!A11:H13", "회사별자소서!A44:H45"]) {
  const check = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 8,
    tableMaxCols: 15,
  });
  console.log(check.ndjson || "");
}
