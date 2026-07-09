import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  FileBlob,
  Presentation,
  PresentationFile,
} from "/Users/yuminseog/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";
import { createSlideContext } from "/Users/yuminseog/.codex/plugins/cache/openai-primary-runtime/presentations/26.614.11602/skills/presentations/scripts/artifact_tool_utils.mjs";

const ROOT = "/Users/yuminseog/portfolio";
const SCHOOL_ROOT = path.join(ROOT, "docs/source/my_real_projects_only/학교");
const WORKSPACE = path.join(
  ROOT,
  "outputs/manual-20260615-school-merge/presentations/school-portfolio-merge",
);
const OUTPUT_DIR = path.join(WORKSPACE, "output");
const QA_DIR = path.join(WORKSPACE, "qa");
const SLIDE_SIZE = { width: 1280, height: 720 };

const ARTIFACT = "/Users/yuminseog/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const FORBIDDEN_TEXT = [
  "musinsa.com",
  "musinsa",
  "무신사",
  "김주호",
  "박민선",
  "심다현",
  "윤병준",
  "전세연",
  "김주형",
  "김승환",
  "지혜경",
  "신은정",
  "엄태익",
  "신현준",
  "송준서",
  "최정희",
  "김주찬",
  "박희선",
  "2051053",
  "2251083",
];

const FINAL_SCAN_TERMS = [
  ...FORBIDDEN_TEXT,
  "아리아드네",
  "No-X",
  "Original X post",
  "Share on X",
  "X post",
  "X reply",
  "X API",
  "Twitter",
  "tweet",
];

const THEME = {
  bg: "#07111F",
  bg2: "#0B1628",
  ink: "#F5F0E8",
  muted: "#A9B7C8",
  rule: "#25364B",
  teal: "#54D6C3",
  amber: "#F0B85A",
  blue: "#78A7FF",
  red: "#E86F61",
  white: "#FFFFFF",
};

const PNG_NORMALIZE_SCRIPT = String.raw`
import io
import sys
from PIL import Image

data = sys.stdin.buffer.read()
try:
    im = Image.open(io.BytesIO(data))
    im.load()
except Exception:
    sys.stdout.buffer.write(data)
    raise SystemExit(0)

if im.format != "PNG" or im.mode in {"RGB", "RGBA"}:
    sys.stdout.buffer.write(data)
    raise SystemExit(0)

out = io.BytesIO()
im.convert("RGBA").save(out, format="PNG")
sys.stdout.buffer.write(out.getvalue())
`;

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(QA_DIR, { recursive: true });

function nfc(value) {
  return String(value).normalize("NFC");
}

function listFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full));
    else out.push(full);
  }
  return out;
}

const pptFiles = listFiles(SCHOOL_ROOT).filter((file) => /\.pptx?$/i.test(file));

function findPpt(...fragments) {
  const normalized = fragments.map(nfc);
  const matches = pptFiles.filter((file) => {
    const haystack = nfc(file);
    return normalized.every((fragment) => haystack.includes(fragment));
  });
  if (matches.length !== 1) {
    throw new Error(`Expected one PPT for ${fragments.join(" / ")}, found ${matches.length}:\n${matches.join("\n")}`);
  }
  return matches[0];
}

