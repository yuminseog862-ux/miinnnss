import type {
  Accent,
  FlagshipFeature,
  FlagshipPlate,
  FocusLane,
  HeroContent,
  WorkCase,
} from "@/data/portfolio";

export type WhyFitItem = {
  title: string;
  proof: string;
  body: string;
  accent: Accent;
};

export type ExperimentMemo = {
  title: string;
  body: string;
};

export type ExperimentContent = {
  eyebrow: string;
  title: string;
  summary: string;
  process: string[];
  chips: string[];
  memos: ExperimentMemo[];
};

export const siteTitle = "Yumin Seog";

export const heroContent: HeroContent = {
  eyebrow: "AI creative planning / character-led identity",
  title:
    "I build character-led identity systems that make products easier to feel, understand, and remember.",
  summary:
    "I start from one emotional axis, then translate it into character, world, copy, and visual direction across product, web, and public channels.",
  stageTitle:
    "AI-native characters, emotional worlds, and buildable creative systems.",
  ctas: [
    { label: "View Flagship System", href: "#flagship", variant: "primary" },
    { label: "See Selected Proof", href: "#selected", variant: "secondary" },
  ],
  proofs: [
    "Brand-facing AI visual collaboration with real stakeholder feedback",
    "Live product where copy, trust, and character work as one system",
    "Public experiments turning character and world motifs into first-signal attention",
  ],
  signals: [
    { label: "Best fit", value: "AI Artist / Creative Planning" },
    { label: "Current flagship", value: "AHEYA / product + character system" },
    { label: "Strength", value: "emotion -> identity -> visual -> implementation" },
  ],
};

export const whyFitContent = {
  eyebrow: "Why This Role Fits",
  title: "Why the fit is direct.",
  summary:
    "The same pattern already shows up across AHEYA, Andersson Bell, public experiments, and persona systems.",
  items: [
    {
      title: "Identity / world / persona",
      proof: "AHEYA character system + persona experiments",
      body: "One emotional axis, then clearer entry, memory, and trust faces.",
      accent: "aqua",
    },
    {
      title: "Visual concept / references",
      proof: "Andersson Bell",
      body: "Moodboards and references get translated into production-ready direction.",
      accent: "orange",
    },
    {
      title: "Internet / public readability",
      proof: "Public experiments across X and trust surfaces",
      body: "I care about what gets read fast and remembered after the scroll.",
      accent: "indigo",
    },
    {
      title: "Creative x engineering handoff",
      proof: "AHEYA + Relay-informed product work",
      body: "Creative direction gets translated into copy, interface structure, and handoff rules.",
      accent: "aqua",
    },
  ] satisfies WhyFitItem[],
};

export const focusContent = {
  eyebrow: "How I Work",
  title: "How I work.",
  summary:
    "One emotional axis, clear identity, buildable output.",
  lanes: [
    {
      title: "Identity",
      body: "I fix one emotional axis first and build consistency around it.",
      accent: "aqua",
      points: ["Identity framing", "Persona and relation logic", "Motif and recall"],
    },
    {
      title: "Emotional transfer",
      body: "I care less about novelty than whether the mood is felt immediately.",
      accent: "orange",
      points: ["Mood selection", "Prompt/reference iteration", "Keep vs kill decisions"],
    },
    {
      title: "Cross-functional build",
      body: "I translate direction into copy, surfaces, and handoff-ready rules.",
      accent: "indigo",
      points: ["Public-facing language", "Feedback into production rules", "Creative x product x engineering"],
    },
  ] satisfies FocusLane[],
};

export const flagshipIntro = {
  eyebrow: "Live system / product + identity",
  title: "AHEYA",
  oneLiner:
    "A live product where core rail, trust, and character work as one identity system.",
  summary:
    "AHEYA is where I tested how a complex offer becomes emotionally legible through product copy, trust surfaces, and character-led memory.",
  ctaLabel: "Read flagship case",
  ctaHref: "/bluegarage/work/aheya",
  statusLabel: "Why it matters",
  statusValue:
    "Live proof of product language, trust structure, and character-led identity working together.",
};

export const flagshipFeature: FlagshipFeature = {
  label: "Flagship visual system",
  title: "One emotional front door, then clearer product and trust faces.",
  body:
    "Kumiho works as the entry point. The identity system is there to improve legibility and recall, not to decorate the product after the fact.",
  media: {
    src: "/aheya/kumiho.png",
    alt: "AHEYA kumiho visual used as the emotional front door.",
    fit: "contain",
  },
  badge: {
    src: "/aheya/logo.png",
    alt: "AHEYA app logo.",
  },
};

