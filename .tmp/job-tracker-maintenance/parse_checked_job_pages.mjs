import fs from "node:fs";

const pages = [
  ["루먼랩", "/private/tmp/wanted_lumenlab.html"],
  ["21그램", "/private/tmp/wanted_21gram.html"],
  ["타인에이아이", "/private/tmp/wanted_tainai.html"],
  ["위홈", "/private/tmp/jobkorea_wehome.html"],
  ["로켓AI", "/private/tmp/jobkorea_rocketai.html"],
  ["더블유쓰리컴퍼니", "/private/tmp/jobkorea_w3.html"],
];

for (const [name, path] of pages) {
  const html = fs.existsSync(path) ? fs.readFileSync(path, "utf8") : "";
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1] || "";
  const json = html.match(/<script type="application\/ld\+json">({[\s\S]*?"@type":"JobPosting"[\s\S]*?})<\/script>/)?.[1];
  let parsed = {};
  if (json) {
    try {
      parsed = JSON.parse(json);
    } catch {}
  }
  const closed = html.includes("마감되었습니다");
  const endDate = html.match(/마감일[\s\S]{0,250}?children\":\"([0-9.()가-힣]+)\"/)?.[1]
    || html.match(/validThrough":"([^"]+)"/)?.[1]
    || parsed.validThrough
    || "";
  console.log(JSON.stringify({
    name,
    title: parsed.title || title,
    url: parsed.url || "",
    employmentType: parsed.employmentType || "",
    datePosted: parsed.datePosted || "",
    validThrough: parsed.validThrough || endDate,
    experience: parsed.experienceRequirements || "",
    closed,
    titleText: title,
  }));
}
