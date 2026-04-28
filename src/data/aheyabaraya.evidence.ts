export const sqlPythonEvidencePreviews = [
  {
    title: "Actual decision trace",
    source: "actual_decision_trace_report.csv",
    description:
      "decision log, handoff, changelog를 previous state -> decision made -> current state -> KPI/gap으로 정리한 분석 테이블입니다.",
    columns: ["decision id", "previous state", "decision made", "current state", "KPI / gap"],
    rows: [
      [
        "pm_2026_03_31_kpi_backup",
        "backup과 monitoring이 하나의 evidence lane처럼 읽힐 혼재 가능성",
        "DB backup은 recovery, KPI export는 monitoring baseline으로 분리",
        "backup/reproducibility lane과 KPI snapshot lane을 따로 관리",
        "kpi snapshot availability / longer history window needed",
      ],
      [
        "pm_2026_04_05_dust_verify_metadata",
        "dust verify가 token display context와 fresh verify correction 기록을 보강할 필요가 있음",
        "ERC20 metadata snapshot, fresh verify correction, direct-send proof semantics 추가",
        "best-effort metadata를 남기되 direct-send proof는 value-neutral하게 유지",
        "pending funding / nonstandard token case history needed",
      ],
      [
        "pm_2026_04_09_real_domain_release_gate",
        "public release 판단이 demo 상태와 real-domain readiness를 섞을 수 있음",
        "real-domain release gate와 support/feedback/auth recovery blocker를 분리",
        "release 전 guardrail과 recovery path를 먼저 확인하는 상태로 전환",
        "release gate status / real usage validation needed",
      ],
    ],
  },
  {
    title: "KPI measurement design",
    source: "kpi_measurement_design_report.csv",
    description:
      "KPI snapshot, admin queue, DB backup, Vercel slot, referral readiness를 하나의 측정 설계 표로 묶었습니다.",
    columns: ["layer", "input signal", "modeled metric", "safe decision", "boundary"],
    rows: [
      [
        "KPI snapshot",
        "funding, review queues, trust ops, connectors",
        "latest metric_date / severity tie-break",
        "운영 baseline과 reporting input으로 사용",
        "growth trend나 market demand와는 별도로 해석",
      ],
      [
        "Admin work",
        "creator review, feedback proof, trust signal, connector queues",
        "open item counts + severity/follow-up mapping",
        "어떤 queue를 먼저 처리할지 판단",
        "marketing success/failure와는 별도로 해석",
      ],
      [
        "DB backup / Vercel slot / referral",
        "backup manifest, runtime slot, ref code/link/bind",
        "reproducibility, observability contract, referral readiness score",
        "복구 가능성, 관측 슬롯, future join key를 분리해 관리",
        "traffic, acquisition, invite efficiency와는 별도로 해석",
      ],
    ],
  },
  {
    title: "Referral measurement readiness",
    source: "referral_measurement_readiness.csv",
    description:
      "ref link, cookie capture, post-login/manual bind, UTM bridge를 향후 attribution join key로 설계했습니다.",
    columns: ["touchpoint", "implemented surface", "ready signal", "safe use", "interpretation boundary"],
    rows: [
      [
        "ref_code_generate",
        "POST /api/referral/code and dashboard referral card",
        "referral_link_ready",
        "shareable referral code can be reused as a measurement key",
        "share, click, signup, activation과는 별도 검증",
      ],
      [
        "ref_after_login_bind",
        "post-login referral binding",
        "referral_bind_ready",
        "valid code가 있으면 referral relationship을 붙일 수 있음",
        "conversion volume이나 channel efficiency와는 별도 검증",
      ],
      [
        "utm_ref_campaign_label_v1",
        "campaign_label = UTM campaign or referral code label",
        "campaign label bridge",
        "social/content report와 referral link를 같은 label로 맞출 수 있음",
        "현재 단계에서는 product attribution과 구분",
      ],
    ],
  },
  {
    title: "Attribution interpretation boundary",
    source: "attribution_claim_boundary_report.csv",
    description:
      "성과 해석 범위와, 어떤 real data가 생기면 다음 검증으로 넘어갈 수 있는지를 분리합니다.",
    columns: ["boundary area", "safe use", "interpretation boundary", "required next data"],
    rows: [
      [
        "referral touchpoint",
        "referral code/link/bind 구조가 준비되어 있음을 설명",
        "invite volume, signup, activation, channel performance",
        "click/session/login/bind event history by campaign label",
      ],
      [
        "social bridge",
        "별도 social report summary를 content/channel planning에 연결",
        "social-to-product causality",
        "landing event tracking with ref and campaign fields",
      ],
      [
        "product attribution",
        "event data가 생기기 전까지 attribution 판단을 보류하는 기준",
        "paid efficiency, conversion lift, retention improvement",
        "visit, signup, activation, completion, cost, revenue data",
      ],
    ],
  },
  {
    title: "Collaboration output matrix",
    source: "collaboration_tool_output_matrix.csv",
    description:
      "분석 결과를 Slack, Notion, Google Workspace, Excel/CSV가 각각 잘 읽는 단위로 변환하는 reporting 설계입니다.",
    columns: ["tool", "workspace object", "input data", "purpose", "boundary"],
    rows: [
      [
        "Slack",
        "weekly decision trace digest",
        "actual decision trace + decision packet + referral readiness",
        "watch item과 next action을 빠르게 push",
        "실제 조직 Slack 운영 성과와 구분되는 digest 설계",
      ],
      [
        "Notion / Google Sheets",
        "decision database / filterable matrix",
        "KPI design, decision trace, referral readiness, boundary report",
        "role, area, status, next action 기준으로 필터",
        "live sync와 구분되는 structured output 설계",
      ],
      [
        "Google Docs / Excel",
        "weekly decision brief / offline tracker",
        "portfolio brief + CSV reports",
        "narrative review와 offline 검토용 tracker 제공",
        "stakeholder adoption과 구분되는 review output 설계",
      ],
    ],
  },
] as const;