export const flagshipPlates: FlagshipPlate[] = [
  {
    title: "Core rail",
    body: "Open a live app, support it from your wallet, then leave one clear signal through Good or Improve.",
    accent: "aqua",
    media: {
      src: "/aheya/home-hero.png",
      alt: "AHEYA homepage hero showing the core offer and rail.",
      fit: "contain",
    },
  },
  {
    title: "Public language",
    body: "The copy keeps the offer readable on first view: support, signal, optional public proof, and visible trust.",
    accent: "orange",
    media: {
      src: "/aheya/creator.png",
      alt: "AHEYA supporting identity visual used across public-facing surfaces.",
      fit: "contain",
    },
  },
  {
    title: "Character system",
    body: "Kumiho and related motifs separate emotional entry and memory into clearer faces instead of one vague brand layer.",
    accent: "indigo",
    media: {
      src: "/aheya/kumiho.png",
      alt: "AHEYA kumiho identity visual.",
      fit: "contain",
    },
  },
  {
    title: "Trust layer",
    body: "Non-custodial structure, direct transfer logic, and public trust surfaces keep the system credible.",
    accent: "aqua",
    media: {
      src: "/aheya/lane-panels.png",
      alt: "AHEYA homepage structure showing separated trust and support lanes.",
      fit: "contain",
    },
  },
];

export const experimentsContent: ExperimentContent = {
  eyebrow: "Public experiments",
  title: "Character-led tests across X, trust surfaces, and AI persona interfaces.",
  summary:
    "I use public-facing surfaces to test what gets read and remembered quickly: emotional entry points, trust faces, and role-coded personas.",
  process: ["Anchor", "Signal", "Iterate"],
  chips: ["Kumiho", "Yeon", "Halo", "Trust API", "Relay", "Persona cast"],
  memos: [
    {
      title: "Entry",
      body: "What makes a first-time viewer feel a clear mood immediately?",
    },
    {
      title: "Recall",
      body: "Which face or motif stays in memory after the scroll?",
    },
    {
      title: "Trust",
      body: "How should credibility feel different from attraction?",
    },
    {
      title: "Handoff",
      body: "How does persona remain useful when work moves from idea to execution?",
    },
  ],
};

export const footerContent = {
  line: "Portfolio for character-led identity systems, emotional clarity, and buildable AI creative planning.",
  meta: "English public surfaces are part of the work. Private working docs stay off the public site.",
};

