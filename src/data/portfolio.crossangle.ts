import type { HeroContent } from "@/data/portfolio";
import type {
  FlagshipShowcaseCard,
  OperatingLoopContent,
  RecruiterQuickReadContent,
  TainaiWorkCase,
} from "@/data/portfolio.tainai";
import { workCaseMap as tainaiWorkCaseMap } from "@/data/portfolio.tainai";

const adaptCase = (project: TainaiWorkCase, overrides: Partial<TainaiWorkCase> = {}): TainaiWorkCase => ({
  ...project,
  ...overrides,
});

const baseAheya = tainaiWorkCaseMap["aheya"];

export type CrossangleWorkCase = TainaiWorkCase;

export const siteTitle = "minnns / Xangle GTM 지원 포트폴리오";

export const heroTitleLines = [
  "Web3 리서치를 GTM 산출물로 전환한",
  "AHEYABARAYA 케이스.",
] as const;

export const heroContent: HeroContent = {
  eyebrow: "Xangle GTM 지원용 포트폴리오",
  title: heroTitleLines.join(" "),
  summary:
    "AHEYABARAYA를 하나의 Web3 프로젝트 케이스로 두고, 리서치에서 문제정의, 프로젝트 정보 구조, X/미디어 콘텐츠까지 전환한 흐름을 정리했습니다.",
  stageTitle: "블록체인 리서치 / 프로젝트 정보 구조화 / X·미디어 운영",
  ctas: [
    { label: "리서치 근거 보기", href: "#research-01", variant: "primary" },
    { label: "프로젝트 프로필 보기", href: "#project-package", variant: "secondary" },
  ],
  proofs: [
    "리서치: EVM/Base·Solana 소액 온체인 자산 / Virtual Protocol / ACP v1",
    "구조화: 문제정의 / 사용자 / 해결 구조 / 근거 / 업데이트 노트",
    "발행: X 포스트 / 짧은 훅 / 이미지·영상 콘텐츠",
  ],
  signals: [
    { label: "직무 연결", value: "리서치 / 프로젝트 정보 관리 / X 콘텐츠 / 미디어 업데이트" },
    { label: "출발점", value: "에어드롭·퀘스트 참여 경험과 지갑 기반 행동 관찰" },
    { label: "대표 케이스", value: "AHEYABARAYA 잔여 자산 소비 흐름 + agent 품질 평가 기록" },
  ],
};

export const web3ProductUsageNotesContent = {
  eyebrow: "Web3 Product Usage Notes",
  titleLines: ["Web3 사용 흐름을 직접 겪고", "리서치 질문으로 바꾼 기록"],
  summary:
    "claim·transfer, points/rewards, wallet residue, UX feedback 흐름을 직접 확인하며 사용자가 어디서 반복 행동을 하고, 어디서 실제 사용으로 이어지지 않는지 정리했습니다.",
  connection:
    "이 사용 맥락을 리서치 질문으로 바꾸고, AHEYABARAYA의 문제 정의, 프로젝트 정보 구조, X 콘텐츠 메시지로 연결했습니다.",
  cards: [
    {
      label: "On-chain Record",
      title: "지갑 단위 참여 흐름 확인",
      body: "LayerZero / Polyhedra의 claim·transfer 기록을 통해 지갑 단위의 참여 흐름을 확인했습니다.",
      tag: "claim / transfer",
      image: {
        src: "/crossangle/usage-notes/on-chain-record.webp",
        alt: "Blurred token transfer records used to observe on-chain participation flow.",
      },
      accent: "aqua" as const,
    },
    {
      label: "Reward UX",
      title: "반복 행동을 만드는 구조 관찰",
      body: "Grass / CUDIS / Backpack의 points, rewards, claim 구조를 사용자 반복 행동 관점에서 관찰했습니다.",
      tag: "points / rewards",
      image: {
        src: "/crossangle/usage-notes/reward-ux.webp",
        alt: "Cropped rewards and points UX table with sensitive values blurred.",
      },
      accent: "orange" as const,
    },
    {
      label: "Residual Asset",
      title: "소액 잔여 자산의 사용 장벽 확인",
      body: "EVM/Base/Solana 지갑에 남는 소액 자산과 gas·chain·use-case 장벽을 확인했습니다.",
      tag: "small wallet balance",
      image: {
        src: "/crossangle/usage-notes/residual-asset.webp",
        alt: "Cropped wallet balance overview showing a small residual asset amount.",
      },
      accent: "indigo" as const,
    },
    {
      label: "Product Feedback",
      title: "제품 피드백 흐름 경험",
      body: "Backpack Mobile UX feedback event 참여를 통해 Web3 제품 피드백 흐름을 확인했습니다.",
      tag: "UX feedback",
      image: {
        src: "/crossangle/usage-notes/product-feedback.webp",
        alt: "Cropped and blurred Backpack Mobile UX feedback event email screenshot.",
      },
      accent: "aqua" as const,
    },
  ],
};

export const jdCapabilityChips = [
  "블록체인 리서치",
  "데일리 콘텐츠",
  "프로젝트 정보 구조화",
  "X / 숏폼 콘텐츠",
  "미디어 업데이트 운영",
] as const;

export const recruiterQuickReadContent: RecruiterQuickReadContent = {
  eyebrow: "Xangle GTM 적합성",
  title: "첫 화면에서 보여야 할 업무 흐름",
  summary:
    "AHEYABARAYA를 하나의 Web3 프로젝트로 놓고, 리서치한 내용을 프로젝트 정보와 채널 콘텐츠로 바꾼 흐름입니다.",
  orderLabel: "JD 연결",
  order: ["Research", "Structure", "Publish", "Operate"],
  cards: [
    {
      label: "01 · Read",
      title: "블록체인 동향과 Web3 행동을 읽는다",
      body:
        "에어드랍·퀘스트·거래 이후 지갑에 남는 소액 native gas token과 project token이 숨김·방치·정리 대상으로 남기 쉬운지, 그리고 ACP v1은 어디까지 agent 작업 기록을 남기는지 조사했습니다.",
      accent: "aqua",
    },
    {
      label: "02 · Structure",
      title: "리서치를 사용 가능한 정보 구조로 바꾼다",
      body:
        "AHEYABARAYA를 카테고리, 주요 사용자, 문제, 해결 구조, 근거, 업데이트 노트로 재정리해 외부 독자가 빠르게 읽는 프로젝트 정보면으로 만들었습니다.",
      accent: "orange",
    },
    {
      label: "03 · Publish",
      title: "프로젝트 정보를 X 콘텐츠와 시각 자산으로 낸다",
      body:
        "문제정의와 프로젝트 구조를 X 훅, 짧은 문안, 소개 화면, X/숏폼용 이미지·영상 자산으로 전환했습니다.",
      accent: "indigo",
    },
    {
      label: "04 · Operate",
      title: "콘텐츠를 목적과 다음 판단 기준으로 관리한다",
      body:
        "공개 포스트 5개를 hook, 대상 독자, 사용 자산, 발행 목적, 다음 업데이트 기준으로 나눠 운영 가능한 단위로 정리했습니다.",
      accent: "aqua",
    },
  ],
};

export const operatingLoopContent: OperatingLoopContent = {
  eyebrow: "업무 증거",
  title: "research, structure, content assets",
  summary: "",
  process: [],
  chips: [
    "Research · EVM/Base·Solana 소액 온체인 자산 / Virtual Protocol / ACP v1",
    "Structure · 개요 / 사용자 / 문제 / 해결 구조 / 근거",
    "Publish · X 훅 / 짧은 문안 / 시각 자산",
    "Operate · 포스팅 목적 / 다음 판단 / 업데이트 노트",
  ],
  memos: [],
};

