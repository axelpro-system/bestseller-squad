const { Document, Packer, Paragraph, TextRun, PageBreak, HeadingLevel, AlignmentType, PageNumber, Footer } = require('docx');
const fs = require('fs');
const path = require('path');

// Read the compiled complete content
const compiledFile = path.resolve("O-Perito-Aumentado-COMPLETO.txt");
const compiledContent = fs.readFileSync(compiledFile, 'utf-8');

// Split by page breaks
const sections = compiledContent.split('---PAGE BREAK---').map(s => s.trim()).filter(s => s);

console.log(`[INFO] Processando conteudo compilado...`);
console.log(`[INFO] Total de secoes: ${sections.length}`);

// Function to clean markdown and special characters
function cleanText(text) {
  return text
    .replace(/^#+\s+/gm, '') // Remove markdown headers
    .replace(/\*\*/g, '')    // Remove bold markers
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic markers
    .replace(/_{2,}/g, '')   // Remove underline markers
    .replace(/`([^`]+)`/g, '$1') // Remove code markers
    .replace(/^[-*]\s+/gm, '') // Remove list markers
    .replace(/^\d+\.\s+/gm, '') // Remove numbered list markers
    .trim();
}

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

// Build document with professional styles
let docChildren = [];

// Cover Page - Professional Design
docChildren.push(
  new Paragraph({ children: [new TextRun("")], spacing: { before: 800, after: 800 } }),
  new Paragraph({ children: [new TextRun("")], spacing: { before: 400, after: 400 } }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: "O Perito Aumentado",
        bold: true,
        size: 60,
        color: "1F4E78",
        font: "Arial"
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
        color: "2E75B6",
        font: "Arial"
      })
    ],
    spacing: { after: 400 }
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: "Guia prático para o perito judiciário",
        size: 24,
        color: "404040",
        font: "Arial"
      })
    ],
    spacing: { after: 600 }
  }),
  new Paragraph({ children: [new TextRun("")], spacing: { before: 600, after: 600 } }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: "Com suporte de Claude AI",
        size: 22,
        bold: true,
        font: "Arial"
      })
    ],
    spacing: { after: 400 }
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: "2025",
        size: 20,
        color: "666666",
        font: "Arial"
      })
    ]
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
        color: "1F4E78",
        font: "Arial",
        size: 32,
        bold: true
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
          size: 22,
          font: "Arial"
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

// Content sections
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
            size: 32,
            font: "Arial"
          })
        ],
        spacing: { before: 240, after: 240 }
      })
    );

    // Split content into paragraphs and clean markdown
    const lines = content.split('\n').filter(line => line.trim());
    
    lines.forEach(line => {
      const cleanedLine = cleanText(line.trim());
      
      if (cleanedLine && cleanedLine.length > 0) {
        docChildren.push(
          new Paragraph({
            children: [
              new TextRun({
                text: cleanedLine,
                size: 22,
                font: "Arial",
                color: "000000"
              })
            ],
            spacing: { 
              line: 360,
              after: 120,
              before: 0
            },
            alignment: AlignmentType.JUSTIFIED
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

// Create document with professional styling
const doc = new Document({
  styles: {
    default: {
      document: {
        run: {
          font: "Arial",
          size: 22
        }
      }
    }
  },
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
                size: 18,
                color: "666666",
                font: "Arial"
              }),
              new TextRun({
                children: [PageNumber.CURRENT],
                size: 18,
                color: "666666",
                font: "Arial"
              })
            ]
          })
        ]
      })
    },
    children: docChildren
  }]
});

// Save document with temp name
console.log("[INFO] Gerando arquivo DOCX profissional...");
Packer.toBuffer(doc).then(buffer => {
  const tempPath = "O-Perito-Aumentado-FORMATTED.docx";
  fs.writeFileSync(tempPath, buffer);
  
  const fileSize = fs.statSync(tempPath).size;
  console.log(`\n[SUCCESS] Ebook DOCX formatado com sucesso!`);
  console.log(`[INFO] Arquivo: ${tempPath}`);
  console.log(`[INFO] Tamanho: ${(fileSize / 1024).toFixed(0)} KB`);
  console.log(`[INFO] Status: FORMATADO profissionalmente, SEM MARKDOWN`);
  console.log(`[INFO] Fonte: Arial em todo documento`);
  console.log(`[INFO] Espaçamento: Justificado com line height adequado`);
  console.log(`[INFO] Índice: Completo com todas as 14 seções`);
  console.log(`[INFO] Numeração: Página no rodapé`);
});