export const beforeAfterEvidenceCards = [
  {
    title: "First-signal positioning",
    decisionLogExcerpt:
      "Building got faster; first users, clear feedback, and reusable proof became the next operating focus.",
    before: "기능 소개와 project intro가 먼저 보이는 상태",
    change:
      "제품을 first users, clear feedback, reusable proof를 얻는 launch support loop로 재정렬",
    after: "first-signal problem, support, Good/Improve, proof reuse가 앞에 오는 설명 구조",
    kpi: "first-signal hypothesis / feedback quality / proof reuse readiness",
    boundary: "초기 유저 확보 성과와 구분되는 positioning decision trace",
    screenStatus: "decision log + changelog evidence",
  },
  {
    title: "Good / Improve core feedback",
    decisionLogExcerpt:
      "in-app feedback의 핵심은 Good / Improve 선택이다. 긴 텍스트와 외부 공유는 옵션이다.",
    before: "좋아요, 공유, 긴 리뷰, public proof가 한 흐름처럼 섞일 수 있는 상태",
    change: "Good/Improve는 core signal, public proof는 optional surface로 분리",
    after: "짧은 feedback completion과 proof pending state를 따로 관리",
    kpi: "feedback completion / proof pending / share fallback state",
    boundary: "social response를 product signal로 직접 치환하지 않음",
    screenStatus: "decision log + changelog evidence",
  },
  {
    title: "Trust and wallet boundary",
    decisionLogExcerpt:
      "wallet-adjacent users에게 login, wallet, public trust 설명이 섞이면 신뢰 경계가 흐려진다.",
    before: "wallet onboarding, support verification, public trust copy가 한 문맥에 섞임",
    change: "wallet onboarding, Trust public boundary, verified support policy, fallback을 분리",
    after: "public-safe contract와 internal/private route boundary를 구분",
    kpi: "trust signal queue / connector error / stale sync watch item",
    boundary: "trust readiness를 검토하기 위한 설계 근거",
    screenStatus: "decision log + changelog evidence",
  },
  {
    title: "KPI export vs DB backup",
    decisionLogExcerpt:
      "KPI snapshot은 운영 baseline, DB backup은 recovery/reproducibility evidence로 분리한다.",
    before: "backup, monitoring, growth evidence가 같은 데이터 관리 문맥에 놓일 수 있는 상태",
    change: "KPI/export와 backup/recovery 목적을 명시적으로 분리",
    after: "KPI snapshot은 운영 판단, DB backup은 재현성과 복구 가능성의 evidence로 유지",
    kpi: "kpi snapshot availability / backup reliability / export readiness",
    boundary: "backup은 product traction이나 acquisition performance와 구분되는 recovery evidence",
    screenStatus: "decision log + changelog evidence",
  },
] as const;

