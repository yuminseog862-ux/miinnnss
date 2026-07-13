export type EvidenceSource = {
  slug: string;
  collection: "trust" | "motion" | "harness" | "workbench" | "toolchain" | "contract";
  returnAnchor: "systems" | "system" | "workbench" | "harness" | "toolchain" | "trend" | "origin" | "validation" | "aheya" | "archive";
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
    slug: "ab-aurora-direction-selection-flow",
    collection: "workbench",
    returnAnchor: "origin",
    system: "AB_AURORA / WORKBENCH PREDECESSOR",
    period: "2026.02-03 / PUBLIC REPOSITORY",
    fileName: "README_PUBLIC.md",
    fileType: "공개 README 원문 일부",
    state: "BRIEF · DIRECTION · TOP-3 · HUMAN SELECTION",
    description: "짧은 brief를 방향과 후보로 확장하되, 최종 route는 사람이 선택하도록 분리한 AB_Aurora의 실제 공개 흐름입니다.",
    excerptKind: "verbatim-selection",
    disclosureNote: "공개 저장소 README에서 현재 사용자 흐름과 direction 계약만 선별했습니다. 내부 prompt와 provider 설정은 포함하지 않습니다.",
    excerpt: `1. Enter a concise brief:
   - product / audience / first deliverable
   - style keywords / design requirement
2. Aurora synthesizes a structured direction.
3. If the brief is weak, Aurora asks follow-up questions.
4. If ready, Aurora generates 3 text concept candidates.
5. The user selects one route.
6. PACKAGE uses the same direction plus the selected
   candidate to create final deliverables.

Direction is the canonical source of truth after DEFINE.`,
  },
  {
    slug: "ab-luna-state-handoff-lineage",
    collection: "harness",
    returnAnchor: "origin",
    system: "AB_LUNA / HARNESS MEMORY PREDECESSOR",
    period: "2026.04 / ARCHIVED PRODUCT BUILD",
    fileName: "handoff.md + result-index.md",
    fileType: "실제 파일 계약 구조 요약",
    state: "CURRENT STATE · BLOCKER · NEXT ACTION · HANDOFF",
    description: "여러 AI 산출물이 다음 작업으로 이어지지 않는 문제를 current state와 handoff 파일로 풀려 한 구조입니다. 현재 Harness의 기록·인계 방식에 남았습니다.",
    disclosureNote: "보관된 프로젝트 문서에서 공개 가능한 파일 역할만 요약했습니다. 운영 주소, 인증 정보와 작업 식별자는 포함하지 않습니다.",
    excerpt: `shared project memory:
  README.md       -> stable project brief
  state.md        -> current readable state
  result-index.md -> artifact index and provenance
  handoff.md      -> blocker / next action / files to read

goal:
  scattered AI outputs
  -> one readable state
  -> one clear next action
  -> one reliable handoff`,
  },
  {
    slug: "cf-cola-message-causality",
    collection: "harness",
    returnAnchor: "validation",
    system: "CF / COLA MEMORY-VENDING SPEC COMMERCIAL",
    period: "2026.07 / FINAL SELECTED V1",
    fileName: "CF50-keyframe-board.yaml + V6 director review",
    fileType: "최종 보드·연출 기록 원문 일부",
    state: "19.58S FINAL · 16 KEYFRAMES · PERSONAL SPEC",
    description: "제품이 장식으로 남지 않도록 버튼·눈·기억 카드·캔 조립·배출의 인과를 최종 보드와 연출에 유지한 개인 비공식 광고 제작 기록입니다.",
    excerptKind: "verbatim-selection",
    disclosureNote: "최종 선택 패키지의 keyframe board와 director review에서 세계 규칙, 인과와 카메라 경로만 선별했습니다. 전체 생성 prompt와 로컬 경로는 포함하지 않습니다.",
    excerpt: `world_rule_engine:
  A horizontal floor-mounted glass vending machine turns
  the button / eye trigger into layered memory cards,
  compresses them into the same can, and returns it.

cause_effect_read:
  button press -> eye/glasses trigger -> photo-card
  descent -> can-shaped compression -> red output ->
  retrieval -> one final opening.

camera_route:
  overhead drop -> macro button/eye -> memory layers ->
  lateral can-build tracking -> rise/catch -> opening.`,
  },
  {
    slug: "cf-headset-space-rule",
    collection: "harness",
    returnAnchor: "validation",
    system: "CF / HEADSET SELECTIVE-LISTENING SPEC COMMERCIAL",
    period: "2026.07 / FINAL MASTER V5",
    fileName: "CF70-edit-package.yaml",
    fileType: "구조화 원문 일부",
    state: "17.92S FINAL · 12 KEYFRAMES · PERSONAL SPEC",
    description: "헤드셋의 선택 청취 기능을 미술관 안의 소리와 종이 오브젝트 규칙으로 번역한 개인 비공식 광고 제작 기록입니다.",
    excerptKind: "verbatim-selection",
    disclosureNote: "원문 planning_visibility와 front_harness_carry에서 관객 경험, 제품 인과와 공개 경계만 선별했습니다. 전체 prompt는 포함하지 않습니다.",
    excerpt: `viewer_contract:
  In a public museum, retain the conversation that
  matters while unwanted chatter recedes.

subject_engine_system:
  The headphones are the ear-based rule that separates
  public chatter from wanted portrait conversation.

selected_route_read:
  the route survives because the product, not the museum
  fantasy, causes the selective change.

claim_boundary: local portfolio concept only.`,
  },
  {
    slug: "aurora-v1-to-v2-archive-map",
    collection: "harness",
    returnAnchor: "archive",
    system: "AURORA / SYSTEM EVOLUTION",
    period: "2026.05 / ARCHIVED DECISION",
    fileName: "v1-compressed-map-2026-05-15.md",
    fileType: "Markdown 원문 일부",
    state: "V1 ARCHIVED / V2 ACTIVE",
    description: "생산·리서치·검토·게시·분석을 한 트리에 섞었던 V1을 보존하고, V2의 책임과 기준으로 다시 나눈 실제 아카이브 결정입니다.",
    excerptKind: "verbatim-selection",
    disclosureNote: "원문에서 V1의 문제와 V2 전환 원칙만 선별했습니다. 내부 경로와 복구 절차의 상세는 포함하지 않습니다.",
    excerpt: `## What V1 Was

V1 combined several concerns in one broad tree:
- image prompt and video prompt production
- source research and source-to-prompt conversion
- asset dropzone and readable review storage
- platform posting and analytics support
- manually curated research runs and rollups

This made the system productive, but too easy to
confuse with active canon.

## Decision

Aurora V1 is moved out of the active production path
and archived as legacy reference.`,
  },
  {
    slug: "aurora-v2-stage-decision-log",
    collection: "harness",
    returnAnchor: "archive",
    system: "AURORA V2 / DECISION LOG",
    period: "2026.05 / ITERATION RECORD",
    fileName: "DECISION_LOG.md",
    fileType: "결정 기록 원문 일부",
    state: "TEST · OBSERVE · REVISE",
    description: "캡처 없이 안무를 설계하는 경로가 안전한 K-pop 포즈로 수렴하자, 기계적 점수 대신 곡의 흐름을 읽는 자연어 비트시트로 수정한 기록입니다.",
    excerptKind: "verbatim-selection",
    disclosureNote: "결정 배경과 수정 방향만 선별했습니다. 실행 프롬프트, 내부 경로, 현재 제작 상태는 공개하지 않습니다.",
    excerpt: `Founder identified that no-capture
agent_designed_choreography was causing STAGE boards
to converge on similar safe K-pop pose grammar.

A mechanical scoring layer would over-systematize a
creative choice.

Future STAGE no-capture packet builds keep same-dance
keypoint direction in natural beat-sheet prose.`,
  },
  {
    slug: "aurora-platform-signal-boundary",
    collection: "harness",
    returnAnchor: "archive",
    system: "AURORA V2 / PLATFORM SIGNAL",
    period: "2026.05 / X · TIKTOK ANALYSIS",
    fileName: "platform-signal-report.md",
    fileType: "분석 보고서 원문 일부",
    state: "REVIEW EVIDENCE / NOT AUTO-APPLIED",
    description: "X와 TikTok의 공개 지표를 비교하되, 지표가 곧 창작의 원인이나 자동 수정 명령이 되지 않도록 적용 범위를 제한한 기록입니다.",
    excerptKind: "verbatim-selection",
    disclosureNote: "공개 가능한 분석 경계만 선별했습니다. 계정 세부 정보, 원본 로그, 관리자 데이터는 포함하지 않습니다.",
    excerpt: `Reports here are review evidence only.

Analytics-derived candidates stay
founder_review_required: true and
application_status: not_applied until the founder
explicitly approves applying them to future creative
packets, prompts, identity assignments, source/media
choices, publishing, or constellation core.`,
  },
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
    slug: "idol-harness-ecosystem-adoption",
    collection: "harness",
    returnAnchor: "trend",
    system: "IDOL / EXTERNAL AI ECOSYSTEM ADOPTION",
    period: "2026.07.12 / OFFICIAL-SOURCE REVIEW",
    fileName: "agent-skill-structure-reference + harness-ecosystem-adoption-audit",
    fileType: "영문 공식 자료 조사·도입 판정 요약",
    state: "ADOPT · HOLD · FORBID",
    description: "Anthropic Agent Skills·MCP와 Higgsfield 생성 생태계를 공식 자료로 확인하고, IDOL 하네스에 적용할 구조와 보류·금지할 실행을 구분한 기록입니다.",
    excerptKind: "structured-summary",
    disclosureNote: "공식 출처와 도입 판정만 요약했습니다. 내부 모델 설정, 인증 정보, 전체 스킬과 운영 계약은 포함하지 않습니다.",
    excerpt: `official structures reviewed:
  Anthropic Skills -> small SKILL.md + conditional references
  MCP / tool use   -> procedure and execution stay separate
  Higgsfield       -> MCP · REST · CLI · public skills

IDOL decisions:
  ADOPT  -> progressive disclosure, typed tool boundary,
            context handoff, provider-neutral request contract
  HOLD   -> external provider adapter and paid live test
  FORBID -> protected identity/reference assets sent through
            unapproved external MCP or automatic execution`,
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
    slug: "idol-edit-desk-implementation",
    collection: "toolchain",
    returnAnchor: "system",
    system: "IDOL / LOCAL EDIT DESK",
    period: "2026.07 / WORKING MVP",
    fileName: "idol_edit_desk.py",
    fileType: "Python 편집 발췌",
    state: "SOURCE · TIMELINE · MARKERS · PREVIEW",
    description: "Premiere와 CapCut의 작업 방식을 참고해 만든 로컬 편집 보조 앱에서 소스 분석, 타임라인 표시, 선택 구간 렌더링을 담당하는 실제 함수만 선별했습니다.",
    excerptKind: "redacted-selection",
    disclosureNote: "실제 Python 구현에서 핵심 함수와 호출 관계만 편집했습니다. 로컬 작업 경로, 파일 이름, 예외 로그와 전체 UI 코드는 포함하지 않습니다.",
    excerpt: `def probe_video_duration(path: Path) -> float:
    proc = subprocess.run([
        "ffprobe", "-v", "error",
        "-show_entries", "format=duration",
        "-of", "json", str(path),
    ], capture_output=True, text=True)
    payload = json.loads(proc.stdout or "{}")
    duration = float(payload.get("format", {}).get("duration") or 0)
    if duration > 0:
        return duration

def draw_timeline(self) -> None:
    self.draw_work_area()
    self.draw_markers_lane()
    self.draw_waveform()
    self.draw_sections_lane()
    self.draw_effects()
    self.draw_clips()

def render_preview(self) -> None:
    self.save_draft()
    # range, output path, and command construction omitted
    threading.Thread(
        target=self._render_worker,
        args=(cmd, out),
        daemon=True,
    ).start()`,
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
