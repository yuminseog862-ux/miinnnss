from __future__ import annotations

import html
import re
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parent
RESUME_SOURCE = ROOT / "gentlemonster-ai-experience-resume-content-final-2026-07-12.md"
COVER_SOURCE = ROOT / "gentlemonster-ai-experience-cover-letter-final-2026-07-12.md"
RESUME_PDF = ROOT / "Yuminseok_Yu_GENTLE_MONSTER_AI_Experience_Resume_2026-07-12.pdf"
COVER_PDF = ROOT / "Yuminseok_Yu_GENTLE_MONSTER_AI_Experience_Cover_Letter_2026-07-12.pdf"

FONT_PATH = "/System/Library/Fonts/Supplemental/AppleGothic.ttf"
FONT_NAME = "AppleGothicEmbedded"
INK = colors.HexColor("#111827")
MUTED = colors.HexColor("#5B6472")
ACCENT = colors.HexColor("#5B6F22")
LINE = colors.HexColor("#D8DEE8")


def register_font() -> None:
    if FONT_NAME not in pdfmetrics.getRegisteredFontNames():
        pdfmetrics.registerFont(TTFont(FONT_NAME, FONT_PATH))
        pdfmetrics.registerFontFamily(
            FONT_NAME,
            normal=FONT_NAME,
            bold=FONT_NAME,
            italic=FONT_NAME,
            boldItalic=FONT_NAME,
        )


def clean_inline(value: str) -> str:
    value = value.strip().replace("`", "").replace("**", "")
    return re.sub(r"\s{2,}", " ", value)


def xml_text(value: str) -> str:
    return html.escape(clean_inline(value), quote=False)