export const referenceDerivationRows = [
  {
    reference: "Solana fee / token account / CloseAccount",
    checked: "fee payer, token account, rent lamports recovery, small balance after activity",
    pattern: "소액 native token과 token account는 사용처가 없으면 방치되거나 정리 대상으로 남기 쉽다.",
    implication: "Dust를 reward-first보다 small support / product use framing으로 설명해야 한다.",
    output: "Dust mode, direct-send support semantics, wallet-adjacent user explanation",
    boundary: "잔여 자산 존재는 demand나 spend intent와 별도로 해석",
  },
  {
    reference: "Base gas / EVM ERC-20 transfer and holding record",
    checked: "L2 execution/security fee, ERC-20 transfer list, current token holding view",
    pattern: "잔여 token은 보이지만 실제 제품/서비스 소비로 이어졌는지는 별도 event가 필요하다.",
    implication: "wallet data observation과 product attribution을 분리해야 한다.",
    output: "KPI interpretation boundary, referral readiness, future event tracking requirement",
    boundary: "holding/transfer record는 product conversion과 별도로 해석",
  },
  {
    reference: "Virtual Protocol / ACP v1 Job / Memo / Evaluation structure",
    checked: "Job, Memo, escrow, phase transition, evaluation phase, completion phase, audit trail",
    pattern: "작업 완료 기록은 남지만 결과물 품질과 재사용 가능한 판단 이유는 별도 구조가 필요하다.",
    implication: "완료 여부보다 evaluation record와 feedback evidence를 앞에 두어야 한다.",
    output: "Good/Improve feedback, proof asset, quality/evidence layout",
    boundary: "ACP reference는 비교 근거로만 사용",
  },
  {
    reference: "X / Kaito reward-posting constraint",
    checked: "reward-first posting risk, incentive-linked posting constraint, value-first update rule",
    pattern: "보상형 CTA는 빠른 반응을 만들 수 있지만 플랫폼 정책과 메시지 품질 측면의 관리가 필요하다.",
    implication: "채널 운영은 incentive보다 value, update, visual entry point 중심이어야 한다.",
    output: "X-native hook, message iteration, optional public proof rule",
    boundary: "social metrics cannot be product attribution",
  },
  {
    reference: "14-country tokenomics sizing model",
    checked: "country pool, segment mix, LOW/BASE/HIGH scenario, served wedge sizing",
    pattern: "큰 market number는 assumption과 result를 분리해 좁은 시작 segment를 정하는 보조 자료로 다뤄야 한다.",
    implication: "market sizing은 campaign target 산정보다 시작 segment와 KPI hierarchy를 좁히는 보조 자료다.",
    output: "market ladder appendix, scenario/proxy guardrail, role-specific evidence",
    boundary: "sizing model은 validated market demand와 구분되는 scenario input",
  },
] as const;

