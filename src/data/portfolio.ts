export type Accent = "aqua" | "orange" | "indigo";
export type WorkTier = "flagship" | "selected" | "archive";

export type HeroSignal = {
  label: string;
  value: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  summary: string;
  ctas: Array<{
    label: string;
    href: string;
    variant: "primary" | "secondary";
  }>;
  signals: HeroSignal[];
};

export type FlagshipPlate = {
  title: string;
  body: string;
  accent: Accent;
};

export type PlaceholderMedia = {
  label: string;
  note: string;
  src?: string;
  alt?: string;
};

export type PracticeMemo = {
  label: string;
  value: string;
};

export type WorkCase = {
  slug: string;
  section: string;
  eyebrow: string;
  title: string;
  oneLiner: string;
  summary: string;
  roles: string[];
  evidence: string[];
  status: string;
  tier: WorkTier;
  accent: Accent;
  year: string;
  coverImage?: {
    src: string;
    alt: string;
  };
  overview: string[];
  whatIDid: string[];
  whatExists: string[];
  keyDecisions: string[];
  galleryIntro: string;
  placeholderMedia: PlaceholderMedia[];
  currentStatus: string[];
};

export const siteTitle = "minnss";

export const heroContent: HeroContent = {
  eyebrow: "Selected practice / portfolio",
  title: "AI creative, web3 product, and narrative systems.",
  summary:
    "I work across product framing, visual direction, structured writing, and live iteration. My strongest work starts with a messy idea, then turns it into a usable system, a clearer story, and a visible output people can actually respond to.",
  ctas: [
    { label: "Enter Flagship", href: "#flagship", variant: "primary" },
    { label: "View Selected Work", href: "#selected", variant: "secondary" },
  ],
  signals: [
    { label: "Current flagship", value: "AHEYA / aheyabaraya.xyz" },
    { label: "Core work", value: "Product / Creative / Narrative / Research" },
    { label: "Current mode", value: "Building, operating, iterating" },
  ],
};

export const flagshipIntro = {
  eyebrow: "Flagship",
  title: "AHEYA",
  oneLiner: "A participatory web3 product shaped through product design, live messaging, and ongoing iteration.",
  summary:
    "AHEYA holds the widest range of my current work in one place: product structure, public messaging, channel logic, visual outputs, and day-to-day refinement around what makes people enter, react, and return.",
  ctaLabel: "Open flagship detail",
  ctaHref: "/work/aheya",
  statusLabel: "Current phase",
  statusValue: "Live site, active structuring, message and channel fit in progress",
};

export const flagshipPlates: FlagshipPlate[] = [
  {
    title: "Product",
    body: "Core loop planning, participation logic, user movement, and support-feedback-public proof framing.",
    accent: "aqua",
  },
  {
    title: "Build",
    body: "Direct involvement in the live site, feature prioritization, operational iteration, and delivery flow.",
    accent: "indigo",
  },
  {
    title: "Narrative",
    body: "Landing copy, guardrails, public-safe positioning, and channel-specific messaging systems.",
    accent: "orange",
  },
  {
    title: "Creative",
    body: "Image and video outputs, visual atmosphere, and narrative support assets across public surfaces.",
    accent: "aqua",
  },
];

export const selectedOrder = [
  "andersson-bell",
  "sfti-cmu",
  "ilysb",
  "be-moon",
  "ariadne-mode-moment",
] as const;

export const practiceContent = {
  eyebrow: "Practice",
  title: "On-chain Learning Journey",
  summary:
    "This is the background layer under my web3 work. I learned by participating first, then turning wallet flow, incentives, and community behavior into structured product and research questions.",
  protocols: [
    "LayerZero",
    "zkSync",
    "Backpack",
    "CUDIS",
    "Grass",
    "CARV",
    "SmartLayer",
    "Ethena",
    "EtherFi",
    "GRVT",
  ],
  memos: [
    { label: "Question", value: "What exactly is changing behavior here?" },
    { label: "Evidence", value: "Wallet flow, incentive design, public signal, and friction points." },
    { label: "Hypothesis", value: "What should happen next if the product logic is real?" },
    { label: "Next action", value: "Condense the signal into product or narrative decisions." },
  ] satisfies PracticeMemo[],
};

