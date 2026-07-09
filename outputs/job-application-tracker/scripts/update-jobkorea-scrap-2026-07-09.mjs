import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const workbookPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/ai_creative_marketing_application_tracker_2026-06-15.xlsx";
const collectedPath =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/jobkorea-scrap-2026-07-09/jobkorea-scrap-collected.json";
const outputDir =
  "/Users/yuminseog/portfolio/outputs/job-application-tracker/jobkorea-scrap-2026-07-09";
const summarySheetName = "스크랩요약_2026-07-09";

const headers = [
  "우선",
  "상태",
  "회사",
  "공고명",
  "포지션축",
  "지원방식",
  "마감일",
  "신입적합",
  "핏점수",
  "요구자료",
  "다음 액션",
  "분류 판단",
  "공고 URL",
  "업데이트",
  "비고",
  "체크",
];

const summaries = {
  49495691: {
    priority: "S",
    status: "별도작성 필요",
    company: "㈜녹십초알로에",
    axis: "AI Transformation + AI Creative Planning",
    fit: 93,
    materials: "잡코리아 이력서, AI 영상/자동화 포트폴리오, 회사 맞춤 자소서",
    next: "7/16 전 녹십초 전용 자소서 작성 후 즉시지원",
    decision:
      "AI 업무 자동화, AI 영상 기획, 스토리보드/톤앤매너, 사내 AI 교육까지 들어 있어 현재 포지셔닝과 매우 잘 맞음.",
    note:
      "요약: 화장품 제조·수출사의 AX 전담팀에서 부서별 AI 자동화 워크플로우와 제품/바이어용 AI 영상 콘텐츠를 기획. Loom/무신사/ADSB와 AI production harness를 모두 연결 가능.",
    check: "자소서 필요",
    summary:
      "AI 자동화와 AI 영상 기획을 같이 맡는 AX 전담팀 공고. 기획, 스토리보드, AI 툴 리서치, 사내 교육까지 포함되어 상위 지원 대상.",
    task: "녹십초용 지원동기와 AI 자동화/영상기획 포트폴리오 연결 문단 작성",
  },
  49189231: {
    priority: "C",
    status: "제외",
    company: "딥그로브㈜",
    axis: "AI Engineering Intern",
    fit: 54,
    materials: "개발/AI 엔지니어링 포트폴리오",
    next: "지원 비추천",
    decision:
      "AI/ML·소프트웨어 개발자 태그 중심이라 AI Creative/Marketing 신입 포지션과 거리가 큼.",
    note:
      "요약: AI 엔지니어 인턴. 상세 직무 본문은 제한적이고 개발 직무 태그가 중심.",
    check: "제외",
    summary:
      "AI 엔지니어 인턴으로 개발 직무 성격이 강함. 현재 마케팅/크리에이티브 포지셔닝과는 맞지 않음.",
    task: "추가 작업 없음",
  },
  49343702: {
    priority: "A",
    status: "미지원/후보",
    company: "㈜타인에이아이",
    axis: "AI Short-form Drama Production",
    fit: 84,
    materials: "AI 영상/스토리보드 포트폴리오, Loom/INK 사례",
    next: "스토리/감정선 중심 포트폴리오로 지원 여부 결정",
    decision:
      "AI 숏폼 드라마의 장면 해석·연출·결과물 판단이 핵심. 마케팅보다 제작 쪽이지만 Loom/INK로 설득 가능.",
    note:
      "요약: AI 숏폼 드라마 영상 크리에이터. 구도, 조명, 편집 리듬, 감정선, AI 결과물 개선 역량을 요구.",
    check: "포폴 정리",
    summary:
      "AI 숏폼 드라마를 만들고 장면 완성도를 판단하는 제작형 공고. 연출과 스토리보드 역량을 전면에 두면 지원 가능.",
    task: "Loom/INK에서 장면 설계와 결과물 개선 루프를 보여주는 포트폴리오 링크 정리",
  },
  49543670: {
    priority: "B",
    status: "보류",
    company: "㈜허드슨에이아이(Hudson AI)",
    axis: "AI Character/Fandom Content",
    fit: 82,
    materials: "캐릭터/IP 콘텐츠 포트폴리오, SNS 운영 사례",
    next: "계약직 조건 감수할 때만 지원",
    decision:
      "AI 캐릭터·팬덤·SNS 콘텐츠 기획은 매우 잘 맞지만 계약직 조건이라 우선순위를 낮춤.",
    note:
      "요약: 캐릭터 프롤로그/서사, 숏폼, 썸네일, SNS 바이럴을 AI로 제작·개선. 여성향/서브컬처 문법 이해 요구.",
    check: "조건 확인",
    summary:
      "AI 캐릭터의 서사, 숏폼, 썸네일, SNS 바이럴을 만드는 공고. Loom/Pulso와 맞지만 계약직이라 보류.",
    task: "계약기간/전환 가능성 확인 후, 지원 시 Loom 캐릭터/IP 사례 중심 문안 작성",
  },
  49483352: {
    priority: "A",
    status: "미지원/후보",
    company: "뷰스컴퍼니",
    axis: "AI Content Marketing + SNS",
    fit: 86,
    materials: "잡코리아 이력서, 포트폴리오",
    next: "Claude/SNS 운영 경험 중심으로 지원문안 정리",
    decision:
      "AI 콘텐츠 마케터, SNS 운영, 광고·홍보 업종 태그가 있어 마케팅 축과 맞음. 포트폴리오 첨부 필요.",
    note:
      "요약: AI 콘텐츠 제작 및 SNS 채널 운영. 상세 본문은 제한적이나 콘텐츠마케터/콘텐츠기획/SNS마케팅/AI콘텐츠 태그가 명확함.",
    check: "포폴 첨부",
    summary:
      "AI 콘텐츠 제작과 SNS 운영을 맡는 정규직 공고. 마케팅 방향성이 있어 지원 후보로 둘 만함.",
    task: "Claude/ChatGPT 기반 콘텐츠 기획과 SNS용 숏폼 전환 사례를 짧게 정리",
  },
  49347269: {
    priority: "S",
    status: "2차큐",
    company: "㈜아이아이컴바인드",
    axis: "Fashion Brand AI Research/Exploration",
    fit: 91,
    materials: "홈페이지 지원서, 브랜드/패션 AI 리서치 포트폴리오",
    next: "홈페이지 양식 확인 후 젠틀몬스터 맞춤 지원서 작성",
    decision:
      "패션/브랜드 맥락의 AI Research & Exploration이라 전공과 AI 포트폴리오 연결이 좋음. 홈페이지 지원이라 별도 큐.",
    note:
      "요약: GENTLE MONSTER AI Research & Exploration. 프롬프팅, LLMOps, AI 활용 역량을 요구.",
    check: "홈페이지 양식 확인",
    summary:
      "젠틀몬스터의 AI 리서치/탐색 담당 공고. 패션 브랜드와 생성형 AI를 연결할 수 있어 상위 후보.",
    task: "홈페이지 지원 문항 확인, MUSINSA/ADSB/브랜드 AI 실험 중심 자기소개 작성",
  },
  49435149: {
    priority: "B",
    status: "미지원/후보",
    company: "㈜글로벌비전",
    axis: "AI Business Strategy/AX Planning",
    fit: 76,
    materials: "사업기획형 자기소개서, AI 업무자동화 사례",
    next: "사업기획/AI 자동화 포지션으로 지원할지 판단",
    decision:
      "AI 경영전략·신규사업·업무자동화 기획은 일부 맞지만 콘텐츠/브랜드 마케팅 핵심축은 약함.",
    note:
      "요약: 제조 기반 기업의 AI 경영전략·신규사업·AX 시스템 구축. 연봉 3,500~4,500만원 조건.",
    check: "지원여부 판단",
    summary:
      "AI를 활용한 경영전략과 신규사업 기획 공고. AI 운영체계 경험은 살릴 수 있지만 마케팅/크리에이티브와는 거리 있음.",
    task: "사업기획형으로 갈 의지가 있으면 AHEYA/AI workflow 사례를 경영·자동화 관점으로 재정리",
  },
  49427812: {
    priority: "C",
    status: "제외",
    company: "㈜글로벌비전",
    axis: "AI AX Developer",
    fit: 58,
    materials: "개발 포트폴리오, AI 자동화 구현 사례",
    next: "지원 비추천",
    decision:
      "바이브코딩·RAG·에이전트·서버 구축 중심의 개발자 공고라 현재 목표와 다름.",
    note:
      "요약: AI AX 개발자. 로컬 LLM, RAG, 챗봇, CRM/ERP 자동화 개발 및 신규사업 구축. 연봉 3,200~3,500만원.",
    check: "제외",
    summary:
      "AI 신규사업/AX 개발자 공고. 개발 구현 중심이라 현재 지원 전략에서는 제외.",
    task: "추가 작업 없음",
  },
  49491450: {
    priority: "C",
    status: "보류",
    company: "도산프라이빗",
    axis: "In-house Ad Design",
    fit: 66,
    materials: "디자인 포트폴리오, Photoshop/Illustrator 작업물",
    next: "디자인 직무로 방향을 틀 때만 검토",
    decision:
      "AX Lab 명칭은 있으나 실제로는 인하우스 광고 디자이너에 가까움. 순수 디자인 경쟁이라 후순위.",
    note:
      "요약: 광고소재 디자인, Photoshop/Illustrator/카피라이팅 역량 요구. 포트폴리오 첨부 필요.",
    check: "보류",
    summary:
      "인하우스 광고 디자이너 공고. AI/마케팅 기획보다 디자인 산출물 경쟁에 가까움.",
    task: "지원하려면 광고소재 디자인 포트폴리오를 별도로 보강",
  },
  49479458: {
    priority: "B",
    status: "미지원/후보",
    company: "㈜헬로월드랩스",
    axis: "AX Consulting/Education Operation",
    fit: 75,
    materials: "AX 교육/컨설팅형 자기소개서",
    next: "안양 출근과 교육운영 직무 적합성 확인",
    decision:
      "AI 교육운영·컨설팅 주니어로 AI 관심은 맞지만 마케팅/콘텐츠 제작 축은 약함. 위치도 체크 필요.",
    note:
      "요약: AI 기반 LMS 솔루션 회사의 AX 컨설팅·교육운영 주니어. API/Jira/Python/Notion/ChatGPT/Gemini 등 스킬 언급.",
    check: "조건 확인",
    summary:
      "AX 컨설팅과 교육운영을 맡는 주니어 공고. AI 도입/교육 쪽으로 확장하고 싶을 때 후보.",
    task: "교육/워크숍 운영 경험으로 말할 수 있는 포트폴리오 근거 정리",
  },
  49409579: {
    priority: "B",
    status: "미지원/후보",
    company: "콴다인스티튜트㈜",
    axis: "AI Experience Design",
    fit: 78,
    materials: "UX/UI·AI 콘텐츠 시각화 포트폴리오",
    next: "디자인 포트폴리오 부담 확인 후 지원",
    decision:
      "AI 경험 설계와 콘텐츠 시각화는 맞지만 UI/UX 디자인 실무 비중이 높음.",
    note:
      "요약: AX 디자이너. AI 경험 설계, 프로덕트/UIUX 디자인, AI 기반 콘텐츠 시각화, 사용자 리서치 담당.",
    check: "디자인 포폴 확인",
    summary:
      "에듀테크 AX 디자이너 공고. AI 경험 설계는 좋지만 Figma/UIUX 중심 역량이 필요함.",
    task: "지원하려면 Figma/웹앱/콘텐츠 시각화 사례를 전면에 둔 포트폴리오 정리",
  },
  49499751: {
    priority: "B",
    status: "미지원/후보",
    company: "㈜두어스(Doers Corp.)",
    axis: "AX Intern / AI Service Operation",
    fit: 74,
    materials: "AI 업무자동화/서비스 운영형 자기소개서",
    next: "상세 업무 확인 후 인턴 지원 여부 결정",
    decision:
      "AI First/AX 인턴이라 방향은 맞지만 상세 본문이 제한적이고 AI서비스개발자 태그라 역할 확인 필요.",
    note:
      "요약: AI First로 일의 속도를 설계하는 AX 인턴. 잡코리아 즉시지원과 홈페이지 지원 모두 가능.",
    check: "상세 확인",
    summary:
      "AX 인턴 공고. AI 업무방식 개선과 운영 쪽 후보지만 상세 업무가 부족해 확인이 필요함.",
    task: "지원 전 홈페이지/공고 본문에서 실제 업무가 개발인지 운영인지 확인",
  },
  49442796: {
    priority: "B",
    status: "보류",
    company: "㈜브랜드501",
    axis: "AI Visual Editor + Content Marketing",
    fit: 78,
    materials: "포트폴리오, Photoshop/Premiere/CapCut/Midjourney 사례",
    next: "계약직 조건 감수와 포트폴리오 준비 가능할 때 검토",
    decision:
      "화장품 브랜드의 AI 비주얼 에디터라 콘텐츠/마케팅 연결은 가능하지만 6개월 계약직 전환형이라 보류.",
    note:
      "요약: AI 비주얼 에디터. ChatGPT, Midjourney, CapCut, Canva, Premiere/After Effects 등 사용. 포트폴리오 첨부 필요.",
    check: "조건 확인",
    summary:
      "AI 비주얼 에디터 공고. 콘텐츠 마케팅 태그는 좋지만 계약직 전환형과 디자인/편집 비중을 확인해야 함.",
    task: "지원 시 화장품/브랜드 숏폼 포트폴리오와 디자인 툴 가능 범위 정리",
  },
  49439769: {
    priority: "완료",
    status: "지원완료",
    company: "㈜세로본능",
    axis: "Generative AI Visual Artist",
    fit: 74,
    materials: "제출 완료: 잡코리아 이력서",
    next: "결과 대기",
    decision:
      "스크랩 목록 기준 이미 지원완료. 생성형 AI 비주얼 제작 중심이라 결과 대기만 하면 됨.",
    note:
      "요약: 생성AI를 활용한 비주얼 아티스트. 프롬프팅, 영화/웹소설/숏츠 콘텐츠 관심, 생성형 AI 제작 경험 우대.",
    check: "완료",
    summary:
      "생성형 AI 비주얼 아티스트 공고. 이미 지원완료 상태로 확인됨.",
    task: "결과 대기, 연락 오면 프롬프팅/콘텐츠 제작 사례로 면접 준비",
  },
  49185349: {
    priority: "B",
    status: "미지원/후보",
    company: "㈜콕스인터랙티브",
    axis: "Advertising/Content Marketing",
    fit: 76,
    materials: "포트폴리오, 광고/콘텐츠 기획 사례",
    next: "지원 직무를 AE/SNS/영상PD 중 하나로 좁힌 뒤 지원",
    decision:
      "광고대행사 신입/경력 공채형. AI 직접성은 약하지만 AE·SNS·콘텐츠마케터·영상PD 선택지가 있음.",
    note:
      "요약: 캠페인 AE, SNS 운영기획, 영상PD, 디자이너, 커머스 BM 등 하반기 신입/경력 채용. 상시채용.",
    check: "직무 선택",
    summary:
      "광고대행사 다직무 채용. AI 공고는 아니지만 광고/콘텐츠 기획 포지션으로 지원 가능.",
    task: "지원 전 희망 직무를 AE/SNS운영/영상PD 중 하나로 정하고 포트폴리오 연결",
  },
  49221396: {
    priority: "A",
    status: "미지원/후보",
    company: "㈜큐팁",
    titleOverride: "[tacu.ai] AI 영상 크리에이티브 디렉터 (Creative Director) 채용",
    axis: "AI Video Creative Direction + Workflow",
    fit: 86,
    materials: "AI 영상/스토리보드 포트폴리오, 편집 가능 범위 정리",
    next: "AI 영상 제작 포트폴리오 정리 후 지원 여부 결정",
    decision:
      "기획·시나리오·광고 카피·AI 모델 오케스트레이션·A/B 테스트까지 포함되어 기존 보류보다 점수 상향. 단, 제작/편집 부담은 큼.",
    note:
      "요약: AI 숏폼/영화/애니/광고 영상의 기획, 시나리오, 연출, 생성, 편집, 마케팅 협업과 워크플로우 자산화를 담당.",
    check: "포폴 정리",
    summary:
      "AI 영상 크리에이티브 디렉터 공고. 제작형이지만 기획, 광고 카피, A/B 테스트, 워크플로우 고도화가 있어 재검토 가치 있음.",
    task: "Loom/INK/MUSINSA에서 스토리보드, 프롬프트, 컷 검수, 마케팅 소재 전환 사례를 골라 정리",
  },
  49437728: {
    priority: "A",
    status: "2차큐",
    company: "㈜에스엠엔터테인먼트",
    axis: "Music Video/Promotion Video Planning",
    fit: 82,
    materials: "홈페이지 지원서, M/V·프로모션 영상 포트폴리오 필수",
    next: "홈페이지 양식과 포트폴리오 기준 확인",
    decision:
      "M/V·프로모션 비디오 기획/제작은 Loom/Pulso와 연결 가능하지만 AI 직접성은 없고 홈페이지 지원/포트폴리오 필수.",
    note:
      "요약: SM M/V 담당자. 신입 또는 5년 미만, 영상 연출/기획/편집, 포트폴리오 필수, 중복지원 유의.",
    check: "홈페이지 양식 확인",
    summary:
      "뮤직비디오와 프로모션 비디오를 기획/제작하는 공고. AI 공고는 아니지만 Loom/Pulso와 음악 IP 경험으로 연결 가능.",
    task: "SM 홈페이지 양식 확인, 포트폴리오에서 본인 참여도와 M/V형 결과물만 선별",
  },
  49356104: {
    priority: "A",
    status: "별도작성 필요",
    company: "㈜솔로몬코드",
    axis: "AI Video Planning/Direction",
    fit: 85,
    materials: "잡코리아 이력서, AI 영상 포트폴리오, 브랜드/숏폼 기획 문안",
    next: "마감 7/11 전 지원 여부 즉시 결정",
    decision:
      "AI 영상 생성·합성, 웹예능/숏폼/브랜드 영상 기획·제작, 프롬프트 연출력이 핵심. 마감이 매우 임박.",
    note:
      "요약: AI 영상 크리에이터. Runway/Pika 등 AI 영상 툴, 프롬프트 설계, 연출/기획 가능자를 요구. 연봉 3,200~4,500만원.",
    check: "긴급",
    summary:
      "AI 영상 기획/연출/제작 공고. 마감이 2026-07-11로 매우 임박했고 조건도 나쁘지 않아 빠른 판단 필요.",
    task: "오늘 지원 여부 결정, 지원 시 AI 영상 툴·프롬프트·스토리보드 사례 중심으로 자기소개서 수정",
  },
};

