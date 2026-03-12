const { Document, Packer, Paragraph, TextRun, PageBreak, HeadingLevel, AlignmentType } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 }
      }
    }
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: 1, // BULLET
            text: "•",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 720, hanging: 360 }
              }
            }
          }
        ]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // Title
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "Guia Prático para Iniciantes",
            bold: true,
            size: 48,
            color: "1F4E78",
            font: "Arial"
          })
        ],
        spacing: { after: 120 }
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "Bestseller Squad - Agentes de IA para Seu Negócio",
            italic: true,
            size: 28,
            color: "2E75B6",
            font: "Arial"
          })
        ],
        spacing: { after: 400 }
      }),

      // 1. Introdução
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [
          new TextRun({
            text: "1. O que é o Bestseller Squad?",
            bold: true,
            size: 28,
            color: "1F4E78",
            font: "Arial"
          })
        ],
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "O Bestseller Squad é uma plataforma de agentes de inteligência artificial que trabalham automaticamente para você. Pense em agentes como assistentes especializados: cada um tem uma função diferente e colaboram entre si para resolver problemas complexos.",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Principais benefícios para iniciantes:",
            bold: true,
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Automatiza tarefas repetitivas (economia de tempo real)", size: 22, font: "Arial" })],
        spacing: { after: 80 }
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Não requer experiência técnica prévia", size: 22, font: "Arial" })],
        spacing: { after: 80 }
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Reduz erros humanos em processos críticos", size: 22, font: "Arial" })],
        spacing: { after: 240 }
      }),

      // 2. Instalação
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [
          new TextRun({
            text: "2. Instalação e Configuração Inicial",
            bold: true,
            size: 28,
            color: "1F4E78",
            font: "Arial"
          })
        ],
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Requisitos do sistema:",
            bold: true,
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Node.js versão 18+ (download em nodejs.org)", size: 22, font: "Arial" })],
        spacing: { after: 80 }
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Git instalado (para clonar repositórios)", size: 22, font: "Arial" })],
        spacing: { after: 80 }
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Chave de API do Claude (solicitada no console)", size: 22, font: "Arial" })],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Passos de instalação:",
            bold: true,
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "1. Clone o repositório: git clone [url-do-projeto]",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "2. Instale dependências: npm install",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "3. Configure variáveis de ambiente no arquivo .env",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "4. Inicie com: npm start",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 240 }
      }),

      // 3. Como Funcionam os Agentes
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [
          new TextRun({
            text: "3. Como Funcionam os Agentes",
            bold: true,
            size: 28,
            color: "1F4E78",
            font: "Arial"
          })
        ],
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Cada agente é uma IA especializada em uma tarefa específica. Por exemplo:",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "@dev - escreve e testa código automaticamente", size: 22, font: "Arial" })],
        spacing: { after: 80 }
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "@architect - desenha arquitetura de sistemas", size: 22, font: "Arial" })],
        spacing: { after: 80 }
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "@qa - verifica qualidade e testa problemas", size: 22, font: "Arial" })],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Os agentes trabalham juntos em sequência: um prepara o trabalho, outro executa, o terceiro valida. Você apenas supervisiona!",
            italic: true,
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 240 }
      }),

      // 4. Melhores Técnicas
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [
          new TextRun({
            text: "4. Melhores Técnicas de Uso",
            bold: true,
            size: 28,
            color: "1F4E78",
            font: "Arial"
          })
        ],
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Descreva tarefas com clareza total. Em vez de 'crie um relatório', diga: 'crie relatório mensal de vendas de janeiro, com 5 produtos principais, gráficos de crescimento e comparação com dezembro'.",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Divida problemas grandes em tarefas menores para melhor controle. Use exemplos concretos para mostrar exatamente o resultado esperado.",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 240 }
      }),

      // 5. Guia Prático
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [
          new TextRun({
            text: "5. Seu Primeiro Projeto - Passo a Passo",
            bold: true,
            size: 28,
            color: "1F4E78",
            font: "Arial"
          })
        ],
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Exemplo: Criar um documento de relatório mensal",
            bold: true,
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "1. Descreva o objetivo com detalhes",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "2. Convoque o agente apropriado: @pm criar relatório",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "3. Acompanhe o processo em tempo real",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "4. Revise e solicite ajustes se necessário",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 60 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "5. Baixe o documento finalizado",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 240 }
      }),

      // 6. Troubleshooting
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [
          new TextRun({
            text: "6. Problemas Comuns e Soluções",
            bold: true,
            size: 28,
            color: "1F4E78",
            font: "Arial"
          })
        ],
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Agente não responde?",
            bold: true,
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Verifique: conexão com internet, chave de API configurada no .env, e se todos os serviços estão rodando.",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Resultado diferente do esperado?",
            bold: true,
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Reformule a instrução com MAIS detalhes e exemplos. Quanto mais específico for, melhor será o resultado.",
            size: 22,
            font: "Arial"
          })
        ],
        spacing: { after: 240 }
      }),

      // Conclusão
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [
          new TextRun({
            text: "Próximos Passos",
            bold: true,
            size: 28,
            color: "1F4E78",
            font: "Arial"
          })
        ],
        spacing: { before: 240, after: 120 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Comece com uma tarefa simples para ganhar confiança. Explore diferentes agentes e suas funções. Consulte a documentação oficial para recursos avançados.",
            size: 22,
            font: "Arial",
            alignment: AlignmentType.JUSTIFIED
          })
        ],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Boa sorte! O Bestseller Squad está aqui para tornar seu trabalho mais eficiente. 🚀",
            italic: true,
            bold: true,
            size: 24,
            color: "1F4E78",
            font: "Arial"
          })
        ]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("Guia-Iniciantes-Bestseller-Squad.docx", buffer);
  const size = require('fs').statSync("Guia-Iniciantes-Bestseller-Squad.docx").size;
  console.log("[SUCCESS] Guia para iniciantes criado!");
  console.log("[INFO] Arquivo: Guia-Iniciantes-Bestseller-Squad.docx");
  console.log("[INFO] Tamanho: " + (size/1024).toFixed(0) + " KB");
  console.log("[INFO] Status: PRONTO PARA USO");
});
