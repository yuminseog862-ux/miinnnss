import Link from "next/link";
import { ArrowRight, FileText, Layers, Route } from "lucide-react";
import styles from "./portfolio-hub.module.css";
import { projects, resumeProfile, type PortfolioProject } from "@/lib/portfolio-hub/content";

const navItems = [
  { href: "/", label: "Resume" },
  { href: "/musinsa", label: "Musinsa" },
  { href: "/loom", label: "Loom" },
  { href: "/aheya", label: "AHEYA" },
  { href: "/adsb", label: "ADSB" },
];

function Shell({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <main className={styles.page}>
      <div className={`${styles.shell} ${wide ? styles.wideShell : ""}`}>
        <nav className={styles.nav} aria-label="Portfolio navigation">
          <Link className={styles.brand} href="/">
            <span className={styles.brandMark} />
            Resume Portfolio
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
          Resume-first portfolio hub for AI content marketing, creative production, and project abstracts.
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
          <span className={styles.sectionLabel}>Resume Portfolio</span>
          <h1>{resumeProfile.headline}</h1>
          <p className={styles.caseHeadline}>{resumeProfile.subline}</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryLink} href="#project-routes">
              프로젝트 보기 <Layers size={16} />
            </Link>
            <Link className={styles.secondaryLink} href="/resume-common.html">
              HTML 복붙 파일 <ArrowRight size={16} />
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

export function ResumePage() {
  return (
    <Shell>
      <section className={styles.projectHero}>
        <span className={styles.sectionLabel}>Copy-ready Resume</span>
        <h1>공통 이력서 붙여넣기 버전</h1>
        <p>
          채용 플랫폼의 자기소개, 핵심역량, 프로젝트 입력칸에 나눠 넣기 쉬운 형태. HTML 파일은 정적 파일로도 열람 가능
        </p>
        <div className={styles.actionRow}>
          <Link className={styles.htmlLink} href="/resume-common.html">
            HTML 파일 열기 <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <ResumeSummary />
      <section className={styles.section} id="project-routes">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Portfolio Routes</span>
          <h2>최종 결과물과 상세 덱</h2>
        </div>
        <ProjectOutcomeList />
      </section>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Plain Text</span>
          <h2>플랫폼 입력칸용 원문</h2>
        </div>
        <pre className={styles.pasteBlock}>{plainTextResume}</pre>
      </section>
    </Shell>
  );
}

function ProjectOutcomeList() {
  return (
    <div className={styles.outcomeList}>
      {projects.map((project) => (
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
              </div>
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
            <figure className={styles.caseMedia}>
              <img src={project.media.src} alt={project.media.alt} />
              <figcaption>{project.media.label}</figcaption>
            </figure>
          </div>
        </article>
      ))}
    </div>
  );
}

function ResumeSummary() {
  return (
    <div className={styles.resumeGrid}>
      <article className={styles.copyPanel}>
        <span className={styles.copyLabel}>Headline</span>
        <h3>{resumeProfile.headline}</h3>
        <p>{resumeProfile.subline}</p>
        <span className={styles.copyLabel}>Profile</span>
        <p>{resumeProfile.profile}</p>
      </article>
      <aside className={styles.competencyPanel}>
        <span className={styles.copyLabel}>Core Competencies</span>
        {resumeProfile.competencies.map(([title, body]) => (
          <div className={styles.competencyItem} key={title}>
            <strong>{title}</strong>
            <span>{body}</span>
          </div>
        ))}
      </aside>
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
              <Link className={styles.primaryLink} href="/resume">
                <FileText size={16} /> 공통 이력서
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
            <figure className={styles.caseMedia}>
              <img src={project.media.src} alt={project.media.alt} />
              <figcaption>{project.media.label}</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className={styles.projectDetailGrid}>
        <article className={styles.projectDetailPanel}>
          <span className={styles.copyLabel}>Resume Bullets</span>
          <ul>
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
        <aside className={styles.projectDetailPanel}>
          <span className={styles.copyLabel}>Outputs</span>
          <div className={styles.outputList}>
            {project.outputs.map((output) => (
              <span key={output}>{output}</span>
            ))}
          </div>
        </aside>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>One-line Resume Copy</span>
          <h2>압축 문장</h2>
        </div>
        <pre className={styles.pasteBlock}>{project.resumeLine}</pre>
      </section>
    </Shell>
  );
}

const plainTextResume = `${resumeProfile.headline}
${resumeProfile.subline}

Profile
${resumeProfile.profile}

Core Competencies
${resumeProfile.competencies.map(([title, body]) => `- ${title}: ${body}`).join("\n")}

Projects
${projects.map((project) => `${project.title} | ${project.role} | ${project.period}\n${project.bullets.map((bullet) => `- ${bullet}`).join("\n")}`).join("\n\n")}

Portfolio Links
${projects.map((project) => `${project.shortTitle}\n${project.deckLinks.map((link) => `- ${link.label}: ${link.href}`).join("\n")}`).join("\n\n")}

Positioning
- 메인 포지션은 AI 콘텐츠 마케팅, 콘텐츠 기획/제작, PMM 메시지 구조화 중심으로 표기
- PM과 프론트엔드는 콘텐츠를 직접 구조화하고 공개 결과물로 정리하기 위한 보조 역량으로 표기`;