const excelSerial = (isoDate) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-").map(Number);
  const utc = Date.UTC(year, month - 1, day);
  return Math.round(utc / 86400000 + 25569);
};

const deadlineFromRaw = (raw) => {
  if (!raw) return "미확인";
  if (raw.includes("상시")) return "상시";
  const match = raw.match(/~?(\d{1,2})\/(\d{1,2})/);
  if (!match) return raw;
  const month = match[1].padStart(2, "0");
  const day = match[2].padStart(2, "0");
  return excelSerial(`2026-${month}-${day}`);
};

const normalizeUrl = (url = "") => {
  const match = String(url).match(/GI_Read\/(\d+)/);
  return match ? `https://www.jobkorea.co.kr/Recruit/GI_Read/${match[1]}` : String(url).split("?")[0];
};

const gnoFromUrl = (url = "") => {
  const match = String(url).match(/GI_Read\/(\d+)/);
  return match ? Number(match[1]) : null;
};

const makeApplyMethod = (job) => {
  if (job.applyMethod === "지원완료") return "잡코리아 지원완료";
  if (job.applyMethod === "홈페이지지원") return "홈페이지 지원";
  if (job.applyMethod === "즉시지원") return "잡코리아 즉시지원";
  return job.applyMethod || "미확인";
};

