# AHEYA / AHEYABARAYA Media

## 프로젝트 역할

AHEYA는 서비스/제품 케이스, Web3 GTM 케이스, creative worldbuilding 케이스에서 모두 쓰인다. `bluegarage`, `crossangle`, `tainai` 안에 있더라도 이름이나 쓰임이 AHEYA/AHEYABARAYA로 분명한 자료는 이 문서에서 관리한다.

## 현재 공개 에셋

### 서비스와 제품 화면

- `public/aheya/aheya-home-hero.webp`
- `public/aheya/aheya-home-kumiho.webp`
- `public/aheya/aheya-lane-panels.webp`
- `public/aheya/aheyabaraya-homepage-2026-04-28.png`
- `public/aheya/logo.webp`
- `public/aheya/logo.png`

### Page Assets

- `public/aheya/page-assets/`
- `public/aheya/page-assets/screens/`
- `public/aheya/page-assets/screenshots/`
- `public/aheya/page-assets/app-logo/`

### Trust API와 CoreRail 영상

- `public/aheya/trust-api-creator.mov`
- `public/aheya/trust-api-creator.mp4`
- `public/aheya/trust-api-funder.mov`
- `public/aheya/trust-api-funder.mp4`
- `public/aheya/corerail-support-vid.mp4`
- `public/aheya/aheya-corerail-creator.mp4`
- `public/aheya/aheya-corerail-funder.mp4`
- `public/aheya/videos/legacy/`

`docs/projects/aheya/tainai/`에 남아 있던 이전 CoreRail/Trust API 영상은 최적화된 mp4로 `public/aheya/videos/legacy/`에 모은다.

### Evidence와 운영 증거

- `public/aheya/evidence/`

### Master Deck / PPT Assets

- `public/aheya/ppt/aheya-problem-bridge.svg`
- `public/aheya/ppt/aheya-research-matrix.svg`
- `public/aheya/ppt/aheya-scope-decision-matrix.svg`
- `public/aheya/ppt/aheya-outreach-pattern-cards.svg`
- `public/aheya/ppt/aheya-x-content-timeline.svg`
- `public/aheya/ppt/aheya-metrics-signal-split.svg`
- `public/aheya/ppt/aheya-core-rail-flow.svg`
- `public/aheya/ppt/aheya-onchain-verification-rail.svg`
- `public/aheya/ppt/aheya-contract-source-evidence-cards.svg`
- `public/aheya/ppt/ppt-layout-blueprint-16x9.svg`

이 묶음은 `/master`와 AHEYA appendix에서 바로 쓰는 PPT-ready SVG 자산이다. 구조, evidence, flow를 보여주는 용도로만 쓰고, 원본 데이터를 대체하는 근거 문서로 보지 않는다.

### Legacy Planning / Pre-January Lineage

- `public/aheya/legacy/pre-january-date-evidence-card.svg`
- `public/aheya/legacy/pre-january-product-evolution.svg`
- `public/aheya/legacy/raven-flow-planning-snapshot.svg`

pre-January Raven/Aheaya 자료는 현재 제품의 기능 주장보다 기획 lineage와 문제의식 형성 과정을 보여주는 appendix 근거다. 본편에서 핵심 성과처럼 쓰지 않고, `docs/projects/aheya/aheya-product-gtm/pre-january-planning-appendix.md`와 `pre-january-planning-core-insert.md`를 함께 확인한다.

### 캐릭터와 세계관

- `public/aheya/worldbuilding/`
- `public/aheya/worldbuilding/aheyacharacter/`
- `public/aheya/worldbuilding/zodiac/`
- `public/aheya/worldbuilding/greek/`
- `public/aheya/worldbuilding/egypt/`
- `public/aheya/worldbuilding/glass/`
- `public/aheya/worldbuilding/sakura/`
- `public/aheya/worldbuilding/angels/`

### OpenClaw

- `public/aheya/openclaw/`
- `public/aheya/openclaw/source-assets/`

OpenClaw 자료는 모두 AHEYA에서만 쓴 자료로 보고 AHEYA 하위로 묶는다. 이전 `docs/projects/aheya/openclaw/` 이미지와 영상 원본은 WebP/mp4로 최적화해 `source-assets`에 둔다.

### 기타 소스 에셋

- `public/aheya/source-assets/`

내부 구조 설명 이미지처럼 페이지 증거보다는 원본 참고 성격이 강한 AHEYA 자료를 둔다.

## 내부 원본과 작업 문서

- `docs/projects/aheya/`
- `docs/projects/aheya/tainai/`
- `docs/projects/aheya/imported_sources/aheya/`
- `docs/projects/aheya/aheya-product-gtm/`

### Product / GTM Source Packet

`docs/projects/aheya/aheya-product-gtm/`는 aheyabaraya repo에서 가져온 AHEYA Product/GTM source packet이다. master deck 09-29와 appendix의 근거를 맞출 때 먼저 읽는다.

핵심 문서:

- `README.md`: packet의 용도와 공개 범위.
- `source-map.md`: 슬라이드별 근거, file/source 연결.
- `claim-audit.md`: 주장 가능 범위와 위험 표현.
- `aheya-product-gtm-portfolio-outline.ko.md`: 한국어 deck outline.
- `master-portfolio-copy-adaptation.ko.md`: master style에 맞춘 표현 초안.
- `x-evidence-ledger.md`, `x-api-sanitized-post-ledger.md`, `x-signal-product-iteration.md`: X/미디어 기반 정성 신호와 sanitize된 공개 가능 근거.
- `db-kpi-aggregate-ledger.md`: KPI 설계와 aggregate boundary.
- `trust-api-appendix.md`, `onchain-verification-appendix.md`, `pre-january-planning-appendix.md`: appendix 전용 근거.

사용 경계:

- 외부 공개 deck에는 원본 private code, DM, token, env, private DB identifier를 직접 노출하지 않는다.
- KPI/SQL 자료는 performance claim이 아니라 측정 설계와 evidence boundary로만 쓴다.
- Trust API와 onchain verification은 adoption/traction 증명이 아니라 product thinking과 proof architecture로 설명한다.
- pre-January 자료는 현재 제품 truth가 아니라 planning lineage로만 다룬다.

### Appendix Slides

- `src/lib/portfolio-deck/projects/aheya-appendix.ts`

현재 appendix는 Trust API Boundary, Onchain Verification Rail, Contract Artifacts Written, Pre-January Planning Lineage를 별도 slide로 관리한다. 본편 deck의 흐름을 보강하는 근거 페이지이며, slide number 49 이후로 분리해서 유지한다.

## 표현 기준

- PM: 문제 정의 -> MVP/화면 -> 공개 테스트 -> 보류 또는 다음 판단.
- GTM: 리서치 -> 정보 구조 -> X/미디어 콘텐츠 -> 운영 업데이트.
- Creative: 정체성 -> 캐릭터/상징 -> 공개 채널 첫인상 -> 세계관 확장.

## 이동 메모

기존 public/aheyabaraya/evidence/, public/appendix/bluegarage/aheya/, public/appendix/bluegarage/persona/*openclaw*, public/appendix/bluegarage/becca/, docs/projects/aheya/bluegarage-appendix/, docs/img/, docs/tainai/imported_sources/aheya/ 자료는 AHEYA로 이동했다. PNG/JPG 원본은 WebP로 변환했고, 중복 animal 파일은 zodiac 기준으로 정리했다. 페이지 참조는 다음 단계에서 `public/aheya/**` 기준으로 고친다.
