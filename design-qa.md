# Design QA — GENTLE MONSTER AI Experience / Direction 01

- source visual truth path: `/Users/yuminseog/portfolio/outputs/job-application-tracker/gentlemonster-ai-research/portfolio-redesign-audit-2026-07-16/implementation/selected-direction-01-continuous-handoff-rail.png`
- latest user override evidence: `/Users/yuminseog/portfolio/outputs/job-application-tracker/gentlemonster-ai-research/portfolio-redesign-audit-2026-07-16/implementation/02-left-margin-before-1280x720.png` with the requested correction that 02–05 use only slight, balanced side padding instead of the large left inset
- implementation URL: `http://localhost:3000/ai-exploration`
- viewports: desktop `1440 × 900` and `1280 × 720`; mobile `390 × 844`
- states reviewed: `#harness`, `#rationale`, `#research`, `#updates`, `#origin`
- implementation screenshots:
  - `02-production-handoff-1440x900.png`
  - `02-production-detail-1440x900.png`
  - `03-problem-implementation-1440x900-v2.png`
  - `04-discovery-verification-1440x900-v3.png`
  - `05-failure-update-1440x900-v2.png`
  - `05b-formation-timeline-1440x900.png`
  - `02-production-handoff-390x844.png`
  - `03-problem-implementation-390x844.png`
  - `04-discovery-verification-390x844.png`
  - `05-failure-update-390x844-v2.png`
  - `02-left-margin-after-1280x720.png`
  - `03-full-width-after-1280x720.png`
  - `02-left-margin-after-390x844.png`

## Comparison evidence

- full-view comparison evidence:
  - `qa-comparison-02.png`
  - `qa-comparison-03-v2.png`
  - `qa-comparison-04.png`
  - `qa-comparison-05-v2.png`
  - `qa-comparison-left-margin-before-after.png`
- focused-region evidence: the same-state desktop captures above cover the complete 02–05 representative structures at the selected source viewport; `02-production-detail-1440x900.png` separately verifies the formerly fixed Detailed Flow area. Mobile captures verify the narrow-layout stacking and reading order.

## Findings

- 02 preserves the selected continuous rail while exposing input → automation → human gate → output → revision path, followed by the eight existing production phases.
- 03 distinguishes problem → implementation evidence → remaining criterion with real Workbench, stage-map, and contact-sheet assets.
- 04 distinguishes discovery → official input → application → decision, then connects the decision to the existing evidence and return path.
- 05 distinguishes failure → experiment → finding → changed criterion → next production and now includes the real project evidence rail.
- The fixed `DETAIL MAP / ALWAYS OPEN` rail is removed from 02–05. The existing in-flow `01 / DETAILED FLOW` label remains unchanged.
- Existing typography, color tokens, project names, section names, and visible copy are preserved. No new portfolio-body company reference was introduced.
- The latest spacing correction removes the desktop `246px` content inset from 02–05. At `1280px`, representative content now starts at `x=32` and ends at `x=1248`, using the existing slight `32px` side padding while the continuous rail sits on the content boundary.
- No actionable P0, P1, or P2 visual mismatch remains.
- Accepted P3 differences from the generated direction: 02 is denser because all eight locked phase labels are retained; 04 uses the real evidence block below the decision row rather than synthetic thumbnail tiles.

## Comparison history

1. Initial desktop pass
   - P1: inherited grid-area rules caused overlap in the 04 process row.
   - Fix: reset the four selected-direction process cells to the new rail grid and re-captured `04-discovery-verification-1440x900-v3.png` / `qa-comparison-04.png`.
2. Initial 05 comparison
   - P2: the first 05 view explained the update loop but did not provide enough actual visual evidence.
   - Fix: added the real five-project evidence rail and re-captured `05-failure-update-1440x900-v2.png` / `qa-comparison-05-v2.png`.
3. Light-section contrast pass
   - P2: small 03/05 rail labels were too low-contrast against the light field.
   - Fix: reused the existing dark olive text color and verified in the desktop and mobile captures.
4. Final pass
   - No P0/P1/P2 findings.
