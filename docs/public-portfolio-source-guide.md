# Portfolio Case Study Source Guide

This is the public-safe source guide for maintaining the portfolio. It consolidates the working notes used to build the portfolio pages without committing private drafts, raw research folders, browser logs, personal contact details, full wallet data, or local machine paths.

## Purpose

- Keep the portfolio editable without exposing the original internal source archive.
- Preserve the reasoning behind the current case-study structure.
- Define which claims are safe to show publicly and which claims must stay out of the repo.
- Help future edits stay aligned with the current portfolio positioning.

## Current Portfolio Positioning

The portfolio should read as:

> I turn vague product, research, or brand signals into structured pages, content assets, and concrete next decisions.

Across pages, the strongest repeated pattern is:

```text
Research / context
-> structure / product interpretation
-> public-facing artifact
-> judgment about what to keep, change, or stop
```

Do not present the portfolio as a collection of perfect wins. The credible angle is disciplined transformation: unclear input becomes a usable product page, case study, content package, or decision record.

## Implementation Map

Use these tracked files as the source of truth for the live portfolio:

- `src/app/crossangle/page.tsx` — CrossAngle/Xangle GTM page structure.
- `src/data/portfolio.crossangle.ts` — CrossAngle page copy, AHEYABARAYA research framing, X posts, ADSB/SFTI supporting proof.
- `src/components/detail-media-gallery.tsx` — media gallery and X embed rendering behavior.
- `src/app/creative/page.tsx` and `src/data/portfolio.creative.ts` — creative/project archive and supporting creative cases.
- `src/app/tainai/page.tsx` and `src/data/portfolio.tainai.ts` — AI-native PM portfolio direction.
- `src/app/supercent/page.tsx`, `src/app/weverse/page.tsx`, and related `src/data/portfolio.*.ts` files — role-specific portfolio variants.
- `public/` — deployment-safe image/video assets already prepared for the website.

Private working folders such as raw `docs`, `archive`, `output`, `tmp`, and browser-capture folders are not required for deployment and should not be bulk committed.

## CrossAngle / Xangle GTM Page Logic

The CrossAngle page is built around this HR-readable claim:

> Web3 research and user-context observations were converted into GTM artifacts: project profile structure, daily content framing, X posts, visual/video assets, and update logic.

Recommended page flow:

1. Hero: state the role fit quickly.
2. Web3 Product Usage Notes: show that Web3 user flows were personally observed, not only read about.
3. GTM Workflow: summarize `Research -> Insight -> Publish / Operate`.
4. Research 01: residual on-chain assets / token-use behavior.
5. Research 02: Virtual Protocol / ACP v1 job-record and quality-evaluation gap.
6. Problem Insight: translate research into AHEYABARAYA problem framing.
7. Project Profile: show how the project can be explained in a profile/update format.
8. X Posting / Video Content: show actual post evidence and visual assets.
9. ADSB / SFTI: keep as supporting proof, not as Web3 research proof.

### Safe CrossAngle Claims

- “Web3 user flows such as claim, transfer, points, rewards, wallet residue, and feedback were observed and converted into research questions.”
- “AHEYABARAYA is used as a case for turning Web3 research into project information structure and content output.”
- “X posts and visual assets demonstrate how research conclusions can become channel-ready updates.”
- “ADSB and SFTI support the ability to turn brand/research material into readable short-form or written structure.”

### CrossAngle Guardrails

- Do not claim Xangle work experience.
- Do not claim AHEYABARAYA traction, PMF, user acquisition, or market validation unless backed by public evidence.
- Do not present internal market models, tokenomics, reserve/cap, sink/burn, or funnel assumptions as facts.
- Do not expose full wallet addresses, full transaction hashes, private screenshots, or personal account data.
- Do not frame Web3 usage as reward hunting, profit, multi-account farming, or “alpha” activity.
- Do not use “airdrop revenue,” “sybil,” “작업,” or similar language.

## AHEYABARAYA Case Logic

AHEYABARAYA is strongest when presented as a conversion case, not a victory story.

Use it as evidence of:

- Web3 behavior research.
- Project information structuring.
- Problem definition.
- X/media content packaging.
- Visual/video content direction.
- Judgment under uncertainty.

Avoid presenting it as:

- proven product-market fit,
- a live traction case,
- a tokenomics success,
- an ACP/agent marketplace replacement,
- a validated trust product.

### Research 01 Summary

Question:

> After claim, quest, transfer, or wallet activity, why do small native gas tokens and project tokens often remain hard to convert into real product/service use?

Portfolio-safe interpretation:

> Small on-chain residues can remain visible in the wallet but unclear in use. AHEYABARAYA translates that observation into a first-signal loop: small support, Good/Improve feedback, and reusable proof/update assets.

### Research 02 Summary

Question:

> If ACP-style systems record job state and completion flow, what quality-evaluation layer is still missing?

Portfolio-safe interpretation:

