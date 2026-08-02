/**
 * Structural check: Content Learning Loop type hierarchy in portfolio-hub.module.css
 * Run: node scripts/assert-learning-type-hierarchy.mjs
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(root, "src/components/portfolio-hub/portfolio-hub.module.css"), "utf8");

function mustInclude(needle, label) {
  if (!css.includes(needle)) {
    console.error("FAIL", label, "missing:", needle);
    process.exitCode = 1;
    return false;
  }
  console.log("PASS", label);
  return true;
}

mustInclude(".learningHeroSolo > h1", "page title selector");
mustInclude("clamp(40px, 5.8vw, 68px)", "page title size");
mustInclude(".learningMetricStrip dd", "metric value selector");
mustInclude("clamp(18px, 1.65vw, 24px)", "metric value size");
mustInclude(".learningSceneHypothesis .learningSceneStep p", "hypothesis body");
mustInclude("learningLineBreakText::first-line", "first-line emphasis");
mustInclude("white-space: pre-line", "pre-line line breaks");
mustInclude(".learningTableRail", "evidence table rail");
mustInclude(".learningTableSlide .performanceTableShell", "table shell scoped to slide");

// Ensure slide shell hides horizontal scroll (between-card only)
const shellBlock = css.match(/\.learningTableSlide \.performanceTableShell\s*\{[^}]+\}/);
if (!shellBlock || !shellBlock[0].includes("overflow-x: hidden")) {
  console.error("FAIL slide shell must set overflow-x: hidden");
  process.exitCode = 1;
} else {
  console.log("PASS slide shell overflow-x hidden");
}

if (process.exitCode) process.exit(process.exitCode);
console.log("All learning type hierarchy checks passed.");