5. User-requested width refinement
   - P2: at `1280px`, 02–05 content began at `x=278` with a `246px` internal left inset, leaving substantially more empty space on the left than the right.
   - Fix: removed the inset from the selected-direction content groups, retained the existing outer side padding, and moved the continuous rail to the content boundary.
   - Post-fix evidence: `02-left-margin-after-1280x720.png`, `03-full-width-after-1280x720.png`, and `qa-comparison-left-margin-before-after.png`; representative 02–05 blocks now measure `x=32`, width `1216`, right edge `1248`.

## Functional, responsive, and accessibility checks

- Header navigation link tested: `이유·구현` moved to `#rationale`.
- Evidence link tested: the Workbench evidence opened `/ai-exploration/motion-bank/front-planning-workbench-checkpoint`.
- Desktop metrics: viewport width `1440`, document width `1440`.
- Refined desktop metrics: viewport width `1280`, representative 02–05 content width `1216`, left/right outer padding `32`, horizontal overflow `0`.
- Mobile metrics at `#updates`: viewport width `390`, document/body width `390`, horizontal overflow `0`.
- Mobile recheck at `#harness`: viewport width `390`, content starts at `x=16`, ends at `x=374`, horizontal overflow `0`.
- Images without `alt`: `0`.
- Unnamed links/buttons/inputs/selects/textareas: `0`.
- Browser console errors: `0`.
- Production build: passed (`pnpm build`, Next.js 16.2.9, 42 static pages generated).
- Scoped whitespace check: passed.

## Section-by-section flow refinement — 2026-07-16

- source audit evidence:
  - `outputs/job-application-tracker/gentlemonster-ai-research/portfolio-redesign-audit-2026-07-16/section-flow-audit/01-introduction-1440x900.png`
  - `02-results-1440x900.png`
  - `03-production-system-1440x900.png`
  - `04-why-implementation-1440x900.png`
  - `05-exploration-criteria-1440x900.png`
  - `06-system-update-record-1440x900.png`
  - `07-update-history-1440x900.png`
  - `08-appendix-evidence-1440x900.png`
- implementation screenshots:
  - `03-production-system-after-1440x900.png`
  - `04-why-to-research-after-1440x900.png`
  - `05-exploration-outcome-fixed-1440x900.png`
  - `05-research-to-updates-after-fixed-1440x900.png`
  - `06-updates-to-origin-after-1440x900.png`
  - `07-origin-to-proof-after-1440x900.png`
  - `03-production-system-after-390x844.png`
  - `04-why-to-research-after-390x844.png`
- viewport and state: desktop `1440 × 900`; mobile `390 × 844`; states `#harness`, `#rationale`, `#research`, `#updates`, and `#origin`.
- full-view comparison evidence: `qa-03-production-before-after.png`.
- focused comparison evidence: `qa-05-research-outcome-before-after.png`; this makes the former overlap and corrected result/evidence grid readable at the same viewport.

### Findings and comparison history

1. P1 — the 03 end path skipped the locked narrative and linked directly to the appendix.
   - Fix: added explicit 03 → 04 → 05A → 05B → appendix handoffs using only existing section labels and titles.
   - Post-fix evidence: the four desktop handoff captures above; every link's `href` was verified.
2. P1 — the final 04 `APPLIED AS` copy and evidence link occupied the same inherited grid area.
   - Fix: explicitly assigned result, evidence, and return path to separate rows and columns.
   - Post-fix evidence: `05-exploration-outcome-fixed-1440x900.png`; result width `899px`, evidence width `341px`, overlap `false`.
3. P2 — the eight 02 phases were compressed into eight narrow columns with `9px` headings and `8px` details.
   - Fix: changed the desktop overview to a four-by-two rail and increased the phase heading to `11px` and detail to `9px`.
   - Post-fix evidence: `03-production-system-after-1440x900.png` and `qa-03-production-before-after.png`.
4. P2 — the persistent navigation did not show the reader's current narrative position.
   - Fix: added a single `aria-current="location"` state driven by the existing section thresholds; visible navigation copy is unchanged.
   - Post-fix evidence: production, rationale, research, and update captures show the correct active item.
5. Final pass — no actionable P0/P1/P2 finding remains.

### Required fidelity surfaces

