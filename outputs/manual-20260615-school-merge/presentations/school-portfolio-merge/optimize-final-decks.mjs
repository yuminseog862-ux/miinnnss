import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import {
  FileBlob,
  Presentation,
  PresentationFile,
} from "/Users/yuminseog/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const ROOT = "/Users/yuminseog/portfolio";
const FINAL_DIR = path.join(ROOT, "docs/source/my_real_projects_only/학교/병합본");
const QA_DIR = path.join(
  ROOT,
  "outputs/manual-20260615-school-merge/presentations/school-portfolio-merge/qa",
);
const TMP_DIR = path.join(
  ROOT,
  "outputs/manual-20260615-school-merge/presentations/school-portfolio-merge/tmp/optimize-final-decks",
);
const PYTHON =
  "/Users/yuminseog/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";

const PROFILE = process.argv.includes("--crisp")
  ? "crisp"
  : process.argv.includes("--text-safe")
    ? "text-safe"
    : "balanced";
const MARKETING_ONLY = process.argv.includes("--marketing-only");

const ALL_INPUTS = [
  "패션크리에이티브_디렉션_2251014_유민석.pptx",
  "패션마케팅_2251014_유민석.pptx",
];

const INPUTS = MARKETING_ONLY
  ? ALL_INPUTS.filter((name) => name.includes("패션마케팅"))
  : ALL_INPUTS;

const PROFILE_SETTINGS = {
  balanced: {
    maxLongEdge: 1920,
    maxPixels: 1920 * 1080,
    jpegQuality: 88,
    jpegSubsampling: 1,
    allowPngToJpeg: true,
    allowPngPalette: false,
    suffix: "_optimized",
  },
  "text-safe": {
    maxLongEdge: 2560,
    maxPixels: 2560 * 1440,
    jpegQuality: 96,
    jpegSubsampling: 0,
    allowPngToJpeg: false,
    allowPngPalette: true,
    suffix: "_optimized_textsafe",
  },
  crisp: {
    maxLongEdge: 10000,
    maxPixels: 10000 * 10000,
    jpegQuality: 100,
    jpegSubsampling: 0,
    allowPngToJpeg: false,
    allowPngPalette: false,
    suffix: "_optimized_crisp",
  },
};

const FINAL_SCAN_TERMS = [
  "musinsa.com",
  "musinsa",
  "무신사",
  "김주호",
  "박민선",
  "심다현",
  "윤병준",
  "전세연",
  "김주형",
  "김승환",
  "지혜경",
  "신은정",
  "엄태익",
  "신현준",
  "송준서",
  "최정희",
  "김주찬",
  "박희선",
  "2051053",
  "2251083",
  "아리아드네",
  "No-X",
  "Original X post",
  "Share on X",
  "X post",
  "X reply",
  "X API",
  "Twitter",
  "tweet",
];

