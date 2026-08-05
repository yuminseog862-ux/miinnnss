/**
 * Content Learning Loop — Loom public-channel case data.
 *
 * Boundary rules:
 * - "20대 초반 여성" is a creation target hypothesis, not measured audience demography.
 * - Views / likes / saves / shares are reaction signals only — not conversion or revenue.
 * - Do not claim a hook "succeeded"; early attention is a hypothesis signal only.
 * - Post collection windows are T+24h / T+72h / T+7d; daily ops summarize already-collected values.
 * - Final judgment on message, target fit, and cut structure remains human.
 * - Media paths under /content-learning/loom/* are optional; UI hides missing assets.
 */

export type ContentLearningPlatform = "TikTok" | "YouTube";

export type ContentLearningMediaSlot = {
  /** Public path under /public, e.g. /content-learning/loom/cut-flow/v2-hook.jpg */
  src: string;
  alt: string;
  label: string;
};

export type CutFlowStage = {
  id: "hook" | "proof" | "resolve";
  label: string;
  description: string;
  media?: ContentLearningMediaSlot;
};

export type CutFlowCompare = {
  beforeLabel: string;
  afterLabel: string;
  before: CutFlowStage[];
  after: CutFlowStage[];
  /** True only when at least one frame image is supplied for either strip. */
  hasAnyMedia: boolean;
};

export type MessageLearningStage = {
  version: "V1" | "V2" | "V3";
  code: string;
  title: string;
  summary: string;
  focus: string;
  question: string;
};

export type SignalObservation = {
  id: string;
  platform: ContentLearningPlatform;
  postTitle: string;
  postUrl: string;
  duration: string;
  publishedAt: string;
  measuredAt: string;
  metricSource: string;
  metrics: { label: string; value: string }[];
  observedSignal: string;
  workingHypothesis: string;
  changedElements: string[];
  nextCheck: string;
  cutFlow?: CutFlowCompare;
};

export type DecisionLoopStep = {
  id: string;
  title: string;
  body: string;
};

export type NarrativeStage = {
  id: "now" | "before" | "adjust";
  marker: string;
  /** One-line stage title */
  title: string;
  /** One-line subtitle (lead) */
  subtitle: string;
  /** One-line description after subtitle */
  description: string;
  /** Observation ids from signalRails to show under this stage */
  observationIds: string[];
};

export type ContentLearningCase = {
  id: string;
  projectLabel: string;
  pageTitle: string;
  heroLine: string;
  heroBody: string;
  /** Core arc under the single title — before / changed / now */
  arcSummary: {
    before: string;
    changed: string;
    now: string;
    next: string;
  };
  narrativeStages: NarrativeStage[];
  target: {
    creationTarget: string;
    targetKind: string;
    gap: string;
    alignmentNote: string;
    beforeLabel: string;
    afterLabel: string;
    researchMedia: ContentLearningMediaSlot[];
  };
  messageStages: MessageLearningStage[];
  signalRails: {
    platform: ContentLearningPlatform;
    intro: string;
    observations: SignalObservation[];
  }[];
  decisionLoop: DecisionLoopStep[];
  measurementNote: string;
  assetRoots: {
    targetResearch: string;
    metrics: string;
    cutFlow: string;
    reports: string;
  };
  teaser: {
    label: string;
    title: string;
    /** One-line case result under headline (Harness caseResult parity). */
    resultLine: string;
    targetLine: string;
    gapLine: string;
    connectLine: string;
    /** Loom homeReadout parity: Role · Scope · Output before V1–V3. */
    homeReadout: { label: string; value: string }[];
    ctaHref: string;
    ctaLabel: string;
  };
};

/** Optional frames — only render when files are present (checked at build/render via path config). */
const emptyCutFlow = (beforeLabel: string, afterLabel: string): CutFlowCompare => ({
  beforeLabel,
  afterLabel,
  before: [
    { id: "hook", label: "훅", description: "첫 장면·첫 문장 진입" },
    { id: "proof", label: "메시지 증명", description: "핵심 장면이 메시지를 보이는 구간" },
    { id: "resolve", label: "회수 장면", description: "끝에서 메시지·여운을 닫는 구간" },
  ],
  after: [
    { id: "hook", label: "훅", description: "첫 장면·첫 문장 진입" },
    { id: "proof", label: "메시지 증명", description: "핵심 장면이 메시지를 보이는 구간" },
    { id: "resolve", label: "회수 장면", description: "끝에서 메시지·여운을 닫는 구간" },
  ],
  hasAnyMedia: false,
});

