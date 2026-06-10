import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Home } from "lucide-react";

import styles from "./project-deck.module.css";

type ProcessItem = {
  title: string;
  body: string;
};

type ProofItem = {
  title: string;
  body: string;
};

const loomProcess: ProcessItem[] = [
  { title: "Lead Signal", body: "M01 Saeyan을 first public signal로 두고 Loom의 대표 진입점을 고정" },
  { title: "Identity Lock", body: "13명 멤버 정체성, signal, role, visual language를 제작 제약으로 고정" },
  { title: "Archive Surface", body: "Track 01, member board, storyboard, stage cut, CF lane을 웹에서 탐색 가능하게 정리" },
  { title: "Production Harness", body: "research, song lock, prompt packet, generation review, social handoff를 하나의 loop로 연결" },
  { title: "Approval Gate", body: "paid generation, public release, social package를 founder decision gate로 분리" },
  { title: "Publishing Ops", body: "platform post ledger, metrics snapshot, repeat/transform/watch/pause 판단 구조화" },
];

const musinsaProcess: ProcessItem[] = [
  { title: "Brief Reading", body: "무진장 AI 광고제 브리프를 다양성과 스타일 전환 메시지로 해석" },
  { title: "Message Hook", body: "편견을 벗다, 다양성을 입다, 무진장을 만나다를 중심 문장으로 고정" },
  { title: "Visual Structure", body: "다양한 인물과 스타일을 통해 무진장을 넓은 패션 경험으로 제시" },
  { title: "AI Production", body: "영상 생성 결과를 기준으로 장면 톤, 인물 다양성, 메시지 전달력을 검토" },
  { title: "Publishing", body: "YouTube/Instagram 공개 후 48시간 초기 반응 스냅샷 기록" },
  { title: "Boundary", body: "공식 협업/수상/매출 성과가 아니라 직접 기획/제작/게시한 광고 proof로 표기" },
];

const loomProof: ProofItem[] = [
  { title: "M01 Saeyan", body: "Saeyan first-signal spotlight as the main public entry" },
  { title: "Track 01", body: "Loom Track 01 Root Signal YouTube embed" },
  { title: "Member System", body: "13-member signal deck and identity boards" },
  { title: "Harness", body: "research -> prompt packet -> review -> social package loop" },
];

const musinsaProof: ProofItem[] = [
  { title: "Final Video", body: "MUSINSA Mujinjang AI ad short embedded from YouTube" },
  { title: "Message", body: "편견을 벗다, 다양성을 입다, 무진장을 만나다" },
  { title: "Visual Proof", body: "다양한 인물과 스타일 전환을 보여주는 최종 공개 영상" },
  { title: "Early Result", body: "48h Instagram 1,500 views / YouTube 1,400 views" },
];

function Toolbar({ title }: { title: string }) {
  return (
    <header className={styles.toolbar}>
      <Link className={styles.brand} href="/">
        <span className={styles.brandMark} />
        {title}
      </Link>
      <nav className={styles.nav} aria-label="Deck sections">
        <a href="#s1">01</a>
        <a href="#s2">02</a>
        <a href="#s3">03</a>
        <a href="#s4">04</a>
      </nav>
    </header>
  );
}

function ProcessGrid({ items }: { items: ProcessItem[] }) {
  return (
    <div className={styles.processGrid}>
      {items.map((item, index) => (
        <div className={styles.processItem} key={item.title}>
          <mark>{String(index + 1).padStart(2, "0")}</mark>
          <b>{item.title}</b>
          <span>{item.body}</span>
        </div>
      ))}
    </div>
  );
}

function ProofGrid({ items }: { items: ProofItem[] }) {
  return (
    <div className={styles.proofGrid}>
      {items.map((item) => (
        <div className={styles.proofItem} key={item.title}>
          <b>{item.title}</b>
          <span>{item.body}</span>
        </div>
      ))}
    </div>
  );
}

function DeckHeroLead({
  kicker,
  eyebrow,
  title,
  claim,
  children,
}: {
  kicker: string;
  eyebrow: string;
  title: string;
  claim: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className={styles.titleBlock}>
      <p className={styles.kicker}>{kicker}</p>
      <span className={styles.deckEyebrow}>{eyebrow}</span>
      <h1>{title}</h1>
      <p className={styles.claim}>{claim}</p>
      {children}
    </div>
  );
}

