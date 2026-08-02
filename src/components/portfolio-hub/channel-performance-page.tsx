import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Eye,
  Music2,
  Route,
  ShieldCheck,
  Target,
  TrendingUp,
  Youtube,
} from "lucide-react";
import { channelPerformanceSnapshot } from "@/lib/portfolio-hub/channel-performance";
import {
  contentLearningCase,
  type CutFlowCompare,
  type SignalObservation,
} from "@/lib/portfolio-hub/content-learning";
import {
  formatMetricCount,
  formatMetricPct,
  publicMetricsPack,
  type PublicPostMetrics,
} from "@/lib/portfolio-hub/public-channel-metrics";
import { Shell } from "./portfolio-pages";
import styles from "./portfolio-hub.module.css";

const ARCHIVE_TOP = 10;

const ADJUST_LEVERS = [
  "이미지 톤",
  "질감",
  "구도",
  "행동",
  "카메라",
  "메시지가 장면에서 읽히는 방식",
] as const;

type EmbedSpec = {
  platform: "TikTok" | "YouTube";
  href: string;
  src: string;
  title: string;
};

function getLastPathSegment(url: string) {
  const segments = url.split("?")[0]?.split("/").filter(Boolean) ?? [];
  return segments[segments.length - 1] ?? "";
}

function getYouTubeVideoId(url: string) {
  if (url.includes("/shorts/")) return getLastPathSegment(url);
  return new URLSearchParams(url.split("?")[1] ?? "").get("v") ?? getLastPathSegment(url);
}

function observationViews(observation: SignalObservation): number {
  const row = observation.metrics.find((metric) => metric.label === "Views");
  if (!row) return 0;
  return Number(String(row.value).replace(/,/g, "")) || 0;
}

function embedForObservation(observation: SignalObservation): EmbedSpec {
  if (observation.platform === "TikTok") {
    const id = getLastPathSegment(observation.postUrl);
    return {
      platform: "TikTok",
      href: observation.postUrl,
      src: `https://www.tiktok.com/embed/v2/${id}`,
      title: observation.postTitle,
    };
  }
  const id = getYouTubeVideoId(observation.postUrl);
  return {
    platform: "YouTube",
    href: observation.postUrl,
    src: `https://www.youtube.com/embed/${id}`,
    title: observation.postTitle,
  };
}

function PlatformIcon({ platform }: { platform: string }) {
  if (platform === "TikTok") return <Music2 size={16} />;
  return <Youtube size={16} />;
}

function headlineMetrics(observation: SignalObservation) {
  const preferred =
    observation.platform === "YouTube"
      ? ["Views", "Likes", "Avg view %", "Avg watch"]
      : ["Views", "Likes", "Shares", "Saves", "Eng. rate"];
  const byLabel = new Map(observation.metrics.map((metric) => [metric.label, metric]));
  return preferred
    .map((label) => byLabel.get(label))
    .filter((metric): metric is { label: string; value: string } => Boolean(metric))
    .slice(0, 4);
}

