export function toSubtitleFragment(text: string) {
  return text
    .trim()
    .replace(/[.。]+$/u, "")
    .replace(/구조화했다$/u, "구조화한 작업")
    .replace(/전환합니다$/u, "전환")
    .replace(/만든다$/u, "만드는 구조")
    .replace(/보여준다$/u, "보여주는 구조")
    .replace(/설계한다$/u, "설계")
    .replace(/정리한다$/u, "정리")
    .replace(/정리했다$/u, "정리한 작업")
    .replace(/수렴했다$/u, "수렴한 과정")
    .replace(/설계했다$/u, "설계한 작업")
    .replace(/연결했다$/u, "연결한 흐름")
    .replace(/증명한다$/u, "증명")
    .replace(/이어진다$/u, "이어지는 구조")
    .replace(/마련한다$/u, "마련하는 검증면")
    .replace(/폐기해야 한다$/u, "폐기 기준")
    .replace(/있다$/u, "있는 구조")
    .replace(/않는다$/u, "않는 문제")
    .replace(/해야 한다$/u, "기준")
    .replace(/둔다$/u, "두는 구조");
}
