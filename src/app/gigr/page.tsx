"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  Clapperboard,
  FileText,
  Film,
  Layers3,
  MessageSquareText,
  Route,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const coreAxes = [
  {
    title: "Character as Hook Asset",
    proof: "AHEYABARAYA",
    body: "대표 캐릭터를 설정 자료에 머무르게 하지 않고, 빠른 피드에서 시선을 멈추게 하는 광고 훅 자산으로 설계했습니다.",
    points: ["K / Becca / Aurora / Yeon", "첫 화면 주목", "피드용 소재"],
    icon: Sparkles,
  },
  {
    title: "Scene & Mood Direction",
    proof: "Andersson Bell",
    body: "브랜드 무드와 감정선을 장면, 앵글, 모션 흐름으로 압축해 숏폼 광고 흐름으로 좁혔습니다.",
    points: ["moodboard", "fixed-angle sequence", "15s short-form"],
    icon: Clapperboard,
  },
  {
    title: "Short Copy / X Hook",
    proof: "X posts",
    body: "긴 제품 설명을 첫 유저 반응, 얕은 피드백, 실제 사용성 같은 짧은 문제 훅으로 바꿨습니다.",
    points: ["문제 훅", "캡션 훅", "공개 채널 문안"],
    icon: MessageSquareText,
  },
  {
    title: "Learning Loop",
    proof: "observed signal",
    body: "관찰한 반응을 성과처럼 단정하지 않고, 다음 이미지와 카피 브리프를 고르는 판단 재료로 분리했습니다.",
    points: ["시각 훅", "메시지 정합성", "다음 브리프"],
    icon: ChartNoAxesColumnIncreasing,
  },
];

const roleFitCards = [
  {
    title: "Ad Hook Planning",
    body:
      "타깃이 먼저 멈추는 장면과 문장을 정하고, 기능 설명보다 문제 인식과 첫 시선을 먼저 설계합니다.",
    proof: "target / message / first hook",
  },
  {
    title: "AI Short-form Production",
    body:
      "세계관, 캐릭터, 감정선을 이미지와 숏폼 후보로 바꿔 광고 소재 관점에서 검토할 수 있게 만듭니다.",
    proof: "character / emotion / video asset",
  },
  {
    title: "Creative Workflow Loop",
    body:
      "단발성 제작에 그치지 않고, 후보 생성과 관찰 신호를 다음 훅과 프롬프트 수정으로 연결합니다.",
    proof: "daily candidates / learning loop",
  },
];

const creativeLayers = [
  {
    label: "Worldbuilding",
    text: "제품을 기능 설명에만 의존하지 않고, 기억되는 세계관과 분위기로 먼저 읽히게 합니다.",
  },
  {
    label: "Character",
    text: "대표 캐릭터를 브랜드의 얼굴이자 피드에서 멈추게 하는 첫인상 자산으로 씁니다.",
  },
  {
    label: "Emotion",
    text: "신비감, 강렬함, 호기심처럼 첫 1-3초에 전달될 감정을 장면과 영상 흐름으로 설계합니다.",
  },
  {
    label: "First Hook",
    text: "시각 훅은 주목을 만들고, 짧은 카피는 타깃의 문제 인식으로 이어지게 분리합니다.",
  },
];

const adVariants = [
  {
    name: "Problem Hook",
    hook: "Building got faster. Marketing didn’t.",
    asset: "AHEYABARAYA intro surface",
    purpose: "빌더가 겪는 첫 유저 반응과 피드백 문제를 기능 설명보다 먼저 제시",
    signal: "메시지 선명도",
  },
  {
    name: "Character Hook",
    hook: "Kumiho / Tiger scene",
    asset: "motion poster + character still",
    purpose: "빠른 X 피드에서 시선을 멈추게 하는 첫 장면 설계",
    signal: "시각 훅",
  },
  {
    name: "Feedback Hook",
    hook: "polite feedback haze",
    asset: "lane panel + demo/proof narrative",
    purpose: "피상적 반응보다 다음 배포로 이어지는 피드백 문제 제기",
    signal: "문제-카피 정합성",
  },
  {
    name: "Utility Hook",
    hook: "real utility on-chain",
    asset: "creator asset + low-friction CTA",
    purpose: "Web3 utility를 보상형 CTA가 아닌 실제 참여 메시지로 표현",
    signal: "타깃 적합성",
  },
];