export const gtmWorkflowContent = {
  eyebrow: "GTM Work Flow",
  title: "Research → Insight → Publish",
  summary: "",
  cards: [
    {
      step: "01",
      label: "Research",
      title: "조사한 것",
      body:
        "Base/EVM의 gas fee와 ERC-20 transfer·holding record\nSolana fee, token account, CloseAccount 구조\n에어드랍·퀘스트·거래 이후 남는 소액 native gas token과 project token\nVirtual Protocol / ACP v1의 agent 작업 완료 기록",
      proof: "리서치 항목 → 소액 온체인 자산의 숨김·방치·정리 패턴, ACP v1 작업 기록",
      output: "목적 → Web3 행동을 제품·서비스 소비·후원 흐름으로 바꿀 수 있는지 확인",
      accent: "aqua" as const,
    },
    {
      step: "02",
      label: "Insight",
      title: "문제로 좁힌 것",
      body:
        "소액 온체인 자산은 제품·서비스 소비 효용으로 이어지기보다 숨김·방치·정리 대상으로 남기 쉬움\nACP v1은 Job Offering, Job, Memo, Smart Contract Escrow, Evaluation, Completion phase를 통해 작업 흐름을 기록함\nagent의 산출물 품질·판단 이유·재사용 가능한 평가 기록은 별도 구조가 필요함",
      proof: "뽑은 판단 → 방치되는 잔여 자산의 사용 공백, ACP v1 기록과 품질 평가의 차이",
      output: "적용 → AHEYABARAYA의 Dust mode(소액 후원) / project information / evidence 구조",
      accent: "orange" as const,
    },
    {
      step: "03",
      label: "Publish / Operate",
      title: "발행한 것",
      body:
        "AHEYABARAYA 잔여 자산 소비 흐름 서비스 및 소개 구조\nX 포스트 5개와 포스팅 목적\nX/숏폼용 이미지·영상 콘텐츠",
      proof: "산출물 → 프로젝트 노트, X 훅, 이미지·영상 자산",
      output: "운영 → 리서치 판단을 적용한 서비스를 채널 업데이트 단위로 전환",
      accent: "indigo" as const,
    },
  ],
};

export const researchInputContent = {
  eyebrow: "Research Basis",
  title: "산출물 뒤에 둔 리서치 판단",
  summary:
    "리서치는 전면 설명이 아니라 산출물의 근거로 남겼습니다. 각 카드에서는 무엇을 확인했고, 어떤 판단을 내렸고, AHEYABARAYA의 어느 산출물로 바뀌었는지만 보이게 정리했습니다.",
  cards: [
    {
      label: "2025.12~2026.04 · 소액 온체인 자산 / wallet UX / token utility",
      title: "소액 온체인 자산은 방치되기 쉽다",
      research:
        "원래 질문은 에어드랍·퀘스트·거래 이후 유저 지갑에 남는 소액 native gas token과 project token이 어디에 머무르고, 이것이 실제 제품·서비스 소비로 바뀔 수 있는가였습니다. 2025년 말 에어드롭 사용자·세그먼트 자료, Galxe·Zealy 작업 흐름, points farming 자료와 함께 Base/EVM gas fee·ERC-20 transfer record, Solana fee·token account·CloseAccount 구조를 봤습니다.",
      evidence:
        "Solana 공식 문서는 거래 수수료가 lamports 단위로 fee payer에게 부과된다고 설명하고, token account는 CloseAccount로 닫아 rent lamports를 회수할 수 있다고 설명합니다. Base 공식 문서는 transaction cost가 L2 execution fee와 L1 security fee로 구성된다고 설명합니다. Etherscan은 address 기준 ERC-20 transfer list와 current token holding 조회 방식을 제공합니다.",
      judgment:
        "작업 방식은 여전히 포인트, 클레임, 거래량, 브릿지, 스테이킹, 배지, 자격 조건으로 반복됩니다. 그러나 지갑에 남은 소액 native gas token과 project token은 거래소로 보내기엔 작고, 다시 온체인에서 쓰기엔 gas·체인·용도 장벽이 있어 숨김, 방치, 정리 대상으로 남기 쉽다고 판단했습니다.",
      applied:
        "AHEYABARAYA는 이 방치되는 자산을 Dust mode(소액 후원)로 재정의했습니다. EVM/Base와 Solana 지갑에 남은 소액 자산으로 제품·서비스를 써보고 후원하는 소비 흐름을 만들고, 작은 금액이 모이면 창작자·빌더에게는 첫 신호와 피드백이 되고 유저에게는 토큰을 실제로 써보는 경험이 된다고 봤습니다.",
      accent: "aqua" as const,
    },
    {
      label: "2026.03 · Virtual Protocol / ACP v1 작업 기록 비교",
      title: "완료 기록은 충분하지만 품질 판단은 별도 레이어가 필요하다",
      research:
        "Virtual Protocol / ACP v1을 별도 프로젝트 소개가 아니라 agent 작업 기록과 품질 판단의 차이를 보기 위한 비교 관찰로 사용했습니다. 공식 문서의 Agent, Job Offering, Job, Memo, Smart Contract Escrow, phase-based workflow, On-Chain Auditability를 중심으로 봤습니다.",
      evidence:
        "공식 문서상 ACP는 Request, Negotiation, Transaction, Evaluation, Completion phase를 기반으로 Job을 진행합니다. Job은 Buyer가 Provider의 Job Offering에서 작업을 시작할 때 생성되는 on-chain smart contract이며, Memo는 phase transition과 audit trail을 만드는 signed on-chain message입니다. ACP는 smart contract escrow, cryptographic signatures, on-chain auditability를 강조합니다.",
      judgment:
        "핵심은 완료 기록의 유무가 아니라, 완료된 작업의 정확도·성능·판단 이유·리스크를 다음 선택에 쓸 수 있는 재사용 가능한 평가 기록으로 바꾸는 것입니다. 따라서 AHEYABARAYA는 ACP 운영 콘솔이나 마켓플레이스 대체물이 아니라 작업 이후의 품질 해석 레이어로 좁혔습니다.",
      applied:
        "적용 방향은 AHEYABARAYA 기준의 구조화된 리뷰 기록, 판단 결과, 판단 이유, 평가 항목, 리스크 표시, 근거 링크, 재사용 가능한 평가 기록으로 정리했습니다.",
      accent: "indigo" as const,
    },
    {
      label: "Appendix · 2026.01~03 · X 콘텐츠 운영 제약",
      title: "보상형 CTA보다 가치 중심 업데이트가 안전하다",
      research:
        "X 피드백 리스크 리포트, Kaito/X API 제한 맥락, 창작자·빌더 대상 메시지 기준을 함께 보고 X에서 어떤 방식으로 프로젝트를 소개해야 하는지 정리했습니다.",
      evidence:
        "X 운영 리스크 리서치는 보상과 게시 행동을 직접 묶는 방식을 high risk로 분류하고, 선택적 공유 + 가치 중심 패턴을 low risk로 둡니다. Kaito 사례는 X 위에서 reward-first posting과 incentive-linked API use가 플랫폼 리스크를 가질 수 있음을 확인한 보조 근거로만 사용했습니다.",
      judgment:
        "AHEYABARAYA의 X 포스팅은 보상형 social farming이 아니라 문제, 가치, 시각 자산 중심으로 가야 한다고 판단했습니다.",
      applied:
        "실제 X 포스트 5개를 훅, 대상 독자, 사용 자산, 콘텐츠 가설, 다음 업데이트 기준으로 정리했습니다.",
      accent: "orange" as const,
    },
    {
      label: "Appendix · 2026.02~04 · 14개국 토큰 모델 가정",
      title: "성과가 아니라 tokenomics sizing basis",
      research:
        "토큰 모델과 초기 시장 범위를 과장 없이 잡기 위해 BR, ID, IN, JP, KR, NG, PH, PK, SG, TH, TR, TW, US, VN 14개국을 나눠 봤습니다. CoC/Core/Total pool, segment mix, LOW/BASE/HIGH 시나리오를 두고 Pool(users) x Segment mix share 방식으로 계산했습니다.",
      evidence:
        "Phase3 Total BASE 23.15M, Phase0 Core BASE 4.63M, Phase1 CoC BASE 84.2K로 모델링했습니다. DataReportal, TRM, Similarweb 기반 proxy와 segment mix를 사용했고, 일부 segment share와 funnel 변수는 명시적으로 가정으로 분리했습니다.",
      judgment:
        "이 숫자는 수요 검증이나 성과가 아니라 토큰 모델과 시작 시장 범위를 좁히기 위한 기준으로만 써야 한다고 봤습니다.",
      applied:
        "공개 포트폴리오에서는 주 흐름이 아니라 appendix에만 남겨, 숫자를 과장하지 않고 가정과 성과를 분리하는 보조 근거로 사용했습니다.",
      accent: "orange" as const,
    },
  ],
  constraint: {
    label: "근거 사용 기준",
    title: "기술 관찰은 작업 기록과 품질 판단의 차이를 설명할 때만 사용",
    body:
      "Virtual Protocol / ACP v1의 세부 작업 구조는 공개 포트폴리오의 핵심 근거로 내세우지 않았습니다. 이 자료는 완료 기록은 충분하지만 품질 해석은 별도라는 판단을 뒷받침하는 보조 근거로만 사용했습니다.",
  },
};

