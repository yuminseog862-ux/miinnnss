import fs from "node:fs";

const files = [
  "/private/tmp/wanted_api_jobs_ai_content.json",
  "/private/tmp/wanted_api_jobs_ai_marketer.json",
  "/private/tmp/wanted_api_jobs_ai_creator.json",
  "/private/tmp/wanted_api_jobs_ai_video.json",
  "/private/tmp/wanted_api_jobs_genai.json",
];

const known = [
  "루먼랩", "파이어엑스", "21그램", "타인에이아이", "브라이트비드", "베이컨디자인스튜디오",
  "순이엔티", "레더몬스터", "골드넥스", "에이프리카", "코코스타즈", "더블유쓰리", "네이버웹툰",
];

function score(job) {
  const text = `${job.title} ${job.companyName} ${job.category || ""}`;
  let s = 0;
  if (/AI|인공지능|생성형|LLM|GPT|GenAI|Midjourney|Kling|Stable/i.test(text)) s += 40;
  if (/콘텐츠|마케터|마케팅|브랜드|PMM|Product Marketing|기획|크리에이터|영상|비주얼|캐릭터|IP|PD/i.test(text)) s += 35;
  if (/신입|junior|intern|인턴/i.test(text)) s += 12;
  if (/Senior|시니어|리드|Lead|Head|팀장|7년|8년|10년/i.test(text)) s -= 25;
  if (!/AI|인공지능|생성형|LLM|GPT|GenAI/i.test(text)) s -= 20;
  return s;
}

const byId = new Map();
for (const file of files) {
  const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
  for (const item of parsed.data || []) {
    const id = item.id || item.position_id;
    const companyName = item.company?.name || item.company_name || "";
    const title = item.position || item.title || "";
    if (!id || !title || !companyName) continue;
    if (known.some((name) => companyName.includes(name))) continue;
    const job = {
      id,
      companyName,
      title,
      url: `https://www.wanted.co.kr/wd/${id}`,
      annualFrom: item.annual_from,
      annualTo: item.annual_to,
      category: item.category_tag?.parent_tag?.text || item.category_tag?.text || item.job_category || "",
      address: item.address?.location || item.address || "",
      status: item.status,
      dueTime: item.due_time,
      logo: item.company?.logo_img?.origin,
    };
    job.score = score(job);
    byId.set(id, job);
  }
}

const candidates = [...byId.values()]
  .filter((job) => job.status === "active")
  .sort((a, b) => b.score - a.score);

console.log(JSON.stringify(candidates.slice(0, 80), null, 2));
