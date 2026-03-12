#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
import os

# Set output encoding to UTF-8
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

from docx import Document
from fpdf import FPDF
from pathlib import Path

docx_file = r"C:\Users\ibcap\Documents\Programas\testes\EBOOK-SQUAD\squad-ebook\O-Perito-Aumentado.docx"
pdf_file = r"C:\Users\ibcap\Documents\Programas\testes\EBOOK-SQUAD\squad-ebook\O-Perito-Aumentado.pdf"

print("[INFO] Iniciando conversao de .docx para PDF...")
print("[INFO] Entrada: " + docx_file)

if not os.path.exists(docx_file):
    print("[ERROR] Arquivo nao encontrado: " + docx_file)
    sys.exit(1)

docx_size = os.path.getsize(docx_file)
print("[INFO] Tamanho do .docx: {:.0f} KB".format(docx_size / 1024))

try:
    # Read DOCX
    print("[INFO] Lendo conteudo do .docx...")
    doc = Document(docx_file)

    # Create PDF
    print("[INFO] Gerando PDF...")
    pdf = FPDF()
    pdf.add_page()
    pdf.set_margins(left=20, top=20, right=20)

    # Use Unicode font
    pdf.add_font('DejaVu', '', 'DejaVuSans.ttf', uni=True)
    pdf.add_font('DejaVu-Bold', '', 'DejaVuSans-Bold.ttf', uni=True)

    pdf.set_font('DejaVu', '', 11)

    page_count = 0
    for para in doc.paragraphs:
        if para.text.strip():
            text = para.text

            # Handle headings
            if 'Heading' in para.style.name:
                if 'Heading 1' in para.style.name:
                    pdf.set_font('DejaVu-Bold', '', 14)
                    pdf.set_text_color(31, 78, 120)
                else:
                    pdf.set_font('DejaVu-Bold', '', 12)
                    pdf.set_text_color(46, 117, 182)
            else:
                pdf.set_font('DejaVu', '', 11)
                pdf.set_text_color(0, 0, 0)

            # Add text
            try:
                pdf.multi_cell(0, 5, text)
                pdf.ln(1)
            except Exception as e:
                # Skip if text causes issues
                print("[WARN] Skipping problematic text: " + str(e))

        # Check for page breaks
        if para._element.pPr is not None:
            if para._element.pPr.pageBreakBefore is not None:
                pdf.add_page()
                page_count += 1

    # Save PDF
    pdf.output(pdf_file)
    pdf_size = os.path.getsize(pdf_file)

    print("")
    print("[OK] Conversao concluida com sucesso!")
    print("[INFO] Arquivo PDF: " + pdf_file)
    print("[INFO] Tamanho do PDF: {:.2f} MB".format(pdf_size / 1024 / 1024))
    print("")
    print("[SUCCESS] Seu ebook esta pronto em dois formatos:")
    print("   .docx - Para edicao em Microsoft Word ({:.0f} KB)".format(docx_size / 1024))
    print("   .pdf  - Para leitura e distribuicao ({:.2f} MB)".format(pdf_size / 1024 / 1024))

except Exception as e:
    print("[ERROR] Erro na conversao: " + str(e))
    import traceback
    traceback.print_exc()
    sys.exit(1)
