import Link from "next/link";
import { ArrowRight, Route } from "lucide-react";
import { Shell } from "./portfolio-pages";
import styles from "./portfolio-hub.module.css";

type WorkflowImageCard = {
  id: string;
  marker: string;
  title: string;
  body: string;
  image: string;
  focus: string[];
};

type WorkflowPurposeItem = {
  title: string;
  body: string;
  tools: string[];
  why: string;
};

const purposeItems = [
  {
    title: "트랙 분석",
    body: "Pulso 후렴, 보컬 진입, 에너지 전환 구간 표시",
    tools: ["Suno", "LLM", "Codex"],
    why: "컷 전환 기준",
  },
  {
    title: "프레임 후보",
    body: "멤버 얼굴, 의상, 손동작, 오브젝트가 유지되는 시작 컷 선별",
    tools: ["GPT Image", "Grok Imagine"],
    why: "영상화 시작점",
  },
  {
    title: "영상 테스트",
    body: "짧은 움직임 테스트, 얼굴 흔들림, 카메라 방향, 편집점 확인",
    tools: ["Grok Imagine"],
    why: "사용 구간 선별",
  },
  {
    title: "편집 체크",
    body: "타임코드와 contact sheet 기준 컷 길이, 연결, 업로드 상태 확인",
    tools: ["Codex", "ffmpeg", "CapCut"],
    why: "최종 확인 자료",
  },
] satisfies WorkflowPurposeItem[];

const boundaryRows = [
  {
    phase: "트랙",
    tool: "Suno: 트랙 후보 / LLM·Codex: 가사, 구간, 장면 메모",
    decision: "얼굴·동작·카메라 전환 구간",
  },
  {
    phase: "프레임",
    tool: "GPT Image: 프레임 후보 / Grok Imagine: 빠른 비주얼 확인",
    decision: "얼굴·의상·오브젝트·배경 톤 연결성",
  },
  {
    phase: "클립",
    tool: "Grok Imagine: 짧은 클립 반복 생성",
    decision: "사용 구간, 컷 지점, 재생성 여부",
  },
  {
    phase: "업로드",
    tool: "Codex·ffmpeg: contact sheet와 타임코드 / CapCut·Pulso: 컷 연결, 업로드 초안",
    decision: "컷 순서, 렌더 비율, 캡션, 공개 상태",
  },
];

const workflowDiagramCards: WorkflowImageCard[] = [
  {
    id: "flow",
    marker: "02",
    title: "제작 순서 맵",
    body: "트랙 분석부터 후보 생성, 편집 체크, 업로드 준비까지 한 장으로 본 순서",
    image: "/loom-deck/workflow/01-overview.png",
    focus: ["트랙 기준", "프레임 후보", "클립 테스트", "업로드 준비"],
  },
  {
    id: "harness",
    marker: "03",
    title: "작업 기록",
    body: "프롬프트, 후보 파일, 통과/보류 이유, 다음 작업 기록",
    image: "/loom-deck/workflow/02-harness.png",
    focus: ["프롬프트", "후보 파일", "통과/보류", "다음 작업"],
  },
];

const workflowEvidenceCards: WorkflowImageCard[] = [
  {
    id: "pulso-edit-timeline",
    marker: "04",
    title: "Pulso 타임라인 체크",
    body: "최종 영상 주요 구간 타임코드 컷, 컷 길이와 연결 확인 자료",
    image: "/loom-deck/workflow/pulso-edit-timeline-contact-sheet.jpg",
    focus: ["타임코드", "컷 길이", "컷 연결", "리듬"],
  },
  {
    id: "grok-gallery",
    marker: "05",
    title: "Grok 후보 갤러리",
    body: "짧은 영상 후보의 무드, 얼굴 유지, 컷 가능성 비교 화면",
    image: "/loom-deck/workflow/grok-candidate-gallery.jpg",
    focus: ["후보 비교", "무드", "얼굴 유지", "컷 가능성"],
  },
  {
    id: "platform-review",
    marker: "06",
    title: "플랫폼 업로드 체크",
    body: "YouTube, TikTok, X 초안 상태, 캡션, 렌더 비율, 공개 여부 확인 기록",
    image: "/loom-deck/workflow/pulso-platform-review-ledger.svg",
    focus: ["초안 상태", "캡션", "렌더 비율", "공개 여부"],
  },
  {
    id: "contact-sheet",
    marker: "07",
    title: "후보 contact sheet",
    body: "생성 후보 시간순 배열, 편집 전달 컷 확인용 요약 이미지",
    image: "/loom-deck/workflow/04-contact-sheet.png",
    focus: ["시간순 비교", "선택 후보", "보류 후보", "편집 전달"],
  },
];