const makeFit = (job, judgment) => {
  const condition = job.condition || "";
  if (condition.includes("계약직") && !judgment.note.includes("계약직")) {
    return `${condition} / 조건 확인`;
  }
  if (condition.includes("신입")) return condition;
  if (condition.includes("경력무관")) return condition;
  return condition || "미확인";
};

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const supportSheet = workbook.worksheets.getItem("지원관리");
const collected = JSON.parse(await fs.readFile(collectedPath, "utf8"));
const updateSerial = excelSerial("2026-07-09");

const existingValues = supportSheet.getRange("A8:P220").values;
const existingRows = existingValues
  .slice(1)
  .map((row, index) => ({ rowNumber: index + 9, row }))
  .filter(({ row }) => row.some((cell) => cell !== null && cell !== ""));
const urlToRow = new Map(
  existingRows
    .map(({ rowNumber, row }) => [normalizeUrl(row[12]), rowNumber])
    .filter(([url]) => url),
);

const rowsToWrite = [];
const summaryRows = [];
let appendRowNumber =
  Math.max(...existingRows.map(({ rowNumber }) => rowNumber), 8) + 1;

for (const job of collected) {
  const gno = gnoFromUrl(job.canonicalUrl || job.url);
  const judgment = summaries[gno];
  if (!judgment) continue;

  const canonicalUrl = normalizeUrl(job.canonicalUrl || job.url);
  const rowNumber = urlToRow.get(canonicalUrl) ?? appendRowNumber++;
  const title = judgment.titleOverride || job.title;
  const row = [
    judgment.priority,
    judgment.status,
    judgment.company,
    title,
    judgment.axis,
    makeApplyMethod(job),
    deadlineFromRaw(job.deadlineRaw),
    makeFit(job, judgment),
    judgment.fit,
    judgment.materials,
    judgment.next,
    judgment.decision,
    canonicalUrl,
    updateSerial,
    judgment.note,
    judgment.check,
  ];

  rowsToWrite.push({ rowNumber, row, isExisting: urlToRow.has(canonicalUrl) });
  summaryRows.push([
    judgment.company,
    title,
    judgment.status,
    judgment.priority,
    judgment.fit,
    deadlineFromRaw(job.deadlineRaw),
    makeApplyMethod(job),
    judgment.summary,
    judgment.task,
    judgment.check,
    canonicalUrl,
  ]);
}

