# AB-Luna / Relay Media

## 프로젝트 역할

AB-Luna와 Relay 자료는 AI workflow, shared state, session handoff, UX 단순화 케이스로 묶는다.

## 현재 공개 에셋

### AB-Luna 화면과 영상

- `public/ab-luna/abluna1.png`
- `public/ab-luna/abluna2.png`
- `public/ab-luna/abluna3.png`
- `public/ab-luna/abluna4.png`
- `public/ab-luna/abluna5.png`
- `public/ab-luna/abluna6.png`
- `public/ab-luna/ab-luna-3x.mp4`
- `public/ab-luna/ab-luna-3_5x.mp4`
- `public/ab-luna/source-assets/`

`source-assets`는 docs에 남아 있던 AB-Luna 화면 PNG와 `ab-luna.mov`를 WebP/mp4로 최적화해 둔 위치다.

### Source Assets Detail

- `public/ab-luna/source-assets/abluna-1.webp`
- `public/ab-luna/source-assets/abluna-2.webp`
- `public/ab-luna/source-assets/abluna-3.webp`
- `public/ab-luna/source-assets/abluna-4.webp`
- `public/ab-luna/source-assets/abluna-5.webp`
- `public/ab-luna/source-assets/abluna-6.webp`
- `public/ab-luna/source-assets/ab-luna.mp4`

### Relay 화면

Relay 공개 에셋은 현재 워크트리에서 별도 파일로 남아 있지 않다. 이전 참조명은 `relay-home-open`, `relay-home-closed`, `relay-session-detail`, `relay-dashboard-session`이었다.

### User research / feedback

- Google Form: `https://docs.google.com/forms/d/13FriqN3dPy3Nq3ooovKF_C1rCPtwhJLEtCaDaWdGXm0/edit`

이 폼은 live validation 성과가 아니라, AB-Luna의 문제 공감, multi-AI workflow, handoff pain, MVP 반응을 수집하기 위한 검증면으로 관리한다.

## 내부 원본과 작업 문서

- `docs/projects/ab-luna/ab-luna-problem-definition-research.md`
- `docs/projects/ab-luna/ab-luna-kpi-canonical.md`
- `docs/projects/ab-luna/ab-luna-kpi-collection-readiness.md`
- `docs/projects/ab-luna/ab_luna_relay_evidence.md`
- `docs/projects/ab-luna/imported_sources/ab_lluna/`
- `docs/projects/shared/aheya-luna-aurora-tech-stacks.md`

`docs/projects/shared/aheya-luna-aurora-tech-stacks.md`는 AB-Luna 단독 성과 문서가 아니라 AHEYA, AB-Luna, AB-Aurora의 기술/맥락을 함께 볼 때 쓰는 참고 문서다.

## 표현 기준

- 핵심 문장: 서로 다른 LLM 플랫폼 사이에서 상태 공유와 handoff가 끊기는 문제를 공통 상태 저장소 MVP로 풀어보았다.
- 강조점: 문제 구조화, 첫 행동 단순화, KPI readiness, 사용자 리서치/피드백 수집 설계.
- 피해야 할 표현: production-scale 협업툴이나 검증된 시장 성과처럼 과장하지 않는다.

## 이동 메모

기존 public/work/ab-luna*, public/work/abluna*, docs/tainai/ab_luna*, docs/tainai/imported_sources/ab_lluna/ 자료는 AB-Luna로 이동했다. 페이지 참조는 다음 단계에서 `public/ab-luna/**` 기준으로 고친다.
