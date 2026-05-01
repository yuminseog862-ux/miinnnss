# Media Inventory Rules

프로젝트별 이미지와 영상은 프로젝트 이름과 사용 맥락을 기준으로 소유권을 분리한다. 현재는 AHEYA, ADSB, SFTI, AB-Luna, BeMoon, ILYSB의 남아 있던 이미지/영상 원본까지 public 프로젝트 폴더로 이동한 상태다.

현재 원칙은 소스 폴더명이 아니라 프로젝트 이름을 우선하는 것이다. 예를 들어 `bluegarage` 안에 있더라도 파일명이나 쓰임이 AHEYA, AB-Luna, SFTI, ADSB로 분명하면 해당 프로젝트 문서에 귀속한다.

## 현재 기준

- 런타임 기준: `public/**`
- 내부 원본 기준: `docs/projects/**`
- 사용처 기준: `src/data/**`, `src/lib/portfolio-deck/**`
- master deck visual system 기준: `public/portfolio/mood-assets/**`
- 관리 기준: `wiki/media/*.md`

## 파일 이동 체크리스트

1. `rg`로 파일명과 경로 참조를 찾는다.
2. `src/data/**`, `src/app/**`, `src/lib/portfolio-deck/**`의 참조를 함께 수정한다.
3. Next 빌드와 해당 포트폴리오 페이지 화면 확인을 한다.
4. 이동한 최종 경로를 이 wiki에 반영한다.

## 향후 권장 구조

프로젝트 중심 public 경로는 다음을 기준으로 한다.

```txt
public/aheya/
public/aheya/openclaw/
public/aheya/ppt/
public/aheya/legacy/
public/ab-luna/
public/ab-aurora/
public/adsb/
public/bemoon/
public/sfti/
public/crossangle/
public/ilysb/flow/
public/work/ilysb-flow/
public/portfolio/mood-assets/
public/video/
```

이 구조로 파일을 모았다. master 슬라이드 데이터는 새 경로를 반영했고, 공개 상세 페이지의 `src/data/**`, `src/app/**` 참조는 다음 단계에서 맞춘다.

## 분류 규칙

- `aheya`, `aheyabaraya`, `kumiho`, `yeon`, `trust-api`, `corerail` 중심 자료는 AHEYA로 본다.
- `openclaw` 자료는 모두 AHEYA에서 쓴 것으로 보고 AHEYA/OpenClaw로 본다.
- `abluna`, `ab-luna`, `relay` 자료는 AB-Luna/Relay로 본다.
- `sfti`, `CMU` 자료는 SFTI로 본다.
- `adsb`, `andersson`, `andersson-bell` 자료는 ADSB로 본다.
- `crossangle`, `xangle` 지원 패키지는 CrossAngle로 두되, 그 안의 AHEYA 프로젝트 증거는 AHEYA에서도 참조할 수 있다.
- `public/aheya/ppt/**`와 `public/aheya/legacy/**`는 AHEYA 본편/appendix 근거 시각화 자료로 본다.
- `public/portfolio/mood-assets/**`는 특정 프로젝트 원본 증거가 아니라 master deck style/background asset으로 본다.
- `public/video/**`에 있는 프로젝트 미확정 영상은 먼저 unclassified로 관리한다.
- 위 규칙으로 묶이지 않는 자료는 [unclassified.md](unclassified.md)에 둔다.

## 프로젝트별 문서

- [AHEYA / AHEYABARAYA](aheya.md)
- [ADSB / Andersson Bell](adsb.md)
- [AB-Luna / Relay](ab-luna.md)
- [AB-Aurora](ab-aurora.md)
- [BeMoon](bemoon.md)
- [SFTI / CMU](sfti.md)
- [CrossAngle / Xangle GTM](crossangle.md)
- [ILYSB / TainAI](ilysb-tainai.md)
- [Creative / BlueGarage](creative-bluegarage.md)
- [Project Normalization Map](project-normalization.md)
- [Unclassified](unclassified.md)
