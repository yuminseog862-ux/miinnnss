# Portfolio Master Guideline

This repo keeps two layers separate:

- Visual slides: `/master` should show portfolio-ready content only.
- Working guide: slide intent, caution notes, and per-page editing direction should live in source data and this guide, not on the visible slide.

## Visible Slide Rules

- Do not show worker-facing labels such as `상세 입력 슬롯`, `포함 내용`, `슬라이드에서 보여줄 증거`, or page-writing instructions.
- Do not render `intent` or `note` fields inside the deck UI.
- Use `claim` as a subtitle under the title, with smaller, non-bold text.
- Write subtitles in fragment style where possible. Avoid ending them as a full explanatory sentence with `다.`
- If a table already explains the structure, do not render a second slot list beside it.
- If a matrix page has evidence media, pair the table with a large centered image/video area.
- Evidence images, screenshots, posters, and videos should use `object-fit: contain` and must not be cropped.

## Working Fields

These fields remain useful for maintenance but should be treated as hidden guide data:

- `intent`: what the slide should accomplish.
- `note`: caution, writing direction, privacy note, or reviewer guidance.
- `slots`: draft placeholders or expected detail areas. Render only when there is no stronger final artifact such as a table or media proof.

The canonical source for per-slide working data is:

- `src/lib/portfolio-deck/projects/common.ts`
- `src/lib/portfolio-deck/projects/aheya.ts`
- `src/lib/portfolio-deck/projects/adsb.ts`
- `src/lib/portfolio-deck/projects/support.ts`

## Layout Decisions

- Overview/evidence pages: left side can show concise role/output cards, right side should center the media.
- Matrix pages: table is the primary content. Add media only when it materially improves proof.
- Process pages: process steps can sit beside concise proof cards.
- Common/footer copy should not collide with media labels or proof content.

## Review Checklist

- No toolbar export button unless explicitly requested.
- No worker-facing page notes visible in the deck.
- No duplicate table/slot information.
- No clipped media.
- No footer overlap.
- Title, subtitle, and content have clear spacing.
