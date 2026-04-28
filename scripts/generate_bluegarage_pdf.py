from __future__ import annotations

import argparse
import html
import re
from datetime import datetime
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, StyleSheet1, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


SOURCE_DEFAULT = Path("docs/bluegarage/bluegarage_final.md")
OUTPUT_DEFAULT = Path("output/pdf/bluegarage_final.pdf")


def find_korean_font() -> Path:
    candidates = [
        Path("/System/Library/Fonts/Supplemental/AppleGothic.ttf"),
        Path("/System/Library/Fonts/Supplemental/NotoSansGothic-Regular.ttf"),
    ]
    for candidate in candidates:
        if candidate.exists():
            return candidate
    raise FileNotFoundError("A Korean-capable font was not found on this system.")


def register_fonts() -> tuple[str, str]:
    body_font = "BlueGarageSans"
    accent_font = "BlueGarageAccent"
    font_path = find_korean_font()
    pdfmetrics.registerFont(TTFont(body_font, str(font_path)))
    pdfmetrics.registerFont(TTFont(accent_font, str(font_path)))
    return body_font, accent_font


def build_styles(body_font: str, accent_font: str) -> StyleSheet1:
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="DocTitle",
            parent=styles["Title"],
            fontName=accent_font,
            fontSize=23,
            leading=30,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#111827"),
            spaceAfter=6,
        )
    )
    styles.add(
        ParagraphStyle(
            name="DocSubtitle",
            parent=styles["BodyText"],
            fontName=body_font,
            fontSize=9.5,
            leading=14,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#4B5563"),
            spaceAfter=18,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Body",
            parent=styles["BodyText"],
            fontName=body_font,
            fontSize=10.5,
            leading=17,
            textColor=colors.HexColor("#1F2937"),
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Section",
            parent=styles["Heading2"],
            fontName=accent_font,
            fontSize=15,
            leading=20,
            textColor=colors.HexColor("#0F766E"),
            spaceBefore=16,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Subsection",
            parent=styles["Heading3"],
            fontName=accent_font,
            fontSize=12.5,
            leading=17,
            textColor=colors.HexColor("#1D4ED8"),
            spaceBefore=8,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="MinorHeading",
            parent=styles["Heading4"],
            fontName=accent_font,
            fontSize=11,
            leading=15,
            textColor=colors.HexColor("#111827"),
            spaceBefore=6,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Quote",
            parent=styles["BodyText"],
            fontName=body_font,
            fontSize=10,
            leading=16,
            leftIndent=8,
            rightIndent=8,
            textColor=colors.HexColor("#111827"),
            backColor=colors.HexColor("#F3F4F6"),
            borderPadding=8,
            spaceBefore=4,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SummaryLabel",
            parent=styles["BodyText"],
            fontName=accent_font,
            fontSize=10,
            leading=14,
            textColor=colors.HexColor("#0F766E"),
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SummaryValue",
            parent=styles["BodyText"],
            fontName=body_font,
            fontSize=10,
            leading=15,
            textColor=colors.HexColor("#111827"),
        )
    )
    return styles


def format_inline(text: str) -> str:
    escaped = html.escape(text, quote=False)
    escaped = re.sub(
        r"\*\*(.+?)\*\*",
        r"<font color='#0F766E'>\1</font>",
        escaped,
    )
    escaped = re.sub(
        r"`([^`]+)`",
        r"<font color='#4338CA'>\1</font>",
        escaped,
    )
    return escaped


def make_summary_table(styles: StyleSheet1) -> Table:
    rows = [
        ("적용 범위", "/creative 포트폴리오를 Blue Garage AI Artist / Creative Planning 기준으로 최종 정렬"),
        ("핵심 원칙", "Landing Hero / Hiring Signal 유지, AHEYA는 과장 없이 live product + identity system으로 정리, Andersson Bell은 실제 기여 범위 기준으로 정정"),
        ("1순위", "Landing 유지, AHEYA one-liner 통합, GitHub collaboration 문구 삭제, Visual Surfaces intro 수정, Andersson Bell copy 정정"),
        ("판단 기준", "직무 적합성이 빠르게 읽히고, AHEYA와 Andersson Bell의 강점이 과장 없이 정확하게 전달되어야 함"),
    ]
    table_data = []
    for label, value in rows:
        table_data.append(
            [
                Paragraph(format_inline(label), styles["SummaryLabel"]),
                Paragraph(format_inline(value), styles["SummaryValue"]),
            ]
        )

    summary_table = Table(table_data, colWidths=[35 * mm, 135 * mm], hAlign="LEFT")
    summary_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F8FAFC")),
                ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#CBD5E1")),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#E2E8F0")),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    return summary_table


