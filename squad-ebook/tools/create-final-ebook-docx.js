const { Document, Packer, Paragraph, TextRun, PageBreak, HeadingLevel, AlignmentType, PageNumber, Footer } = require('docx');
const fs = require('fs');
const path = require('path');

// Read the compiled complete content
const compiledFile = path.resolve("O-Perito-Aumentado-COMPLETO.txt");
const compiledContent = fs.readFileSync(compiledFile, 'utf-8');

// Split by page breaks
const sections = compiledContent.split('---PAGE BREAK---').map(s => s.trim()).filter(s => s);

console.log(`[INFO] Lendo conteudo compilado...`);
console.log(`[INFO] Total de secoes: ${sections.length}`);

// Chapter structure
const chapters = [
  { title: "Introdução", number: 0 },
  { title: "Capítulo 1: A Virada Silenciosa", number: 1 },
  { title: "Capítulo 2: Por Que o Claude?", number: 2 },
  { title: "Capítulo 3: Resolução CNJ 615/2025", number: 3 },
  { title: "Capítulo 4: Setup do Perito", number: 4 },
  { title: "Capítulo 5: Método Delta", number: 5 },
  { title: "Capítulo 6: Engenharia de Prompts", number: 6 },
  { title: "Capítulo 7: Perícia Contábil-Fiscal", number: 7 },
  { title: "Capítulo 8: Perícia Trabalhista-Econômica", number: 8 },
  { title: "Capítulo 9: Assistente Técnico", number: 9 },
  { title: "Capítulo 10: Perícia Digital-Documental", number: 10 },
  { title: "Capítulo 11: Laudo Irrefutável", number: 11 },
  { title: "Capítulo 12: Ética e Responsabilidade", number: 12 },
  { title: "Capítulo 13: Escritório do Futuro", number: 13 }
];

// Build document
let docChildren = [];

// Title Page
docChildren.push(
  new Paragraph({
    children: [new TextRun("")],
    spacing: { before: 600, after: 600 }
  }),
  new Paragraph({
    children: [new TextRun("")],
    spacing: { before: 600, after: 600 }
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: "O Perito Aumentado",
        bold: true,
        size: 56,
        color: "1F4E78"
      })
    ],
    spacing: { after: 240 }
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: "A Inteligência Artificial no Exercício da Perícia Judicial",
        italic: true,
        size: 28,
        color: "2E75B6"
      })
    ],
    spacing: { after: 600 }
  }),
  new Paragraph({
    children: [new TextRun("")],
    spacing: { before: 600, after: 600 }
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: "Com suporte de Claude AI",
        size: 24
      })
    ],
    spacing: { after: 400 }
  }),
  new Paragraph({
    children: [new TextRun("")]
  }),
  new Paragraph({
    children: [new PageBreak()]
  })
);

// Table of Contents
docChildren.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [
      new TextRun({
        text: "Índice",
        color: "1F4E78"
      })
    ],
    spacing: { after: 240 }
  })
);

chapters.forEach((ch, idx) => {
  docChildren.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `${idx + 1}. ${ch.title}`,
          size: 22
        })
      ],
      spacing: { after: 120 }
    })
  );
});

docChildren.push(
  new Paragraph({
    children: [new PageBreak()]
  })
);

// Add chapter content
sections.forEach((content, idx) => {
  if (idx < chapters.length) {
    const chapter = chapters[idx];
    
    // Chapter heading
    docChildren.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [
          new TextRun({
            text: chapter.title,
            color: "1F4E78",
            bold: true,
            size: 32
          })
        ],
        spacing: { before: 240, after: 240 }
      })
    );

    // Split content into paragraphs
    const lines = content.split('\n').filter(line => line.trim());
    lines.forEach(line => {
      if (line.trim()) {
        docChildren.push(
          new Paragraph({
            children: [
              new TextRun({
                text: line.trim(),
                size: 22
              })
            ],
            spacing: { line: 360, after: 120 }
          })
        );
      }
    });

    // Page break after each chapter (except last)
    if (idx < sections.length - 1) {
      docChildren.push(
        new Paragraph({
          children: [new PageBreak()]
        })
      );
    }
  }
});

// Create document with footer containing page numbers
const doc = new Document({
  sections: [{
    properties: {
      page: {
        margin: {
          top: 1440,
          right: 1440,
          bottom: 1440,
          left: 1440
        }
      }
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "Página ",
                size: 20
              }),
              new TextRun({
                children: [PageNumber.CURRENT],
                size: 20
              })
            ]
          })
        ]
      })
    },
    children: docChildren
  }]
});

// Save document
console.log("[INFO] Gerando arquivo DOCX...");
Packer.toBuffer(doc).then(buffer => {
  const outputPath = "O-Perito-Aumentado-COMPLETO.docx";
  fs.writeFileSync(outputPath, buffer);
  
  const fileSize = fs.statSync(outputPath).size;
  console.log(`\n[SUCCESS] Ebook DOCX gerado com sucesso!`);
  console.log(`[INFO] Arquivo: ${outputPath}`);
  console.log(`[INFO] Tamanho: ${(fileSize / 1024).toFixed(0)} KB`);
  console.log(`[INFO] Status: COMPLETO com indice e numeracao de paginas`);
});
