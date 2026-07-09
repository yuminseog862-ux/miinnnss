import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "/Users/yuminseog/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.60.0/node_modules/playwright/index.mjs";

const WORKSPACE = "/Users/yuminseog/portfolio/outputs/manual-20260615-school-merge/presentations/school-portfolio-merge";
const OUT_DIR = path.join(WORKSPACE, "assets/bemoon-html");
const HTML_FILE = path.join(OUT_DIR, "index.html");
const URL = pathToFileURL(HTML_FILE).href;

fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

await page.goto(URL, { waitUntil: "load", timeout: 60_000 });
await page.addStyleTag({
  content: `
    *, *::before, *::after {
      animation-duration: 0s !important;
      animation-delay: 0s !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
      scroll-behavior: auto !important;
    }
  `,
});

const allIds = await page.$$eval('article[id^="bemoon-slide-"]', (elements) => elements.map((element) => element.id));
const captured = [];
const skipped = [];

for (const id of allIds) {
  const locator = page.locator(`#${id}`);
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(120);
  const output = path.join(OUT_DIR, `${id}.png`);
  await locator.screenshot({ path: output, animations: "disabled" });
  const box = await locator.boundingBox();
  captured.push({ id, output, width: box?.width ?? null, height: box?.height ?? null });
}

const manifest = {
  generatedAt: new Date().toISOString(),
  url: URL,
  htmlFile: HTML_FILE,
  allIds,
  captured,
  skipped,
};

fs.writeFileSync(path.join(OUT_DIR, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify(manifest, null, 2));

await browser.close();
