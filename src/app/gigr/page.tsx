"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  adVariants,
  adsbCraftNotes,
  adsbDecisionCards,
  aheyaAmbiguitySteps,
  aheyaOriginVideos,
  aheyaPageSurfaces,
  aheyaPositioningBridge,
  caseReadout,
  characterProofs,
  coreAxes,
  hermesLoop,
  hookPlanningSteps,
  planningSignals,
  recruiterFitRows,
  supportProofs,
  type GigrIconKey,
} from "@/data/portfolio.gigr";
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

const gigrIconMap: Record<GigrIconKey, typeof Sparkles> = {
  sparkles: Sparkles,
  clapperboard: Clapperboard,
  messageSquareText: MessageSquareText,
  chartNoAxesColumnIncreasing: ChartNoAxesColumnIncreasing,
};

const fadeUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

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
              광고 훅을 기획하고 AI 숏폼 후보로 바꾸는 제작자입니다.
            </h1>
            <p className="gigr-hero-summary">
              레퍼런스에서 멈추게 하는 장면을 찾고, 타깃이 읽을 문제 카피와 연결한 뒤 이미지와
              AI 숏폼 후보, 다음 제작 브리프까지 이어갑니다.
            </p>
            <div className="gigr-hero-brief">
              <article>
                <span>01</span>
                <strong>Reference Hook</strong>
                <p>멈추게 하는 장면의 구도와 감정을 찾습니다.</p>
              </article>
              <article>
                <span>02</span>
                <strong>AI Short-form</strong>
                <p>이미지와 영상 후보를 광고 소재처럼 판단합니다.</p>
              </article>
              <article>
                <span>03</span>
                <strong>Learning Loop</strong>
                <p>관찰 신호를 다음 카피와 프롬프트로 되돌립니다.</p>
              </article>
            </div>
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
                <strong>Blue Kumiho → cinematic intro hook</strong>
                <span>초기 실험 이후 가장 영상미가 살아 있어 첫 인트로에 세운 대표 시각 훅입니다.</span>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <motion.section {...fadeUp} id="role" className="page-frame gigr-section gigr-role-section">
        <div className="gigr-recruiter-head">
          <div>
            <p className="eyebrow text-aqua">Recruiter View</p>
            <h2 className="section-title">GIGR 업무와 바로 연결되는 증거만 먼저 보입니다</h2>
          </div>
          <p>
            기존 작업에서 다뤄온 세계관, 캐릭터, 감정, 첫 훅 설계를 GIGR의 업무인 광고 목적
            콘텐츠 기획, AI 숏폼 제작, 제작 워크플로우 효율화로 연결합니다. 핵심은 타깃과 목적을
            먼저 정한 뒤, 레퍼런스에서 발견한 장면 훅을 이미지와 영상 후보로 재구성하고 시각 훅과
            카피를 분리해 설계하는 것입니다.
          </p>
        </div>

        <div className="gigr-fit-table" aria-label="GIGR role fit evidence">
          {recruiterFitRows.map((row, index) => (
            <article key={row.need} className="gigr-fit-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>GIGR에서 필요한 일</small>
                <strong>{row.need}</strong>
              </div>
              <div>
                <small>이 포트폴리오의 증거</small>
                <p>{row.proof}</p>
              </div>
              <div>
                <small>확인 가능한 산출물</small>
                <p>{row.output}</p>
              </div>
              <a href={row.href} aria-label={`${row.need} evidence section`}>
                보기
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="fit" className="page-frame gigr-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow text-aqua">What I Do</p>
            <h2 className="section-title">작업 방식은 네 단계로 읽힙니다</h2>
          </div>
        </div>

        <div className="gigr-axis-grid">
          {coreAxes.map((axis) => {
            const Icon = gigrIconMap[axis.icon];

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

        <div className="gigr-hook-process">
          {hookPlanningSteps.map((step) => (
            <article key={step.label}>
              <span>{step.label}</span>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="planning" className="page-frame gigr-section gigr-planning-section">
        <div className="gigr-planning-head">
          <div>
            <p className="eyebrow text-orange">Planning & Signal</p>
            <h2 className="section-title">AHEYABARAYA에서 얻은 제작 판단</h2>
          </div>
          <p>
            채용자가 봐야 할 핵심은 캐릭터 수가 아니라 모호한 상황에서 직접 가정을 세우고 바꾼
            흐름입니다. 처음에는 초기 구미호 영상 2개와 Yeon으로 첫인상 후보를 만들었고, 이후
            동물·그리스·이집트 계열과 정제 캐릭터를 거치며 확장 방식과 카피 방향을 다시 잡았습니다.
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
                <h3>초기 영상에서 출발해 대표 훅으로 정제한 캐릭터 자산군</h3>
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
              관찰을 바탕으로 광고 소재 후보군을 확장한 근거입니다. 초기 영상과 Yeon에서 출발해
              동물·그리스·이집트 계열을 거치고, 이후 파란 구미호와 K/Becca 같은 정제 자산으로
              좁혔습니다.
            </p>
          </aside>
        </div>
      </motion.section>

      <motion.section {...fadeUp} id="aheya" className="page-frame gigr-section gigr-aheya-section">
        <div className="gigr-case-head">
          <div>
            <p className="eyebrow text-aqua">Flagship Case</p>
            <h2 className="section-title">AHEYABARAYA는 캐릭터를 광고 훅으로 검토한 케이스입니다</h2>
          </div>
          <p>
            별도 브랜딩 채널에서 캐릭터와 영상을 X 카피의 진입점으로 사용했습니다. 이미지와 영상은
            문제 공감 자체를 만드는 장치가 아니라, 피드에서 먼저 멈추게 한 뒤 문제 정의와 카피를
            읽게 만드는 시각적 진입점이었습니다.
          </p>
        </div>

        <div className="gigr-case-readout">
          {caseReadout.map((item) => (
            <article key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.body}</span>
            </article>
          ))}
        </div>

        <div className="gigr-aheya-bridge">
          {aheyaPositioningBridge.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="gigr-aheya-sequence-grid">
          {aheyaAmbiguitySteps.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </article>
          ))}
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
            {aheyaOriginVideos.map((video) => (
              <div key={video.label} className="gigr-aheya-small-media">
                <video playsInline muted loop autoPlay preload="metadata" poster={video.poster}>
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
            ))}
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
                  <span>초기 영상과 캐릭터 자산은 빠른 피드에서 멈추게 하는 첫 장면으로 가능성이 있었습니다.</span>
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
                초기 영상과 캐릭터 자산은 피드에서 멈추게 하는 시각 훅으로는 가능성을 보였지만, 반응은
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
        <div className="gigr-case-head gigr-adsb-head">
          <div>
            <p className="eyebrow text-orange">External Brand Case</p>
            <h2 className="section-title">Andersson Bell은 AI 숏폼 방향을 수렴한 케이스입니다</h2>
          </div>
          <p>
            이 섹션은 결과 영상보다 의사결정을 먼저 보여줍니다. 콜라주식 장면 나열에서 고정 앵글
            15초 흐름으로 좁힌 이유가 GIGR의 광고 소재 판단과 연결됩니다.
          </p>
        </div>
        <div className="gigr-adsb-row">
          <div className="gigr-adsb-video">
            <video playsInline muted loop autoPlay controls preload="metadata" poster="/work/andersson-bell-cover.webp">
              <source src="/video/anderssonbell.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="gigr-adsb-copy">
            <p className="gigr-section-copy">
              브랜드 무드와 대표 장면을 AI 숏폼 광고 흐름으로 수렴시킨 케이스입니다. 처음에는
              콜라주 중심의 방향을 시도했지만, 피드백 이후 완성도가 낮게 읽히는 지점과 시선 분산을
              줄이기 위해 고정 앵글 기반 15초 흐름으로 좁혔습니다. 개별 장면의 귀여움보다 한 장면의 감정과
              브랜드 무드가 끝까지 유지되는 쪽을 광고 자산 후보로 판단했습니다. 이 과정에서 조명,
              그림자, 접지감, 카메라 움직임처럼 사소해 보이는 디테일이 AI 영상의 완성도를 크게
              좌우한다는 제작 감각을 얻었습니다.
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
            <div className="gigr-adsb-craft-grid">
              {adsbCraftNotes.map((item) => (
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