const BATCH_OPTIMIZE_IMAGE_SCRIPT = String.raw`
import io
import json
import math
import os
import sys
from PIL import Image

manifest_path = sys.argv[1]
with open(manifest_path, "r", encoding="utf-8") as fh:
    manifest = json.load(fh)

settings = manifest["settings"]
MAX_LONG_EDGE = settings["maxLongEdge"]
MAX_PIXELS = settings["maxPixels"]
JPEG_QUALITY = settings["jpegQuality"]
JPEG_SUBSAMPLING = settings["jpegSubsampling"]
ALLOW_PNG_TO_JPEG = settings["allowPngToJpeg"]
ALLOW_PNG_PALETTE = settings.get("allowPngPalette", False)

def original_result(item, source, reason):
    return {
        "index": item["index"],
        "changed": False,
        "reason": reason,
        "contentType": item["contentType"],
        "width": None,
        "height": None,
        "newWidth": None,
        "newHeight": None,
        "oldBytes": len(source),
        "newBytes": len(source),
    }

def has_alpha(img):
    if img.mode in ("RGBA", "LA"):
        alpha = img.getchannel("A")
        lo, hi = alpha.getextrema()
        return lo < 255
    if img.mode == "P" and "transparency" in img.info:
        return True
    return False

def optimize_one(item):
    with open(item["input"], "rb") as fh:
        source = fh.read()

    content_type = item["contentType"]

    try:
        image = Image.open(io.BytesIO(source))
        image.load()
    except Exception:
        return original_result(item, source, "unreadable")

    width, height = image.size
    scale = min(1.0, MAX_LONG_EDGE / max(width, height))
    if width * height * scale * scale > MAX_PIXELS:
        scale = min(scale, math.sqrt(MAX_PIXELS / (width * height)))

    next_width = max(1, int(round(width * scale)))
    next_height = max(1, int(round(height * scale)))

    resized = image
    if (next_width, next_height) != (width, height):
        resized = image.resize((next_width, next_height), Image.Resampling.LANCZOS)

    alpha = has_alpha(resized)
    candidates = []

    if content_type in ("image/jpeg", "image/jpg"):
        rgb = resized.convert("RGB") if resized.mode != "RGB" else resized
        out = io.BytesIO()
        rgb.save(out, format="JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True, subsampling=JPEG_SUBSAMPLING)
        candidates.append(("image/jpeg", out.getvalue()))
    elif content_type == "image/png" and alpha:
        out = io.BytesIO()
        rgba = resized.convert("RGBA") if resized.mode != "RGBA" else resized
        rgba.save(out, format="PNG", optimize=True, compress_level=9)
        candidates.append(("image/png", out.getvalue()))
    elif content_type == "image/png":
        rgb = resized.convert("RGB") if resized.mode != "RGB" else resized

        png_out = io.BytesIO()
        rgb.save(png_out, format="PNG", optimize=True, compress_level=9)
        candidates.append(("image/png", png_out.getvalue()))

        if ALLOW_PNG_PALETTE:
            palette_out = io.BytesIO()
            palette = rgb.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
            palette.save(palette_out, format="PNG", optimize=True, compress_level=9)
            candidates.append(("image/png", palette_out.getvalue()))

        if ALLOW_PNG_TO_JPEG:
            jpg_out = io.BytesIO()
            rgb.save(jpg_out, format="JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True, subsampling=JPEG_SUBSAMPLING)
            candidates.append(("image/jpeg", jpg_out.getvalue()))
    else:
        return original_result(item, source, "unsupported-content-type")

    best_type, best = min(candidates, key=lambda candidate: len(candidate[1]))
    changed = len(best) < len(source) and (best_type != content_type or best != source)

    if not changed:
        best_type = content_type
        best = source

    if changed:
        os.makedirs(os.path.dirname(item["output"]), exist_ok=True)
        with open(item["output"], "wb") as fh:
            fh.write(best)

    return {
        "index": item["index"],
        "changed": changed,
        "contentType": best_type,
        "width": width,
        "height": height,
        "newWidth": next_width if changed else width,
        "newHeight": next_height if changed else height,
        "oldBytes": len(source),
        "newBytes": len(best),
    }

results = [optimize_one(item) for item in manifest["items"]]
print(json.dumps({"results": results}, ensure_ascii=False))
`;

function scanProto(proto, terms = FINAL_SCAN_TERMS) {
  const hits = [];
  function walk(node, trail = []) {
    if (!node || typeof node !== "object" || ArrayBuffer.isView(node) || node instanceof ArrayBuffer) return;
    for (const [key, value] of Object.entries(node)) {
      if (key === "creationId") continue;
      if (typeof value === "string") {
        for (const term of terms) {
          if (value.includes(term)) hits.push({ term, path: [...trail, key].join("."), value });
        }
      } else if (Array.isArray(value)) {
        value.forEach((child, index) => walk(child, [...trail, `${key}[${index}]`]));
      } else if (value && typeof value === "object") {
        walk(value, [...trail, key]);
      }
    }
  }
  walk(proto);
  return hits;
}

