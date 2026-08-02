/**
 * Public + admin channel metrics for Content Learning Loop.
 * - TikTok: yt-dlp public metadata (2026-08-02)
 * - YouTube: Analytics API v2 OAuth (2026-08-02) + public metadata fallback
 *
 * averageViewPercentage is YouTube Studio "Average percentage viewed".
 * Shorts can exceed 100% when replays are counted — not a binary completion rate.
 */

export type MetricAvailability = 'public' | 'derived' | 'admin' | 'admin-only-missing';

export type AdminAnalyticsSlot = {
  key: string;
  label: string;
  reason: string;
  status: "not-exposed" | "filled";
};

export type CountryShare = { country: string; sharePct: number };

export type PublicPostMetrics = {
  id: string;
  platform: "TikTok" | "YouTube";
  title: string;
  url: string;
  publishedAt: string;
  measuredAt: string;
  duration: string;
  durationSec: number | null;
  mediaType?: "short" | "video";
  views: number;
  likes: number | null;
  comments: number | null;
  shares: number | null;
  saves: number | null;
  likeRatePct: number | null;
  saveRatePct: number | null;
  shareRatePct: number | null;
  engagementRatePct: number | null;
  /** YouTube Studio averageViewPercentage when available (can exceed 100% on Shorts). */
  completionRatePct: number | null;
  avgWatchSec: number | null;
  avgViewDurationPct: number | null;
  topCountries: CountryShare[] | null;
  audienceGender: { label: string; sharePct: number }[] | null;
  audienceAge: { label: string; sharePct: number }[] | null;
};

export type PlatformAggregate = {
  label: string;
  postCount: number;
  views: number;
  likes: number;
  comments?: number;
  shares?: number;
  saves?: number;
  likeRatePct?: number | null;
  engagementRatePct?: number | null;
  commentsExposed?: boolean;
  avgWatchSec?: number | null;
  avgViewPercentage?: number | null;
  subscribersGained?: number | null;
  estimatedMinutesWatched?: number | null;
};

export type ChannelCountryRow = {
  country: string;
  views: number;
  sharePct: number;
  avgWatchSec: number | null;
  avgViewPercentage: number | null;
};

