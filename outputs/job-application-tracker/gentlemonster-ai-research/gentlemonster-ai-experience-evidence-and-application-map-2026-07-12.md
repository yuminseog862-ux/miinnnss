# GENTLE MONSTER AI Experience - Evidence And Application Map

작성일: 2026-07-12  
상태: 실제 레포 대조 완료. 최종 문안은 `gentlemonster-ai-experience-final-submission-pack-2026-07-12.md`를 우선한다.

## 1. 현재 포지셔닝

유민석은 정규 경력자가 아닌 신입/졸업예정 지원자다. 이 지원에서의 역할은 `AI 결과물을 많이 만드는 사람`이 아니라, **새 AI 변화를 실제 제작 병목에 붙여 보고 성공과 폐기에서 얻은 판단을 다음 구조로 바꾸는 AI Creative 신입**이다.

개발자, ML 연구자, LLMOps 담당자로 포지셔닝하지 않는다. 중심 질문은 `기획만 명확하다면, 한 사람이 AI를 하네싱해 스튜디오처럼 반복 가능한 영상 제작 루프를 만들 수 있을까?`이다. 다섯 시스템은 결론이고, 본론은 `AHEYA crowdfunding -> Trust API/Yui -> 26 IDOL production units -> MV 실패와 개선 -> INK -> Workbench`의 탐구 연대기다.

### 실제 repository 기준 연대기

| 시점 | 실험 | 확인된 판단 | 다음 변화 |
| --- | --- | --- | --- |
| 2025.12-2026.04 | AHEYA crowdfunding, contract, wallet, Trust | 기술 구현과 사용자 수요는 별개의 문제 | marketing image·clip과 Trust/Yui 탐구로 이동 |
| 2026.04 | OpenClaw Yui | 실행 성공과 canonical 기록 성공을 분리해야 함 | IDOL의 owner·review·registry 원칙으로 이어짐 |
| 2026.05.14 | Aurora V2 13 MV + 13 STAGE 단위 | face-only reference로 13명 identity rail을 유지하며 26개 production unit 준비 | 짧은 반복 생성에서 full MV로 전환 |
| 2026.05.24 | Root Signal | full-MV run은 가능했지만 camera·light와 script 결과가 반복됨 | 창의 판단을 script로 고정하지 않는 원칙, 편집 탐구 시작 |
| 2026.05.26 | LOW | 설명 중심 face lock 실패 | 실제 face reference와 identity validation을 필수 gate로 승격 |
| 2026.06.11 | Pulso | frame·beat·contact sheet·roughcut을 통한 편집 보조 가능성 확인 | reference 영상의 구도·빛·감정을 planning context에 포함 |
| 2026.06.14-07.06 | Left In That Night | 이미지·설정이 많아도 emotional owner와 causal chain이 없으면 한 이야기로 읽히지 않음 | pre-board stop rule과 30초 proof 도입 |
| 2026.06.18 | INK | 얼굴 유지와 camera·light·object·곡 section 연결이 이전보다 안정됨 | 검토된 판단을 output registry와 memory로 승격 |
| 2026.07.05-현재 | One Move | action·physics는 아직 미완성 | 완료 또는 폐기 뒤에만 영상 증거 추가 |
| 2026.07.12 | Front Planning Workbench | 마지막 병목은 생성보다 흔들리는 기획과 분산된 판단 | 생성 API 없는 local planning/review surface 구축 |

## 2. JD별 현재 근거와 지원서 반영

