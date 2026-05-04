import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2, PanelTop, Sparkles } from "lucide-react";

import type { DeckContent, Slide } from "@/lib/portfolio-deck/types";

import styles from "./portfolio-deck.module.css";

export function SlideMain({ slide, deck }: { slide: Slide; deck: DeckContent }) {
  if (slide.custom === "aheyaOverview") {
    return <AheyaOverview slide={slide} />;
  }

  if (slide.custom === "aheyaTimeline") {
    return <AheyaTimeline slide={slide} />;
  }

  if (slide.custom === "aheyaResearchSolution") {
    return <AheyaResearchSolution slide={slide} />;
  }

  if (slide.custom === "aheyaProductSurfaceMap") {
    return <AheyaProductSurfaceMap slide={slide} />;
  }

  if (slide.custom === "aheyaFeatureEvidenceMap") {
    return <AheyaFeatureEvidenceMap slide={slide} />;
  }

  if (slide.custom === "aheyaDecisionCards") {
    return <AheyaDecisionCards slide={slide} />;
  }

  if (slide.custom === "aheyaHypothesisBoard") {
    return <AheyaHypothesisBoard slide={slide} />;
  }

  if (slide.custom === "aheyaCoreRail") {
    return <AheyaCoreRail slide={slide} />;
  }

  if (slide.custom === "aheyaFlowHero") {
    return <AheyaFlowHero slide={slide} />;
  }

  if (slide.custom === "aheyaLandingCallout") {
    return <AheyaLandingCallout slide={slide} />;
  }

  if (slide.custom === "aheyaMvpCut") {
    return <AheyaMvpCut slide={slide} />;
  }

  if (slide.custom === "aheyaPlanningBoard") {
    return <AheyaPlanningBoard slide={slide} />;
  }

  if (slide.custom === "aheyaKpiBoard") {
    return <AheyaKpiBoard slide={slide} />;
  }

  if (slide.custom === "aheyaGtmBridge") {
    return <AheyaGtmBridge slide={slide} />;
  }

  if (slide.custom === "aheyaMessageLadder") {
    return <AheyaMessageLadder slide={slide} />;
  }

  if (slide.custom === "aheyaMessagingEvolution") {
    return <AheyaMessagingEvolution slide={slide} />;
  }

  if (slide.custom === "aheyaXPostGrid") {
    return <AheyaProofGrid slide={slide} mode="x" />;
  }

  if (slide.custom === "aheyaOutreachGrid") {
    return <AheyaProofGrid slide={slide} mode="outreach" />;
  }

  if (slide.custom === "aheyaContentAssetGrid") {
    return <AheyaProofGrid slide={slide} mode="asset" />;
  }

  if (slide.custom === "aheyaLaunchLoop") {
    return <AheyaLaunchLoop slide={slide} />;
  }

  if (slide.custom === "aheyaSignalSplit") {
    return <AheyaSignalSplit slide={slide} />;
  }

  if (slide.custom === "aheyaDecisionClose") {
    return <AheyaDecisionClose slide={slide} />;
  }

  if (slide.variant === "cover") {
    return (
      <section className={styles.coverGrid}>
        <div className={styles.focusPanel}>
          <div className={styles.iconRow}>
            <Sparkles />
            <span>Core Focus</span>
          </div>
          <div className={styles.focusTags}>
            {deck.focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
          <div className={styles.casePair}>
            {deck.coverCases.map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.label}</span>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
        <MediaSlot slide={slide} />
      </section>
    );
  }

  if (slide.variant === "process") {
    return (
      <section className={styles.processGrid}>
        <div className={styles.processRail}>
          {(slide.process ?? slide.include).map((step, index) => (
            <div key={`${slide.no}-${step}`} className={styles.processStep}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
        <SlotPanel slide={slide} />
      </section>
    );
  }

  if (slide.variant === "matrix" && slide.table) {
    return (
      <section className={`${styles.matrixGrid} ${slide.media ? styles.matrixWithMedia : styles.matrixOnly}`}>
        <DataTable slide={slide} />
        {slide.media ? <MediaSlot slide={slide} /> : null}
      </section>
    );
  }

  if (slide.variant === "evidence") {
    return (
      <section className={styles.evidenceGrid}>
        <SlotPanel slide={slide} />
        <MediaSlot slide={slide} />
      </section>
    );
  }

  return (
    <section className={styles.splitGrid}>
      <InfoPanel items={slide.include} />
      <SlotPanel slide={slide} />
    </section>
  );
}

function AheyaOverview({ slide }: { slide: Slide }) {
  return (
    <section className={styles.aheyaOverviewCanvas}>
      <div className={styles.aheyaOverviewText}>
        <div className={styles.aheyaOverviewCards}>
          {slide.slots.map((slot) => {
            const [label, ...body] = slot.split(":");
            return (
              <article key={`${slide.no}-${slot}`}>
                <span>{label}</span>
                <p>{body.join(":").trim() || slot}</p>
              </article>
            );
          })}
        </div>
      </div>
      <div className={styles.aheyaOverviewMediaColumn}>
        <MediaSlot slide={slide} />
        {slide.links?.length ? (
          <div className={styles.overviewLinkRail}>
            {slide.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                <strong>{link.label}</strong>
                <span>{link.description}</span>
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function AheyaTimeline({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.timelineCanvas}>
      {rows.map((row, index) => (
        <div key={`${slide.no}-${row[0]}`} className={styles.timelineItem}>
          <article className={styles.timelineCard}>
            <span className={styles.timelineStep}>{String(index + 1).padStart(2, "0")}</span>
            <span className={styles.timelineDate}>{row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </article>
          {index < rows.length - 1 ? <ArrowRight className={styles.timelineArrow} size={18} /> : null}
        </div>
      ))}
    </section>
  );
}

function AheyaResearchSolution({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.researchSolutionCanvas}>
      <div className={styles.researchSolutionGrid}>
        <span>Research one-line</span>
        <span>Problem connection</span>
        <span>AHEYA solution</span>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`} className={styles.researchSolutionRow}>
            <p>{row[0]}</p>
            <ArrowRight size={16} />
            <strong>{row[1]}</strong>
            <ArrowRight size={16} />
            <em>{row[2]}</em>
          </article>
        ))}
      </div>
      <div className={styles.researchSolutionBottom}>
        {slide.slots.map((slot) => (
          <span key={`${slide.no}-${slot}`}>{slot}</span>
        ))}
      </div>
    </section>
  );
}

function AheyaProductSurfaceMap({ slide }: { slide: Slide }) {
  const gallery = slide.gallery ?? [];

  return (
    <section className={styles.surfaceMapCanvas}>
      <div className={styles.surfaceMapMedia}>
        {gallery.map((item) => (
          <article key={`${slide.no}-${item.src}`} className={styles.surfaceMapCard}>
            <div className={styles.surfaceMapFrame}>{renderGalleryMedia(item, "(max-width: 1000px) 100vw, 38vw")}</div>
            <span>{item.label}</span>
            {item.caption ? <p>{item.caption}</p> : null}
          </article>
        ))}
      </div>
      <div className={styles.surfaceMapNotes}>
        {slide.slots.map((slot) => (
          <article key={`${slide.no}-${slot}`}>
            <span>{slot.split(":")[0]}</span>
            <p>{slot.includes(":") ? slot.slice(slot.indexOf(":") + 1).trim() : slot}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AheyaFeatureEvidenceMap({ slide }: { slide: Slide }) {
  const gallery = slide.gallery ?? [];

  return (
    <section className={styles.featureEvidenceCanvas}>
      <div className={styles.featureEvidenceGallery}>
        {gallery.map((item) => (
          <article key={`${slide.no}-${item.src}`} className={styles.featureEvidenceCard}>
            <div className={styles.featureEvidenceFrame}>{renderGalleryMedia(item, "(max-width: 1000px) 100vw, 23vw")}</div>
            <div>
              <span>{item.label}</span>
              {item.caption ? <p>{item.caption}</p> : null}
            </div>
          </article>
        ))}
      </div>
      <div className={styles.featureEvidenceRail}>
        {slide.slots.map((slot) => (
          <article key={`${slide.no}-${slot}`}>
            <span>{slot.split(":")[0]}</span>
            <p>{slot.includes(":") ? slot.slice(slot.indexOf(":") + 1).trim() : slot}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AheyaDecisionCards({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.decisionCardsCanvas}>
      <div className={styles.decisionCardsGrid}>
        {rows.map((row, index) => (
          <article key={`${slide.no}-${row[0]}`} className={index === 0 ? styles.decisionCardPrimary : ""}>
            <span>{row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </article>
        ))}
      </div>
      <div className={styles.decisionSummaryRail}>
        {slide.slots.map((slot) => (
          <span key={`${slide.no}-${slot}`}>{slot}</span>
        ))}
      </div>
    </section>
  );
}

function AheyaHypothesisBoard({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.hypothesisCanvas}>
      <div className={styles.hypothesisThesis}>
        <span>Central hypothesis</span>
        <strong>{slide.claim}</strong>
      </div>
      <div className={styles.hypothesisGrid}>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`}>
            <span>{row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AheyaProblemBridge({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];
  const web3 = rows[0];
  const builder = rows[1];
  const bridge = rows[2];

  return (
    <section className={styles.problemBridgeCanvas}>
      {web3 ? (
        <article className={styles.problemSideCard}>
          <span>{web3[0]}</span>
          <strong>{web3[1]}</strong>
          <p>{web3[2]}</p>
        </article>
      ) : null}
      {bridge ? (
        <article className={styles.problemCenterRail}>
          <span>{bridge[0]}</span>
          <strong>{bridge[1]}</strong>
          <p>{bridge[2]}</p>
        </article>
      ) : null}
      {builder ? (
        <article className={styles.problemSideCard}>
          <span>{builder[0]}</span>
          <strong>{builder[1]}</strong>
          <p>{builder[2]}</p>
        </article>
      ) : null}
    </section>
  );
}

function AheyaFlowHero({ slide }: { slide: Slide }) {
  const topSteps = [
    ["01 DISCOVER", "X / content", "post, reply, visual, demo note"],
    ["02 OPEN", "Project page", "/ideas/[id] live idea surface"],
    ["03 ACTION", "Support intent", "small support action before heavy mechanics"],
    ["04 VERIFY", "Support check", "server verifies support evidence"],
    ["05 RESPONSE", "Feedback / proof", "positive/improvement feedback, proof record"],
  ];
  const serverSteps = [
    ["ACCESS", "session / wallet gate"],
    ["DESTINATION", "recipient wallet truth"],
    ["VERIFY API", "/api/support/seed/verify"],
    ["RECORD", "FundingParticipation"],
    ["REVIEW", "proof queue / response evidence"],
  ];

  return (
    <section className={styles.flowHeroCanvas}>
      <div className={styles.directFlowBoard}>
        <div className={styles.directFlowRow}>
          {topSteps.map((step, index) => (
            <article key={step[0]}>
              <span>{step[0]}</span>
              <strong>{step[1]}</strong>
              <p>{step[2]}</p>
              {index < topSteps.length - 1 ? <ArrowRight size={18} /> : null}
            </article>
          ))}
        </div>
        <div className={styles.directServerLayer}>
          <header>
            <strong>Server / Verification Layer</strong>
            <p>사용자에게는 단순한 participation flow로 보이고, 내부에서는 wallet/session, destination, direct-send, review queue를 분리해서 처리</p>
          </header>
          <div>
            {serverSteps.map((step, index) => (
              <article key={step[0]}>
                <span>{step[0]}</span>
                <strong>{step[1]}</strong>
                {index < serverSteps.length - 1 ? <ArrowRight size={16} /> : null}
              </article>
            ))}
          </div>
        </div>
        <em>Flow proof, not conversion proof · Core Rail remains the public product story</em>
      </div>
      <div className={styles.flowHeroSlots}>
        {slide.slots.map((slot) => (
          <article key={`${slide.no}-${slot}`}>
            <CheckCircle2 size={16} />
            <span>{slot}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function AheyaLandingCallout({ slide }: { slide: Slide }) {
  const callouts = slide.slots.slice(0, 4);

  return (
    <section className={styles.landingCalloutCanvas}>
      <div className={styles.landingMediaWrap}>
        <MediaSlot slide={slide} />
      </div>
      <div className={styles.landingCalloutStack}>
        {callouts.map((slot, index) => {
          const [label, ...body] = slot.split(":");
          return (
            <article key={`${slide.no}-${slot}`}>
              <span>{String(index + 1).padStart(2, "0")} · {label}</span>
              <p>{body.join(":").trim() || slot}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AheyaMvpCut({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];
  const kept = rows.filter((row) => row[0] !== "Deferred");
  const deferred = rows.find((row) => row[0] === "Deferred");

  return (
    <section className={styles.mvpCutCanvas}>
      <ol className={styles.mvpScopeList}>
        {kept.map((row, index) => (
          <li key={`${slide.no}-${row[0]}-${index}`} className={styles.mvpScopeItem}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <em>{row[0]}</em>
              <strong>{row[1]}</strong>
              <p>{row[2]}</p>
            </div>
          </li>
        ))}
      </ol>
      {deferred ? (
        <aside className={styles.mvpDeferredCard}>
          <span>{deferred[0]}</span>
          <strong>{deferred[1]}</strong>
          <p>{deferred[2]}</p>
        </aside>
      ) : null}
    </section>
  );
}

function AheyaPlanningBoard({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.planningBoardCanvas}>
      <div className={styles.planningDirectBoard}>
        <header>
          <strong>Redacted Decision Trace</strong>
          <p>원문을 노출하지 않고, 문서가 어떤 판단과 슬라이드로 연결됐는지 보여주는 근거 보드</p>
          <span>Sanitized evidence board</span>
        </header>
        <div>
          {rows.map((row) => (
            <article key={`${slide.no}-board-${row[0]}`}>
              <span>{row[0]}</span>
              <strong>{row[1]}</strong>
              <p>{row[2]}</p>
            </article>
          ))}
        </div>
        <em>Proof without raw export · 문서명은 provenance, 판단 연결이 본문 근거</em>
      </div>
      <div className={styles.planningDocGrid}>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`}>
            <span>{row[0]}</span>
            <strong>{row[3] ?? row[1]}</strong>
            <p>{row[4] ?? row[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AheyaCoreRail({ slide }: { slide: Slide }) {
  const steps = slide.process ?? slide.include;

  return (
    <section className={styles.coreRailCanvas}>
      <div className={styles.coreRailFlow}>
        {steps.map((step, index) => (
          <article key={`${slide.no}-${step}`} className={styles.coreRailNode}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
            {index < steps.length - 1 ? <i aria-hidden="true" /> : null}
          </article>
        ))}
      </div>
      <div className={styles.coreRailBoundaryGrid}>
        {slide.slots.map((slot) => (
          <div key={`${slide.no}-${slot}`} className={styles.coreRailBoundary}>
            {slot}
          </div>
        ))}
      </div>
    </section>
  );
}

function AheyaGtmBridge({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.gtmBridgeCanvas}>
      <div className={styles.gtmBridgeRail}>
        <article>
          <span>Maker outcome</span>
          <strong>first users / clear feedback / proof record</strong>
        </article>
        <ArrowRight size={28} />
        <article>
          <span>Web3 action</span>
          <strong>support + positive/improvement feedback</strong>
        </article>
      </div>
      <div className={styles.gtmBridgeCards}>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`}>
            <span>{row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AheyaMessageLadder({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];
  const gallery = slide.gallery ?? [];

  return (
    <section className={styles.messageLadderCanvas}>
      <div className={styles.messageLadderSteps}>
        {rows.map((row, index) => (
          <article key={`${slide.no}-${row[0]}`} className={styles.messageLadderStep}>
            <span>{String(index + 1).padStart(2, "0")} · {row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </article>
        ))}
      </div>
      {gallery.length ? (
        <div className={styles.messageLadderProof}>
          {gallery.map((item) => (
            <a key={item.src} href={item.href} target="_blank" rel="noreferrer" className={styles.messageLadderProofCard}>
              <div>{renderGalleryMedia(item, "(max-width: 1000px) 100vw, 44vw")}</div>
              <span>{item.label}</span>
              {item.caption ? <p>{item.caption}</p> : null}
            </a>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function AheyaMessagingEvolution({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.messagingEvolutionCanvas}>
      <div className={styles.messagingLineageBoard}>
        <span>Lineage map</span>
        <strong>Product Evolution Evidence</strong>
        <p>planning-to-narrowing 흐름만 보여주고 performance로 해석하지 않음</p>
        <div>
          <article>
            <span>2025 Nov</span>
            <strong>Raven planning</strong>
            <p>funding, quest, helper, reward</p>
          </article>
          <ArrowRight size={18} />
          <article>
            <span>2026 Jan</span>
            <strong>AHEYA pivot</strong>
            <p>support + feedback + proof rail</p>
          </article>
          <ArrowRight size={18} />
          <article>
            <span>2026 Feb-Apr</span>
            <strong>X / GTM language</strong>
            <p>first signal, live idea, proof</p>
          </article>
        </div>
        <em>Portfolio transition: broad reward/funding plan to first-signal rail</em>
      </div>
      <div className={styles.messagingEvolutionPairs}>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`}>
            <span>{row[0]}</span>
            <div>
              <strong>Before</strong>
              <p>{row[1]}</p>
            </div>
            <ArrowRight size={18} />
            <div>
              <strong>After</strong>
              <p>{row[2]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AheyaKpiBoard({ slide }: { slide: Slide }) {
  const steps = slide.process ?? [];
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.kpiBoardCanvas}>
      <div className={styles.kpiRail}>
        {steps.map((step, index) => (
          <article key={`${slide.no}-${step}`} className={styles.kpiRailStep}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </article>
        ))}
      </div>
      <div className={styles.kpiBoardGrid}>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`} className={styles.kpiMetricCard}>
            <span>{row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
            <em>{row[3]}</em>
          </article>
        ))}
      </div>
      <div className={styles.kpiBoundary}>
        {slide.slots.map((slot) => (
          <span key={`${slide.no}-${slot}`}>{slot}</span>
        ))}
      </div>
    </section>
  );
}

function AheyaProofGrid({ slide, mode }: { slide: Slide; mode: "x" | "outreach" | "asset" }) {
  const gallery = slide.gallery ?? [];

  return (
    <section className={`${styles.proofGridCanvas} ${styles[`proofGrid${capitalize(mode)}`]}`}>
      <div className={styles.proofGallery}>
        {gallery.map((item) => {
          const body = (
            <>
              <div className={styles.proofImageFrame}>
                {renderGalleryMedia(item, "(max-width: 1000px) 100vw, 29vw")}
              </div>
              <div className={styles.proofCaptionBar}>
                <span>{item.label}</span>
                {item.caption ? <p>{item.caption}</p> : null}
              </div>
            </>
          );

          return item.href ? (
            <a key={item.src} href={item.href} target="_blank" rel="noreferrer" className={styles.proofCard}>
              {body}
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <article key={item.src} className={styles.proofCard}>
              {body}
            </article>
          );
        })}
      </div>
      <div className={styles.proofExplanationGrid}>
        {slide.slots.map((slot) => (
          <article key={`${slide.no}-${slot}`}>
            <span>{slot.split(":")[0]}</span>
            <p>{slot.includes(":") ? slot.slice(slot.indexOf(":") + 1).trim() : slot}</p>
          </article>
        ))}
      </div>
      {slide.links?.length ? (
        <div className={styles.proofLinkRail}>
          {slide.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              <strong>{link.label}</strong>
              <span>{link.description}</span>
            </a>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function AheyaLaunchLoop({ slide }: { slide: Slide }) {
  const steps = slide.process ?? [];

  return (
    <section className={styles.launchLoopCanvas}>
      <div className={styles.launchLoopRail}>
        {steps.map((step, index) => (
          <article key={`${slide.no}-${step}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
            {index < steps.length - 1 ? <ArrowRight size={18} /> : null}
          </article>
        ))}
      </div>
      <div className={styles.launchLoopNotes}>
        {slide.slots.map((slot) => {
          const [label, ...body] = slot.split(":");
          return (
            <article key={`${slide.no}-${slot}`}>
              <span>{label}</span>
              <p>{body.join(":").trim() || slot}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AheyaSignalSplit({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];
  const actual = rows.filter((row) => row[0] === "Actual");
  const designed = rows.filter((row) => row[0] === "Designed");
  const boundary = rows.filter((row) => row[0] === "Boundary");

  return (
    <section className={styles.signalSplitCanvas}>
      <div className={styles.signalSummaryPanel}>
        <span>AHEYA / Metrics</span>
        <strong>확인한 표면과 다음 측정 항목을 분리해서 읽는다</strong>
        <p>현재 자료는 attention/evidence surface이고, KPI/SQL은 다음 판단을 위한 measurement design이다.</p>
        <div className={styles.signalReadRules}>
          <span>01 Current evidence</span>
          <span>02 Next events</span>
          <span>03 Boundary</span>
        </div>
        <em>No KPI outcome · No conversion-lift claim · Read-only snapshot 전 숫자 과장 금지</em>
      </div>
      <div className={styles.signalColumnGrid}>
        <SignalColumn title="Actual surface" rows={actual} />
        <SignalColumn title="Measurement plan" rows={designed} />
        <SignalColumn title="Boundary" rows={boundary} />
      </div>
    </section>
  );
}

function SignalColumn({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <article className={styles.signalColumn}>
      <span>{title}</span>
      {rows.map((row) => (
        <div key={`${title}-${row.join("-")}`}>
          <strong>{row[1]}</strong>
          <p>{row[2]}</p>
        </div>
      ))}
    </article>
  );
}

function AheyaDecisionClose({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.decisionCloseCanvas}>
      <div className={styles.decisionCloseHero}>
        <span>Final read</span>
        <strong>{slide.claim}</strong>
        <p>{slide.slots.join(" · ")}</p>
      </div>
      <div className={styles.decisionCloseGrid}>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`}>
            <span>{row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderGalleryMedia(item: NonNullable<Slide["gallery"]>[number], sizes: string) {
  if (item.type === "video") {
    const src = item.startTime ? `${item.src}#t=${item.startTime}` : item.src;

    return (
      <video
        src={src}
        poster={item.poster}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={item.alt}
      />
    );
  }

  return <Image src={item.src} alt={item.alt} fill sizes={sizes} />;
}

function DataTable({ slide }: { slide: Slide }) {
  if (!slide.table) {
    return null;
  }

  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            {slide.table.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slide.table.rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InfoPanel({ items }: { items: string[] }) {
  return (
    <div className={styles.panel}>
      <ul className={styles.itemList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function SlotPanel({
  slide,
  compact = false,
}: {
  slide: Slide;
  compact?: boolean;
}) {
  return (
    <div className={`${styles.panel} ${compact ? styles.compactPanel : ""}`}>
      <div className={styles.slotGrid}>
        {slide.slots.map((slot) => (
          <div key={`${slide.no}-${slot}`} className={styles.slot}>
            <PanelTop size={15} />
            <span>{slot}</span>
          </div>
        ))}
      </div>
      {slide.links?.length ? (
        <div className={styles.linkStack}>
          {slide.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={styles.linkCard}>
              <span>
                <strong>{link.label}</strong>
                {link.description}
              </span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MediaSlot({ slide }: { slide: Slide }) {
  if (!slide.media) {
    return (
      <div className={styles.mediaSlot}>
        <div className={styles.mediaPlaceholder}>
          <Sparkles size={26} />
          <span>Evidence / Screenshot / Asset</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mediaSlot}>
      <Image
        src={slide.media.src}
        alt={slide.media.alt}
        fill
        sizes="(max-width: 1000px) 100vw, 46vw"
        {...(slide.no === 1 ? { priority: true } : { loading: "eager" as const })}
      />
      <span>{slide.media.label}</span>
    </div>
  );
}
