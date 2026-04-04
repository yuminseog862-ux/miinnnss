#!/usr/bin/env python3

from __future__ import annotations

import hashlib
import html
import os
import re
import shutil
import subprocess
import sys
import zlib
from collections import defaultdict
from pathlib import Path
from typing import Iterable


ROOT = Path(__file__).resolve().parents[1]
DOCS_ROOT = ROOT / "docs"
TMP_ROOT = ROOT / "tmp" / "convert_docs"

CONVERTIBLE_EXTS = {".docx", ".pptx", ".pdf", ".hwp", ".txt"}
PRIORITY = {
    ".docx": 0,
    ".txt": 1,
    ".hwp": 2,
    ".pptx": 3,
    ".pdf": 4,
}
HWP_SKIP_LINES = {
    "Root Entry",
    "FileHeader",
    "DocInfo",
    "HwpSummaryInformation",
    "BodyText",
    "BinData",
    "PrvImage",
    "PrvText",
    "DocOptions",
    "Scripts",
    "JScriptVersion",
    "DefaultJScript",
    "LinkDoc",
}


def run(command: list[str], check: bool = True) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        command,
        check=check,
        text=True,
        capture_output=True,
        cwd=ROOT,
    )


def run_text(command: list[str], check: bool = True) -> str:
    return run(command, check=check).stdout


def is_heading(line: str) -> bool:
    return bool(re.fullmatch(r"[A-Z][A-Z0-9 /&:_-]{2,}", line))


def normalize_blank_lines(lines: Iterable[str]) -> list[str]:
    normalized: list[str] = []
    blank = False
    for raw_line in lines:
        line = raw_line.rstrip()
        if not line:
            if not blank:
                normalized.append("")
            blank = True
            continue
        normalized.append(line)
        blank = False
    while normalized and not normalized[0]:
        normalized.pop(0)
    while normalized and not normalized[-1]:
        normalized.pop()
    return normalized