/**
 * Live public re-check via yt-dlp on 2026-08-02 for known Loom posts.
 * Saves are not exposed by this extractor; likes/views only where returned.
 */
export const contentLearningCase: ContentLearningCase = {
  id: "loom-content-learning",
  projectLabel: "Loom / Pulso",
  pageTitle: "Content Learning Loop",
  heroLine: "반응 신호의 다음 메시지·컷 구조 환류",
  heroBody:
    "채널 수치 과시가 아닌, 창작 타깃 정렬을 위한 톤·메시지 전개·컷 문법 해석과 작업 가설 기반 장면 수정의 판단 사례. 조회·좋아요·저장·공유는 반응 신호에 한정. 전환·매출·팬덤 규모·인과 주장 배제.",
  arcSummary: {
    before:
      "초기 톤·메시지 전개·컷 문법의 30–40대 인접 인상\n창작 타깃 가설 20대 초반 여성\n타깃 변경이 아닌 표현 정렬 간극",
    changed:
      "이미지 톤·질감·구도·행동·카메라 조정\n장면 단위 메시지 가독의 재정렬\n목표 타깃 방향 표현 보정",
    now:
      "시선·색·한 문장 훅 구간의 초반 시청 신호 출현\n훅 성공 단정 배제",
    next:
      "메시지 훅 정착 이후 과제\n훅–중후반 연결 영상\n메시지 증명·연속 시청 설계",
  },
  narrativeStages: [
    {
      id: "now",
      marker: "01",
      title: "현재 · 훅 신호의 가시화",
      subtitle: "짧은 시선·관계·색 훅 구간의 초반 시청 신호",
      description: "플랫폼 비합산 · 조회 상위 사례 우선 배치",
      observationIds: ["yt-they-look", "yt-rena-color", "tt-bouquet-cf-recent"],
    },
    {
      id: "before",
      marker: "02",
      title: "이전 · 30–40대 인접 표현 간극",
      subtitle: "초기 메시지 전달 의도 대비 톤·전개·컷 문법의 30–40대 인접 인상",
      description: "목표 창작 타깃(20대 초반 여성)과의 표현 정렬 문제 · 타깃 변경 아님",
      // Creator Content export: 5월 stage/MV 계열(설명·전달형) — 6월 ink 훅 클립과 구분
      observationIds: ["tt-m04-lua-stage", "tt-m01-saeyan-stage", "tt-m02-stage"],
    },
    {
      id: "adjust",
      marker: "03",
      title: "조정 · 톤·구도·행동·카메라·메시지 표현",
      subtitle: "이미지 톤·질감·구도·행동·카메라",
      description: "장면 내 메시지 가독 보정 · 목표 타깃 방향 정렬",
      observationIds: ["yt-bouquet-cf"],
    },
  ],
  target: {
    creationTarget: "20대 초반 여성",
    targetKind: "창작 타깃 · 타깃 가설",
    gap: "초기 톤·메시지 전개·컷 문법의 30–40대 잔존과 목표 타깃(20대 초반 여성) 간 표현 간극",
    alignmentNote:
      "타깃 변경 사례가 아닌 표현 정렬 보정 과정\n초기부터의 목표 타깃 20대 초반 여성\n공개 API 부재 구간 시청자 연령·성별 인구통계 비추정",
    beforeLabel: "초기 표현 상태",
    afterLabel: "정렬 보정 방향",
    researchMedia: [],
  },
  messageStages: [
    {
      version: "V1",
      code: "Message delivery",
      title: "메시지 전달",
      summary:
        "IP·트랙·멤버 정보의 가독 배치 단계\n전달은 성립하나 목표 타깃 스크롤 리듬·톤 간극 잔존",
      focus: "정보 전달 · 세계관 설명",
      question: "메시지 존재 여부",
    },
    {
      version: "V2",
      code: "Hook",
      title: "첫 훅 정착",
      summary:
        "1–3초 시선·색·동작 훅과 메시지 단서의 전방 배치\n초반 시청 신호에 의한 훅 가설 가능성\n지속 시청·완주의 별도 검토 필요",
      focus: "초반 정지 · 훅 가설",
      question: "첫 장면 정지의 성립 여부",
    },
    {
      version: "V3",
      code: "Message continuity",
      title: "훅 이후 메시지 연속",
      summary:
        "훅 이후 핵심 장면의 동일 메시지 증명\n회수 장면까지 이해·시청 흐름 유지 설계\n초반 반응과 중후반 이해의 분리 관찰",
      focus: "중후반 연결 · 메시지 증명",
      question: "메시지 유지의 전 구간 성립 여부",
    },
  ],
  signalRails: [
    {
      platform: "TikTok",
      intro:
        "TikTok(@loom_mm) 공개 카운트 + Creator Analytics CSV export\n플랫폼 비합산\n2026-08-02 yt-dlp 공개 메타와 Content/Overview/Viewers 교차\n확인 항목: 조회·좋아요·댓글·공유·저장·일별 뷰·New/Returning\nnot exposed: 국가·완주율·연령/성별\n원본 CSV: /content-learning/loom/metrics/tiktok-creator-analytics/",
      observations: [
        {
          id: "tt-m04-lua-stage",
          platform: "TikTok",
          postTitle: "M04 lua stage #Grok #ai #aiidol #kpop",
          postUrl: "https://www.tiktok.com/@loom_mm/video/7642330107624934676",
          duration: "stage",
          publishedAt: "2026-05-21",
          measuredAt: "2026-08-02",
          metricSource: "TikTok Creator Analytics Content export (2026-08-02)",
          metrics: [
            { label: "Views", value: "596" },
            { label: "Likes", value: "12" },
            { label: "Comments", value: "0" },
            { label: "Shares", value: "0" },
            { label: "Saves", value: "not exposed" },
            { label: "Completion", value: "not exposed" },
            { label: "Country", value: "not exposed" },
          ],
          observedSignal:
            "5월 stage/MV 계열 클립의 조회 상위권(Content export 596 views)\n멤버 스테이지·정보 전달형 전개 인상\n6월 ink 훅 클러스터 이전 구간의 메시지 전달 샘플",
          workingHypothesis:
            "스테이지·트랙 정보 전달 문법의 30–40대 인접 인상 가능성\n창작 타깃(20대 초반 여성) 스크롤 리듬과의 표현 정렬 간극\n타깃 변경이 아닌 표현 보정 과제",
          changedElements: [
            "세계관·멤버 정보 나열 대비 첫 프레임 훅 우선",
            "설명형 전개의 톤·질감 하향 조정",
            "동일 멤버의 짧은 훅 변주 테스트",
          ],
          nextCheck: "동일 멤버 stage/MV 대비 6s급 훅 클립의 동일 측정 창 조회·좋아요 비교",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
        {
          id: "tt-m01-saeyan-stage",
          platform: "TikTok",
          postTitle: "#Grok M01 stage 새얀 #ai #aiidol #kpop",
          postUrl: "https://www.tiktok.com/@loom_mm/video/7642332420485745941",
          duration: "stage",
          publishedAt: "2026-05-21",
          measuredAt: "2026-08-02",
          metricSource: "TikTok Creator Analytics Content export (2026-08-02)",
          metrics: [
            { label: "Views", value: "495" },
            { label: "Likes", value: "9" },
            { label: "Comments", value: "0" },
            { label: "Shares", value: "0" },
            { label: "Saves", value: "not exposed" },
            { label: "Completion", value: "not exposed" },
            { label: "Country", value: "not exposed" },
          ],
          observedSignal:
            "5월 M01 stage 클립의 Content export 조회 495\n멤버 소개·스테이지 중심 메시지 전달 구조\n초반 시선·색 훅 대비 정보 비중 우세 인상",
          workingHypothesis:
            "메시지 존재(V1)는 성립하나 스크롤 환경 정합 부족 가설\n톤·전개 문법의 표현 정렬 보정 필요\n타깃 인구통계 비추정",
          changedElements: [
            "멤버 정보 전달의 훅 전방 배치",
            "컷 밀도·길이의 스크롤 리듬 조정",
            "메시지 키워드와 첫 프레임 정서의 정합",
          ],
          nextCheck: "동일 멤버 후속 훅 클립과의 T+7d 조회 궤적 대조",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
        {
          id: "tt-m02-stage",
          platform: "TikTok",
          postTitle: "M02 stage #Grok #ai #aivideo #aiidol #kpop",
          postUrl: "https://www.tiktok.com/@loom_mm/video/7642319743843749141",
          duration: "stage",
          publishedAt: "2026-05-21",
          measuredAt: "2026-08-02",
          metricSource: "TikTok Creator Analytics Content export (2026-08-02)",
          metrics: [
            { label: "Views", value: "410" },
            { label: "Likes", value: "8" },
            { label: "Comments", value: "0" },
            { label: "Shares", value: "0" },
            { label: "Saves", value: "not exposed" },
            { label: "Completion", value: "not exposed" },
            { label: "Country", value: "not exposed" },
          ],
          observedSignal:
            "5월 M02 stage 클립의 Content export 조회 410\n스테이지·AI 영상 문법의 설명형 전개\nCreator export 상위권 내 초기 전달 구간 샘플",
          workingHypothesis:
            "정보 전달형 컷 문법의 목표 타깃 톤 간극 가설\n구도·카메라·메시지 가독의 동시 보정 필요\nV1→V2 전환의 관찰 기준점",
          changedElements: [
            "설명 자막·정보 밀도 축소",
            "행동·카메라 리듬의 훅 우선 재배치",
            "동일 메시지 문장의 짧은 변주 게시",
          ],
          nextCheck: "stage 계열 대비 CF/훅 계열의 플랫폼별 조회 밀도 비교 · 비합산",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
        {
          id: "tt-ink-yeul-short",
          platform: "TikTok",
          postTitle: "ink-yeul #grokai #aiidol #kpop #virtualidol #ink",
          postUrl: "https://www.tiktok.com/@loom_mm/video/7654903404963122452",
          duration: "6s",
          publishedAt: "2026-06-24",
          measuredAt: "2026-08-02",
          metricSource:
            "yt-dlp public TikTok metadata + Creator Viewers long window (mid-June / 6-24–26 cluster)",
          metrics: [
            { label: "Views", value: "942" },
            { label: "Likes", value: "18" },
            { label: "Comments", value: "0" },
            { label: "Shares", value: "0" },
            { label: "Saves", value: "2" },
            { label: "Eng. rate", value: "2.12%" },
            { label: "Completion", value: "not exposed" },
            { label: "Country", value: "not exposed" },
          ],
          observedSignal:
            "6초 멤버 훅 클립의 동시 게시 구간 내 조회 상위 신호\nCreator Viewers 6/24–26 클러스터(6/25 total 2,263 · New 비중 우세)와의 시기 정렬\n완주·국가 not exposed",
          workingHypothesis:
            "단일 멤버·짧은 길이·즉시 가독 비주얼에 의한 초반 시청·신규 유입 가능성 가설\n지속 시청·완주 근거 배제",
          changedElements: [
            "첫 프레임 멤버 얼굴·동작 단서의 조기 배치",
            "설명형 인트로 대비 시각 훅 우선",
            "동일 길이대 비교 관찰의 유지",
          ],
          nextCheck:
            "T+24h / T+72h / T+7d 동일 기준 조회·좋아요·저장 궤적 비교\n완주·국가의 관리자 Analytics 확보 시 교차 검토",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
        {
          id: "tt-longer-like-dense",
          platform: "TikTok",
          postTitle: "#kpop #aiidol #ai #virtualidol #loom",
          postUrl: "https://www.tiktok.com/@loom_mm/video/7654624880796699924",
          duration: "46s",
          publishedAt: "2026-06-23",
          measuredAt: "2026-08-02",
          metricSource: "yt-dlp public TikTok metadata",
          metrics: [
            { label: "Views", value: "896" },
            { label: "Likes", value: "45" },
            { label: "Comments", value: "0" },
            { label: "Shares", value: "0" },
            { label: "Saves", value: "0" },
            { label: "Like rate", value: "5.02%" },
            { label: "Eng. rate", value: "5.02%" },
            { label: "Completion", value: "not exposed" },
          ],
          observedSignal:
            "46초 중편 클립의 조회 상위 유지\n좋아요 비율 5.02%\n동 기간 숏폼 대비 높은 좋아요 밀도\n완주 부재 구간의 ‘전 구간 시청’ 단정 배제",
          workingHypothesis:
            "초반 훅 단독이 아닌 중후반 메시지·무드 연속 시 의도적 반응(좋아요) 발생 가능성\n길이 자체의 인과 단정 배제",
          changedElements: [
            "훅 이후 핵심 장면의 메시지 증명 구간화",
            "정보 나열 대비 단일 메시지 반복 증명의 컷 전환",
            "숏 훅 클립과 중편 연결 클립의 분리 관찰",
          ],
          nextCheck:
            "동일 멤버·톤 기준 6s급 vs 30s+급의 동일 측정 창 비교\nStudio 완주율 확보 시 교차 확인",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
        {
          id: "tt-share-signal",
          platform: "TikTok",
          postTitle: "#loom #kpop #virtualidol #ai #aiidol",
          postUrl: "https://www.tiktok.com/@loom_mm/video/7654618213472505109",
          duration: "35s",
          publishedAt: "2026-06-23",
          measuredAt: "2026-08-02",
          metricSource: "yt-dlp public TikTok metadata",
          metrics: [
            { label: "Views", value: "851" },
            { label: "Likes", value: "16" },
            { label: "Comments", value: "0" },
            { label: "Shares", value: "5" },
            { label: "Saves", value: "5" },
            { label: "Share rate", value: "0.59%" },
            { label: "Eng. rate", value: "3.06%" },
            { label: "Country", value: "not exposed" },
          ],
          observedSignal:
            "35초 클립의 공유 5·저장 5\n조회 규모 대비 공유·저장 밀도 샘플\n공유 동기·국가 분포의 공개 메타 한계",
          workingHypothesis:
            "한 장면 단위 메시지 회수 구조와 공유 가능 신호의 연결 가설\n공유의 전환·팬덤 성장 해석 배제",
          changedElements: [
            "엔딩 문장·비주얼 정합에 의한 메시지 회수",
            "캡션·해시태그 대비 컷 내 메시지 우선 점검",
          ],
          nextCheck: "유사 구조 후속 게시물의 T+7d 공유·저장 궤적 비교",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
        {
          id: "tt-bouquet-cf-recent",
          platform: "TikTok",
          postTitle: "Loom · Bouquet CF Different gazes meet",
          postUrl: "https://www.tiktok.com/@loom_mm/video/7668260819439848725",
          duration: "19s",
          publishedAt: "2026-07-30",
          measuredAt: "2026-08-02",
          metricSource:
            "yt-dlp public TikTok metadata + Creator Analytics Content/Overview export (2026-07-30 peak day)",
          metrics: [
            { label: "Views", value: "906" },
            { label: "Likes", value: "19" },
            { label: "Comments", value: "0" },
            { label: "Shares", value: "0" },
            { label: "Saves", value: "1" },
            { label: "Eng. rate", value: "2.21%" },
            { label: "Completion", value: "not exposed" },
            { label: "Country", value: "not exposed" },
          ],
          observedSignal:
            "Creator Overview 일별 뷰 피크(2026-07-30 · 953)와 동일 일자 CF 클립의 Content export·공개 메타 조회 상위\nYouTube 동일 메시지 Shorts의 병행 관찰 가능\n국가·완주율 not exposed",
          workingHypothesis:
            "시선 만남 메시지·CF 컷 구조와 톤·연출 정렬의 채널 일별 스파이크 중첩 가능성\n플랫폼 비합산 해석\n전환 성과 단정 배제",
          changedElements: [
            "플랫폼별 길이·훅 밀도 조정에 의한 동일 메시지 게시",
            "설명형 전개 대비 시선·관계 훅 우선 연출",
            "플랫폼별 저장·좋아요 비율의 분리 비교",
          ],
          nextCheck:
            "YouTube Bouquet CF 동일 측정 창의 조회·좋아요 궤적 대조\n플랫폼 비합산",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
      ],
    },
    {
      platform: "YouTube",
      intro:
        "YouTube(@Loom-idol-m) 2026-08-02 채널 소유자 OAuth(Analytics API) 국가·평균 시청 재측정\n플랫폼 비합산\naverageViewPercentage = Studio 평균 시청 비율\nShorts 재시청에 의한 100% 초과 가능",
      observations: [
        {
          id: "yt-they-look",
          platform: "YouTube",
          postTitle: "Loom · They look at each other #Shorts",
          postUrl: "https://www.youtube.com/shorts/xNfAkfhipSE",
          duration: "4s",
          publishedAt: "2026-07-30",
          measuredAt: "2026-08-02",
          metricSource: "YouTube Analytics API v2 (OAuth)",
          metrics: [
            { label: "Views", value: "2,493" },
            { label: "Likes", value: "22" },
            { label: "Avg watch", value: "17s" },
            { label: "Avg view %", value: "342.49%" },
            { label: "Top country", value: "JP / UZ / ID" },
            { label: "Gender/Age", value: "not exposed" },
          ],
          observedSignal:
            "4초 시선 훅 Shorts의 Studio 조회 상위\n평균 시청 비율 342%의 재시청 혼입 신호\n단일 재생 완주 성공 해석 배제\n국가 상위 JP·UZ·ID 분산",
          workingHypothesis:
            "즉시 가독 관계 훅에 의한 반복 재생 가능성\n창작 타깃(20대 초반 여성) 적합성의 국가·연령 인구통계 부재 구간 가설 한정",
          changedElements: [
            "정보 나열 대비 시선·관계 비주얼 오프닝",
            "첫 프레임 정서와 메시지 키워드의 정합",
            "후속 CF/Shorts 동일 훅 문법의 변주 테스트",
          ],
          nextCheck: "동일 훅 문법 후속 Shorts의 T+24h / T+72h / T+7d 조회·평균 시청 비율 궤적",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
        {
          id: "yt-bouquet-cf",
          platform: "YouTube",
          postTitle: "Loom · Bouquet CF · Different gazes meet #Shorts",
          postUrl: "https://www.youtube.com/shorts/br8NKQIHjOQ",
          duration: "19s",
          publishedAt: "2026-07-30",
          measuredAt: "2026-08-02",
          metricSource: "YouTube Analytics API v2 (OAuth)",
          metrics: [
            { label: "Views", value: "1,031" },
            { label: "Likes", value: "7" },
            { label: "Avg watch", value: "11s" },
            { label: "Avg view %", value: "56.47%" },
            { label: "Top country", value: "KR 41.6%" },
            { label: "Gender/Age", value: "not exposed" },
          ],
          observedSignal:
            "19초 CF형 Shorts 조회 1K대\n평균 시청 약 11초(평균 시청 비율 56%)\n국가 비중 KR 최대\n훅 이후 중후반 이탈 가능성 시사\n인과 단정 배제",
          workingHypothesis:
            "V2 훅과 V3 메시지 연속의 단일 클립 검증 틀\n초반 정지 이후 메시지 잔존 여부 관찰\nKR 비중의 타깃 가설 분리 해석",
          changedElements: [
            "훅 → 메시지 증명 → 회수 3단 편집 기준 고정",
            "제품·아이템 노출 대비 메시지 선독 컷 우선순위",
          ],
          nextCheck: "동일 메시지 문장의 장·단 변주별 평균 시청 비율 패턴 비교",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
        {
          id: "yt-rena-color",
          platform: "YouTube",
          postTitle: "Loom · Rena · One chosen color starts the day #Shorts",
          postUrl: "https://www.youtube.com/shorts/rxwn61IROQc",
          duration: "8s",
          publishedAt: "2026-07-29",
          measuredAt: "2026-08-02",
          metricSource: "YouTube Analytics API v2 (OAuth)",
          metrics: [
            { label: "Views", value: "1,114" },
            { label: "Likes", value: "11" },
            { label: "Avg watch", value: "10s" },
            { label: "Avg view %", value: "119.01%" },
            { label: "Top country", value: "UZ / KG / SY" },
            { label: "Gender/Age", value: "not exposed" },
          ],
          observedSignal:
            "8초 단일 멤버·색 훅 Shorts 조회 1.1K대\n평균 시청 비율 119%(재시청 포함 가능)\n국가 상위 UZ·KG·SY 분산",
          workingHypothesis:
            "단일 멤버·단일 색·단일 문장 축소에 의한 설명형 톤 이탈과 스크롤 환경 정합 가능성\n타깃 변경이 아닌 표현 정렬 보정 가설",
          changedElements: [
            "한 클립 한 메시지 원칙",
            "설명 자막 밀도 축소 · 시각 단서 우선",
            "동일 멤버 메시지 문장 변주의 순차 비교",
          ],
          nextCheck:
            "색·아이템 훅과 메시지 문장 유무의 순차 비교\n평균 시청 비율 변화 관찰",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
      ],
    },
  ],
  decisionLoop: [
    {
      id: "api-window",
      title: "고정 시점 API 관측",
      body:
        "T+24h / T+72h / T+7d 창 공개 메타 기록\n일일 전량 반복 조회 배제",
    },
    {
      id: "platform-verify",
      title: "플랫폼별 데이터 검증",
      body:
        "TikTok·YouTube 비합산\n플랫폼 신호·길이·게시 맥락의 분리 대조",
    },
    {
      id: "daily-summary",
      title: "일일 요약 · 다음 테스트 제안",
      body:
        "수집 값 기반 요약과 다음 테스트 후보 정리\nAPI·보고서의 관찰 보조 역할",
    },
    {
      id: "human-judge",
      title: "인간 판단",
      body:
        "메시지·타깃 정렬·컷 구조의 최종 판단 주체\n수치 단독 결론 배제",
    },
    {
      id: "cut-revise",
      title: "메시지·컷 구조 수정",
      body: "통과 가설의 다음 훅·증명·회수 장면 설계 반영",
    },
    {
      id: "same-criteria",
      title: "동일 기준 후속 확인",
      body: "동일 측정 창·동일 해석 경계의 다음 게시물 재관찰",
    },
  ],
  measurementNote:
    "API·분석 요약·제안 문장의 관찰·정리 보조 역할\n메시지·타깃·컷 구조의 최종 인간 판단\n공개 메타 확인 범위: 조회·좋아요·댓글·공유·저장·파생 반응률\nnot exposed 유지 항목: 시청 국가·완주율·평균 시청 시간(해당 시)·연령·성별 — 관리자 Analytics 미확보 시 비추정",
  assetRoots: {
    targetResearch: "/content-learning/loom/target-research/",
    metrics: "/content-learning/loom/metrics/",
    cutFlow: "/content-learning/loom/cut-flow/",
    reports: "/content-learning/loom/reports/",
  },
  teaser: {
    label: "Loom Idol / Content Learning",
    title: "소셜미디어 반응을 다음 메시지·컷 설계로 연결",
    resultLine:
      "소셜미디어 반응을 다음 훅·메시지·컷 가설을 점검하는 관찰 신호로 정리",
    targetLine: "창작 타깃 · 20대 초반 여성",
    gapLine: "초기 톤·메시지 전개·컷 문법의 30–40대 잔존 간극 정렬 보정",
    connectLine: "조회·좋아요 등 반응 신호의 다음 메시지·컷 구조 가설 환류 루프",
    homeReadout: [
      { label: "Focus", value: "소셜미디어 반응 → 다음 메시지·컷 가설" },
      { label: "Scope", value: "Loom Idol 소셜미디어 · 반응 신호만" },
      { label: "Output", value: "V1–V3 스테이지 · Learning Loop 페이지" },
    ],
    ctaHref: "/content-performance#learning-loop",
    ctaLabel: "Content Learning 보기",
  },
};

/** Helper for optional media: only list files you actually drop into public/. */
export function resolveCutFlowWithMedia(
  base: CutFlowCompare,
  media: {
    before?: Partial<Record<CutFlowStage["id"], ContentLearningMediaSlot>>;
    after?: Partial<Record<CutFlowStage["id"], ContentLearningMediaSlot>>;
  },
): CutFlowCompare {
  const before = base.before.map((stage) => ({
    ...stage,
    media: media.before?.[stage.id] ?? stage.media,
  }));
  const after = base.after.map((stage) => ({
    ...stage,
    media: media.after?.[stage.id] ?? stage.media,
  }));
  const hasAnyMedia = [...before, ...after].some((stage) => Boolean(stage.media?.src));
  return { ...base, before, after, hasAnyMedia };
}

/** Reserved for wiring capture frames when files land in public/content-learning/loom/. */
export const contentLearningMediaPaths = {
  targetResearch: "/content-learning/loom/target-research/",
  metrics: "/content-learning/loom/metrics/",
  cutFlow: "/content-learning/loom/cut-flow/",
  reports: "/content-learning/loom/reports/",
} as const;
