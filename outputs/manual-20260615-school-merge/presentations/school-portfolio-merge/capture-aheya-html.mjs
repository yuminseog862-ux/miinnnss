import fs from "node:fs";
import path from "node:path";
import { chromium } from "/Users/yuminseog/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.60.0/node_modules/playwright/index.mjs";

const WORKSPACE = "/Users/yuminseog/portfolio/outputs/manual-20260615-school-merge/presentations/school-portfolio-merge";
const OUT_DIR = path.join(WORKSPACE, "assets/aheya-html");
const URL = "http://127.0.0.1:3000/deck/aheya";

fs.mkdirSync(OUT_DIR, { recursive: true });

function fileNameFor(id) {
  return `${id}.png`;
}

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 1080 },
  deviceScaleFactor: 2,
});

await page.goto(URL, { waitUntil: "networkidle", timeout: 60_000 });
await page.addStyleTag({
  content: `
    *, *::before, *::after {
      animation-duration: 0s !important;
      animation-delay: 0s !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
      scroll-behavior: auto !important;
    }
    video { visibility: visible !important; }
  `,
});

const allIds = await page.$$eval('article[id^="slide-"]', (elements) => elements.map((element) => element.id));
const captured = [];
const skipped = [];

for (const id of allIds) {
  if (!allIds.includes(id)) {
    skipped.push({ id, reason: "missing" });
    continue;
  }

  const locator = page.locator(`#${id}`);
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(250);
  const output = path.join(OUT_DIR, fileNameFor(id));
  await locator.screenshot({ path: output, animations: "disabled" });
  const box = await locator.boundingBox();
  captured.push({ id, output, width: box?.width ?? null, height: box?.height ?? null });
}

const manifest = {
  generatedAt: new Date().toISOString(),
  url: URL,
  allIds,
  candidates: allIds,
  captured,
  skipped,
};

fs.writeFileSync(path.join(OUT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify(manifest, null, 2));

await browser.close();
