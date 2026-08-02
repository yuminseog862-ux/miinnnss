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
    // player/v1 is tighter than embed/v2 (less white card chrome); CSS crops residual UI
    const params = new URLSearchParams({
      music_info: "0",
      description: "0",
      rel: "0",
      native_context_menu: "0",
      closed_caption: "0",
    });
    return {
      platform: "TikTok",
      href: observation.postUrl,
      src: `https://www.tiktok.com/player/v1/${id}?${params.toString()}`,
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

export function ChannelPerformancePage() {
  const learning = contentLearningCase;
  const studio = publicMetricsPack.adminAnalyticsBoundary.youtubeStudio;
  const tiktokStudio = publicMetricsPack.adminAnalyticsBoundary.tiktokStudio;
  const sourceArchive = publicMetricsPack.sourceArchive;
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
          <p className={`${styles.learningHeroBody} ${styles.learningLineBreakText}`}>{learning.heroBody}</p>

          {/* Core routing: 처음에 → 바꾼 것 → 다음 과제, co-labeled with message V1–V3 */}
          <div className={styles.learningRouteFlow} id="message-learning" aria-label="Learning route">
            <div className={styles.learningRouteFlowHead}>
              <div>
                <span className={styles.sectionLabel}>Core route</span>
                <h2 className={styles.learningRouteFlowTitle}>처음에 → 바꾼 것 → 다음 과제</h2>
              </div>
              <p>메시지 학습 축 V1 · V2 · V3 병기</p>
            </div>
            <ol className={styles.learningRouteTrack}>
              <li className={styles.learningRouteStep} data-step="before">
                <div className={styles.learningRouteMeta}>
                  <div className={styles.learningRouteMetaTop}>
                    <span className={styles.learningRouteVersion}>V1</span>
                    <span className={styles.learningRouteIndex}>01 · 처음에</span>
                  </div>
                  <strong>{learning.messageStages[0].code}</strong>
                  <em>{learning.messageStages[0].title}</em>
                </div>
                <ul className={styles.learningRouteBodyList}>
                  {splitNounLines(learning.arcSummary.before).map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <small>{learning.messageStages[0].question}</small>
              </li>
              <li className={styles.learningRouteArrow} aria-hidden="true">
                <span className={styles.learningRouteArrowLine} />
                <ArrowRight size={18} />
              </li>
              <li className={styles.learningRouteStep} data-step="changed">
                <div className={styles.learningRouteMeta}>
                  <div className={styles.learningRouteMetaTop}>
                    <span className={styles.learningRouteVersion}>V2</span>
                    <span className={styles.learningRouteIndex}>02 · 바꾼 것</span>
                  </div>
                  <strong>{learning.messageStages[1].code}</strong>
                  <em>{learning.messageStages[1].title}</em>
                </div>
                <ul className={styles.learningRouteBodyList}>
                  {splitNounLines(learning.arcSummary.changed).map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <div className={styles.learningRouteNowNote}>
                  <span>지금은</span>
                  <ul className={styles.learningRouteBodyList}>
                    {splitNounLines(learning.arcSummary.now).map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
                <small>{learning.messageStages[1].question}</small>
              </li>
              <li className={styles.learningRouteArrow} aria-hidden="true">
                <span className={styles.learningRouteArrowLine} />
                <ArrowRight size={18} />
              </li>
              <li className={styles.learningRouteStep} data-step="next">
                <div className={styles.learningRouteMeta}>
                  <div className={styles.learningRouteMetaTop}>
                    <span className={styles.learningRouteVersion}>V3</span>
                    <span className={styles.learningRouteIndex}>03 · 다음 과제</span>
                  </div>
                  <strong>{learning.messageStages[2].code}</strong>
                  <em>{learning.messageStages[2].title}</em>
                </div>
                <ul className={styles.learningRouteBodyList}>
                  {splitNounLines(learning.arcSummary.next).map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
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
            세로 카드 스택 · 한 장 단위 영상·상세 지표·가설의 동일 바탕 배치 · 플랫폼 비합산
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
                  <div className={styles.learningStageTitleBlock}>
                    <h3 id={`stage-title-${stage.id}`}>{stage.title}</h3>
                    <p className={styles.learningStageSubline}>
                      <span className={styles.learningStageSubtitle}>{stage.subtitle}</span>
                      <span className={styles.learningStageSubSep} aria-hidden="true">
                        {" "}
                        —{" "}
                      </span>
                      <span className={styles.learningStageDescription}>{stage.description}</span>
                    </p>
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
          <h3>훅 정착 이후 · 훅–메시지 연속 영상</h3>
          <ul className={styles.learningSceneStepList}>
            {splitNounLines(learning.arcSummary.next).map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <ul className={styles.learningSceneStepList}>
            {[
              "V2(Hook) 초반 시청 신호의 가시화",
              "V3(Message continuity) 훅 이후 핵심 장면의 동일 메시지 증명·연속 시청 설계",
              "초반 신호만의 훅 성공 단정 배제",
            ].map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.learningAnchor}`} id="decision-loop">
        <div className={styles.learningDecisionBand}>
          <div>
            <span className={styles.sectionLabel}>Measurement & Decision</span>
            <p className={styles.learningLineBreakText}>{learning.measurementNote}</p>
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
          <p>
            YouTube · TikTok 동일 양식(요약 카드 + 표 가로 슬라이드). 원본 CSV:{" "}
            <a href={sourceArchive.root}>/content-learning/loom/metrics/</a>
          </p>
        </div>

        <div className={styles.learningEvidenceStack}>
          <details className={styles.learningDetails} id="viewer-analytics" open>
            <summary>
              YouTube Analytics · 국가 · 게시물
              <span>{studio ? `${studio.range.start} → ${studio.range.end}` : "—"}</span>
            </summary>
            {studio ? (
              <div className={styles.learningStudioBoard}>
                <article className={styles.learningAggregateCard}>
                  <span>YouTube channel window</span>
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
                  <p className={styles.learningAdminFillNote}>
                    CSV ·{" "}
                    {studio.sourceFiles.map((href, index) => (
                      <span key={href}>
                        {index > 0 ? " · " : null}
                        <a href={href}>{href.split("/").pop()}</a>
                      </span>
                    ))}
                  </p>
                </article>

                <div className={styles.learningTableRail} aria-label="YouTube tables horizontal scroll">
                  <div className={styles.learningTableSlide}>
                    <header>
                      <span>01</span>
                      <strong>Country</strong>
                      <em>Analytics country dimension</em>
                    </header>
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

                  <div className={styles.learningTableSlide}>
                    <header>
                      <span>02</span>
                      <strong>Posts</strong>
                      <em>Top by views · Analytics window</em>
                    </header>
                    <div className={styles.performanceTableShell}>
                      <table className={styles.performanceTable}>
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Published</th>
                            <th>Views</th>
                            <th>Avg watch</th>
                            <th>Avg view %</th>
                            <th>Top country</th>
                          </tr>
                        </thead>
                        <tbody>
                          {publicMetricsPack.youtube.posts.slice(0, 10).map((row) => (
                            <tr key={row.id}>
                              <td>
                                <strong>{row.title}</strong>
                              </td>
                              <td>{row.publishedAt}</td>
                              <td>{formatMetricCount(row.views)}</td>
                              <td>{row.avgWatchSec != null ? `${row.avgWatchSec}s` : "—"}</td>
                              <td>{formatMetricPct(row.avgViewDurationPct)}</td>
                              <td>
                                {row.topCountries?.[0]
                                  ? `${row.topCountries[0].country} ${formatMetricPct(row.topCountries[0].sharePct)}`
                                  : "—"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </details>

          <details className={styles.learningDetails} id="tiktok-creator-export" open>
            <summary>
              TikTok Creator · Overview · Viewers · Content
              <span>
                {tiktokStudio.overview.range.start} → {tiktokStudio.viewers.range.end}
              </span>
            </summary>
            <div className={styles.learningStudioBoard}>
              <article className={styles.learningAggregateCard}>
                <span>TikTok channel window</span>
                <strong>
                  {formatMetricCount(tiktokStudio.overview.totals.videoViews)} video views ·{" "}
                  {formatMetricCount(tiktokStudio.overview.totals.likes)} likes
                </strong>
                <dl>
                  <div>
                    <dt>Profile views</dt>
                    <dd>{formatMetricCount(tiktokStudio.overview.totals.profileViews)}</dd>
                  </div>
                  <div>
                    <dt>Peak day</dt>
                    <dd>
                      {tiktokStudio.overview.peakDays[0]?.date} ·{" "}
                      {formatMetricCount(tiktokStudio.overview.peakDays[0]?.videoViews)}
                    </dd>
                  </div>
                  <div>
                    <dt>Viewers window</dt>
                    <dd>
                      {tiktokStudio.viewers.range.start} → {tiktokStudio.viewers.range.end}
                    </dd>
                  </div>
                  <div>
                    <dt>New / Returning</dt>
                    <dd>
                      {formatMetricCount(tiktokStudio.viewers.totals.newViewersSum)} /{" "}
                      {formatMetricCount(tiktokStudio.viewers.totals.returningViewersSum)}
                    </dd>
                  </div>
                </dl>
                <p className={styles.learningAdminFillNote}>
                  {tiktokStudio.handlesNote}
                  {"\n"}
                  {tiktokStudio.note}
                </p>
                <p className={styles.learningAdminFillNote}>
                  CSV ·{" "}
                  {tiktokStudio.sourceFiles.map((href, index) => (
                    <span key={href}>
                      {index > 0 ? " · " : null}
                      <a href={href}>{href.split("/").pop()}</a>
                    </span>
                  ))}
                </p>
              </article>

              <div className={styles.learningTableRail} aria-label="TikTok tables horizontal scroll">
                <div className={styles.learningTableSlide}>
                  <header>
                    <span>01</span>
                    <strong>Country / dimension</strong>
                    <em>YouTube 동일 슬롯 · export 미포함 시 not exposed</em>
                  </header>
                  <div className={styles.performanceTableShell}>
                    <table className={styles.performanceTable}>
                      <thead>
                        <tr>
                          <th>Dimension</th>
                          <th>Status</th>
                          <th>Note</th>
                          <th>Views</th>
                          <th>Share</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tiktokStudio.dimensionSlots.map((row) => (
                          <tr key={row.dimension}>
                            <td>
                              <strong>{row.dimension}</strong>
                            </td>
                            <td>{row.status}</td>
                            <td>{row.note}</td>
                            <td>—</td>
                            <td>—</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={styles.learningTableSlide}>
                  <header>
                    <span>02</span>
                    <strong>Overview days</strong>
                    <em>일별 채널 뷰 · Creator Overview</em>
                  </header>
                  <div className={styles.performanceTableShell}>
                    <table className={styles.performanceTable}>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Video views</th>
                          <th>Profile</th>
                          <th>Likes</th>
                          <th>Comments</th>
                          <th>Shares</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tiktokStudio.overview.peakDays.map((row) => (
                          <tr key={row.date}>
                            <td>
                              <strong>{row.date}</strong>
                            </td>
                            <td>{formatMetricCount(row.videoViews)}</td>
                            <td>{formatMetricCount(row.profileViews)}</td>
                            <td>{formatMetricCount(row.likes)}</td>
                            <td>{formatMetricCount(row.comments)}</td>
                            <td>{formatMetricCount(row.shares)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={styles.learningTableSlide}>
                  <header>
                    <span>03</span>
                    <strong>Viewers</strong>
                    <em>New / Returning · long window</em>
                  </header>
                  <div className={styles.performanceTableShell}>
                    <table className={styles.performanceTable}>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Total</th>
                          <th>New</th>
                          <th>Returning</th>
                          <th>New share</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tiktokStudio.viewers.peakDays.map((row) => (
                          <tr key={row.date}>
                            <td>
                              <strong>{row.date}</strong>
                            </td>
                            <td>{formatMetricCount(row.totalViewers)}</td>
                            <td>{formatMetricCount(row.newViewers)}</td>
                            <td>{formatMetricCount(row.returningViewers)}</td>
                            <td>
                              {row.newSharePct != null ? formatMetricPct(row.newSharePct) : "—"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={styles.learningTableSlide}>
                  <header>
                    <span>04</span>
                    <strong>Content</strong>
                    <em>게시물 단위 · Creator Content export</em>
                  </header>
                  <div className={styles.performanceTableShell}>
                    <table className={styles.performanceTable}>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Published</th>
                          <th>Views</th>
                          <th>Likes</th>
                          <th>Comments</th>
                          <th>Shares</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tiktokStudio.topContent.map((row) => (
                          <tr key={row.id}>
                            <td>
                              <strong>{row.title}</strong>
                            </td>
                            <td>{row.publishedAt}</td>
                            <td>{formatMetricCount(row.views)}</td>
                            <td>{formatMetricCount(row.likes)}</td>
                            <td>{formatMetricCount(row.comments)}</td>
                            <td>{formatMetricCount(row.shares)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <ul className={styles.learningSignalNotes}>
              {tiktokStudio.signalNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </details>

          <details className={styles.learningDetails} id="source-csv-archive" open>
            <summary>
              원본 CSV · JSON 첨부
              <span>{sourceArchive.root}</span>
            </summary>
            <div className={styles.learningSourceArchive}>
              <p>
                365일/장기 Viewers zip, Overview, Content 원본 zip과 YouTube API 스냅샷 CSV를 모두{" "}
                <a href={sourceArchive.manifest}>MANIFEST.json</a> 기준으로 보관했습니다. OAuth 토큰·client secret은
                포함하지 않습니다.
              </p>
              <div className={styles.learningSourceArchiveCols}>
                <div>
                  <strong>TikTok</strong>
                  <ul>
                    {sourceArchive.tiktok.map((href) => (
                      <li key={href}>
                        <a href={href}>{href.replace(sourceArchive.root, "")}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>YouTube</strong>
                  <ul>
                    {sourceArchive.youtube.map((href) => (
                      <li key={href}>
                        <a href={href}>{href.replace(sourceArchive.root, "")}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
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
            “공개 채널 수치의 제품 전환 비주장 · 콘텐츠 훅·메시지 구조·시각 문법·게시 흐름에 대한 반응 신호 해석 · 메시지·컷의 최종 인간 판단.”
          </p>
        </div>
      </section>
    </Shell>
  );
}

function splitNounLines(text: string) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function SignalSceneCard({
  observation,
  rankLabel,
}: {
  observation: SignalObservation;
  rankLabel?: string;
}) {
  const embed = embedForObservation(observation);
  const signalLines = splitNounLines(observation.observedSignal);
  const hypothesisLines = splitNounLines(observation.workingHypothesis);
  const nextCheckLines = splitNounLines(observation.nextCheck);

  return (
    <article className={styles.learningSceneCard} id={observation.id} data-platform={observation.platform}>
      {/* One surface: media + content (metrics strip fills the right void) */}
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

        <div className={styles.learningSceneCardMain}>
          <header className={styles.learningSceneCardHead}>
            <div className={styles.learningSceneCardMeta}>
              <span className={styles.learningPlatformPill}>{observation.platform}</span>
              {rankLabel ? <span className={styles.learningRankLabel}>{rankLabel}</span> : null}
              <span>{observation.duration}</span>
            </div>
            <h3>{observation.postTitle}</h3>
            <div className={styles.learningSceneCardHeadRow}>
              <span className={styles.learningSceneCardDate}>{observation.publishedAt}</span>
              <a href={observation.postUrl} target="_blank" rel="noreferrer">
                원문 열기 <ExternalLink size={13} />
              </a>
            </div>
          </header>

          <section className={styles.learningMetricStripBlock} aria-label="상세 지표">
            <div className={styles.learningMetricStripHead}>
              <span className={styles.learningSceneAsideLabel}>상세 지표</span>
              <span className={styles.learningSourceLine}>지표 출처 · {observation.metricSource}</span>
            </div>
            <dl className={styles.learningMetricStrip}>
              {observation.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.learningSceneHypothesis} aria-label="가설">
            <span className={styles.learningSceneAsideLabel}>신호 · 가설 · 변경</span>
            <div className={styles.learningSceneRail}>
              <div className={styles.learningSceneStep}>
                <Eye size={16} />
                <span>관찰 신호</span>
                <ul className={styles.learningSceneStepList}>
                  {signalLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.learningSceneArrow} aria-hidden="true">
                <ArrowRight size={14} />
              </div>
              <div className={styles.learningSceneStep}>
                <Target size={16} />
                <span>작업 가설</span>
                <ul className={styles.learningSceneStepList}>
                  {hypothesisLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.learningSceneArrow} aria-hidden="true">
                <ArrowRight size={14} />
              </div>
              <div className={styles.learningSceneStep}>
                <span>변경 요소</span>
                <ul className={styles.learningSceneStepList}>
                  {observation.changedElements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.learningNextCheck}>
              <strong>다음 검증</strong>
              <ul className={styles.learningSceneStepList}>
                {nextCheckLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            {observation.cutFlow ? <CutFlowCompareBlock cutFlow={observation.cutFlow} /> : null}
          </section>
        </div>
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
