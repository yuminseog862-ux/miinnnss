# Portfolio Agent Instructions

Applies to `/Users/yuminseog/portfolio` unless a deeper `AGENTS.md` adds
stricter rules.

## Browser And UI Tool Routing

- Use `@browser-use` for local browser work: opening `localhost`, clicking,
  typing, taking screenshots, and quick UI sanity checks.
- Use `@build-web-apps` for frontend implementation, design decisions, and
  planning the verification flow.
- Use `@Computer Use` for desktop or operating-system UI work outside the
  browser.
- Use Playwright for final regression coverage, CI gates, exact automated
  assertions, traces, and reproducible browser test runs.
- Do not default to Playwright for quick manual UI inspection when
  `@browser-use` can answer the question faster.

## Portfolio Deck Guidance

- For `/master` and `src/components/portfolio-deck` work, read
  `docs/portfolio-master-guideline.md` before changing visible slide content
  or layout.
