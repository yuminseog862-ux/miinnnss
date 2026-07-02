import Link from "next/link";
import { ArrowRight, ExternalLink, Music2, Route, ShieldCheck, TrendingUp, Youtube } from "lucide-react";
import { channelPerformanceSnapshot } from "@/lib/portfolio-hub/channel-performance";
import { Shell } from "./portfolio-pages";
import styles from "./portfolio-hub.module.css";

const numberFormat = new Intl.NumberFormat("en-US");
const TOP_POST_COUNT = 3;

type EmbedItem = {
  platform: "TikTok" | "YouTube";
  title: string;
  date: string;
  meta: string;
  href: string;
  src: string;
};

function formatNumber(value: number) {
  return numberFormat.format(value);
}

function getLastPathSegment(url: string) {
  const segments = url.split("?")[0]?.split("/").filter(Boolean) ?? [];
  return segments[segments.length - 1] ?? "";
}

function getYouTubeVideoId(url: string) {
  return new URLSearchParams(url.split("?")[1] ?? "").get("v") ?? getLastPathSegment(url);
}

function PlatformIcon({ platform }: { platform: string }) {
  if (platform === "TikTok") return <Music2 size={18} />;
  return <Youtube size={18} />;
}

export function ChannelPerformancePage() {
  const topTikTokVideos = channelPerformanceSnapshot.tiktokVideos.slice(0, TOP_POST_COUNT);
  const topYouTubeVideos = channelPerformanceSnapshot.youtubeVideos.slice(0, TOP_POST_COUNT);

  const embedGroups = [
    {
      id: "loom-metrics",
      title: "Loom TikTok top videos",
      items: topTikTokVideos.map((item): EmbedItem => ({
        platform: "TikTok",
        title: item.title,
        date: item.date,
        meta: `${formatNumber(item.views)} views / ${formatNumber(item.likes)} likes / ${formatNumber(item.saves)} saves`,
        href: item.url,
        src: `https://www.tiktok.com/embed/v2/${getLastPathSegment(item.url)}`,
      })),
    },
    {
      id: "loom-youtube-metrics",
      title: "Loom/Pulso YouTube top videos",
      items: topYouTubeVideos.map((item): EmbedItem => ({
        platform: "YouTube",
        title: item.title,
        date: item.date,
        meta: `${formatNumber(item.views)} views / ${formatNumber(item.likes)} likes / ${item.duration}`,
        href: item.url,
        src: `https://www.youtube.com/embed/${getYouTubeVideoId(item.url)}`,
      })),
    },
  ];

  return (
    <Shell wide>
      <section className={styles.performanceHero}>
        <div className={styles.performanceHeroGrid}>
          <div className={styles.performanceHeroCopy}>
            <span className={styles.sectionLabel}>Content Performance Snapshot</span>
            <h1>Public channel signals</h1>
            <p>
              Loom/Pulso를 공개 채널에서 운영하며 남긴 조회, 반응, 링크 기반 성과를 한 곳에 모았습니다.
              성별 지표는 공개 API와 IDOL 로컬 ledger에서 노출되지 않아 별도 추정 없이 미노출로 표시합니다.
              수치는 전환이나 매출이 아니라 콘텐츠 훅, 카피, 채널 운영의 공개 반응 신호로만 해석합니다.
            </p>
            <div className={styles.actionRow}>
              <Link className={styles.primaryLink} href="#platforms">
                플랫폼별 보기 <ArrowRight size={16} />
              </Link>
              <Link className={styles.secondaryLink} href="/">
                <Route size={16} /> Portfolio Top
              </Link>
            </div>
          </div>
          <div className={styles.performanceHeroStats} aria-label="Performance headline metrics">
            {channelPerformanceSnapshot.heroStats.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.performanceScopeBand}>
        <ShieldCheck size={20} />
        <div>
          <strong>{channelPerformanceSnapshot.collectedAt}</strong>
          <p>{channelPerformanceSnapshot.scope}</p>
          <p>{channelPerformanceSnapshot.sourceSet}</p>
        </div>
      </section>

      <section className={styles.section} id="platforms">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Channel Split</span>
          <h2>플랫폼별 성과 요약</h2>
          <p>TikTok은 메인 숏폼 성과와 성별 지표 노출 여부, YouTube는 공개 영상 아카이브 근거로 분리했습니다.</p>
        </div>
        <div className={styles.performancePlatformGrid}>
          {channelPerformanceSnapshot.platforms.map((platform) => (
            <article key={platform.platform} className={styles.performancePlatformPanel}>
              <div className={styles.performancePlatformHeader}>
                <PlatformIcon platform={platform.platform} />
                <div>
                  <span>{platform.platform}</span>
                  <a href={platform.url} target="_blank" rel="noreferrer">
                    {platform.handle} <ExternalLink size={13} />
                  </a>
                </div>
              </div>
              <strong className={styles.performanceMainMetric}>{platform.mainMetric}</strong>
              <p className={styles.performanceMetricLabel}>{platform.mainLabel}</p>
              <dl className={styles.performanceStatList}>
                {platform.stats.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <p className={styles.performancePanelNote}>{platform.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Portfolio Requirement Map</span>
          <h2>해석</h2>
          <p>각 사례를 타깃, 기획 의도, 본인 역할, 성과 지표 기준으로 바로 읽히게 정리했습니다.</p>
        </div>
        <div className={styles.performanceCaseGrid}>
          {channelPerformanceSnapshot.contentCases.map((item) => (
            <article key={item.title} className={styles.performanceCasePanel}>
              <h3>{item.title}</h3>
              <dl>
                <div>
                  <dt>Target</dt>
                  <dd>{item.target}</dd>
                </div>
                <div>
                  <dt>Intent</dt>
                  <dd>{item.intent}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{item.role}</dd>
                </div>
                <div>
                  <dt>Metrics</dt>
                  <dd>{item.metrics}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Embedded Posts</span>
          <h2>대표 게시물 상위 3개</h2>
          <p>Loom/Pulso TikTok·YouTube에서 공개 반응이 높은 대표 게시물만 임베드했습니다.</p>
        </div>
        <div className={styles.performanceEmbedStack}>
          {embedGroups.map((group) => (
            <EmbedPlatform id={group.id} key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Short-form And Video</span>
          <h2>TikTok / YouTube 게시물</h2>
          <p>TikTok과 YouTube 모두 공개 반응 기준 상위 3개만 대표 샘플로 정리했습니다.</p>
        </div>
        <div className={styles.performanceTwoColumn}>
          <PerformanceList
            title="TikTok top videos"
            items={topTikTokVideos.map((item) => ({
              ...item,
              meta: `${formatNumber(item.views)} views / ${formatNumber(item.likes)} likes / ${formatNumber(item.saves)} saves`,
            }))}
          />
          <PerformanceList
            title="YouTube public videos"
            items={topYouTubeVideos.map((item) => ({
              ...item,
              meta: `${formatNumber(item.views)} views / ${formatNumber(item.likes)} likes / ${item.duration}`,
            }))}
          />
        </div>
      </section>

      <section className={styles.performanceClosingBand}>
        <TrendingUp size={20} />
        <div>
          <strong>Recommended wording</strong>
          <p>
            “공개 채널 수치는 제품 전환이 아니라 콘텐츠 훅, 메시지 구조, 시각 자산, 게시 흐름에 대한 반응 신호로 해석했습니다.”
          </p>
        </div>
      </section>
    </Shell>
  );
}

function EmbedPlatform({ id, title, items }: { id: string; title: string; items: EmbedItem[] }) {
  return (
    <article className={styles.performanceEmbedSection} id={id}>
      <div className={styles.performanceEmbedSectionHeader}>
        <h3>{title}</h3>
        <span>Top {items.length}</span>
      </div>
      <div className={styles.performanceEmbedGrid}>
        {items.map((item) => (
          <figure className={styles.performanceEmbedCard} key={item.href} data-platform={item.platform}>
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.date}</span>
              <p>{item.meta}</p>
              <a href={item.href} target="_blank" rel="noreferrer">
                원문 열기 <ExternalLink size={13} />
              </a>
            </figcaption>
            <div className={styles.performanceEmbedFrame}>
              <iframe
                src={item.src}
                title={`${item.platform} embed: ${item.title}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={item.platform === "YouTube"}
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </figure>
        ))}
      </div>
    </article>
  );
}

function PerformanceList({
  title,
  items,
}: {
  title: string;
  items: Array<{ title: string; date: string; url: string; meta: string }>;
}) {
  return (
    <article className={styles.performanceListPanel}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.url}>
            <div>
              <strong>{item.title}</strong>
              <span>{item.date}</span>
              <p>{item.meta}</p>
            </div>
            <a href={item.url} target="_blank" rel="noreferrer" aria-label={`${item.title} open`}>
              <ExternalLink size={16} />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
