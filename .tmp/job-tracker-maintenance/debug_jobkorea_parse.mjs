import fs from "node:fs";
const html = fs.readFileSync("/private/tmp/jk_search_ai_content_marketer.html", "utf8")
  .replace(/\\"/g, "\"")
  .replace(/\\u0026/g, "&");
const i = html.indexOf("jobPlatformId");
console.log("index", i);
console.log(html.slice(i - 50, i + 500));
console.log("split1", html.split('{"jobPlatformId":').length);
console.log("split2", html.split('"jobPlatformId":').length);
const part = html.split('{"jobPlatformId":')[1];
const chunk = '{"jobPlatformId":' + part.split('},{"jobPlatformId":')[0];
console.log(chunk.slice(0, 800));
console.log(chunk.match(/"id":"((?:\\.|[^"\\])*)"/)?.[1]);
console.log(chunk.match(/"title":"((?:\\.|[^"\\])*)"/)?.[1]);
