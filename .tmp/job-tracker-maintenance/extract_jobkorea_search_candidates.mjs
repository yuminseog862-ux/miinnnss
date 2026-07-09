import fs from "node:fs";

const files = [
  "/private/tmp/jk_search_ai_content_marketer.html",
  "/private/tmp/jk_search_genai_content_planning.html",
  "/private/tmp/jk_search_ai_video_planning.html",
  "/private/tmp/jk_search_ai_creative_marketer.html",
  "/private/tmp/jk_search_ai_idol.html",
  "/private/tmp/jk_search_ai_visual.html",
  "/private/tmp/jk_search_ai_artist.html",
  "/private/tmp/jk_search_virtual_content.html",
];

const submittedOrKnown = new Set([
  "파켓", "mixsoon", "브라이트비드", "베이컨디자인스튜디오", "순이엔티", "레더몬스터",
  "골드넥스", "에이프리카", "파이어엑스", "루먼랩", "코코스타즈", "위홈", "일류ENT",
  "넥사이브", "더블유쓰리컴퍼니", "로켓AI",
]);

function clean(text = "") {
  return text
    .replace(/\\u0026/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/\\"/g, "\"")
    .replace(/\\n/g, " ")
    .trim();
}

function field(chunk, key) {
  const re = new RegExp(`"${key}":"((?:\\\\.|[^"\\\\])*)"`);
  return clean(chunk.match(re)?.[1] || "");
}

function arrayField(chunk, key) {
  const m = chunk.match(new RegExp(`"${key}":\\[(.*?)\\]`));
  if (!m) return [];
  return [...m[1].matchAll(/"((?:\\.|[^"\\])*)"/g)].map((x) => clean(x[1]));
}

function objectText(chunk, key) {
  const m = chunk.match(new RegExp(`"${key}":\\{([^}]+)\\}`));
  return m ? m[1] : "";
}

function numField(chunk, key) {
  const v = chunk.match(new RegExp(`"${key}":(-?\\d+)`))?.[1];
  return v == null ? null : Number(v);
}

function pay(chunk) {
  const p = objectText(chunk, "payRange");
  return {
    start: p.match(/"start":"([^"]*)"/)?.[1] || "",
    end: p.match(/"end":"([^"]*)"/)?.[1] || "",
  };
}

function applicationEnd(chunk) {
  return objectText(chunk, "applicationPeriod").match(/"end":"([^"]*)"/)?.[1] || "";
}

function employmentText(codes) {
  if (codes.includes("1/0")) return "정규직";
  if (codes.includes("3/0")) return "인턴";
  if (codes.includes("2/1") || codes.includes("2/0")) return "계약직";
  if (codes.includes("6/0")) return "위촉/프리랜서";
  return codes.join(",");
}

function careerText(type, range) {
  if (type === "4") return "경력무관";
  if (type === "1") return "신입";
  if (type === "2") return `경력 ${range || ""}`.trim();
  if (type === "3") return "신입/경력";
  return type || "";
}

function score(job) {
  const t = `${job.title} ${job.classification}`.toLowerCase();
  let s = 0;
  if (/ai|생성형|gpt|llm|kling|seedance|midjourney|챗gpt|chatgpt/i.test(t)) s += 40;
  if (/콘텐츠|content|크리에이터|creator|영상|비주얼|visual|아이돌|캐릭터|숏폼/i.test(t)) s += 25;
  if (/마케터|marketing|마케팅|브랜드|brand|pm|pmm|기획|planner|planning|운영/i.test(t)) s += 25;
  if (/신입|경력무관/.test(job.career)) s += 15;
  if (/정규직|인턴/.test(job.employment)) s += 8;
  if (/계약직|위촉|프리랜서/.test(job.employment)) s -= 25;
  if (Number(job.pay.start || 0) > 0 && Number(job.pay.start) < 2800) s -= 30;
  if (!/ai|생성형|gpt|llm|kling|seedance|midjourney|챗gpt|chatgpt/i.test(`${job.title} ${job.classification}`)) s -= 35;
  return s;
}

const byId = new Map();
for (const file of files) {
  const html = fs.readFileSync(file, "utf8")
    .replace(/\\"/g, "\"")
    .replace(/\\u0026/g, "&");
  const parts = html.split('{"jobPlatformId":').slice(1);
  for (const part of parts) {
    const chunk = '{"jobPlatformId":' + part.split('},{"jobPlatformId":')[0];
    const id = field(chunk, "id");
    const title = field(chunk, "title");
    const companyName = field(chunk, "companyName");
    if (!id || !title || !companyName) continue;
    if ([...submittedOrKnown].some((name) => companyName.includes(name))) continue;
    const employmentCodes = arrayField(chunk, "employmentTypeCodeList");
    const careerType = field(chunk, "careerType");
    const careerRange = numField(chunk, "careerRange");
    const job = {
      id,
      companyName,
      title,
      url: `https://www.jobkorea.co.kr/Recruit/GI_Read/${id}`,
      career: careerText(careerType, careerRange),
      employment: employmentText(employmentCodes),
      end: applicationEnd(chunk),
      pay: pay(chunk),
      classification: field(chunk, "jobClassificationOrIndustry"),
      readCount: numField(chunk, "readCount"),
    };
    job.score = score(job);
    byId.set(id, job);
  }
}

const candidates = [...byId.values()]
  .filter((job) => job.score >= 0)
  .sort((a, b) => b.score - a.score || (b.readCount || 0) - (a.readCount || 0));

console.log(JSON.stringify(candidates.slice(0, 60), null, 2));
