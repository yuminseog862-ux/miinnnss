import Link from "next/link";
import { ArrowRight, Layers, Route } from "lucide-react";
import styles from "./portfolio-hub.module.css";
import { projects, resumeProfile, type PortfolioProject } from "@/lib/portfolio-hub/content";

const navItems = [
  { href: "/", label: "Portfolio" },
  { href: "/musinsa", label: "Musinsa" },
  { href: "/loom", label: "Loom" },
  { href: "/adsb", label: "ADSB" },
  { href: "/aheya", label: "AHEYA" },
];

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
    </Shell>
  );
}