export const footerContent = {
  line: "Portfolio frame for selected work, venture studies, and ongoing web3 practice.",
  meta: "English-first v1. Raw docs remain private.",
};

export const workCases: WorkCase[] = [
  {
    slug: "aheya",
    section: "Flagship",
    eyebrow: "AHEYA / live flagship",
    title: "AHEYA",
    oneLiner:
      "A participatory web3 product where product structure, public messaging, and creative output are developed as one system.",
    summary:
      "AHEYA is the clearest view of how I work now: framing a live product, shaping the narrative around it, operating its public surfaces, and refining how people discover, react, and stay engaged.",
    roles: ["Product strategy", "Narrative design", "Creative direction", "Site operation"],
    evidence: ["Live site", "Messaging system", "Channel logic", "Iteration trail"],
    status: "Building, operating, iterating",
    tier: "flagship",
    accent: "aqua",
    year: "2025 - present",
    overview: [
      "AHEYA is a participatory product for creator and founder momentum, designed around support, reaction, and optional public proof.",
      "It combines product framing, messaging, visual atmosphere, and operational learning instead of treating them as separate layers.",
    ],
    whatIDid: [
      "Structured the core product loop and participation logic.",
      "Worked on public-facing copy, positioning, and messaging guardrails.",
      "Helped shape the live site and the way the product is presented externally.",
      "Built and refined narrative outputs across web and social surfaces.",
    ],
    whatExists: [
      "Live site and public-facing product layer.",
      "Brand and messaging structures used to explain the product clearly.",
      "Ongoing iteration around message fit, user understanding, and next-step behavior.",
    ],
    keyDecisions: [
      "Keep support, reaction, and optional public sharing in one understandable loop.",
      "Treat messaging as part of product clarity, not as a separate marketing layer.",
      "Build the atmosphere around the product without losing explanatory precision.",
    ],
    galleryIntro:
      "This page prioritizes the structural parts of AHEYA first. Additional visuals can be layered in later without changing the page architecture.",
    placeholderMedia: [
      { label: "Live site reference", note: "Current public-facing product layer" },
      { label: "Narrative output", note: "Messaging and visual support assets" },
      { label: "Flow framing", note: "Loop and interaction structure" },
    ],
    currentStatus: [
      "Live and still being refined.",
      "Most useful as evidence of current integrated practice across product, narrative, and creative work.",
    ],
  },
  {
    slug: "andersson-bell",
    section: "Selected Work",
    eyebrow: "Creative planning",
    title: "Andersson Bell",
    oneLiner:
      "A GenAI short-form collaboration shaped through stakeholder feedback, visual narrowing, and a more disciplined storyboard system.",
    summary:
      "This project shows how I work when a visual direction needs structure: brand analysis, storyboard revision, toolchain coordination, and converting feedback into the next usable production rule.",
    roles: ["Creative planning", "Storyboard revision", "Feedback alignment"],
    evidence: ["Report", "Storyboard", "Image pipeline", "Short-form package"],
    status: "Completed collaboration",
    tier: "selected",
    accent: "orange",
    year: "2025",
    coverImage: {
      src: "/work/andersson-bell-cover.png",
      alt: "A generated Andersson Bell visual showing a crosswalk scene and surreal product cue.",
    },
    overview: [
      "A collaborative short-form project built around Andersson Bell's tone and visual logic.",
      "The strongest part of the work was narrowing the direction until the visual system became consistent enough to produce against.",
    ],
    whatIDid: [
      "Worked through brand analysis and storyboard structure.",
      "Reframed the sequence after early approaches created tone diffusion.",
      "Connected Midjourney, Gemini, Photoshop, and Kling into a repeatable pipeline.",
      "Helped translate real stakeholder feedback into clearer production rules.",
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
      "This case should eventually hold the storyboard, key generated frames, and a reduced version of the final visual package.",
    placeholderMedia: [
      {
        label: "Generated cover still",
        note: "Representative still from the revised visual direction.",
        src: "/work/andersson-bell-cover.png",
        alt: "Andersson Bell generated crosswalk still.",
      },
      {
        label: "Tooling capture",
        note: "Process view from image-to-video iteration.",
        src: "/work/andersson-bell-process.png",
        alt: "Andersson Bell process screenshot from the image to video workflow.",
      },
      {
        label: "Variation field",
        note: "A screen of narrowed visual variants used to choose direction.",
        src: "/work/andersson-bell-variants.png",
        alt: "Andersson Bell grid of generated visual variants.",
      },
    ],
    currentStatus: [
      "Closed project with visible outputs.",
      "Best read as a creative planning case rather than a pure asset-making case.",
    ],
  },
  {
    slug: "sfti-cmu",
    section: "Selected Work",
    eyebrow: "Research writing",
    title: "SFTI-CMU",
    oneLiner:
      "An English conference submission that turned AI-generated emotional content into a structured research question and visual framework.",
    summary:
      "This case is less about academic polish and more about external-facing research translation: building a usable concept, organizing references, and framing a visual clustering approach in English.",
    roles: ["Research framing", "English writing", "Visual framework"],
    evidence: ["Submission", "Review result", "Abstract", "Framework logic"],
    status: "Accepted with revisions",
    tier: "selected",
    accent: "indigo",
    year: "2025",
    overview: [
      "A conference submission on AI-generated emotional content strategy for niche fashion brands.",
      "The work connects research language, brand interpretation, and a visual clustering framework.",
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
      "This page should stay text-forward with a few supporting research visuals instead of pretending to be a media-heavy design case.",
    placeholderMedia: [
      { label: "Submission excerpt", note: "Abstract and framing" },
      { label: "Review result", note: "Acceptance with revisions" },
      { label: "Framework panel", note: "Visual clustering logic" },
    ],
    currentStatus: [
      "Closed research output with a concrete external result.",
      "Best used as evidence of writing, framing, and English communication.",
    ],
  },
  {
    slug: "ilysb",
    section: "Selected Work",
    eyebrow: "Solo mobile build",
    title: "ILYSB",
    oneLiner:
      "A quickly built mobile experiment used to test a social premise, then stopped after early user discomfort appeared clearly.",
    summary:
      "ILYSB belongs in selected work because it was actually built, shown, and tested. The point is not that it became a product, but that it moved from concept to interface to user signal quickly enough to make a clear decision.",
    roles: ["Concept build", "UI direction", "Solo execution", "User testing"],
    evidence: ["Mobile app", "Screenshots", "Early test", "Decision signal"],
    status: "Built, tested, discontinued",
    tier: "selected",
    accent: "aqua",
    year: "2025",
    coverImage: {
      src: "/work/ilysb-main.png",
      alt: "ILYSB mobile interface showing the main page list view.",
    },
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
      "This page is designed to accept the screenshots you are capturing now and frame them as evidence of build speed and testing, not as a polished product launch.",
    placeholderMedia: [
      {
        label: "Main page UI",
        note: "Captured interface showing the list and action state.",
        src: "/work/ilysb-main.png",
        alt: "ILYSB mobile main page screenshot.",
      },
      {
        label: "Hint screen",
        note: "One of the core reveal surfaces in the app flow.",
        src: "/work/ilysb-hints.png",
        alt: "ILYSB hint screen with social clues.",
      },
      {
        label: "Entry screen",
        note: "Login and opening access point of the app.",
        src: "/work/ilysb-login.png",
        alt: "ILYSB entry screen with Kakao login.",
      },
    ],
    currentStatus: [
      "Useful as a build-and-test case, not as an ongoing product.",
      "Should stay compact and direct in the public portfolio.",
    ],
  },
  {
    slug: "be-moon",
    section: "Archive / Venture Studies",
    eyebrow: "Venture thesis",
    title: "be:moon",
    oneLiner:
      "A fashion x web3 digital warranty thesis shaped around DPP, counterfeit risk, and service structure rather than surface branding alone.",
    summary:
      "be:moon is best presented as a serious venture study. The public page should not try to show full planning documents. It should show the distilled thesis, the service framing, and the design surfaces that emerged from that work.",
    roles: ["Problem framing", "Service design", "Venture thesis", "Planning"],
    evidence: ["Figma structure", "Service logic", "Thesis summary", "Archived study"],
    status: "Structured study with visible surfaces",
    tier: "selected",
    accent: "orange",
    year: "2024",
    coverImage: {
      src: "/work/bemoon-ui.png",
      alt: "be:moon Figma overview showing dark mobile screens and NFT-oriented product surfaces.",
    },
    overview: [
      "A service thesis built around digital warranty logic, DPP pressure, and trust in fashion resale and verification.",
      "It is strongest when shown as a structured venture study rather than as a finished product claim.",
    ],
    whatIDid: [
      "Framed the problem around regulation, counterfeit circulation, and brand-side operational pressure.",
      "Mapped issuance, verification, and transaction logic into a coherent service concept.",
      "Used planning documents to make the service thesis more concrete before implementation.",
    ],
    whatExists: [
      "Service framing and Figma-oriented design surfaces.",
      "Core problem-solution structure already identified.",
      "A good foundation for a distilled public case page.",
    ],
    keyDecisions: [
      "Present this as a venture study, not as a launched product.",
      "Use only distilled structure and interface evidence, not raw planning documents.",
      "Center the relationship between regulation, trust, and service operations.",
    ],
    galleryIntro:
      "This case is prepared to receive structure diagrams and interface captures. The public page should show outputs derived from planning, not the documents themselves.",
    placeholderMedia: [
      {
        label: "Figma overview",
        note: "Core interface surfaces and information architecture.",
        src: "/work/bemoon-ui.png",
        alt: "be:moon Figma board with multiple screens.",
      },
      {
        label: "NFT surface",
        note: "Verification and token-facing product evidence.",
        src: "/work/bemoon-nft.png",
        alt: "be:moon NFT and Polygonscan related surface.",
      },
      { label: "Decision summary", note: "Why the thesis mattered" },
    ],
    currentStatus: [
      "Archived as a serious study rather than a live product.",
      "Visual inserts will make this page much stronger once staged.",
    ],
  },
  {
    slug: "ariadne-mode-moment",
    section: "Archive / Venture Studies",
    eyebrow: "Early venture study",
    title: "Ariadne / ModeMoment",
    oneLiner:
      "A fashion community and service exploration built around style-based interaction, decision support, and the expansion of an early venture idea.",
    summary:
      "This case matters as an early structured study: community logic, interaction design, and the attempt to turn fashion indecision into a product system. ModeMoment is treated here as the expanded continuation of that same line of thought.",
    roles: ["Community planning", "Interaction design", "Service framing", "Early venture study"],
    evidence: ["Structure diagram", "Screen plan", "Interaction logic", "Archived study"],
    status: "Archived exploration with structured framing",
    tier: "selected",
    accent: "indigo",
    year: "2023 - 2024",
    overview: [
      "An early service exploration around helping people make fashion decisions through structured community interaction.",
      "It is useful today as evidence of how I began thinking about participation, structure, and systemized user interaction.",
    ],
    whatIDid: [
      "Defined the core premise around style-based communities and decision support.",
      "Structured features such as voting, chat, photo sharing, saving, and reactions.",
      "Extended the original thesis into a broader venture direction through ModeMoment.",
    ],
    whatExists: [
      "Core service logic and feature framing.",
      "Documented interaction structure strong enough to turn into a public case summary.",
      "A staged slot for diagrams and screens you plan to add.",
    ],
    keyDecisions: [
      "Treat this as an early venture study, not as a polished product case.",
      "Show the community and interaction structure, not the raw documents.",
      "Use the page to reveal the design thinking behind later work.",
    ],
    galleryIntro:
      "This page is intentionally staged for future structure diagrams and UI captures. It should read like an archived study with clear public framing.",
    placeholderMedia: [
      { label: "Structure diagram", note: "Community and interaction model" },
      { label: "Screen snapshots", note: "Feature and flow references" },
      { label: "Decision summary", note: "What the project tried to solve" },
    ],
    currentStatus: [
      "Best positioned as an early archive case.",
      "Will become more legible once the diagrams and screenshots are inserted.",
    ],
  },
];

export const workCaseMap = Object.fromEntries(workCases.map((item) => [item.slug, item])) as Record<string, WorkCase>;

export const selectedCases = selectedOrder.map((slug) => workCaseMap[slug]);
