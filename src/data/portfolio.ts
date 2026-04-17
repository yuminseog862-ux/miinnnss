export type Accent = "aqua" | "orange" | "indigo";
export type WorkTier = "flagship" | "selected" | "archive";

export type HeroSignal = {
  label: string;
  value: string;
};

export type MediaFit = "cover" | "contain";

export type HeroContent = {
  eyebrow: string;
  title: string;
  summary: string;
  stageTitle: string;
  ctas: Array<{
    label: string;
    href: string;
    variant: "primary" | "secondary";
  }>;
  proofs: string[];
  signals: HeroSignal[];
};

export type FlagshipPlate = {
  title: string;
  body: string;
  accent: Accent;
  media: {
    src: string;
    alt: string;
    fit?: MediaFit;
  };
};

export type FlagshipFeature = {
  label: string;
  title: string;
  body: string;
  media: {
    src: string;
    alt: string;
    fit?: MediaFit;
  };
  badge: {
    src: string;
    alt: string;
  };
};

export type FocusLane = {
  title: string;
  body: string;
  accent: Accent;
  points: string[];
};

export type PlaceholderMedia = {
  label: string;
  note: string;
  src?: string;
  alt?: string;
  type?: "image" | "video";
  fit?: MediaFit;
  poster?: string;
  featured?: boolean;
  displaySize?: "default" | "compact";
  href?: string;
  hrefLabel?: string;
  stat?: string;
};

export type DetailMediaSection = {
  eyebrow: string;
  title: string;
  summary: string;
  items: PlaceholderMedia[];
  columns?: 3 | 4;
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
    fit?: MediaFit;
  };
  galleryColumns?: 3 | 4;
  detailMediaSections?: DetailMediaSection[];
  detailDensity?: "default" | "compact";
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

export const siteTitle = "Yumin Seog";

export const heroContent: HeroContent = {
  eyebrow: "Business development / AI image & video / web3 product strategy",
  title: "I turn early-stage ambiguity into market-ready products, stories, and proof.",
  summary:
    "I work where market framing, product structure, and public execution collide. My value is turning ambiguity into a sharper offer, a clearer narrative, and usable visual or product output.",
  stageTitle:
    "Cross-functional operator for early teams moving from idea to market.",
  ctas: [
    { label: "View Flagship Case", href: "#flagship", variant: "primary" },
    { label: "See Selected Proof", href: "#selected", variant: "secondary" },
  ],
  proofs: [
    "Operating a live web3 flagship across product, narrative, and channel surfaces",
    "Building AI image and short-form direction for brand-facing creative work",
    "Translating research and venture concepts into partner-readable product cases",
  ],
  signals: [
    { label: "Best fit", value: "BD / AI creative / Web3 product" },
    { label: "Current flagship", value: "AHEYA / live web3 product" },
    { label: "Strength", value: "Strategy -> narrative -> visual -> execution" },
  ],
};

export const flagshipIntro = {
  eyebrow: "Live flagship / web3 venture",
  title: "AHEYA",
  oneLiner:
    "A live web3 venture where I connect business development, product structure, founder narrative, and creative execution.",
  summary:
    "AHEYA is the clearest proof of how I operate inside ambiguity: define the offer, sharpen the public story, align channel logic, and keep iterating from real market response instead of staying at the concept layer.",
  ctaLabel: "Read flagship case",
  ctaHref: "/work/aheya",
  statusLabel: "Why it matters",
  statusValue: "Live operating proof across BD, product strategy, GTM narrative, and creative ops",
};

export const flagshipFeature: FlagshipFeature = {
  label: "Flagship visual system",
  title: "AHEYA anchors the product story with one strong world, then expands into clearer entry points.",
  body:
    "The kumiho visual works as the emotional front door. From there, the site breaks the offer into founder, project, and trust lanes that are easier to understand and act on.",
  media: {
    src: "/aheya/kumiho.png",
    alt: "AHEYA kumiho visual used as the flagship atmosphere image.",
  },
  badge: {
    src: "/aheya/logo.png",
    alt: "AHEYA app logo.",
  },
};

