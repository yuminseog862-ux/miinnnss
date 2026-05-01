# Master Deck Expansion Plan

기준일: 2026-05-01

## 확정 구조

현재 master deck의 본편은 48장 구조로 관리한다. AHEYA 보강 근거는 slide 49 이후 appendix로 분리한다.

| Range | Section | 역할 |
|---|---|---|
| 01-08 | Common | 전체 포지셔닝, case map, role fit summary |
| 09-29 | AHEYA | flagship PM / GTM / Marketing / Content case |
| 30-37 | ADSB | second main AI creative content case |
| 38-44 | AB-Luna | AI workflow / handoff MVP / user research form support case |
| 45-48 | SFTI | research writing / external submission support case |
| 49+ | Appendix | AHEYA Trust API, onchain verification, contract artifact, pre-January planning lineage |

## 관리 구조

master deck은 내용 데이터, 렌더링 컴포넌트, mood asset을 분리해서 관리한다.

- 내용 데이터: `src/lib/portfolio-deck/projects/common.ts`, `aheya.ts`, `adsb.ts`, `ab-luna.ts`, `sfti.ts`, `support.ts`.
- Appendix 데이터: `src/lib/portfolio-deck/projects/aheya-appendix.ts`.
- 렌더링 shell: `src/components/portfolio-deck/portfolio-deck.tsx`.
- Slide frame/background: `src/components/portfolio-deck/deck-slide.tsx`.
- Table/media/evidence/content block: `src/components/portfolio-deck/slide-content.tsx`.
- Mood/background mapping: `src/components/portfolio-deck/mood.ts`.
- Subtitle normalization: `src/components/portfolio-deck/subtitle.ts`.
- Visual system assets: `public/portfolio/mood-assets/`.

visible slide에는 portfolio-ready content만 둔다. `intent`, `note`, 작업용 주의사항, reviewer memo는 `docs/portfolio-master-guideline.md`와 각 source data에 남기고 deck UI에는 렌더링하지 않는다.

## Visual System

현재 master style은 사용자가 준 moodboard를 기준으로 한다.

- 톤: dark glass, transparent layer, subtle glow, low-saturation base.
- Accent: violet, blue, cyan, soft purple, mint를 과하게 섞지 않고 한 페이지당 1-2개 중심으로 사용.
- Layout: 16:9 PPT export를 기준으로 image/video는 잘리지 않게 `contain`한다.
- Section: 텍스트와 이미지 영역은 배경이 있는 큰 박스로 감싸지 않고, 필요한 경우 얇은 glass border와 내부 여백만 둔다.
- Footer: media label, card, table과 겹치지 않게 slide 하단 안전 영역을 유지한다.

## 처음 outline에서 유지할 중심

처음 outline의 중심은 `Product & GTM Portfolio with AI-driven Content Experiments`다.

- AHEYA는 PM, GTM, Marketing, Content 실험 흐름을 담당한다.
- ADSB는 AI 기반 콘텐츠 크리에이션, 브랜드 무드 해석, 숏폼 제작 흐름을 담당한다.
- AB-Luna와 SFTI는 메인 케이스를 대체하지 않고 부족한 증명 영역을 보강한다.
- BD 성과는 주장하지 않는다. X 접촉 기록은 초기 정성 검증 / 메시지 검증으로만 사용한다.

## AB-Luna 확장 기준

AB-Luna는 `AI tool`이 아니라 `AI workflow product thinking`으로 읽힌다.

핵심 문장:

> 여러 AI 툴의 산출물을 하나의 readable project state, clear next action, reliable handoff로 복원하려 한 AI workflow product case.

슬라이드 구성:

| 장 | 제목 | 핵심 |
|---:|---|---|
| 38 | AB-Luna Overview | Summary, role, deliverables, safe positioning |
| 39 | Problem & Market Definition | result-to-state conversion failure |
| 40 | Product Positioning & MVP Scope | state and handoff layer, must hold / must avoid |
| 41 | UX / Workflow Evidence | home, session, handoff, dashboard 흐름 |
| 42 | KPI Design & Readiness | signup -> verification -> project -> state view -> publish -> repeat |
| 43 | Learning & What This Proves | problem framing, MVP scope, UX simplification, KPI readiness |
| 44 | User Research / Feedback Form | Google Form 기반 문제 공감, workflow, handoff pain, MVP 반응 수집 |

주의:

- `validated adoption`, `production-scale workflow`, `new foundation model`처럼 쓰지 않는다.
- 현재는 문제 정의, MVP 구조화, KPI readiness까지만 증명한다.
- Google Form은 사용자 리서치/피드백 수집면으로만 쓰고, 응답 결과나 검증 성과는 확인 전까지 주장하지 않는다.

## SFTI 확장 기준

SFTI는 `academic achievement`가 아니라 `research communication / English writing`으로 읽힌다.

핵심 문장:

> 모호한 AI-generated emotional content 아이디어를 외부 독자가 읽을 수 있는 English abstract와 poster-style research output으로 정리했다.

슬라이드 구성:

| 장 | 제목 | 핵심 |
|---:|---|---|
| 45 | SFTI-CMU Overview | Summary, role, deliverables, evidence |
| 46 | Research Framing | vague AI trend -> identity-based visual clustering |
| 47 | English Abstract & Poster Structure | abstract, poster narrative, external-facing structure |
| 48 | Revision Evidence & What This Proves | review/revision evidence, writing/research communication |

주의:

- 학술 커리어, 현장 발표 성과, 브랜드 실무 성과처럼 과장하지 않는다.
- 결과보다 외부 독자가 읽을 수 있는 구조와 영어 표현 완성도를 강조한다.

## Role Fit 요약

- PM: AHEYA + AB-Luna
- GTM: AHEYA + ADSB + AB-Luna market definition
- Marketing: AHEYA + ADSB
- Content / Research Writing: ADSB + SFTI
