import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Layers, Music2, Route, Twitter, Youtube } from "lucide-react";
import { ExpandableMediaFigure } from "./expandable-media";
import styles from "./portfolio-hub.module.css";
import { getProject, projects, resumeProfile, type PortfolioProject } from "@/lib/portfolio-hub/content";

const navItems = [
  { href: "/", label: "Portfolio" },
  { href: "/deck/musinsa", label: "Musinsa" },
  { href: "/deck/loom", label: "Loom" },
  { href: "/deck/adsb", label: "ADSB" },
  { href: "/deck/sfti", label: "SFTI" },
  { href: "/deck/aheya", label: "AHEYA" },
];

const visibleProjectOrder: PortfolioProject["slug"][] = ["musinsa", "loom", "adsb", "sfti", "aheya"];
const visibleProjects = visibleProjectOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is PortfolioProject => Boolean(project));

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function ProjectCta({
  link,
  className,
}: {
  link: PortfolioProject["deckLinks"][number];
  className: string;
}) {
  const icon = isExternalHref(link.href) ? <ExternalLink size={16} /> : <ArrowRight size={16} />;

  if (isExternalHref(link.href)) {
    return (
      <a className={className} href={link.href} target="_blank" rel="noreferrer">
        {link.label} {icon}
      </a>
    );
  }

  return (
    <Link className={className} href={link.href}>
      {link.label} {icon}
    </Link>
  );
}

function SocialIcon({ label }: { label: NonNullable<PortfolioProject["socialLinks"]>[number]["label"] }) {
  if (label === "YouTube") return <Youtube size={16} />;
  if (label === "TikTok") return <Music2 size={16} />;
  return <Twitter size={16} />;
}

