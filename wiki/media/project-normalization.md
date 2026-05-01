# Project Normalization Map

이 문서는 현재 흩어져 있던 자료를 프로젝트 기준으로 다시 모은 결과를 정리한다. 실제 파일 이동은 완료했고, `src/**`의 페이지 참조 호환은 다음 단계에서 맞춘다.

## 기준

- 원래 폴더가 `bluegarage`, `crossangle`, `tainai`, `work`여도 파일명과 쓰임이 특정 프로젝트를 가리키면 해당 프로젝트로 이동했다.
- OpenClaw는 모두 AHEYA에서 쓴 자료로 보고 AHEYA 하위로 이동했다.
- 분류 기준이 애매한 자료는 [unclassified.md](unclassified.md)에 둔다.

## Public 에셋 기준

- AHEYA: `public/aheya/`
- AHEYA page assets: `public/aheya/page-assets/`
- AHEYA evidence: `public/aheya/evidence/`
- AHEYA worldbuilding: `public/aheya/worldbuilding/`
- AHEYA characters: `public/aheya/worldbuilding/aheyacharacter/`
- AHEYA zodiac: `public/aheya/worldbuilding/zodiac/`
- AHEYA greek: `public/aheya/worldbuilding/greek/`
- AHEYA egypt: `public/aheya/worldbuilding/egypt/`
- AHEYA glass: `public/aheya/worldbuilding/glass/`
- AHEYA sakura: `public/aheya/worldbuilding/sakura/`
- AHEYA OpenClaw: `public/aheya/openclaw/`
- AHEYA legacy videos: `public/aheya/videos/legacy/`
- AHEYA source assets: `public/aheya/source-assets/`
- AB-Luna / Relay: `public/ab-luna/`
- AB-Luna source assets: `public/ab-luna/source-assets/`
- AB-Aurora: `public/ab-aurora/`
- ADSB / Andersson Bell: `public/adsb/`
- ADSB source assets: `public/adsb/source-assets/`
- BeMoon: `public/bemoon/`
- BeMoon source assets: `public/bemoon/source-assets/`
- SFTI / CMU: `public/sfti/`
- SFTI source assets: `public/sfti/source-assets/`
- CrossAngle / Xangle: `public/crossangle/`
- ILYSB flow: `public/work/ilysb-flow/`
- ILYSB project flow: `public/ilysb/flow/`

## Docs 기준

- AHEYA: `docs/projects/aheya/`
- AB-Luna / Relay: `docs/projects/ab-luna/`
- AB-Aurora: `docs/projects/ab-aurora/`
- ADSB / Andersson Bell: `docs/projects/adsb/`
- BeMoon: `docs/projects/bemoon/`
- BlueGarage: `docs/projects/bluegarage/`
- CrossAngle / Xangle: `docs/projects/crossangle/`
- ILYSB: `docs/projects/ilysb/`
- SFTI / CMU: `docs/projects/sfti/`
- TainAI: `docs/projects/tainai/`
- Shared: `docs/projects/shared/`

Removed source appendix folders:

- docs/projects/aheya/bluegarage-appendix/
- docs/projects/bluegarage/appendix-residue/
- docs/projects/sfti/bluegarage-appendix/
- docs/projects/aheya/openclaw/
- docs/tainai/

Their assets now live under `public/aheya/page-assets/`, `public/aheya/worldbuilding/**`, `public/aheya/openclaw/**`, `public/sfti/source-assets/`, or `docs/projects/tainai/**`.

## ILYSB Flow Rename

`public/work/ilysb-flow/` 안의 모든 이미지 파일은 `ilysb-` prefix를 붙였다.

- `ilysb-01-login.png`
- `ilysb-02-testsignup.png`
- `ilysb-03-signup-step1.png`
- `ilysb-04-signup-step2.png`
- `ilysb-05-terms.png`
- `ilysb-06-privacy.png`
- `ilysb-07-explore.png`
- `ilysb-08-main-list.png`
- `ilysb-09-main-search-ily-modal.png`
- `ilysb-10-main-search-ilysb-modal.png`
- `ilysb-11-hints-locked.png`
- `ilysb-12-hint-unlock-modal.png`
- `ilysb-13-hints-unlocked.png`

`docs/projects/ilysb/flow/`에 남아 있던 이미지 원본은 `public/ilysb/flow/`로 WebP 최적화 이동했다.

## 참조 호환 메모

현재 공개 페이지에는 이전 경로가 남아 있다. `src/lib/portfolio-deck/**`의 master 슬라이드 경로는 우선 새 public 구조로 맞췄고, 다음 작업에서 `src/data/**`, `src/app/**`의 이미지/영상 경로를 새 public 구조로 바꿔야 한다.