const newRows = rowsToWrite.filter((item) => !item.isExisting);
if (newRows.length > 0) {
  const start = Math.min(...newRows.map((item) => item.rowNumber));
  const end = Math.max(...newRows.map((item) => item.rowNumber));
  supportSheet
    .getRange("A67:P67")
    .copyTo(supportSheet.getRange(`A${start}:P${end}`), "formats");
}

for (const { rowNumber, row } of rowsToWrite) {
  supportSheet.getRange(`A${rowNumber}:P${rowNumber}`).values = [row];
}

const latestDataRow = Math.max(
  ...existingRows.map(({ rowNumber }) => rowNumber),
  ...rowsToWrite.map(({ rowNumber }) => rowNumber),
);

const finalValues = supportSheet.getRange("A9:P220").values;
const finalRows = finalValues.filter((row) =>
  row.some((cell) => cell !== null && cell !== ""),
);
const statusCounts = finalRows.reduce((acc, row) => {
  const status = row[1];
  if (status) acc[status] = (acc[status] || 0) + 1;
  return acc;
}, {});

supportSheet.getRange("B4").values = [[finalRows.length]];
supportSheet.getRange("B5").values = [[statusCounts["지원완료"] || 0]];
supportSheet.getRange("B6").values = [[statusCounts["별도작성 필요"] || 0]];
supportSheet.getRange("E4").values = [[statusCounts["포폴보강 후"] || 0]];
supportSheet.getRange("E5").values = [[statusCounts["2차큐"] || 0]];
supportSheet.getRange("E6").values = [[statusCounts["보류"] || 0]];