function BoundarySlide() {
  return (
    <div className={styles.workflowBoundaryGrid}>
      <div className={styles.workflowBoundaryStatement}>
        <span>검수 기준</span>
        <strong>좋은 후보보다 편집에 쓸 수 있는 컷 선별</strong>
        <p>
          생성 결과 수보다 실제 영상 연결성 우선, 트랙·프레임·클립·업로드 단계별 확인 항목 기준 후보 선별
        </p>
      </div>
      <div className={styles.workflowBoundaryTable}>
        {boundaryRows.map((row) => (
          <article key={row.phase}>
            <h3>{row.phase}</h3>
            <div>
              <span>사용한 도구와 역할</span>
              <p>{row.tool}</p>
            </div>
            <div>
              <span>확인 기준</span>
              <p>{row.decision}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ImageCard({ card }: { card: WorkflowImageCard }) {
  return (
    <article className={styles.workflowImageCard} id={`workflow-image-${card.id}`}>
      <header className={styles.workflowImageCardHeader}>
        <span>{card.marker}</span>
        <h3>{card.title}</h3>
        <p>{card.body}</p>
      </header>
      <figure className={styles.workflowImageMedia}>
        <img src={card.image} alt={`Loom 제작 과정 자료: ${card.title}`} loading="lazy" />
      </figure>
      <aside className={styles.workflowFocusPanel}>
        <span>확인한 것</span>
        <ul>
          {card.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </aside>
    </article>
  );
}

export function LoomWorkflowPage() {
  return (
    <Shell wide>
      <section className={styles.workflowPageHero}>
        <div className={styles.workflowHeroCopy}>
          <span className={styles.sectionLabel}>Loom / Pulso</span>
          <h1>Loom 제작 과정</h1>
          <p>
            Pulso 트랙 기준 프레임 후보 생성, 사용 구간 선별, 편집과 업로드 전 검수 기록
          </p>
        </div>
        <div className={styles.workflowHeroActions}>
          <Link className={styles.secondaryLink} href="/#project-routes">
            <Route size={16} /> Portfolio
          </Link>
          <a className={styles.primaryLink} href="#workflow-review-materials">
            검수 자료 보기 <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className={styles.workflowPageShell} aria-label="Loom 제작 과정 요약">
        <section className={styles.workflowPurposeBand} aria-label="Workflow page purpose">
          <div>
            <span>작업 순서</span>
            <h2>트랙 분해, 프레임 선별, 편집용 구간 확인</h2>
          </div>
          <div className={styles.workflowPurposeGrid}>
            {purposeItems.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className={styles.workflowPurposeTools} aria-label={`${item.title} 사용 도구`}>
                  {item.tools.map((tool) => (
                    <em key={tool}>{tool}</em>
                  ))}
                </div>
                <small className={styles.workflowPurposeWhy}>{item.why}</small>
              </article>
            ))}
          </div>
        </section>

        <article className={styles.workflowBoundarySection} id="workflow-boundary">
          <header className={styles.workflowSectionHeader}>
            <span>01</span>
            <h2>단계별 체크포인트</h2>
            <p>트랙, 프레임, 클립, 업로드 단계별 실제 확인 항목</p>
          </header>
          <BoundarySlide />
        </article>

        <section className={styles.workflowImageSection} id="workflow-images" aria-label="Loom 제작 흐름 도식">
          <header className={styles.workflowSectionHeader}>
            <span>02-03</span>
            <h2>제작 흐름</h2>
            <p>작업 순서와 기록 화면 확인 구간</p>
          </header>

          <div className={styles.workflowImageNav} aria-label="Workflow image navigation">
            {workflowDiagramCards.map((card) => (
              <a href={`#workflow-image-${card.id}`} key={card.id}>
                <span>{card.marker}</span>
                {card.title}
              </a>
            ))}
          </div>

          <div className={styles.workflowImageRail}>
            {workflowDiagramCards.map((card) => (
              <ImageCard card={card} key={card.id} />
            ))}
          </div>
        </section>

        <section className={styles.workflowEvidenceSection} id="workflow-review-materials" aria-label="Loom 제작 검토 자료">
          <header className={styles.workflowSectionHeader}>
            <span>04-07</span>
            <h2>검수 자료</h2>
            <p>타임라인, 후보 갤러리, 업로드 체크, contact sheet 기반 실제 검수 자료</p>
          </header>

          <div className={styles.workflowImageRail}>
            {workflowEvidenceCards.map((card) => (
              <ImageCard card={card} key={card.id} />
            ))}
          </div>
        </section>
      </section>
    </Shell>
  );
}