| JD 요구 | 현재 확인 가능한 근거 | 지원서/포트폴리오에 추가되는 의미 | 경계 |
| --- | --- | --- | --- |
| 최신 AI 기술·트렌드 탐색과 실험 | context-aware LLM, image/video API, agent/CLI, local media toolchain을 AHEYA-Aurora-IDOL 연대기에 적용 | X·Instagram에서 발견한 변화를 공식 자료로 확인하고 실제 제작 병목에 적용한 뒤 system update로 남김 | 동일 조건 모델 벤치마크는 없음 |
| 다양한 AI 도구와 다중 적용 | Python runtime과 source intake, motion/audio 관찰, contact sheet, roughcut, QC, schema validation | 하나의 도구를 결과 생성뿐 아니라 관찰·요약·편집 보조·검증에 다르게 배치 | 분석값이 좋은 장면이나 최종 컷을 자동 결정한다고 쓰지 않음 |
| 경험·콘텐츠·서비스 아이디어 발굴 | IDOL system의 Pulso/INK 적용, AHEYA smart contract와 Yui Trust API flow | 제작 구조를 콘텐츠 흐름, 신뢰 기록, 외부 agent 실행 문제로 확장 | 상용 배포, 자율 거래, 시장 성과는 주장하지 않음 |
| AI 인사이트 아카이빙·공유 | stage registry, contact sheet, edit recipe, output registry, strict review, canonical record | 통과 결과뿐 아니라 보류 이유, source, 다음 행동을 남기는 방식 | 공개 페이지에는 현재 run, 인증 정보, 운영 전문을 노출하지 않음 |
| 내부 협업과 프로젝트 확장 | stage owner, handoff, pass·revise·hold, explicit human approval | 자동화는 상태와 자료를 다루고, 사람은 메시지·톤·선택·승인을 맡는 책임 경계 | 팀 고용 경력이나 조직 성과로 표현하지 않음 |
| 리테일·공간·브랜드 경험 연결 | 현재 직접 증명되는 것은 콘텐츠·웹·서비스·아카이브 경험 | 입사 후 실험 제안의 방향으로만 다룸 | 공간/리테일은 완성된 사례가 없으므로 포트폴리오 실적으로 쓰지 않음 |

## 3. 이번에 추가된 공개 포트폴리오 근거

대상 페이지: `/ai-exploration`

1. **Front Planning Workbench**
   - 로컬 네이티브 개발 체크포인트의 demo board를 추가했다.
   - 텍스트 브리프, reference frame, 생성 후보, Sequence Rail, 명시적 pass/revise/hold를 분리하는 실제 구현을 보여준다.
   - demo board는 실제 IDOL 제작 선택이 아니라 개발용 시각 증거로 표기한다.
   - Workbench에는 image generation API를 일부러 직접 연결하지 않았다. Grok CLI 등 생성 경로와 분리된 planning·review surface다.

2. **IDOL production system**
   - 리서치부터 공개·학습까지 8개 phase와 29개 semantic stage를 실제 registry에서 대조했다.
   - 각 판단의 owner, source binding, validator, 명시적 승인 gate, upstream feedback 원칙을 공개용 구조로 정리했다.

3. **Python media toolchain**
   - ffprobe, OpenCV, librosa, Pillow, MoviePy, ffmpeg, PyYAML, JSON Schema의 실제 runtime과 script를 확인했다.
   - metadata probe, motion/audio observation, contact sheet, roughcut, QC, 재실행 가능한 recipe를 편집 보조의 근거로 제시한다.

4. **AHEYA smart contract**
   - EIP-712 permit, deadline, nonce replay guard, allowlist, owner/operator gate, event-only funding record가 포함된 공개 Solidity source를 확인했다.
   - 배포나 운영 성과가 아니라 비개발 전공자가 AI와 함께 기술의 책임 경계까지 탐구한 source artifact로만 쓴다.

5. **AHEYA OpenClaw Yui 실행 레일**
   - 실제 구현 범위는 `browse -> candidate snapshot -> plan -> execute -> strict review -> canonical record`다.
   - deliverable 성공과 canonical 기록 성공은 분리한다. 기록 실패가 결과물 성공을 지우지 않는 설계를 보여준다.

6. **Feature Signal Sheet**
   - response, reuse, recall, follow-up interest, founder quality, Trust/AB note, next step을 기록하는 운영 시트 구조를 공개용 발췌로 추가한다.
   - 실제 사용자 기록이나 개인 식별 정보는 보여주지 않는다.