- Fonts and typography: IBM Plex Sans, all existing weights, titles, body sizes, and locked copy remain unchanged; only the previously undersized 02 phase overview was increased.
- Spacing and layout: the selected full-width `32px` desktop / `16px` mobile side padding remains; new handoffs use the existing thin-rail language and do not introduce cards or large plates.
- Colors and tokens: existing black, light field, acid-lime, cyan, line, and muted tokens are reused; no new palette was introduced.
- Image quality and assets: all existing real screenshots, contact sheets, video embeds, and imagery are preserved without replacement or crop changes.
- Copy and content: existing text, names, project labels, fonts, and colors are preserved; handoffs duplicate exact existing section labels/titles rather than rewriting them.
- Icons and behavior: the existing Lucide arrow is reused; handoff and navigation links work; active state exposes `aria-current`.
- Responsiveness: desktop and `390 × 844` mobile have horizontal overflow `0`; mobile handoff width is `358px` within the existing `16px` side padding.
- Accessibility: images without `alt` `0`; unnamed interactive controls `0`; one current navigation item; keyboard-focus styling is present, though the in-app browser's synthetic Tab action did not expose a focus transition for visual capture.
- Browser console errors: `0`.
- Production build and TypeScript: passed after the final fixes; 42 static pages generated.

final result: passed

## 02 viewport fit and 03 Results-system unification — 2026-07-17

- implementation URL: `http://127.0.0.1:3008/ai-exploration`
- user layout reference: `/var/folders/xt/51h_z0gx4tx7nq9_p8vsj9wc0000gn/T/codex-clipboard-c111dc91-42e9-411a-8d6e-2ff9c6bc0c81.png`
- desktop viewport: `1440 × 582`
- mobile viewport: `390 × 844`
- evidence folder: `outputs/job-application-tracker/gentlemonster-ai-research/design-qa-2026-07-17-03-results-unification/`

### Same-state comparisons

- 02 summary fit: `compare-02-summary.png`
- 02 planning density: `compare-02-planning.png`
- 02-03C transfer structure: `compare-02-generation-jobs.png`
- 03-03 evidence separation: `compare-03-human-gates.png`
- 01 Results / 03-03 design-system match: `compare-01-results-03-human-gates.png`

### Findings and corrections

1. P1 — 02-01 and the six 02 detail pages left unused space below their information while adjacent pages touched each other.
   - Fix: centered the summary and detail content within one desktop viewport, reduced each stage map to its measured content height, and added a consistent `18px` page gap. Every reviewed desktop page starts below the fixed header and ends before the next page.
2. P1 — shrinking the stage maps initially clipped the longest job descriptions.
   - Fix: increased the shared stage-map height from the first compact pass to `276px`; all six detail maps now retain their complete text while preserving the page gap.
3. P1 — 02-03C repeated the preceding keyframe and motion explanations without making the handoff legible.
   - Fix: rebuilt it as `IMAGE JOB → APPROVED FRAMES → VIDEO JOB`, with the acid-lime center reserved for the human approval gate and the existing canonical artifact/tool evidence kept below.
4. P1 — the three 03 pages used unrelated light headers and card structures instead of the visual system established in 01 Results.
   - Fix: unified every 03 case as actual evidence on the left and a dark conclusion panel on the right, using the same black media field, near-black metadata surface, acid-lime labels, thin rules, and `1.25 / 0.75` desktop ratio as 01 Results.
5. P1 — 03-03 overlaid the section videos on the contact sheet and hid part of the keyframe evidence.
   - Fix: kept the complete 4×3 contact sheet in its own row and placed the three existing section videos in a dedicated strip beneath it. Desktop and mobile both preserve that order without overlap.
6. P2 — the 02 operating-principle lane placed white labels on acid lime.
   - Fix: changed the human-lane labels to black while keeping the approved color assignment.
7. P2 — the 03 intro title wrapped and used a sentence ending, while the 04 handoff carried an unnecessary green outline.
   - Fix: changed the intro to the one-line noun phrase `반복 실행을 줄인 최소 판단 개입 구조` and removed the green handoff border.

### Required fidelity surfaces