export const creativeSignalCards = [
  {
    title: "X-native hook",
    signal: "Building got faster / first users / polite feedback haze",
    evidence: "Views 1.1K -> 2.1K, Watch Time 8.2h -> 18.3h, Completion 16.5% -> 28.3%",
    use: "빠른 피드에서 어떤 문제 훅과 문장이 먼저 읽히는지 조정",
    boundary:
      "creative 수치는 제품 전환 지표와 분리해 메시지와 visual hook 개선 근거로 활용합니다.",
  },
  {
    title: "visual entry point",
    signal: "character, short visual, product mood, one-image intro",
    evidence: "creative/work/aheya의 이미지, 영상, poster 자산",
    use: "텍스트 설명보다 먼저 멈춰 보게 만드는 시각 진입점 구성",
    boundary: "시각 반응은 product activation이나 demand proof와 구분해 해석합니다.",
  },
  {
    title: "message iteration",
    signal: "problem hook -> support flow -> feedback/proof explanation",
    evidence: "post hook, asset, target reader, next update 기준으로 재정리",
    use: "다음 콘텐츠에서 기능 설명, 문제 훅, visual hook 중 무엇을 밀지 결정",
    boundary: "channel signal과 product KPI는 별도 report에서만 연결합니다.",
  },
] as const;

export const collaborationWorkflowRows = [
  {
    tool: "Slack",
    object: "weekly decision trace digest / watch item",
    purpose: "새 decision row, KPI watch, next action을 짧게 push",
    output: "watch item digest",
    boundary: "실제 조직 Slack 운영 성과와 구분되는 digest payload 설계",
  },
  {
    tool: "Notion",
    object: "decision trace database",
    purpose: "source, reason, state change, KPI/gap, follow-up을 축적",
    output: "decision DB-style hub",
    boundary: "live API sync와 구분되는 DB-style documentation 구조",
  },
  {
    tool: "Google Sheets",
    object: "filterable KPI / decision / proxy matrix",
    purpose: "role, area, evidence status, referral readiness, next data 기준 필터",
    output: "filterable matrix tabs",
    boundary: "shared reporting-ready output이며 stakeholder adoption과 구분되는 review output 설계",
  },
  {
    tool: "Google Docs",
    object: "weekly decision brief",
    purpose: "CSV report를 면접/리뷰용 narrative brief로 변환",
    output: "weekly decision brief",
    boundary: "문서화 설계와 검토용 보고 구조를 보여주는 산출물",
  },
  {
    tool: "Excel/CSV",
    object: "offline decision tracker",
    purpose: "검토자가 필터 가능한 offline tracker로 근거 확인",
    output: "offline review tracker",
    boundary: "분석 output packaging이며 기존 evidence를 검토 가능하게 묶는 방식",
  },
] as const;


export const productEvidenceMedia = [
  {
    title: "Live product surface",
    src: "/aheya/aheyabaraya-homepage-2026-04-28.png",
    type: "image",
    caption: "현재 공개 가능한 AHEYABARAYA 제품 첫 화면입니다.",
  },
  {
    title: "Support flow for creator",
    src: "/aheya/aheya-corerail-creator.mp4",
    type: "video",
    caption: "support -> Good / Improve -> proof 흐름을 creator 관점에서 확인하는 영상입니다.",
  },
  {
    title: "Support flow for funder",
    src: "/aheya/aheya-corerail-funder.mp4",
    type: "video",
    caption: "wallet-adjacent support flow를 funder 관점에서 확인하는 영상입니다.",
  },
] as const;

export const dataEvidenceVisuals = [
  {
    title: "SQL / Python evidence preview",
    src: "/aheyabaraya/evidence/sql-python-proof.png",
    caption: "SQL querypack과 Python report builder가 KPI, decision trace, referral readiness, 해석 범위 report를 검토 가능한 산출물로 변환합니다.",
  },
  {
    title: "Google Workspace proof",
    src: "/aheyabaraya/evidence/google-workspace-proof.png",
    caption: "새 Google Doc과 native Google Sheets workspace로 생성한 검토용 evidence package입니다.",
  },
] as const;

