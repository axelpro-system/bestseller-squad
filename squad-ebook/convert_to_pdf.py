#!/usr/bin/env python3
"""
Convert .docx to PDF using python-docx and fpdf2
"""

from docx import Document
from fpdf import FPDF
import os
from pathlib import Path

def read_docx(docx_path):
    """Extract text and basic structure from DOCX"""
    doc = Document(docx_path)
    content = []

    for para in doc.paragraphs:
        if para.text.strip():
            # Get style/heading info
            style = para.style.name
            is_heading = 'Heading' in style
            content.append({
                'text': para.text,
                'is_heading': is_heading,
                'style': style,
                'page_break': False
            })
        # Check for page break
        if para._element.pPr is not None:
            if para._element.pPr.pageBreakBefore is not None:
                if content:
                    content[-1]['page_break'] = True

    return content

def create_pdf(content, output_path):
    """Create PDF from extracted content"""
    pdf = FPDF()
    pdf.add_page()
    pdf.set_margins(left=20, top=20, right=20)

    # Define fonts
    pdf.add_font('Calibri', '', 'Calibri.ttf', uni=True)
    pdf.set_font('Calibri', '', 12)

    for item in content:
        text = item['text']

        # Handle headings
        if item['is_heading']:
            if 'Heading 1' in item['style']:
                pdf.set_font('Calibri', 'B', 16)
                pdf.set_text_color(31, 78, 120)  # Dark blue
                pdf.ln(2)
            elif 'Heading 2' in item['style']:
                pdf.set_font('Calibri', 'B', 14)
                pdf.set_text_color(46, 117, 182)  # Medium blue
                pdf.ln(1)
            else:
                pdf.set_font('Calibri', 'B', 12)
        else:
            pdf.set_font('Calibri', '', 11)
            pdf.set_text_color(0, 0, 0)  # Black

        # Add text with word wrap
        pdf.multi_cell(0, 5, text)
        pdf.ln(1)

        # Handle page breaks
        if item.get('page_break'):
            pdf.add_page()

    pdf.output(output_path)
    return output_path

# Main execution
if __name__ == "__main__":
    docx_file = r"C:\Users\ibcap\Documents\Programas\testes\EBOOK-SQUAD\squad-ebook\O-Perito-Aumentado.docx"
    pdf_file = r"C:\Users\ibcap\Documents\Programas\testes\EBOOK-SQUAD\squad-ebook\O-Perito-Aumentado.pdf"

    print("📄 Iniciando conversão de .docx para PDF...")
    print(f"📁 Entrada: {docx_file}")

    if not os.path.exists(docx_file):
        print(f"❌ Arquivo não encontrado: {docx_file}")
        exit(1)

    docx_size = os.path.getsize(docx_file)
    print(f"📊 Tamanho do .docx: {docx_size / 1024:.0f} KB")

    try:
        # Read DOCX
        print("📖 Lendo conteúdo do .docx...")
        content = read_docx(docx_file)
        print(f"   ✓ {len(content)} parágrafos extraídos")

        # Create PDF
        print("🖨️  Gerando PDF...")
        pdf_output = create_pdf(content, pdf_file)

        pdf_size = os.path.getsize(pdf_file)
        print(f"\n✅ Conversão concluída com sucesso!")
        print(f"📄 Arquivo PDF: {pdf_file}")
        print(f"📊 Tamanho do PDF: {pdf_size / 1024 / 1024:.2f} MB")
        print(f"\n✨ Seu ebook está pronto em dois formatos:")
        print(f"   .docx — Para edição em Microsoft Word ({docx_size / 1024:.0f} KB)")
        print(f"   .pdf  — Para leitura e distribuição ({pdf_size / 1024 / 1024:.2f} MB)")

    except Exception as e:
        print(f"❌ Erro na conversão: {e}")
        import traceback
        traceback.print_exc()
        exit(1)