export const publicMetricsPack = {
  measuredAt: "2026-08-02",
  measuredAtLabel: "2026-08-02 · YouTube Analytics OAuth + TikTok public meta",
  window: {"label": "Studio/공개 관찰 창 (2026-06-07 ~ 2026-08-02)", "from": "2026-06-07", "to": "2026-08-02", "note": "YouTube Analytics OAuth 창. TikTok은 공개 메타 재측정."},
  source: {"tiktok": "yt-dlp tiktokuser channel extract + per-video public metadata", "youtube": "YouTube Analytics API v2 (OAuth owner) + yt-dlp public metadata fallback"},
  adminAnalyticsBoundary: {
    availableViaPublicApi: ["views", "likes", "comments", "shares", "saves (TikTok public)", "duration", "publish date", "like/engagement rates (derived)", "YouTube Analytics: averageViewDuration, averageViewPercentage, country", "YouTube channel followers snapshot"],
    notExposedViaPublicApi: [
      { key: "tiktokCountries", label: "TikTok 시청 국가 / 지역", reason: "TikTok Creator Analytics 로그인·export 필요. 공개 API·OAuth 경로 미연결.", status: "not-exposed" as const },
      { key: "tiktokCompletion", label: "TikTok 완주율 / 평균 시청", reason: "TikTok admin analytics 전용. 아직 export 없음.", status: "not-exposed" as const },
      { key: "audienceGender", label: "시청자 성별 (양 플랫폼)", reason: "YouTube Analytics 연령/성별 리포트는 별도 dimension·임계치 조건. 이번 호출 범위 미포함.", status: "not-exposed" as const },
      { key: "audienceAge", label: "시청자 연령대 (양 플랫폼)", reason: "관리자 audience 리포트 별도 조회 필요. 이번 범위 미포함.", status: "not-exposed" as const },
      { key: "trafficSource", label: "유입 경로", reason: "Studio insight 전용. 이번 범위 미포함.", status: "not-exposed" as const },
    ] satisfies AdminAnalyticsSlot[],
    howToFillLater: "TikTok Creator Analytics export를 public/content-learning/loom/metrics/ 에 넣으면 TikTok 국가·완주 슬롯을 채운다. YouTube 성별/연령은 Analytics ageGroup/gender dimension 추가 조회 시 반영.",
    youtubeStudio: {
      channelId: "UCH_8Zw7ggdGO8bSor4_B-ig",
      range: {"start": "2026-06-07", "end": "2026-08-02"},
      totals: {"views": 5907, "likes": 49, "comments": 0, "shares": 10, "estimatedMinutesWatched": 624, "averageViewDuration": 20, "averageViewPercentage": 67.25, "subscribersGained": 10},
      topCountries: [{"country": "KR", "views": 1318, "sharePct": 40.9, "avgWatchSec": 11, "avgViewPercentage": 56.14}, {"country": "UZ", "views": 423, "sharePct": 13.1, "avgWatchSec": 8, "avgViewPercentage": 91.15}, {"country": "JP", "views": 290, "sharePct": 9.0, "avgWatchSec": 7, "avgViewPercentage": 78.77}, {"country": "ID", "views": 218, "sharePct": 6.8, "avgWatchSec": 10, "avgViewPercentage": 107.48}, {"country": "IQ", "views": 142, "sharePct": 4.4, "avgWatchSec": 10, "avgViewPercentage": 149.27}, {"country": "SY", "views": 118, "sharePct": 3.7, "avgWatchSec": 6, "avgViewPercentage": 110.86}, {"country": "DZ", "views": 115, "sharePct": 3.6, "avgWatchSec": 8, "avgViewPercentage": 161.37}, {"country": "MM", "views": 110, "sharePct": 3.4, "avgWatchSec": 7, "avgViewPercentage": 67.29}, {"country": "KG", "views": 85, "sharePct": 2.6, "avgWatchSec": 8, "avgViewPercentage": 69.08}, {"country": "VN", "views": 80, "sharePct": 2.5, "avgWatchSec": 6, "avgViewPercentage": 63.53}] satisfies ChannelCountryRow[],
      note: "averageViewPercentage can exceed 100% on Shorts (replays). Not a single-pass completion claim.",
    },
  },
  tiktok: {
    handle: "@loom_mm",
    url: "https://www.tiktok.com/@loom_mm",
    aggregates: [
      {"label": "최근 ~30일 (2026-07-03~)", "postCount": 4, "views": 1510, "likes": 25, "comments": 0, "shares": 0, "saves": 1, "likeRatePct": 1.66, "engagementRatePct": 1.72},
      {"label": "확장 창 (2026-06-23~, 수집 상위 포함)", "postCount": 14, "views": 5963, "likes": 136, "comments": 0, "shares": 5, "saves": 10, "likeRatePct": 2.28, "engagementRatePct": 2.53},
    ] satisfies PlatformAggregate[],
    posts: [
      {"id": "7654903404963122452", "platform": "TikTok", "title": "ink-yeul #grokai #aiidol #kpop #virtualidol #ink", "url": "https://www.tiktok.com/@loom_mm/video/7654903404963122452", "publishedAt": "2026-06-24", "measuredAt": "2026-08-02", "duration": "6s", "durationSec": 6, "views": 942, "likes": 18, "comments": 0, "shares": 0, "saves": 2, "likeRatePct": 1.91, "saveRatePct": 0.21, "shareRatePct": 0.0, "engagementRatePct": 2.12, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7668260819439848725", "platform": "TikTok", "title": "Loom · Bouquet CF Different gazes meet — and a new sense completes. M...", "url": "https://www.tiktok.com/@loom_mm/video/7668260819439848725", "publishedAt": "2026-07-30", "measuredAt": "2026-08-02", "duration": "19s", "durationSec": 19, "views": 906, "likes": 19, "comments": 0, "shares": 0, "saves": 1, "likeRatePct": 2.1, "saveRatePct": 0.11, "shareRatePct": 0.0, "engagementRatePct": 2.21, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7654624880796699924", "platform": "TikTok", "title": "#kpop #aiidol #ai #virtualidol #loom", "url": "https://www.tiktok.com/@loom_mm/video/7654624880796699924", "publishedAt": "2026-06-23", "measuredAt": "2026-08-02", "duration": "46s", "durationSec": 46, "views": 896, "likes": 45, "comments": 0, "shares": 0, "saves": 0, "likeRatePct": 5.02, "saveRatePct": 0.0, "shareRatePct": 0.0, "engagementRatePct": 5.02, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7654618213472505109", "platform": "TikTok", "title": "#loom #kpop #virtualidol #ai #aiidol", "url": "https://www.tiktok.com/@loom_mm/video/7654618213472505109", "publishedAt": "2026-06-23", "measuredAt": "2026-08-02", "duration": "35s", "durationSec": 35, "views": 851, "likes": 16, "comments": 0, "shares": 5, "saves": 5, "likeRatePct": 1.88, "saveRatePct": 0.59, "shareRatePct": 0.59, "engagementRatePct": 3.06, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7654903232178834709", "platform": "TikTok", "title": "ink-solo--rena#grokai #aiidol #kpop #virtualidol #ink", "url": "https://www.tiktok.com/@loom_mm/video/7654903232178834709", "publishedAt": "2026-06-24", "measuredAt": "2026-08-02", "duration": "6s", "durationSec": 6, "views": 850, "likes": 13, "comments": 0, "shares": 0, "saves": 0, "likeRatePct": 1.53, "saveRatePct": 0.0, "shareRatePct": 0.0, "engagementRatePct": 1.53, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7654903498840198420", "platform": "TikTok", "title": "ink-solo#grokai #aiidol #kpop #virtualidol #ink", "url": "https://www.tiktok.com/@loom_mm/video/7654903498840198420", "publishedAt": "2026-06-24", "measuredAt": "2026-08-02", "duration": "6s", "durationSec": 6, "views": 629, "likes": 13, "comments": 0, "shares": 0, "saves": 1, "likeRatePct": 2.07, "saveRatePct": 0.16, "shareRatePct": 0.0, "engagementRatePct": 2.23, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7668688515911208212", "platform": "TikTok", "title": "One quiet click — closed weave, open proof. Loom. #AI #AIIdol #Kpop #...", "url": "https://www.tiktok.com/@loom_mm/video/7668688515911208212", "publishedAt": "2026-07-31", "measuredAt": "2026-08-02", "duration": "12s", "durationSec": 12, "views": 397, "likes": 5, "comments": 0, "shares": 0, "saves": 0, "likeRatePct": 1.26, "saveRatePct": 0.0, "shareRatePct": 0.0, "engagementRatePct": 1.26, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7654778425483431188", "platform": "TikTok", "title": "Ink #kpop #aiidol #ai #virtualidol #loom", "url": "https://www.tiktok.com/@loom_mm/video/7654778425483431188", "publishedAt": "2026-06-24", "measuredAt": "2026-08-02", "duration": "50s", "durationSec": 50, "views": 230, "likes": 6, "comments": 0, "shares": 0, "saves": 1, "likeRatePct": 2.61, "saveRatePct": 0.43, "shareRatePct": 0.0, "engagementRatePct": 3.04, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7668675022940015892", "platform": "TikTok", "title": "#loom", "url": "https://www.tiktok.com/@loom_mm/video/7668675022940015892", "publishedAt": "2026-07-31", "measuredAt": "2026-08-02", "duration": "6s", "durationSec": 6, "views": 204, "likes": 0, "comments": 0, "shares": 0, "saves": 0, "likeRatePct": 0.0, "saveRatePct": 0.0, "shareRatePct": 0.0, "engagementRatePct": 0.0, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7654903853669715221", "platform": "TikTok", "title": "ink-solo-saeyan#grokai #kpop #aiidol #ink #virtualidol", "url": "https://www.tiktok.com/@loom_mm/video/7654903853669715221", "publishedAt": "2026-06-24", "measuredAt": "2026-08-02", "duration": "12s", "durationSec": 12, "views": 19, "likes": 0, "comments": 0, "shares": 0, "saves": 0, "likeRatePct": 0.0, "saveRatePct": 0.0, "shareRatePct": 0.0, "engagementRatePct": 0.0, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7654903807976934677", "platform": "TikTok", "title": "ink-solo-rena #grokai #aiidol #kpop #ink #virtualidol", "url": "https://www.tiktok.com/@loom_mm/video/7654903807976934677", "publishedAt": "2026-06-24", "measuredAt": "2026-08-02", "duration": "12s", "durationSec": 12, "views": 15, "likes": 0, "comments": 0, "shares": 0, "saves": 0, "likeRatePct": 0.0, "saveRatePct": 0.0, "shareRatePct": 0.0, "engagementRatePct": 0.0, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7654903759138573588", "platform": "TikTok", "title": "ink-solo-rena #grokai #aiidol #kpop #virtualidol #kpop", "url": "https://www.tiktok.com/@loom_mm/video/7654903759138573588", "publishedAt": "2026-06-24", "measuredAt": "2026-08-02", "duration": "6s", "durationSec": 6, "views": 11, "likes": 0, "comments": 0, "shares": 0, "saves": 0, "likeRatePct": 0.0, "saveRatePct": 0.0, "shareRatePct": 0.0, "engagementRatePct": 0.0, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7654903601088711957", "platform": "TikTok", "title": "ink-solo-faye#grokai #aiidol #kpop #virtualidol #ink", "url": "https://www.tiktok.com/@loom_mm/video/7654903601088711957", "publishedAt": "2026-06-24", "measuredAt": "2026-08-02", "duration": "6s", "durationSec": 6, "views": 10, "likes": 0, "comments": 0, "shares": 0, "saves": 0, "likeRatePct": 0.0, "saveRatePct": 0.0, "shareRatePct": 0.0, "engagementRatePct": 0.0, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "7668368837514972436", "platform": "TikTok", "title": "They look at each other #loom #eyewear #ai #rainyday #virtualidol", "url": "https://www.tiktok.com/@loom_mm/video/7668368837514972436", "publishedAt": "2026-07-30", "measuredAt": "2026-08-02", "duration": "4s", "durationSec": 4, "views": 3, "likes": 1, "comments": 0, "shares": 0, "saves": 0, "likeRatePct": 33.33, "saveRatePct": 0.0, "shareRatePct": 0.0, "engagementRatePct": 33.33, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
    ] satisfies PublicPostMetrics[],
  },
  youtube: {
    handle: "@Loom-idol-m",
    url: "https://www.youtube.com/@Loom-idol-m",
    channelFollowersAtMeasure: 9,
    aggregates: [
      {"label": "Studio 창 2026-06-07~2026-08-02", "postCount": 12, "views": 5907, "likes": 49, "comments": 0, "shares": 10, "avgWatchSec": 20, "avgViewPercentage": 67.25, "subscribersGained": 10, "estimatedMinutesWatched": 624, "commentsExposed": true},
    ] satisfies PlatformAggregate[],
    posts: [
      {"id": "xNfAkfhipSE", "platform": "YouTube", "title": "Loom · They look at each other #Shorts", "url": "https://www.youtube.com/shorts/xNfAkfhipSE", "publishedAt": "2026-07-30", "measuredAt": "2026-08-02", "duration": "4", "durationSec": 4, "mediaType": "short", "views": 2493, "likes": 22, "comments": 0, "shares": 1, "saves": null, "likeRatePct": 0.88, "saveRatePct": null, "shareRatePct": 0.04, "engagementRatePct": 0.88, "completionRatePct": 342.49, "avgWatchSec": 17, "avgViewDurationPct": 342.49, "topCountries": [{"country": "JP", "sharePct": 9.0}, {"country": "UZ", "sharePct": 8.5}, {"country": "ID", "sharePct": 5.8}, {"country": "KR", "sharePct": 5.6}, {"country": "DZ", "sharePct": 4.6}], "audienceGender": null, "audienceAge": null},
      {"id": "br8NKQIHjOQ", "platform": "YouTube", "title": "Loom · Bouquet CF · Different gazes meet #Shorts", "url": "https://www.youtube.com/shorts/br8NKQIHjOQ", "publishedAt": "2026-07-30", "measuredAt": "2026-08-02", "duration": "19", "durationSec": 19, "mediaType": "short", "views": 1031, "likes": 7, "comments": 0, "shares": 0, "saves": null, "likeRatePct": 0.68, "saveRatePct": null, "shareRatePct": 0.0, "engagementRatePct": 0.68, "completionRatePct": 56.47, "avgWatchSec": 11, "avgViewDurationPct": 56.47, "topCountries": [{"country": "KR", "sharePct": 41.6}, {"country": "ID", "sharePct": 7.2}, {"country": "JP", "sharePct": 5.1}, {"country": "MM", "sharePct": 4.4}, {"country": "TW", "sharePct": 3.7}], "audienceGender": null, "audienceAge": null},
      {"id": "rxwn61IROQc", "platform": "YouTube", "title": "Loom · Rena · One chosen color starts the day #Shorts", "url": "https://www.youtube.com/shorts/rxwn61IROQc", "publishedAt": "2026-07-29", "measuredAt": "2026-08-02", "duration": "8", "durationSec": 8, "mediaType": "short", "views": 1114, "likes": 11, "comments": 0, "shares": 1, "saves": null, "likeRatePct": 0.99, "saveRatePct": null, "shareRatePct": 0.09, "engagementRatePct": 0.99, "completionRatePct": 119.01, "avgWatchSec": 10, "avgViewDurationPct": 119.01, "topCountries": [{"country": "UZ", "sharePct": 14.1}, {"country": "KG", "sharePct": 3.4}, {"country": "SY", "sharePct": 3.2}, {"country": "MN", "sharePct": 2.5}, {"country": "MM", "sharePct": 1.9}], "audienceGender": null, "audienceAge": null},
      {"id": "4-18kkZFh18", "platform": "YouTube", "title": "Four Routes. One Squad. | Loom #Shorts", "url": "https://www.youtube.com/shorts/4-18kkZFh18", "publishedAt": "2026-08-01", "measuredAt": "2026-08-02", "duration": "34", "durationSec": 34, "mediaType": "short", "views": 601, "likes": 10, "comments": null, "shares": null, "saves": null, "likeRatePct": 1.66, "saveRatePct": null, "shareRatePct": null, "engagementRatePct": 1.66, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "l2cJP7Q9I8I", "platform": "YouTube", "title": "Loom - World Cup Pulso / Section S03 - hidden pulse hook #Shorts", "url": "https://www.youtube.com/shorts/l2cJP7Q9I8I", "publishedAt": "2026-06-18", "measuredAt": "2026-08-02", "duration": "22", "durationSec": 22, "mediaType": "short", "views": 355, "likes": 1, "comments": 0, "shares": 0, "saves": null, "likeRatePct": 0.28, "saveRatePct": null, "shareRatePct": 0.0, "engagementRatePct": 0.28, "completionRatePct": 53.56, "avgWatchSec": 12, "avgViewDurationPct": 53.56, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "SDRlYNohEiE", "platform": "YouTube", "title": "Loom Ink AI K-pop Idol - Mask Hook #Shorts", "url": "https://www.youtube.com/shorts/SDRlYNohEiE", "publishedAt": "2026-07-04", "measuredAt": "2026-08-02", "duration": "19", "durationSec": 19, "mediaType": "short", "views": 199, "likes": 2, "comments": 0, "shares": 0, "saves": null, "likeRatePct": 1.01, "saveRatePct": null, "shareRatePct": 0.0, "engagementRatePct": 1.01, "completionRatePct": 56.11, "avgWatchSec": 11, "avgViewDurationPct": 56.11, "topCountries": [{"country": "KR", "sharePct": 73.4}], "audienceGender": null, "audienceAge": null},
      {"id": "j3XvEYwlApE", "platform": "YouTube", "title": "Loom - World Cup Pulso / Clip 01 - opening route #Shorts", "url": "https://www.youtube.com/shorts/j3XvEYwlApE", "publishedAt": "2026-06-15", "measuredAt": "2026-08-02", "duration": "35", "durationSec": 35, "mediaType": "short", "views": 193, "likes": 1, "comments": 0, "shares": 0, "saves": null, "likeRatePct": 0.52, "saveRatePct": null, "shareRatePct": 0.0, "engagementRatePct": 0.52, "completionRatePct": 310.96, "avgWatchSec": 111, "avgViewDurationPct": 310.96, "topCountries": [{"country": "KR", "sharePct": 93.8}], "audienceGender": null, "audienceAge": null},
      {"id": "TyONE0lKI2s", "platform": "YouTube", "title": "Loom - Ink | AI K-pop Idol Music Video", "url": "https://www.youtube.com/watch?v=TyONE0lKI2s", "publishedAt": "2026-07-02", "measuredAt": "2026-08-02", "duration": "2:42", "durationSec": 162, "mediaType": "video", "views": 93, "likes": 3, "comments": 0, "shares": 1, "saves": null, "likeRatePct": 3.23, "saveRatePct": null, "shareRatePct": 1.08, "engagementRatePct": 3.23, "completionRatePct": 36.21, "avgWatchSec": 58, "avgViewDurationPct": 36.21, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "vvw8DdTrFtA", "platform": "YouTube", "title": "One quiet click — closed weave, open proof | Loom #Shorts", "url": "https://www.youtube.com/shorts/vvw8DdTrFtA", "publishedAt": "2026-07-31", "measuredAt": "2026-08-02", "duration": "12", "durationSec": 12, "mediaType": "short", "views": 63, "likes": null, "comments": null, "shares": null, "saves": null, "likeRatePct": null, "saveRatePct": null, "shareRatePct": null, "engagementRatePct": null, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "DUyCAFHZ7X0", "platform": "YouTube", "title": "Loom Track 01 - Root Signal (Full Master)", "url": "https://www.youtube.com/watch?v=DUyCAFHZ7X0", "publishedAt": "2026-05-29", "measuredAt": "2026-08-02", "duration": "2:44", "durationSec": 164, "mediaType": "video", "views": 44, "likes": 1, "comments": 0, "shares": 1, "saves": null, "likeRatePct": 2.27, "saveRatePct": null, "shareRatePct": 2.27, "engagementRatePct": 2.27, "completionRatePct": 41.42, "avgWatchSec": 68, "avgViewDurationPct": 41.42, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "lzzDanDgsA8", "platform": "YouTube", "title": "Loom - World Cup Pulso / Section S02 - #Shorts", "url": "https://www.youtube.com/shorts/lzzDanDgsA8", "publishedAt": "2026-06-18", "measuredAt": "2026-08-02", "duration": "11", "durationSec": 11, "mediaType": "short", "views": 49, "likes": null, "comments": null, "shares": null, "saves": null, "likeRatePct": null, "saveRatePct": null, "shareRatePct": null, "engagementRatePct": null, "completionRatePct": null, "avgWatchSec": null, "avgViewDurationPct": null, "topCountries": null, "audienceGender": null, "audienceAge": null},
      {"id": "0vV4CXL3_Qk", "platform": "YouTube", "title": "Pulso ✨ AURORA-M AI Idol", "url": "https://www.youtube.com/watch?v=0vV4CXL3_Qk", "publishedAt": "2026-06-17", "measuredAt": "2026-08-02", "duration": "2:39", "durationSec": 159, "mediaType": "video", "views": 37, "likes": 0, "comments": 0, "shares": 0, "saves": null, "likeRatePct": 0.0, "saveRatePct": null, "shareRatePct": 0.0, "engagementRatePct": 0.0, "completionRatePct": 34.48, "avgWatchSec": 55, "avgViewDurationPct": 34.48, "topCountries": null, "audienceGender": null, "audienceAge": null},
    ] satisfies PublicPostMetrics[],
  },
} as const;

export function formatMetricPct(value: number | null | undefined) {
  if (value === null || value === undefined) return "—";
  return `${value.toFixed(2)}%`;
}

export function formatMetricCount(value: number | null | undefined) {
  if (value === null || value === undefined) return "not exposed";
  return new Intl.NumberFormat("en-US").format(value);
}