export const gtmOutputContent = {
  eyebrow: "GTM Output Samples",
  title: "AHEYABARAYA를 리서치·정보·콘텐츠 산출물로 재구성",
  summary:
    "AHEYABARAYA를 하나의 Web3 프로젝트로 놓고, 리서치 브리프, 프로젝트 정보 업데이트, X/미디어 콘텐츠 패키지로 정리했습니다.",
  cards: [
    {
      label: "데일리 리서치 브리프",
      title: "시장 신호를 짧은 브리프로 압축",
      body:
        "시장/사용자 행동 리서치를 긴 배경 설명이 아니라, 프로젝트 판단과 콘텐츠 각도로 바로 쓰이는 단위로 정리했습니다.",
      rows: [
        "주제: 창작자·빌더의 첫 유저·피드백 확보 문제",
        "핵심 인사이트: 만드는 속도보다 첫 유저·피드백·증거 확보가 느림",
        "리서치 축: 소액 온체인 자산 활용 / ACP v1 작업 기록",
        "콘텐츠 전환: 프로젝트 노트 + X 훅 + 시각 자산",
      ],
      accent: "aqua" as const,
    },
    {
      label: "데일리 콘텐츠 운영 샘플",
      title: "리서치 신호를 하루 업데이트로 바꾸는 방식",
      body:
        "발행 성과가 아니라, Xangle의 데일리 콘텐츠 업무에 맞춰 리서치 신호를 짧은 브리프와 채널 업데이트로 바꾸는 샘플입니다.",
      rows: [
        "Signal: 지갑에 남은 소액 native gas token과 project token은 방치되기 쉬움",
        "Brief: 방치되는 잔여 자산을 제품·서비스 소비와 소액 후원 신호로 바꿀 수 있는가",
        "X hook: 지갑에 남은 소액 자산도 제품을 써보는 신호가 될 수 있을까",
        "Update: Dust mode(소액 후원) 데모 클립 + 프로젝트 한 줄 설명 + 다음 포스트 기준",
      ],
      accent: "orange" as const,
    },
    {
      label: "프로젝트 정보 업데이트",
      title: "프로젝트 정보를 읽히는 구조로 정리",
      body:
        "기능 소개를 길게 늘어놓지 않고, 외부 독자가 빠르게 읽을 수 있는 프로젝트 정보 구조로 재정리했습니다.",
      rows: [
        "Overview: 공개된 데모를 첫 유저·피드백·재사용 가능한 증거 흐름으로 연결",
        "카테고리: Web3 효용 / 창작자·빌더 초기 반응 / agent 품질 평가 케이스",
        "Users: 창작자·빌더 / 지갑 기반 참여자 / agent builder",
        "Evidence: 문제정의 리서치 + Virtual Protocol / ACP v1 비교 관찰 + X 발행 기준",
      ],
      accent: "indigo" as const,
    },
    {
      label: "X / 미디어 콘텐츠 패키지",
      title: "짧은 문장과 시각 자산으로 업데이트",
      body:
        "실제 공개 포스트 5개를 단순 링크가 아니라, hook, 독자, 사용 자산, 콘텐츠 가설, 다음 업데이트 기준으로 나눴습니다.",
      rows: [
        "Hook: first users / Building got faster / polite feedback haze / real utility on-chain / 추가 공개 업데이트",
        "Audience: Web3 builder, AI-native 창작자, 초기 참여자",
        "Asset: intro surface / X용 visual / agent 품질 평가 visual",
        "운영 기준: 보상형 CTA 배제, 가치 중심 포스트",
      ],
      accent: "orange" as const,
    },
  ],
  profileSample: {
    label: "프로젝트 정보면 샘플",
    title: "AHEYABARAYA 프로젝트 정보면 샘플",
    summary:
      "AHEYABARAYA를 외부 독자가 빠르게 이해할 수 있는 프로젝트 정보 구조로 압축한 결과입니다.",
    fields: [
      { label: "Category", value: "Web3 효용 / 창작자·빌더 초기 반응 / agent 품질 평가 케이스" },
      { label: "One-line", value: "에어드랍·퀘스트·거래 이후 지갑에 방치되기 쉬운 소액 온체인 자산을 Dust mode(소액 후원)로 제품·서비스 소비·후원·피드백 흐름에 연결하는 Web3 프로젝트" },
      { label: "Primary users", value: "AI-native builder / 지갑 기반 참여자 / agent builder" },
      { label: "Problem", value: "만드는 속도는 빨라졌지만 첫 유저, 명확한 피드백, 다시 쓸 수 있는 증거 확보는 느림" },
      { label: "Solution", value: "방치 자산 기반 Dust mode(소액 후원) + 제품·서비스 사용·후원 + 좋았던 점/개선할 점 피드백 + agent 품질 평가 기록" },
      { label: "Evidence", value: "문제정의 리서치 / Virtual Protocol / ACP v1 비교 관찰 / X 발행 기준" },
      { label: "Update note", value: "기능 설명보다 실제 사용 효용, 피드백, agent 품질 판단 중심으로 외부 설명을 재정렬" },
    ],
  },
  xContentPackage: {
    label: "X 콘텐츠 패키지",
    title: "실제 포스트를 운영 단위로 재정리",
    summary:
      "좋아 보이는 포스트를 나열하지 않고, 각 포스트의 목적, 사용한 신호, 다음 판단 기준을 붙였습니다.",
    rows: [
      {
        post: "01",
        hook: "first users / feedback / trust",
        purpose: "프로토타입 이후 첫 유저와 피드백이 막히는 문제를 먼저 읽히게 하기",
        asset: "AHEYABARAYA intro surface",
        next: "문제 인식형 훅을 계속 밀지, 기능 설명으로 전환할지 판단",
      },
      {
        post: "02",
        hook: "real utility on-chain",
        purpose: "보상형 유입이 아니라 함께 만들자는 낮은 마찰 CTA로 발행",
        asset: "on-chain utility copy",
        next: "지갑 기반 참여자 메시지가 builder 메시지와 충돌하지 않는지 점검",
      },
      {
        post: "03",
        hook: "polite feedback haze",
        purpose: "피상적 반응보다 다음 배포로 이어지는 피드백 문제 제기",
        asset: "demo / proof narrative",
        next: "좋았던 점/개선할 점 피드백 구조를 더 직접적으로 보여줄지 판단",
      },
      {
        post: "04",
        hook: "Building got faster",
        purpose: "짧은 문제 훅과 시각적 진입점으로 launch 고립감을 먼저 읽히게 하기",
        asset: "short copy + visual",
        next: "문제 훅, 시각 훅, 기능 훅 중 어느 쪽을 다음 콘텐츠로 밀지 판단",
      },
    ],
  },
  copyTransform: {
    label: "리서치 → 문안",
    title: "리서치 문장을 외부 메시지로 바꾼 예시",
    summary:
      "리서치 결과가 실제 문안과 산출물로 바뀐 지점을 보여주기 위한 before / after입니다.",
    rows: [
      {
        source: "빌드는 빨라졌지만 첫 유저와 피드백 확보는 느리다",
        output: "Building got faster. Marketing didn’t.",
        use: "Hero hook / X opening",
      },
      {
        source: "좋아요·댓글은 많아도 builder가 다시 쓸 증거로 남기 어렵다",
        output: "first users, clear feedback, reusable proof",
        use: "Project problem / profile summary",
      },
      {
        source: "Airdrop/quest 행동은 참여를 만들지만 장기 retention은 약할 수 있다",
        output: "보상형 CTA 대신 가치 중심 포스트",
        use: "X operating rule",
      },
      {
        source: "Virtual Protocol / ACP v1은 Job과 Memo 기반 작업 기록을 남기지만 품질 해석은 별도다",
        output: "완료 기록은 남지만 품질은 별도로 해석해야 한다",
        use: "Agent 품질 평가 설명",
      },
    ],
  },
  marketBasis: {
    label: "Tokenomics / Market Basis",
    title: "14개국 market ladder는 성과가 아니라 시작 범위",
    summary:
      "시장 수치는 성과처럼 말하지 않고, 어떤 시장을 먼저 좁혀볼지 정하는 기준으로만 사용했습니다.",
    bars: [
      { label: "Broad reachable", display: "23.15M", value: 100, note: "14개국 넓은 도달 가능 풀" },
      { label: "Core pool", display: "4.63M", value: 20, note: "초기 핵심 사용자 풀" },
      { label: "Served wedge", display: "84.2K", value: 4, note: "의도적으로 좁힌 시작 시장" },
    ],
  },
  opsFlow: {
    label: "업데이트 운영 흐름",
    title: "리서치가 채널 업데이트로 바뀌는 순서",
    body:
      "소스 확인, 리서치 메모, 프로젝트 정보 업데이트, X 포스트 초안, 비주얼 자산 매칭을 하나의 운영 단위로 묶었습니다.",
    steps: [
      "자료 확인",
      "리서치 메모",
      "프로젝트 정보 업데이트",
      "X 포스트 초안",
      "비주얼 자산 매칭",
      "업로드 체크",
    ],
  },
  koreaAngle: {
    label: "한국 시장 메시지",
    title: "한국 시장에 읽히게 바꾸는 기준",
    body:
      "AHEYABARAYA는 기술 설명보다 '왜 지금 이 프로젝트를 봐야 하는가'가 먼저 읽혀야 했습니다. 그래서 토큰·퀘스트 행동, builder의 첫 신호 문제, agent 품질 평가 문제를 한국 독자가 이해하기 쉬운 문제-해결 구조로 압축했습니다.",
    points: ["신뢰 가능한 요약", "프로젝트 핵심 정보", "짧은 채널 문안", "미디어 자산 연결"],
  },
};

