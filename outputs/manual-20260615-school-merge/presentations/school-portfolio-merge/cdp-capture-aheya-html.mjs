import fs from "node:fs";
import path from "node:path";

const WORKSPACE = "/Users/yuminseog/portfolio/outputs/manual-20260615-school-merge/presentations/school-portfolio-merge";
const OUT_DIR = path.join(WORKSPACE, "assets/aheya-html");
const URL = "http://127.0.0.1:3000/deck/aheya";
const CDP = "http://127.0.0.1:9222";

fs.mkdirSync(OUT_DIR, { recursive: true });

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cdpRequest(pathname, options = {}) {
  const response = await fetch(`${CDP}${pathname}`, options);
  if (!response.ok) {
    throw new Error(`${options.method ?? "GET"} ${pathname} failed: ${response.status} ${await response.text()}`);
  }
  return response.json();
}

function connect(wsUrl) {
  const socket = new WebSocket(wsUrl);
  let nextId = 1;
  const pending = new Map();

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (!message.id) return;
    const pair = pending.get(message.id);
    if (!pair) return;
    pending.delete(message.id);
    if (message.error) pair.reject(new Error(JSON.stringify(message.error)));
    else pair.resolve(message.result ?? {});
  });

  const opened = new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  async function send(method, params = {}) {
    await opened;
    const id = nextId++;
    socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  }

  return { socket, send, opened };
}

const target = await cdpRequest(`/json/new?${encodeURIComponent(URL)}`, { method: "PUT" });
const client = connect(target.webSocketDebuggerUrl);
await client.opened;
await client.send("Page.enable");
await client.send("Runtime.enable");
await client.send("Emulation.setDeviceMetricsOverride", {
  width: 1700,
  height: 1100,
  deviceScaleFactor: 1,
  mobile: false,
});
await client.send("Page.navigate", { url: URL });
await delay(4500);
await client.send("Runtime.evaluate", {
  expression: `
    document.body.style.scrollBehavior = 'auto';
    const style = document.createElement('style');
    style.textContent = '*{animation-duration:0s!important;transition-duration:0s!important;scroll-behavior:auto!important}';
    document.head.appendChild(style);
    true;
  `,
  awaitPromise: true,
});
await delay(500);

const idsResult = await client.send("Runtime.evaluate", {
  expression: `Array.from(document.querySelectorAll('article[id^="slide-"]')).map((element) => element.id)`,
  returnByValue: true,
});
const allIds = idsResult.result.value ?? [];
const captured = [];
const skipped = [];

for (const id of allIds) {
  const infoResult = await client.send("Runtime.evaluate", {
    expression: `
      (async () => {
        const id = ${JSON.stringify(id)};
        const el = document.getElementById(id);
        if (!el) return { id, missing: true };
        const text = el.innerText || '';
        el.scrollIntoView({ block: 'center', inline: 'center' });
        await new Promise((resolve) => setTimeout(resolve, 300));
        const rect = el.getBoundingClientRect();
        return {
          id,
          text,
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY,
          width: rect.width,
          height: rect.height,
          viewportX: rect.left,
          viewportY: rect.top,
          dpr: window.devicePixelRatio
        };
      })()
    `,
    awaitPromise: true,
    returnByValue: true,
  });
  const info = infoResult.result.value;
  if (!info || info.missing) {
    skipped.push({ id, reason: "missing" });
    continue;
  }
  const screenshot = await client.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: true,
    clip: {
      x: Math.max(0, info.x),
      y: Math.max(0, info.y),
      width: info.width,
      height: info.height,
      scale: 1,
    },
  });
  const output = path.join(OUT_DIR, `${id}.png`);
  fs.writeFileSync(output, Buffer.from(screenshot.data, "base64"));
  captured.push({ id, output, width: info.width, height: info.height });
}

const manifest = {
  generatedAt: new Date().toISOString(),
  url: URL,
  allIds,
  candidates: allIds,
  captured,
  skipped,
};
fs.writeFileSync(path.join(OUT_DIR, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(JSON.stringify(manifest, null, 2));

client.socket.close();
await cdpRequest(`/json/close/${target.id}`);
