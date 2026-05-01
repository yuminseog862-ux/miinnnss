# Portfolio Source Map

이 문서는 wiki가 참조하는 실제 원본 위치를 정리한다. wiki는 원본이 아니며, 수정이 필요한 경우 아래 위치를 먼저 확인한다.

## 공개 런타임 에셋

`public/**`는 웹 페이지와 슬라이드형 페이지에서 직접 참조하는 이미지, 영상, 포스터의 기준 위치다.

- `public/aheya/**`: AHEYA 서비스 화면, 로고, Trust API 영상, 핵심 캐릭터/서비스 이미지.
- `public/aheya/page-assets/**`: AHEYABARAYA page source assets, screens, screenshots, app-logo assets.
- `public/aheya/evidence/**`: AHEYABARAYA 증거 이미지, 리디자인 화면, 작업 증빙 이미지.
- `public/aheya/openclaw/**`: AHEYA에서만 사용한 OpenClaw 자료.
- `public/aheya/videos/legacy/**`: docs에 남아 있던 이전 CoreRail/Trust API 영상 최적화본.
- `public/aheya/ppt/**`: master deck과 appendix에서 쓰는 PPT-ready SVG 다이어그램, evidence card, 16:9 layout blueprint.
- `public/aheya/legacy/**`: pre-January Raven/Aheaya 기획 lineage를 보여주는 appendix용 SVG 자산.
- `public/aheya/source-assets/**`: AHEYA 내부 구조/원본 참고 이미지 최적화본.
- `public/aheya/worldbuilding/**`: AHEYA 캐릭터, 세계관, motion 자료.
- `public/aheya/worldbuilding/aheyacharacter/**`: K, Becca, Kumiho, Aurora, Yeon 등 AHEYA character assets.
- `public/aheya/worldbuilding/zodiac/**`: 동물/zodiac 계열 assets.
- `public/aheya/worldbuilding/greek/**`: Greek deity motif assets.
- `public/aheya/worldbuilding/egypt/**`: Egypt deity motif assets.
- `public/aheya/worldbuilding/glass/**`, `public/aheya/worldbuilding/sakura/**`: separate worldbuilding motif videos.
- `public/ab-luna/**`: AB-Luna와 Relay 화면/영상 자료.
- `public/ab-aurora/**`: AB-Aurora presession 자료.
- `public/adsb/**`: ADSB/Andersson Bell 이미지와 영상 자료.
- `public/bemoon/**`: BeMoon NFT/UI 자료.
- `public/crossangle/**`: Xangle GTM 지원용 Web3 usage notes.
- `public/sfti/**`: SFTI screenshot/result 자료.
- `public/ilysb/flow/**`: docs에 남아 있던 ILYSB flow 이미지의 프로젝트 전용 WebP 최적화본.
- `public/work/ilysb-flow/**`: ILYSB flow 이미지. 파일명은 `ilysb-` prefix를 붙인다.
- `public/portfolio/mood-assets/**`: master deck dark glass visual system, background mood, glass UI material assets.
- `public/video/**`: 공개 페이지에서 쓰는 대표 영상. Codex Hermes automation 영상처럼 프로젝트 귀속 전 자료는 `wiki/media/unclassified.md`에서 보류 관리한다.

## 프로젝트 귀속 규칙

자료의 실제 폴더보다 프로젝트 이름과 사용 맥락을 우선한다. `bluegarage`, `crossangle`, `tainai`, `work` 안에 있어도 AHEYA, OpenClaw, AB-Luna, SFTI, ADSB 이름이 붙은 자료는 각 프로젝트 문서에서 관리한다. OpenClaw는 AHEYA 전용 자료로 본다.

## 내부 작업 자료

`docs/**`는 공개 페이지에서 직접 링크하지 않는 내부 작업 자료다.

- `docs/projects/**`: 프로젝트별로 분할한 원본 파일, 이전 산출물, 조사 자료, 편집 전 자료.
- `docs/projects/aheya/aheya-product-gtm/**`: aheyabaraya repo에서 가져온 AHEYA Product/GTM source packet. slide 09-29와 appendix의 근거 문서로 쓰되 외부 공개 가능한 표현만 deck에 반영한다.
- `docs/projects/shared/**`: AHEYA, AB-Luna, AB-Aurora처럼 프로젝트 간 기술/맥락이 겹치는 참고 문서. 특정 프로젝트 성과로 단독 주장하지 않는다.
- `docs/source/**`: 아직 프로젝트로 확정하지 않은 잔여 원본.
- `docs/organize/**`: 아직 프로젝트로 확정하지 않은 잔여 지원/정리 문서.

## 구현과 표현 데이터

`src/**`는 실제 페이지와 슬라이드형 덱의 구현 기준이다.

- `src/data/portfolio.crossangle.ts`: CrossAngle/Xangle GTM 지원용 공개 포트폴리오 표현과 증거 구성.
- `src/data/portfolio.creative.ts`: creative planning 포트폴리오 표현과 작업 케이스.
- `src/data/portfolio.tainai.ts`: TainAI 지원용 포트폴리오 표현과 케이스 판단.
- `src/lib/portfolio-deck/**`: PPT/PDF 추출을 전제로 한 16:9 슬라이드 데이터와 프로젝트별 섹션.
- `src/lib/portfolio-deck/projects/aheya-appendix.ts`: AHEYA Trust API, onchain verification, contract source, pre-January planning appendix slides.
- `src/components/portfolio-deck/**`: 슬라이드형 페이지 렌더링 컴포넌트와 스타일.
- `src/components/portfolio-deck/portfolio-deck.tsx`: deck shell, navigation, print/export visibility.
- `src/components/portfolio-deck/deck-slide.tsx`: slide frame, background mood application, footer/header.
- `src/components/portfolio-deck/slide-content.tsx`: table, evidence, media, slot, timeline 등 주요 content block rendering.
- `src/components/portfolio-deck/mood.ts`, `src/components/portfolio-deck/subtitle.ts`: 프로젝트별 mood asset 선택과 visible subtitle normalization.

## 외부 참고 범위

`/Users/yuminseog/aheyabaraya/wiki`는 wiki 운영 방식의 참고 자료로만 본다. 해당 레포는 수정하지 않고, 문장이나 내용을 그대로 가져오지 않는다.