- Copy and order: existing narrative order, stage names, job details, project names, and evidence remain; only the specifically requested noun-ending 03 intro and compact 02-03C headings changed.
- Assets: 03 uses the existing planning board, schema, ATTITUDE contact sheet, and existing section videos. No generated, unrelated, or placeholder asset was introduced.
- 02 desktop fit: summary and all six detail pages measure `496px` below the fixed header with an `18px` inter-page gap; document horizontal overflow is `0`.
- 03 desktop fit: each Results-style case measures `489px`; the complete contact sheet and three videos are visible in one viewport without overlap.
- Mobile fit: document horizontal overflow is `0` at `390 × 844`; evidence stacks before the conclusion panel. The 02-03C section has a `4px` internal border-width delta but no document overflow or visible clipping.
- Contrast: acid lime remains limited to human decisions and approval gates; text on lime is black.
- Production build and TypeScript: passed (`pnpm build`, Next.js 16.2.9, 42 pages generated).
- Whitespace validation: `git diff --check` passed.

final result: passed

## AI Exploration density, evidence assets, and page fit — 2026-07-17

- implementation URL: `http://127.0.0.1:3008/ai-exploration`
- user layout reference: `/var/folders/xt/51h_z0gx4tx7nq9_p8vsj9wc0000gn/T/codex-clipboard-09cc5c4f-8871-497b-986a-c1cf6ee7f89b.png`
- desktop viewport: `1440 × 582`
- mobile viewport: `390 × 844`
- evidence folder: `outputs/job-application-tracker/gentlemonster-ai-research/design-qa-2026-07-17-density-assets/`

### Same-state comparisons

- Results restore: `compare-01-results-restored.png`
- Planning map density: `compare-02-planning-density.png`
- 03 right-side conclusion: `compare-03-why-conclusion.png`
- ATTITUDE evidence replacement: `compare-03-human-gate-assets.png`
- Workbench horizontal evidence: `compare-04-workbench-layout.png`

### Findings and corrections

1. P1 — the restored 01 result board could remain in its animation's initial transparent state after direct navigation, leaving the entire image side black.
   - Fix: removed the initial hidden state while retaining the existing slide transition. The high-resolution INK contact sheet is visible immediately on desktop and mobile.
2. P1 — 02 summary and detail pages used undersized cards and stage copy while leaving unused canvas space.
   - Fix: expanded the four Harness family cards, integrated phase headings into the stage map, increased stage and job text, and kept each desktop detail page at exactly `514px` below the fixed `68px` header. Collision and vertical overflow are both `0`.
3. P1 — 02-03C repeated the same 05/06/07 Harness summary already explained on the preceding pages.
   - Fix: removed the repeated phase summary rail and retained only the unique 02B image job, 03V video job, recipe, tool, and handoff detail.
4. P1 — 03-01 left its conclusion at the bottom of a tall empty panel, while 03-02 placed dark copy on a light header detached from its schema.
   - Fix: vertically centered the 03-01 conclusion and attached a dark blue, high-contrast 03-02 header directly to the structured schema.
5. P1 — 03-03 used one long final video, so the evidence did not expose section-level judgment and left unnecessary empty space.
   - Fix: derived one 4×3 contact sheet and three section clips from the existing `ATTITUDE ZLV A58` final video, then placed them beside the unchanged five human-gate criteria.
6. P2 — the Workbench comparison stacked two captures vertically and weakened the relationship between planning state and reusable flow.
   - Fix: changed the evidence to a horizontal, slightly overlapping composition without changing its copy.
7. Constraint — LOW has a valid output registry, but the referenced run assets are not present in the current workspace or Git history.
   - Verified registry: `/Users/yuminseog/aheyabaraya_hq_root/hq-control/creative/IDOL/catalog/albums/aurora-m/0526-song-selection/output-registry.yaml`.
   - Decision: retain the archive-state treatment; do not substitute an unrelated or fabricated LOW contact sheet.

### Required fidelity surfaces