export const flagshipPlates: FlagshipPlate[] = [
  {
    title: "Business",
    body: "Offer framing, audience logic, founder-facing narrative, and the external story needed to make the product legible.",
    accent: "aqua",
    media: {
      src: "/aheya/home-hero.png",
      alt: "AHEYA homepage hero showing the main headline and product positioning.",
    },
  },
  {
    title: "Product",
    body: "Participation loop planning, user movement, feature prioritization, and iteration around what actually gets people to enter and return.",
    accent: "indigo",
    media: {
      src: "/aheya/lane-panels.png",
      alt: "AHEYA lane panels for founders, backers, and trust.",
    },
  },
  {
    title: "GTM",
    body: "Landing copy, guardrails, positioning, and channel-specific messaging systems built for public clarity rather than internal jargon.",
    accent: "orange",
    media: {
      src: "/aheya/tiger.png",
      alt: "AHEYA tiger creative used for narrative expansion and campaign mood.",
    },
  },
  {
    title: "Creative",
    body: "Image and video outputs, visual atmosphere, and support assets that keep the product story coherent across surfaces.",
    accent: "aqua",
    media: {
      src: "/aheya/creator.png",
      alt: "AHEYA creator-side visual used for support assets and world-building.",
    },
  },
];

export const focusContent = {
  eyebrow: "Where I Add Value Fastest",
  title: "Three lanes I can own for an early-stage team.",
  summary:
    "The through-line is translation: opportunity into story, story into product logic, and product logic into visible execution.",
  lanes: [
    {
      title: "Business development",
      body:
        "I help shape the offer, sharpen the narrative, and make early-stage opportunities easier to pitch to partners, users, and collaborators.",
      accent: "aqua",
      points: ["Opportunity framing", "Partner-ready messaging", "Founder and market narrative"],
    },
    {
      title: "AI image & video",
      body:
        "I narrow messy experiments into a repeatable visual direction, then turn feedback into a workflow that a team can actually produce against.",
      accent: "orange",
      points: ["Storyboard systems", "Image-to-video iteration", "Feedback-driven creative direction"],
    },
    {
      title: "Web3 / blockchain",
      body:
        "I treat web3 as a trust and behavior design problem: participation loops, verification rails, ownership proof, and venture logic.",
      accent: "indigo",
      points: ["Wallet and verification flow thinking", "On-chain market sensing", "Token and proof product strategy"],
    },
  ] satisfies FocusLane[],
};

export const selectedOrder = [
  "andersson-bell",
  "ilysb",
  "be-moon",
  "sfti-cmu",
  "ariadne-mode-moment",
] as const;

export const practiceContent = {
  eyebrow: "Web3 market mapping",
  title: "On-chain behavior, incentives, and venture signal.",
  summary:
    "I do not treat web3 as trend-watching. I participate, track user movement, and turn wallet behavior, incentive design, and public narrative into product, GTM, or partnership hypotheses.",
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
    { label: "Behavior", value: "What exactly is changing user movement here?" },
    { label: "Signal", value: "Wallet flow, incentive design, public proof, and friction points." },
    { label: "Hypothesis", value: "What should happen next if this mechanic is actually strong?" },
    { label: "Action", value: "Condense the pattern into product, BD, or narrative decisions." },
  ] satisfies PracticeMemo[],
};

export const footerContent = {
  line: "Portfolio for business development, AI creative systems, and web3 product strategy.",
  meta: "English-first. Private working docs stay off the public site.",
};

