# GENTLE MONSTER AI Experience 자기소개서

패션마케팅을 공부하면서 브랜드가 제품 설명보다 한 장면과 분위기로 기억되는 방식을 배웠습니다. 생성형 AI를 접한 뒤에는 이 관심을 이미지를 빠르게 만드는 데서 끝내지 않고, 아직 만들어지지 않은 감각과 경험을 시험하는 쪽으로 넓혔습니다. GENTLE MONSTER AI Experience가 완성된 결과보다 시도와 탐구 과정, 사고 방식을 본다는 점이 제가 AI를 사용해 온 방식과 가장 가깝다고 느껴 지원했습니다.

MUSINSA AI 광고제에서는 `편견을 벗다, 다양성을 입다, 무진장을 만나다`라는 메시지를 30초 AI 숏폼의 장면 흐름으로 구성했습니다. 3인 팀에서 주요 스토리보드와 컷 순서를 잡고 제작 과정을 이끌며, 보기 좋은 후보를 많이 남기는 것보다 인물, 스타일, 화면 톤과 전환이 하나의 메시지로 이어지는지 확인했습니다. ADSB 산학 프로젝트에서는 Andersson Bell의 브랜드 무드를 15초 영상으로 옮기고 실무진 피드백을 반영했습니다. 두 프로젝트에서 배운 것은 생성보다 선택이 어렵고, 브랜드 메시지에서 벗어난 결과를 버리는 기준이 필요하다는 점이었습니다.

개인 AI Exploration은 처음부터 뮤직비디오를 만들기 위한 프로젝트는 아니었습니다. AI 빌더를 위한 crowdfunding을 구상하며 AHEYA의 smart contract, wallet, Trust API를 AI coding agent와 함께 개발했고, OpenClaw Yui로 외부 agent 후보를 찾고 실행한 뒤 review와 canonical record까지 남기는 흐름을 시험했습니다. 하지만 기술 구조를 만드는 것과 사람들이 실제로 쓰는 것은 다른 문제였습니다. AHEYA 마케팅을 위해 이미지와 짧은 영상을 만들기 시작했고, 이 콘텐츠를 반복 생산할 수 있다면 혼자서도 작은 스튜디오 같은 루프를 만들 수 있겠다고 생각했습니다.

2026년 5월에는 Loom Signal Deck의 13명 얼굴을 visual reference로 고정하고, Aurora V2에서 13개의 MV cinematic 단위와 13개의 STAGE 안무 단위를 한 run으로 준비했습니다. 얼굴을 유지한 반복 생성은 가능했지만, 짧은 클립을 많이 만드는 것만으로 콘텐츠가 좋아지지는 않았습니다. 그래서 full MV로 방향을 바꿨습니다. 첫 run인 Root Signal은 완주했지만 카메라와 빛이 단조로웠고, 창의적인 판단까지 스크립트로 고정해 결과가 반복됐습니다. LOW는 실제 얼굴 reference 잠금이 약해 폐기했고, Left In That Night는 이미지와 설정은 많았지만 감정의 주인과 인과가 연결되지 않아 full MV를 중단했습니다. 실패할 때마다 생성량을 늘리기보다 face reference gate, 카메라·빛 기준, emotional owner와 causal chain, 30초 proof 같은 기획 규칙을 추가했습니다.

Pulso부터는 영상이 이미지의 연속이라는 관점에서 앞뒤 frame과 곡 section을 함께 보고, ffprobe, OpenCV, librosa, Pillow, MoviePy, ffmpeg를 연결해 contact sheet, roughcut, QC를 만들었습니다. 분석값이 좋은 장면을 대신 고르게 한 것이 아니라 수백 후보를 한 화면에서 비교하고 같은 recipe로 다시 실행하기 위한 편집 보조입니다. INK에서는 레퍼런스의 모티브가 어디에서 왔는지까지 조사하고, 곡 section별로 keyframe, camera, light, object 역할을 정리해 이전보다 안정적인 얼굴, 구도, 빛, 장면 연결을 만들었습니다. 이후 가장 큰 병목이 제 기획이라는 점을 인정하고, 흩어진 생각과 reference, 후보, 곡 순서, pass·revise·hold를 한 화면에서 다루는 Front Planning Workbench를 만들었습니다. Workbench에는 생성 API를 일부러 직접 연결하지 않았습니다. 생성기가 아니라 생각과 선택을 외부화하는 의사결정 표면이기 때문입니다.

저는 X와 Instagram에서 새로운 기능을 빠르게 접하고, 공식 문서와 강연, 기술 글로 구조를 확인한 뒤 현재 작업의 병목에 직접 붙여봅니다. 통과한 결과만 모으지 않고 무엇을 왜 폐기했는지, 그 실패가 다음 skill과 제작 규칙을 어떻게 바꿨는지 기록합니다. 입사 후에도 새 도구를 기능 목록으로 공유하는 데서 멈추지 않겠습니다. 어떤 질문에서 시작했고, 무엇을 만들고 보류했으며, 다음에는 무엇을 시험할지까지 남기는 작은 실험과 prototype으로 공유하겠습니다. 반복 작업과 자료 정리는 자동화하되, GENTLE MONSTER가 남길 메시지와 감각, 최종 선택은 팀과 함께 책임지겠습니다.