export const flagshipIntro = {
  eyebrow: "AHEYABARAYA Project Structure",
  title: "AHEYABARAYA를 읽히는 구조로 정리",
  oneLiner:
    "Web3 유저의 토큰·행동 패턴을 창작자·빌더의 첫 유저, 피드백, 다시 쓸 수 있는 증거로 연결하고, AI agent 영역에서는 완료 여부와 결과물 품질 평가를 분리하려 한 프로젝트입니다.",
  summary:
    "앞단의 리서치가 실제로 어떻게 프로젝트 설명 구조로 옮겨졌는지를 보여주는 섹션입니다.",
  summaryPoints: [
    "builder problem: 빠르게 만들 수 있지만 첫 유저, 첫 피드백, 초기 증거를 얻기 어렵다",
    "agent problem: 완료 여부는 남지만 결과물 품질과 재사용 가능한 평가 기록은 약하다",
    "output: 프로젝트 소개 구조 / X 포스팅 / 데모 클립 / 시각 자산",
  ],
  ctaLabel: "Project Profile 보기",
  ctaHref: "#project-package",
  statusLabel: "핵심 포인트",
  statusValue: "Web3 관심과 리서치를 builder 초기 반응, agent 품질 평가 기록, 소개 문안, X 방향, 시각 자산까지 한 흐름으로 묶었습니다.",
};

export const additionalCreativeLinks = [
  {
    label: "AHEYABARAYA 크리에이티브 상세",
    href: "/creative/work/aheya",
    kind: "site" as const,
    accent: "aqua" as const,
  },
  {
    label: "ADSB 숏폼 제작 상세",
    href: "/creative/work/adsb",
    kind: "site" as const,
    accent: "orange" as const,
  },
  {
    label: "추가 크리에이티브 작업",
    href: "/creative",
    kind: "site" as const,
    accent: "indigo" as const,
  },
];

export const adsbSupportingProof = {
  eyebrow: "Supporting Proof",
  title: "보조 증거 : 숏폼 기획 및 리서치 writing",
  summary:
    "CrossAngle GTM의 핵심 증거는 AHEYABARAYA입니다. ADSB와 SFTI-CMU는 하단 보조 증거로만 두어, 리서치와 브랜드 해석을 짧은 콘텐츠·읽히는 문서 구조로 바꾸는 역량을 보완합니다.",
  label: "ADSB / Andersson Bell",
  period: "2025.09 - 2025.11",
  caseTitle: "브랜드 무드와 타깃 감성을 GenAI 숏폼 콘셉트로 전환",
  body: "ADSB / Andersson Bell 산학협력 프로젝트에서 맡은 역할과 제작 범위를 아래 4개 기준으로 정리했습니다.",
  points: [
    "3인 팀 프로젝트에서 브랜드 숏폼의 주요 기획 및 이미지·영상 프롬프트 설계 담당",
    "브랜드 리서치와 실무진 피드백을 바탕으로 초기 훅, 모티프, 장면 구조, 무드보드 방향성 기획",
    "분산된 시각 방향을 정리하고, 고정 앵글 중심의 스토리보드와 컷 시퀀스로 재구성해 약 15초 분량의 숏폼 완성",
    "Midjourney, Nano Banana, Kling, Photoshop을 활용해 이미지 시안 제작, 동작 보정, 영상화 진행",
  ],
  caveat: "메인 직무 증거가 아니라, 콘텐츠 제작·피드백 반영·시각 자산화 능력을 보완하는 자료입니다.",
  media: {
    src: "/adsb/adsb-result-vid.mp4",
    poster: "/adsb/adsb-cover.webp",
  },
  detailHref: "/creative/work/adsb",
  reelHref: "https://www.instagram.com/reel/DRvZIP1EosJ/?igsh=c3Z3ZzFxN25zN205",
} as const;

export const sftiSupportingProof = {
  label: "SFTI-CMU",
  period: "2025.05 - 2025.06",
  caseTitle: "브랜드 정체성과 GenAI 시각 콘텐츠 구조화",
  body:
    "브랜드 정체성과 생성형 AI 시각 콘텐츠의 관계를 주제로 연구 초안을 작성하고, 자료 조사·논지 구성·피드백 반영을 거쳐 연구 문서 구조를 정리했습니다.",
  points: [
    "브랜드 정체성과 생성형 AI 시각 콘텐츠의 관계를 주제로 연구 초안 작성",
    "자료 조사, 논지 구성, 피드백 반영을 거쳐 연구 문서 구조를 정리",
    "복잡한 주제를 읽히는 글 구조로 바꾸는 리서치 writing 경험으로 활용",
  ],
  caveat: "Web3 리서치 증거가 아니라, 복잡한 주제를 구조화해 읽히는 글로 바꾸는 보조 자료입니다.",
  image: {
    src: "/sfti/result.webp",
    alt: "SFTI-CMU research poster on AI-generated emotional content strategy for niche fashion brands.",
  },
  detailHref: "/creative/work/sfti-cmu",
} as const;

export const flagshipShowcaseCards: FlagshipShowcaseCard[] = [
  {
    src: "/aheya/lane-panels.webp",
    alt: "AHEYABARAYA creator and founder utility structure screenshot.",
    label: "Builder utility",
    title: "Dust mode(소액 후원)로 방치 자산을 제품·서비스 후원에 쓰는 흐름",
    body:
      "에어드랍·퀘스트·거래 뒤 지갑에 남은 소액 온체인 자산을 실제 제품·서비스 사용, 소액 후원, 좋았던 점/개선할 점 피드백으로 연결하려 했습니다.",
    fit: "contain",
  },
  {
    src: "/aheya/home-hero.webp",
    alt: "AHEYABARAYA homepage hero screenshot.",
    label: "Agent 품질 평가",
    title: "완료 기록 이후의 재사용 가능한 품질 기록",
    body:
      "작업 완료 여부만 보는 대신 agent 평가, 판단 근거, 재사용 가능한 품질 기록으로 확장했습니다.",
    fit: "contain",
  },
  {
    src: "/aheya/creator.webp",
    alt: "AHEYABARAYA creator marketing asset.",
    label: "프로젝트 소개",
    title: "프로젝트 소개와 상세 구조",
    body:
      "프로젝트를 외부에서 읽히는 소개면과 상세면으로 정리하고, 핵심 경계가 한 번에 드러나게 맞췄습니다.",
    fit: "contain",
  },
];

export const marketingTrackContent = {
  eyebrow: "Content / Creative / X",
  title: "프로젝트를 X에서 읽히는 문장과 시각 자산으로 번역",
  summary:
    "기능 설명만으로는 첫 반응을 만들기 어렵다고 보고, AHEYABARAYA를 짧은 X 문안, 썸네일형 이미지, 짧은 영상 자산으로 다시 번역했습니다. 아래 X 포스팅은 원문과 당시 발행 기준을 대조해 콘텐츠 가설과 발행 목적까지 함께 정리했습니다.",
  ctaLabel: "Project Profile 보기",
  ctaHref: "#project-package",
};

export const marketingSourceNotes = [
  {
    label: "2026-01 · X feedback risk",
    body:
      "RT·댓글·팔로우 보상형 문장을 피하고, X에서는 가치 중심 CTA와 자발적 공유만 남기는 기준을 세웠습니다.",
    accent: "aqua" as const,
  },
  {
      label: "2026-03 · 창작자·빌더 런칭 문안 정리",
    body:
      "메커니즘 설명보다 builder가 바로 느끼는 결과, 즉 첫 유저·피드백·증거를 먼저 말하는 방향으로 문안을 정리했습니다.",
    accent: "orange" as const,
  },
  {
    label: "2026-03 · growth ops playbook",
    body:
      "X는 넓게 뿌리는 홍보 채널이 아니라 관찰, 증거, 포스트, 다음 답변으로 이어지는 창작자·빌더 중심 GTM 루프의 표면으로 설정했습니다.",
    accent: "indigo" as const,
  },
];

