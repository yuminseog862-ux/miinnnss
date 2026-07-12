export type EvidenceSource = {
  slug: string;
  collection: "trust" | "motion" | "harness" | "workbench" | "toolchain" | "contract";
  returnAnchor: "systems" | "system" | "workbench" | "harness" | "toolchain" | "aheya" | "archive";
  system: string;
  period: string;
  fileName: string;
  fileType: string;
  state: string;
  description: string;
  excerpt: string;
  excerptKind?: "verbatim-selection" | "redacted-selection" | "structured-summary";
  disclosureNote?: string;
};

export const evidenceSources: EvidenceSource[] = [
  {
    slug: "idol-harness-stage-registry",
    collection: "harness",
    returnAnchor: "system",
    system: "IDOL / PRODUCTION SYSTEM",
    period: "ACTIVE STRUCTURE",
    fileName: "stage-registry.yaml",
    fileType: "YAML 원문 일부",
    state: "8 PHASES / 29 STAGES",
    description: "실제 단계 레지스트리에서 단계 간 책임과 수정 원칙을 정한 부분만 선별했습니다.",
    excerptKind: "verbatim-selection",
    disclosureNote: "원문 1-32행 중 공개에 필요한 항목만 선별했습니다. 경로·운영 명령·현재 작업 상태는 포함하지 않습니다.",
    excerpt: `schema_version: idol-harness-stage-registry.v1
status: active

compatibility_policy:
  semantic_ids_are_stable: true
  operator_names_may_evolve: true
  legacy_codes_remain_resolvable: true
  legacy_filenames_remain_valid: true
  new_aliases_are_additive: true

decision_ownership_policy:
  one_canonical_owner_per_decision: true
  downstream_projection_does_not_reown: true
  feedback_creates_upstream_revision: true
  compiler_returns_missing_creative_truth_upstream: true`,
  },
  {
    slug: "idol-harness-action-queue-contract",
    collection: "harness",
    returnAnchor: "harness",
    system: "IDOL / PRODUCTION SYSTEM",
    period: "ACTIVE CONTRACT",
    fileName: "action-queue-contract.json",
    fileType: "스키마 구조 요약",
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
    fileType: "구현 구조 요약",
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
    fileType: "구현 구조 요약",
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
    returnAnchor: "system",
    system: "PULSO / ACTUAL PLANNING RECORD",
    period: "2026.06 / READY FOR DOWNSTREAM",
    fileName: "pulso-front-planning-readiness.yaml",
    fileType: "제작 기록 구조 요약",
    state: "6 SOURCE REFS / 9 DOWNSTREAM TARGETS",
    description: "실제 Pulso 작업에서 음원·컷·가사·비주얼 보드·의상 판단을 다음 제작 단계로 넘기기 위해 남긴 인계 기록의 공개용 요약입니다.",
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
    returnAnchor: "system",
    system: "IDOL / FRONT PLANNING WORKBENCH",
    period: "2026.07 / RUNNABLE DEVELOPMENT CHECKPOINT",
    fileName: "workbench-checkpoint.md",
    fileType: "Markdown 원문 일부",
    state: "NATIVE APP / REAL-SONG PILOT NOT ACCEPTED",
    description: "실제 구현·검증 문서에서 주장 수준을 구분한 기준을 그대로 선별했습니다.",
    excerptKind: "verbatim-selection",
    disclosureNote: "원문 Evidence Standard 구간입니다. 모델 세션 ID, 내부 테스트 상세, 환경 정보는 공개하지 않습니다.",
    excerpt: `This record separates four kinds of claim:

1. implemented — the route exists in executable code;
2. hermetic pass — the route passed a fake/local
   contract test without consuming provider usage;
3. subscription-native pass — the route ran through
   the installed product client; and
4. not yet accepted — a real-song or scale/quality
   condition remains.

It does not describe a scaffold as production-complete.`,
  },
  {
    slug: "ink-output-registry",
    collection: "harness",
    returnAnchor: "harness",
    system: "INK / DUNE PRODUCTION REGISTRY",
    period: "2026.06 / REGISTERED RUN",
    fileName: "output-registry.yaml",
    fileType: "YAML 레지스트리 구조 요약",
    state: "02A · 02B · EDIT · PACKAGE POINTERS",
    description: "INK의 0618 DUNE 작업에서 키프레임, 컨택트시트, 영상 프롬프트, 편집본, 공개 패키지의 경로를 어떻게 등록했는지 보여주는 구조 요약입니다.",
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
    returnAnchor: "system",
    system: "IDOL / PYTHON MEDIA RUNTIME",
    period: "PINNED LOCAL RUNTIME",
    fileName: "idol-video-python + requirements-video.txt",
    fileType: "실행 환경 구조 요약",
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
    returnAnchor: "system",
    system: "IDOL / MEDIA ANALYSIS",
    period: "IMPLEMENTED SCRIPT",
    fileName: "idol_video_source_intake.py",
    fileType: "Python 편집 발췌",
    state: "PROBE · MOTION PEAKS · CONTACT SHEET",
    description: "실제 Python 스크립트에서 움직임이 큰 구간을 찾는 함수의 핵심 부분을 선별했습니다.",
    excerptKind: "redacted-selection",
    disclosureNote: "원문 426-464행의 계산 로직을 짧게 편집했습니다. 반복문 일부, 로컬 경로, 작업 식별자는 포함하지 않습니다.",
    excerpt: `def motion_peaks(video_path: Path,
                 sample_fps: float,
                 limit: int = MOTION_PEAK_LIMIT):
    cap = cv2.VideoCapture(str(video_path))
    native_fps = cap.get(cv2.CAP_PROP_FPS) or 24.0

    flow = cv2.calcOpticalFlowFarneback(
        prev_gray, gray, None,
        0.5, 3, 15, 3, 5, 1.2, 0,
    )
    mag, _ = cv2.cartToPolar(flow[..., 0], flow[..., 1])
    score = float(np.mean(mag))

    return sorted(rows, key=lambda row: row["motion_score"],
                  reverse=True)[:limit]`,
  },
  {
    slug: "idol-beat-aware-roughcut",
    collection: "toolchain",
    returnAnchor: "system",
    system: "IDOL / EDIT ASSIST",
    period: "IMPLEMENTED SCRIPT",
    fileName: "idol_video_sync_workbench.py",
    fileType: "Python 구조 요약",
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
    fileType: "Solidity 편집 발췌",
    state: "EIP-712 PERMIT · OPERATOR RECORD · EVENTS",
    description: "공개 저장소의 실제 Solidity 코드에서 등록 허가와 운영자 기록 구조를 선별했습니다.",
    excerptKind: "redacted-selection",
    disclosureNote: "이미 공개된 스마트계약 코드에서 함수 인자와 검증 본문을 축약했습니다. 실제 주소, 배포 정보, 거래 데이터는 포함하지 않습니다.",
    excerpt: `struct PublishPermit {
    address creator;
    bytes32 ideaId;
    bytes32 metadataHash;
    address seedWallet;
    uint256 deadline;
    uint256 nonce;
}

modifier onlyOperator() {
    if (msg.sender != owner && !isOperator[msg.sender])
        revert NoPermission();
    _;
}

function recordIdeaFunding(...) external onlyOperator {
    // validation omitted
    emit IdeaFundingRecorded(..., block.timestamp);
}`,
  },
  {
    slug: "aheya-openclaw-orchestration-flow",
    collection: "trust",
    returnAnchor: "aheya",
    system: "AHEYA / OPENCLAW YUI",
    period: "IMPLEMENTED PRIVATE RUNTIME",
    fileName: "yui-orchestration-flow.ts",
    fileType: "TypeScript 편집 발췌",
    state: "EXECUTE · REVIEW · RECORD",
    description: "실제 Yui flow에서 후보 선택, 단계 실행, 검토, 기록 상태를 분리한 부분만 편집해 공개합니다.",
    excerptKind: "redacted-selection",
    disclosureNote: "인증 교환, 접근 토큰, 지갑 식별 필드, API 주소, 최종 기록 요청 본문을 제외했습니다. 아래 코드는 흐름 확인에 필요한 실제 식별자와 상태 처리만 남긴 편집 발췌입니다.",
    excerpt: `export async function runOrchestrateAndDeliver(input) {
  const candidates = await browseMarket(request)
  const candidateSnapshot = buildCandidateSnapshot(candidates, limit)

  // authentication and API details omitted
  const selectedPlan = selectPlan(plan, request.chosenPlanId)
  const stageRuns = await executeSelectedPlan(
    request, snapshotKey, selectedPlan
  )
  const { review, verdict } = buildStrictReview({ ... })

  let recordingStatus = request.skipCanonical
    ? 'skipped'
    : 'written'

  // canonical write details omitted
  // on write failure: recordingStatus = 'failed'

  return { selectedPlan, stageRuns, review, verdict,
           recordingStatus, warnings }
}`,
  },
  {
    slug: "aheya-trust-recommendation-memory",
    collection: "trust",
    returnAnchor: "aheya",
    system: "AHEYA / TRUST",
    period: "CURRENT IMPLEMENTATION",
    fileName: "recommendation-memory.ts",
    fileType: "구현 구조 요약",
    state: "CANONICAL + HUMAN/AGENT FEEDBACK",
    description: "새 후보를 판단할 때 이전에 확정한 신호와 평가 기록을 어떤 방식으로 고려하는지 보여주는 공개용 요약입니다.",
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
    fileType: "기록 템플릿 구조 요약",
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
    fileType: "집계 데이터 구조 요약",
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
    fileType: "자동화 규칙 구조 요약",
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
    fileType: "Markdown 구조 요약",
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
    fileType: "Markdown 구조 요약",
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
    fileType: "JSON 구조 요약",
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
    fileType: "YAML 구조 요약",
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
    fileType: "Markdown 구조 요약",
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

export function getEvidenceDisclosureLabel(source: EvidenceSource) {
  switch (source.excerptKind ?? "structured-summary") {
    case "verbatim-selection":
      return "원문 일부";
    case "redacted-selection":
      return "편집 발췌";
    default:
      return "구조 요약";
  }
}
