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

export type StructuredBlock = {
  title: string;
  body: string;
  accent?: Accent;
  items?: string[];
};

export type FlowStep = {
  step: string;
  title: string;
  body: string;
  meta?: string;
};

export type IaGroup = {
  title: string;
  items: string[];
};

export type ScreenGuideBlock = {
  title: string;
  purpose: string;
  components: string[];
  focus: string;
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
  problemSummary?: string[];
  solutionSummary?: StructuredBlock[];
  flowHeading?: string;
  flowSteps?: FlowStep[];
  serviceStructure?: StructuredBlock[];
  iaGroups?: IaGroup[];
  screenGuide?: ScreenGuideBlock[];
  coreJudgments?: StructuredBlock[];
  structureOutcome?: string;
  galleryIntro: string;
  placeholderMedia: PlaceholderMedia[];
  currentStatus: string[];
};

export const siteTitle = "Selected Work";

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
  "ilysb",
  "be-moon",
  "sfti-cmu",
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
  line: "Portfolio frame for selected work, product logic, and ongoing web3 practice.",
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
    section: "Selected Work",
    eyebrow: "Venture-thesis product",
    title: "BE;MOON",
    oneLiner:
      "A digital warranty rail for fashion brands, structured around DPP pressure, counterfeit trust gaps, and issuance-to-verification operations.",
    summary:
      "BE;MOON now reads best as a product-logic case, not a private document archive. The important part is the operating rail: purchase authentication, wallet minting, verification, and OMS state sync built as one trust layer.",
    roles: ["Problem framing", "Service design", "Product logic", "Venture thesis"],
    evidence: ["Problem / solution flow", "Service structure", "Figma surfaces", "MVP rail"],
    status: "Structured product case",
    tier: "selected",
    accent: "orange",
    year: "2024",
    coverImage: {
      src: "/work/bemoon-ui.png",
      alt: "be:moon Figma overview showing dark mobile screens and NFT-oriented product surfaces.",
    },
    overview: [
      "BE;MOON started from a simple question: how should a fashion brand prove ownership and authenticity once regulation, resale, and post-purchase trust all start to matter at the same time?",
      "The strongest output was not a branding layer but an MVP service rail: issuance, minting, verification, and OMS sync treated as one operating system for digital warranty.",
    ],
    whatIDid: [
      "Defined the case around DPP pressure, counterfeit circulation, and the gap between internal warranty systems and external trust.",
      "Turned that into a product rail covering purchase authentication, wallet minting, verification, ownership state, and OMS linkage.",
      "Translated the venture thesis into service structure and interface surfaces strong enough to communicate the model publicly.",
    ],
    whatExists: [
      "A clear one-page problem / solution / flow logic.",
      "Figma-based product surfaces showing the warranty and verification layer.",
      "A service structure that can be explained without exposing the original planning documents.",
    ],
    keyDecisions: [
      "Start from the auth rail first instead of pretending the value is benefits or community from day one.",
      "Keep OMS state sync tightly connected to ownership so the warranty does not drift away from real product data.",
      "Treat perks and downstream transactions as a second layer after trust and verification become stable.",
    ],
    problemSummary: [
      "Fashion brands are facing rising DPP pressure and higher operational complexity around traceability and post-purchase record keeping.",
      "At the same time, counterfeit circulation weakens resale trust and makes existing internal warranty records hard to use in external verification moments.",
      "The real gap is not visual branding. It is the missing operating rail that connects purchase, ownership, verification, and brand-side system sync.",
    ],
    solutionSummary: [
      {
        title: "Trust layer first",
        body: "Position the product as a digital warranty SaaS that connects product identity, wallet ownership, and verification before adding broader member logic.",
        accent: "orange",
      },
      {
        title: "Issuance to verification",
        body: "Build the first usable rail around purchase auth, minting, verification, and benefits so the service has one defensible core loop.",
        accent: "aqua",
      },
      {
        title: "Operational fit",
        body: "Keep ownership state connected to OMS and product status so external trust does not split from internal brand operations.",
        accent: "indigo",
      },
    ],
    flowHeading: "Issuance -> Minting -> Verification",
    flowSteps: [
      {
        step: "01",
        title: "Purchase / QR or WL auth",
        body: "The rail starts from product purchase and a brand-controlled entry point that confirms the buyer and the item.",
        meta: "Entry surface",
      },
      {
        step: "02",
        title: "Wallet minting + 2FA",
        body: "The warranty becomes a wallet-linked proof object through minting and additional auth rather than staying inside a private database only.",
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
        body: "The middle layer handles issuance SaaS, minting and verification logic, and ownership state management.",
        accent: "aqua",
        items: ["Issuance SaaS", "Minting / verification engine", "Status and ownership database"],
      },
      {
        title: "Metadata / contract layer",
        body: "Proof objects, metadata storage, and verification logs make the warranty portable enough to support resale trust later.",
        accent: "indigo",
        items: ["Metadata storage", "Smart contract layer", "Verification log"],
      },
      {
        title: "Consumer / external channels",
        body: "The proof becomes usable in verification, benefit access, and future external trust moments instead of staying locked inside one brand system.",
        accent: "orange",
        items: ["Consumer wallet", "Benefit check", "External trust / resale surface"],
      },
    ],
    structureOutcome:
      "The draft lands on a simple claim: digital warranty is not just a token feature. It is an operating rail for brand trust, verification, and ownership continuity.",
    galleryIntro:
      "The supporting surfaces below stay secondary. The center of this case is the product logic, while the Figma and NFT-facing images act as proof that the service model was already translated into visible interfaces.",
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
      { label: "Service logic note", note: "Issuance, verification, and OMS sync as one rail." },
    ],
    currentStatus: [
      "A strong draft-level case because the product logic is already web-native and legible.",
      "Best read as a venture-thesis product system rather than a finished launch.",
    ],
  },
  {
    slug: "ariadne-mode-moment",
    section: "Selected Work",
    eyebrow: "Decision-layer concept",
    title: "Ariadne / ModeMoment",
    oneLiner:
      "A fashion decision-layer service that reduces cart-stage hesitation through similar-taste feedback, unified storage, and lightweight social judgment.",
    summary:
      "Ariadne matters because the structure is already specific. Instead of another fashion discovery feed, it focuses on the decision moment after recommendation, with ModeMoment positioned as the expansion of the same venture line.",
    roles: ["Service framing", "IA planning", "Interaction design", "Venture expansion"],
    evidence: ["Problem / solution flow", "IA block", "Service structure", "Screen guide"],
    status: "Structured concept case",
    tier: "selected",
    accent: "indigo",
    year: "2023 - 2024",
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
        body: "Ariadne should not compete with Musinsa, Zigzag, or brand malls on payment. It works best as a layer on top of those platforms.",
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
        components: [
          "Mood chips",
          "Favorite item cards",
          "Purchase-priority chips",
          "Next CTA",
        ],
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
        components: [
          "Source selector",
          "2 to 5 candidate slots",
          "Question input",
          "Tag chips",
          "Optional self-photo toggle",
        ],
        focus: "The sequence should stay explicit: add candidates, write the question, attach the context, then publish.",
      },
      {
        title: "Screen 04. Storage",
        purpose: "Make saved candidates behave like a comparison-first cart instead of a flat wishlist.",
        components: [
          "Search bar",
          "Folder cards",
          "Filter chips",
          "Saved-item grid",
          "Purchase links",
        ],
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
      "Strong enough to sit in selected work because the service logic is already specific and transferable.",
      "Future visuals will help, but the core case no longer depends on exposing the original files.",
    ],
  },
];

export const workCaseMap = Object.fromEntries(workCases.map((item) => [item.slug, item])) as Record<string, WorkCase>;

export const selectedCases = selectedOrder.map((slug) => workCaseMap[slug]);
