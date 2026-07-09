import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath = "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const todaySerial = 46192; // 2026-06-19

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItem("지원관리");

function firstBlankRow(values, startRow) {
  let last = startRow - 1;
  for (let index = startRow - 1; index < values.length; index += 1) {
    if (values[index]?.some((value) => value !== null && value !== "" && value !== undefined)) {
      last = index + 1;
    }
  }
  return last + 1;
}

function findCompanyRow(values, company) {
  for (let index = 0; index < values.length; index += 1) {
    if (values[index]?.[2] === company) {
      return index + 1;
    }
  }
  return null;
}

const values = sheet.getRange("A1:O220").values;

const stateUpdates = [
  {
    company: "더블유쓰리컴퍼니",
    row: [
      "S",
      "작성중",
      "더블유쓰리컴퍼니",
      "AI 콘텐츠 마케터 (인턴)",
      "AI Creative + Content Marketing",
      "잡코리아 온라인/이메일",
      46198,
      "경력무관",
      90,
      "영문 CV(PDF/DOCX), 회사별 자기소개서, 이메일 문안",
      "사용자 작성 마무리 후 제출",
      "W3 맞춤 문안은 생성되어 있으나 사용자가 2026-06-19 현재 직접 작성 중. global Gen-Z, meme/social format, AI tool experimentation, campaign creative 중심.",
      "https://www.jobkorea.co.kr/Recruit/GI_Read/49244888",
      todaySerial,
      "마감 2026-06-25. 제출 전 영문 이름/이메일/첨부파일명 확인.",
    ],
  },
  {
    company: "네이버웹툰",
    row: [
      "S",
      "별도작성 필요",
      "네이버웹툰",
      "[네이버웹툰] AI 애니메이션 제작 (AI animator) (신입/경력)",
      "AI Storytelling Animation Production",
      "홈페이지 지원",
      46194,
      "신입/경력·학력무관",
      94,
      "이력서, 자기소개서 5문항, 선택 포트폴리오 자료",
      "2026-06-20 토요일 직접 지원 예정",
      "AI 영상 워크플로우/프롬프트 디렉팅/모델 검증/서사 콘텐츠 완성 역량 요구. Loom/Pulso, MUSINSA, ADSB 연결.",
      "https://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=54155390",
      todaySerial,
      "마감 2026-06-21 23:59. 사용자: 토요일에 지원 예정.",
    ],
  },
];

for (const update of stateUpdates) {
  const rowNumber = findCompanyRow(values, update.company);
  if (rowNumber) {
    sheet.getRange(`A${rowNumber}:O${rowNumber}`).values = [update.row];
  }
}