- Copy: existing visible portfolio copy and narrative order remain unchanged; only evidence labels for the three ATTITUDE sections were added.
- 01 spacing: the previous large INK result board is restored and the Results-to-CF and CF-to-CF gaps are explicit.
- 02 visual language: no new decorative imagery was introduced; the Harness pages remain diagram-led because the semantic stages themselves are the evidence.
- Human intervention: acid-lime remains reserved for human decisions, approval gates, and selected stages.
- Assets: all new ATTITUDE files are deterministic derivatives of the existing final video, not generated replacements.
- Desktop fit: 02 detail page height `514px`, width `1240px`, horizontal overflow `0`, stage-title collision `0`.
- Mobile fit: Planning, Results, ATTITUDE, and Workbench pages have document horizontal overflow `0`; the result media is visible above its metadata.
- Browser console errors: `0`.
- Production build and TypeScript: passed (`pnpm build`, Next.js 16.2.9, 42 pages generated).

final result: passed

## Right-side conclusion and single-viewport refinement — 2026-07-17

- source visual truth:
  - user annotations on `03 WHY + CURRENT IMPLEMENTATION`, `04 AI EXPLORATION`, and the Pulso asset composition
  - `outputs/job-application-tracker/gentlemonster-ai-research/design-audit-2026-07-17-current/`
- implementation URL: `http://127.0.0.1:3008/ai-exploration`
- viewports reviewed: desktop `1440 × 582`; mobile `390 × 844`
- implementation captures:
  - `outputs/job-application-tracker/gentlemonster-ai-research/design-qa-2026-07-17-right-conclusion/01-rationale-planning-after.png`
  - `02-iteration-root-after.png`
  - `03-iteration-pulso-after.png`
  - `04-iteration-left-after.png`
  - `05-iteration-ink-after.png`
  - `06-rationale-human-gate-after.png`
  - `07-results-after.png`
  - `08-harness-summary-after.png`
  - `09-harness-generation-after.png`
  - `10-harness-generation-jobs-after.png`
  - `11-harness-planning-after.png`
  - `12-rationale-intro-after.png`
  - `13-formation-intro-after.png`
  - `14-iteration-low-after.png`
  - `15-iteration-workbench-after.png`
  - `16-mobile-rationale-planning.png`
  - `17-mobile-iteration-pulso.png`
- same-viewport comparison evidence:
  - `compare-03-planning-before-after.png`
  - `compare-04-root-before-after.png`
  - `compare-04-pulso-before-after.png`

### Findings and corrections

1. P1 — the 03 planning page placed its conclusion below the evidence and stage rail, weakening the requested evidence-to-judgment reading order.
   - Fix: kept the existing evidence and wording intact, grouped the visual evidence on the left, and moved the exact existing conclusion into a dedicated right column.
2. P1 — 04 used inconsistent alternating compositions, so the reader had to relearn the page on every case.
   - Fix: unified all 04 cases as actual visual evidence on the left and the existing conclusion on the right. Pulso now uses cropped member faces on the left and the preview/storyboard on the right.
3. P1 — the result page and the 02 image/video job page exceeded one `1440 × 582` viewport.
   - Fix: compressed non-evidence spacing and reserved explicit heights for the header, context rail, evidence area, and tool strip. Both pages now end at the next viewport boundary without hiding content.
4. P1 — the generation phase header collided with its phase number and several stage descriptions were too small.
   - Fix: separated the phase number, title, and stage count; increased detailed stage text to `10.5px`; retained the user-approved single-row seven-stage structure.
5. P2 — the Human Gate video appeared as a black frame before playback.
   - Fix: extracted a representative group-performance frame from the existing final video and assigned it as the poster. No generated or unrelated asset was introduced.
6. P2 — direct anchor navigation exposed a strip of the preceding page behind the fixed header.
   - Fix: aligned section scroll offsets to the fixed header and made the header surface opaque enough to prevent underlying page bleed.
7. Final pass — no actionable P0/P1/P2 issue remains within the approved design scope.

### Required fidelity surfaces

- Copy and content: no visible copy, project name, conclusion, stage label, or narrative order was rewritten.
- Annotation 1 exclusion: the generation seven-stage rail remains a single row; the rejected `4 + 3` reflow was not applied.
- Assets: all visuals are existing repository evidence; the only new file is a poster frame extracted from the existing Attitude ZLV final video.
- Layout: 03 and 04 consistently use left evidence / right conclusion; Pulso specifically uses face crops on the left and storyboard evidence on the right.
- Human intervention: acid-lime remains reserved for human decision and gate signals.
- Interaction: the result carousel advances correctly; direct anchors resolve to the intended page boundary.
- Responsiveness: desktop `1440 × 582` and mobile `390 × 844` have horizontal overflow `0`.
- Browser console errors: `0`.
- Production build and TypeScript: passed (`pnpm build`, Next.js 16.2.9, 42 pages generated).