export const workCases: WorkCase[] = [
  {
    slug: "aheya",
    section: "Flagship",
    eyebrow: "Live system / product + identity",
    title: "AHEYA",
    oneLiner:
      "A live product where core rail, trust, and character are designed together to make a complex offer easier to feel, understand, and remember.",
    summary:
      "AHEYA began as a product problem, but it quickly became a legibility problem. I worked on core rail clarity, public-facing language, trust surfaces, and character-led identity so the system could be read faster by first-time viewers.",
    roles: ["Product framing", "Public-facing copy", "Trust structure", "Character system"],
    evidence: ["Live site", "Core rail", "Trust surface", "Identity system"],
    status: "Live product and public-facing system",
    tier: "flagship",
    accent: "aqua",
    year: "2025 - present",
    overview: [
      "AHEYA is a first-signal system built around support, reaction, and optional public proof.",
      "The stronger the structure became, the clearer it became that product language and emotional identity had to be designed together.",
    ],
    whatIDid: [
      "Structured the core support and signal loop.",
      "Defined and refined the public-facing copy that anchors the core rail, signal, and trust surfaces.",
      "Built the character-led identity layer for entry and recall.",
      "Separated trust into a distinct face and surface instead of mixing everything into one generic brand layer.",
    ],
    whatExists: [
      "Live site and public-facing product layer.",
      "Core rail and trust surfaces that make the product readable on first view.",
      "Character-led identity assets used for entry, memory, and public experimentation.",
    ],
    keyDecisions: [
      "Fix one emotional front door instead of many weak visual directions.",
      "Use character as a memory device, not a decorative layer.",
      "Split product action, trust, and public recall into clearer faces.",
    ],
    galleryIntro:
      "AHEYA reads best when product, identity, and public surfaces are seen together: the flagship image sets the emotional front door, the homepage shows the rail, and the supporting surfaces show how trust and memory separate.",
    placeholderMedia: [
      {
        label: "Kumiho flagship image",
        note: "Primary emotional front door for the AHEYA identity system.",
        src: "/aheya/kumiho.png",
        alt: "AHEYA kumiho flagship image.",
        featured: true,
      },
      {
        label: "AHEYA main page / hero",
        note: "Homepage hero that translates the product rail into a clearer first read.",
        src: "/aheya/home-hero.png",
        alt: "AHEYA homepage hero screenshot.",
        fit: "contain",
      },
      {
        label: "Trust and lane structure",
        note: "Separated lanes that help product action and credibility read as different faces.",
        src: "/aheya/lane-panels.png",
        alt: "AHEYA lane-panel screenshot.",
        fit: "contain",
      },
      {
        label: "Supporting identity surface",
        note: "A secondary visual used to extend recall without diluting the main emotional anchor.",
        src: "/aheya/creator.png",
        alt: "AHEYA supporting identity visual.",
      },
      {
        label: "Motif test visual",
        note: "Public-facing motif extension used to test whether the world can keep its recall outside the main surface.",
        src: "/aheya/tiger.png",
        alt: "AHEYA motif extension visual.",
      },
      {
        label: "Public profile capture",
        note: "X profile and engagement evidence will be added when the cleaned screenshots are ready.",
      },
    ],
    currentStatus: [
      "Live and still being refined.",
      "Best read as proof that I can align product language, trust structure, and character-led identity in one system.",
    ],
  },
  {
    slug: "andersson-bell",
    section: "Selected Work",
    eyebrow: "Visual concept / AI direction",
    title: "Andersson Bell",
    oneLiner:
      "A brand-facing AI visual collaboration that turned references, mood, and feedback into a usable image-to-video system.",
    summary:
      "This project shows how I work when visual direction needs more than taste. I read the brand, narrow the mood system, coordinate the toolchain, and turn stakeholder feedback into production rules.",
    roles: ["Visual concept framing", "Image-to-video direction", "Reference iteration"],
    evidence: ["Storyboard", "Generated frames", "Feedback loop", "Short-form output"],
    status: "Delivered brand collaboration",
    tier: "selected",
    accent: "orange",
    year: "2025",
    coverImage: {
      src: "/work/andersson-bell-cover.png",
      alt: "A generated Andersson Bell visual showing a stylized crosswalk and product atmosphere.",
    },
    overview: [
      "A collaborative short-form project built around Andersson Bell's tone and visual logic.",
      "The strongest part of the work was narrowing the direction until the visual system became clear enough to produce against repeatedly.",
    ],
    whatIDid: [
      "Worked through brand analysis, mood references, and storyboard structure.",
      "Reframed the sequence after early approaches created tone diffusion.",
      "Connected Midjourney, Gemini, Photoshop, and Kling into a repeatable pipeline.",
      "Translated stakeholder feedback into clearer production rules.",
    ],
    whatExists: [
      "Final report and storyboard package.",
      "Generated image set and cut logic.",
      "Final short-form output grounded in a stronger fixed-angle structure.",
    ],
    keyDecisions: [
      "Dropped collage-heavy direction after it weakened tone and focus.",
      "Shifted to a more restrained fixed-angle sequence to stabilize the brand mood.",
      "Used feedback as a structural tool, not just as aesthetic commentary.",
    ],
    galleryIntro:
      "The short-form video should lead this case now. It proves the direction most clearly, while the stills stay as evidence of the system behind it.",
    placeholderMedia: [
      {
        label: "Final short-form output",
        note: "Final Andersson Bell short-form video built from the narrowed visual direction and revised storyboard system.",
        src: "/video/anderssonbell.mp4",
        alt: "Andersson Bell short-form video.",
        type: "video",
        poster: "/work/andersson-bell-cover.png",
        featured: true,
        fit: "contain",
      },
    ],
    currentStatus: [
      "Closed project with visible outputs.",
      "Best read as proof that I can direct AI visual work with structure, not just generate assets.",
    ],
  },
  {
    slug: "persona-systems",
    section: "Selected Work",
    eyebrow: "Persona / identity system",
    title: "Persona as Interface",
    oneLiner: "A character-led system built across AHEYA, trust surfaces, and role-coded AI personas.",
    summary:
      "This case shows how I use persona not as fiction for its own sake, but as an interface that makes products, trust, and collaboration easier to read and remember.",
    roles: ["Identity framing", "Character system", "Public experiments", "Role-coded collaboration"],
    evidence: ["Character front door", "Motif tests", "Trust face", "Persona tooling"],
    status: "Ongoing identity system",
    tier: "selected",
    accent: "indigo",
    year: "2025 - present",
    coverImage: {
      src: "/aheya/kumiho.png",
      alt: "Kumiho visual used as the anchor of the persona-led system.",
    },
    overview: [
      "Characters are used here as legibility structures, not decorative wrappers.",
      "The system separates emotional entry, trust, recall, and role clarity into distinct faces and motifs.",
    ],
    whatIDid: [
      "Positioned Kumiho as the flagship emotional front door for AHEYA.",
      "Separated trust and evaluation into a different face and surface instead of forcing one all-purpose brand mask.",
      "Used mythic and halo-like motif tests on public surfaces to see what gets read and remembered faster.",
      "Assigned face, tone, and function to role-coded AI personas for clearer collaboration interfaces.",
    ],
    whatExists: [
      "Flagship emotional front door inside AHEYA.",
      "Supporting identity assets used for recall and public experiments.",
      "Role-coded persona logic that can carry trust, collaboration, and public memory as separate jobs.",
    ],
    keyDecisions: [
      "Keep one strong emotional anchor instead of many unrelated visual experiments.",
      "Use mythic and symbolic motifs because they create faster emotional recall for first-time viewers.",
      "Treat persona as interface and memory structure, not as standalone fiction.",
    ],
    galleryIntro:
      "This page is strongest when identity surfaces and public experiments appear next to each other. Some public screenshots are still pending cleanup, so the current gallery mixes live assets with planned captures.",
    placeholderMedia: [
      {
        label: "Primary character image",
        note: "Kumiho as the flagship emotional front door.",
        src: "/aheya/kumiho.png",
        alt: "AHEYA kumiho flagship image.",
        featured: true,
      },
      {
        label: "Secondary character image",
        note: "Supporting identity surface used to widen the system without losing the main anchor.",
        src: "/aheya/creator.png",
        alt: "AHEYA supporting identity visual.",
      },
      {
        label: "Motif test image",
        note: "Public-facing motif extension used to test recall after the first visual hit.",
        src: "/aheya/tiger.png",
        alt: "AHEYA motif extension visual.",
      },
      {
        label: "Product-linked persona surface",
        note: "Homepage surface showing how identity still has to serve a readable product system.",
        src: "/aheya/home-hero.png",
        alt: "AHEYA homepage hero screenshot.",
        fit: "contain",
      },
      {
        label: "Trust-facing structure",
        note: "Lane separation that keeps credibility distinct from attraction and memory.",
        src: "/aheya/lane-panels.png",
        alt: "AHEYA lane-panel screenshot.",
        fit: "contain",
      },
      {
        label: "Public experiment capture",
        note: "X profile and engagement screenshots will be added once the current exports are cleaned for the site.",
      },
      {
        label: "Persona tooling capture",
        note: "Role-coded AI persona and collaboration screenshots will be added in a later asset pass.",
      },
    ],
    currentStatus: [
      "Most useful as a differentiation case when read next to AHEYA.",
      "Shows persona as interface, not fiction for its own sake.",
    ],
  },
  {
    slug: "sfti-cmu",
    section: "Selected Work",
    eyebrow: "Research translation / English writing",
    title: "SFTI-CMU",
    oneLiner:
      "An accepted conference submission that turned AI-generated emotional content into a structured external-facing research case.",
    summary:
      "This case is less about academic prestige and more about structured communication: building a usable concept, organizing references, and turning AI-content research into an English-language argument that could travel externally.",
    roles: ["Research framing", "English writing", "Identity analysis", "External communication"],
    evidence: ["Submission", "Acceptance with revisions", "Abstract", "Framework"],
    status: "Accepted conference submission",
    tier: "selected",
    accent: "aqua",
    year: "2025",
    coverImage: {
      src: "/sfti/result.png",
      alt: "SFTI-CMU accepted abstract page and conference result image.",
      fit: "contain",
    },
    overview: [
      "A conference submission on AI-generated emotional content strategy for niche fashion brands.",
      "The work connects research language, identity interpretation, and a visual clustering framework.",
    ],
    whatIDid: [
      "Defined the research question and overall framing.",
      "Built the abstract and external-facing English document.",
      "Organized the idea into a visual clustering approach tied to identity and narrative.",
    ],
    whatExists: [
      "Submission-ready English abstract and framing.",
      "Review form with acceptance and revision request.",
      "Clear evidence of research-to-communication translation.",
    ],
    keyDecisions: [
      "Frame the project around identity-based visual clustering instead of a vague AI trend theme.",
      "Keep the research output legible to external readers rather than overly academic.",
      "Use the submission as a proof of structured writing and concept clarity.",
    ],
    galleryIntro:
      "The accepted abstract page is the most convincing visual proof here, so this case shows it directly instead of implying the research through generic placeholders.",
    placeholderMedia: [
      {
        label: "Accepted abstract page",
        note: "Conference submission page showing the abstract structure, visual framework, and acceptance result together.",
        src: "/sfti/result.png",
        alt: "SFTI-CMU abstract and result screenshot.",
        fit: "contain",
        featured: true,
      },
    ],
    currentStatus: [
      "Closed research output with a concrete external result.",
      "Best used as evidence of writing, framing, and English communication under ambiguity.",
    ],
  },
  {
    slug: "be-moon",
    section: "Earlier Systems",
    eyebrow: "Trust-system concept",
    title: "BE;MOON",
    oneLiner:
      "A product thesis for digital warranty, ownership verification, and post-purchase trust in fashion.",
    summary:
      "BE;MOON reads best here as a trust-system case. The important part is the operating rail: purchase authentication, proof issuance, verification, and OMS sync built as one usable layer a brand could actually operate.",
    roles: ["Trust-system framing", "Service design", "Verification flow", "Operational fit"],
    evidence: ["Problem / solution logic", "MVP rail", "Figma surfaces", "Verification model"],
    status: "Strategic concept with trust architecture",
    tier: "archive",
    accent: "orange",
    year: "2024",
    overview: [
      "BE;MOON started from a simple question: how should a fashion brand prove ownership and authenticity once regulation, resale, and post-purchase trust all start to matter at the same time?",
      "The strongest output was not a branding layer but an MVP service rail: issuance, proof, verification, and OMS sync treated as one operating system for digital warranty.",
    ],
    whatIDid: [
      "Defined the case around traceability pressure, counterfeit circulation, and the gap between internal warranty systems and external trust moments.",
      "Turned that into a product rail covering purchase authentication, proof issuance, verification, ownership state, and OMS linkage.",
      "Translated the thesis into service structure and interface surfaces strong enough to communicate the model publicly.",
    ],
    whatExists: [
      "A clear one-page problem / solution / flow logic.",
      "Figma-based product surfaces showing the warranty and verification layer.",
      "A service structure that can be explained without exposing the original planning documents.",
    ],
    keyDecisions: [
      "Start from the auth rail first instead of pretending the value is perks from day one.",
      "Keep OMS state sync tightly connected to ownership so the warranty does not drift away from real product data.",
      "Treat downstream benefits as a second layer after trust and verification become stable.",
    ],
    problemSummary: [
      "Fashion brands are facing rising DPP pressure and higher operational complexity around traceability and post-purchase record keeping.",
      "At the same time, counterfeit circulation weakens resale trust and makes existing internal warranty records hard to use in external verification moments.",
      "The real gap is not visual branding. It is the missing operating rail that connects purchase, ownership, verification, and brand-side system sync.",
    ],
    solutionSummary: [
      {
        title: "Trust layer first",
        body: "Position the product as a digital warranty SaaS that connects product identity, user-linked proof, and verification before adding broader member logic.",
        accent: "orange",
      },
      {
        title: "Issuance to verification",
        body: "Build the first usable rail around purchase auth, proof issuance, verification, and benefits so the service has one defensible core loop.",
        accent: "aqua",
      },
      {
        title: "Operational fit",
        body: "Keep ownership state connected to OMS and product status so external trust does not split from internal brand operations.",
        accent: "indigo",
      },
    ],
    flowHeading: "Issuance -> Proof -> Verification",
    flowSteps: [
      {
        step: "01",
        title: "Purchase / QR auth",
        body: "The rail starts from product purchase and a brand-controlled entry point that confirms the buyer and the item.",
        meta: "Entry surface",
      },
      {
        step: "02",
        title: "Proof issuance + account auth",
        body: "The warranty becomes a user-linked proof object rather than staying inside a private database only.",
        meta: "Ownership proof",
      },
      {
        step: "03",
        title: "Verification / benefits",
        body: "The user can verify ownership and unlock downstream utility, while the brand keeps the proof legible beyond the original checkout moment.",
        meta: "Trust surface",
      },
      {
        step: "04",
        title: "OMS state sync",
        body: "Ownership and product state are reflected back into brand systems so the digital warranty remains operationally grounded.",
        meta: "System sync",
      },
    ],
    serviceStructure: [
      {
        title: "Brand / OMS",
        body: "Product records, order data, and brand-issued entry conditions begin the warranty rail.",
        accent: "orange",
        items: ["Product purchase data", "OMS linkage", "Brand-side issuance control"],
      },
      {
        title: "BE;MOON core",
        body: "The middle layer handles issuance SaaS, verification logic, and ownership state management.",
        accent: "aqua",
        items: ["Issuance SaaS", "Verification engine", "Status and ownership database"],
      },
      {
        title: "Portable proof layer",
        body: "Proof objects, metadata storage, and verification logs make the warranty portable enough to support resale trust later.",
        accent: "indigo",
        items: ["Metadata storage", "Portable proof object", "Verification log"],
      },
      {
        title: "Consumer / external channels",
        body: "The proof becomes usable in verification, benefit access, and future external trust moments instead of staying locked inside one brand system.",
        accent: "orange",
        items: ["Consumer account", "Benefit check", "External trust surface"],
      },
    ],
    structureOutcome:
      "The draft lands on a simple claim: digital warranty is not just a novelty feature. It is an operating rail for brand trust, verification, and ownership continuity.",
    galleryIntro:
      "The supporting surfaces below stay secondary. The center of this case is the product logic, while the Figma images act as proof that the service model was already translated into visible interfaces.",
    placeholderMedia: [
      {
        label: "Figma overview",
        note: "Core interface surfaces and information architecture.",
        src: "/work/bemoon-ui.png",
        alt: "BE;MOON Figma board with multiple screens.",
        fit: "contain",
        featured: true,
      },
      {
        label: "Verification surface",
        note: "Verification-oriented product evidence and portable proof exploration.",
        src: "/work/bemoon-nft.png",
        alt: "BE;MOON verification and proof surface.",
        fit: "contain",
      },
    ],
    currentStatus: [
      "A strong draft-level case because the product logic is already web-native and legible.",
      "Best read as proof that I can frame trust and verification around brand operations, not abstraction.",
    ],
  },
  {
    slug: "ilysb",
    section: "Earlier Systems",
    eyebrow: "0 -> 1 build test",
    title: "ILYSB",
    oneLiner:
      "A solo mobile experiment that proved build speed, user-testing judgment, and the willingness to stop weak ideas early.",
    summary:
      "ILYSB belongs here because it moved from concept to interface to user signal quickly enough to make a real product decision. The value is not that it became a business. The value is judgment under speed.",
    roles: ["0 -> 1 product build", "UI direction", "User testing", "Fast execution"],
    evidence: ["Working mobile app", "Screenshots", "User test", "Kill decision"],
    status: "Built, tested, then stopped",
    tier: "archive",
    accent: "aqua",
    year: "2025",
    overview: [
      "A solo-built mobile app concept developed as a direct experiment rather than a long planning exercise.",
      "Its value lies in speed, implementation, and learning from clear user reaction.",
    ],
    whatIDid: [
      "Defined the concept and shaped the interface solo.",
      "Built the app flow and visual layer directly.",
      "Ran a small early test with five people.",
      "Used the reaction to decide quickly not to keep pushing the concept.",
    ],
    whatExists: [
      "Built mobile interface and screen evidence.",
      "Small test signal with a clear emotional response.",
      "A useful example of concept-to-decision velocity.",
    ],
    keyDecisions: [
      "Move quickly into build instead of over-planning.",
      "Treat discomfort as a real signal rather than forcing the idea forward.",
      "Keep the case as evidence of testing discipline, not as a success narrative.",
    ],
    galleryIntro:
      "This page holds the captured screens as proof of build speed and testing, not as a polished product launch.",
    placeholderMedia: [
      {
        label: "Main page UI",
        note: "Captured interface showing the list and action state.",
        src: "/work/ilysb-main.png",
        alt: "ILYSB mobile main page screenshot.",
        fit: "contain",
        featured: true,
      },
      {
        label: "Hint screen",
        note: "One of the core reveal surfaces in the app flow.",
        src: "/work/ilysb-hints.png",
        alt: "ILYSB hint screen with social clues.",
        fit: "contain",
      },
      {
        label: "Entry screen",
        note: "Login and opening access point of the app.",
        src: "/work/ilysb-login.png",
        alt: "ILYSB entry screen with Kakao login.",
        fit: "contain",
      },
    ],
    currentStatus: [
      "Useful as a build-and-test case, not as an ongoing product.",
      "Shows that I can ship, read the signal, and make the hard call early.",
    ],
  },
  {
    slug: "ariadne-mode-moment",
    section: "Earlier Systems",
    eyebrow: "Product system concept",
    title: "Ariadne / ModeMoment",
    oneLiner:
      "A decision-layer fashion service showing strong product strategy, IA, and monetization thinking before full build.",
    summary:
      "Ariadne matters because the structure is already specific. Instead of another fashion discovery feed, it focuses on the decision moment after recommendation, with ModeMoment extending the same strategic line into a broader venture direction.",
    roles: ["Product strategy", "Interaction design", "IA planning", "Business model thinking"],
    evidence: ["Problem / solution flow", "IA map", "Service structure", "Screen guide"],
    status: "Strategic concept with system depth",
    tier: "archive",
    accent: "indigo",
    year: "2023 - 2024",
    detailDensity: "compact",
    overview: [
      "Ariadne was built around a sharper observation than a generic fashion community pitch: the harder problem is not finding items, but choosing one final option out of several saved candidates.",
      "ModeMoment extends the same line of thought outward as a wider venture direction, but the core public case stays centered on Ariadne's decision-layer logic.",
    ],
    whatIDid: [
      "Defined the product around cart-stage decision support instead of trend discovery.",
      "Mapped the interaction logic for taste input, vote-based feedback, unified storage, and post-decision routing back to original sellers.",
      "Extended the concept into ModeMoment as a broader venture path without splitting the underlying service thesis into separate products.",
    ],
    whatExists: [
      "A complete problem / solution / flow logic strong enough to explain the concept publicly.",
      "Information architecture, service-layer mapping, and screen guidance across the key product surfaces.",
      "A public-facing case structure that can hold future diagrams and screens without exposing raw handoff files.",
    ],
    keyDecisions: [
      "Compete on the decision layer, not on checkout or inventory.",
      "Use a multi-platform storage model as the real differentiator instead of a single-platform recommendation feature.",
      "Keep the community useful by making every feed unit something people can judge quickly, not just scroll past.",
    ],
    problemSummary: [
      "The harder pain point in fashion shopping is often the final decision moment, not early discovery. People already get enough recommendations but still hesitate at the cart stage.",
      "Users move across multiple shopping apps and brand malls, yet they cannot compare saved candidates in one place, so they rely on screenshots, DMs, or private overthinking.",
      "Ariadne reframes that gap as a product opportunity: reduce decision cost through similar-taste feedback and a unified storage layer.",
    ],
    coreJudgments: [
      {
        title: "Decision beats discovery",
        body: "Recommendation and ranking products already exist. The empty space is the last-mile decision moment when someone has to choose one actual item.",
        accent: "indigo",
      },
      {
        title: "Checkout stays outside",
        body: "Ariadne should not compete with large shopping platforms on payment. It works best as a layer on top of those systems.",
        accent: "aqua",
      },
      {
        title: "Storage is the moat",
        body: "The differentiator is not a single voting feature. It is the ability to gather candidates from multiple sources and make them comparable in one decision space.",
        accent: "orange",
      },
    ],
    solutionSummary: [
      {
        title: "Taste segmentation",
        body: "A short onboarding layer captures mood, favorite items, and purchase priorities so the feed can start from comparable taste profiles.",
        accent: "indigo",
      },
      {
        title: "Vote feed",
        body: "The main unit becomes a judgment card with 2 to 5 candidates, context tags, and fast feedback from people with similar taste.",
        accent: "aqua",
      },
      {
        title: "Unified storage",
        body: "Candidates from multiple shopping apps and brand malls are organized like a comparison-first cart instead of a passive wishlist.",
        accent: "orange",
      },
      {
        title: "Tags and reports",
        body: "Signals from votes, tags, and saved combinations feed ranking, report views, and later recommendation logic.",
        accent: "indigo",
      },
    ],
    flowHeading: "Decision flow",
    flowSteps: [
      {
        step: "01",
        title: "External shopping app / brand mall",
        body: "The process begins outside Ariadne, where users discover items across existing shopping platforms.",
        meta: "Discovery stays external",
      },
      {
        step: "02",
        title: "Save / capture",
        body: "Users bring candidates in through saves, uploads, or screenshots instead of restarting the search from zero.",
        meta: "Candidate intake",
      },
      {
        step: "03",
        title: "Upload vote",
        body: "A structured question is created with selected candidates and context tags so the feed can respond to a real decision moment.",
        meta: "Question layer",
      },
      {
        step: "04",
        title: "Similar-taste response",
        body: "Votes, comments, and saves from similar users create fast judgment input rather than open-ended discussion only.",
        meta: "Feedback layer",
      },
      {
        step: "05",
        title: "Organize storage",
        body: "Candidates can keep moving through folders, filters, and comparison groups as the user narrows the choice.",
        meta: "Decision workspace",
      },
      {
        step: "06",
        title: "Purchase at original seller",
        body: "Once the user decides, the actual checkout returns to the original shopping platform or brand mall.",
        meta: "Checkout stays external",
      },
    ],
    serviceStructure: [
      {
        title: "Input layer",
        body: "Product candidates come from outside shopping apps, brand malls, user uploads, and storage imports.",
        accent: "indigo",
        items: ["External shopping apps", "Brand mall captures", "Screenshot / upload intake"],
      },
      {
        title: "Interaction layer",
        body: "Voting, saving, comments, tags, and feed sorting turn private indecision into a lightweight social decision process.",
        accent: "aqua",
        items: ["Vote cards", "Saves and comments", "Context tags", "Similar-taste feed sort"],
      },
      {
        title: "Intelligence layer",
        body: "Taste graphs, tag-driven reports, and later recommendation rules structure what the product learns from each decision.",
        accent: "orange",
        items: ["Taste graph", "Tag-based report", "Recommendation / reordering"],
      },
      {
        title: "Business layer",
        body: "The concept opens into taste-based ads, brand research, and point-driven revisit mechanics without changing the core decision loop.",
        accent: "indigo",
        items: ["Taste-based ads", "Brand research / demand sensing", "Points and revisit hooks"],
      },
    ],
    iaGroups: [
      {
        title: "Home / Feed",
        items: ["For You", "Similar Taste", "Vote", "Recommendation", "Small talk", "Detail / card view"],
      },
      {
        title: "Compose",
        items: ["Vote composition", "Recommendation post", "Candidate select", "Context tag input"],
      },
      {
        title: "Storage",
        items: ["Folders", "Search / filter", "Category split", "Purchase links", "Unified cart"],
      },
      {
        title: "Report",
        items: ["Tag ranking", "Situation / style ranking", "Report detail"],
      },
      {
        title: "My",
        items: ["My posts", "Unorganized items", "Points / alerts", "Folder management"],
      },
    ],
    screenGuide: [
      {
        title: "Screen 01. Taste segmentation",
        purpose: "Capture a user's style axis quickly after sign-up so the feed can sort around real preferences.",
        components: ["Mood chips", "Favorite item cards", "Purchase-priority chips", "Next CTA"],
        focus: "Fast choice matters more than visual decoration because this screen defines the recommendation baseline.",
      },
      {
        title: "Screen 02. Vote feed card",
        purpose: "Let users read one question and respond immediately inside a compact decision card.",
        components: [
          "Author + taste label",
          "One-line question",
          "2 to 3 candidate tiles",
          "Vote / save actions",
          "Context tags",
        ],
        focus: "The feed unit should feel judgeable at a glance, not like a generic social post.",
      },
      {
        title: "Screen 03. Vote composition",
        purpose: "Turn saved candidates into a structured question without making the flow feel heavy.",
        components: ["Source selector", "2 to 5 candidate slots", "Question input", "Tag chips", "Optional self-photo toggle"],
        focus: "The sequence should stay explicit: add candidates, write the question, attach the context, then publish.",
      },
      {
        title: "Screen 04. Storage",
        purpose: "Make saved candidates behave like a comparison-first cart instead of a flat wishlist.",
        components: ["Search bar", "Folder cards", "Filter chips", "Saved-item grid", "Purchase links"],
        focus: "Storage must read as an active decision workspace that can later expand into a unified cart.",
      },
    ],
    structureOutcome:
      "The concept lands as a decision-layer SNS: recommendation can happen elsewhere, but the actual choice becomes faster, more social, and easier to organize here.",
    galleryIntro:
      "The visual layer stays intentionally light for now. The important part is that the service logic, IA, and screen guidance are already strong enough to stand as a public concept case.",
    placeholderMedia: [
      { label: "Decision map", note: "Problem / solution / flow logic translated into the page structure." },
      { label: "IA notes", note: "Feed, compose, storage, report, and my-page groups." },
      { label: "Screen guide", note: "The first four surfaces that make the concept legible." },
    ],
    currentStatus: [
      "Strong enough to sit in earlier systems because the service logic is already specific and transferable.",
      "Useful as proof of structured product thinking even before a full build exists.",
    ],
  },
];

export const workCaseMap = Object.fromEntries(workCases.map((item) => [item.slug, item])) as Record<string, WorkCase>;

const selectedOrder = ["andersson-bell", "persona-systems", "sfti-cmu"] as const;
const archiveOrder = ["be-moon", "ilysb", "ariadne-mode-moment"] as const;

export const selectedCases = selectedOrder.map((slug) => workCaseMap[slug]);
export const archiveCases = archiveOrder.map((slug) => workCaseMap[slug]);