export function ChannelPerformancePage() {
  const learning = contentLearningCase;
  const studio = publicMetricsPack.adminAnalyticsBoundary.youtubeStudio;
  const byId = new Map(
    learning.signalRails.flatMap((rail) =>
      rail.observations.map((observation) => [observation.id, observation] as const),
    ),
  );

  const archiveTikTok = publicMetricsPack.tiktok.posts.slice(0, ARCHIVE_TOP);
  const archiveYouTube = publicMetricsPack.youtube.posts.slice(0, ARCHIVE_TOP);
  const tiktokPlatform = channelPerformanceSnapshot.platforms.find((p) => p.platform === "TikTok");
  const youtubePlatform = channelPerformanceSnapshot.platforms.find((p) => p.platform === "YouTube");

  return (
    <Shell wide>
      {/* Channel snapshot — top */}
      <section className={styles.learningSnapshotBand} id="public-metrics" aria-label="Channel snapshot summary">
        <div className={styles.learningSnapshotHead}>
          <ShieldCheck size={16} />
          <div>
            <strong>채널 스냅샷</strong>
            <span>
              TT 검증 {channelPerformanceSnapshot.collectedAt} · YT Studio {channelPerformanceSnapshot.remeasuredAt} ·
              반응 신호만 (전환·매출 아님)
            </span>
          </div>
        </div>
        <div className={styles.learningSnapshotGrid}>
          {tiktokPlatform ? (
            <article>
              <span>TikTok {tiktokPlatform.handle}</span>
              <strong>{tiktokPlatform.mainMetric}</strong>
              <p>{tiktokPlatform.mainLabel}</p>
            </article>
          ) : null}
          {youtubePlatform ? (
            <article>
              <span>YouTube {youtubePlatform.handle}</span>
              <strong>{youtubePlatform.mainMetric}</strong>
              <p>{youtubePlatform.mainLabel}</p>
            </article>
          ) : null}
          <article>
            <span>Studio top country</span>
            <strong>
              {studio?.topCountries[0]
                ? `${studio.topCountries[0].country} ${formatMetricPct(studio.topCountries[0].sharePct)}`
                : "—"}
            </strong>
            <p>
              avg view {studio ? formatMetricPct(studio.totals.averageViewPercentage) : "—"} · TT 국가/완주 not
              exposed
            </p>
          </article>
        </div>
      </section>

      {/* Single title + arc summary below (not right rail) */}
      <section className={styles.learningHero} id="learning-loop">
        <div className={styles.learningHeroSolo}>
          <span className={styles.sectionLabel}>{learning.projectLabel}</span>
          <h1>{learning.pageTitle}</h1>
          <p className={styles.learningHeroLine}>{learning.heroLine}</p>
          <p className={styles.learningHeroBody}>{learning.heroBody}</p>

          {/* Core routing: 처음에 → 바꾼 것 → 다음 과제, co-labeled with message V1–V3 */}
          <div className={styles.learningRouteFlow} id="message-learning" aria-label="Learning route">
            <div className={styles.learningRouteFlowHead}>
              <div>
                <span className={styles.sectionLabel}>Core route</span>
                <h2 className={styles.learningRouteFlowTitle}>처음에 → 바꾼 것 → 다음 과제</h2>
              </div>
              <p>메시지 학습 단계 V1 · V2 · V3 와 같은 축으로 병기</p>
            </div>
            <ol className={styles.learningRouteTrack}>
              <li className={styles.learningRouteStep} data-step="before">
                <div className={styles.learningRouteMeta}>
                  <span className={styles.learningRouteVersion}>V1</span>
                  <span className={styles.learningRouteIndex}>01 · 처음에</span>
                  <strong>{learning.messageStages[0].code}</strong>
                  <em>{learning.messageStages[0].title}</em>
                </div>
                <p>{learning.arcSummary.before}</p>
                <small>{learning.messageStages[0].question}</small>
              </li>
              <li className={styles.learningRouteArrow} aria-hidden="true">
                <span className={styles.learningRouteArrowLine} />
                <ArrowRight size={18} />
              </li>
              <li className={styles.learningRouteStep} data-step="changed">
                <div className={styles.learningRouteMeta}>
                  <span className={styles.learningRouteVersion}>V2</span>
                  <span className={styles.learningRouteIndex}>02 · 바꾼 것</span>
                  <strong>{learning.messageStages[1].code}</strong>
                  <em>{learning.messageStages[1].title}</em>
                </div>
                <p>{learning.arcSummary.changed}</p>
                <p className={styles.learningRouteNowNote}>
                  <span>지금은</span> {learning.arcSummary.now}
                </p>
                <small>{learning.messageStages[1].question}</small>
              </li>
              <li className={styles.learningRouteArrow} aria-hidden="true">
                <span className={styles.learningRouteArrowLine} />
                <ArrowRight size={18} />
              </li>
              <li className={styles.learningRouteStep} data-step="next">
                <div className={styles.learningRouteMeta}>
                  <span className={styles.learningRouteVersion}>V3</span>
                  <span className={styles.learningRouteIndex}>03 · 다음 과제</span>
                  <strong>{learning.messageStages[2].code}</strong>
                  <em>{learning.messageStages[2].title}</em>
                </div>
                <p>{learning.arcSummary.next}</p>
                <small>{learning.messageStages[2].question}</small>
              </li>
            </ol>
          </div>

          <div className={styles.actionRow}>
            <a className={styles.primaryLink} href="#stage-now">
              사례 카드 보기 <ArrowRight size={16} />
            </a>
            <Link className={styles.secondaryLink} href="/">
              <Route size={16} /> Portfolio Top
            </Link>
          </div>
        </div>
      </section>

      {/* Three narrative stages — vertical expanded cards */}
      <section className={`${styles.section} ${styles.learningAnchor}`} id="signal-to-scene">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Signal-to-Scene</span>
          <h2>현재 · 이전 · 조정</h2>
          <p>
            카드는 세로로 쌓입니다. 한 장은 영상 · 핵심 숫자 · 옆의 상세 지표·가설이 붙어 확장된 한 덩어리입니다.
            플랫폼은 합산하지 않습니다.
          </p>
        </div>

        <div className={styles.learningStageStack}>
          {learning.narrativeStages.map((stage) => {
            const cards = stage.observationIds
              .map((id) => byId.get(id))
              .filter((item): item is SignalObservation => Boolean(item))
              .sort((a, b) => observationViews(b) - observationViews(a));

            return (
              <section
                key={stage.id}
                className={styles.learningStageBlock}
                id={`stage-${stage.id}`}
                aria-labelledby={`stage-title-${stage.id}`}
              >
                <header className={styles.learningStageHeader}>
                  <span>{stage.marker}</span>
                  <div>
                    <h3 id={`stage-title-${stage.id}`}>{stage.title}</h3>
                    <p>{stage.body}</p>
                  </div>
                </header>

                {stage.id === "adjust" ? (
                  <ul className={styles.learningAdjustLevers}>
                    {ADJUST_LEVERS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                {cards.length > 0 ? (
                  <div className={styles.learningStageCards}>
                    {cards.map((observation, index) => (
                      <SignalSceneCard
                        key={observation.id}
                        observation={observation}
                        rankLabel={
                          stage.id === "now" && index === 0 ? "Main · higher views" : undefined
                        }
                      />
                    ))}
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>

        <div className={styles.learningNextCore} id="next-core">
          <span className={styles.sectionLabel}>Next core</span>
          <h3>훅은 얼추, 다음은 훅에서 이어지는 영상</h3>
          <p>{learning.arcSummary.next}</p>
          <p>
            V2(훅)에서 초반 시청 신호는 보이지만, V3(메시지 continuity)—훅 이후 핵심 장면이 같은 메시지를 증명하며
            이어지게 만드는 일—이 다음 설계 과제다. 초반 신호만으로 훅 성공을 단정하지 않는다.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.learningAnchor}`} id="decision-loop">
        <div className={styles.learningDecisionBand}>
          <div>
            <span className={styles.sectionLabel}>Measurement & Decision</span>
            <p>{learning.measurementNote}</p>
          </div>
          <ol className={styles.learningDecisionStrip}>
            {learning.decisionLoop.map((step, index) => (
              <li key={step.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step.title}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.learningAnchor}`} id="evidence">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Evidence</span>
          <h2>근거 · 아카이브</h2>
          <p>Studio 국가 표와 공개 Top 10. 좌 TikTok · 우 YouTube.</p>
        </div>

        <div className={styles.learningEvidenceStack}>
          <details className={styles.learningDetails} id="viewer-analytics" open>
            <summary>
              YouTube Studio · 국가 · 평균 시청
              <span>{studio ? `${studio.range.start} → ${studio.range.end}` : "—"}</span>
            </summary>
            {studio ? (
              <div className={styles.learningStudioBoard}>
                <article className={styles.learningAggregateCard}>
                  <span>Channel window</span>
                  <strong>
                    {formatMetricCount(studio.totals.views)} views · avg view{" "}
                    {formatMetricPct(studio.totals.averageViewPercentage)}
                  </strong>
                  <dl>
                    <div>
                      <dt>Avg watch</dt>
                      <dd>{studio.totals.averageViewDuration}s</dd>
                    </div>
                    <div>
                      <dt>Shares</dt>
                      <dd>{formatMetricCount(studio.totals.shares)}</dd>
                    </div>
                    <div>
                      <dt>Watch min</dt>
                      <dd>{formatMetricCount(studio.totals.estimatedMinutesWatched)}</dd>
                    </div>
                    <div>
                      <dt>Top country</dt>
                      <dd>
                        {studio.topCountries[0]
                          ? `${studio.topCountries[0].country} ${formatMetricPct(studio.topCountries[0].sharePct)}`
                          : "—"}
                      </dd>
                    </div>
                  </dl>
                  <p className={styles.learningAdminFillNote}>{studio.note}</p>
                </article>
                <div className={styles.learningCountryTableWrap}>
                  <div className={styles.performanceTableShell}>
                    <table className={styles.performanceTable}>
                      <thead>
                        <tr>
                          <th>Country</th>
                          <th>Views</th>
                          <th>Share</th>
                          <th>Avg watch</th>
                          <th>Avg view %</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studio.topCountries.map((row) => (
                          <tr key={row.country}>
                            <td>
                              <strong>{row.country}</strong>
                            </td>
                            <td>{formatMetricCount(row.views)}</td>
                            <td>{formatMetricPct(row.sharePct)}</td>
                            <td>{row.avgWatchSec != null ? `${row.avgWatchSec}s` : "—"}</td>
                            <td>{formatMetricPct(row.avgViewPercentage)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : null}
            <p className={styles.learningAdminFillNote}>
              TikTok 국가·완주 · 연령/성별: not exposed. {publicMetricsPack.adminAnalyticsBoundary.howToFillLater}
            </p>
          </details>

          <details className={styles.learningDetails} id="archive-top10" open>
            <summary>
              아카이브 Top {ARCHIVE_TOP}
              <span>좌 TikTok · 우 YouTube · {publicMetricsPack.measuredAtLabel}</span>
            </summary>
            <div className={styles.learningArchiveColumns}>
              <ArchiveColumn platform="TikTok" handle={publicMetricsPack.tiktok.handle} posts={archiveTikTok} />
              <ArchiveColumn platform="YouTube" handle={publicMetricsPack.youtube.handle} posts={archiveYouTube} />
            </div>
          </details>
        </div>
      </section>

      <section className={styles.performanceClosingBand}>
        <TrendingUp size={20} />
        <div>
          <strong>Recommended wording</strong>
          <p>
            “공개 채널 수치는 제품 전환이 아니라 콘텐츠 훅, 메시지 구조, 시각 자산, 게시 흐름에 대한 반응 신호로
            해석했고, 최종 메시지·컷 판단은 사람이 했습니다.”
          </p>
        </div>
      </section>
    </Shell>
  );
}

function SignalSceneCard({
  observation,
  rankLabel,
}: {
  observation: SignalObservation;
  rankLabel?: string;
}) {
  const embed = embedForObservation(observation);
  const headlines = headlineMetrics(observation);

  return (
    <article className={styles.learningSceneCard} id={observation.id} data-platform={observation.platform}>
      {/* Expanded single card: media | headline metrics | detail panel */}
      <div className={styles.learningSceneCardBody}>
        <div className={styles.learningSceneCardMedia} data-platform={embed.platform}>
          <div className={styles.learningSceneCardMediaInner}>
            <iframe
              src={embed.src}
              title={`${embed.platform} embed: ${embed.title}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={embed.platform === "YouTube"}
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        <div className={styles.learningSceneCardCopy}>
          <div className={styles.learningSceneCardMeta}>
            <span className={styles.learningPlatformPill}>{observation.platform}</span>
            {rankLabel ? <span className={styles.learningRankLabel}>{rankLabel}</span> : null}
            <span>{observation.duration}</span>
          </div>
          <h3>{observation.postTitle}</h3>
          <span className={styles.learningSceneCardDate}>{observation.publishedAt}</span>
          <a href={observation.postUrl} target="_blank" rel="noreferrer">
            원문 열기 <ExternalLink size={13} />
          </a>

          <dl className={styles.learningSceneHeadlineMetrics} aria-label="Headline metrics">
            {headlines.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>

          <p className={styles.learningSceneOneLiner}>{observation.observedSignal}</p>
        </div>

        <aside className={styles.learningSceneCardAside} aria-label="상세 지표 및 가설">
          <span className={styles.learningSceneAsideLabel}>상세 지표 · 가설</span>
          <dl className={styles.learningMetricRow}>
            {observation.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.learningSourceLine}>지표 출처 · {observation.metricSource}</p>
          <div className={styles.learningSceneRail}>
            <div className={styles.learningSceneStep}>
              <Eye size={16} />
              <span>관찰한 신호</span>
              <p>{observation.observedSignal}</p>
            </div>
            <div className={styles.learningSceneArrow} aria-hidden="true">
              <ArrowRight size={14} />
            </div>
            <div className={styles.learningSceneStep}>
              <Target size={16} />
              <span>작업 가설</span>
              <p>{observation.workingHypothesis}</p>
            </div>
            <div className={styles.learningSceneArrow} aria-hidden="true">
              <ArrowRight size={14} />
            </div>
            <div className={styles.learningSceneStep}>
              <span>바꾼 요소</span>
              <ul>
                {observation.changedElements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className={styles.learningNextCheck}>
            <strong>다음 검증</strong> {observation.nextCheck}
          </p>
          {observation.cutFlow ? <CutFlowCompareBlock cutFlow={observation.cutFlow} /> : null}
        </aside>
      </div>
    </article>
  );
}

function ArchiveColumn({
  platform,
  handle,
  posts,
}: {
  platform: "TikTok" | "YouTube";
  handle: string;
  posts: readonly PublicPostMetrics[];
}) {
  return (
    <div className={styles.learningArchiveColumn}>
      <header>
        <PlatformIcon platform={platform} />
        <div>
          <strong>{platform}</strong>
          <span>
            {handle} · Top {posts.length}
          </span>
        </div>
      </header>
      <ol className={styles.learningArchiveList}>
        {posts.map((post, index) => (
          <li key={post.id}>
            <span className={styles.learningArchiveRank}>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <a href={post.url} target="_blank" rel="noreferrer">
                {post.title}
              </a>
              <p>
                {post.publishedAt} · {post.duration}
                {post.avgWatchSec != null ? ` · avg ${post.avgWatchSec}s` : ""}
              </p>
              <dl>
                <div>
                  <dt>Views</dt>
                  <dd>{formatMetricCount(post.views)}</dd>
                </div>
                <div>
                  <dt>Likes</dt>
                  <dd>{formatMetricCount(post.likes)}</dd>
                </div>
                {platform === "TikTok" ? (
                  <>
                    <div>
                      <dt>Saves</dt>
                      <dd>{formatMetricCount(post.saves)}</dd>
                    </div>
                    <div>
                      <dt>Shares</dt>
                      <dd>{formatMetricCount(post.shares)}</dd>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <dt>Avg view %</dt>
                      <dd>
                        {post.avgViewDurationPct == null ? (
                          <span className={styles.learningNotExposed}>—</span>
                        ) : (
                          formatMetricPct(post.avgViewDurationPct)
                        )}
                      </dd>
                    </div>
                    <div>
                      <dt>Country</dt>
                      <dd>
                        {post.topCountries?.[0]
                          ? `${post.topCountries[0].country} ${post.topCountries[0].sharePct}%`
                          : "—"}
                      </dd>
                    </div>
                  </>
                )}
              </dl>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CutFlowCompareBlock({ cutFlow }: { cutFlow: CutFlowCompare }) {
  if (!cutFlow.hasAnyMedia) {
    return (
      <div className={styles.learningCutFlowPending}>
        <span className={styles.copyLabel}>Cut flow frames</span>
        <p>
          캡처를 <code>public/content-learning/loom/cut-flow/</code>에 넣으면 훅 → 메시지 증명 → 회수 장면이
          표시됩니다.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.learningCutFlowCompare}>
      {(["before", "after"] as const).map((side) => {
        const stages = side === "before" ? cutFlow.before : cutFlow.after;
        const title = side === "before" ? cutFlow.beforeLabel : cutFlow.afterLabel;
        return (
          <div className={styles.learningFilmStrip} key={side}>
            <span className={styles.copyLabel}>{title}</span>
            <div className={styles.learningFilmFrames}>
              {stages.map((stage) => (
                <figure key={stage.id}>
                  {stage.media ? (
                    <img src={stage.media.src} alt={stage.media.alt} loading="lazy" />
                  ) : (
                    <div className={styles.learningFilmPlaceholder} aria-hidden="true" />
                  )}
                  <figcaption>
                    <strong>{stage.label}</strong>
                    <span>{stage.description}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
