const chunks = [
  "https://recruit.smentertainment.com/_next/static/chunks/0i49m~nbdl9sp.js",
  "https://recruit.smentertainment.com/_next/static/chunks/10f15un292if2.js",
];

for (const src of chunks) {
  const js = await (await fetch(src)).text();
  console.log("---", src);
  const hits = new Set();
  for (const term of [
    "applyConfigSnapshot",
    "application",
    "applications",
    "questionnaire",
    "documents",
    "docsInfo",
    "opening",
    "snapshot",
  ]) {
    let index = js.indexOf(term);
    while (index >= 0) {
      hits.add(js.slice(Math.max(0, index - 180), index + 360));
      index = js.indexOf(term, index + term.length);
      if (hits.size > 80) break;
    }
  }
  for (const hit of [...hits].slice(0, 80)) {
    console.log(hit.replace(/\s+/g, " "));
    console.log("");
  }
}