export const collaborationEvidenceVisuals = [
  {
    title: "Notion decision hub",
    src: "/aheyabaraya/evidence/notion-decision-hub-proof.png",
    href: "https://www.notion.so/3504b00d63c2814ab8d5d73dac9299a6",
    caption: "Notion에 생성한 decision trace hub입니다. decision, current state, next action, source를 한 테이블로 봅니다.",
  },
  {
    title: "Google Doc brief",
    src: "/aheyabaraya/evidence/google-workspace-proof.png",
    href: "https://docs.google.com/document/d/1bIjcFd4GXqmrl0Yu_XyZzzBGrign_xyL7ayOVu-ANv4",
    caption: "Google Docs에 생성한 weekly decision brief 형식의 포트폴리오 검토 문서입니다.",
  },
  {
    title: "Google Sheets matrix",
    src: "/aheyabaraya/evidence/google-workspace-proof.png",
    href: "https://docs.google.com/spreadsheets/d/1fbRT3USA9EZ_DHUs0bEKPUeJQiB-Z0q1sbwuHFNuxpY",
    caption: "native Google Sheets로 import한 multi-tab KPI / decision / proxy / role matrix입니다.",
  },
  {
    title: "Slack digest payload",
    src: "/aheyabaraya/evidence/slack-digest-proof.png",
    href: "#collaboration",
    caption: "실제 Slack 운영 성과와 구분되는 watch item / next action digest payload입니다.",
  },
] as const;

export const creativeAnalyticsImages = [
  {
    title: "Before message iteration",
    src: "/aheyabaraya/evidence/x-video-before.png",
    caption: "2026-03-12 - 2026-03-30 기준 creative response baseline입니다.",
  },
  {
    title: "After message iteration",
    src: "/aheyabaraya/evidence/x-video-after.png",
    caption: "2026-03-24 - 2026-04-18 기준 message / visual hook 조정 후 채널 반응입니다.",
  },
] as const;

export const externalEvidenceLinks = [
  {
    label: "Notion Decision Hub",
    href: "https://www.notion.so/3504b00d63c2814ab8d5d73dac9299a6",
  },
  {
    label: "Google Doc Brief",
    href: "https://docs.google.com/document/d/1bIjcFd4GXqmrl0Yu_XyZzzBGrign_xyL7ayOVu-ANv4",
  },
  {
    label: "Google Sheets Matrix",
    href: "https://docs.google.com/spreadsheets/d/1fbRT3USA9EZ_DHUs0bEKPUeJQiB-Z0q1sbwuHFNuxpY",
  },
] as const;

export const roleReadingGuide = [
  {
    role: "PM / Product Ops",
    shows: "문제정의, 실제 의사결정, 상태 변화, 운영 guardrail",
    sections: "AHEYABARAYA Work Flow, Actual Decision Trace, KPI / SQL / Python Evidence System",
    doNotClaim: "실제 user growth, activation, retention 성과",
  },
  {
    role: "GTM / Market Research",
    shows: "reference research에서 GTM implication과 channel message를 도출한 흐름",
    sections: "Research 01/02, Problem Insight, GTM Reference Derivation, Channel / Creative Signal",
    doNotClaim: "채널 수치가 제품 유입이나 매출 성과를 만들었다는 주장",
  },
  {
    role: "Product Engineer (Marketing)",
    shows: "KPI/export, referral readiness, 해석 범위 report를 SQL/Python output으로 만든 구조",
    sections: "KPI / SQL / Python Evidence System, Decision Packet Sample, Collaboration Workflow",
    doNotClaim: "production analytics 운영 경험 또는 live dashboard adoption",
  },
  {
    role: "Platform / Community Ops",
    shows: "support, feedback, proof, trust boundary, admin queue를 운영 단위로 나눈 방식",
    sections: "Actual Decision Trace, Decision Trace Detail, Collaboration Workflow",
    doNotClaim: "실제 community scale 운영 성과",
  },
] as const;
