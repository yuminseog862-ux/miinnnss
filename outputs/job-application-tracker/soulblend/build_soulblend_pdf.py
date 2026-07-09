from pathlib import Path
import re

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer


ROOT = Path(__file__).resolve().parents[3]
PACK = ROOT / "outputs/job-application-tracker/soulblend/soulblend-application-pack-2026-06-24-rewrite.md"
OUT = ROOT / "outputs/job-application-tracker/soulblend/soulblend-ai-experience-2026-06-24-rewrite.pdf"
FONT = Path("/System/Library/Fonts/Supplemental/AppleGothic.ttf")


def extract_ai_text() -> str:
    text = PACK.read_text(encoding="utf-8")
    marker = "## AI 활용 경험 A4 제출문"
    return text.split(marker, 1)[1].split("## 제출 후 기록", 1)[0].strip()


def para(text: str) -> str:
    text = text.strip()
    text = re.sub(r"\*\*(.*?)\*\*", r"<b>\1</b>", text)
    return text.replace("&", "&amp;").replace("<b>", "<b>").replace("</b>", "</b>")


def build() -> None:
    pdfmetrics.registerFont(TTFont("AppleGothic", str(FONT)))

    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=17 * mm,
        rightMargin=17 * mm,
        topMargin=15 * mm,
        bottomMargin=15 * mm,
        title="소울블렌드 AI 활용 경험 - 유민석",
        author="유민석",
    )

    styles = getSampleStyleSheet()
    title = ParagraphStyle(
        "KoreanTitle",
        parent=styles["Title"],
        fontName="AppleGothic",
        fontSize=15,
        leading=20,
        textColor=colors.HexColor("#111827"),
        spaceAfter=8,
    )
    body = ParagraphStyle(
        "KoreanBody",
        parent=styles["BodyText"],
        fontName="AppleGothic",
        fontSize=9.2,
        leading=13.2,
        textColor=colors.HexColor("#111827"),
        spaceAfter=7,
        firstLineIndent=0,
    )
    meta = ParagraphStyle(
        "KoreanMeta",
        parent=body,
        fontSize=8.2,
        leading=11,
        textColor=colors.HexColor("#4B5563"),
        alignment=1,
        spaceAfter=8,
    )

    raw = extract_ai_text()
    lines = raw.splitlines()
    title_text = lines[0].replace("#", "").strip()
    paragraphs = [line.strip() for line in lines[1:] if line.strip()]

    story = [
        Paragraph(para(title_text), title),
        Paragraph("소울블렌드 [인턴] 콘텐츠·인플루언서 마케터 지원자료 | 2026-06-24 수정본", meta),
    ]
    for block in paragraphs:
        story.append(Paragraph(para(block), body))
        story.append(Spacer(1, 1.5))

    doc.build(story)


if __name__ == "__main__":
    build()