export const marketingProofCards = [
  {
    label: "소개 포스트",
    title: "AHEYABARAYA 한 장 소개",
    oneLiner:
      "AHEYABARAYA가 무엇인지 가장 짧게 보여주는 소개면입니다. 복잡한 설명보다 먼저 프로젝트의 대상, 문제, 구조가 읽히도록 두었습니다.",
    src: "/aheya/home-hero.webp",
    alt: "AHEYABARAYA intro surface.",
    fit: "contain" as const,
    href: "#project-package",
    accent: "aqua" as const,
    year: "2026",
  },
  {
    label: "보조 포스팅",
    title: "X용 시각 진입점",
    oneLiner:
      "서비스 기능을 바로 설명하기보다 피드에서 먼저 멈춰 보게 만드는 시각 진입점을 테스트한 공개 채널 자산입니다.",
    src: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
    alt: "AHEYABARAYA X visual post poster.",
    fit: "contain" as const,
    href: "https://x.com/minnns_aheya/status/2034643089806217398?s=46",
    accent: "indigo" as const,
    year: "2026",
  },
  {
    label: "공개 실험",
    title: "Short visual 실험",
    oneLiner:
      "빠르게 지나가는 피드에서 짧은 훅과 프로젝트 인지가 먼저 읽히는지 보기 위한 대표 시각 자산입니다.",
    src: "/appendix/bluegarage/aheya/tiger-zodiac.webp",
    alt: "AHEYABARAYA short visual experiment still.",
    fit: "contain" as const,
    href: "/creative/work/aheya",
    accent: "orange" as const,
    year: "2026",
  },
];

export const xPostingLinks = [
  {
    label: "X 포스트 01",
    href: "https://x.com/minnns_aheya/status/2033738008516825288?s=46",
    date: "2026-03-17",
    title: "First users gap",
    src: "/aheya/home-hero.webp",
    alt: "AHEYABARAYA project overview visual used with X posting evidence.",
    fit: "contain" as const,
    sourceSignal: "first users, first feedback, first trust",
    original:
      "You built it.\n\nNow you need first users,\nfirst feedback,\nand first trust — without burning even more just to get noticed.\n\nThat is the gap I built AHEYA for.",
    testPurpose:
      "• 기능 설명보다 prototype 이후 막히는 launch bottleneck을 먼저 보여주는 콘텐츠 가설",
    sourceBasis:
      "• 결과 우선 문안\n• 첫 유저·피드백 확보 방향\n• trust gap 메시지 반영",
    note:
      "• prototype 이후 first users, feedback, trust가 막히는 문제를 전면에 둔 소개형 포스트",
    accent: "aqua" as const,
    featuredOnMain: true,
  },
  {
    label: "X 포스트 02",
    href: "https://x.com/minnns_aheya/status/2037465808524460467?s=20",
    date: "2026-03-27",
    title: "추가 공개 업데이트",
    src: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
    alt: "AHEYABARAYA additional X post evidence.",
    fit: "contain" as const,
    sourceSignal: "추가 공개 X 포스트",
    original: "",
    testPurpose:
      "• 추가 공개 포스트를 원문 기준으로 함께 확인",
    sourceBasis:
      "• 실제 공개 링크 기준\n• 메인 X 포스팅 5개 구성에 포함",
    note:
      "• 추가 공개 포스트 원문 확인용 항목",
    accent: "indigo" as const,
    featuredOnMain: true,
  },
  {
    label: "X 포스트 03",
    href: "https://x.com/minnns_aheya/status/2037466007321936159?s=46",
    date: "2026-03-27",
    title: "Launch loneliness",
    src: "/appendix/bluegarage/aheya/tiger-zodiac.webp",
    alt: "AHEYABARAYA short visual used with X posting evidence.",
    fit: "contain" as const,
    sourceSignal: "Building got faster",
    original:
      "Building got faster.\n\nBut the moment your prototype is live… still feels lonely.",
    testPurpose:
      "• 긴 설명 대신 짧은 문제 훅과 시각 자산 사용\n• launch 이후 고립감을 첫 유저·피드백 문제로 전환",
    sourceBasis:
      "• hero hook\n• builder bottleneck\n• evidence-post loop 반영",
    note:
      "• build 속도와 launch 고립감의 간극을 한 문장 훅으로 압축한 포스트",
    accent: "aqua" as const,
    featuredOnMain: true,
  },
  {
    label: "X 포스트 04",
    href: "https://x.com/minnns_aheya/status/2039759891926286522?s=46",
    date: "2026-04-02",
    title: "Feedback haze",
    src: "/aheya/lane-panels.webp",
    alt: "AHEYABARAYA feedback and proof structure visual used with X posting evidence.",
    fit: "contain" as const,
    sourceSignal: "polite feedback haze",
    original:
      "Shipped the demo. Replies rolled in — classic “looks good” wave.\n\nThe one real edge case is still hiding in the weeds. Next deploy is already queued.",
    testPurpose:
      "• 단순 홍보가 아니라 demo 이후 피드백의 질을 전면에 둔 콘텐츠 가설\n• edge case와 next deploy 흐름 강조",
    sourceBasis:
      "• before -> signal -> changed -> learning\n• evidence compounding 구조 반영",
    note:
      "• demo 이후 피상적 피드백을 다음 배포와 개선 루프로 연결한 포스트",
    accent: "orange" as const,
    featuredOnMain: true,
  },
  {
    label: "X 포스트 05",
    href: "https://x.com/minnns_aheya/status/2042684370486727146?s=46",
    date: "2026-04-10",
    title: "On-chain utility CTA",
    src: "/aheya/creator.webp",
    alt: "AHEYABARAYA creator utility visual used with X posting evidence.",
    fit: "contain" as const,
    sourceSignal: "real utility on-chain",
    original:
      "Hey web3, builders, ct\n\ni started Aheya Baraya from absolute zero too. no big idea, just a flame and a feeling.\n\nlet’s build together, grow together, and bring real utility on-chain.",
    testPurpose:
      "• builder의 출발점 공감\n• Web3 utility 메시지\n• 낮은 마찰의 참여 CTA",
    sourceBasis:
      "• 보상형 게시 회피\n• 가치 중심 CTA\n• 창작자·빌더 중심 루프 반영",
    note:
      "• Web3, builders, CT를 향해 zero-to-build 공감과 on-chain utility 참여 메시지를 함께 둔 포스트",
    accent: "indigo" as const,
    featuredOnMain: true,
  },
];