function cleanVisibleText(value) {
  if (typeof value !== "string") return value;
  let text = value;
  for (const term of FORBIDDEN_TEXT) {
    text = text.replaceAll(term, "");
  }
  text = text
    .replace(/[ \t]+,/g, ",")
    .replace(/,\s*,/g, ",")
    .replace(/[ \t]+\/[ \t]+\//g, "/")
    .replace(/\n[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n");
  return text;
}

function scrubStrings(node) {
  if (!node || typeof node !== "object" || ArrayBuffer.isView(node) || node instanceof ArrayBuffer) return;
  for (const [key, value] of Object.entries(node)) {
    if (typeof value === "string") {
      node[key] = cleanVisibleText(value);
    } else if (Array.isArray(value)) {
      value.forEach(scrubStrings);
    } else if (value && typeof value === "object") {
      scrubStrings(value);
    }
  }
}

function remapProto(proto, prefix) {
  const cloned = structuredClone(proto);
  const idMap = new Map();
  for (const collection of ["slides", "images", "charts", "layouts"]) {
    for (const item of cloned[collection] ?? []) {
      if (!item.id) continue;
      const safeId = `${prefix}_${String(item.id).replace(/[^A-Za-z0-9_.-]/g, "_")}`;
      idMap.set(item.id, safeId);
      item.id = safeId;
    }
  }
  function walk(node) {
    if (!node || typeof node !== "object" || ArrayBuffer.isView(node) || node instanceof ArrayBuffer) return;
    for (const [key, value] of Object.entries(node)) {
      if (typeof value === "string" && idMap.has(value)) {
        node[key] = idMap.get(value);
      } else if (Array.isArray(value)) {
        value.forEach(walk);
      } else if (value && typeof value === "object") {
        walk(value);
      }
    }
  }
  walk(cloned);
  return cloned;
}

function normalizePngAssets(proto) {
  for (const image of proto.images ?? []) {
    if (image.contentType !== "image/png" || !image.data || image.data.byteLength === 0) continue;
    const result = spawnSync("python3", ["-c", PNG_NORMALIZE_SCRIPT], {
      input: Buffer.from(image.data),
      maxBuffer: 120 * 1024 * 1024,
    });
    if (result.status !== 0) {
      const stderr = result.stderr?.toString("utf8") ?? "";
      throw new Error(`PNG normalization failed for ${image.id}: ${stderr}`);
    }
    image.data = new Uint8Array(result.stdout);
  }
}

async function importPptPart({ key, file, scrub = true }) {
  const presentation = await PresentationFile.importPptx(await FileBlob.load(file));
  const proto = presentation.toProto();
  if (scrub) scrubStrings(proto);
  return {
    key,
    source: file,
    proto: remapProto(proto, key),
    slideCount: proto.slides?.length ?? presentation.slides.count,
  };
}

async function createGeneratedPart(key, builder) {
  const presentation = Presentation.create(undefined, { slideSize: SLIDE_SIZE });
  const ctx = createSlideContext(presentation, {
    slideSize: SLIDE_SIZE,
    workspaceDir: WORKSPACE,
    assetDir: path.join(WORKSPACE, "assets"),
    titleFont: "Aptos Display",
    bodyFont: "Aptos",
  });
  await builder(presentation, ctx);
  const proto = presentation.toProto();
  scrubStrings(proto);
  return {
    key,
    source: "generated",
    proto: remapProto(proto, key),
    slideCount: proto.slides?.length ?? presentation.slides.count,
  };
}

function drawBase(slide, ctx, accent = THEME.teal) {
  ctx.addShape(slide, {
    x: 0,
    y: 0,
    w: 1280,
    h: 720,
    fill: THEME.bg,
    line: ctx.line(),
  });
  ctx.addShape(slide, {
    x: 0,
    y: 0,
    w: 1280,
    h: 12,
    fill: accent,
    line: ctx.line(),
  });
  ctx.addShape(slide, {
    x: 76,
    y: 640,
    w: 1128,
    h: 1.5,
    fill: THEME.rule,
    line: ctx.line(),
  });
}

function text(slide, ctx, body, x, y, w, h, options = {}) {
  return ctx.addText(slide, {
    text: body,
    x,
    y,
    w,
    h,
    fontSize: options.size ?? 22,
    color: options.color ?? THEME.ink,
    bold: options.bold ?? false,
    typeface: options.face ?? "Aptos",
    valign: options.valign ?? "top",
    align: options.align ?? "left",
    insets: options.insets ?? { left: 0, right: 0, top: 0, bottom: 0 },
    fill: options.fill ?? "#00000000",
    line: options.line ?? ctx.line(),
    name: options.name,
  });
}

function sectionLabel(slide, ctx, label, accent = THEME.teal) {
  ctx.addShape(slide, {
    x: 76,
    y: 78,
    w: 8,
    h: 28,
    fill: accent,
    line: ctx.line(),
  });
  text(slide, ctx, label, 100, 75, 600, 32, {
    size: 17,
    color: THEME.muted,
    bold: true,
  });
}

function coverSlide(presentation, ctx, { title, subtitle, chapters }) {
  const slide = presentation.slides.add();
  drawBase(slide, ctx, THEME.amber);
  sectionLabel(slide, ctx, "2251014 유민석", THEME.amber);
  text(slide, ctx, title, 76, 172, 860, 86, {
    size: 46,
    bold: true,
    face: "Aptos Display",
  });
  text(slide, ctx, subtitle, 78, 274, 780, 56, {
    size: 22,
    color: THEME.muted,
  });
  const startY = 386;
  chapters.forEach((chapter, index) => {
    const y = startY + index * 38;
    text(slide, ctx, String(index + 1).padStart(2, "0"), 86, y, 48, 26, {
      size: 16,
      color: index % 2 ? THEME.blue : THEME.teal,
      bold: true,
    });
    text(slide, ctx, chapter, 150, y - 2, 820, 30, {
      size: 20,
      color: THEME.ink,
    });
  });
  text(slide, ctx, "최종 병합본 / 타인 이름 제거 기준", 76, 660, 620, 24, {
    size: 15,
    color: THEME.muted,
  });
}

function dividerSlide(presentation, ctx, { no, semester, course, note, accent = THEME.teal }) {
  const slide = presentation.slides.add();
  drawBase(slide, ctx, accent);
  sectionLabel(slide, ctx, `CHAPTER ${String(no).padStart(2, "0")} / ${semester}`, accent);
  text(slide, ctx, course, 76, 182, 980, 82, {
    size: 43,
    bold: true,
    face: "Aptos Display",
  });
  text(slide, ctx, note, 80, 292, 840, 80, {
    size: 23,
    color: THEME.muted,
  });
  ctx.addShape(slide, {
    x: 76,
    y: 422,
    w: 560,
    h: 4,
    fill: accent,
    line: ctx.line(),
  });
  text(slide, ctx, "2251014 유민석", 80, 662, 420, 24, {
    size: 15,
    color: THEME.muted,
  });
}

function card(slide, ctx, { x, y, w, h, kicker, body, accent = THEME.teal }) {
  ctx.addShape(slide, {
    x,
    y,
    w,
    h,
    fill: THEME.bg2,
    line: { style: "solid", fill: THEME.rule, width: 1 },
  });
  ctx.addShape(slide, {
    x,
    y,
    w,
    h: 5,
    fill: accent,
    line: ctx.line(),
  });
  text(slide, ctx, kicker, x + 18, y + 20, w - 36, 24, {
    size: 15,
    color: accent,
    bold: true,
  });
  text(slide, ctx, body, x + 18, y + 54, w - 36, h - 70, {
    size: 18,
    color: THEME.ink,
  });
}

function contentSlide(presentation, ctx, spec) {
  const slide = presentation.slides.add();
  drawBase(slide, ctx, spec.accent ?? THEME.teal);
  sectionLabel(slide, ctx, spec.kicker, spec.accent ?? THEME.teal);
  text(slide, ctx, spec.title, 76, 124, 780, 62, {
    size: 34,
    bold: true,
    face: "Aptos Display",
  });
  text(slide, ctx, spec.claim, 78, 200, 800, 54, {
    size: 20,
    color: THEME.muted,
  });

  const cards = spec.cards ?? [];
  if (spec.image) {
    ctx.addImage(slide, {
      path: path.join(ROOT, spec.image),
      x: 898,
      y: 118,
      w: 292,
      h: 420,
      fit: "cover",
      alt: spec.title,
    });
  }
  const gridX = 78;
  const gridY = 300;
  const cardW = spec.image ? 250 : 350;
  const cardH = 138;
  cards.forEach((item, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    card(slide, ctx, {
      x: gridX + col * (cardW + 20),
      y: gridY + row * (cardH + 22),
      w: cardW,
      h: cardH,
      kicker: item.kicker,
      body: item.body,
      accent: item.accent ?? spec.accent ?? THEME.teal,
    });
  });
  text(slide, ctx, "2251014 유민석", 80, 662, 420, 24, {
    size: 15,
    color: THEME.muted,
  });
}

function processSlide(presentation, ctx, spec) {
  const slide = presentation.slides.add();
  drawBase(slide, ctx, spec.accent ?? THEME.teal);
  sectionLabel(slide, ctx, spec.kicker, spec.accent ?? THEME.teal);
  text(slide, ctx, spec.title, 76, 124, 860, 62, {
    size: 34,
    bold: true,
    face: "Aptos Display",
  });
  text(slide, ctx, spec.claim, 78, 200, 820, 54, {
    size: 20,
    color: THEME.muted,
  });
  const steps = spec.steps ?? [];
  const startX = 90;
  const y = 360;
  const stepW = 195;
  steps.forEach((step, index) => {
    const x = startX + index * 218;
    ctx.addShape(slide, {
      x,
      y,
      w: stepW,
      h: 112,
      fill: THEME.bg2,
      line: { style: "solid", fill: spec.accent ?? THEME.teal, width: 1.4 },
    });
    text(slide, ctx, String(index + 1), x + 18, y + 18, 34, 30, {
      size: 18,
      color: spec.accent ?? THEME.teal,
      bold: true,
    });
    text(slide, ctx, step, x + 54, y + 18, stepW - 72, 64, {
      size: 18,
      color: THEME.ink,
    });
    if (index < steps.length - 1) {
      ctx.addShape(slide, {
        x: x + stepW + 16,
        y: y + 54,
        w: 40,
        h: 3,
        fill: THEME.rule,
        line: ctx.line(),
      });
    }
  });
  text(slide, ctx, spec.note ?? "", 90, 548, 980, 48, {
    size: 18,
    color: THEME.muted,
  });
  text(slide, ctx, "2251014 유민석", 80, 662, 420, 24, {
    size: 15,
    color: THEME.muted,
  });
}

function buildAdsbSlides(presentation, ctx) {
  const slides = [
    {
      kicker: "ADSB / Overview",
      title: "AI short-form creative direction case",
      claim: "Andersson Bell 산학공동연구에서 dog-and-ball hook, prompt direction, image-to-video iteration으로 정리한 산출물.",
      image: "public/adsb/adsb-cover.webp",
      cards: [
        { kicker: "Role", body: "hook / motif rule / prompt direction / motion direction" },
        { kicker: "Tools", body: "Midjourney, Gemini, Nano Banana, Kling 기반 제작 흐름" },
        { kicker: "Boundary", body: "브랜드 전략 전체나 최종 리터칭 단독 기여로 주장하지 않음" },
      ],
    },
    {
      kicker: "ADSB / Scope",
      title: "브랜드 맥락과 개인 기여 범위를 분리",
      claim: "공유된 브랜드 reading을 dog-and-ball hook과 video-ready prompt/motion direction으로 좁힌 케이스.",
      image: "public/adsb/source-assets/adsb-key-msg.webp",
      cards: [
        { kicker: "Team Scope", body: "reference reading / tone discussion / feedback review" },
        { kicker: "My Scope", body: "dog-and-ball hook / motif rule / image-to-video iteration" },
        { kicker: "Not Claimed", body: "campaign performance / full brand strategy / sole final ownership" },
      ],
    },
    {
      kicker: "ADSB / Mood",
      title: "Mutated mundane를 첫 프레임의 hook으로 전환",
      claim: "신호등, 횡단보도, 도시적 고정 앵글을 dog-and-ball motif와 연결해 첫 인상을 정리.",
      image: "public/adsb/source-assets/adsb-moodboard.webp",
      cards: [
        { kicker: "Tone", body: "실험적이지만 과한 판타지보다 도시적이고 절제된 인상" },
        { kicker: "Motif", body: "dog / ball / crosswalk를 반복 가능한 숏폼 오브젝트로 압축" },
        { kicker: "Risk Cut", body: "콜라주 중심 방향은 무드 희석과 시선 분산으로 제외" },
      ],
    },
    {
      kicker: "ADSB / Direction",
      title: "확산형 아이디어를 고정 앵글 컷으로 좁힘",
      claim: "아이디어를 더하는 대신 약한 방향을 버리고, 브랜드-fit 장면 규칙으로 정리했다.",
      image: "public/adsb/adsb-planning-draft.webp",
      cards: [
        { kicker: "Discard", body: "collage-heavy / weak focus / mood dilution" },
        { kicker: "Keep", body: "dog + ball + crosswalk / urban noon mood / fixed angle" },
        { kicker: "Rule", body: "피드백을 취향 코멘트가 아니라 production rule로 반영" },
      ],
    },
    {
      kicker: "ADSB / Workflow",
      title: "AI를 단독 생성이 아니라 제작 워크플로우로 사용",
      claim: "brand mood, generated frames, motion test, feedback revision이 한 흐름으로 이어진다.",
      image: "public/adsb/adsb-production.webp",
      cards: [
        { kicker: "Reading", body: "브랜드 무드를 hook과 urban fixed-angle rule로 압축" },
        { kicker: "Frames", body: "후보 frame을 만들고 비교하며 image readiness 확인" },
        { kicker: "Revision", body: "피드백을 다음 생성/컷 선택 기준으로 전환" },
      ],
    },
    {
      kicker: "ADSB / Prompt",
      title: "subject, object, camera, motion 기준으로 반복",
      claim: "더 많은 이미지를 만드는 것이 아니라 남길 컷의 규칙을 정하는 반복 과정.",
      image: "public/adsb/adsb-images-draft.webp",
      cards: [
        { kicker: "Prompt Structure", body: "motif / subject / background / camera / lighting / mood" },
        { kicker: "Motion Readiness", body: "Kling으로 움직임을 붙였을 때 무드가 유지되는지 확인" },
        { kicker: "Selection", body: "과한 효과, 약한 임팩트, 흐린 톤을 제외" },
      ],
    },
    {
      kicker: "ADSB / Output",
      title: "storyboard package에서 15초 숏폼으로 수렴",
      claim: "dog-and-ball hook, 대표 이미지, image-to-video 테스트를 하나의 숏폼 구조로 연결.",
      image: "public/adsb/adsb-kling-product.webp",
      cards: [
        { kicker: "Hook", body: "0-3s / crosswalk와 dog-and-ball motif로 첫 프레임 확보" },
        { kicker: "Sequence", body: "3-12s / fixed-angle urban motion과 selected frames" },
        { kicker: "Close", body: "12-15s / 절제된 final frame으로 마무리" },
      ],
    },
    {
      kicker: "ADSB / Learning",
      title: "생성량보다 선택 판단이 산출물을 만든다",
      claim: "hook clarity, prompt direction, motion direction, feedback rule을 기준으로 결과를 좁힌 사례.",
      image: "public/adsb/adsb-production.webp",
      cards: [
        { kicker: "Hook Clarity", body: "첫 프레임에서 바로 읽히는 장면을 우선" },
        { kicker: "Discard Logic", body: "버린 방향을 기준화해 다음 반복의 품질을 높임" },
        { kicker: "What It Shows", body: "AI creative direction을 산출물까지 수렴시키는 판단력" },
      ],
    },
  ];
  slides.forEach((spec) => contentSlide(presentation, ctx, spec));
}

function buildBemoonSlides(presentation, ctx) {
  contentSlide(presentation, ctx, {
    kicker: "BE;MOON / Problem",
    title: "구매 인증과 진위 확인이 분리된 패션 신뢰 문제",
    claim: "DPP 대응 부담, 가품 유통, 내부형 보증서의 한계를 온라인 패션스타트업 과제로 정리.",
    accent: THEME.amber,
    image: "public/bemoon/bemoon-trust-rail.svg",
    cards: [
      { kicker: "DPP Pressure", body: "제품 이력과 traceability 요구가 브랜드 운영 부담으로 이동" },
      { kicker: "Counterfeit Risk", body: "가품 유통은 브랜드 신뢰와 2차 거래 신뢰를 동시에 훼손" },
      { kicker: "Warranty Gap", body: "내부형 보증서는 외부 검증과 재거래 증명에 약함" },
    ],
  });
  processSlide(presentation, ctx, {
    kicker: "BE;MOON / Solution",
    title: "OMS와 연결되는 digital warranty SaaS",
    claim: "구매 인증, 증명 발급, 진위 검증, 혜택 연결을 하나의 trust rail로 묶는다.",
    accent: THEME.amber,
    steps: ["Product purchase", "QR / WL authentication", "Digital certificate", "Verification / benefits", "OMS status sync"],
    note: "기획/사업계획서 기반 케이스이며, 출시 성과나 매출 검증으로 말하지 않는다.",
  });
  contentSlide(presentation, ctx, {
    kicker: "BE;MOON / Flow",
    title: "구매 이후의 증명 흐름을 브랜드 운영 데이터로 환원",
    claim: "고객이 확인하는 보증서와 브랜드가 관리하는 OMS 상태를 같은 서비스 레일 안에 둔다.",
    accent: THEME.amber,
    cards: [
      { kicker: "Consumer", body: "구매 인증 후 디지털 보증서를 받아 진위와 혜택을 확인" },
      { kicker: "Brand", body: "발급/조회/교환/환불 상태를 OMS 운영 흐름과 연결" },
      { kicker: "External", body: "2차 거래나 외부 검증에서 사용할 수 있는 proof layer로 확장" },
    ],
  });
  contentSlide(presentation, ctx, {
    kicker: "BE;MOON / MVP",
    title: "Brand / Core / Proof / Channel로 MVP를 분리",
    claim: "초기 구현은 모든 커머스가 아니라 보증서 발급과 검증의 최소 구조에 집중한다.",
    accent: THEME.amber,
    cards: [
      { kicker: "Brand / OMS", body: "제품·주문·상태 데이터를 보증서 발급 기준으로 정리" },
      { kicker: "BE;MOON Core", body: "인증, 발급, 조회, 상태 변경을 관리하는 서비스 중심" },
      { kicker: "Proof Layer", body: "외부 검증과 소비자 확인을 위한 certificate surface" },
      { kicker: "Channels", body: "consumer page, resale proof, benefit verification으로 확장" },
    ],
  });
  contentSlide(presentation, ctx, {
    kicker: "BE;MOON / Business",
    title: "수익 모델은 검증 성과가 아니라 사업계획서 가정으로 표기",
    claim: "보증서 발급 SaaS와 거래 수수료 모델을 초기 사업 가정으로만 사용한다.",
    accent: THEME.amber,
    cards: [
      { kicker: "Issuance SaaS", body: "보증서 1건당 단가 200원 가정" },
      { kicker: "Transaction Fee", body: "1차 거래 0.5-1%, 2차 거래 5% 가정" },
      { kicker: "Data Service", body: "리포트/데이터 부가 서비스는 장기 확장 항목" },
    ],
  });
  contentSlide(presentation, ctx, {
    kicker: "BE;MOON / Boundary",
    title: "온라인 패션스타트업 캡스톤 제출용 경계",
    claim: "시장 숫자와 매출은 달성 증거가 아니라 기획 모델링이며, 최종본에는 개인 이름을 남기지 않는다.",
    accent: THEME.amber,
    cards: [
      { kicker: "Use", body: "문제 정의, 서비스 레일, MVP 구조, 사업 모델 가정을 보여주는 케이스" },
      { kicker: "Avoid", body: "출시, 매출, 고객 검증, 시장 점유율을 달성한 것처럼 말하지 않음" },
      { kicker: "Identity", body: "제출본에는 2251014 유민석 외 개인 이름을 노출하지 않음" },
    ],
  });
}

function buildAheyaSlides(presentation, ctx) {
  const slides = [
    {
      kicker: "AHEYA / Overview",
      title: "first-signal product and GTM planning case",
      claim: "AI service idea를 공개하고 small crypto support와 Good/Improve feedback을 받을 수 있는 제품 기획 사례.",
      image: "public/aheya/logo.png",
      cards: [
        { kicker: "Role", body: "product planning / GTM framing / content system / measurement design" },
        { kicker: "Definition", body: "AI builder와 Web3 user의 작은 관심을 기록 가능한 반응으로 연결" },
        { kicker: "Boundary", body: "시장 검증이나 전환 성과가 아니라 초기 제품 방향 점검" },
      ],
    },
    {
      kicker: "AHEYA / Narrowing",
      title: "온체인 중심 기획을 작은 후원과 피드백 흐름으로 축소",
      claim: "큰 기술 설명보다 사용자가 바로 이해하고 남길 수 있는 행동을 먼저 설계했다.",
      cards: [
        { kicker: "Before", body: "smart contract / deploy / technical verification 중심의 큰 기획" },
        { kicker: "Shift", body: "소액 후원, Good/Improve, saved feedback record로 첫 행동 축소" },
        { kicker: "Now", body: "public product surface와 wallet-signed receipt를 분리해 설명" },
      ],
    },
    {
      kicker: "AHEYA / Problem",
      title: "잔여 온체인 자산과 AI builder의 첫 반응 문제를 연결",
      claim: "작은 자산과 작은 관심이 실제 피드백 기록으로 남기 어려운 공통 문제를 제품 과제로 정의.",
      cards: [
        { kicker: "Web3 User", body: "지갑에 남은 작은 자산이 다시 쓰기에는 금액·gas·용도 장벽이 있음" },
        { kicker: "AI Builder", body: "demo는 빠르게 만들 수 있지만 첫 사용자 반응과 개선 근거가 부족함" },
        { kicker: "Bridge", body: "small support, Good/Improve, saved record로 의미 있는 첫 신호를 남김" },
      ],
    },
    {
      kicker: "AHEYA / Surface",
      title: "화면별 역할을 public idea, action, record로 분리",
      claim: "각 화면이 아이디어 이해, 후원/피드백 행동, 다음 업데이트 기록 중 어떤 역할을 맡는지 정리.",
      cards: [
        { kicker: "Public Idea", body: "아이디어를 한 화면에서 이해하고 시작하는 공개 화면" },
        { kicker: "Action Surface", body: "암호화폐 소액 후원과 Good/Improve를 남기는 행동 화면" },
        { kicker: "Feedback Record", body: "다음 업데이트에 참고할 수 있는 저장된 피드백 기록" },
      ],
    },
    {
      kicker: "AHEYA / Target",
      title: "첫 대상은 모든 사용자가 아니라 데모를 만든 AI builder",
      claim: "기술 설명보다 결과를 먼저 보여주고, 후원과 상세 피드백을 최소 행동으로 둔다.",
      cards: [
        { kicker: "Audience", body: "라이브 데모는 있지만 첫 사용자와 명확한 피드백이 부족한 builder" },
        { kicker: "Offer", body: "아이디어를 공개하고 작은 후원과 개선 피드백을 받을 수 있는 경로" },
        { kicker: "Measure", body: "방문, 후원, 피드백 기록을 분리해 다음 판단 기준으로 사용" },
      ],
    },
    {
      kicker: "AHEYA / MVP",
      title: "필수 흐름만 남기고 reward-first framing은 보류",
      claim: "후원, 상세 피드백, 저장 기록, 이벤트 설계만 MVP에 두고 기술 깊이는 뒤로 보냈다.",
      cards: [
        { kicker: "Included", body: "idea surface / small support / detailed feedback / saved record" },
        { kicker: "Deferred", body: "reward-first framing, 깊은 기술 설명, 복잡한 검증 흐름" },
        { kicker: "Reason", body: "처음 보는 사람이 바로 남길 수 있는 반응을 우선" },
      ],
    },
  ];
  slides.forEach((spec) => contentSlide(presentation, ctx, { accent: THEME.teal, ...spec }));
  contentSlide(presentation, ctx, {
    kicker: "AHEYA / Core Rail",
    title: "live idea를 reviewable signal로 바꾸는 흐름",
    claim: "open, support, Good/Improve, proof, reuse를 하나의 제품 레일로 정리.",
    accent: THEME.teal,
    image: "public/aheya/ppt/aheya-core-rail-flow.svg",
    cards: [
      { kicker: "Open", body: "AI service idea를 이해 가능한 공개 화면으로 정리" },
      { kicker: "Support", body: "작은 후원으로 관심을 행동으로 전환" },
      { kicker: "Reuse", body: "feedback record를 다음 업데이트의 판단 재료로 사용" },
    ],
  });
  const remaining = [
    {
      kicker: "AHEYA / KPI",
      title: "측정은 성과 주장보다 다음 판단을 위한 이벤트 설계",
      claim: "방문, 후원, 피드백, 기록 저장을 서로 다른 신호로 나눠 제품 개선 판단에 사용.",
      cards: [
        { kicker: "Visit", body: "idea surface가 실제로 열렸는지 확인하는 기본 이벤트" },
        { kicker: "Support", body: "작은 금액의 후원이 행동 전환으로 이어지는지 확인" },
        { kicker: "Feedback", body: "Good/Improve가 다음 업데이트에 쓸 수 있는지 기록" },
      ],
    },
    {
      kicker: "AHEYA / Event Plan",
      title: "event plan은 유입 증명이 아니라 제품 상태 관찰용",
      claim: "이벤트를 마케팅 성과처럼 과장하지 않고, 서비스 흐름의 어느 지점이 약한지 보는 기준으로 둔다.",
      cards: [
        { kicker: "Entry", body: "idea open, page view, CTA click" },
        { kicker: "Action", body: "support intent, wallet confirmation, feedback submit" },
        { kicker: "Record", body: "saved record, builder review, next update reference" },
      ],
    },
    {
      kicker: "AHEYA / Feedback",
      title: "Good/Improve를 단순 반응이 아니라 개선 입력으로 설계",
      claim: "짧은 칭찬과 개선점을 분리해 builder가 다시 읽을 수 있는 feedback record로 남긴다.",
      cards: [
        { kicker: "Good", body: "아이디어의 강점과 사용자가 이해한 가치를 짧게 남김" },
        { kicker: "Improve", body: "다음 버전에서 고칠 점과 모호한 부분을 분리" },
        { kicker: "Review", body: "builder가 업데이트 전 다시 볼 수 있는 기록으로 축적" },
      ],
    },
    {
      kicker: "AHEYA / Export",
      title: "KPI export는 보고용 숫자보다 의사결정 단위",
      claim: "CSV/ledger 개념은 외부 과시가 아니라 다음 기획 판단을 위한 최소 기록으로 사용.",
      cards: [
        { kicker: "Rows", body: "방문, 후원, 피드백, 저장 기록을 같은 기준으로 정리" },
        { kicker: "Decision", body: "어떤 문구와 흐름을 바꿀지 판단하는 근거로 사용" },
        { kicker: "Boundary", body: "전환율, 매출, 시장 검증의 성과 지표로 주장하지 않음" },
      ],
    },
    {
      kicker: "AHEYA / Measurement",
      title: "measurement design은 product/GTM 학습용 산출물",
      claim: "마케팅 분류에서는 결과 수치보다 어떤 신호를 봐야 하는지 설계한 점이 핵심.",
      cards: [
        { kicker: "Product", body: "어느 기능이 이해되고 어느 단계에서 이탈하는지 관찰" },
        { kicker: "GTM", body: "처음 보는 사용자가 어떤 문구에 반응하는지 확인" },
        { kicker: "Service", body: "feedback record가 다음 업데이트에 실제로 쓸 수 있는지 점검" },
      ],
    },
    {
      kicker: "AHEYA / Fit",
      title: "패션창업 캡스톤에서는 제품화와 GTM 구조가 핵심",
      claim: "브랜드가 아니라 디지털 패션/AI 서비스 아이디어를 출시 전 검토하는 startup planning case로 배치.",
      cards: [
        { kicker: "Startup", body: "문제, 타깃, 행동, 측정 기준을 제품 출시 전 구조화" },
        { kicker: "Fashion Link", body: "AI service idea와 creator/product feedback flow를 패션 창업 문맥에 연결" },
        { kicker: "Submission", body: "성과 과장 없이 기획과 검증 설계의 질을 보여줌" },
      ],
    },
    {
      kicker: "AHEYA / Model",
      title: "수익보다 반복 가능한 first-signal loop를 먼저 설계",
      claim: "초기 단계에서는 pricing보다 support, feedback, record가 반복될 수 있는지가 우선.",
      cards: [
        { kicker: "Action", body: "사용자가 부담 없이 남길 수 있는 작은 참여" },
        { kicker: "Record", body: "builder가 다시 볼 수 있는 개선 근거" },
        { kicker: "Loop", body: "다음 업데이트와 다음 공개 표면으로 이어지는 반복 구조" },
      ],
    },
    {
      kicker: "AHEYA / Boundary",
      title: "성과가 아니라 제품 방향과 메시지 검증 설계로 마무리",
      claim: "시장 검증, 전환 성과, traction을 주장하지 않고 제품/GTM 설계 사례로만 사용한다.",
      cards: [
        { kicker: "Claim", body: "product planning, GTM framing, service flow, measurement design" },
        { kicker: "No Claim", body: "시장 검증, 전환 성과, launch success, revenue proof" },
        { kicker: "Output", body: "학교 제출용에서는 외부 채널 자료 없이 재작성" },
      ],
    },
  ];
  remaining.forEach((spec) => contentSlide(presentation, ctx, { accent: THEME.teal, ...spec }));
}

function buildCreativeGenerated() {
  return createGeneratedPart("creative_generated", (presentation, ctx) => {
    coverSlide(presentation, ctx, {
      title: "패션크리에이티브 디렉션",
      subtitle: "학교 수업 산출물을 시간순으로 묶은 최종 포트폴리오 병합본.",
      chapters: [
        "디지털패션그래픽",
        "상상설계 진로4 / 진로탐색학점제",
        "패션스타일링",
        "버추얼콘텐츠 크리에이션 캡스톤디자인",
        "ADSB / 산학공동연구프로젝트",
        "SFTI-CMU / Research Communication Support",
        "무대복식디자인",
      ],
    });
    dividerSlide(presentation, ctx, {
      no: 1,
      semester: "2023-2",
      course: "디지털패션그래픽",
      note: "이미지와 그래픽 포트폴리오 산출물. 원본 순서를 유지한다.",
      accent: THEME.blue,
    });
    dividerSlide(presentation, ctx, {
      no: 2,
      semester: "2024-1",
      course: "상상설계 진로4 / 진로탐색학점제",
      note: "24SS AI Project와 최종보고서 설명 자료를 이어서 배치한다.",
      accent: THEME.teal,
    });
    dividerSlide(presentation, ctx, {
      no: 3,
      semester: "2024-2",
      course: "패션스타일링",
      note: "스타일링, 무드, 스케치 결과물을 원본 순서로 편입한다.",
      accent: THEME.amber,
    });
    dividerSlide(presentation, ctx, {
      no: 4,
      semester: "2025-1",
      course: "버추얼콘텐츠 크리에이션 캡스톤디자인",
      note: "CLO 기반 virtual fashion/content 결과물을 배치한다.",
      accent: THEME.teal,
    });
    dividerSlide(presentation, ctx, {
      no: 5,
      semester: "2025-2",
      course: "ADSB / 산학공동연구프로젝트",
      note: "사용자 지시에 따라 원본 PPT를 그대로 가져와 배치한다.",
      accent: THEME.blue,
    });
    dividerSlide(presentation, ctx, {
      no: 6,
      semester: "2024-2",
      course: "무대복식디자인",
      note: "그림죠 관련 슬라이드만 남기고 나머지 캐릭터 자료는 제외한다.",
      accent: THEME.red,
    });
  });
}

function buildMarketingGenerated() {
  return createGeneratedPart("marketing_generated", (presentation, ctx) => {
    coverSlide(presentation, ctx, {
      title: "패션마케팅",
      subtitle: "패션유통관리, 글로벌패션시스템, BeMoon, AHEYA를 묶은 최종 포트폴리오 병합본.",
      chapters: [
        "패션유통관리",
        "글로벌패션시스템",
        "BeMoon / 온라인 패션스타트업 캡스톤디자인",
        "AHEYA / 패션창업 캡스톤디자인",
      ],
    });
    dividerSlide(presentation, ctx, {
      no: 1,
      semester: "2024-1",
      course: "패션유통관리",
      note: "사용자 확인 기준에 따라 통합본을 사용하고, 요약본/원본 발표본은 제외한다.",
      accent: THEME.amber,
    });
    dividerSlide(presentation, ctx, {
      no: 2,
      semester: "2024-2",
      course: "글로벌패션시스템",
      note: "Aura Consortium과 DPP/인증 흐름을 패션 시스템 관점으로 배치한다.",
      accent: THEME.blue,
    });
    dividerSlide(presentation, ctx, {
      no: 3,
      semester: "2024-2",
      course: "BeMoon / 온라인 패션스타트업 캡스톤디자인",
      note: "기존 BeMoon 문서와 페이지를 수정하지 않고 학교 제출용으로 새 슬라이드를 생성한다.",
      accent: THEME.amber,
    });
    buildBemoonSlides(presentation, ctx);
    dividerSlide(presentation, ctx, {
      no: 4,
      semester: "2025-1",
      course: "AHEYA / 패션창업 캡스톤디자인",
      note: "기존 /deck/aheya HTML 화면을 그대로 캡처해 편입한다.",
      accent: THEME.teal,
    });
  });
}

function buildAheyaHtmlGenerated() {
  return createGeneratedPart("marketing_aheya_html", async (presentation, ctx) => {
    const manifestPath = path.join(WORKSPACE, "assets/aheya-html/manifest.json");
    if (!fs.existsSync(manifestPath)) {
      throw new Error(`Missing AHEYA HTML capture manifest: ${manifestPath}`);
    }
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    for (const item of manifest.captured ?? []) {
      const slide = presentation.slides.add();
      await ctx.addImage(slide, {
        path: item.output,
        x: 0,
        y: 0,
        w: 1280,
        h: 720,
        fit: "cover",
        alt: `AHEYA HTML ${item.id}`,
      });
    }
  });
}

function buildBemoonHtmlGenerated() {
  return createGeneratedPart("marketing_bemoon_html", async (presentation, ctx) => {
    const manifestPath = path.join(WORKSPACE, "assets/bemoon-html/manifest.json");
    if (!fs.existsSync(manifestPath)) {
      throw new Error(`Missing BeMoon HTML capture manifest: ${manifestPath}`);
    }
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    for (const item of manifest.captured ?? []) {
      const slide = presentation.slides.add();
      await ctx.addImage(slide, {
        path: item.output,
        x: 0,
        y: 0,
        w: 1280,
        h: 720,
        fit: "cover",
        alt: `BeMoon HTML ${item.id}`,
      });
    }
  });
}

function buildCapturedHtmlGenerated({ key, manifestPath, altPrefix }) {
  return createGeneratedPart(key, async (presentation, ctx) => {
    if (!fs.existsSync(manifestPath)) {
      throw new Error(`Missing HTML capture manifest: ${manifestPath}`);
    }
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    for (const item of manifest.captured ?? []) {
      const slide = presentation.slides.add();
      await ctx.addImage(slide, {
        path: item.output,
        x: 0,
        y: 0,
        w: 1280,
        h: 720,
        fit: "contain",
        alt: `${altPrefix} ${item.id}`,
      });
    }
  });
}

function buildAdsbPosterOriginalsGenerated() {
  return createGeneratedPart("creative_adsb_poster_originals", async (presentation, ctx) => {
    const slide = presentation.slides.add();
    ctx.addShape(slide, {
      x: 0,
      y: 0,
      w: 1280,
      h: 720,
      fill: "#07111F",
      line: ctx.line(),
    });
    await ctx.addImage(slide, {
      path: path.join(ROOT, "public/adsb/adsb-final-poster-public.png"),
      x: 385.5,
      y: 0,
      w: 509,
      h: 720,
      fit: "contain",
      alt: "ADSB final submission poster original, uncropped",
    });
  });
}

function buildAdsbHtmlGenerated() {
  return buildCapturedHtmlGenerated({
    key: "creative_adsb_html",
    manifestPath: path.join(WORKSPACE, "assets/creative-html/adsb/manifest.json"),
    altPrefix: "ADSB portfolio HTML",
  });
}

function buildSftiHtmlGenerated() {
  return buildCapturedHtmlGenerated({
    key: "creative_sfti_html",
    manifestPath: path.join(WORKSPACE, "assets/creative-html/sfti/manifest.json"),
    altPrefix: "SFTI portfolio HTML",
  });
}

function takeSlides(part, start, count, key, includeSharedAssets = false) {
  const proto = structuredClone(part.proto);
  proto.slides = proto.slides.slice(start, start + count);
  if (!includeSharedAssets) {
    proto.images = [];
    proto.charts = [];
    proto.layouts = [];
    proto.contentReferences = [];
    proto.textStyles = [];
  }
  return { ...part, key, proto, slideCount: proto.slides.length };
}

function mergeParts(parts, id) {
  const base = parts[0].proto;
  const merged = {
    ...base,
    id,
    slides: parts.flatMap((part) => part.proto.slides ?? []),
    images: parts.flatMap((part) => part.proto.images ?? []),
    charts: parts.flatMap((part) => part.proto.charts ?? []),
    layouts: parts.flatMap((part) => part.proto.layouts ?? []),
    contentReferences: parts.flatMap((part) => part.proto.contentReferences ?? []),
    textStyles: parts.flatMap((part) => part.proto.textStyles ?? []),
    people: [],
    threads: [],
  };
  return Presentation.load(merged, undefined, { slideSize: SLIDE_SIZE });
}

function scanProto(proto, terms = FINAL_SCAN_TERMS) {
  const hits = [];
  function walk(node, trail = []) {
    if (!node || typeof node !== "object" || ArrayBuffer.isView(node) || node instanceof ArrayBuffer) return;
    for (const [key, value] of Object.entries(node)) {
      if (key === "creationId") continue;
      if (typeof value === "string") {
        for (const term of terms) {
          if (value.includes(term)) hits.push({ term, path: [...trail, key].join("."), value });
        }
      } else if (Array.isArray(value)) {
        value.forEach((child, index) => walk(child, [...trail, `${key}[${index}]`]));
      } else if (value && typeof value === "object") {
        walk(value, [...trail, key]);
      }
    }
  }
  walk(proto);
  return hits;
}

async function exportDeck(parts, outFile, id) {
  const presentation = mergeParts(parts, id);
  const blob = await PresentationFile.exportPptx(presentation);
  await blob.save(outFile);
  const check = await PresentationFile.importPptx(await FileBlob.load(outFile));
  const proto = check.toProto();
  const hits = scanProto(proto);
  return {
    outFile,
    slideCount: check.slides.count,
    imageCount: proto.images?.length ?? 0,
    forbiddenHits: hits,
  };
}

async function main() {
  const sources = {
    digital: findPpt("무제 폴더 3", "포트폴리오 2251014 유민석.pptx"),
    aiProject: findPpt("AI를 활용한 디자인", "24SS Ai Project.pptx"),
    aiReport: findPpt("AI를 활용한 디자인", "최종보고서 설명.pptx"),
    styling: findPpt("패션스타일링_2251014_유민석.pptx"),
    clo: findPpt("클로 포트폴리오_Zero to one_2251014_유민석.pptx"),
    adsbOriginal: findPpt("AI 포스터 수정중.pptx"),
    stage: findPpt("무대복식 PPT (1).pptx"),
    retail: findPpt("통합본_A반_앤더슨벨_경복궁 스토어_2251014_유민석.pptx"),
    aura: findPpt("아우라.pptx"),
  };

  const [
    creativeGenerated,
    marketingGenerated,
    adsbPosterOriginalsGenerated,
    adsbHtmlGenerated,
    sftiHtmlGenerated,
    bemoonHtmlGenerated,
    aheyaHtmlGenerated,
    digital,
    aiProject,
    aiReport,
    styling,
    clo,
    adsbOriginal,
    stage,
    retail,
    aura,
  ] = await Promise.all([
    Promise.resolve(buildCreativeGenerated()),
    Promise.resolve(buildMarketingGenerated()),
    Promise.resolve(buildAdsbPosterOriginalsGenerated()),
    Promise.resolve(buildAdsbHtmlGenerated()),
    Promise.resolve(buildSftiHtmlGenerated()),
    Promise.resolve(buildBemoonHtmlGenerated()),
    Promise.resolve(buildAheyaHtmlGenerated()),
    importPptPart({ key: "creative_digital", file: sources.digital }),
    importPptPart({ key: "creative_ai_project", file: sources.aiProject }),
    importPptPart({ key: "creative_ai_report", file: sources.aiReport }),
    importPptPart({ key: "creative_styling", file: sources.styling }),
    importPptPart({ key: "creative_clo", file: sources.clo }),
    importPptPart({ key: "creative_adsb_original", file: sources.adsbOriginal }),
    importPptPart({ key: "creative_stage", file: sources.stage }),
    importPptPart({ key: "marketing_retail", file: sources.retail }),
    importPptPart({ key: "marketing_aura", file: sources.aura }),
  ]);

  const creativeParts = [
    takeSlides(creativeGenerated, 0, 2, "creative_cover_digital_divider", true),
    digital,
    takeSlides(creativeGenerated, 2, 1, "creative_ai_divider"),
    aiProject,
    aiReport,
    takeSlides(creativeGenerated, 3, 1, "creative_styling_divider"),
    styling,
    takeSlides(creativeGenerated, 4, 1, "creative_clo_divider"),
    clo,
    takeSlides(creativeGenerated, 5, 1, "creative_adsb_divider"),
    adsbPosterOriginalsGenerated,
    adsbHtmlGenerated,
    sftiHtmlGenerated,
    takeSlides(creativeGenerated, 6, 1, "creative_stage_divider"),
    takeSlides(stage, 12, 4, "creative_stage_grimmjow_only", true),
  ];

  const marketingParts = [
    takeSlides(marketingGenerated, 0, 2, "marketing_cover_retail_divider", true),
    retail,
    takeSlides(marketingGenerated, 2, 1, "marketing_aura_divider"),
    aura,
    takeSlides(marketingGenerated, 3, 1, "marketing_bemoon_divider"),
    bemoonHtmlGenerated,
    takeSlides(marketingGenerated, 10, 1, "marketing_aheya_divider"),
    aheyaHtmlGenerated,
  ];

  const creativeOut = path.join(OUTPUT_DIR, "패션크리에이티브_디렉션_2251014_유민석.pptx");
  const marketingOut = path.join(OUTPUT_DIR, "패션마케팅_2251014_유민석.pptx");

  const results = [];
  results.push(await exportDeck(creativeParts, creativeOut, "school-creative-direction"));
  results.push(await exportDeck(marketingParts, marketingOut, "school-fashion-marketing"));

  const ledger = {
    generatedAt: new Date().toISOString(),
    artifactTool: ARTIFACT,
    sources,
    sourceSlideCounts: {
      digital: digital.slideCount,
      aiProject: aiProject.slideCount,
      aiReport: aiReport.slideCount,
      styling: styling.slideCount,
      clo: clo.slideCount,
      adsbOriginal: adsbOriginal.slideCount,
      stage: stage.slideCount,
      retail: retail.slideCount,
      aura: aura.slideCount,
      creativeGenerated: creativeGenerated.slideCount,
      marketingGenerated: marketingGenerated.slideCount,
      adsbPosterOriginalsGenerated: adsbPosterOriginalsGenerated.slideCount,
      adsbHtmlGenerated: adsbHtmlGenerated.slideCount,
      sftiHtmlGenerated: sftiHtmlGenerated.slideCount,
      bemoonHtmlGenerated: bemoonHtmlGenerated.slideCount,
      aheyaHtmlGenerated: aheyaHtmlGenerated.slideCount,
    },
    outputs: results,
  };
  fs.writeFileSync(path.join(QA_DIR, "school-merge-ledger.json"), JSON.stringify(ledger, null, 2));
  console.log(JSON.stringify(ledger, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
