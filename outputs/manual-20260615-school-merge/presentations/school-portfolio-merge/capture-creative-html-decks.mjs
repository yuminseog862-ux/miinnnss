import fs from "node:fs";
import path from "node:path";
import { chromium } from "/Users/yuminseog/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.60.0/node_modules/playwright/index.mjs";

const WORKSPACE = "/Users/yuminseog/portfolio/outputs/manual-20260615-school-merge/presentations/school-portfolio-merge";
const OUT_ROOT = path.join(WORKSPACE, "assets/creative-html");
const BASE_URL = "http://127.0.0.1:3000";

const TARGETS = [
  { key: "adsb", url: `${BASE_URL}/deck/adsb` },
  { key: "sfti", url: `${BASE_URL}/deck/sfti` },
];

fs.mkdirSync(OUT_ROOT, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 1100 },
  deviceScaleFactor: 2,
});

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

const manifests = [];

for (const target of TARGETS) {
  const outDir = path.join(OUT_ROOT, target.key);
  fs.mkdirSync(outDir, { recursive: true });

  await page.goto(target.url, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(1600);
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

  const allIds = await page.$$eval('article[id^="slide-"]', (elements) => elements.map((element) => element.id));
  const captured = [];
  const skipped = [];

  for (const id of allIds) {
    const locator = page.locator(`#${id}`);
    await locator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(180);
    const output = path.join(outDir, `${id}.png`);
    await locator.screenshot({ path: output, animations: "disabled" });
    const box = await locator.boundingBox();
    captured.push({ id, output, width: box?.width ?? null, height: box?.height ?? null });
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    key: target.key,
    url: target.url,
    allIds,
    captured,
    skipped,
  };
  fs.writeFileSync(path.join(outDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  manifests.push(manifest);
}

console.log(JSON.stringify({ generatedAt: new Date().toISOString(), manifests }, null, 2));

await browser.close();