const candidates = [
  [
    "S",
    "미지원/후보",
    "네이션에이",
    "AI 콘텐츠 크리에이터",
    "AI Content Creator + Product/Growth Marketing",
    "Wanted 지원",
    "상시",
    "신입-경력 5년",
    94,
    "Wanted 프로필, 포트폴리오, AI 콘텐츠/성장 실험형 간단소개",
    "원티드 간단소개 보정 후 지원",
    "AI-Native 콘텐츠 스타트업. 제품 기능/사용 사례를 광고 영상·숏폼·데모·튜토리얼로 기획·제작하고 AI 이미지·영상 툴과 성과 개선까지 포함. 제작만이 아니라 그로스/제품 협업이라 최우선.",
    "https://www.wanted.co.kr/wd/365191",
    todaySerial,
    "신규 탐색 2026-06-19. 서울 AI 허브, 정규직, 상시채용.",
  ],
  [
    "A",
    "미지원/후보",
    "음양관",
    "[인턴] AI 콘텐츠 서비스 퍼포먼스 마케터",
    "AI Content Service + Performance Marketing",
    "Wanted 지원",
    "상시",
    "신입/졸업예정 가능",
    90,
    "Wanted 프로필, 마케팅형 간단소개",
    "성과마케팅/콘텐츠 서비스 관심 강조 후 지원",
    "AI 콘텐츠 서비스의 마케팅 전 사이클. 기획-소재-집행-운영-분석-개선이라 PMM/마케팅 방향에 잘 맞음. 인턴 3개월 후 정규직전환형.",
    "https://www.wanted.co.kr/wd/363507",
    todaySerial,
    "신규 탐색 2026-06-19. 서울 강남, 신입 인턴, 상시채용.",
  ],
  [
    "A",
    "미지원/후보",
    "지로",
    "[인턴] [AI 크리에이티브팀] 그래픽 디자이너",
    "AI Creative Visual/IP Production",
    "Wanted 지원",
    "상시",
    "신입/인턴",
    87,
    "Loom/Pulso 비주얼 포트폴리오, AI idol/IP 근거",
    "AI 아이돌/IP 비주얼 중심으로 간단소개 보정 후 지원",
    "AI K-POP 아이돌/AI Creative팀으로 Loom/Pulso와 강하게 연결. 다만 그래픽 디자인·비주얼 제작 축이라 기획/마케팅 최상 기준보다는 한 칸 낮춤.",
    "https://www.wanted.co.kr/wd/359124",
    todaySerial,
    "신규 탐색 2026-06-19. 정규직전환형 인턴 6개월, 상시채용.",
  ],
  [
    "A",
    "미지원/후보",
    "퍼플아카데미",
    "생성형 AI 영상 콘텐츠 기획·제작",
    "AI Video Content Planning/Production",
    "Wanted 지원",
    46276,
    "신입/경력",
    84,
    "Wanted 프로필, AI 영상 포트폴리오",
    "교육/학부모 타깃 콘텐츠로 맞출지 판단 후 지원",
    "생성형 AI 영상 기획·제작이라 직접성은 높음. 교육 콘텐츠라 마케팅/PMM보다 제작 운영에 가까워 네이션에이·음양관 다음 순위.",
    "https://www.wanted.co.kr/wd/367693",
    todaySerial,
    "신규 탐색 2026-06-19. 마감 2026-09-11.",
  ],
  [
    "B",
    "2차큐",
    "올리브인터내셔널",
    "[북미/유럽본부] AI 콘텐츠 마케터",
    "Global AI Performance Content Marketing",
    "Wanted 지원",
    "상시",
    "경력 1-5년",
    80,
    "Wanted 프로필, 경력요건 보완형 간단소개",
    "경력요건 감수하고 도전할 때만 지원",
    "AI로 팔리는 글로벌 숏폼을 기획·제작하고 A/B 테스트하는 역할이라 방향은 매우 좋음. 다만 공식 경력 1-5년이라 신입 기준 장벽 있음.",
    "https://www.wanted.co.kr/wd/357924",
    todaySerial,
    "신규 탐색 2026-06-19. 경력요건 때문에 2차큐.",
  ],
  [
    "C",
    "2차큐",
    "유리프트",
    "콘텐츠 마케터 (AI 콘텐츠)",
    "AI EdTech Content Marketing",
    "Wanted 지원",
    "상시",
    "경력 1년 이상",
    76,
    "Wanted 프로필, 교육/AI 콘텐츠 마케팅형 간단소개",
    "경력요건과 업무 상세 재확인 후 도전",
    "AI 교육 서비스 콘텐츠 마케터라 방향은 맞지만 경력 1년 이상이고 퍼포먼스/광고소재 성격이 강함. 신입 주력큐보다는 뒤.",
    "https://www.wanted.co.kr/wd/256424",
    todaySerial,
    "신규 탐색 2026-06-19. 경력요건 때문에 후순위.",
  ],
  [
    "B",
    "2차큐",
    "비버글로벌",
    "AI 콘텐츠 마케터 2년 이상",
    "AI Beauty Performance Creative",
    "Wanted 지원",
    "상시",
    "경력 2-7년",
    78,
    "Wanted 프로필, AI 영상 제작 실무경험 보완",
    "경력요건 감수하고 도전할 때만 지원",
    "Runway/Kling/Sora/Veo 기반 광고 소재 기획·제작, AI 영상 파이프라인, 퍼포먼스 베리에이션은 좋음. 그러나 2년 이상 실무경력 요구라 신입 기준은 낮춤.",
    "https://www.wanted.co.kr/wd/363822",
    todaySerial,
    "신규 탐색 2026-06-19. 경력요건 때문에 2차큐.",
  ],
];

let insertRow = firstBlankRow(values, 9);
const existingCompanies = new Set(values.map((row) => row?.[2]).filter(Boolean));
for (const candidate of candidates) {
  const company = candidate[2];
  const posting = candidate[3];
  const existingIndex = values.findIndex((row) => row?.[2] === company && row?.[3] === posting);
  if (existingIndex >= 0) {
    sheet.getRange(`A${existingIndex + 1}:O${existingIndex + 1}`).values = [candidate];
    continue;
  }
  if (existingCompanies.has(company) && company !== "지로") {
    continue;
  }
  sheet.getRange(`A${insertRow}:O${insertRow}`).values = [candidate];
  insertRow += 1;
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const check = await workbook.inspect({
  kind: "match",
  searchTerm: "네이션에이",
  options: { maxResults: 20 },
  summary: "verify new wanted candidate rows",
});
console.log(check.ndjson);

const stateCheck = await workbook.inspect({
  kind: "match",
  searchTerm: "더블유쓰리컴퍼니",
  options: { maxResults: 20 },
  summary: "verify W3 current status",
});
console.log(stateCheck.ndjson);
