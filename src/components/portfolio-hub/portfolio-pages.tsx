import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { HarnessMediaFigure } from "./harness-media";
import styles from "./portfolio-hub.module.css";
import { contentLearningCase } from "@/lib/portfolio-hub/content-learning";
import { projects, resumeProfile, type PortfolioProject } from "@/lib/portfolio-hub/content";

const navItems = [
  { href: "/#project-routes", label: "Work" },
  { href: "/#harness", label: "Process" },
  { href: "/content-performance#learning-loop", label: "Learning" },
  { href: "/#about", label: "About" },
];

const primaryProjectOrder: PortfolioProject["slug"][] = ["loom", "musinsa", "adsb"];
const supportingProjectOrder: PortfolioProject["slug"][] = ["sfti", "aheya"];

function projectsFromOrder(order: PortfolioProject["slug"][]) {
  return order
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is PortfolioProject => Boolean(project));
}

const primaryProjects = projectsFromOrder(primaryProjectOrder);
const supportingProjects = projectsFromOrder(supportingProjectOrder);

function ProjectMediaFigure({ project }: { project: PortfolioProject }) {
  const { media } = project;
  const isVerticalEmbed = media.embed?.type === "instagram";

  if (media.embed) {
    return (
      <figure className={`${styles.caseMedia} ${isVerticalEmbed ? styles.caseMediaVertical : ""}`}>
        <iframe
          className={`${styles.caseMediaEmbed} ${media.embed.type === "instagram" ? styles.instagramEmbed : ""}`}
          src={media.embed.src}
          title={media.embed.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={media.embed.type === "youtube"}
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <figcaption>
          {media.label}
          {media.href ? (
            <a href={media.href} target="_blank" rel="noreferrer">
              Open <ExternalLink size={13} />
            </a>
          ) : null}
        </figcaption>
      </figure>
    );
  }

  const image = (
    <img
      className={media.layout === "wide" ? styles.caseMediaImageWide : undefined}
      src={media.src}
      alt={media.alt}
    />
  );

  return (
    <figure className={styles.caseMedia}>
      {media.href ? (
        <a className={styles.caseMediaLink} href={media.href} target="_blank" rel="noreferrer" aria-label={`${project.shortTitle} external page`}>
          {image}
          <span className={styles.caseMediaOpen}>
            Open <ExternalLink size={14} />
          </span>
        </a>
      ) : (
        image
      )}
      <figcaption>{media.label}</figcaption>
    </figure>
  );
}

const harnessKeyContents = [
  "방향 정리: 타깃·메시지·레퍼런스·동작 타이밍·창작 핵심",
  "생성 설계: MV/안무 설계·이미지 생성 계획·스토리보드·이미지 프롬프트",
  "실행 게이트와 검증·승인: 준비물 목록, 실행 전 점검, 결과 리뷰",
  "편집·게시 기록: 영상 프롬프트, 편집 설계, 최종 패키지, 게시 계획과 산출물 등록",
] as const;

const harnessProof = [
  "방향 카드 · 음악 분석 · 메시지 정리 · 동작 타이밍",
  "MV/안무 설계 · 이미지 생성 계획 · 스토리보드 · 이미지 프롬프트",
  "준비물 목록 · 실행 전 점검 · 결과 리뷰",
  "영상 프롬프트 · 편집 설계 · 최종 패키지 · 게시 계획 · 산출물 등록",
] as const;

/** Hero featured case: Content Learning Loop + top-2 public Shorts by views */
const featuredLearningClips = [
  {
    id: "xNfAkfhipSE",
    platform: "YouTube" as const,
    title: "Loom · They look at each other #Shorts",
    embedSrc: "https://www.youtube.com/embed/xNfAkfhipSE?rel=0&modestbranding=1",
    href: "https://www.youtube.com/shorts/xNfAkfhipSE",
    views: "2,493",
    likes: "22",
  },
  {
    id: "rxwn61IROQc",
    platform: "YouTube" as const,
    title: "Loom · Rena · One chosen color starts the day #Shorts",
    embedSrc: "https://www.youtube.com/embed/rxwn61IROQc?rel=0&modestbranding=1",
    href: "https://www.youtube.com/shorts/rxwn61IROQc",
    views: "1,114",
    likes: "11",
  },
] as const;

/** Same caseBoard stack as Loom / Harness — not a hero side-panel. */
function ContentLearningCase() {
  const teaser = contentLearningCase.teaser;
  const messageStages = contentLearningCase.messageStages;

  return (
    <article
      className={`${styles.outcomeCard} ${styles.learningCase}`}
      id="content-learning"
      aria-labelledby="content-learning-title"
    >
      <div className={styles.caseBoard}>
        <div className={styles.caseText}>
          <div className={styles.caseTitleBlock}>
            <span className={styles.projectLabel}>{teaser.label}</span>
            <h3 id="content-learning-title">Loom Idol Content Learning</h3>
            <p className={styles.caseHeadline}>{teaser.title}</p>
            <p className={styles.caseResult}>{teaser.resultLine}</p>
          </div>

          <div className={styles.outcomeBody}>
            <dl className={styles.projectReadout} aria-label="Learning emphasis">
              {teaser.homeReadout.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
              {messageStages.map((stage) => (
                <div key={stage.version}>
                  <dt>{stage.version}</dt>
                  <dd>
                    <strong className={styles.heroLearningFactTitle}>
                      {stage.title}
                      <span className={styles.heroLearningFactCode}> · {stage.code}</span>
                    </strong>
                    <span className={styles.heroLearningFactBody}>{stage.focus}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.deckLinks}>
            <Link className={styles.primaryLink} href={teaser.ctaHref}>
              {teaser.ctaLabel} <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className={styles.heroLearningMediaBoard} aria-label="Top ranked learning clips">
          {featuredLearningClips.map((clip, index) => (
            <figure className={styles.heroLearningClip} key={clip.id}>
              <div className={styles.heroLearningFilm}>
                <iframe
                  className={styles.heroLearningEmbed}
                  src={clip.embedSrc}
                  title={clip.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <figcaption className={styles.heroLearningClipMeta}>
                <span>
                  TOP {index + 1} · {clip.platform}
                </span>
                <strong>{clip.title}</strong>
                <p>
                  {clip.views} views · {clip.likes} likes
                </p>
                <a href={clip.href} target="_blank" rel="noreferrer">
                  원문 열기 <ExternalLink size={13} />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Shell({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <main className={styles.page}>
      <div className={`${styles.shell} ${wide ? styles.wideShell : ""}`}>
        <nav className={styles.nav} aria-label="Portfolio navigation">
          <Link className={styles.brand} href="/">
            <span className={styles.brandMark} />
            YUMINSEOK
          </Link>
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        {children}
        <footer className={styles.footer}>
          YUMINSEOK / AI CONTENT DIRECTION / MV · CF · AI IP
        </footer>
      </div>
    </main>
  );
}

function HarnessFeature() {
  return (
    <section className={styles.harnessFeature} id="harness">
      <div className={styles.caseBoard}>
        <div className={styles.caseText}>
          <div className={styles.caseTitleBlock}>
            <span className={styles.projectLabel}>Loom Idol / Production Workflow</span>
            <h2 className={styles.harnessFeatureTitle}>Loom Idol AI Content Workflow</h2>
            <p className={styles.caseHeadline}>콘텐츠 제작 AI 워크플로우: Harnessing → Graph Engineering</p>
            <p className={styles.caseResult}>타깃·메시지·레퍼런스를 바탕으로 여러 기획 방향을 비교하고, 본격적인 제작 전에 타깃에게 전달할 메시지와 감정의 방향이 기획 의도에 맞는지 검증합니다.</p>
          </div>
          <div className={styles.outcomeBody}>
            <div>
              <span className={styles.copyLabel}>Workflow</span>
              <ul className={styles.keyList}>
                {harnessKeyContents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className={styles.copyLabel}>Workflow Assets</span>
              <div className={styles.outputList}>
                {harnessProof.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.deckLinks}>
            <Link className={styles.primaryLink} href="/ai-exploration">
              하네스 작업 방식 보기 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <HarnessMediaFigure />
      </div>
    </section>
  );
}

export function MasterHubPage() {
  const [loomProject, ...remainingPrimaryProjects] = primaryProjects;

  return (
    <Shell wide>
      <section className={`${styles.hero} ${styles.masterHero}`}>
        <div className={styles.heroText}>
          <span className={styles.heroSystemEyebrow}>AI CONTENT PRODUCTION / IDOL · CF</span>
          <h1 className={`${styles.heroTitle} ${styles.heroHarnessTitle}`}>
            {resumeProfile.headline}
          </h1>
          <p className={styles.heroMessageSupport}>
            {resumeProfile.heroStatementLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <SelectedWorkIndex />
          <Link className={styles.heroWorkLink} href="#project-routes">
            대표 작업 보기 <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className={styles.section} id="project-routes">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Selected Case Studies</span>
          <h2>대표 프로젝트</h2>
          <p>기획 의도와 판단, 제작 과정, 결과물을 먼저 확인하고 상세 케이스로 이동할 수 있습니다.</p>
        </div>
        {/*
          Narrative stack (tight caseBoard strip):
          Loom (IP product) → Content Learning (signal→scene) → Harness (production system)
          Learning is not first: method follows the product it measures.
        */}
        <div className={styles.caseStack}>
          <ProjectOutcomeList projectsToRender={loomProject ? [loomProject] : []} />
          <ContentLearningCase />
          <HarnessFeature />
        </div>
        <ProjectOutcomeList projectsToRender={remainingPrimaryProjects} />
      </section>

      <section className={`${styles.section} ${styles.supportingWork}`} id="supporting-work">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Supporting Work</span>
          <h2>보조 프로젝트</h2>
          <p>리서치 커뮤니케이션과 초기 반응 설계 사례입니다.</p>
        </div>
        <ProjectOutcomeList projectsToRender={supportingProjects} />
      </section>

      <PublicSurfacesSection />

      <PortfolioAbout />
    </Shell>
  );
}

const selectedWorkIndex = [
  { number: "01", title: "Loom", detail: "AI Idol · 3 MV / 4 CF", href: "#project-loom" },
  { number: "02", title: "Loom Learning", detail: "Signal → next cut", href: "#content-learning" },
  { number: "03", title: "Loom Workflow", detail: "Harness → Graph", href: "#harness" },
  { number: "04", title: "MUSINSA", detail: "30s team ad", href: "#project-musinsa" },
  { number: "05", title: "ADSB", detail: "15s short-form", href: "#project-adsb" },
] as const;

/**
 * Public surfaces — handles verified live:
 * TikTok @loom_mm · YouTube @Loom-idol-m (alias @aheya-b, display Loom-m) · X @minnns_aheya
 */
const publicSurfaces = [
  {
    group: "SOCIAL / TIKTOK",
    title: "@loom_mm",
    detail: "Loom 멤버·트랙 숏폼 기록",
    href: "https://www.tiktok.com/@loom_mm",
  },
  {
    group: "SOCIAL / YOUTUBE",
    title: "@Loom-idol-m",
    detail: "Loom-m · Root Signal · Pulso · INK",
    href: "https://www.youtube.com/@Loom-idol-m",
  },
  {
    group: "SOCIAL / X",
    title: "@minnns_aheya",
    detail: "AI 탐구·제작 과정 기록",
    href: "https://x.com/minnns_aheya",
  },
  {
    group: "SIGNAL DECK / MAIN",
    title: "Loom Signal Deck",
    detail: "멤버 · 트랙 · 영상 · 참여 흐름",
    href: "https://loom-signal-deck.vercel.app",
  },
  {
    group: "SIGNAL DECK / VOTE",
    title: "Vote",
    detail: "다음 트랙·멤버 방향 투표",
    href: "https://loom-signal-deck.vercel.app/vote",
  },
  {
    group: "SIGNAL DECK / CF",
    title: "Spec Commercial",
    detail: "개인 비공식 Spec Commercial 아카이브",
    href: "https://loom-signal-deck.vercel.app/cf",
  },
] as const;

function PublicSurfacesSection() {
  return (
    <section className={`${styles.section} ${styles.publicSurfacesSection}`} id="public-surfaces">
      <nav aria-label="Public social and Signal Deck links" className={styles.publicSurfacesGrid}>
        {publicSurfaces.map((item) => (
          <a
            className={styles.publicSurfaceCard}
            href={item.href}
            key={item.href}
            rel="noreferrer"
            target="_blank"
          >
            <span>{item.group}</span>
            <strong>{item.title}</strong>
            <small>{item.detail}</small>
            <ExternalLink aria-hidden="true" size={14} />
          </a>
        ))}
      </nav>
    </section>
  );
}

function SelectedWorkIndex() {
  return (
    <nav className={styles.workIndex} aria-label="Selected work quick links">
      {selectedWorkIndex.map((item) => (
        <Link href={item.href} key={item.href}>
          <span>{item.number}</span>
          <strong>{item.title}</strong>
          <small>{item.detail}</small>
        </Link>
      ))}
    </nav>
  );
}

function PortfolioAbout() {
  return (
    <section className={styles.aboutFeature} id="about">
      <div>
        <span className={styles.sectionLabel}>About</span>
        <h2>메시지를 콘텐츠로 구현하고, 제작 흐름을 설계합니다.</h2>
      </div>
      <dl className={styles.aboutReadout}>
        <div>
          <dt>Focus</dt>
          <dd>{resumeProfile.homeFocus}</dd>
        </div>
        <div>
          <dt>Approach</dt>
          <dd>타깃 리서치 · 메시지 구조 · 장면 설계 · AI 제작 검수</dd>
        </div>
      </dl>
    </section>
  );
}

function ProjectOutcomeList({ projectsToRender }: { projectsToRender: PortfolioProject[] }) {
  return (
    <div className={styles.outcomeList}>
      {projectsToRender.map((project) => (
        <article className={`${styles.outcomeCard} ${styles[project.accent]}`} id={`project-${project.slug}`} key={project.slug}>
          <div className={`${styles.caseBoard} ${styles.outcomeBoard}`}>
            <div className={styles.caseText}>
              <div className={styles.caseTitleBlock}>
                <span className={styles.projectLabel}>{project.period}</span>
                <h3>{project.homeTitle}</h3>
                <p className={styles.projectRole}>{project.homeRole}</p>
                <p className={styles.caseHeadline}>{project.homeHeadline}</p>
              </div>
              <div className={styles.homeProjectSections}>
                {project.homeOverview ? (
                  <div>
                    <span className={styles.copyLabel}>Overview / Goal</span>
                    <p className={styles.homeProjectOverview}>{project.homeOverview}</p>
                  </div>
                ) : null}
                <div>
                  <span className={styles.copyLabel}>{project.homeApproachLabel ?? "Approach"}</span>
                  <ul className={styles.keyList}>
                    {project.homeApproach.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <ProjectMediaFigure project={project} />
            <div className={styles.caseFooter}>
              <div className={styles.deckLinks}>
                <Link className={styles.primaryLink} href={project.route}>
                  {project.slug === "loom" ? "Loom web" : "Case Study 보기"} <ArrowRight size={16} />
                </Link>
              </div>
              {project.homeTools?.length ? (
                <div className={styles.caseFooterTools}>
                  <span className={styles.copyLabel}>Tools</span>
                  <div className={styles.toolList}>
                    {project.homeTools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className={styles.caseFooterProof}>
                <span className={styles.copyLabel}>Key Outcomes / Proof</span>
                <div className={styles.outputList}>
                  {project.homeProof.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