export const mainEvidenceContent = {
  mapping: {
    eyebrow: "Research Mapping",
    title: "리서치 항목을 판단과 산출물로 연결",
    summary: "",
    items: [
      {
        label: "Research 01",
        title: "소액 온체인 자산과 제품·서비스 소비 가능성",
        data:
          "Base/EVM gas fee와 ERC-20 transfer·holding record, Solana fee structure와 token account / CloseAccount, 2025년 말 에어드롭 사용자·세그먼트 자료, Galxe·Zealy 작업 흐름",
        insight:
          "에어드랍·퀘스트·거래 이후 남은 소액 native gas token과 project token은 거래소로 보내기엔 작고 다시 온체인에서 쓰기엔 애매해 방치되기 쉽다",
        applied: "적용: 반복 작업 이후 방치되는 잔여 자산을 Dust mode(소액 후원)의 제품·서비스 소비 -> 소액 후원 -> 피드백 구조로 전환",
        accent: "aqua" as const,
      },
      {
        label: "Research 02",
        title: "Virtual Protocol / ACP v1 작업 기록 비교",
        data:
          "ACP v1 Agent, Job Offering, Job, Memo, Smart Contract Escrow, Evaluation, Completion phase, On-Chain Auditability",
        insight: "ACP v1은 Job과 Memo를 통해 요청·협상·거래·평가·완료 흐름을 기록하지만, 산출물 품질을 판단 이유와 재사용 가능한 평가 기록으로 바꾸는 레이어는 별도로 필요하다",
        applied: "적용: 구조화된 리뷰 기록 / 판단 결과 / 판단 이유 / 평가 항목 / 리스크 표시 / 근거 링크 / 재사용 가능한 평가 기록",
        accent: "indigo" as const,
      },
    ],
  },
  problem: {
    eyebrow: "Problem Insight",
    title: "조사한 내용을 AHEYABARAYA 문제정의로 전환",
    summary:
      "리서치에서 발견한 빈틈을 제품 구조와 콘텐츠 운영 기준으로 연결했습니다.",
    items: [
      {
        label: "01 · Utility gap",
        title: "토큰은 받지만, 실생활의 즉각적인 효용으로 체감되기 어렵다",
        body:
          "에어드랍·퀘스트·거래 이후 지갑에는 소액 native gas token과 project token이 남습니다. 하지만 이 자산은 거래소로 보내기엔 작고 다시 온체인에서 쓰기엔 gas·체인·용도 장벽이 있어 숨김, 방치, 정리 대상으로 남기 쉽다고 봤습니다.",
        accent: "aqua" as const,
      },
      {
        label: "02 · Quality gap",
        title: "agent 완료 기록만으로는 품질 판단이 부족하다",
        body:
          "Virtual Protocol / ACP v1에서는 Job과 Memo 기반 작업 흐름이 남지만, 정확도·성능·재사용 가능성을 다음 의사결정에 쓸 수 있는 평가 기록으로 바꾸는 레이어는 별도로 필요하다고 봤습니다.",
        accent: "indigo" as const,
      },
    ],
  },
  solution: {
    eyebrow: "Applied Case",
    title: "AHEYABARAYA에 적용한 것",
    oneLiner:
      "리서치에서 뽑은 문제를 AHEYABARAYA의 제품 구조, 프로젝트 소개, X/미디어 콘텐츠로 옮겼습니다.",
    points: [
      "에어드랍·퀘스트·거래 이후 방치되기 쉬운 소액 온체인 자산을 Dust mode(소액 후원)의 제품·서비스 소비·후원 흐름으로 재해석",
      "agent 작업 완료 기록 위에 구조화된 리뷰, 판단 이유, 재사용 가능한 평가 기록을 더하는 방향으로 정리",
      "문제정의와 프로젝트 구조를 X 포스팅, 짧은 훅, 이미지·영상 콘텐츠로 전환",
    ],
    ctaLabel: "Project Profile 보기",
    ctaHref: "#project-package",
    visuals: [
      {
        label: "Project surface",
        title: "문제와 구조가 먼저 읽히는 소개면",
        src: "/aheya/home-hero.webp",
        alt: "AHEYABARAYA homepage hero screenshot.",
        fit: "contain" as const,
      },
      {
        label: "Builder utility",
        title: "창작자·빌더와 지원 신호 연결",
        src: "/aheya/lane-panels.webp",
        alt: "AHEYABARAYA creator and founder utility structure screenshot.",
        fit: "contain" as const,
      },
    ],
  },
  content: {
    eyebrow: "X Posting / Video Content",
    title: "대표 X 포스트 5개와 영상 콘텐츠",
    summary:
      "원문이 확인되는 X 포스트 중 이미지·링크·프로젝트 메시지가 붙은 포스트를 우선 배치하고, AHEYABARAYA를 설명하기 위해 만든 영상 자산을 함께 보여줍니다.",
    posts: xPostingLinks.filter((post) => post.featuredOnMain).map((post) => ({
      label: post.label,
      date: post.date,
      title: post.title,
      signal: post.sourceSignal,
      original: post.original,
      purpose: post.testPurpose,
      href: post.href,
      src: post.src,
      alt: post.alt,
      fit: post.fit,
      accent: post.accent,
    })),
    videos: [
      {
        label: "Motion asset",
        title: "X용 시각 진입점",
        note: "서비스 기능 설명 전, 피드에서 멈춰 보게 만드는 썸네일형 영상 자산입니다.",
        src: "/appendix/bluegarage/kumiho_vid.MP4",
        poster: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
      },
      {
        label: "Motion asset",
        title: "Short visual experiment",
        note: "빠른 X 피드에서 짧은 훅과 프로젝트 인지가 먼저 읽히는지 보기 위한 영상 자산입니다.",
        src: "/appendix/bluegarage/aheya/tiger_vid.MP4",
        poster: "/appendix/bluegarage/aheya/tiger-zodiac.webp",
      },
      {
        label: "Product demo",
        title: "창작자·빌더 utility demo",
        note: "방치되기 쉬운 소액 온체인 자산의 즉각적 효용 공백을 Dust mode(소액 후원)의 제품·서비스 소비·후원 흐름으로 옮긴 데모",
        src: "/aheya/aheya-corerail-creator.mp4",
        poster: "/aheya/home-hero.webp",
      },
    ],
  },
};