const planningSignals = [
  {
    title: "Initial Intent",
    body:
      "AHEYABARAYA 브랜딩 채널에서 강한 캐릭터 첫인상을 만들고, 그 시각 자산을 X 카피와 함께 배치해 타깃이 문제 정의를 읽도록 설계했습니다.",
    signal: "시각 자산을 카피 진입점으로 사용",
  },
  {
    title: "Target Hypothesis",
    body:
      "AI/크립토 빌더, 초기 제품 창업자, Web3 커뮤니티 유저, 에이전트/AI 툴 관심자가 초기 제품과 사용자 접점의 문제를 읽도록 상정했습니다.",
    signal: "AI 빌더 / Web3 유저",
  },
  {
    title: "Observed Signal",
    body:
      "구미호와 영상이 함께 쓰일 때 시각 훅으로 주목을 만들 가능성이 보였습니다. 이 관찰을 바탕으로 K, Tiger, Aurora, Becca, Yeon 등 캐릭터 자산군으로 확장했습니다.",
    signal: "시각 훅의 확장 가능성",
  },
  {
    title: "What Changed",
    body:
      "반응은 제품 문제 공감보다 AI 이미지/영상 제작 관심층에 더 가까웠습니다. 그래서 캐릭터는 주목 장치, 카피는 문제 인식 장치로 분리해 다시 정리했습니다.",
    signal: "문제 메시지 정합성 재점검",
  },
];

const aheyaPageSurfaces = [
  {
    label: "Live App Surface",
    body: "홈 화면의 큰 문장과 캐릭터 이미지를 함께 보여줘, 캐릭터가 단순 이미지가 아니라 제품 첫인상으로 읽히게 했습니다.",
  },
  {
    label: "Trust Entry",
    body: "Yeon 페이지처럼 캐릭터별 화면을 확장해 AHEYABARAYA가 여러 진입 장면을 가진 페이지 구조로 보이게 했습니다.",
  },
];

const characterProofs = [
  {
    name: "Kumiho",
    role: "대표 훅",
    src: "/appendix/bluegarage/aheya/kumiho-motion-poster.webp",
  },
  {
    name: "K",
    role: "브랜드 얼굴",
    src: "/appendix/bluegarage/aheya/k.webp",
  },
  {
    name: "Tiger",
    role: "영상 훅 후보",
    src: "/appendix/bluegarage/aheya/tiger-zodiac.webp",
  },
  {
    name: "Aurora",
    role: "세계관 톤",
    src: "/appendix/bluegarage/aheya/aurora.webp",
  },
  {
    name: "Becca",
    role: "관계 확장",
    src: "/appendix/bluegarage/aheya/becca.webp",
  },
  {
    name: "Yeon",
    role: "신뢰 화면",
    src: "/appendix/bluegarage/aheya/yeon-trust-api.webp",
  },
];

const hermesLoop = [
  {
    step: "Input",
    body: "전날 관찰 신호, 트렌드/레퍼런스, 제품 메시지를 제작 입력값으로 모읍니다.",
  },
  {
    step: "Brief",
    body: "첫 장면 훅, 감정 훅, 메시지 키워드, 타깃 플랫폼을 브리프로 기록합니다.",
  },
  {
    step: "Asset",
    body: "이미지 프롬프트, 영상화 계획, 캡션 훅을 하나의 소재 후보로 묶습니다.",
  },
  {
    step: "Review",
    body: "빠른 실험 후보, 대표 소재 후보, 댓글 대응 후보, 보류 항목으로 분류해 제작 우선순위를 정합니다.",
  },
  {
    step: "Publish Prep",
    body: "게시 문안, 캡션, 사용 자산을 남겨 이후 관찰 로그와 다시 연결되게 합니다.",
  },
  {
    step: "Learning",
    body: "댓글, 리포스트 맥락, 저장해 둔 관찰 로그를 보고 다음 프롬프트 방향을 조정합니다.",
  },
];

const supportProofs = [
  {
    title: "SFTI-CMU",
    body: "모호한 브랜드 해석을 영어 초록과 포스터 구조로 정리한 writing / research framing 증거입니다.",
    href: "/creative/work/sfti-cmu",
  },
  {
    title: "Persona / Agent System",
    body: "역할, 말투, 분위기 차이를 설계해 캐릭터형 상호작용 인상을 다뤄본 보조 증거입니다.",
    href: "/creative/work/persona-systems",
  },
];