const summarySheet = workbook.worksheets.getOrAdd(summarySheetName);
summarySheet.showGridLines = false;
summarySheet.getRange("A1:K80").clear({ applyTo: "all" });
summarySheet.getRange("A1:K1").merge();
summarySheet.getRange("A1").values = [["잡코리아 스크랩 공고 요약 (2026-07-09)"]];
summarySheet.getRange("A2:K2").values = [
  [
    "회사",
    "공고명",
    "상태",
    "우선",
    "핏점수",
    "마감일",
    "지원방식",
    "요약",
    "추가 작업",
    "체크",
    "공고 URL",
  ],
];
summarySheet.getRange(`A3:K${summaryRows.length + 2}`).values = summaryRows;

summarySheet.getRange("A1:K1").format = {
  fill: "#1F2937",
  font: { bold: true, color: "#FFFFFF", size: 14 },
};
summarySheet.getRange("A2:K2").format = {
  fill: "#E5E7EB",
  font: { bold: true, color: "#111827" },
};
summarySheet.getRange(`A2:K${summaryRows.length + 2}`).format.borders = {
  preset: "all",
  style: "thin",
  color: "#D1D5DB",
};
summarySheet.getRange(`A3:K${summaryRows.length + 2}`).format = {
  wrapText: true,
  verticalAlignment: "top",
};
summarySheet.getRange("E3:E40").format.numberFormat = "0";
summarySheet.getRange("F3:F40").format.numberFormat = "yyyy-mm-dd";
summarySheet.getRange("A:A").format.columnWidth = 18;
summarySheet.getRange("B:B").format.columnWidth = 34;
summarySheet.getRange("C:C").format.columnWidth = 14;
summarySheet.getRange("D:D").format.columnWidth = 8;
summarySheet.getRange("E:E").format.columnWidth = 9;
summarySheet.getRange("F:F").format.columnWidth = 12;
summarySheet.getRange("G:G").format.columnWidth = 14;
summarySheet.getRange("H:H").format.columnWidth = 52;
summarySheet.getRange("I:I").format.columnWidth = 46;
summarySheet.getRange("J:J").format.columnWidth = 14;
summarySheet.getRange("K:K").format.columnWidth = 44;
summarySheet.freezePanes.freezeRows(2);