export const workCases: WorkCase[] = [
  {
    slug: "aheya",
    section: "Flagship",
    eyebrow: "Live web3 flagship",
    title: "AHEYA",
    oneLiner:
      "A live web3 venture where I connect business development, product structure, founder narrative, and creative operations.",
    summary:
      "AHEYA is the clearest proof of how I work in an early team: shape the offer, sharpen the story, operate the public surfaces, and keep learning from real behavior instead of treating strategy and execution as separate jobs.",
    roles: ["Business development", "Product strategy", "Narrative & GTM", "Creative operations"],
    evidence: ["Live site", "Messaging system", "Channel logic", "Iteration trail"],
    status: "Live product in operation",
    tier: "flagship",
    accent: "aqua",
    year: "2025 - present",
    overview: [
      "AHEYA is a participatory product for creator and founder momentum, designed around support, reaction, and optional public proof.",
      "It combines venture framing, product logic, public messaging, and creative execution into one live operating system instead of splitting them into separate teams too early.",
    ],
    whatIDid: [
      "Structured the core product loop and participation logic.",
      "Worked on public-facing copy, positioning, and messaging guardrails.",
      "Shaped the live site and the way the product is explained externally.",
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
      "AHEYA now reads best with the live surfaces and world-building shown together: the flagship art establishes the emotional entry, while the homepage captures show how the offer is translated into product and GTM structure.",
    placeholderMedia: [
      {
        label: "Flagship world image",
        note: "Kumiho-led hero art used to anchor AHEYA's public identity.",
        src: "/aheya/kumiho.png",
        alt: "AHEYA kumiho hero image.",
        featured: true,
      },
      {
        label: "Homepage hero",
        note: "Primary landing section that translates the offer into a clear external headline.",
        src: "/aheya/home-hero.png",
        alt: "AHEYA homepage hero screenshot.",
        fit: "contain",
      },
      {
        label: "Lane structure",
        note: "Founder, backer, and trust lanes separated into a product-readable homepage structure.",
        src: "/aheya/lane-panels.png",
        alt: "AHEYA lane-panel homepage screenshot.",
        fit: "contain",
      },
      {
        label: "GTM visual",
        note: "Tiger visual used to test narrative expansion and audience-facing campaign mood.",
        src: "/aheya/tiger.png",
        alt: "AHEYA tiger campaign visual.",
      },
      {
        label: "Creative support image",
        note: "A second world-building visual that extends the product atmosphere across public surfaces.",
        src: "/aheya/creator.png",
        alt: "AHEYA creator-side visual.",
      },
    ],
    currentStatus: [
      "Live and still being refined.",
      "Most useful as proof that I can operate across BD, product strategy, narrative, and creative execution at once.",
    ],
  },
  {
    slug: "andersson-bell",
    section: "Selected Work",
    eyebrow: "AI image-to-video direction",
    title: "Andersson Bell",
    oneLiner:
      "A brand-facing AI visual collaboration that turned open-ended experimentation into a usable image-to-video system.",
    summary:
      "This project shows how I work when a creative direction needs more than taste: I read the brand, narrow the visual system, coordinate the toolchain, and turn stakeholder feedback into production rules.",
    roles: ["AI image direction", "Storyboard system", "Feedback alignment"],
    evidence: ["Storyboard", "Generated frames", "Toolchain workflow", "Short-form output"],
    status: "Delivered creative collaboration",
    tier: "selected",
    accent: "orange",
    year: "2025",
    coverImage: {
      src: "/work/andersson-bell-cover.png",
      alt: "A generated Andersson Bell visual showing a crosswalk scene and surreal product cue.",
    },
    overview: [
      "A collaborative short-form project built around Andersson Bell's tone and visual logic.",
      "The strongest part of the work was narrowing the direction until the visual system became clear enough to produce against repeatedly.",
    ],
    whatIDid: [
      "Worked through brand analysis and storyboard structure.",
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
      "The short-form video should lead this case now. It shows the end result more clearly than stacking many stills, while still proving the image-to-video direction behind it.",
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
        displaySize: "compact",
      },
    ],
    currentStatus: [
      "Closed project with visible outputs.",
      "Best read as proof that I can direct AI visual work with structure, not just generate assets.",
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
    roles: ["Research framing", "English writing", "AI content analysis", "External communication"],
    evidence: ["Submission", "Acceptance with revisions", "Abstract", "Framework"],
    status: "Accepted conference submission",
    tier: "selected",
    accent: "indigo",
    year: "2025",
    coverImage: {
      src: "/sfti/result.png",
      alt: "SFTI-CMU accepted abstract page and conference result image.",
      fit: "contain",
    },
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
      "The accepted abstract page is the most convincing visual proof here, so this case now shows it directly instead of implying the research through generic placeholders.",
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
    slug: "ilysb",
    section: "Selected Work",
    eyebrow: "0 -> 1 mobile test",
    title: "ILYSB",
    oneLiner:
      "A solo mobile experiment that proved build speed, user-testing judgment, and the willingness to stop weak ideas early.",
    summary:
      "ILYSB belongs here because it moved from concept to interface to user signal quickly enough to make a real product decision. The value is not that it became a business. The value is judgment under speed.",
    roles: ["0 -> 1 product build", "UI direction", "User testing", "Fast execution"],
    evidence: ["Working mobile app", "Screenshots", "User test", "Kill decision"],
    status: "Built, tested, then stopped",
    tier: "selected",
    accent: "aqua",
    year: "2025",
    coverImage: {
      src: "/work/ilysb-main.png",
      alt: "ILYSB mobile interface showing the main page list view.",
      fit: "contain",
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
    slug: "be-moon",
    section: "Selected Work",
    eyebrow: "Web3 venture / trust rail",
    title: "BE;MOON",
    oneLiner:
      "A web3 product thesis for digital warranty, ownership verification, and post-purchase trust in fashion.",
    summary:
      "BE;MOON reads best as a web3 strategy case. The important part is the operating rail: purchase authentication, wallet minting, verification, and OMS state sync built as one trust layer a brand could actually operate.",
    roles: ["Web3 product strategy", "Service design", "Venture thesis", "Trust-system framing"],
    evidence: ["Problem / solution logic", "MVP flow", "Figma surfaces", "Verification model"],
    status: "Venture thesis with product architecture",
    tier: "selected",
    accent: "orange",
    year: "2024",
    coverImage: {
      src: "/work/bemoon-ui.png",
      alt: "be:moon Figma overview showing dark mobile screens and NFT-oriented product surfaces.",
      fit: "contain",
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
        fit: "contain",
        featured: true,
      },
      {
        label: "NFT surface",
        note: "Verification and token-facing product evidence.",
        src: "/work/bemoon-nft.png",
        alt: "be:moon NFT and Polygonscan related surface.",
        fit: "contain",
      },
      { label: "Service logic note", note: "Issuance, verification, and OMS sync as one rail." },
    ],
    currentStatus: [
      "A strong draft-level case because the product logic is already web-native and legible.",
      "Best read as proof that I can frame blockchain utility around trust and operations, not hype.",
    ],
  },
  {
    slug: "ariadne-mode-moment",
    section: "Selected Work",
    eyebrow: "Consumer venture strategy",
    title: "Ariadne / ModeMoment",
    oneLiner:
      "A decision-layer fashion service showing strong product strategy, IA, and monetization thinking before full build.",
    summary:
      "Ariadne matters because the structure is already specific. Instead of another fashion discovery feed, it focuses on the decision moment after recommendation, with ModeMoment extending the same strategic line into a broader venture direction.",
    roles: ["Product strategy", "Interaction design", "IA planning", "Business model thinking"],
    evidence: ["Problem / solution flow", "IA map", "Service structure", "Screen guide"],
    status: "Strategic concept with system depth",
    tier: "selected",
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
      "Useful as proof of structured product thinking even before a full build exists.",
    ],
  },
];

export const workCaseMap = Object.fromEntries(workCases.map((item) => [item.slug, item])) as Record<string, WorkCase>;

export const selectedCases = selectedOrder.map((slug) => workCaseMap[slug]);