const aheya = adaptCase(baseAheya, {
  section: "GTM 케이스",
  eyebrow: "AHEYABARAYA / Web3 리서치 / 프로젝트 구조화 / X 자산",
  title: "AHEYABARAYA",
  detailLeadCount: 0,
  hideStatusSlide: false,
  oneLiner:
    "AHEYABARAYA를 Web3 프로젝트 케이스로 두고, 리서치 -> 프로젝트 정보 구조화 -> X 콘텐츠 운영까지 연결한 케이스",
  summary:
    "• EVM/Base와 Solana 지갑에 남는 소액 native gas token·project token, token account / CloseAccount, ACP v1 작업 기록을 리서치\n• AHEYABARAYA의 문제정의, 프로젝트 정보면, X 포스트와 X/숏폼용 이미지·영상 자산으로 전환",
  roles: ["블록체인 리서치", "시장/사용자 문제정의", "프로젝트 정보 구조화", "X 콘텐츠 운영", "미디어 업데이트", "비교 프로토콜 리서치", "근거/가정 분리"],
  evidence: ["EVM/Base·Solana 소액 온체인 자산 리서치", "Virtual Protocol / ACP v1 작업 기록 비교", "Dust mode(소액 후원) 제품·서비스 소비·후원 흐름", "X 포스트 / 짧은 훅 / 이미지·영상 자산"],
  status: "리서치 -> 프로젝트 구조화 -> X/미디어 운영",
  year: "2026-01 ~ 2026-04",
  externalLinks: additionalCreativeLinks,
  coverImage: {
    src: "/aheya/home-hero.webp",
    alt: "AHEYABARAYA homepage hero screenshot.",
    fit: "contain",
  },
  detailHeroProof: {
    label: "AHEYABARAYA 공개 페이지",
    note: "• live app을 열고, 지갑으로 support하고, Good/Improve signal을 남기는 핵심 제안\n• 리서치 결론을 사용자가 바로 이해하는 랜딩 메시지로 압축",
    src: "/aheya/aheyabaraya-homepage-2026-04-28.png",
    alt: "AHEYABARAYA homepage screenshot captured from aheyabaraya.xyz on 2026-04-28.",
    fit: "contain",
  },
  detailHeroHighlights: [
    {
      title: "토큰 UX 리서치",
      body:
        "• Base/EVM gas fee와 ERC-20 transfer·holding record 확인\n• Solana fee / token account / CloseAccount 구조 확인\n• 소액 온체인 자산이 숨김·방치·정리 대상으로 남는 흐름 정리",
      accent: "aqua",
      items: ["native gas token", "project token", "ERC-20 record", "token account"],
    },
    {
      title: "ACP v1 리서치",
      body:
        "• Virtual Protocol / ACP v1의 Job Offering·Job·Memo·Smart Contract Escrow·Evaluation 구조 확인\n• 작업 기록과 품질 판단 레이어를 분리",
      accent: "indigo",
      items: ["Job Offering", "Job / Memo", "Smart Contract Escrow", "Evaluation"],
    },
    {
      title: "프로젝트 정보 구조화",
      body:
        "• 리서치 결론을 category / users / problem / solution으로 압축\n• 리서치 근거와 업데이트 기준을 붙여 프로젝트 정보를 정리",
      accent: "orange",
      items: ["프로젝트 개요", "주요 사용자", "문제 / 해결 구조", "근거 / 업데이트"],
    },
    {
      title: "X·미디어 발행",
      body:
        "• 포스트별 훅, 발행 목적, 사용 자산을 분리\n• X 포스트, 소개 화면, X/숏폼용 이미지·영상 자산으로 연결",
      accent: "indigo",
      items: ["X 포스트", "짧은 훅", "콘텐츠 목적", "시각 자산"],
    },
  ],
  detailProblemGroups: [
    {
      title: "소액 온체인 자산 리서치",
      body:
        "• 에어드랍·퀘스트·거래 이후 native gas token과 project token이 애매하게 남는 흐름 확인\n• Base/EVM gas fee·ERC-20 transfer record와 Solana fee·token account 구조 확인\n• 소액 자산이 숨김·방치·정리 대상으로 남기 쉬운지 확인",
      accent: "orange",
      items: ["native gas token", "project token", "ERC-20 record", "token account / CloseAccount"],
    },
    {
      title: "ACP v1 기록 비교",
      body:
        "• Agent, Job Offering, Job, Memo, Smart Contract Escrow, Evaluation, Completion phase 확인\n• 작업 기록과 품질 평가 기록을 분리",
      accent: "indigo",
      items: ["Agent / Job Offering", "Job / Memo", "Smart Contract Escrow", "Evaluation / Completion"],
    },
    {
      title: "방치 자산 → Dust mode(소액 후원)",
      body:
        "• 소액 온체인 자산은 지갑 안에 남지만 실제 사용 경험으로 이어지기 어려움\n• 해결 방향: Dust mode(소액 후원)로 제품·서비스 소비, 소액 후원, Good/Improve 피드백 흐름에 연결",
      accent: "aqua",
      items: ["방치 자산", "효용성", "실용성", "소액 후원 / 피드백"],
    },
    {
      title: "작업 기록 → 품질 평가 기록",
      body:
        "• Job/Memo 기반 작업 기록만으로는 agent 정확도와 성능 판단이 부족\n• 해결 방향: verdict, reason, risk flag, evidence link를 분리한 품질 평가 기록",
      accent: "orange",
      items: ["판단 결과", "판단 이유", "평가 항목", "리스크 표시", "평가 기록"],
    },
  ],
  detailLeadSection: {
    eyebrow: "X / Media evidence",
    title: "프로젝트 정보 / X 발행 패키지",
    summary:
      "• 리서치 결론을 프로젝트 소개, Dust mode(소액 후원), X 포스트, 시각 자산으로 나눠 정리",
  },
  overview: [
    "• AHEYABARAYA = 방치되기 쉬운 소액 온체인 자산을 Dust mode(소액 후원)의 제품·서비스 소비·후원·피드백 흐름으로 재해석한 프로젝트",
    "• agent 영역에서는 완료 기록과 품질 판단을 분리\n• 리서치를 프로젝트 정보 구조와 X/미디어 업데이트로 전환",
  ],
  whatIDid: [
    "• 블록체인/Web3 리서치를 질문, 조사 방식, 근거, 판단, 적용 단위로 압축",
    "• EVM/Base·Solana의 소액 native gas token·project token 잔여 흐름을 제품·서비스 소비, 소액 후원, Good/Improve 피드백 단위로 재해석",
    "• Virtual Protocol / ACP v1 리서치를 통해 agent 작업 완료 기록과 결과물 품질 판단을 분리",
    "• AHEYABARAYA를 category, primary users, problem, solution, evidence, update note로 구조화",
    "• X 포스트 5개와 X/숏폼용 이미지·영상 자산을 hook, 목적, 사용 근거, 다음 판단 기준으로 정리",
  ],
  whatExists: [
    "AHEYABARAYA 한 장 소개 화면과 project information surface",
    "방치되기 쉬운 소액 온체인 자산 기반 Dust mode(소액 후원) 제품·서비스 소비 데모와 지갑 기반 소액 후원·피드백 흐름",
    "agent 품질 평가 방향과 Virtual Protocol / ACP v1 작업 기록 비교 note",
    "X 포스트 발행 기준과 보상형 CTA 회피 기준",
    "X 공개 포스트 5개와 posting purpose 정리",
    "X/숏폼용 visual / video assets",
  ],
  keyDecisions: [
    "• 에어드롭 경험은 성과가 아니라 받은 토큰과 지갑 잔여 자산의 사용처를 오래 관찰한 근거로만 사용",
    "• Virtual Protocol / ACP v1은 agent 작업 기록과 품질 판단의 차이를 설명하는 비교 리서치로 배치",
    "• X 포스트는 반응 수치로 과장하지 않고 콘텐츠 가설, 발행 목적, 다음 업데이트 기준으로 정리",
    "• 창작자·빌더 utility flow와 agent 품질 평가 기록은 외부 독자가 이해 가능한 문제-해결 구조로 번역",
    "• Kaito / X API 제한 맥락은 핵심 리서치가 아니라 보상형 게시를 피하는 채널 운영 제약으로만 사용",
  ],
  problemSummary: [
    "• Web3 유저 지갑에는 에어드랍·퀘스트·거래 이후 native gas token과 project token이 애매하게 남고, 이 자산은 숨김·방치·정리 대상으로 남기 쉬움",
    "• agent 생태계에는 작업 완료 기록이 남지만, 다음 의사결정에 필요한 품질 판단, 이유, 리스크, 재사용 가능한 평가 기록은 별도 필요",
  ],
  solutionSummary: [
    {
      title: "프로젝트 정보 구조",
      body:
        "• 기능 설명보다 카테고리, 사용자, 문제, 해결 구조를 먼저 배치\n• 근거와 업데이트 노트를 붙여 project profile 형태로 정리",
      accent: "aqua",
      items: ["category", "primary users", "problem / solution", "evidence / update"],
    },
    {
      title: "창작자·빌더 초기 반응 흐름",
      body:
        "• 방치되기 쉬운 소액 온체인 자산을 Dust mode(소액 후원)로 묶음\n• 제품·서비스 소비, 소액 후원, Good/Improve 피드백 흐름으로 정의",
      accent: "orange",
      items: ["방치 자산", "Dust mode(소액 후원)", "제품·서비스 소비", "소액 후원 / 피드백"],
    },
    {
      title: "agent 품질 평가",
      body:
        "• ACP v1의 Job/Memo 기록과 별개로 구조화된 품질 평가 기록을 추가\n• 판단 결과, 이유, 평가 항목, 리스크 표시, 근거 링크로 분리",
      accent: "indigo",
      items: ["Job / Memo 기록", "판단 결과 / 이유", "리스크 표시", "평가 기록"],
    },
    {
      title: "X / 미디어 패키지",
      body:
        "• 문제정의와 솔루션을 X hook과 소개 포스트로 전환\n• X/숏폼용 시각 자산과 demo clip으로 연결",
      accent: "aqua",
      items: ["X 훅", "소개 화면", "시각 자산", "데모 클립"],
    },
  ],
  flowHeading: "상세 리서치 방식과 적용",
  flowSteps: [
    {
      step: "01",
      title: "Wallet Utility Gap",
      body:
        "질문: • 에어드랍·퀘스트·거래 이후 지갑에 남는 소액 native gas token과 project token은 왜 실제 사용 경험으로 이어지기 어려운가. 방식: • Solana 공식 문서에서 fee structure, token account, CloseAccount 구조 확인\n• Base 공식 문서에서 L2 execution fee와 L1 security fee 구조 확인\n• EVM/Base 계열은 block explorer의 ERC-20 transfer history와 current holding 확인 방식 정리\n• 개인 지갑 샘플은 전체 시장 통계가 아니라 claim·transfer 이후 잔여 자산 관찰 근거로만 사용. 근거: • Solana transaction fee는 base fee와 priority fee로 구성되고 fee payer에게 부과됨\n• Solana token account는 CloseAccount로 닫을 수 있고 rent lamports를 destination account로 회수 가능\n• Base transaction cost는 L2 execution fee와 L1 security fee로 구성됨\n• Etherscan은 address 기준 ERC-20 transfer list와 current token holding 조회를 제공. 판단: • 소액 native gas token과 project token은 지갑 안에 남지만 다시 쓰기에는 gas, 체인, 용도 장벽이 존재\n• 거래소로 보내기에는 작고 온체인에서 다시 쓰기에도 애매해 숨김·방치·정리 대상으로 남기 쉬움\n• AHEYABARAYA에서는 이 방치되는 자산을 제품·서비스 소비, 소액 후원, 피드백 참여처럼 체감 가능한 효용성과 실용성으로 바꾸는 방향을 도출",
      meta: "방치 자산 -> Dust mode(소액 후원) 제품·서비스 소비·후원",
    },
    {
      step: "02",
      title: "Agent Quality Gap",
      body:
        "질문: • ACP v1이 agent 작업 흐름을 기록한다면 어떤 품질 판단 레이어가 추가로 필요한가. 방식: • Virtual Protocol ACP v1 공식 구조 확인\n• Agent, Job Offering, Job, Memo, Smart Contract Escrow, Evaluation, Completion phase 범위 비교\n• 작업 기록과 산출물 품질 판단 기록을 분리해 읽음. 근거: • ACP 공식 문서는 Agent Commerce Protocol을 agent 간 commerce를 위한 secure, transparent, verifiable framework로 설명\n• Job은 Buyer가 Provider의 Job Offering에서 작업을 시작할 때 생성되는 on-chain smart contract로 설명됨\n• Memo는 phase transition과 audit trail을 만드는 signed on-chain message로 설명됨\n• Smart Contract Escrow, Phase-Based Workflows, Cryptographic Signatures, On-Chain Auditability가 핵심 요소로 제시됨. 판단: • ACP v1은 Job과 Memo를 통해 요청·협상·거래·평가·완료 흐름을 기록하는 데 강점\n• 다만 산출물의 정확도, 성능, 판단 이유, 리스크를 다음 선택에 재사용하려면 별도 품질 평가 기록이 필요\n• AHEYABARAYA에서는 ACP의 Job/Memo 기록과 별개로 verdict, reason, risk flag, evidence link를 분리한 품질 평가 기록 방향을 도출",
      meta: "비교 프로토콜 리서치 -> agent 품질 평가 구조",
    },
  ],
  structureOutcome: "",
  placeholderMedia: [],
  detailMediaSections: [
    {
      eyebrow: "Project package",
      title: "프로젝트 정보 / Dust mode(소액 후원) / Trust API",
      summary: "",
      columns: 3,
      layout: "grid",
      items: [
        {
          label: "Project Profile",
          note: "• 지갑 잔여 자산과 agent 작업 기록을 실제 효용·판단 근거로 전환\n• 프로젝트 개요, 사용자, 문제/해결, 사용 사례를 한 화면에 압축",
          src: "/aheya/lane-panels.webp",
          alt: "AHEYABARAYA three-card project information surface.",
          fit: "contain",
          copyHighlights: [
            {
              title: "Profile fields",
              body: "• category / primary users\n• problem / solution / use case\n• evidence / update note",
              accent: "aqua",
            },
          ],
        },
        {
          label: "Core rail / Dust mode(소액 후원)",
          note: "• 지갑에 남은 소액 native gas token·project token을 효용성 있는 제품·서비스 소비와 소액 후원으로 연결\n• Good/Improve 피드백까지 남겨 초기 반응을 reusable proof로 전환",
          src: "/aheya/corerail-support-vid.mp4",
          alt: "AHEYABARAYA Dust mode and wallet support entry surface.",
          type: "video",
          poster: "/aheya/home-hero.webp",
          fit: "contain",
          autoPlay: true,
          muted: true,
          loop: true,
          showControls: false,
          copyHighlights: [
            {
              title: "Solution",
              body: "• 방치 자산 -> 제품·서비스 소비\n• 지갑 기반 소액 후원\n• Good/Improve 피드백",
              accent: "orange",
            },
          ],
        },
        {
          label: "Trust API",
          note: "• agent 작업 완료 기록 위에 리뷰 결과, 판단 이유, 리스크, 근거 링크를 붙이는 품질 평가 레이어\n• 반복 협업에서 다시 신뢰할 agent를 고르기 위한 reusable trust memory 제공",
          src: "/aheya/trust-api-creator.mp4",
          alt: "AHEYABARAYA Trust API quality evaluation demo.",
          type: "video",
          poster: "/appendix/bluegarage/aheya/yeon-trust-api.webp",
          fit: "contain",
          autoPlay: true,
          muted: true,
          loop: true,
          showControls: false,
          copyHighlights: [
            {
              title: "Solution",
              body: "• completion record 위에 quality review 추가\n• verdict / reason / risk / evidence 분리\n• 다음 의사결정에 재사용",
              accent: "indigo",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "X posting evidence",
      title: "X 포스트 5개 / 발행 목적",
      summary: "",
      columns: 5,
      layout: "grid",
      items: xPostingLinks.map((post) => ({
        label: `${post.label} · ${post.date}`,
        note: `${post.title} · ${post.sourceSignal}`,
        hideText: false,
        embedType: "x" as const,
        embedUrl: post.href,
        embedText: post.original || undefined,
        src: post.src,
        alt: post.alt,
        fit: post.fit,
        href: post.href,
        hrefLabel: "X에서 보기",
        displaySize: "compact" as const,
        copyHighlights: [
          {
            title: "콘텐츠 가설 / 발행 목적",
            body: post.testPurpose,
            accent: "orange",
          },
          {
            title: "적용 기준",
            body: post.sourceBasis,
            accent: "indigo",
          },
        ],
      })),
    },
    {
      eyebrow: "Visual / video content",
      title: "X/숏폼 시각 자산",
      summary:
        "• 긴 기능 설명보다 먼저 보이는 시각적 진입점 구성\n• 썸네일형 이미지와 짧은 영상으로 X 피드 대응",
      columns: 3,
      layout: "grid",
      items: [
        {
          label: "X용 시각 진입점",
          note: "• 서비스 기능 설명 전 피드에서 멈춰 보게 만드는 영상 자산",
          src: "/appendix/bluegarage/kumiho_vid.MP4",
          alt: "AHEYABARAYA X visual post experiment.",
          type: "video",
          poster: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
          fit: "contain",
          displaySize: "compact",
          href: "https://x.com/minnns_aheya/status/2034643089806217398?s=46",
          hrefLabel: "X 포스트 보기",
        },
        {
          label: "Short visual",
          note: "• 빠르게 지나가는 X 피드에서 짧은 훅과 프로젝트 인지를 먼저 노출",
          src: "/appendix/bluegarage/aheya/tiger_vid.MP4",
          alt: "AHEYABARAYA short visual public-channel experiment.",
          type: "video",
          poster: "/appendix/bluegarage/aheya/tiger-zodiac.webp",
          fit: "contain",
          displaySize: "compact",
        },
        {
          label: "Agent 품질 평가 visual",
          note: "• agent 품질 평가 방향을 별도로 분리해서 보여주는 시각 자산",
          src: "/appendix/bluegarage/aheya/yeon-trust-api.webp",
          alt: "AHEYABARAYA agent quality visual asset.",
          fit: "contain",
        },
      ],
    },
  ],
  supplementalSections: [
    {
      eyebrow: "Appendix",
      title: "채널 제약과 모델 가정",
      summary:
        "• 핵심 리서치가 아니라 공개 포트폴리오의 맥락 보강용 자료만 appendix로 분리",
      cards: [
        {
          title: "14-country tokenomics model",
          body:
            "• 14개국 수치는 성과가 아니라 토큰 모델 가정과 초기 시장 범위를 좁히기 위한 sizing basis\n• public page에서는 traction처럼 보이지 않도록 appendix에서만 유지",
          accent: "orange",
          items: ["방식: Pool(users) x Segment mix", "23.15M 넓은 풀", "4.63M 핵심 풀", "84.2K 시작 범위"],
        },
        {
          title: "Kaito / X constraint",
          body:
            "• Kaito/X 맥락은 제품 방향의 원인이 아니라 채널 운영 제약\n• 보상형 CTA보다 제품 맥락과 가치 중심 업데이트를 우선하는 기준으로만 사용",
          accent: "orange",
          items: ["reward-first posting risk", "value-led update", "publishing intent"],
        },
        {
          title: "ADSB short-form support proof",
          body:
            "• Web3 리서치 증거가 아니라 숏폼 제작 보조 증거\n• 브랜드 리서치, 스토리보드, 이미지·영상 제작, 실무 피드백 반영을 약 15초 결과물로 압축",
          accent: "indigo",
          items: ["기획·프롬프트 설계", "스토리보드", "Kling 영상화", "피드백 반영", "/creative/work/adsb"],
        },
      ],
      layout: "default",
    },
  ],
  currentStatus: [
    "• Xangle GTM 연결: Web3 프로젝트 리서치 -> 핵심 구조·리스크 정리 -> 프로젝트 정보와 X/미디어 업데이트로 전환",
    "• 리서치: EVM/Base·Solana 소액 온체인 자산, Virtual Protocol / ACP v1 작업 기록을 질문·방식·근거·판단 단위로 압축",
    "• 프로젝트 정보: AHEYABARAYA를 카테고리, 사용자, 문제, 해결 구조, 근거, 업데이트 노트로 재정리",
    "• 채널 운영: X 포스트 5개와 X/숏폼용 이미지·영상 자산을 훅, 목적, 근거, 다음 판단 기준까지 붙여 관리",
    "• 주의점: 포스트 반응이나 수요 검증처럼 보일 수 있는 표현은 제외하고 리서치 판단과 발행 산출물만 유지",
  ],
});

export const footerContent = {
  line: "AHEYABARAYA / Web3 research / project structure / X direction / visuals",
  meta: "GTM case / Virtual Protocol / ACP v1 research / builder utility / agent quality evaluation / token model / X / demos / visuals",
};

export const workCases: CrossangleWorkCase[] = [aheya];

export const workCaseMap = Object.fromEntries(
  workCases.map((item) => [item.slug, item]),
) as Record<string, CrossangleWorkCase>;

export const selectedCases: CrossangleWorkCase[] = [];
export const archiveCases: CrossangleWorkCase[] = [];