> Workflow records are useful, but product-quality judgment needs a separate layer: why the output was good or risky, what evidence supports the decision, and whether the result can be reused.

## Web3 Product Usage Notes

The Web3 usage section should stay compact. Its purpose is to help a recruiter understand that the research did not begin from abstract trend reading only.

Use these four buckets:

- `On-chain Record`: claim / transfer records.
- `Reward UX`: points / rewards / claim flows.
- `Residual Asset`: small wallet balance and gas/use-case friction.
- `Product Feedback`: UX feedback participation.

Rules:

- Crop or blur account, email, address, ranking, referral, and balance details where unnecessary.
- Use “observed,” “checked,” “structured,” and “connected.”
- Do not lead with rewards, prize amounts, or personal gain.
- Keep the section as context, not as the main proof.

## Daily Content Sample Rule

For Xangle-style daily content, the sample should show process rather than opinion.

Use this structure:

```text
Source
-> signal
-> interpretation
-> X post draft
-> short-form script
-> visual direction
-> caveat
```

Good themes:

- ETF flow vs DeFi risk.
- points/claim mechanics vs real user utility.
- protocol incident vs trust/evidence requirement.
- project update translated into a short X/media asset.

Avoid:

- price prediction,
- asset recommendation,
- unsupported “market trend” language,
- unverified flow numbers,
- screenshots of private channels.

## ADSB Supporting Case

ADSB is a supporting creative case. It should not be used as Web3 proof.

Safe framing:

> Brand mood and target emotion were translated into short-form image/video concepts through brand analysis, storyboard structure, GenAI image/video production, feedback reflection, and final short-form compression.

Use it to show:

- brand analysis,
- storyboard planning,
- image/video direction,
- feedback-based narrowing,
- short-form production discipline.

Avoid:

- overstating professional brand authority,
- presenting it as a blockchain/GTM research case,
- showing raw school forms with phone number, student ID, signatures, or professor details.

## SFTI-CMU Supporting Case

SFTI-CMU is a supporting research-writing case. It should remain secondary.

Safe framing:

> A vague AI-generated emotional content idea was structured into an English abstract and poster-style research output around identity-based visual clustering.

Use it to show:

- research framing,
- English abstract structuring,
- poster-style research structure,
- brand interpretation,
- review/revision handling,
- ability to make an abstract topic readable to an external reader.

Avoid:

- presenting it as prestige, paper-like, or event-result proof,
- implying a live conference presentation if not directly evidenced,
- using accepted/revision evidence as prestige proof instead of review context,
- promoting poster scenario statements such as CTR, conversion, recall, or cost reduction as measured results,
- mixing it with Web3 research claims.

Maintenance anchor:

- `docs/projects/sfti/sfti_copy_fix_instructions.md`
- `src/lib/portfolio-deck/projects/sfti.ts`
- `src/data/portfolio.ts`

## TainAI / AI-Native PM Page Logic

The TainAI-style portfolio should stay more selective than the CrossAngle page.

Recommended emphasis:

- AHEYA: build, pivot, public test, conversion failure, pause.
- ILYSB: solo build, direct test, discomfort signal, stop decision.
- AB-Luna / Relay: multi-LLM shared-state workflow proof.
- Andersson Bell: brand-facing AI direction and feedback convergence.
- SFTI-CMU: research framing and English communication proof.

Core rule:

> The value is not polish. The value is `build -> signal -> decide`.

Avoid overloading the homepage with every archive project. Use selected cases first and push weaker/older work into archive treatment.

## Public Wording Guardrails

Use:

- “structured,”
- “converted,”
- “observed,”
- “tested,”
- “paused,”
- “supporting proof,”
- “research-to-output flow,”
- “public-facing artifact.”

Avoid:

- “validated,” unless the validation evidence is explicit,
- “operated at scale,” unless public metrics support it,
- “PMF,”
- “traction,”
- “tokenomics success,”
- “inside information,”
- “alpha group,”
- “airdrop profit,”
- “Xangle 업무를 했다.”

## Do Not Commit

Keep the following out of public commits unless manually sanitized first:

- phone numbers, emails, student IDs, signatures, and raw submission forms,
- full wallet addresses and transaction hashes,
- local absolute paths,
- private Drive links that are not meant to be public,
- tokenomics reserve/cap/sink/burn spreadsheets or detailed assumptions,
- Telegram/DM/automation operational details,
- browser console logs, screenshots, Playwright captures, temporary PDFs,
- raw `archive`, `output`, `tmp`, or browser-capture folders,
- imported internal source packs or handoff archives.

## Maintenance Checklist

Before committing a future portfolio-source update:

1. Confirm the file is needed for public repo maintenance, not just personal memory.
2. Remove personal contact details and local absolute paths.
3. Replace full wallet/transaction/account data with category-level wording.
4. Convert internal metrics into caveated descriptions unless they are public and intended for display.
5. Run a text scan for contact details, wallet identifiers, credentials, and local absolute paths.
6. Add only the intended public document or deployment asset, not the whole working folder.