const adsbDecisionCards = [
  {
    label: "Initial Problem",
    body: "초기 콜라주 방향은 개별 장면은 있었지만 재미, 감정, 브랜드 무드가 한 방향으로 유지되지 않았습니다.",
  },
  {
    label: "Creative Choice",
    body: "고정 앵글을 유지하면 첫 장면, 인물, 제품 무드, 이동감을 한 흐름으로 읽게 만들 수 있다고 판단했습니다.",
  },
  {
    label: "Short-form Logic",
    body: "첫 1-3초에서 장면 훅을 만들고, 15초 안에서 같은 감정선이 유지되는 쪽이 광고 소재 후보에 더 가까웠습니다.",
  },
];

export default function GigrPage() {
  return (
    <main className="cinema-shell gigr-shell">
      <section className="page-frame gigr-hero-frame">
        <header className="topbar gigr-topbar">
          <Link href="/gigr" className="brand-lockup">
            <span className="brand-dot" />
            <span>minnns / GIGR</span>
          </Link>
          <nav className="topnav">
            <a href="#role">JD 매칭</a>
            <a href="#fit">작업 방식</a>
            <a href="#planning">기획 의도</a>
            <a href="#aheya">AHEYABARAYA</a>
            <a href="#adsb">Andersson Bell</a>
            <a href="#loop">Hermes Loop</a>
          </nav>
        </header>

        <div className="gigr-hero">
          <motion.div {...fadeUp} className="gigr-hero-copy">
            <h1 className="gigr-hero-title">
              브랜드 첫인상을 캐릭터와 장면으로 압축해 X 포스트와 숏폼 광고 자산으로 만듭니다.
            </h1>
            <p className="gigr-hero-summary">
              타깃과 광고 목적을 먼저 잡고, 빠른 피드에서 멈추게 할 캐릭터, 시각 장면, 첫 1-3초
              훅과 짧은 카피로 바꿉니다. 이 후보를 AI 숏폼 자산으로 만들고 관찰한 신호를 다음
              브리프로 되돌립니다.
            </p>
            <div className="hero-ctas">
              <a href="#aheya" className="cta-primary">
                대표 케이스 보기
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href="#loop" className="cta-secondary">
                운영 루프 보기
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="gigr-hero-proof-row">
              <span>AHEYABARAYA 캐릭터/X 훅 실험</span>
              <span>Andersson Bell AI 숏폼 제작</span>
              <span>Hermes/Aurora 자동화 루프 설계</span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="gigr-hero-board gigr-hero-board-single"
          >
            <div className="gigr-hero-media gigr-hero-media-large gigr-hero-kumiho">
              <Image
                src="/appendix/bluegarage/aheya/kumiho-motion-poster.webp"
                alt="Blue Kumiho character hook asset."
                fill
                priority
                loading="eager"
                sizes="(max-width: 760px) 100vw, 42vw"
                className="gigr-kumiho-image"
              />
              <div className="gigr-hero-caption gigr-hero-caption-overlay">
                <strong>Blue Kumiho → one-look hook</strong>
                <span>브랜드의 첫인상을 한 장면으로 세워 피드에서 멈추게 하는 대표 캐릭터 자산입니다.</span>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <motion.section {...fadeUp} id="role" className="page-frame gigr-section gigr-role-section">
        <div className="gigr-role-head">
          <div>
            <p className="eyebrow text-aqua">Role Fit for GIGR</p>
            <h2 className="section-title">세계관과 캐릭터를 광고 훅, 숏폼 자산, 제작 루프로 전환합니다</h2>
          </div>
          <p>
            기존 작업에서 다뤄온 세계관, 캐릭터, 감정, 첫 훅 설계를 GIGR의 업무인 광고 목적
            콘텐츠 기획, AI 숏폼 제작, 제작 워크플로우 효율화로 연결합니다. 핵심은 타깃과 목적을
            먼저 정한 뒤, 시각 훅과 카피를 분리해 설계하는 것입니다.
          </p>
        </div>

        <div className="gigr-role-grid">
          {roleFitCards.map((card) => (
            <article key={card.title} className="gigr-role-card">
              <p>{card.proof}</p>
              <h3>{card.title}</h3>
              <span>{card.body}</span>
            </article>
          ))}
        </div>

        <article className="gigr-applied-loop-card">
          <div>
            <p className="eyebrow text-indigo">Applied Loop</p>
            <h3>이 방식은 광고 소재 후보 생성 루프로 연결됩니다.</h3>
          </div>
          <div>
            <p>
              타깃과 광고 목적을 먼저 정하고, 첫 1-3초 훅·카피·AI 숏폼 후보를 빠르게 만든 뒤,
              관찰 신호를 다음 소재 기획으로 되돌리는 구조입니다.
            </p>
            <div className="gigr-applied-steps">
              <span>Target</span>
              <span>1-3s Hook</span>
              <span>Copy</span>
              <span>AI Short-form Candidate</span>
              <span>Next Creative Brief</span>
            </div>
          </div>
        </article>

        <div className="gigr-creative-layer">
          {creativeLayers.map((layer) => (
            <article key={layer.label}>
              <strong>{layer.label}</strong>
              <span>{layer.text}</span>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="fit" className="page-frame gigr-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-aqua">What I Do</p>
            <h2 className="section-title">광고 소재로 읽히게 만드는 네 가지 축</h2>
          </div>
        </div>

        <div className="gigr-axis-grid">
          {coreAxes.map((axis) => {
            const Icon = axis.icon;

            return (
              <article key={axis.title} className="gigr-axis-card">
                <div className="gigr-axis-icon">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="gigr-axis-title">{axis.title}</p>
                <p className="gigr-axis-proof">{axis.proof}</p>
                <p className="gigr-axis-body">{axis.body}</p>
                <div className="case-chip-group">
                  {axis.points.map((point) => (
                    <span key={point} className="case-chip case-chip-soft">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="planning" className="page-frame gigr-section gigr-planning-section">
        <div className="gigr-planning-head">
          <div>
            <p className="eyebrow text-orange">Planning & Signal</p>
            <h2 className="section-title">시각 훅은 주목을 만들고, 카피는 문제 공감을 만든다는 학습</h2>
          </div>
          <p>
            AHEYABARAYA의 이미지와 영상은 문제를 직접 설명하는 자산이 아니라, X 피드에서 먼저
            멈추게 만든 뒤 문제 정의와 카피를 읽게 하기 위한 진입점이었습니다. 반응을 보며 캐릭터 자산의
            역할과 문제 메시지의 역할을 분리해 다시 정리했습니다.
          </p>
        </div>

        <div className="gigr-planning-grid">
          <div className="gigr-planning-cards">
            {planningSignals.map((item) => (
              <article key={item.title} className="gigr-planning-card">
                <p>{item.title}</p>
                <h3>{item.signal}</h3>
                <span>{item.body}</span>
              </article>
            ))}
          </div>

          <aside className="gigr-character-proof-card">
            <div className="gigr-character-proof-head">
              <div>
                <p className="eyebrow text-aqua">Creative Evidence</p>
                <h3>구미호를 대표 훅으로 잡고 확장한 캐릭터 자산군</h3>
              </div>
              <Link href="/creative/work/aheya" className="inline-link">
                전체 보기
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="gigr-character-grid">
              {characterProofs.map((character) => (
                <figure key={character.name} className="gigr-character-tile">
                  <Image
                    src={character.src}
                    alt={`AHEYABARAYA ${character.name} character asset.`}
                    fill
                    sizes="(max-width: 760px) 45vw, 12vw"
                    className="gigr-media-img"
                  />
                  <figcaption>
                    <strong>{character.name}</strong>
                    <span>{character.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="gigr-character-note">
              이 자산들은 문제 공감이 완성됐다는 근거가 아니라, 시각 훅이 주목을 만들 수 있다는
              관찰을 바탕으로 광고 소재 후보군을 확장한 근거입니다. 대표 훅은 구미호, 확장은 캐릭터
              시스템으로 분리했습니다.
            </p>
          </aside>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="aheya" className="page-frame gigr-section gigr-aheya-section">
        <div className="gigr-case-head">
          <div>
            <p className="eyebrow text-aqua">Flagship Case</p>
            <h2 className="section-title">AHEYABARAYA Creative Hook System</h2>
          </div>
          <p>
            별도 브랜딩 채널에서 캐릭터와 영상을 X 카피의 진입점으로 사용했습니다. 이미지와 영상은
            문제 공감 자체를 만드는 장치가 아니라, 피드에서 먼저 멈추게 한 뒤 문제 정의와 카피를
            읽게 만드는 시각적 진입점이었습니다.
          </p>
        </div>

        <div className="gigr-aheya-grid">
          <div className="gigr-aheya-media-wall">
            <div className="gigr-aheya-main-media">
              <Image
                src="/aheya/aheyabaraya-homepage-2026-04-28.png"
                alt="AHEYABARAYA product intro surface."
                fill
                sizes="(max-width: 1100px) 100vw, 48vw"
                className="gigr-media-contain"
                loading="eager"
              />
            </div>
            <div className="gigr-aheya-small-media">
              <video playsInline muted loop autoPlay preload="metadata" poster="/appendix/bluegarage/aheya/tiger-zodiac.webp">
                <source src="/appendix/bluegarage/aheya/tiger_vid.MP4" type="video/mp4" />
              </video>
            </div>
            <div className="gigr-aheya-small-media">
              <Image
                src="/aheyabaraya/evidence/k-home-pair.webp"
                alt="AHEYABARAYA K character and home copy visual pair."
                fill
                sizes="(max-width: 1100px) 50vw, 24vw"
                className="gigr-media-contain"
                loading="eager"
              />
            </div>
          </div>

          <div className="gigr-aheya-copy">
            <article className="gigr-signal-card">
              <p className="eyebrow text-orange">Learning Decision</p>
              <h3>시각 훅과 문제 메시지의 정합성을 분리해 다시 정리했습니다</h3>
              <p>
                이미지와 영상은 문제 공감 자체를 만드는 장치가 아니라, X 피드에서 카피를 읽게 만드는
                시각적 진입점으로 사용했습니다.
              </p>
              <div className="gigr-learning-list">
                <article>
                  <strong>Visual Hook</strong>
                  <span>구미호와 영상은 빠른 피드에서 멈추게 하는 첫 장면으로 가능성이 있었습니다.</span>
                </article>
                <article>
                  <strong>Copy Layer</strong>
                  <span>공감은 이미지가 아니라 타깃 문제를 직접 건드리는 짧은 문장과 CTA에서 만들어져야 했습니다.</span>
                </article>
                <article>
                  <strong>Next Brief</strong>
                  <span>다음 소재는 캐릭터 훅을 유지하되 AI/크립토 빌더의 첫 유저·피드백 문제를 더 직접적으로 테스트해야 합니다.</span>
                </article>
              </div>
              <p>
                구미호와 영상은 피드에서 멈추게 하는 시각 훅으로는 가능성을 보였지만, 반응은
                제품 문제 공감보다 AI 이미지/영상 제작 관심층에 가까웠습니다. 그래서 캐릭터는 주목
                장치, 카피는 문제 인식 장치로 분리했습니다.
              </p>
            </article>

            <div className="gigr-aheya-page-proof">
              {aheyaPageSurfaces.map((item) => (
                <article key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.body}</span>
                </article>
              ))}
            </div>

            <div className="gigr-variant-list">
              {adVariants.map((variant) => (
                <article key={variant.name} className="gigr-variant-card">
                  <div>
                    <p className="gigr-variant-name">{variant.name}</p>
                    <h3>{variant.hook}</h3>
                  </div>
                  <dl>
                    <div>
                      <dt>Asset</dt>
                      <dd>{variant.asset}</dd>
                    </div>
                    <div>
                      <dt>Purpose</dt>
                      <dd>{variant.purpose}</dd>
                    </div>
                    <div>
                      <dt>Signal</dt>
                      <dd>{variant.signal}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>

            <Link href="/creative/work/aheya" className="inline-link gigr-case-link">
              AHEYABARAYA 상세 보기
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="adsb" className="page-frame gigr-section">
        <div className="gigr-adsb-row">
          <div className="gigr-adsb-video">
            <video playsInline muted loop autoPlay controls preload="metadata" poster="/work/andersson-bell-cover.webp">
              <source src="/video/anderssonbell.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="gigr-adsb-copy">
            <p className="eyebrow text-orange">External Brand Case</p>
            <h2 className="section-title">Andersson Bell AI Short-form</h2>
            <p className="gigr-section-copy">
              브랜드 무드와 대표 장면을 AI 숏폼 광고 흐름으로 수렴시킨 케이스입니다. 처음에는
              콜라주 중심의 방향을 시도했지만, 피드백 이후 완성도가 낮게 읽히는 지점과 시선 분산을
              줄이기 위해 고정 앵글 기반 15초 흐름으로 좁혔습니다. 개별 장면의 귀여움보다 한 장면의 감정과
              브랜드 무드가 끝까지 유지되는 쪽을 광고 자산 후보로 판단했습니다.
            </p>
            <div className="gigr-process-strip">
              <span>Brand research</span>
              <span>Hook / motif</span>
              <span>Storyboard</span>
              <span>AI image</span>
              <span>Kling video</span>
              <span>Feedback revision</span>
            </div>
            <div className="gigr-adsb-decision-grid">
              {adsbDecisionCards.map((item) => (
                <article key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.body}</span>
                </article>
              ))}
            </div>
            <div className="gigr-adsb-proof-grid">
              <div>
                <Image
                  src="/work/andersson-bell-process.webp"
                  alt="Andersson Bell process board."
                  fill
                  sizes="(max-width: 1100px) 100vw, 22vw"
                  className="gigr-media-contain"
                  loading="eager"
                />
              </div>
              <div>
                <Image
                  src="/work/andersson-bell-variants.webp"
                  alt="Andersson Bell prompt variants."
                  fill
                  sizes="(max-width: 1100px) 100vw, 22vw"
                  className="gigr-media-contain"
                  loading="eager"
                />
              </div>
            </div>
            <Link href="/creative/work/andersson-bell" className="inline-link gigr-case-link">
              Andersson Bell 상세 보기
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="loop" className="page-frame gigr-section">
        <div className="gigr-loop-head">
          <div>
            <p className="eyebrow text-indigo">Operating System</p>
            <h2 className="section-title">Hermes / Aurora Creative Operating Loop</h2>
          </div>
          <p>
            지금은 문서, 프롬프트 큐, 관찰 로그, 게시 메타데이터를 먼저 세워둔 상태입니다. 다음 단계는
            이 구조를 자동화 루프로 운영해 매일 광고 소재 후보를 만들고, 분류하고, 반응 신호로 다음
            프롬프트를 고치는 것입니다. 자동 게시는 API 비용과 품질 기준을 본 뒤 승인 기반으로
            확장하는 영역입니다.
          </p>
        </div>

        <div className="gigr-loop-grid">
          <div className="gigr-loop-video-card">
            <video playsInline muted loop autoPlay controls preload="metadata" poster="/video/codex-hermes-automation-flow-poster.webp">
              <source src="/video/codex-hermes-automation-flow-4x.mp4" type="video/mp4" />
            </video>
            <div className="gigr-loop-video-caption">
              <Film className="h-4 w-4" />
              <span>Hermes/Aurora 구조를 근거 자료로 읽고, 광고 소재 운영 루프를 설명 가능한 형태로 정리하는 4배속 작업 흐름입니다.</span>
            </div>
          </div>

          <div className="gigr-loop-copy-card">
            <div className="gigr-loop-flow">
              {hermesLoop.map((item, index) => (
                <article key={item.step} className="gigr-loop-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.step}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="gigr-loop-proof-row">
          <article>
            <Layers3 className="h-5 w-5" />
            <strong>Daily creative pipeline</strong>
            <span>매일 10개 이미지 후보와 5개 영상화 계획을 준비하는 운영 목표</span>
          </article>
          <article>
            <FileText className="h-5 w-5" />
            <strong>Data contracts</strong>
            <span>CreativeBrief, ImagePromptSlot, PublishDraft, CreativeObservation로 연결</span>
          </article>
          <article>
            <Route className="h-5 w-5" />
            <strong>Automation target</strong>
            <span>제작 후보 자동화와 게시 자동화를 분리하고, API 비용을 본 뒤 승인 기반 검수 단계부터 확장</span>
          </article>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="support" className="page-frame gigr-section gigr-support-section">
        <div>
          <p className="eyebrow text-aqua">Supporting Proof</p>
          <h2 className="section-title">필요할 때만 보여주는 보조 증거</h2>
        </div>
        <div className="gigr-support-grid">
          {supportProofs.map((proof) => (
            <Link key={proof.title} href={proof.href} className="gigr-support-card">
              <h3>{proof.title}</h3>
              <p>{proof.body}</p>
              <span className="inline-link">
                보기
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </motion.section>

      <footer className="page-frame footer-frame gigr-footer">
        <p>GIGR 지원용 포트폴리오. 광고 훅, AI 숏폼 후보, 제작 학습 루프 중심으로 구성했습니다.</p>
        <span>AHEYABARAYA / Andersson Bell / Hermes Aurora</span>
      </footer>
    </main>
  );
}