function DeckSectionLead({
  kicker,
  title,
  claim,
  children,
}: {
  kicker: string;
  title: string;
  claim: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className={styles.titleBlock}>
      <p className={styles.kicker}>{kicker}</p>
      <h2>{title}</h2>
      <p className={styles.claim}>{claim}</p>
      {children}
    </div>
  );
}

export function LoomDeckPage() {
  return (
    <main className={styles.deckPage}>
      <Toolbar title="Loom Creative Marketing Harness" />

      <section className={styles.slide} id="s1">
        <div className={styles.slideInner}>
          <DeckHeroLead
            kicker="Case Abstract"
            eyebrow="Loom / Aurora V2"
            title="Loom Creative Marketing Harness"
            claim={
              <>
              M01 Saeyan을 first public signal로 두고, 13-member virtual idol IP를 결과물 갤러리로 끝내지 않고 identity, approval, video/social
              handoff까지 이어지는 AI-native creative marketing system으로 구조화했습니다.
              </>
            }
          >
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <b>Subject</b>
                <span>Loom, a virtual idol IP with member identity structure</span>
              </div>
              <div className={styles.metaItem}>
                <b>Case</b>
                <span>Creative PMM harness for repeatable AI production</span>
              </div>
              <div className={styles.metaItem}>
                <b>Proof</b>
                <span>Track 01, archive, storyboard, CF lane, social package loop</span>
              </div>
            </div>
          </DeckHeroLead>
          <div className={styles.mediaFrame}>
            <iframe
              src="https://www.youtube.com/embed/DUyCAFHZ7X0?rel=0"
              title="Loom Track 01 - Root Signal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <div className={styles.caption}>
              <span>Loom Track 01 - Root Signal</span>
              <a href="https://youtu.be/DUyCAFHZ7X0" target="_blank" rel="noreferrer">
                Open YouTube
              </a>
            </div>
          </div>
        </div>
        <div className={styles.slideNumber}>01 / 04</div>
      </section>

      <section className={styles.slide} id="s2">
        <div className={`${styles.slideInner} ${styles.wide}`}>
          <DeckSectionLead
            kicker="Public Proof Surface"
            title="홈, 멤버, 스토리보드, CF lane을 한 화면 체계로 묶었습니다."
            claim={
              <>
              Loom 웹은 M01 Saeyan을 대표 진입점으로 두고 Track 01과 멤버 identity를 보여주는 공개형 proof surface이고, Aurora V2 하네스는 그
              뒤의 제작/검토/게시 운영 구조입니다.
              </>
            }
          />
          <div className={styles.proofGrid}>
            <figure className={styles.mediaFrame}>
              <img src="/loom-deck/saeyan-spotlight.png" alt="Loom M01 Saeyan first-signal spotlight" />
              <figcaption className={styles.caption}>M01 Saeyan first-signal spotlight</figcaption>
            </figure>
          </div>
        </div>
        <div className={styles.slideNumber}>02 / 04</div>
      </section>

      <section className={styles.slide} id="s3">
        <div className={styles.slideInner}>
          <DeckSectionLead
            kicker="Production Loop"
            title="제작물은 approval gate를 지나 social package로 넘어갑니다."
            claim={
              <>
              PRE-00 research부터 storyboard, prompt packet, generation review, edit/package, publishing ledger까지
              이어지는 반복 가능한 콘텐츠 생산 구조입니다.
              </>
            }
          />
          <ProcessGrid items={loomProcess} />
        </div>
        <div className={styles.slideNumber}>03 / 04</div>
      </section>

      <section className={styles.slide} id="s4">
        <div className={styles.slideInner}>
          <DeckSectionLead
            kicker="Portfolio Evidence"
            title="AI content marketer로 읽히는 증거만 남깁니다."
            claim={
              <>
              growth/performance 성과가 아니라 IP identity, creative direction, production harness, publishing ops
              중심의 실행 증거입니다.
              </>
            }
          >
            <ProofGrid items={loomProof} />
            <div className={styles.buttonRow}>
              <Link className={styles.button} href="/">
                <Home size={16} /> Resume Top
              </Link>
              <Link className={`${styles.button} ${styles.buttonSecondary}`} href="/loom">
                Project Abstract <ArrowRight size={16} />
              </Link>
            </div>
          </DeckSectionLead>
          <figure className={styles.mediaFrame}>
            <img src="/loom-deck/saeyan-spotlight.png" alt="Loom Saeyan-led proof surface" />
            <figcaption className={styles.caption}>Saeyan-led proof surface</figcaption>
          </figure>
        </div>
        <div className={styles.slideNumber}>04 / 04</div>
      </section>
    </main>
  );
}