function optimizeImagesBatch(proto, deckSlug, settings) {
  const images = proto.images ?? [];
  const deckTmp = path.join(TMP_DIR, deckSlug);
  const inputDir = path.join(deckTmp, "input");
  const outputDir = path.join(deckTmp, "output");

  fs.rmSync(deckTmp, { recursive: true, force: true });
  fs.mkdirSync(inputDir, { recursive: true });
  fs.mkdirSync(outputDir, { recursive: true });

  const items = [];
  images.forEach((image, index) => {
    if (!image?.data?.byteLength) return;
    if (!["image/png", "image/jpeg", "image/jpg"].includes(image.contentType)) return;
    const input = path.join(inputDir, `${String(index).padStart(5, "0")}.bin`);
    const output = path.join(outputDir, `${String(index).padStart(5, "0")}.bin`);
    fs.writeFileSync(input, Buffer.from(image.data));
    items.push({ index, contentType: image.contentType, input, output });
  });

  const manifestPath = path.join(deckTmp, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify({ settings, items }, null, 2));

  const result = spawnSync(PYTHON, ["-c", BATCH_OPTIMIZE_IMAGE_SCRIPT, manifestPath], {
    maxBuffer: 64 * 1024 * 1024,
  });

  if (result.status !== 0) {
    const stderr = result.stderr?.toString("utf8") ?? "";
    throw new Error(`Image batch optimization failed for ${deckSlug}: ${stderr}`);
  }

  const payload = JSON.parse(result.stdout.toString("utf8"));
  for (const stat of payload.results) {
    if (!stat.changed) continue;
    const output = path.join(outputDir, `${String(stat.index).padStart(5, "0")}.bin`);
    images[stat.index].data = new Uint8Array(fs.readFileSync(output));
    images[stat.index].contentType = stat.contentType;
  }

  fs.rmSync(deckTmp, { recursive: true, force: true });
  return payload.results;
}

async function optimizeDeck(inputName) {
  const source = path.join(FINAL_DIR, inputName);
  const parsed = path.parse(inputName);
  const settings = PROFILE_SETTINGS[PROFILE];
  const output = path.join(FINAL_DIR, `${parsed.name}${settings.suffix}${parsed.ext}`);

  const sourceBytes = fs.statSync(source).size;
  const imported = await PresentationFile.importPptx(await FileBlob.load(source));
  const proto = imported.toProto();
  const originalSlideCount = imported.slides.count;
  const imageStats = optimizeImagesBatch(proto, `${parsed.name}-${PROFILE}`, settings);

  const optimizedPresentation = Presentation.load(proto);
  const pptx = await PresentationFile.exportPptx(optimizedPresentation);
  await pptx.save(output);

  const check = await PresentationFile.importPptx(await FileBlob.load(output));
  const checkProto = check.toProto();
  const forbiddenHits = scanProto(checkProto);
  const emptyImages = (checkProto.images ?? []).filter((image) => !image.data || image.data.byteLength === 0).length;
  const outputBytes = fs.statSync(output).size;

  return {
    source,
    output,
    originalSlideCount,
    optimizedSlideCount: check.slides.count,
    originalBytes: sourceBytes,
    optimizedBytes: outputBytes,
    changedImages: imageStats.filter((stat) => stat.changed).length,
    scannedImages: imageStats.length,
    savedImageBytes: imageStats.reduce((sum, stat) => sum + Math.max(0, (stat.oldBytes ?? 0) - (stat.newBytes ?? 0)), 0),
    emptyImages,
    forbiddenHits,
  };
}

async function main() {
  fs.mkdirSync(QA_DIR, { recursive: true });
  const results = [];
  for (const input of INPUTS) {
    results.push(await optimizeDeck(input));
  }

  const report = {
    generatedAt: new Date().toISOString(),
    mode: "artifact-tool-import-image-optimize-export",
    profile: PROFILE,
    settings: PROFILE_SETTINGS[PROFILE],
    results,
  };
  const reportPath = path.join(QA_DIR, `optimized-final-decks-report-${PROFILE}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