supportSheet.getRange(`A9:P${latestDataRow}`).format.wrapText = true;
supportSheet.getRange(`G9:G${latestDataRow}`).format.numberFormat = "yyyy-mm-dd";
supportSheet.getRange(`N9:N${latestDataRow}`).format.numberFormat = "yyyy-mm-dd";
supportSheet.getRange(`A${latestDataRow + 1}:P220`).clear({ applyTo: "all" });

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "formula error scan after JobKorea scrap update",
});
console.log(errors.ndjson);

await fs.mkdir(outputDir, { recursive: true });
for (const sheetName of ["지원관리", "기준", "회사별자소서", summarySheetName]) {
  const preview = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(
    `${outputDir}/preview-${sheetName}.png`,
    new Uint8Array(await preview.arrayBuffer()),
  );
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(workbookPath);

const updatedCopy = `${outputDir}/ai_creative_marketing_application_tracker_2026-06-15.jobkorea-scrap-updated.xlsx`;
await output.save(updatedCopy);

console.log(
  JSON.stringify(
    {
      updated: workbookPath,
      updatedCopy,
      appendedRows: newRows.length,
      updatedExistingRows: rowsToWrite.filter((item) => item.isExisting).length,
      totalRows: finalRows.length,
      statusCounts,
    },
    null,
    2,
  ),
);