export function MusinsaDeckPage() {
  return (
    <main className={styles.deckPage}>
      <Toolbar title="MUSINSA Mujinjang AI Ad" />

      <section className={styles.slide} id="s1">
        <div className={styles.slideInner}>
          <DeckHeroLead
            kicker="Case Abstract"
            eyebrow="MUSINSA Mujinjang AI Ad"
            title="MUSINSA Diversity Message Film"
            claim={
              <>
              무신사 무진장 AI 광고제 브리프를 24초 숏폼 CF로 전환했습니다. 핵심 메시지는
              `편견을 벗다, 다양성을 입다, 무진장을 만나다`입니다.
              </>
            }
          >
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <b>Format</b>
                <span>24s short-form AI CF</span>
              </div>
              <div className={styles.metaItem}>
                <b>Message</b>
                <span>편견을 벗다, 다양성을 입다, 무진장을 만나다</span>
              </div>
              <div className={styles.metaItem}>
                <b>Early Result</b>
                <span>Instagram 1,500 / YouTube 1,400 views in 48h</span>
              </div>
            </div>
          </DeckHeroLead>
          <div className={styles.mediaFrame}>
            <iframe
              src="https://www.youtube.com/embed/70blJ_6wh6s?rel=0&modestbranding=1"
              title="MUSINSA Mujinjang AI ad short"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <div className={styles.caption}>
              <span>MUSINSA Mujinjang AI ad short</span>
              <a href="https://youtu.be/70blJ_6wh6s" target="_blank" rel="noreferrer">
                Open YouTube
              </a>
            </div>
          </div>
        </div>
        <div className={styles.slideNumber}>01 / 04</div>
      </section>

      <section className={styles.slide} id="s2">
        <div className={styles.slideInner}>
          <DeckSectionLead
            kicker="Creative Route"
            title="무진장을 다양한 스타일이 만나는 패션 경험으로 읽히게 했습니다."
            claim={
              <>
              영상의 중심은 장치나 설정이 아니라 사람, 스타일, 다양성입니다. 할인 고지보다 브랜드가 말하고 싶은
              태도가 먼저 남도록 장면을 정리했습니다.
              </>
            }
          />
          <figure className={styles.mediaFrame}>
            <img
              src="https://i.ytimg.com/vi/70blJ_6wh6s/maxresdefault.jpg"
              alt="MUSINSA final video thumbnail"
            />
            <figcaption className={styles.caption}>Final video thumbnail</figcaption>
          </figure>
        </div>
        <div className={styles.slideNumber}>02 / 04</div>
      </section>

      <section className={styles.slide} id="s3">
        <div className={styles.slideInner}>
          <DeckSectionLead
            kicker="Execution Process"
            title="브리프 해석에서 메시지 구조, 생성 검토, 게시까지 연결했습니다."
            claim={
              <>
              PMM 메시지, content hook, AI video generation, public posting을 하나의 캠페인 실행 흐름으로
              정리했습니다.
              </>
            }
          />
          <ProcessGrid items={musinsaProcess} />
        </div>
        <div className={styles.slideNumber}>03 / 04</div>
      </section>

      <section className={styles.slide} id="s4">
        <div className={styles.slideInner}>
          <DeckSectionLead
            kicker="Portfolio Evidence"
            title="결과물과 제작 판단을 같이 보여줍니다."
            claim={
              <>
              이 케이스는 마케팅 브리프를 AI 숏폼 광고 구조로 전환하고, 직접 게시한 뒤 초기 반응까지 기록한
              증거로 배치합니다.
              </>
            }
          >
            <ProofGrid items={musinsaProof} />
            <div className={styles.buttonRow}>
              <Link className={styles.button} href="/">
                <Home size={16} /> Resume Top
              </Link>
              <Link className={`${styles.button} ${styles.buttonSecondary}`} href="/musinsa">
                Project Abstract <ArrowRight size={16} />
              </Link>
            </div>
          </DeckSectionLead>
          <figure className={styles.mediaFrame}>
            <img
              src="https://i.ytimg.com/vi/70blJ_6wh6s/maxresdefault.jpg"
              alt="MUSINSA final video thumbnail"
            />
            <figcaption className={styles.caption}>Final video thumbnail</figcaption>
          </figure>
        </div>
        <div className={styles.slideNumber}>04 / 04</div>
      </section>
    </main>
  );
}