def page_number(canvas, document) -> None:
    canvas.saveState()
    canvas.setFont(FONT_NAME, 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(A4[0] - document.rightMargin, 11 * mm, f"PAGE {canvas.getPageNumber()}")
    canvas.restoreState()


def resume_styles() -> dict[str, ParagraphStyle]:
    return {
        "name": ParagraphStyle(
            "ResumeName",
            fontName=FONT_NAME,
            fontSize=22,
            leading=24,
            textColor=INK,
            spaceAfter=2,
            wordWrap="CJK",
        ),
        "role": ParagraphStyle(
            "ResumeRole",
            fontName=FONT_NAME,
            fontSize=10.8,
            leading=12.8,
            textColor=ACCENT,
            spaceAfter=3,
            wordWrap="CJK",
        ),
        "contact": ParagraphStyle(
            "ResumeContact",
            fontName=FONT_NAME,
            fontSize=8.2,
            leading=10,
            textColor=MUTED,
            spaceAfter=3,
            wordWrap="CJK",
        ),
        "section": ParagraphStyle(
            "ResumeSection",
            fontName=FONT_NAME,
            fontSize=10,
            leading=12,
            textColor=ACCENT,
            spaceBefore=6,
            spaceAfter=1.5,
            wordWrap="CJK",
        ),
        "body": ParagraphStyle(
            "ResumeBody",
            fontName=FONT_NAME,
            fontSize=8.3,
            leading=10.8,
            textColor=INK,
            spaceAfter=1.8,
            wordWrap="CJK",
            splitLongWords=True,
        ),
        "project": ParagraphStyle(
            "ResumeProject",
            fontName=FONT_NAME,
            fontSize=9.5,
            leading=11.8,
            textColor=INK,
            spaceBefore=3.8,
            spaceAfter=0.5,
            wordWrap="CJK",
        ),
        "meta": ParagraphStyle(
            "ResumeMeta",
            fontName=FONT_NAME,
            fontSize=7.6,
            leading=9.3,
            textColor=MUTED,
            spaceAfter=1,
            wordWrap="CJK",
        ),
        "bullet": ParagraphStyle(
            "ResumeBullet",
            fontName=FONT_NAME,
            fontSize=8,
            leading=10.25,
            leftIndent=3.8 * mm,
            firstLineIndent=-2.2 * mm,
            bulletIndent=0,
            textColor=INK,
            spaceAfter=1,
            wordWrap="CJK",
            splitLongWords=True,
        ),
        "link": ParagraphStyle(
            "ResumeLink",
            fontName=FONT_NAME,
            fontSize=7.8,
            leading=10,
            textColor=INK,
            spaceAfter=0.8,
            wordWrap="CJK",
        ),
    }


def section_heading(story: list, title: str, styles: dict[str, ParagraphStyle]) -> None:
    story.append(Paragraph(xml_text(title.upper()), styles["section"]))
    story.append(HRFlowable(width="100%", thickness=0.7, color=ACCENT, spaceAfter=2.5))


def build_resume_pdf() -> None:
    register_font()
    styles = resume_styles()
    lines = RESUME_SOURCE.read_text(encoding="utf-8").splitlines()
    story: list = []

    story.append(Paragraph(xml_text(lines[0].removeprefix("# ")), styles["name"]))
    story.append(Paragraph(xml_text(lines[2]), styles["role"]))
    story.append(Paragraph(xml_text(lines[3]), styles["contact"]))
    story.append(HRFlowable(width="100%", thickness=0.55, color=LINE, spaceAfter=2))

    index = 4
    while index < len(lines):
        line = lines[index].strip()
        if not line:
            index += 1
            continue
        if line.startswith("## "):
            section_heading(story, line[3:], styles)
            index += 1
            continue
        if line.startswith("### "):
            title = line[4:]
            meta = None
            bullets: list[str] = []
            cursor = index + 1
            while cursor < len(lines) and not lines[cursor].strip():
                cursor += 1
            if cursor < len(lines):
                candidate = lines[cursor].strip()
                if candidate and not candidate.startswith(("#", "-")):
                    meta = candidate
                    cursor += 1
            while cursor < len(lines):
                candidate = lines[cursor].strip()
                if candidate.startswith("#"):
                    break
                if candidate.startswith("- "):
                    bullets.append(candidate[2:])
                cursor += 1
            block = [Paragraph(xml_text(title), styles["project"])]
            if meta:
                block.append(Paragraph(xml_text(meta), styles["meta"]))
            for bullet in bullets:
                block.append(Paragraph(xml_text(bullet), styles["bullet"], bulletText="•"))
            story.append(KeepTogether(block))
            index = cursor
            continue
        if line.startswith("- "):
            content = clean_inline(line[2:])
            link_match = re.match(r"([^:]+): (https?://\S+)$", content)
            if link_match:
                label = html.escape(link_match.group(1), quote=False)
                url = html.escape(link_match.group(2), quote=True)
                story.append(
                    Paragraph(
                        f"<b>{label}:</b> <link href=\"{url}\" color=\"#5B6F22\">{url}</link>",
                        styles["link"],
                    )
                )
            else:
                story.append(Paragraph(xml_text(content), styles["bullet"], bulletText="•"))
            index += 1
            continue
        story.append(Paragraph(xml_text(line), styles["body"]))
        index += 1

    document = SimpleDocTemplate(
        str(RESUME_PDF),
        pagesize=A4,
        leftMargin=13 * mm,
        rightMargin=13 * mm,
        topMargin=11 * mm,
        bottomMargin=13 * mm,
        title="GENTLE MONSTER AI Experience Resume - Yuminseok Yu",
        author="Yuminseok Yu",
    )
    document.build(story, onFirstPage=page_number, onLaterPages=page_number)


def cover_styles() -> dict[str, ParagraphStyle]:
    return {
        "top": ParagraphStyle(
            "CoverTop",
            fontName=FONT_NAME,
            fontSize=8.8,
            leading=11,
            textColor=ACCENT,
            spaceAfter=4,
            wordWrap="CJK",
        ),
        "title": ParagraphStyle(
            "CoverTitle",
            fontName=FONT_NAME,
            fontSize=20,
            leading=25,
            textColor=INK,
            spaceBefore=8,
            spaceAfter=3,
            wordWrap="CJK",
        ),
        "applicant": ParagraphStyle(
            "CoverApplicant",
            fontName=FONT_NAME,
            fontSize=8.8,
            leading=11,
            textColor=MUTED,
            spaceAfter=13,
            wordWrap="CJK",
        ),
        "body": ParagraphStyle(
            "CoverBody",
            fontName=FONT_NAME,
            fontSize=9.4,
            leading=15.2,
            textColor=INK,
            alignment=TA_JUSTIFY,
            spaceAfter=8.2,
            wordWrap="CJK",
            splitLongWords=True,
            allowWidows=0,
            allowOrphans=0,
        ),
        "sign": ParagraphStyle(
            "CoverSign",
            fontName=FONT_NAME,
            fontSize=9.4,
            leading=12,
            textColor=ACCENT,
            alignment=TA_RIGHT,
            spaceBefore=4,
            wordWrap="CJK",
        ),
    }


def build_cover_pdf() -> None:
    register_font()
    styles = cover_styles()
    lines = COVER_SOURCE.read_text(encoding="utf-8").splitlines()
    title = lines[0].removeprefix("# ")
    paragraphs = [line for line in lines[1:] if line.strip()]
    story: list = [
        Paragraph("GENTLE MONSTER  |  AI EXPERIENCE", styles["top"]),
        HRFlowable(width="100%", thickness=0.8, color=ACCENT, spaceAfter=5),
        Paragraph(xml_text(title), styles["title"]),
        Paragraph("유민석  |  AI Experience / AI Creative", styles["applicant"]),
    ]
    for paragraph in paragraphs:
        story.append(Paragraph(xml_text(paragraph), styles["body"]))
    story.append(Paragraph("유민석", styles["sign"]))

    document = SimpleDocTemplate(
        str(COVER_PDF),
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=18 * mm,
        bottomMargin=18 * mm,
        title="GENTLE MONSTER AI Experience Cover Letter - Yuminseok Yu",
        author="Yuminseok Yu",
    )
    document.build(story, onFirstPage=page_number, onLaterPages=page_number)


if __name__ == "__main__":
    build_resume_pdf()
    build_cover_pdf()
    print(RESUME_PDF)
    print(COVER_PDF)