def plain_text_to_md(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n").replace("\ufeff", "")
    text = text.replace("\xa0", " ")
    lines: list[str] = []
    for raw in text.split("\n"):
        line = re.sub(r"[ \t]+", " ", raw.strip())
        if not line:
            lines.append("")
            continue
        if line.startswith("•"):
            line = "- " + line[1:].strip()
        elif line.startswith(("▪", "◦", "‣")):
            line = "- " + line[1:].strip()
        elif is_heading(line):
            line = "## " + line
        lines.append(line)
    return "\n".join(normalize_blank_lines(lines))


def html_to_text(fragment: str) -> str:
    cleaned = re.sub(r"<style.*?</style>", "", fragment, flags=re.S | re.I)
    cleaned = re.sub(r"<script.*?</script>", "", cleaned, flags=re.S | re.I)
    cleaned = re.sub(r"<br\s*/?>", "\n", cleaned, flags=re.I)
    cleaned = re.sub(r"</p\s*>", "\n", cleaned, flags=re.I)
    cleaned = re.sub(r"</div\s*>", "\n", cleaned, flags=re.I)
    cleaned = re.sub(r"<[^>]+>", "", cleaned)
    cleaned = html.unescape(cleaned).replace("\xa0", " ")
    lines = []
    for raw in cleaned.splitlines():
        line = re.sub(r"[ \t]+", " ", raw.strip())
        if line:
            lines.append(line)
    return "\n".join(normalize_blank_lines(lines))


def meaningful(text: str) -> bool:
    tokens = re.findall(r"[A-Za-z가-힣0-9]{3,}", text)
    return len(tokens) >= 5 or sum(len(token) for token in tokens) >= 40


def safe_token(path: Path) -> str:
    digest = hashlib.sha1(str(path.relative_to(ROOT)).encode("utf-8")).hexdigest()[:10]
    return f"{path.stem}-{digest}"


def choose_primary(paths: list[Path]) -> Path:
    return sorted(paths, key=lambda path: (PRIORITY[path.suffix.lower()], path.name.lower()))[0]


def convert_docx(path: Path) -> tuple[str, list[str]]:
    text = run_text(["textutil", "-convert", "txt", "-stdout", str(path)])
    return plain_text_to_md(text), []


def convert_txt(path: Path) -> tuple[str, list[str]]:
    for encoding in ("utf-8-sig", "utf-8", "cp949", "euc-kr", "latin1"):
        try:
            text = path.read_text(encoding=encoding)
            return plain_text_to_md(text), []
        except UnicodeDecodeError:
            continue
    return "", ["Unable to decode the text file with the available local encodings."]


def ocr_image(path: Path) -> str:
    result = run(["tesseract", str(path), "stdout", "--psm", "6"], check=False)
    if result.returncode != 0:
        return ""
    return plain_text_to_md(result.stdout)


def extract_pptx_with_quicklook(path: Path, preview_dir: Path) -> tuple[str, list[str]]:
    notes: list[str] = ["Quick Look preview + OCR was used for this presentation."]
    run(["qlmanage", "-p", "-o", str(preview_dir), str(path)])
    ql_dirs = sorted(preview_dir.glob("*.qlpreview"))
    if not ql_dirs:
        return "", notes + ["Quick Look did not generate a preview bundle."]

    preview_html = ql_dirs[0] / "Preview.html"
    if not preview_html.exists():
        return "", notes + ["Quick Look preview HTML was not created."]

    html_text = preview_html.read_text(encoding="utf-8", errors="ignore")
    slide_fragments = re.split(r'<div class="slide"[^>]*>', html_text, flags=re.I)[1:]
    slide_sections: list[str] = []
    extracted_any = False

    for index, fragment in enumerate(slide_fragments, start=1):
        slide_text = html_to_text(fragment)
        image_match = re.search(r'<img src="([^"]+)"', fragment, flags=re.I)
        if not meaningful(slide_text) and image_match:
            image_path = preview_html.parent / html.unescape(image_match.group(1))
            if image_path.exists():
                slide_text = ocr_image(image_path)
        if meaningful(slide_text):
            extracted_any = True
        if not slide_text.strip():
            slide_text = "_No text could be extracted from this slide._"
        slide_sections.append(f"## Slide {index}\n\n{slide_text.strip()}")

    if not extracted_any:
        return "", notes + ["Quick Look preview did not expose extractable slide text."]
    return "\n\n".join(slide_sections).strip(), notes


def extract_pptx_from_media(path: Path, preview_dir: Path) -> tuple[str, list[str]]:
    notes = ["Embedded slide media was OCR-processed because Quick Look preview was unavailable."]
    import zipfile

    image_dir = preview_dir / "media"
    image_dir.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(path) as archive:
        image_names = sorted(name for name in archive.namelist() if name.startswith("ppt/media/"))
        if not image_names:
            return "", notes + ["No embedded presentation media was found."]
        sections = []
        for index, image_name in enumerate(image_names, start=1):
            target = image_dir / Path(image_name).name
            target.write_bytes(archive.read(image_name))
            slide_text = ocr_image(target)
            if not slide_text.strip():
                slide_text = "_No text could be extracted from this slide._"
            sections.append(f"## Slide {index}\n\n{slide_text.strip()}")
    return "\n\n".join(sections).strip(), notes


def convert_pptx(path: Path) -> tuple[str, list[str]]:
    preview_dir = TMP_ROOT / "previews" / safe_token(path)
    if preview_dir.exists():
        shutil.rmtree(preview_dir)
    preview_dir.mkdir(parents=True, exist_ok=True)

    try:
        body, notes = extract_pptx_with_quicklook(path, preview_dir)
        if meaningful(body):
            return body, notes
    except subprocess.CalledProcessError as exc:
        body = ""
        notes = [f"Quick Look preview failed: {exc.stderr.strip() or exc.stdout.strip() or exc}"]

    fallback_body, fallback_notes = extract_pptx_from_media(path, preview_dir)
    if notes:
        fallback_notes = notes + fallback_notes
    return fallback_body, fallback_notes


def pdf_page_count(path: Path) -> int:
    output = run_text(["file", str(path)], check=False)
    match = re.search(r"(\d+) pages?", output)
    return int(match.group(1)) if match else 1


def decode_pdf_literal(value: str) -> str:
    chunks: list[str] = []
    index = 0
    while index < len(value):
        char = value[index]
        if char != "\\":
            chunks.append(char)
            index += 1
            continue
        index += 1
        if index >= len(value):
            break
        escaped = value[index]
        if escaped in "nrtbf":
            chunks.append(
                {
                    "n": "\n",
                    "r": "\r",
                    "t": "\t",
                    "b": "\b",
                    "f": "\f",
                }[escaped]
            )
            index += 1
            continue
        if escaped in "()\\":
            chunks.append(escaped)
            index += 1
            continue
        if escaped.isdigit():
            octal = escaped
            for _ in range(2):
                if index + 1 < len(value) and value[index + 1].isdigit():
                    index += 1
                    octal += value[index]
                else:
                    break
            chunks.append(chr(int(octal, 8)))
            index += 1
            continue
        chunks.append(escaped)
        index += 1
    return "".join(chunks)


def decode_pdf_hex(value: str) -> str:
    if len(value) % 2:
        value += "0"
    raw = bytes.fromhex(value)

    for encoding in ("utf-16-be", "utf-8", "latin1"):
        try:
            decoded = raw.decode(encoding)
        except UnicodeDecodeError:
            continue
        cleaned = decoded.strip()
        if cleaned and re.search(r"[A-Za-z0-9가-힣]", cleaned):
            return cleaned

    ascii_only = re.sub(r"[^ -~]", "", raw.decode("latin1", errors="ignore")).strip()
    return ascii_only


def simple_pdf_text_extract(path: Path) -> str:
    data = path.read_bytes()
    candidates: list[str] = []

    for match in re.finditer(rb"stream\r?\n(.*?)\r?\nendstream", data, re.S):
        raw_stream = match.group(1)
        try:
            decoded_stream = zlib.decompress(raw_stream)
        except zlib.error:
            continue
        if b"BT" not in decoded_stream and b"Tj" not in decoded_stream and b"TJ" not in decoded_stream:
            continue

        text = decoded_stream.decode("latin1", errors="ignore")

        for actual in re.findall(r"/ActualText\s*\((.*?)\)", text, flags=re.S):
            decoded = decode_pdf_literal(actual).strip()
            if decoded:
                candidates.append(decoded)

        for literal in re.findall(r"\((?:\\.|[^\\)])*\)\s*Tj", text):
            inner = literal.rsplit(")", 1)[0][1:]
            decoded = decode_pdf_literal(inner).strip()
            if decoded:
                candidates.append(decoded)

        for array_match in re.findall(r"\[(.*?)\]\s*TJ", text, flags=re.S):
            for literal in re.findall(r"\((?:\\.|[^\\)])*\)", array_match):
                inner = literal[1:-1]
                decoded = decode_pdf_literal(inner).strip()
                if decoded:
                    candidates.append(decoded)

        for hex_match in re.findall(r"<([0-9A-Fa-f]+)>\s*Tj", text):
            decoded = decode_pdf_hex(hex_match).strip()
            if decoded and re.search(r"[A-Za-z0-9]", decoded):
                candidates.append(decoded)

    lines: list[str] = []
    seen: set[str] = set()
    for candidate in candidates:
        line = re.sub(r"\s+", " ", candidate).strip()
        if not line:
            continue
        if len(line) == 1 and line in {"#", "-", ".", "!", "?", ":"}:
            continue
        if " " not in line and not re.search(r"[A-Za-z가-힣0-9]{3,}", line):
            continue
        if line in seen:
            continue
        seen.add(line)
        lines.append(line)

    return plain_text_to_md("\n".join(lines))


def convert_pdf(path: Path) -> tuple[str, list[str]]:
    notes: list[str] = []
    extracted = simple_pdf_text_extract(path)
    if meaningful(extracted):
        return extracted, notes

    page_count = pdf_page_count(path)
    image_dir = TMP_ROOT / "pdf" / safe_token(path)
    if image_dir.exists():
        shutil.rmtree(image_dir)
    image_dir.mkdir(parents=True, exist_ok=True)

    first_page_png = image_dir / "page-1.png"
    run(["sips", "-s", "format", "png", str(path), "--out", str(first_page_png)], check=False)
    ocr_text = ocr_image(first_page_png) if first_page_png.exists() else ""

    if page_count > 1:
        notes.append(
            f"This PDF has {page_count} pages. Only partial text could be extracted locally, so the markdown may be incomplete."
        )
    else:
        notes.append("OCR was used for this PDF.")

    if meaningful(ocr_text):
        return ocr_text, notes

    fallback = "_Text extraction was not successful for this PDF in the current local environment._"
    return fallback, notes


def convert_hwp(path: Path) -> tuple[str, list[str]]:
    notes = ["Legacy HWP parsing is limited in this environment, so preview text was used where available."]
    text = path.read_bytes().decode("utf-16le", errors="ignore")
    hits = re.findall(r"[가-힣A-Za-z0-9][가-힣A-Za-z0-9 .,:;()\-_/\[\]]{5,}", text)

    cleaned_lines: list[str] = []
    seen: set[str] = set()
    for hit in hits:
        line = re.sub(r"\s+", " ", hit).strip()
        if not line or line in seen:
            continue
        seen.add(line)
        if line in HWP_SKIP_LINES:
            continue
        if line.startswith("BIN") or line.startswith("Section"):
            continue
        if "WIN32LEWindows" in line:
            continue
        if not any(char.isspace() for char in line):
            if re.search(r"\d", line):
                pass
            elif re.fullmatch(r"[A-Za-z][A-Za-z0-9 .,:;()_\-/\[\]]*", line):
                pass
            else:
                continue
        cleaned_lines.append(line)

    body = plain_text_to_md("\n".join(cleaned_lines))
    if len(cleaned_lines) <= 5:
        notes.append("Only minimal preview metadata was available from this HWP file.")
    return body or "_No preview text could be extracted from this HWP file._", notes


def convert_primary(path: Path) -> tuple[str, list[str]]:
    suffix = path.suffix.lower()
    if suffix == ".docx":
        return convert_docx(path)
    if suffix == ".txt":
        return convert_txt(path)
    if suffix == ".pptx":
        return convert_pptx(path)
    if suffix == ".pdf":
        return convert_pdf(path)
    if suffix == ".hwp":
        return convert_hwp(path)
    raise ValueError(f"Unsupported extension: {path.suffix}")


def build_markdown(
    title: str,
    source_files: list[Path],
    primary: Path,
    body: str,
    notes: list[str],
) -> str:
    lines = [f"# {title}", ""]
    lines.append("Source files: " + ", ".join(f"`{path.name}`" for path in sorted(source_files)))
    lines.append(f"Primary source: `{primary.name}`")
    if notes:
        lines.append("")
        lines.append("Notes:")
        lines.extend(f"- {note}" for note in notes)
    lines.append("")
    lines.append(body.strip() or "_No text could be extracted._")
    lines.append("")
    return "\n".join(lines)


def collect_groups() -> dict[Path, list[Path]]:
    groups: dict[Path, list[Path]] = defaultdict(list)
    for path in DOCS_ROOT.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() not in CONVERTIBLE_EXTS:
            continue
        groups[path.with_suffix("")].append(path)
    return dict(sorted(groups.items(), key=lambda item: str(item[0]).lower()))


def main() -> int:
    if not DOCS_ROOT.exists():
        print("docs directory was not found.", file=sys.stderr)
        return 1

    TMP_ROOT.mkdir(parents=True, exist_ok=True)
    groups = collect_groups()
    converted = 0

    for stem, source_files in groups.items():
        primary = choose_primary(source_files)
        body, notes = convert_primary(primary)
        target = stem.with_suffix(".md")

        markdown = build_markdown(stem.name, source_files, primary, body, notes)
        target.write_text(markdown, encoding="utf-8")

        for source_file in source_files:
            source_file.unlink()

        converted += 1
        print(f"converted {target.relative_to(ROOT)}")

    if TMP_ROOT.exists():
        shutil.rmtree(TMP_ROOT)

    print(f"converted groups: {converted}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