7. **Daily Brief Automation**
   - 08:00 KST에 시즌 문맥, 최근 결정, proof, risk/blocker를 읽어 당일 작업을 정리하도록 한 자동화 명세를 공개용 발췌로 추가한다.
   - 스케줄러가 실제로 매일 실행됐다는 성과 주장은 하지 않는다.

8. **AHEYA public archive**
   - [aheya-public-archive](https://github.com/aheyabaraya/aheya-public-archive)는 creator studio, 지원·피드백, identity, 공개 Trust 경계를 보여주는 sanitized product/engineering archive다.
   - private Trust orchestration, 운영 도구, 인증 정보는 archive의 공개 근거가 아니다.

9. **Pulso / INK 적용·아카이브 예시**
   - Pulso와 INK의 contact sheet, stage record, edit recipe, output registry는 IDOL system이 실제 제작 판단을 남긴 사례로 사용한다.
   - 현재 공개 영상은 INK 하나만 embed한다. One Move는 완성 또는 폐기 뒤 검토할 때까지 영상으로 제시하지 않는다.

10. **실패와 system update**
   - LOW의 face lock failure와 Left In That Night의 discard·anti-repeat 기록을 결과물과 같은 수준의 증거로 추가했다.
   - 실패를 미화하지 않고, 다음 gate가 실제로 무엇으로 바뀌었는지를 연결한다.

11. **Reviewed learning / 05 memory**
   - raw brainstorm·reject·hold는 run이 소유하고, 실제 결과와 대조해 반복 가능한 판단만 skill·creative bank·memory로 승격한다.
   - 공개 페이지에는 승격 경계만 보여주고 핵심 skill과 지침 전문은 공개하지 않는다.

12. **로컬 전용 상세 증거실**
   - `/ai-exploration/internal`에는 Pulso의 실제 `00`~`05` production record, INK catalog/output registry, Workbench 구현·검증 문서와 핵심 소스, AHEYA contract/Yui flow/review/운영 명세를 단계별로 연결했다.
   - 각 항목은 허용 목록의 로컬 파일만 열며, production 환경에서는 `404`가 되도록 막았다.
   - 이 화면은 현재 내부 검토용이다. 외부 포트폴리오로 전환할 때는 항목별 공개 범위, 개인정보·인증 정보, 저작물 원문, 주장 문장을 다시 검토해야 한다.

## 4. 제출 링크와 읽는 순서

1. 통합 포트폴리오: AI Creative 신입으로서 전체 프로젝트를 빠르게 이해시키는 진입점
2. AI Exploration: AHEYA에서 Workbench까지의 가설·실험·실패·system update 연대기와 그 결과 남은 다섯 시스템
3. IDOL 적용 사례: Pulso와 INK의 contact sheet, stage record, edit recipe, output registry
4. MUSINSA: 메시지를 30초 브랜드 광고 경험으로 구조화한 훅
5. ADSB: 패션 브랜드 무드와 짧은 영상 흐름의 훅
6. AHEYA public archive: 스마트계약과 제품 source를 검증하는 보조 링크

MUSINSA와 ADSB는 브랜드 메시지·패션 감도의 훅으로만 사용한다. AI Exploration의 본론은 다섯 시스템이며, Pulso/INK는 하네스 적용 증거, AHEYA public archive는 source 검증 근거다.

## 5. 이력서와 자기소개서에 반영할 내용

### 이력서에 추가할 핵심 bullet

- Front Planning Workbench와 8 phase·29 stage IDOL production system으로 기획, 생성, 후보, 승인, 편집, 공개, 학습의 owner와 handoff를 분리
- 생성형 AI 기능을 이미지·영상 품질만으로 보지 않고 후보 선택, 컷 순서, 타이밍, 검수, 소스 관리 중 실제 병목에 연결 가능한지 실험
- Python media toolchain으로 metadata, motion/audio cue, contact sheet, roughcut, QC를 반복 가능하게 만들고 최종 컷 판단은 사람에게 유지
- AHEYA에서 smart contract의 permit·nonce·operator·event 책임 경계와 후보 수집, 계획, 실행, strict review, canonical record가 분리되는 Trust 실행 구조를 탐구

### 자기소개서 구조

1. **훅 - MUSINSA / ADSB**: 브랜드 메시지와 패션 무드를 장면 흐름으로 바꾸고, 벗어난 후보를 보류한 경험.
2. **본론 - AI Exploration chronology**: AHEYA의 제품·Trust 탐구가 marketing content, Aurora 26개 단위, full MV로 이동했고, LOW·Left의 실패가 face gate와 planning stop rule을 만든 과정을 제시한다.
3. **구현 결론 - Workbench / production system / Python**: INK와 Pulso를 통해 새 기능을 기획, 생성, 편집 보조, 검수, memory로 배치한 방식과 사람의 승인 경계를 설명한다.
4. **결론 - 기여 방식**: 새 도구를 기능 목록으로 공유하지 않고, 브랜드 콘텐츠나 웹 경험으로 이어질 수 있는 실험 기록과 작은 프로토타입으로 공유.

### 아직 쓰지 않을 문장

- 공간 또는 리테일 경험을 실제로 완성·운영했다는 문장
- Yui가 시장에서 지속 자율 실행하거나 거래 성과를 냈다는 문장
- Grok과 Codex를 동일 조건에서 비교해 환각률/품질 우열을 검증했다는 문장
- AHEYA 프로젝트를 정규 개발 경력으로 표현하는 문장

## 6. 입사 후 기여 문장 방향

> 입사 후에는 새로운 AI 툴을 기능 단위로 정리하는 데서 끝내지 않고, 브랜드 콘텐츠와 웹 기반 경험으로 이어질 수 있는 작은 실험과 기록을 만들겠습니다. 후보를 많이 만드는 것보다 어떤 결과를 남기고 보류할지의 기준을 먼저 정리하고, 그 과정과 다음 행동을 팀이 다시 검토할 수 있는 형태로 공유하겠습니다.

공간/리테일은 현재 경험을 실적으로 주장하지 않는다. 입사 후에는 브랜드팀·콘텐츠팀·공간팀과의 협업이 필요한 실험 가설로만 제안한다.

## 7. 객관적 준비도

| 항목 | 점수 | 근거 | 보완 |
| --- | ---: | --- | --- |
| AI 실험·툴 탐색 사고 | 94/100 | AHEYA-Aurora-IDOL 연대기, discard 기록, production harness, Workbench | 외부 트렌드 발견 로그의 날짜·출처를 별도 보강 |
| 콘텐츠/서비스 확장 | 86/100 | Loom, AHEYA, Workbench | AHEYA는 서비스 성과보다 구조로만 설명 |
| 아카이빙·판단 기록 | 95/100 | discard record, contact sheet, Signal Sheet, Yui review/canonical record, reviewed learning | 핵심 skill 전문은 계속 비공개 유지 |
| 패션·브랜드 감도 | 82/100 | MUSINSA, ADSB | 해당 덱의 핵심 장면과 판단 기준을 자기소개서에 압축 |
| 공간·리테일 직접성 | 25/100 | 완료 사례 없음 | 현재 지원 실적으로 사용하지 않음 |
| 전체 AI Experience 핏 | 86/100 | 탐색·반복 실험·콘텐츠·서비스·기록은 강함 | 공간/리테일 직접 경험과 장기 조직 협업 부족이 핵심 리스크 |

## 8. 다음 순서

1. `ai-exploration`의 Yui, Signal Sheet, Daily Brief, harness excerpt가 사용자 검토 기준에서 민감하지 않은지 마지막으로 확인한다.
2. MUSINSA와 ADSB 덱에서 브랜드 메시지·피드백·컷 흐름을 보여주는 정확한 슬라이드를 확정한다.
3. 자기소개서 파일용 최종 글자 수와 문항 형식을 확인한 뒤, 지원동기·직무 적합 경험·입사 후 기여를 각각 완성한다.
4. 최종 제출 전에는 포트폴리오 URL, 파일명, 개인정보, 첨부 문서를 사용자가 직접 확인한다.
5. One Move는 완성 또는 폐기 후 action·physics 실험 로그와 영상 공개 여부를 결정한다.