final result: passed

## 02 page-based production narrative — 2026-07-16

- approved structure: `outputs/job-application-tracker/gentlemonster-ai-research/02-ppt-section-split-plan-2026-07-16.md`
- previous-state source captures:
  - `outputs/job-application-tracker/gentlemonster-ai-research/portfolio-redesign-audit-2026-07-16/implementation/02-production-handoff-1440x900.png`
  - `outputs/job-application-tracker/gentlemonster-ai-research/portfolio-redesign-audit-2026-07-16/implementation/02-production-detail-1440x900.png`
- implementation URL: `http://localhost:3000/ai-exploration#harness`
- viewports reviewed: desktop `1440 × 900` and `1280 × 720`; mobile `390 × 844`
- representative implementation captures:
  - `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/17-route-final-1440x900-v2.png`
  - `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/18-plan-final-1440x900.png`
  - `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/05-generate-image-1280x720.png`
  - `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/06-generate-video-1280x720.png`
  - `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/07-edit-analysis-1280x720.png`
  - `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/08-edit-decision-1280x720.png`
  - `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/09-release-package-1280x720.png`
  - `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/10-release-approval-1280x720.png`
  - `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/12-route-390x844.png`
  - `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/13-plan-390x844.png`
  - `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/14-generate-390x844.png`

### Comparison evidence

- same-viewport full-view comparison: `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/qa-before-after-route-1440x900.jpg`
- same-viewport focused comparison: `outputs/job-application-tracker/gentlemonster-ai-research/02-page-redesign-2026-07-16/qa-before-after-plan-1440x900.jpg`

### Findings and corrections

1. P1 — the previous entry view exposed the global handoff, four stage cards, eight phases, and four controls in the same scan, so hierarchy collapsed into several competing grids.
   - Fix: retained the global input → automation → human gate → output → revision route, then changed the four production chapters to four full-width rows. The eight phases and 29-stage controls moved to the separate proof disclosure.
2. P1 — each stage repeated a large 2×2 intro grid before another detailed grid, separating the explanation from the actual evidence.
   - Fix: split 02 into route, chapter overview, song, target, planning handoff, image, video, edit analysis, playback decision, release packaging, release approval, and operating-principle page units.
3. P1 — planning detail described five steps in equal cells without showing the actual object being operated.
   - Fix: placed the real Front Planning Workbench screen beside a single numbered decision list. Generation, planning, and edit pages use the existing real contact sheets and QC captures in the same evidence-first structure.
4. P2 — the first redesign pass left excess vertical space below the route and allowed the section title to wrap at `1440px`.
   - Fix: reduced the route page minimum height and title scale, then re-captured the `1440 × 900` comparison. The chapter index now enters the first viewport and the title remains one line.
5. Final pass — no actionable P0/P1/P2 issue remains.

### Required fidelity surfaces

- Copy and names: existing portfolio text, project names, terminology, fonts, and color tokens are preserved. No portfolio-body company reference was added.
- Information hierarchy: main pages keep one dominant evidence or decision; scripts, schemas, skills, data labels, 8 phases, and 29 stages remain available in the separate proof disclosures.
- Assets: Workbench, INK contact sheets, Root Signal edit sheet, and Pulso QC sheet are real repository assets; no placeholder or fabricated visual was introduced.
- Width and spacing: section 02 uses `32px` desktop and `16px` mobile side padding. The previous large internal left inset is not restored.
- Responsiveness: mobile viewport `390px`, document width `390px`, body width `390px`; horizontal overflow `0`.
- Navigation and behavior: the four chapter links scroll to planning, generation, edit, and release; technical proof disclosures remain interactive.
- Accessibility: the new images have descriptive `alt` text; chapter and decision structures use headings, ordered lists, and definition lists.
- Browser console errors: `0`.
- Production build: passed after implementation (`pnpm build`, 42 static pages generated).

final result: passed
