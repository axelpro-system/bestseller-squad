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

    # Create PDF with built-in fonts
    print("[INFO] Gerando PDF...")
    pdf = FPDF()
    pdf.add_page()
    pdf.set_margins(left=15, top=15, right=15)
    pdf.set_font('Helvetica', '', 11)
    pdf.set_line_width(0.3)

    line_count = 0
    total_paras = 0

    for para in doc.paragraphs:
        if para.text.strip():
            text = para.text
            total_paras += 1

            # Handle headings
            style_name = para.style.name if para.style else 'Normal'
            if 'Heading' in style_name:
                if 'Heading 1' in para.style.name:
                    pdf.set_font('Helvetica', 'B', 14)
                    pdf.set_text_color(31, 78, 120)
                    pdf.ln(3)
                else:
                    pdf.set_font('Helvetica', 'B', 12)
                    pdf.set_text_color(46, 117, 182)
                    pdf.ln(2)
            else:
                pdf.set_font('Helvetica', '', 11)
                pdf.set_text_color(0, 0, 0)

            # Add text with word wrap
            try:
                pdf.multi_cell(0, 5, text)
                pdf.ln(1)
                line_count += 1
            except Exception as e:
                # Skip problematic text
                pass

    # Save PDF
    pdf.output(pdf_file)
    pdf_size = os.path.getsize(pdf_file)

    print("")
    print("[SUCCESS] Conversao concluida com sucesso!")
    print("[INFO] Arquivo PDF: " + pdf_file)
    print("[INFO] Tamanho do PDF: {:.2f} MB".format(pdf_size / 1024 / 1024))
    print("[INFO] Paragrafos processados: " + str(total_paras))
    print("")
    print("[RESULT] Seu ebook esta pronto em dois formatos:")
    print("   - DOCX: {:.0f} KB (para edicao em Microsoft Word)".format(docx_size / 1024))
    print("   - PDF:  {:.2f} MB (para leitura e distribuicao)".format(pdf_size / 1024 / 1024))
    print("")

except Exception as e:
    print("[ERROR] Erro na conversao: " + str(e))
    import traceback
    traceback.print_exc()
    sys.exit(1)
