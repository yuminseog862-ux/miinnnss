import fs from "node:fs";

const files = [
  ["음양관", "/private/tmp/wanted_363507_eumyanggwan.html"],
  ["지로 인턴", "/private/tmp/wanted_359124_jiro_intern.html"],
  ["네이션에이", "/private/tmp/wanted_365191_nationa.html"],
  ["퍼플아카데미", "/private/tmp/wanted_367693_purpleacademy.html"],
  ["올리브인터내셔널", "/private/tmp/wanted_357924_olive.html"],
  ["유리프트", "/private/tmp/wanted_256424_ulift.html"],
  ["비버글로벌", "/private/tmp/wanted_363822_beaverglobal.html"],
  ["지로", "/private/tmp/wanted_369462_jiro.html"],
];

for (const [label, file] of files) {
  const html = fs.readFileSync(file, "utf8");
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  let job = null;
  for (const s of scripts) {
    try {
      const parsed = JSON.parse(s[1]);
      if (parsed["@type"] === "JobPosting") job = parsed;
    } catch {}
  }
  const title = html.match(/<title>([^<]+)/)?.[1] || "";
  console.log(JSON.stringify({
    label,
    title: job?.title || title,
    company: job?.hiringOrganization?.name,
    url: job?.url,
    employmentType: job?.employmentType,
    datePosted: job?.datePosted,
    validThrough: job?.validThrough,
    location: job?.jobLocation?.address?.addressRegion || "",
    street: job?.jobLocation?.address?.streetAddress || "",
    experience: job?.experienceRequirements,
    occupationalCategory: job?.occupationalCategory,
    description: String(job?.description || "").slice(0, 700),
  }, null, 2));
}
