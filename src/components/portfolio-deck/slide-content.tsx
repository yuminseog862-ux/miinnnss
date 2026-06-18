import { useState } from "react";
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

  if (slide.custom === "aheyaBuilderBridge") {
    return <AheyaBuilderBridge slide={slide} />;
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

  if (slide.custom === "aheyaCsvEvidence") {
    return <AheyaCsvEvidence slide={slide} />;
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

  if (slide.custom === "portfolioScopeCards") {
    return <PortfolioScopeCards slide={slide} />;
  }

  if (slide.custom === "portfolioMediaFocus") {
    return <PortfolioMediaFocus slide={slide} />;
  }

  if (slide.custom === "portfolioCriteriaCards") {
    return <PortfolioCriteriaCards slide={slide} />;
  }

  if (slide.custom === "portfolioInstagramOutput") {
    return <PortfolioInstagramOutput slide={slide} />;
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
            {row[2] ? <p>{row[2]}</p> : null}
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
      <div className={styles.researchInputPanel}>
        <span>Research inputs</span>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`} className={styles.researchInputBlock}>
            <em>{row[0]}</em>
            <ul>
              {row[1].split(" | ").map((item) => (
                <li key={`${slide.no}-${row[0]}-${item}`}>
                  <span aria-hidden="true">*</span>
                  <p>{item.replace(/^\*\s*/, "")}</p>
                </li>
              ))}
            </ul>
            <div>
              {(row[4] ?? "").split(" | ").filter(Boolean).map((tag) => (
                <span key={`${slide.no}-${row[0]}-${tag}`}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <ArrowRight className={styles.researchProblemArrow} size={26} />
      <div className={styles.problemStackPanel}>
        {rows.map((row, index) => (
          <article key={`${slide.no}-${row[2]}`} className={styles.problemStackCard}>
            <span>Problem {String(index + 1).padStart(2, "0")}</span>
            <strong>{row[2]}</strong>
            <ul>
              {row[3].split(" | ").map((item) => (
                <li key={`${slide.no}-${row[2]}-${item}`}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function AheyaBuilderBridge({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];
  const inputs = rows.slice(0, 2);
  const outputs = [
    {
      label: "Output 01",
      title: "Support signal",
      body: "소액 후원을 첫 관심 신호로 분리",
    },
    {
      label: "Output 02",
      title: "Feedback record",
      body: "Good/Improve와 상세 note를 다음 업데이트 기록으로 저장",
    },
    {
      label: "Output 03",
      title: "User-led Share on X",
      body: "사용자가 선택할 때 공개 reply / quote로 연결",
    },
  ];

  return (
    <section className={styles.builderBridgeCanvas}>
      <div className={styles.builderBridgeInputs}>
        {inputs.map((row, index) => (
          <article key={`${slide.no}-${row[0]}`}>
            <span>{`Input ${String(index + 1).padStart(2, "0")}`}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </article>
        ))}
      </div>
      <article className={styles.builderBridgeCore}>
        <span>AHEYABARAYA value bridge</span>
        <strong>public idea page</strong>
        <p>small support + Good/Improve feedback + saved record</p>
      </article>
      <div className={styles.builderBridgeOutputs}>
        {outputs.map((output) => (
          <article key={`${slide.no}-${output.label}`}>
            <span>{output.label}</span>
            <strong>{output.title}</strong>
            <p>{output.body}</p>
          </article>
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
          <article key={`${slide.no}-${getGalleryKey(item)}`} className={styles.surfaceMapCard}>
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
  const [primary, ...supporting] = gallery;

  return (
    <section className={styles.featureEvidenceCanvas}>
      {primary ? (
        <article className={`${styles.featureEvidenceCard} ${styles.featureEvidencePrimary}`}>
          <div className={styles.featureEvidenceFrame}>{renderGalleryMedia(primary, "(max-width: 1000px) 100vw, 42vw")}</div>
          <div>
            <span>Primary surface</span>
            <strong>{primary.label}</strong>
            {primary.caption ? <p>{primary.caption}</p> : null}
          </div>
        </article>
      ) : null}
      <div className={styles.featureEvidenceSupport}>
        {supporting.map((item) => (
          <article key={`${slide.no}-${getGalleryKey(item)}`} className={styles.featureEvidenceCard}>
            <div className={styles.featureEvidenceFrame}>{renderGalleryMedia(item, "(max-width: 1000px) 100vw, 24vw")}</div>
            <div>
              <span>{item.label}</span>
              {item.caption ? <p>{item.caption}</p> : null}
            </div>
          </article>
        ))}
      </div>
      <footer className={styles.featureEvidenceBoundary}>object-fit: contain · product path evidence · not traction proof</footer>
    </section>
  );
}

function AheyaDecisionCards({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.decisionCardsCanvas}>
      <div className={styles.decisionSentenceList}>
        {rows.map((row, index) => (
          <p key={`${slide.no}-${row[0]}`}>
            <span>{String(index + 1)}.</span>
            <strong>{row[1]}</strong>
            <em>{row[2]}</em>
          </p>
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
  const lanes = [
    {
      label: "Builder",
      title: "빠르게 만든 demo를 공개 아이디어, 후원, 피드백 기록으로 전환",
      steps: [
        ["01", "Demo 정리", "AI로 만든 demo/service/tool/agent를 설명"],
        ["02", "원본 X 글", "builder가 demo/idea를 소개하는 글을 올림"],
        ["03", "공개 페이지", "원본 X 글에서 AHEYA page로 연결"],
        ["04", "후원 확인", "암호화폐 소액 후원으로 관심 신호를 확인"],
        ["05", "Feedback 저장", "Good/Improve 상세 피드백을 record로 남김"],
        ["06", "X 연결", "사용자가 선택하면 Share on X로 연결"],
      ],
    },
    {
      label: "Web3 user",
      title: "제품을 본 사용자가 소액 후원과 상세 피드백을 남김",
      steps: [
        ["01", "발견", "X에서 builder의 원본 글을 봄"],
        ["02", "이해", "public idea page에서 맥락을 파악"],
        ["03", "후원", "암호화폐로 작은 금액을 후원"],
        ["04", "Respond", "Good/Improve 상세 피드백 작성"],
        ["05", "Share", "선택 시 Share on X로 공개 반응 연결"],
        ["06", "Record", "AHEYA에도 피드백 기록을 남김"],
      ],
    },
  ];

  return (
    <section className={styles.flowHeroCanvas}>
      <div className={styles.flowSwimlaneBoard}>
        {lanes.map((lane) => (
          <article key={lane.label} className={styles.flowSwimlane}>
            <header>
              <span>{lane.label}</span>
              <strong>{lane.title}</strong>
            </header>
            <div className={styles.flowSwimlaneSteps}>
              {lane.steps.map((step, index) => (
                <section key={`${lane.label}-${step[0]}`} className={styles.flowSwimlaneStep}>
                  <i>{step[0]}</i>
                  <div>
                    <strong>{step[1]}</strong>
                    <p>{step[2]}</p>
                  </div>
                  {index < lane.steps.length - 1 ? <ArrowRight size={17} /> : null}
                </section>
              ))}
            </div>
          </article>
        ))}
        <em>Flow evidence only · X 노출이나 traction claim이 아니라 제품 경로와 판단 단위를 보여줌</em>
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
  const included = rows.filter((row) => row[0].toLowerCase().includes("included"));
  const deferred = rows.filter((row) => row[0].toLowerCase().includes("deferred"));
  const decision = rows.find((row) => row[0].toLowerCase().includes("decision"));

  return (
    <section className={styles.mvpCutCanvas}>
      <div className={styles.mvpScopeColumns}>
        <div className={styles.mvpScopeColumn}>
          <header>
            <span>Included</span>
            <strong>MVP에 남긴 것</strong>
          </header>
          <ol className={styles.mvpScopeList}>
            {included.map((row, index) => (
              <li key={`${slide.no}-${row[1]}-${index}`} className={styles.mvpScopeItem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{row[1]}</strong>
                  <p>{row[2]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className={`${styles.mvpScopeColumn} ${styles.mvpScopeDeferredColumn}`}>
          <header>
            <span>Deferred</span>
            <strong>보류한 것</strong>
          </header>
          <ol className={styles.mvpScopeList}>
            {deferred.map((row, index) => (
              <li key={`${slide.no}-${row[1]}-${index}`} className={styles.mvpScopeItem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{row[1]}</strong>
                  <p>{row[2]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {decision ? (
        <footer className={styles.mvpDecisionStrip}>
          <strong>{decision[1]}</strong>
          <span>{decision[2]}</span>
        </footer>
      ) : null}
    </section>
  );
}

function AheyaPlanningBoard({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];
  const sourceCards = slide.slots.map((slot) => {
    const [label, ...body] = slot.split(":");
    return {
      label: label.trim(),
      body: body.join(":").trim() || slot,
    };
  });

  if (slide.media) {
    return (
      <section className={`${styles.planningBoardCanvas} ${styles.planningTraceCanvas}`}>
        <div className={styles.planningTraceBoard}>
          <header>
            <strong>Evidence → Decision → Product</strong>
            <p>문서가 보관용 archive가 아니라 제품 판단과 화면 구조로 연결됐다는 점을 한 장에서 보여준다.</p>
          </header>
          <div className={styles.planningTraceTable}>
            {slide.table?.headers.map((header) => (
              <span key={`${slide.no}-${header}`} className={styles.planningTraceHeader}>
                {header}
              </span>
            ))}
            {rows.map((row, rowIndex) =>
              row.slice(0, 3).map((cell, cellIndex) => (
                <p key={`${slide.no}-trace-${rowIndex}-${cellIndex}`} className={styles.planningTraceCell}>
                  <span>{String(rowIndex + 1).padStart(2, "0")}</span>
                  {cell}
                </p>
              )),
            )}
          </div>
        </div>
        <aside className={styles.planningSourcePanel}>
          <div className={styles.planningSourceMedia}>
            <MediaSlot slide={slide} />
          </div>
          <div className={styles.planningSourceCards}>
            {sourceCards.map((card, index) => (
              <article key={`${slide.no}-source-${card.label}-${index}`}>
                <strong>{card.label}</strong>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
          {slide.note ? <p className={styles.planningBoundaryNote}>{slide.note}</p> : null}
        </aside>
      </section>
    );
  }

  if (slide.table?.headers.length === 3) {
    return (
      <section className={`${styles.planningBoardCanvas} ${styles.planningTraceCanvas}`}>
        <div className={styles.planningTraceBoard}>
          <header>
            <strong>Evidence → Decision → Product</strong>
            <p>근거, 판단, 제품 반영을 분리해 보여준다.</p>
          </header>
          <div className={styles.planningTraceTable}>
            {slide.table.headers.map((header) => (
              <span key={`${slide.no}-${header}`} className={styles.planningTraceHeader}>
                {header}
              </span>
            ))}
            {rows.map((row, rowIndex) =>
              row.slice(0, 3).map((cell, cellIndex) => (
                <p key={`${slide.no}-trace-${rowIndex}-${cellIndex}`} className={styles.planningTraceCell}>
                  <span>{String(rowIndex + 1).padStart(2, "0")}</span>
                  {cell}
                </p>
              )),
            )}
          </div>
        </div>
        <aside className={styles.planningSourcePanel}>
          <div className={styles.planningSourceCards}>
            {sourceCards.map((card, index) => (
              <article key={`${slide.no}-source-${card.label}-${index}`}>
                <strong>{card.label}</strong>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
          {slide.note ? <p className={styles.planningBoundaryNote}>{slide.note}</p> : null}
        </aside>
      </section>
    );
  }

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
        <em>Evidence without raw export · 문서명은 provenance, 판단 연결이 본문 근거</em>
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

function AheyaCsvEvidence({ slide }: { slide: Slide }) {
  const rows = slide.slots.map((slot) => {
    const [label, ...body] = slot.split(":");
    const [tracking, decision] = body.join(":").split(" | ");
    return {
      label: label.trim(),
      body: (tracking ?? "").trim() || slot,
      decision: (decision ?? "").trim(),
    };
  });

  return (
    <section className={`${styles.csvEvidenceCanvas} ${slide.media ? styles.csvEvidenceWithMedia : ""}`}>
      <div className={styles.csvEvidenceDirectBoard}>
        <header>
          <span>{slide.label}</span>
          <strong>{slide.title}</strong>
          <p>성과 숫자가 아니라 어떤 이벤트를 남기고 어떤 판단에 쓸지 정리한 설계 보드</p>
        </header>
        <div className={styles.csvEvidenceDirectTable}>
          <div className={styles.csvEvidenceDirectHead}>
            <span>Layer</span>
            <span>Tracking / query unit</span>
            <span>Decision use</span>
          </div>
          {rows.map((row) => (
            <article key={`${slide.no}-${row.label}`}>
              <span>{row.label}</span>
              <strong>{row.body}</strong>
              <p>{row.decision || (row.label === "Boundary" ? "claim guardrail" : "decision question")}</p>
            </article>
          ))}
        </div>
      </div>
      {slide.media ? (
        <div className={styles.csvEvidenceMedia}>
          <MediaSlot slide={slide} />
        </div>
      ) : null}
    </section>
  );
}

function AheyaCoreRail({ slide }: { slide: Slide }) {
  const steps = slide.process ?? slide.include;

  return (
    <section className={styles.coreRailCanvas}>
      <div className={styles.coreRailMap}>
        {steps.map((step, index) => (
          <article key={`${slide.no}-${step}`} className={styles.coreRailNode}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
            <p>{getProductDirectionNote(index)}</p>
          </article>
        ))}
      </div>
      {slide.slots.length ? (
        <div className={styles.coreRailBoundaryGrid}>
          {slide.slots.map((slot) => (
            <div key={`${slide.no}-${slot}`} className={styles.coreRailBoundary}>
              {slot}
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function getProductDirectionNote(index: number) {
  const notes = [
    "builder의 demo/idea 글을 anchor로 둠",
    "맥락과 CTA를 한 화면에 정리",
    "잔여 온체인 자산을 소액 후원으로 사용",
    "Good/Improve와 상세 note를 남김",
    "사용자가 선택할 때 X reply/quote로 연결",
    "다음 업데이트에 쓸 기록으로 저장",
  ];

  return notes[index] ?? "";
}

function AheyaGtmBridge({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.gtmBridgeCanvas}>
      <div className={styles.gtmBridgeRail}>
        <article>
          <span>GTM bridge</span>
          <strong>Maker outcome first → Web3 action path → visual hook as discovery</strong>
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
  const notes = slide.slots ?? [];

  return (
    <section className={styles.messageLadderCanvas}>
      <div className={styles.messageLadderSteps}>
        {rows.map((row, index) => (
          <article key={`${slide.no}-${row[0]}`} className={styles.messageLadderStep}>
            <span>{String(index + 1).padStart(2, "0")} · {row[0]}</span>
            <strong>{row[1]}</strong>
          </article>
        ))}
      </div>
      <div className={styles.messageLadderEvidenceColumn}>
        {gallery.length ? (
          <div className={styles.messageLadderProof}>
            {gallery.map((item) => {
              const body = (
                <>
                  <div>{renderGalleryMedia(item, "(max-width: 1000px) 100vw, 44vw")}</div>
                  <span>{item.label}</span>
                  {item.caption ? <p>{item.caption}</p> : null}
                </>
              );

              if (item.embedType === "x" && item.embedUrl) {
                return (
                  <article key={getGalleryKey(item)} className={styles.messageLadderProofCard}>
                    {body}
                    <a href={item.href ?? item.embedUrl} target="_blank" rel="noreferrer" aria-label={`${item.label} X 원문 보기`}>
                      <ArrowUpRight size={14} />
                    </a>
                  </article>
                );
              }

              return (
                <a key={getGalleryKey(item)} href={item.href} target="_blank" rel="noreferrer" className={styles.messageLadderProofCard}>
                  {body}
                </a>
              );
            })}
          </div>
        ) : null}
        {notes.length ? (
          <div className={styles.messageLadderNotes}>
            {notes.map((slot) => {
              const [label, ...body] = slot.split(":");

              return (
                <article key={`${slide.no}-${slot}`}>
                  <span>{label}</span>
                  <p>{body.join(":").trim() || slot}</p>
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function AheyaMessagingEvolution({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.messagingEvolutionCanvas}>
      <div className={styles.messagingEvolutionColumn}>
        <header>
          <span>Before</span>
          <strong>Internal / mechanism-first</strong>
        </header>
        <div>
          {rows.map((row, index) => (
            <article key={`${slide.no}-before-${row[0]}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <em>{row[0]}</em>
                <p>{row[1]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.messagingEvolutionDivider} aria-hidden="true">
        <ArrowRight size={24} />
      </div>
      <div className={`${styles.messagingEvolutionColumn} ${styles.messagingEvolutionAfterColumn}`}>
        <header>
          <span>After</span>
          <strong>Public / action-first</strong>
        </header>
        <div>
          {rows.map((row, index) => (
            <article key={`${slide.no}-after-${row[0]}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <em>{row[0]}</em>
                <p>{row[2]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      {slide.note ? <footer className={styles.messagingEvolutionDecision}>{slide.note}</footer> : null}
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
          const isEmbed = item.embedType === "x" && item.embedUrl;
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

          if (isEmbed) {
            return (
              <article key={getGalleryKey(item)} className={`${styles.proofCard} ${styles.proofEmbedCard}`}>
                {body}
                {item.href || item.embedUrl ? (
                  <a href={item.href ?? item.embedUrl} target="_blank" rel="noreferrer" aria-label={`${item.label} X 원문 보기`}>
                    <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </article>
            );
          }

          return item.href ? (
            <a key={getGalleryKey(item)} href={item.href} target="_blank" rel="noreferrer" className={styles.proofCard}>
              {body}
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <article key={getGalleryKey(item)} className={styles.proofCard}>
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
  const notes = slide.slots.map((slot) => {
    const [label, ...body] = slot.split(":");
    return {
      label: label.trim(),
      body: body.join(":").trim() || slot,
    };
  });

  return (
    <section className={styles.launchLoopCanvas}>
      <div className={styles.launchLoopHero}>
        <div className={styles.launchLoopCore}>
          <span>Channel test loop</span>
          <strong>public language → product action → response review</strong>
        </div>
        <div className={styles.launchLoopRail}>
          {steps.map((step, index) => (
            <article key={`${slide.no}-${step}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index < steps.length - 1 ? <ArrowRight size={16} /> : null}
            </article>
          ))}
        </div>
      </div>
      <div className={styles.launchLoopNotes}>
        {notes.map((note) => (
          <article key={`${slide.no}-${note.label}`}>
            <span>{note.label}</span>
            <p>{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AheyaSignalSplit({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.signalSplitCanvas}>
      <div className={styles.signalReviewBoard}>
        <header>
          <span>Pre-decision review</span>
          <strong>앞단 자료를 결론 직전의 판단 재료로 정리</strong>
          <p>X/content evidence, product surface, KPI/SQL design을 한 번에 읽고 29번 decision으로 넘긴다.</p>
        </header>
        <div className={styles.signalReviewCards}>
          {rows.map((row, index) => (
            <article key={`${slide.no}-${row[0]}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{row[0]}</strong>
              <p>{row[1]}</p>
              <em>{row[2]}</em>
              {row[3] ? <small>{row[3]}</small> : null}
            </article>
          ))}
        </div>
        <footer>No KPI result claim · No funnel result claim · 결론은 방향 판단과 다음 측정 구조로 제한</footer>
      </div>
    </section>
  );
}

function PortfolioScopeCards({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.portfolioScopeCanvas}>
      {rows.map((row) => (
        <article key={`${slide.no}-${row[0]}`} className={styles.portfolioScopeCard}>
          <span>{row[0]}</span>
          <strong>{row[2]}</strong>
          <ul>
            {row[1].split(" | ").map((item) => (
              <li key={`${slide.no}-${row[0]}-${item}`}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

function PortfolioMediaFocus({ slide }: { slide: Slide }) {
  return (
    <section className={styles.portfolioMediaFocusCanvas}>
      <div className={styles.portfolioMediaFocusAsset}>
        <MediaSlot slide={slide} />
      </div>
      <div className={styles.portfolioMediaFocusNotes}>
        {slide.slots.slice(0, 3).map((slot, index) => (
          <article key={`${slide.no}-${slot}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{slot}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function PortfolioCriteriaCards({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.portfolioCriteriaCanvas}>
      <div className={styles.portfolioCriteriaMedia}>
        <MediaSlot slide={slide} />
      </div>
      <div className={styles.portfolioCriteriaCards}>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`}>
            <span>{row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </article>
        ))}
      </div>
      {slide.note ? <footer>{slide.note}</footer> : null}
    </section>
  );
}

function PortfolioInstagramOutput({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];
  const primaryLink = slide.links?.[0];

  return (
    <section className={styles.portfolioOutputCanvas}>
      <div className={styles.portfolioOutputEmbedShell}>
        <div className={styles.portfolioOutputPhone}>
          {slide.embed ? (
            <iframe
              className={styles.portfolioOutputFrame}
              title={slide.embed.title}
              src={slide.embed.src}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <MediaSlot slide={slide} />
          )}
        </div>
      </div>
      <div className={styles.portfolioOutputDetails}>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`}>
            <span>{row[0]}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </article>
        ))}
        {primaryLink ? (
          <a href={primaryLink.href} target="_blank" rel="noreferrer" className={styles.portfolioOutputLink}>
            <strong>{primaryLink.label}</strong>
            <span>{primaryLink.description}</span>
            <ArrowUpRight size={16} />
          </a>
        ) : null}
      </div>
    </section>
  );
}

function AheyaDecisionClose({ slide }: { slide: Slide }) {
  const rows = slide.table?.rows ?? [];

  return (
    <section className={styles.decisionCloseCanvas}>
      <div className={styles.decisionCloseGrid}>
        {rows.map((row) => (
          <article key={`${slide.no}-${row[0]}`}>
            <span>{row[0].toUpperCase()}</span>
            <strong>{row[1]}</strong>
            <p>{row[2]}</p>
          </article>
        ))}
      </div>
      {slide.note ? <footer className={styles.decisionCloseNote}>{slide.note}</footer> : null}
    </section>
  );
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderGalleryMedia(item: NonNullable<Slide["gallery"]>[number], sizes: string) {
  if (item.embedType === "x" && item.embedUrl) {
    const src = getXPostEmbedUrl(item.embedUrl);

    if (!src) {
      return (
        <a href={item.href ?? item.embedUrl} target="_blank" rel="noreferrer" className={styles.xEmbedFallback}>
          X post source
        </a>
      );
    }

    return (
      <iframe
        className={styles.xEmbedFrame}
        title={`${item.label} X post`}
        src={src}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  if (item.type === "video") {
    if (!item.src) {
      return null;
    }

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

  if (!item.src) {
    return null;
  }

  return <Image src={item.src} alt={item.alt} fill sizes={sizes} unoptimized={item.src.endsWith(".svg")} />;
}

function getGalleryKey(item: NonNullable<Slide["gallery"]>[number]) {
  return item.src ?? item.embedUrl ?? item.href ?? item.label;
}

function getXPostId(embedUrl?: string) {
  return embedUrl?.match(/status\/(\d+)/)?.[1];
}

function getXPostEmbedUrl(embedUrl: string) {
  const postId = getXPostId(embedUrl);

  if (!postId) {
    return undefined;
  }

  const params = new URLSearchParams({
    chrome: "noheader nofooter noborders transparent",
    dnt: "true",
    hide_thread: "true",
    id: postId,
    lang: "en",
    theme: "dark",
  });

  return `https://platform.twitter.com/embed/Tweet.html?${params.toString()}`;
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
  const [expanded, setExpanded] = useState(false);

  if (!slide.media) {
    return (
      <div className={styles.mediaSlot}>
        <div className={styles.mediaFrame}>
          <div className={styles.mediaPlaceholder}>
            <Sparkles size={26} />
            <span>Evidence / Screenshot / Asset</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <figure className={styles.mediaSlot}>
      <button
        type="button"
        className={`${styles.mediaFrame} ${styles.mediaFrameButton}`}
        onClick={() => setExpanded(true)}
        aria-label={`${slide.media.label} 이미지 확대`}
      >
        <Image
          src={slide.media.src}
          alt={slide.media.alt}
          fill
          sizes={slide.no === 36 ? "(max-width: 1000px) 100vw, 70vw" : "(max-width: 1000px) 100vw, 46vw"}
          unoptimized={slide.media.src.endsWith(".svg")}
          {...(slide.no === 1 ? { priority: true } : { loading: "eager" as const })}
        />
      </button>
      <figcaption className={styles.mediaCaption}>{slide.media.label}</figcaption>
      {expanded ? (
        <button
          type="button"
          className={styles.mediaLightbox}
          onClick={() => setExpanded(false)}
          aria-label={`${slide.media.label} 이미지 닫기`}
        >
          <span className={styles.mediaLightboxImage}>
            <Image
              src={slide.media.src}
              alt={slide.media.alt}
              fill
              sizes="100vw"
              unoptimized={slide.media.src.endsWith(".svg")}
            />
          </span>
          <span className={styles.mediaLightboxLabel}>Click image to close</span>
        </button>
      ) : null}
    </figure>
  );
}