def parse_markdown_story(markdown_text: str, styles: StyleSheet1) -> list:
    story = []
    lines = markdown_text.splitlines()
    paragraph_buffer: list[str] = []
    bullet_buffer: list[str] = []
    number_buffer: list[str] = []

    def flush_paragraph() -> None:
        if not paragraph_buffer:
            return
        text = " ".join(line.strip() for line in paragraph_buffer).strip()
        paragraph_buffer.clear()
        if not text:
            return
        if text.startswith("`") and text.endswith("`") and text.count("`") == 2:
            story.append(Paragraph(format_inline(text[1:-1]), styles["Quote"]))
            return
        story.append(Paragraph(format_inline(text), styles["Body"]))

    def flush_bullets() -> None:
        if not bullet_buffer:
            return
        items = [
            ListItem(Paragraph(format_inline(item), styles["Body"]), leftIndent=6)
            for item in bullet_buffer
        ]
        bullet_buffer.clear()
        story.append(
            ListFlowable(
                items,
                bulletType="bullet",
                start="circle",
                leftIndent=14,
            )
        )
        story.append(Spacer(1, 4))

    def flush_numbers() -> None:
        if not number_buffer:
            return
        items = [
            ListItem(Paragraph(format_inline(item), styles["Body"]), value=index + 1)
            for index, item in enumerate(number_buffer)
        ]
        number_buffer.clear()
        story.append(
            ListFlowable(
                items,
                bulletType="1",
                leftIndent=14,
            )
        )
        story.append(Spacer(1, 4))

    for raw_line in lines:
        line = raw_line.rstrip()
        stripped = line.strip()

        if not stripped:
            flush_paragraph()
            flush_bullets()
            flush_numbers()
            story.append(Spacer(1, 3))
            continue

        if stripped == "---":
            flush_paragraph()
            flush_bullets()
            flush_numbers()
            story.append(Spacer(1, 4))
            story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#CBD5E1")))
            story.append(Spacer(1, 8))
            continue

        if stripped.startswith("# "):
            continue

        if stripped.startswith("## "):
            flush_paragraph()
            flush_bullets()
            flush_numbers()
            story.append(Paragraph(format_inline(stripped[3:]), styles["Section"]))
            continue

        if stripped.startswith("### "):
            flush_paragraph()
            flush_bullets()
            flush_numbers()
            story.append(Paragraph(format_inline(stripped[4:]), styles["Subsection"]))
            continue

        numbered = re.match(r"^\d+\.\s+(.*)$", stripped)
        if numbered:
            flush_paragraph()
            flush_bullets()
            number_buffer.append(numbered.group(1))
            continue

        bullet = re.match(r"^-\s+(.*)$", stripped)
        if bullet:
            flush_paragraph()
            flush_numbers()
            bullet_buffer.append(bullet.group(1))
            continue

        if stripped.endswith(":") and not stripped.startswith("`"):
            flush_paragraph()
            flush_bullets()
            flush_numbers()
            story.append(Paragraph(format_inline(stripped), styles["MinorHeading"]))
            continue

        paragraph_buffer.append(stripped)

    flush_paragraph()
    flush_bullets()
    flush_numbers()
    return story


def build_story(source_path: Path, styles: StyleSheet1) -> list:
    markdown_text = source_path.read_text(encoding="utf-8")
    title = markdown_text.splitlines()[0].lstrip("# ").strip()
    generated_at = datetime.now().strftime("%Y-%m-%d %H:%M")

    story = [
        Spacer(1, 30),
        Paragraph(format_inline(title), styles["DocTitle"]),
        Paragraph(
            f"Source: {html.escape(source_path.as_posix())}<br/>Generated: {html.escape(generated_at)} KST",
            styles["DocSubtitle"],
        ),
        make_summary_table(styles),
        Spacer(1, 14),
        Paragraph(format_inline("상세 지시서"), styles["Section"]),
        Spacer(1, 2),
    ]
    story.extend(parse_markdown_story(markdown_text, styles))
    return story


def draw_footer(canvas, doc) -> None:
    canvas.saveState()
    canvas.setFillColor(colors.white)
    canvas.rect(0, 0, doc.pagesize[0], doc.pagesize[1], stroke=0, fill=1)
    canvas.setStrokeColor(colors.HexColor("#E5E7EB"))
    canvas.line(doc.leftMargin, 12 * mm, doc.pagesize[0] - doc.rightMargin, 12 * mm)
    canvas.setFillColor(colors.HexColor("#6B7280"))
    canvas.setFont("Helvetica", 8)
    canvas.drawString(doc.leftMargin, 8 * mm, "Blue Garage Portfolio Directive")
    canvas.drawRightString(doc.pagesize[0] - doc.rightMargin, 8 * mm, f"Page {doc.page}")
    canvas.restoreState()


def generate_pdf(source_path: Path, output_path: Path) -> Path:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    body_font, accent_font = register_fonts()
    styles = build_styles(body_font, accent_font)
    story = build_story(source_path, styles)
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=18 * mm,
        title="Blue Garage Portfolio Directive",
        author="Codex",
    )
    doc.build(story, onFirstPage=draw_footer, onLaterPages=draw_footer)
    return output_path


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate a styled PDF from the Blue Garage directive markdown.")
    parser.add_argument("--source", type=Path, default=SOURCE_DEFAULT)
    parser.add_argument("--output", type=Path, default=OUTPUT_DEFAULT)
    args = parser.parse_args()

    output_path = generate_pdf(args.source, args.output)
    print(output_path)


if __name__ == "__main__":
    main()
