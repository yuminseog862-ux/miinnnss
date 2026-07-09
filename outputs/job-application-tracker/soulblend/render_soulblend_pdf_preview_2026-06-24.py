from pathlib import Path

import pypdfium2 as pdfium
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[3]
PDF = ROOT / "outputs/job-application-tracker/soulblend/soulblend-ai-experience-2026-06-24-rewrite.pdf"
OUT_DIR = ROOT / "outputs/job-application-tracker/soulblend/qa"


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    reader = PdfReader(str(PDF))
    print(f"pages={len(reader.pages)}")
    text = "\n".join(page.extract_text() or "" for page in reader.pages)
    print(f"chars={len(text)}")

    doc = pdfium.PdfDocument(str(PDF))
    for index, page in enumerate(doc, start=1):
        bitmap = page.render(scale=2)
        image = bitmap.to_pil()
        image.save(OUT_DIR / f"soulblend-ai-experience-2026-06-24-rewrite-page-{index}.png")


if __name__ == "__main__":
    main()
