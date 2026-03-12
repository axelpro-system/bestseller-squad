#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Compile complete ebook with full chapter content
"""
import os
import re
from pathlib import Path

chapters_dir = Path(r"C:\Users\ibcap\Documents\Programas\testes\EBOOK-SQUAD\squad-ebook\squads\axelpro-system\bestseller-squad\chapters")
output_file = Path(r"C:\Users\ibcap\Documents\Programas\testes\EBOOK-SQUAD\squad-ebook\O-Perito-Aumentado-COMPLETO.txt")

print("[INFO] Compilando ebook com conteudo completo...")

files_to_process = [
    "00-intro.md",
    "01-cap1-a-virada-silenciosa.md",
    "02-cap2-por-que-o-claude.md",
    "03-cap3-resolucao-cnj-615-2025.md",
    "04-cap4-setup-do-perito.md",
    "05-cap5-metodo-delta.md",
    "06-cap6-engenharia-de-prompts.md",
    "07-cap7-pericia-contabil-fiscal.md",
    "08-cap8-pericia-trabalhista-economica.md",
    "09-cap9-assistente-tecnico.md",
    "10-cap10-pericia-digital-documental.md",
    "11-cap11-laudo-irrefutavel.md",
    "12-cap12-etica-responsabilidade.md",
    "13-cap13-escritorio-futuro.md",
]

combined_content = []
total_words = 0

for filename in files_to_process:
    filepath = chapters_dir / filename

    if not filepath.exists():
        print(f"[WARN] Arquivo nao encontrado: {filename}")
        continue

    print(f"[INFO] Processando: {filename}")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract content from markdown
    # Remove metadata (YAML front matter)
    if content.startswith("---"):
        parts = content.split("---", 3)
        if len(parts) >= 3:
            content = parts[2]

    # Extract Draft Content section
    if "## Draft Content" in content:
        draft_idx = content.find("## Draft Content")
        quality_idx = content.find("## Quality Check")

        if quality_idx > draft_idx:
            content = content[draft_idx + len("## Draft Content"):quality_idx]
        else:
            content = content[draft_idx + len("## Draft Content"):]
    elif "# " in content:
        # If no Draft Content section, extract everything after first heading
        first_heading = content.find("\n# ")
        if first_heading > 0:
            content = content[first_heading + 1:]
            # Remove Quality Check section
            quality_idx = content.find("\n## Quality Check")
            if quality_idx > 0:
                content = content[:quality_idx]

    # Clean up
    content = content.strip()
    if content:
        combined_content.append(content)
        word_count = len(content.split())
        total_words += word_count
        print(f"   [OK] {word_count} palavras")

# Save combined content
with open(output_file, 'w', encoding='utf-8') as f:
    f.write("\n\n---PAGE BREAK---\n\n".join(combined_content))

print(f"\n[SUCCESS] Compilacao concluida!")
print(f"[INFO] Total de palavras: {total_words}")
print(f"[INFO] Arquivo temporario: {output_file}")