function ProjectSocialLinks({ project }: { project: PortfolioProject }) {
  if (!project.socialLinks?.length) return null;

  return (
    <div className={styles.socialBlock}>
      <span className={styles.copyLabel}>SNS Quick Links</span>
      <div className={styles.socialLinks}>
        {project.socialLinks.map((link) => (
          <a
            aria-label={`${project.shortTitle} ${link.label}: ${link.description}`}
            className={styles.socialLink}
            href={link.href}
            key={link.href}
            target="_blank"
            rel="noreferrer"
            title={link.description}
          >
            <SocialIcon label={link.label} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function ProjectMediaFigure({ project }: { project: PortfolioProject }) {
  const { media } = project;

  if (media.embed) {
    return (
      <figure className={styles.caseMedia}>
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

function Shell({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <main className={styles.page}>
      <div className={`${styles.shell} ${wide ? styles.wideShell : ""}`}>
        <nav className={styles.nav} aria-label="Portfolio navigation">
          <Link className={styles.brand} href="/">
            <span className={styles.brandMark} />
            Portfolio
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
          Public AI creative portfolio for short-form, IP content, and service prototype work.
        </footer>
      </div>
    </main>
  );
}

export function MasterHubPage() {
  return (
    <Shell wide>
      <section className={styles.hero}>
        <div className={`${styles.heroText} ${styles.caseTitleBlock}`}>
          <span className={styles.sectionLabel}>Portfolio</span>
          <h1>{resumeProfile.headline}</h1>
          <p className={`${styles.caseHeadline} ${styles.heroSubline}`}>{resumeProfile.subline}</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryLink} href="#project-routes">
              프로젝트 보기 <Layers size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section} id="project-routes">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Portfolio Links</span>
          <h2>Projects</h2>
        </div>
        <ProjectOutcomeList />
      </section>
    </Shell>
  );
}

function ProjectOutcomeList() {
  return (
    <div className={styles.outcomeList}>
      {visibleProjects.map((project) => (
        <article className={`${styles.outcomeCard} ${styles[project.accent]}`} key={project.slug}>
          <div className={styles.caseBoard}>
            <div className={styles.caseText}>
              <div className={styles.caseTitleBlock}>
                <span className={styles.projectLabel}>{project.role}</span>
                <strong className={styles.caseCode}>{project.title}</strong>
                <h3>{project.shortTitle}</h3>
                <p className={styles.caseHeadline}>{project.headline}</p>
                <p className={styles.caseResult}>{project.finalResult}</p>
              </div>
              <div className={styles.outcomeBody}>
                <div>
                  <span className={styles.copyLabel}>Key Contents</span>
                  <ul className={styles.keyList}>
                    {project.keyContents.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className={styles.copyLabel}>Final Outputs</span>
                  <div className={styles.outputList}>
                    {project.outputs.map((output) => (
                      <span key={output}>{output}</span>
                    ))}
                  </div>
                </div>
                <ProjectSocialLinks project={project} />
              </div>
              <div className={styles.deckLinks}>
                {project.deckLinks.map((link, index) => (
                  <ProjectCta
                    className={index === 0 ? styles.primaryLink : styles.secondaryLink}
                    key={link.href}
                    link={link}
                  />
                ))}
              </div>
            </div>
            <ProjectMediaFigure project={project} />
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProjectPage({ project }: { project: PortfolioProject }) {
  return (
    <Shell>
      <section className={`${styles.projectHero} ${styles[project.accent]}`}>
        <div className={styles.projectHeroGrid}>
          <div className={styles.projectHeroText}>
            <div className={styles.caseTitleBlock}>
              <span className={styles.sectionLabel}>{project.role}</span>
              <strong className={styles.caseCode}>{project.title}</strong>
              <h1>{project.shortTitle}</h1>
              <p className={styles.caseHeadline}>{project.headline}</p>
              <p className={styles.caseResult}>{project.abstract}</p>
            </div>
          <div className={styles.projectMeta}>
            <span>{project.period}</span>
            <span>{project.role}</span>
          </div>
          <div className={styles.actionRow}>
              <Link className={styles.secondaryLink} href="/">
                <Route size={16} /> Portfolio Top
              </Link>
            </div>
          </div>
          <ProjectMediaFigure project={project} />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Final Result</span>
          <h2>결과물과 상세 링크</h2>
          <p>{project.finalResult}</p>
        </div>
        <div className={`${styles.outcomeCard} ${styles[project.accent]}`}>
          <div className={styles.caseBoard}>
            <div className={styles.caseText}>
              <div className={styles.outcomeBody}>
                <div>
                  <span className={styles.copyLabel}>Key Contents</span>
                  <ul className={styles.keyList}>
                    {project.keyContents.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className={styles.copyLabel}>Detailed Portfolio</span>
                  <div className={styles.deckLinks}>
                    {project.deckLinks.map((link, index) => (
                      <ProjectCta
                        className={index === 0 ? styles.primaryLink : styles.secondaryLink}
                        key={link.href}
                        link={link}
                      />
                    ))}
                  </div>
                </div>
                <ProjectSocialLinks project={project} />
              </div>
            </div>
            <ProjectMediaFigure project={project} />
          </div>
        </div>
      </section>
    </Shell>
  );
}

const bemoonProblemCards = [
  {
    marker: "01",
    title: "DPP 대응 부담",
    body: "EU DPP 흐름이 제품 식별, 소재, 공급망, 안전 정보까지 요구하면서 디자이너 브랜드의 운영 복잡성이 커지는 문제에서 출발합니다.",
  },
  {
    marker: "02",
    title: "가품과 2차 거래 신뢰",
    body: "가품 유통은 브랜드 이미지와 소비자 신뢰를 동시에 낮추고, 리셀 상황에서는 원 구매처와 제품 상태를 외부에서 확인하기 어렵습니다.",
  },
  {
    marker: "03",
    title: "내부 보증서의 한계",
    body: "CRM/A/S용 보증 기록은 브랜드 내부에 머물기 쉬워 외부 거래, 공유, 검증 순간에 바로 쓰기 어렵다는 점을 핵심 gap으로 잡았습니다.",
  },
];

const bemoonFlowSteps = [
  {
    step: "01",
    title: "Purchase",
    body: "자사몰 또는 외부 유통 구매 데이터를 브랜드가 통제하는 진입점으로 잡습니다.",
  },
  {
    step: "02",
    title: "QR / WL Auth",
    body: "QR, WL1/WL2, 추가 인증을 통해 실제 상품과 구매자를 연결합니다.",
  },
  {
    step: "03",
    title: "Proof Issue",
    body: "지갑/계정 기반 디지털 보증서를 발급하고, 필요 시 2FA로 증명 신뢰도를 높입니다.",
  },
  {
    step: "04",
    title: "Verify / Benefit",
    body: "진위 확인, 혜택 확인, 향후 거래/리셀 검증으로 확장될 수 있는 외부 신뢰면을 만듭니다.",
  },
  {
    step: "05",
    title: "OMS Sync",
    body: "환불, 교환, 추적, 소유 상태를 브랜드 운영 데이터와 다시 맞춰 보증서가 실물 운영에서 떨어지지 않게 합니다.",
  },
];

const bemoonStructureCards = [
  {
    title: "Brand / OMS",
    body: "상품·주문 데이터와 보증서 템플릿, WL 관리가 시작되는 브랜드 운영 영역입니다.",
    items: ["Product data", "Order data", "WL/template control"],
  },
  {
    title: "BE;MOON Core",
    body: "발급 SaaS, 검증 엔진, 상태/소유권 DB가 모이는 핵심 서비스 레이어입니다.",
    items: ["Issuance SaaS", "Verification engine", "Ownership DB"],
  },
  {
    title: "Metadata / Contract",
    body: "메타데이터 저장, 스마트계약, 검증 로그를 통해 보증서의 외부 확인 가능성을 만듭니다.",
    items: ["Metadata", "Smart contract", "Verification log"],
  },
  {
    title: "Consumer / Channel",
    body: "지갑, 마이페이지, 진위 검증, 리셀 연동처럼 소비자가 실제로 만나는 표면입니다.",
    items: ["Wallet / My page", "Authenticity check", "Resale link"],
  },
];

const bemoonBusinessCards = [
  {
    title: "발급 SaaS",
    body: "브랜드 OMS와 연동해 보증서 생성을 자동화하고, 보증서 발급/관리 자체를 B2B SaaS 수익 가정으로 잡았습니다.",
    note: "사업계획서 가정: 보증서 1건당 단가 200원",
  },
  {
    title: "검증 시스템",
    body: "블록 탐색기 기반 검증 구조를 활용해 보증서 진위와 유통 경로를 확인하는 trust utility로 설계했습니다.",
    note: "검증은 성과가 아니라 MVP 기능 범위",
  },
  {
    title: "거래 플랫폼",
    body: "1차 판매와 2차 거래에서 디지털 보증서를 신뢰 표면으로 쓰고, 거래 수수료를 별도 수익 가정으로 분리했습니다.",
    note: "사업계획서 가정: 1차 0.5-1%, 2차 5%",
  },
];

export function BemoonCasePage() {
  const project = getProject("bemoon");
  if (!project) return null;

  return (
    <Shell>
      <section className={`${styles.projectHero} ${styles[project.accent]}`}>
        <div className={styles.projectHeroGrid}>
          <div className={styles.projectHeroText}>
            <div className={styles.caseTitleBlock}>
              <span className={styles.sectionLabel}>{project.role}</span>
              <strong className={styles.caseCode}>{project.title}</strong>
              <h1>{project.shortTitle}</h1>
              <p className={styles.caseHeadline}>{project.headline}</p>
              <p className={styles.caseResult}>{project.abstract}</p>
            </div>
            <div className={styles.projectMeta}>
              <span>{project.period}</span>
              <span>Online Fashion Startup Capstone</span>
            </div>
            <div className={styles.actionRow}>
              <Link className={styles.primaryLink} href="#bemoon-flow">
                서비스 레일 보기 <ArrowRight size={16} />
              </Link>
              <Link className={styles.secondaryLink} href="/">
                <Route size={16} /> Portfolio Top
              </Link>
            </div>
          </div>
          <figure className={styles.caseMedia}>
            <img src={project.media.src} alt={project.media.alt} />
            <figcaption>{project.media.label}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Final Result</span>
          <h2>결과물과 상세 링크</h2>
          <p>{project.finalResult}</p>
        </div>
        <div className={`${styles.outcomeCard} ${styles[project.accent]}`}>
          <div className={styles.caseBoard}>
            <div className={styles.caseText}>
              <div className={styles.outcomeBody}>
                <div>
                  <span className={styles.copyLabel}>Key Contents</span>
                  <ul className={styles.keyList}>
                    {project.keyContents.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className={styles.copyLabel}>Final Outputs</span>
                  <div className={styles.outputList}>
                    {project.outputs.map((output) => (
                      <span key={output}>{output}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <figure className={styles.caseMedia}>
              <img src={project.media.src} alt={project.media.alt} />
              <figcaption>{project.media.label}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Problem Map</span>
          <h2>왜 이 구조가 필요했는가</h2>
          <p>DPP 대응, 가품 유통, 내부 보증서의 외부 검증 한계를 하나의 운영 문제로 묶었습니다.</p>
        </div>
        <div className={styles.bemoonSignalGrid}>
          {bemoonProblemCards.map((item) => (
            <article key={item.title}>
              <span>{item.marker}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="bemoon-flow">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Service Rail</span>
          <h2>구매에서 OMS 동기화까지</h2>
          <p>핵심은 혜택이나 커뮤니티가 아니라, 구매 인증부터 외부 검증까지 끊기지 않는 디지털 보증서 레일입니다.</p>
        </div>
        <div className={styles.bemoonFlowGrid}>
          {bemoonFlowSteps.map((item) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>MVP Structure</span>
          <h2>무엇을 먼저 만들기로 했는가</h2>
          <p>마켓플레이스나 커뮤니티보다 발급, 검증, 상태 동기화가 먼저 돌아가는 MVP로 정리했습니다.</p>
        </div>
        <div className={styles.bemoonStructureGrid}>
          {bemoonStructureCards.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul>
                {item.items.map((subItem) => (
                  <li key={subItem}>{subItem}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Business Assumptions</span>
          <h2>사업계획서에서 가져온 수익화 가정</h2>
          <p>숫자는 검증 성과가 아니라 사업계획서상의 모델링 가정으로만 둡니다.</p>
        </div>
        <div className={styles.bemoonBusinessGrid}>
          {bemoonBusinessCards.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <strong>{item.note}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.bemoonBoundaryPanel}>
          <div>
            <span className={styles.sectionLabel}>Submission Boundary</span>
            <h2>최종 합본에서의 사용 기준</h2>
            <p>BE;MOON은 출시 성과가 아니라 온라인 패션스타트업 캡스톤디자인의 기획/사업계획/서비스 구조 증거로 넣습니다.</p>
          </div>
          <ul>
            <li>
              <CheckCircle2 size={16} />
              시장·매출 숫자는 검증 결과가 아니라 계획 가정으로 표기
            </li>
            <li>
              <CheckCircle2 size={16} />
              혜택·거래는 2nd layer로 두고 발급·검증 레일을 중심으로 설명
            </li>
            <li>
              <CheckCircle2 size={16} />
              최종 PPT/HTML/PDF에는 `2251014 유민석` 외 개인 이름 제거
            </li>
          </ul>
        </div>
      </section>
    </Shell>
  );
}

const sftiFlow = [
  {
    title: "Idea",
    body: "막연한 AI emotional content 아이디어가 넓게 흩어져 있던 상태",
  },
  {
    title: "Frame",
    body: "niche fashion brand의 content limitation과 identity-based visual clustering으로 문제를 좁힘",
  },
  {
    title: "Output",
    body: "English abstract draft, poster-style research structure, framework pages로 외부 독자용 흐름 구성",
  },
  {
    title: "Revision",
    body: "review result/revision comments를 기준으로 citation, grammar/format, structure clarity 보정",
  },
];

const sftiEvidence = [
  {
    label: "Review / Abstract",
    src: "/sfti/source-assets/sfti-result.webp",
    alt: "SFTI-CMU review result and abstract structure.",
    body: "결과 과장이 아니라 review/revision context와 abstract structure를 보여주는 대표 증거",
  },
  {
    label: "Poster Structure",
    src: "/sfti/source-assets/sfti-1.webp",
    alt: "SFTI-CMU poster structure page.",
    body: "problem, approach, framework를 poster-style reading flow로 정리한 자료",
  },
  {
    label: "Framework Page",
    src: "/sfti/source-assets/sfti-3.webp",
    alt: "SFTI-CMU identity-based visual clustering framework.",
    body: "감정 콘텐츠와 시각 정체성을 identity-based visual clustering 관점으로 설명한 페이지",
  },
  {
    label: "Revision Evidence",
    src: "/sfti/source-assets/sfti-revision.webp",
    alt: "SFTI-CMU revision evidence.",
    body: "citation support, grammar/format, structure clarity를 보완한 revision evidence",
  },
];

export function SftiCasePage() {
  const project = getProject("sfti");
  if (!project) return null;

  return (
    <Shell>
      <section className={`${styles.projectHero} ${styles[project.accent]}`}>
        <div className={styles.projectHeroGrid}>
          <div className={styles.projectHeroText}>
            <div className={styles.caseTitleBlock}>
              <span className={styles.sectionLabel}>{project.role}</span>
              <strong className={styles.caseCode}>{project.title}</strong>
              <h1>{project.shortTitle}</h1>
              <p className={styles.caseHeadline}>{project.headline}</p>
              <p className={styles.caseResult}>{project.abstract}</p>
            </div>
            <div className={styles.projectMeta}>
              <span>{project.period}</span>
              <span>Supporting case after main AI creative work</span>
            </div>
            <div className={styles.actionRow}>
              <Link className={styles.primaryLink} href="#sfti-evidence">
                Evidence Images <ArrowRight size={16} />
              </Link>
              <Link className={styles.secondaryLink} href="/">
                <Route size={16} /> Portfolio Top
              </Link>
            </div>
          </div>
          <ExpandableMediaFigure src={project.media.src} alt={project.media.alt} label={project.media.label} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Final Result</span>
          <h2>결과물과 상세 링크</h2>
          <p>{project.finalResult}</p>
        </div>
        <div className={`${styles.outcomeCard} ${styles[project.accent]}`}>
          <div className={styles.caseBoard}>
            <div className={styles.caseText}>
              <div className={styles.outcomeBody}>
                <div>
                  <span className={styles.copyLabel}>Key Contents</span>
                  <ul className={styles.keyList}>
                    {project.keyContents.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className={styles.copyLabel}>Final Outputs</span>
                  <div className={styles.outputList}>
                    {project.outputs.map((output) => (
                      <span key={output}>{output}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className={styles.copyLabel}>Detailed Portfolio</span>
                  <div className={styles.deckLinks}>
                    {project.deckLinks.map((link, index) => (
                      <Link
                        className={index === 0 ? styles.primaryLink : styles.secondaryLink}
                        href={link.href}
                        key={link.href}
                      >
                        {link.label} <ArrowRight size={16} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <ExpandableMediaFigure src="/sfti/source-assets/sfti-1.webp" alt="SFTI-CMU poster-style structure page." label="Poster-style structure" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Resume Fit</span>
          <h2>자소서/이력서 흐름 안에서의 역할</h2>
          <p>핵심 포트폴리오는 MUSINSA, ADSB, Loom 중심으로 읽히게 두고, SFTI-CMU는 리서치 커뮤니케이션 보조 증거로 연결합니다.</p>
        </div>
        <div className={styles.sftiPositionGrid}>
          <article>
            <span>01</span>
            <h3>Main story</h3>
            <p>AI로 브랜드 메시지를 숏폼 훅, 장면 흐름, 이미지·영상 콘텐츠로 옮긴 경험</p>
            <strong>MUSINSA / ADSB / Loom</strong>
          </article>
          <article>
            <span>02</span>
            <h3>Support role</h3>
            <p>추상적인 감정 콘텐츠 아이디어를 외부 독자용 영어 문서와 포스터 구조로 바꾼 증거</p>
            <strong>SFTI-CMU</strong>
          </article>
          <article>
            <span>03</span>
            <h3>Bridge</h3>
            <p>감정 콘텐츠와 시각 정체성 프레임을 AHEYA의 첫인상, 캐릭터, 이미지·짧은 영상 자산으로 연결</p>
            <strong>SFTI -&gt; AHEYA</strong>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Structure</span>
          <h2>어떻게 읽히게 만들었는가</h2>
        </div>
        <div className={styles.sftiFlowGrid}>
          {sftiFlow.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="sfti-evidence">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Evidence</span>
          <h2>보여줄 증거</h2>
          <p>성과 숫자보다, 구조화 과정과 revision handling이 보이도록 자료를 배치했습니다.</p>
        </div>
        <div className={styles.sftiEvidenceGrid}>
          {sftiEvidence.map((item) => (
            <article key={item.label}>
              <ExpandableMediaFigure src={item.src} alt={item.alt} label={item.label} className={styles.sftiEvidenceFigure} showCaption={false} />
              <div>
                <span className={styles.copyLabel}>{item.label}</span>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sftiResumePanel}>
          <div>
            <span className={styles.sectionLabel}>Resume-ready line</span>
            <h2>채용 플랫폼 문장과 동일한 포지션</h2>
            <p>{project.resumeLine}</p>
          </div>
          <ul>
            <li>
              <CheckCircle2 size={16} />
              수상, 논문 게재, 발표 성과처럼 쓰지 않음
            </li>
            <li>
              <CheckCircle2 size={16} />
              외부 제출형 English writing과 poster-style communication으로 설명
            </li>
            <li>
              <CheckCircle2 size={16} />
              AHEYA의 감정 콘텐츠/시각 정체성 프레임 앞단 증거로만 연결
            </li>
          </ul>
        </div>
      </section>
    </Shell>
  );
}
