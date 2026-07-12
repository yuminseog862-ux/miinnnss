export type EvidenceSource = {
  slug: string;
  collection: "trust" | "motion" | "harness" | "workbench" | "toolchain" | "contract";
  returnAnchor: "systems" | "workbench" | "harness" | "toolchain" | "aheya" | "archive";
  system: string;
  period: string;
  fileName: string;
  fileType: string;
  state: string;
  description: string;
  excerpt: string;
};

export const evidenceSources: EvidenceSource[] = [
  {
    slug: "idol-harness-stage-registry",
    collection: "harness",
    returnAnchor: "harness",
    system: "IDOL / PRODUCTION SYSTEM",
    period: "ACTIVE STRUCTURE",
    fileName: "stage-registry.yaml",
    fileType: "Curated YAML excerpt",
    state: "8 PHASES / 29 STAGES",
    description: "제작 단계의 semantic id, owner, 산출물, gate, upstream dependency를 관리하는 레지스트리의 공개용 요약입니다.",
    excerpt: `status: active
compatibility_policy:
  semantic_ids_are_stable: true
  legacy_codes_remain_resolvable: true

stage_contract:
  canonical_owner: required
  human_approval_gate: explicit
  upstream_stage_ids: traceable`,
  },
  {
    slug: "idol-harness-action-queue-contract",
    collection: "harness",
    returnAnchor: "harness",
    system: "IDOL / PRODUCTION SYSTEM",
    period: "ACTIVE CONTRACT",
    fileName: "action-queue-contract.json",
    fileType: "Curated schema excerpt",
    state: "OWNER · BLOCKER · FORBIDDEN ACTIONS",
    description: "자동화 queue가 실행 단위의 책임, 상태, 근거, 금지 행동을 빠뜨리지 않도록 하는 공개용 계약 발췌입니다.",
    excerpt: `queue.required = [
  priority, owner, status,
  source_artifact, action,
  requires_human_decision,
  forbidden_actions, next_units
]

status = pending | current | blocked | not_approved`,
  },
  {
    slug: "idol-harness-context-pack",
    collection: "harness",
    returnAnchor: "harness",
    system: "IDOL / PRODUCTION SYSTEM",
    period: "ACTIVE IMPLEMENTATION",
    fileName: "context-pack-builder.rb",
    fileType: "Curated implementation excerpt",
    state: "READ-ONLY / HASHED / SECTION-GATED",
    description: "현재 작업에 필요한 맥락만 안전하게 다시 묶는 context pack의 동작 원리를 공개 범위에서 발췌했습니다.",
    excerpt: `context_pack:
  mode: read_only
  resolve: semantic_stage + active_section
  include: adjacent_transition + approved_lock
  verify: source_sha256 + readiness_axes

rule: edit canonical sources, then regenerate`,
  },
  {
    slug: "idol-harness-approval-gate-refresh",
    collection: "harness",
    returnAnchor: "harness",
    system: "IDOL / PRODUCTION SYSTEM",
    period: "ACTIVE IMPLEMENTATION",
    fileName: "approval-gate-refresh.rb",
    fileType: "Curated implementation excerpt",
    state: "EXPLICIT APPROVAL / SCHEMA VALIDATED",
    description: "명시적 승인 이후 어떤 상태 문서가 함께 갱신되는지 보여주는 공개용 실행 체인 발췌입니다.",
    excerpt: `decision_apply requires: explicit input

record decision
  -> validate decision contract
  -> refresh action queue
  -> refresh next unit
  -> refresh approval gate
  -> refresh current pointer
  -> validate gate consistency`,
  },
  {
    slug: "pulso-front-planning-readiness",
    collection: "workbench",
    returnAnchor: "workbench",
    system: "PULSO / ACTUAL PLANNING RECORD",
    period: "2026.06 / READY FOR DOWNSTREAM",
    fileName: "pulso-front-planning-readiness.yaml",
    fileType: "Curated production-record excerpt",
    state: "6 SOURCE REFS / 9 DOWNSTREAM TARGETS",
    description: "실제 Pulso run에서 음원·컷·가사·비주얼 보드·의상 판단을 이후 제작 단계로 넘기기 위해 남긴 planning readiness record의 공개용 요약입니다.",
    excerpt: `content: Pulso
status: ready_for_downstream

source_refs: 6
ready_for:
  00 -> 00A -> 01 -> 02A -> 02B -> 03V -> 04

automation:
  validate schema + source paths only
  never decide creative meaning
  never promote this run motif as a default`,
  },
  {
    slug: "front-planning-workbench-checkpoint",
    collection: "workbench",
    returnAnchor: "workbench",
    system: "IDOL / FRONT PLANNING WORKBENCH",
    period: "2026.07 / RUNNABLE DEVELOPMENT CHECKPOINT",
    fileName: "workbench-checkpoint.md",
    fileType: "Curated build-and-verification excerpt",
    state: "NATIVE APP / REAL-SONG PILOT NOT ACCEPTED",
    description: "실제 planning record를 읽고 선택·보류·handoff하기 위해 만든 local native workbench의 구현 및 검증 범위를 공개용으로 요약했습니다.",
    excerpt: `implemented:
  live plan + visual board
  sequence rail + contact sheet
  explicit pass / revise / hold
  hash-bound readiness

verified:
  contracts + native tests
  native Codex/Grok turns
  persistence + no localhost server

boundary: real-song pilot not accepted yet`,
  },
  {
    slug: "ink-output-registry",
    collection: "harness",
    returnAnchor: "harness",
    system: "INK / DUNE PRODUCTION REGISTRY",
    period: "2026.06 / REGISTERED RUN",
    fileName: "output-registry.yaml",
    fileType: "Curated YAML registry excerpt",
    state: "02A · 02B · EDIT · PACKAGE POINTERS",
    description: "INK의 0618 DUNE run에서 keyframe, contact sheet, video prompt, edit, package 경로를 어떻게 등록했는지 보여주는 공개용 registry 발췌입니다.",
    excerpt: `content_id: 0618_DUNE_SUCCESS_PRE00
status: generated

output_roots:
  contact_sheets: runs/*/*/generations/image/*/contact-sheets/
  video_prompts: runs/*/*/generations/video-prompts/
  edits: runs/*/*/generations/video/master/
  packages: runs/*/*/package/

registered_examples:
  - source_step: edit
    output_type: qc_artifact
    notes: video source contact sheet
  - source_step: post_review_video
    output_type: generated_video
    notes: raw generated video source discovered for edit intake

boundary:
  registry_pointer: true
  final_human_acceptance: not claimed`,
  },
  {
    slug: "idol-media-runtime",
    collection: "toolchain",
    returnAnchor: "toolchain",
    system: "IDOL / PYTHON MEDIA RUNTIME",
    period: "PINNED LOCAL RUNTIME",
    fileName: "idol-video-python + requirements-video.txt",
    fileType: "Curated runtime excerpt",
    state: "PYTHON 3.12 · FFMPEG · FFPROBE",
    description: "오디오·영상 분석과 편집 보조 스크립트가 같은 재현 가능한 환경에서 실행되도록 고정한 로컬 런타임의 공개용 요약입니다.",
    excerpt: `runtime:
  entrypoint: scripts/idol-video-python
  python: isolated .venv-video
  required:
    - numpy / scipy / librosa / soundfile
    - moviepy / opencv / pillow
    - PyYAML / jsonschema
  external_tools: ffmpeg / ffprobe

rule: validate package pins before media work`,
  },
  {
    slug: "idol-video-source-intake",
    collection: "toolchain",
    returnAnchor: "toolchain",
    system: "IDOL / MEDIA ANALYSIS",
    period: "IMPLEMENTED SCRIPT",
    fileName: "idol_video_source_intake.py",
    fileType: "Curated Python excerpt",
    state: "PROBE · MOTION PEAKS · CONTACT SHEET",
    description: "생성 영상 후보를 메타데이터, 움직임 피크, 시간표시 컨택트시트로 바꾸어 편집 판단 전에 읽을 수 있게 만든 구현의 공개용 요약입니다.",
    excerpt: `for each video source:
  ffprobe -> duration / geometry / fps / codec
  OpenCV Farneback -> top motion peaks
  ffmpeg -> timecoded contact sheet
  SHA-256 -> cache and evidence integrity

output: compact source-intake index for edit review`,
  },
  {
    slug: "idol-beat-aware-roughcut",
    collection: "toolchain",
    returnAnchor: "toolchain",
    system: "IDOL / EDIT ASSIST",
    period: "IMPLEMENTED SCRIPT",
    fileName: "idol_video_sync_workbench.py",
    fileType: "Curated Python excerpt",
    state: "BEAT/ONSET ASSIST · EDIT RECIPE · QC",
    description: "오디오의 beat·onset과 영상 움직임을 관찰 자료로 만들고, 사람이 고친 YAML recipe에서 roughcut과 QC 시트를 다시 만드는 구현의 공개용 요약입니다.",
    excerpt: `audio assist:
  librosa -> beat / onset / RMS / energy jump
video assist:
  OpenCV -> motion profile
editable truth:
  YAML -> source in/out / order / duration
render:
  MoviePy + ffmpeg -> roughcut + QC sheet

boundary: analysis never locks creative cut timing`,
  },
  {
    slug: "aheya-evm-funding-registry",
    collection: "contract",
    returnAnchor: "aheya",
    system: "AHEYA / SMART CONTRACT EXPLORATION",
    period: "PUBLIC SOURCE ARTIFACT",
    fileName: "AheyaEvmFundingRegistryRecord.sol",
    fileType: "Curated Solidity excerpt",
    state: "EIP-712 PERMIT · OPERATOR RECORD · EVENTS",
    description: "AI와 함께 제품 아이디어 등록·후원 기록의 책임 경계를 스마트계약 수준까지 탐구한 실제 소스의 공개용 요약입니다.",
    excerpt: `register idea:
  EIP-712 signed permit
  creator + metadata hash + seed wallet
  deadline + nonce replay guard

record funding:
  owner/operator gate
  event-only funding record

boundary: source artifact only; deployment and adoption not claimed`,
  },
  {
    slug: "aheya-openclaw-orchestration-flow",
    collection: "trust",
    returnAnchor: "aheya",
    system: "AHEYA / OPENCLAW YUI",
    period: "IMPLEMENTED PRIVATE RUNTIME",
    fileName: "yui-orchestration-flow.ts",
    fileType: "Curated implementation excerpt",
    state: "EXECUTE · REVIEW · RECORD",
    description: "OpenClaw Yui가 후보 snapshot, 선택 plan, 실행 job, strict review, canonical 기록 상태를 분리하는 공개용 흐름입니다.",
    excerpt: `browse market
  -> build candidate snapshot
  -> select plan
  -> execute stages
  -> strict review
  -> canonical record

boundary:
  skipCanonical: explicit only
  delivery_success != recording_success`,
  },
  {
    slug: "aheya-trust-recommendation-memory",
    collection: "trust",
    returnAnchor: "aheya",
    system: "AHEYA / TRUST",
    period: "CURRENT IMPLEMENTATION",
    fileName: "recommendation-memory.ts",
    fileType: "Curated implementation excerpt",
    state: "CANONICAL + HUMAN/AGENT FEEDBACK",
    description: "새 후보 판단에 이전 canonical 신호와 평가 메모리를 어떤 방식으로 고려하는지 보여주는 공개용 발췌입니다.",
    excerpt: `candidate score:
  provider memory
  + offering memory
  + optional evaluation memory

output:
  applied_memory_status
  selection rationale
  next-plan candidates`,
  },
  {
    slug: "aheya-feature-signal-sheet",
    collection: "trust",
    returnAnchor: "aheya",
    system: "AHEYA / OPERATING RECORD",
    period: "FEATURE SIGNAL SHEET",
    fileName: "feature-signal-sheet.md",
    fileType: "Curated record-template excerpt",
    state: "RESPONSE · REUSE · RECALL · NEXT STEP",
    description: "선정 이유와 이후 반응을 다음 판단으로 이어가기 위해 만든 실제 운영 시트의 공개용 필드 구조입니다. 개별 사용자나 실제 기록값은 포함하지 않습니다.",
    excerpt: `record per feature:
  selection reason
  response signal
  reuse signal
  recall signal
  follow-up interest
  quality signal
  trust / AB note
  next step

scale: strong | medium | weak | unknown`,
  },
  {
    slug: "aheya-redacted-product-evidence-ledger",
    collection: "trust",
    returnAnchor: "aheya",
    system: "AHEYA / REDACTED PRODUCT EVIDENCE",
    period: "2026.05 / AGGREGATE SNAPSHOT",
    fileName: "product-evidence-ledger.md",
    fileType: "Curated aggregate-data excerpt",
    state: "ACTIVITY · PROOF · REVIEW · TRUST",
    description: "개별 계정이나 원문 데이터를 노출하지 않고 제품의 activity, proof, review, Trust 상태를 집계로 남긴 evidence ledger의 공개용 요약입니다.",
    excerpt: `aggregate snapshot:
  published ideas: 65
  verified quest submissions: 41
  public feedback proofs: 38
  Trust signals: 958

boundary:
  aggregate evidence only
  not a current-performance claim`,
  },
  {
    slug: "aheya-daily-brief-automation",
    collection: "trust",
    returnAnchor: "aheya",
    system: "AHEYA / OPERATING AUTOMATION",
    period: "SPECIFICATION / 08:00 KST",
    fileName: "daily-brief-automation.md",
    fileType: "Curated automation-spec excerpt",
    state: "OPERATING SPEC / NO RUNTIME CLAIM",
    description: "현재 시즌과 기록을 읽어 당일 실행·proof·blocker를 정리하도록 한 자동화 명세의 공개용 구조입니다. 실제 스케줄러 실행 성과를 뜻하지 않습니다.",
    excerpt: `cadence: daily / 08:00 KST

read:
  season context
  recent decisions
  durable operating state

report:
  today actions
  proof check
  risk / blocker`,
  },
  {
    slug: "aurora-v1-compressed-archive-map",
    collection: "motion",
    returnAnchor: "archive",
    system: "AURORA V1 / LEGACY ARCHIVE",
    period: "2026.05",
    fileName: "legacy-archive-map.md",
    fileType: "Curated Markdown excerpt",
    state: "ARCHIVE ONLY / NOT ACTIVE TRUTH",
    description: "V1의 범위와 재사용 제한을 보여주는 공개용 보관 경계 발췌입니다.",
    excerpt: `status: legacy archive

active work uses the current production system.

recovery rule:
inspect a specific legacy file only for a concrete gap;
rewrite the result into current terms before reuse.`,
  },
  {
    slug: "aurora-motion-bank-readme",
    collection: "motion",
    returnAnchor: "archive",
    system: "AURORA V2 / ARCHIVE",
    period: "2026.05",
    fileName: "motion-bank-scope.md",
    fileType: "Curated Markdown excerpt",
    state: "REFERENCE-LOCKED CANDIDATE MEMORY",
    description: "후보 모션 문법을 저장하되 창의 판단에 자동 재사용하지 않는 조건을 정리한 공개용 발췌입니다.",
    excerpt: `status: extractable candidate memory
reference lock: active

candidate rows may be extracted from review-passed boards.
active creative steps do not read candidate memory
while the lock remains closed.`,
  },
  {
    slug: "aurora-motion-grammar-candidates",
    collection: "motion",
    returnAnchor: "archive",
    system: "AURORA V2 / ARCHIVE",
    period: "2026.05",
    fileName: "motion-grammar-index.json",
    fileType: "Curated JSON excerpt",
    state: "CANDIDATE ONLY / NOT SOURCE TRUTH",
    description: "후보 문법 파일의 수량과 접근 제한만 남긴 공개용 인덱스 발췌입니다.",
    excerpt: `counts:
  passed_stage_reviews_seen: 12
  total_candidate_rows: 23

policy:
  source_truth_allowed: false
  prompt_transfer_allowed: false
  reference_lock_state: blocked_until_explicit_approval`,
  },
  {
    slug: "idol-audio-motion-map",
    collection: "motion",
    returnAnchor: "archive",
    system: "IDOL / MOTION DIRECTION",
    period: "2026.06",
    fileName: "audio-motion-map.yaml",
    fileType: "Curated YAML excerpt",
    state: "REVIEW-PASSED AUDIO RETIME",
    description: "오디오 분석을 몸·오브젝트·카메라·컷 타이밍으로 번역하는 제작 맵의 공개용 발췌입니다.",
    excerpt: `purpose:
  translate audio cues into motion guidance

map:
  low drum + bass -> body / foot landing
  vocal + pad -> emotion / held gaze
  rim + snare -> hands / shoulders / edit stop

boundary: does not replace image selection or create new top-level cuts`,
  },
  {
    slug: "idol-performance-memory",
    collection: "motion",
    returnAnchor: "archive",
    system: "IDOL / PERFORMANCE MEMORY",
    period: "2026.05-06",
    fileName: "performance-memory.md",
    fileType: "Curated Markdown excerpt",
    state: "REVIEWED OR REPEATED USE",
    description: "검토를 통과한 컷·몸·카메라 판단만 재사용 후보로 남기는 performance memory의 공개용 발췌입니다.",
    excerpt: `cut decision = cue function
             + audio onset
             + visible body landing

review disputed windows before full render.
keep source-clean lineage for the accepted edit recipe.`,
  },
];

export const motionBankSources = evidenceSources.filter((source) => source.collection === "motion");
export const trustEvidenceSources = evidenceSources.filter((source) => source.collection === "trust");
export const harnessEvidenceSources = evidenceSources.filter((source) => source.collection === "harness");
export const workbenchEvidenceSources = evidenceSources.filter((source) => source.collection === "workbench");
export const toolchainEvidenceSources = evidenceSources.filter((source) => source.collection === "toolchain");
export const contractEvidenceSources = evidenceSources.filter((source) => source.collection === "contract");

export function getEvidenceSource(slug: string) {
  return evidenceSources.find((source) => source.slug === slug);
}
