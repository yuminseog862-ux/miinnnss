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
  title: string;
  body: string;
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
    targetLine: string;
    gapLine: string;
    connectLine: string;
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
  heroLine: "반응 신호를 다음 메시지와 컷 구조로 되돌린 과정",
  heroBody:
    "이 페이지는 채널 수치 자랑이 아닙니다. 창작 타깃에 맞추기 위해 톤·메시지 전개·컷 문법을 어떻게 읽고, 어떤 작업 가설로 다음 장면을 바꿨는지 보여주는 콘텐츠 판단 사례입니다. 조회·좋아요·저장·공유는 반응 신호일 뿐이며, 전환·매출·팬덤 규모·인과를 주장하지 않습니다.",
  arcSummary: {
    before:
      "초기에는 톤·메시지 전개·컷 문법이 30–40대에 가깝게 읽혔다. (창작 타깃 가설은 20대 초반 여성. 타깃을 바꾼 것이 아니라 표현이 어긋나 있었다.)",
    changed:
      "이미지 톤·질감·구도·행동·카메라, 그리고 메시지가 장면에서 어떻게 읽힐지를 바꿔 가며 정렬을 보정했다.",
    now: "시선·색·한 문장 훅 쪽에서 초반 시청 신호는 보이기 시작했다. 다만 훅 ‘성공’ 단정은 하지 않는다.",
    next: "지금은 메시지 훅은 얼추 잡히지만, 개선 과제는 훅에서부터 이어지는 영상—훅 이후 메시지 증명·연속 시청 설계—를 만드는 일이다.",
  },
  narrativeStages: [
    {
      id: "now",
      marker: "01",
      title: "현재 · 훅 신호가 보이기 시작한 상태",
      body: "짧은 시선·관계·색 훅에서 초반 시청 신호가 나타났다. 플랫폼은 합산하지 않고, 조회가 큰 사례를 먼저 둔다.",
      observationIds: ["yt-they-look", "yt-rena-color", "tt-bouquet-cf-recent"],
    },
    {
      id: "before",
      marker: "02",
      title: "이전 · 표현이 30–40대에 머문 간극",
      body: "초기 콘텐츠는 메시지를 전달하려 했으나 톤·전개·컷 문법이 30–40대 쪽에 가깝게 읽혔다. 목표 창작 타깃(20대 초반 여성)과 어긋난 것은 타깃 변경이 아니라 표현 정렬 문제였다.",
      observationIds: ["tt-longer-like-dense", "tt-ink-yeul-short", "tt-share-signal"],
    },
    {
      id: "adjust",
      marker: "03",
      title: "조정 · 톤·구도·행동·카메라·메시지 표현",
      body: "이미지 톤과 질감, 구도, 행동, 카메라, 메시지가 장면에서 어떻게 드러날지를 바꿔 보며 목표 타깃 쪽으로 낮춰 맞췄다.",
      observationIds: ["yt-bouquet-cf"],
    },
  ],
  target: {
    creationTarget: "20대 초반 여성",
    targetKind: "창작 타깃 · 타깃 가설",
    gap: "초기 콘텐츠의 톤·메시지 전개·컷 문법이 30–40대에 머물러, 목표 타깃인 20대 초반 여성과 간극이 있었다",
    alignmentNote:
      "타깃을 바꾼 사례가 아닙니다. 처음부터 목표 타깃은 20대 초반 여성이었고, 콘텐츠가 그 타깃에 맞도록 정렬을 보정한 과정입니다. 실제 시청자 연령·성별 인구통계는 공개 API에 없으므로 추정하지 않습니다.",
    beforeLabel: "초기 표현 상태",
    afterLabel: "정렬 보정 방향",
    researchMedia: [],
  },
  messageStages: [
    {
      version: "V1",
      code: "Message delivery",
      title: "메시지를 전달한다",
      summary: "IP·트랙·멤버 정보가 읽히도록 메시지를 넣는 단계. 전달은 되나, 목표 타깃의 스크롤 리듬과 톤 간극이 남았다.",
      focus: "정보 전달 · 세계관 설명",
      question: "메시지가 존재하는가?",
    },
    {
      version: "V2",
      code: "Hook",
      title: "메시지를 첫 훅에 담아 멈추게 한다",
      summary:
        "첫 1–3초에 시선·색·동작 훅을 두고 메시지 단서를 앞당긴다. 초반 시청 신호는 훅 가설의 가능성을 보였지만, 지속 시청·완주까지는 별도 검토가 필요했다.",
      focus: "초반 정지 · 훅 가설",
      question: "첫 장면에서 멈추는가?",
    },
    {
      version: "V3",
      code: "Message continuity",
      title: "훅 이후도 메시지가 증명되게 연결한다",
      summary:
        "훅 이후 핵심 장면이 같은 메시지를 이어 증명하고, 회수 장면까지 이해·시청 흐름이 끊기지 않게 설계한다. 초반 반응과 중후반 이해를 분리해 본다.",
      focus: "중후반 연결 · 메시지 증명",
      question: "끝까지 메시지가 유지되는가?",
    },
  ],
  signalRails: [
    {
      platform: "TikTok",
      intro:
        "TikTok(@loom_mm) 공개 카운트만 사용합니다. 플랫폼을 YouTube와 합산하지 않습니다. 아래 수치는 2026-08-02 yt-dlp 공개 메타 재측정입니다. 조회·좋아요·댓글·공유·저장은 확인됐고, 국가·완주율·연령/성별은 공개 API에 없어 not exposed입니다.",
      observations: [
        {
          id: "tt-ink-yeul-short",
          platform: "TikTok",
          postTitle: "ink-yeul #grokai #aiidol #kpop #virtualidol #ink",
          postUrl: "https://www.tiktok.com/@loom_mm/video/7654903404963122452",
          duration: "6s",
          publishedAt: "2026-06-24",
          measuredAt: "2026-08-02",
          metricSource: "yt-dlp public TikTok metadata",
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
            "6초 짧은 멤버 클립이 동일 날짜 인근 업로드 중 조회 상위권에 올랐다. 초반 진입이 짧은 포맷에서 반응 신호가 상대적으로 뚜렷했다. 완주율·국가 분포는 공개 메타에 없다.",
          workingHypothesis:
            "멤버 한 명·짧은 길이·즉시 읽히는 비주얼이 스크롤 환경에서 초반 시청 가능성을 높일 수 있다. 다만 이는 훅 가설의 가능성일 뿐, 지속 시청·완주 근거는 아니다.",
          changedElements: [
            "첫 프레임에 멤버 얼굴·동작 단서를 더 빨리 배치",
            "설명형 인트로보다 시각 훅 우선",
            "다음 업로드에서 동일 길이대 비교 유지",
          ],
          nextCheck:
            "T+24h / T+72h / T+7d 동일 기준으로 조회·좋아요·저장 궤적을 비교하고, 완주·국가는 관리자 Analytics가 확보될 때만 검토",
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
            "46초 상대적으로 긴 클립이 조회 상위권에 있으면서 좋아요 비율 5.02%로, 같은 기간 짧은 클립 대비 좋아요 밀도가 높았다. 완주율 없이 ‘끝까지 봤다’고 단정하지 않는다.",
          workingHypothesis:
            "초반 훅만으로는 부족하고, 중후반에 메시지·무드가 이어질 때 좋아요 같은 의도적 반응 신호가 생길 수 있다. 길이 자체가 원인이라고 단정하지 않는다.",
          changedElements: [
            "훅 이후 핵심 장면을 메시지 증명 구간으로 명시",
            "컷 전환이 정보를 나열하기보다 한 메시지를 반복 증명하도록 조정",
            "다음 테스트에서 짧은 훅 클립과 중편 연결 클립을 분리 관찰",
          ],
          nextCheck: "동일 멤버/톤에서 6s급 vs 30s+급을 같은 측정 창에서 비교. 가능하면 Studio 완주율과 교차 확인",
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
            "35초 클립에서 공유 5·저장 5가 확인됐다. 조회 규모 대비 공유·저장이 눈에 띄는 샘플이다. 공유 동기와 국가 분포는 공개 메타만으로는 알 수 없다.",
          workingHypothesis:
            "공유 가능 신호는 ‘한 줄로 전달되는 장면’ 가설과 연결해 볼 수 있다. 다만 공유=전환·팬덤 성장으로 해석하지 않는다.",
          changedElements: [
            "한 장면 안에서 메시지가 회수되도록 엔딩 문장·비주얼 정합",
            "캡션·해시태그보다 컷 안 메시지 우선 점검",
          ],
          nextCheck: "공유가 난 게시물과 유사 구조 다음 게시물의 T+7d 공유·저장 궤적 비교",
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
          metricSource: "yt-dlp public TikTok metadata",
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
            "최근 1개월 창(2026-07) CF형 클립이 TikTok 공개 조회 상위에 올랐다. YouTube 동일 메시지 Shorts와 병행 관찰 가능한 샘플이다. 국가·완주율은 미노출.",
          workingHypothesis:
            "시선 만남 메시지와 CF 컷 구조가 플랫폼을 넘나들어도 반응 신호가 생길 수 있다. 플랫폼 합산 없이 각각 읽는다.",
          changedElements: [
            "동일 메시지를 TikTok/YouTube에서 길이·훅 밀도만 조정해 게시",
            "다음 검증에서 플랫폼별 저장·좋아요 비율 비교",
          ],
          nextCheck: "YouTube Bouquet CF와 같은 측정 창의 조회·좋아요 궤적 대조 (합산 금지)",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
      ],
    },
    {
      platform: "YouTube",
      intro:
        "YouTube(@Loom-idol-m)는 2026-08-02 채널 소유자 OAuth(Analytics API)로 국가·평균 시청을 재측정했습니다. TikTok과 합산하지 않습니다. averageViewPercentage는 Studio 평균 시청 비율이며 Shorts는 재시청으로 100%를 넘을 수 있습니다.",
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
            "4초 시선 훅 Shorts가 Studio 조회 상위다. 평균 시청 비율 342%는 재시청이 크게 섞인 신호로, 한 번 재생 완주 성공으로 읽지 않는다. 국가 상위는 JP·UZ·ID 등 분산이다.",
          workingHypothesis:
            "즉시 읽히는 관계 훅이 반복 재생을 부를 수 있다. 창작 타깃(20대 초반 여성) 적합성은 국가·연령 인구통계가 없어 가설로만 둔다.",
          changedElements: [
            "오프닝을 정보 나열 대신 시선·관계 비주얼로 시작",
            "메시지 키워드를 첫 프레임 정서와 맞추기",
            "후속 CF/Shorts에서 동일 훅 문법의 변주 테스트",
          ],
          nextCheck: "동일 훅 문법 다음 Shorts의 T+24h/T+72h/T+7d 조회·평균 시청 비율 궤적",
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
            "19초 CF형 Shorts는 조회 1K대, 평균 시청 약 11초(평균 시청 비율 56%). 국가 비중은 KR이 가장 크다. 훅 이후 중후반 이탈 가능성을 시사하지만 인과는 단정하지 않는다.",
          workingHypothesis:
            "V2 훅과 V3 메시지 연속을 한 클립에서 이어 볼 때, 초반 정지 이후에도 메시지가 남는지 검증할 수 있다. KR 비중은 타깃 가설과 별개로 관찰 신호일 뿐이다.",
          changedElements: [
            "훅 장면 → 메시지 증명 장면 → 회수 장면의 3단을 편집 기준으로 고정",
            "제품/아이템이 나와도 메시지가 먼저 읽히게 컷 우선순위 조정",
          ],
          nextCheck: "같은 메시지 문장의 더 짧은/긴 변주에서 평균 시청 비율 패턴 비교",
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
            "8초 단일 멤버·색 훅 Shorts가 조회 1.1K대, 평균 시청 비율 119%(재시청 포함 가능). 국가 상위는 UZ·KG·SY 등으로 분산.",
          workingHypothesis:
            "한 멤버·한 색·한 문장으로 좁히면 톤이 설명형에서 벗어나 스크롤 환경에 맞을 수 있다. 타깃 변경이 아니라 표현 정렬 보정 가설이다.",
          changedElements: [
            "한 클립 한 메시지 원칙",
            "설명 자막 밀도 낮추고 시각 단서 우선",
            "다음 검증에서 동일 멤버 다른 메시지 문장 순차 비교",
          ],
          nextCheck: "색/아이템 훅과 메시지 문장 유무를 순차 비교해 평균 시청 비율 변화를 본다",
          cutFlow: emptyCutFlow("초기 컷 흐름 (자료 대기)", "수정 컷 흐름 (자료 대기)"),
        },
      ],
    },
  ],
  decisionLoop: [
    {
      id: "api-window",
      title: "정해진 시점의 API 관측",
      body: "게시물별 수집은 매일 전량 반복 조회가 아니라 T+24h / T+72h / T+7d 창에서 공개 메타를 기록한다.",
    },
    {
      id: "platform-verify",
      title: "플랫폼별 데이터 검증",
      body: "TikTok과 YouTube를 합산하지 않고, 각 플랫폼 신호·길이·게시 맥락을 따로 대조한다.",
    },
    {
      id: "daily-summary",
      title: "일일 요약·다음 테스트 제안",
      body: "이미 수집된 값으로 요약과 다음 테스트 후보를 정리한다. API·보고서는 관찰 보조 수단이다.",
    },
    {
      id: "human-judge",
      title: "사람의 판단",
      body: "메시지·타깃 정렬·컷 구조의 최종 판단은 사람이 한다. 수치만으로 결론을 내리지 않는다.",
    },
    {
      id: "cut-revise",
      title: "메시지·컷 구조 수정",
      body: "통과한 가설만 다음 훅·증명·회수 장면 설계에 반영한다.",
    },
    {
      id: "same-criteria",
      title: "다음 게시물의 동일 기준 확인",
      body: "같은 측정 창과 같은 해석 경계로 다음 게시물을 다시 본다.",
    },
  ],
  measurementNote:
    "API, 분석 요약, 제안 문장은 관찰과 정리를 돕습니다. 메시지·타깃·컷 구조의 최종 판단은 사람이 합니다. 공개 메타로 확인되는 것은 조회·좋아요·댓글·공유·저장과 파생 반응률뿐입니다. 시청 국가, 완주율, 평균 시청 시간, 연령·성별 분포는 관리자 Analytics 전용이라 공개 API에 없으면 추정하지 않고 not exposed로 둡니다.",
  assetRoots: {
    targetResearch: "/content-learning/loom/target-research/",
    metrics: "/content-learning/loom/metrics/",
    cutFlow: "/content-learning/loom/cut-flow/",
    reports: "/content-learning/loom/reports/",
  },
  teaser: {
    label: "Content Learning Loop",
    title: "반응 신호를 다음 메시지·컷 설계로 연결",
    targetLine: "창작 타깃 · 20대 초반 여성",
    gapLine: "초기 톤·메시지 전개·컷 문법이 30–40대에 머문 간극을 정렬 보정",
    connectLine: "조회·좋아요 같은 반응 신호를 다음 메시지와 컷 구조 가설로 되돌린 학습 루프",
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
