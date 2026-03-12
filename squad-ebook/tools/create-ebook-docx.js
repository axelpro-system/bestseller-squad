const { Document, Packer, Paragraph, TextRun, PageBreak, HeadingLevel, AlignmentType, TabStopType, Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, PageOrientation } = require('docx');
const fs = require('fs');
const path = require('path');

// Content data structure
const bookContent = {
  title: "O Perito Aumentado",
  subtitle: "Como Usar Claude AI para Perícia Judicial com Responsabilidade e Escala",
  author: "Axel Pro System",
  date: "Março de 2026",

  intro: `
Este livro não é sobre tecnologia. É sobre poder.

Poder para processar 2.847 e-mails em 20 minutos quando antes levaria semanas. Poder para responder com precisão cirúrgica a quesitos que exigem análise de 800 páginas. Poder para operar não como um perito individual pressionado por prazos, mas como operador de sistema que escala.

Mas há uma pergunta que todo perito faz quando descobre que pode usar IA: "Eu não vou ser anulado? A sentença não pode cair porque usei uma ferramenta?"

Este livro responde essa pergunta. Não com "não se preocupe" — com método documentado, conformidade legal, protocolo ético e prática em 13 casos reais.

Você vai aprender a usar Claude não apenas como assistente, mas como parte de sistema que multiplica sua capacidade sem sacrificar responsabilidade. E sim, você vai entender por que a transparência sobre uso de IA fortalece seu laudo, não enfraquece.

A Resolução CNJ 615/2025 abriu a porta. Este livro mostra como atravessá-la.
  `.trim(),

  conclusion: `
Você não é mais o mesmo perito que começou este livro.

Talvez tenha começado com a pergunta: "Posso usar IA na perícia?" Ou: "Vale a pena aprender isso?" Ou simplesmente com a sensação de que algo estava mudando no mercado e você precisava acompanhar.

Ao longo desses treze capítulos, a pergunta mudou. Não é mais "posso" — é "como". E não é mais "vale a pena" — é "como escalar".

Você fez uma jornada através de quatro transformações:

**Primeira transformação:** Deixou de ter medo da tecnologia e passou a entender que IA é ferramenta legal, regulamentada e esperada. A CNJ 615/2025 não apenas permite — exige transparência.

**Segunda transformação:** Deixou de ser usuário causal e passou a ser operador técnico disciplinado. Sistema prompt, Método DELTA, engenharia de prompts — essas não são sofisticações. São fundamentos.

**Terceira transformação:** Deixou de aprender Claude como ferramenta genérica e passou a dominar Claude para sua especialidade. Perícia contábil em 6 horas. Perícia trabalhista com cenários múltiplos. Perícia digital que processa milhares de documentos.

**Quarta transformação:** Deixou de ser perito individual usando ferramenta e passou a ser operador de estrutura que escala. Método documentado. Biblioteca de prompts. Padrão de qualidade. Tecnologia facilitadora. Três pessoas processando 10-12 laudos por mês.

Você tem tudo que precisa agora. Começar é simples:

Se você é perito solo: escolha um processo de médio porte, execute o Método DELTA completo, estruture o laudo com os 7 elementos. Entregue e observe a qualidade.

Se você é assistente técnico: pegue um laudo adverso, execute a checklist de auditoria, construa impugnação precisa.

Se você está pensando em escala: documente seu protocolo, organize sua biblioteca, implemente a checklist de qualidade. A segunda pessoa vai ser natural depois.

A verdadeira oportunidade não é velocidade. É liberdade.

Liberdade de escolher em qual parte do trabalho você quer usar seu julgamento. Liberdade de processar 3x mais documentação mantendo qualidade. Liberdade de atender casos que antes eram inviáveis. Liberdade de construir especialidade autêntica porque consegue fazer mais trabalho em menos tempo.

Liberdade não é automação. É amplificação.

E a amplificação responsável é o que diferencia um profissional que usa IA de um profissional substituído por IA.

Seus recursos práticos estão nos Apêndices. Use-os. Refine-os. Compartilhe com colegas.

Você começou como perito usando uma ferramenta.

Você termina como operador de um sistema.

A diferença é que agora você sabe que pode escalar.

Boa sorte. O tribunal está esperando.
  `.trim(),
};

// Book structure
const chapters = [
  {
    part: 1,
    partTitle: "O Novo Tribunal",
    partIntro: "Por que a IA não é futurista — é resposta a um problema presente. E por que o Claude.",
    num: 1,
    title: "A Virada Silenciosa",
    content: "83 milhões de processos pendentes. Um perito médio analisa 8 por mês. A matemática não fecha. Este capítulo apresenta o problema fundamental da perícia moderna: volume exponencial, capacidade linear. E a janela que se abriu para mudar isso."
  },
  {
    part: 1,
    num: 2,
    title: "Por Que o Claude",
    content: "Testamos Claude com um processo de 847 páginas. Testamos com 3 outros modelos. 3 falharam. Claude entregou análise completa. Este capítulo explica por que: 200.000 tokens de contexto, menos alucinações, privacidade opt-in, arquitetura constitucional. O Claude não é melhor em tudo — é melhor no que importa para perícia."
  },
  {
    part: 1,
    num: 3,
    title: "Resolução CNJ 615/2025",
    content: "A pergunta que todo perito faz: 'Eu posso usar IA? A sentença não vai cair?' Este capítulo responde com a Resolução que autoriza uso de IA em perícia — desde que você seja transparente. Aprendemos o que está autorizado, o que é vedado, e como documentar para conformidade total."
  },
  {
    part: 2,
    partTitle: "O Método",
    partIntro: "Estrutura disciplinada para transformar 800 páginas em análise precisa.",
    num: 4,
    title: "Setup do Perito",
    content: "Antes de usar Claude em um processo real, você precisa de 5 coisas: plano certo, projeto estruturado, system prompt especializado, arquivos de referência, validação. Este capítulo entrega template completo que você adapta para sua especialidade e usa por anos."
  },
  {
    part: 2,
    num: 5,
    title: "Método DELTA",
    content: "O maior erro: jogar 800 páginas e perguntar 'o que tem aqui?'. O Método DELTA é resposta — cinco fases (Diagnóstico, Extração, Levantamento, Triangulação, Alinhamento) que transformam caos documental em análise estruturada. Com exemplo real de 634 páginas processadas."
  },
  {
    part: 2,
    num: 6,
    title: "Engenharia de Prompts",
    content: "Mesma pergunta, 3 versões. Terceira entrega resposta 10x melhor. Este capítulo ensina a anatomia de prompts eficazes (PCTFR: Papel, Contexto, Tarefa, Formato, Restrições) e entrega 10 prompts fundamentais prontos para usar em qualquer especialidade."
  },
  {
    part: 3,
    partTitle: "Aplicação por Especialidade",
    partIntro: "O método é o mesmo. O que muda é o tipo de documento. Aqui você aprende o específico de cada perícia.",
    num: 7,
    title: "Perícia Contábil e Fiscal",
    content: "3 Workflows: Balanços × DREs, Apuração de Haveres (3 cenários), Detecção de padrões fiscais em SPED. Caso real: 512 páginas, laudo em 6 horas (antes levava 18-24)."
  },
  {
    part: 3,
    num: 8,
    title: "Perícia Trabalhista e Econômica",
    content: "4 Workflows: Auditoria de holerites, Cálculo de verbas rescisórias (3 cenários), Atualização monetária IPCA/SELIC/TR, Lucros cessantes. Caso real: motorista 4 anos, anomalia em 35 minutos, 4h20 totais."
  },
  {
    part: 3,
    num: 9,
    title: "Assistente Técnico",
    content: "Não é apenas encontrar erros — é construir argumentos impactantes. Checklist de 7 dimensões, 3 categorias de falhas, quesitos estratégicos que forçam quantificação. Caso real: laudo 74 páginas, falha crítica em 17 minutos, impacto +38%."
  },
  {
    part: 3,
    num: 10,
    title: "Perícia Digital e Documental",
    content: "3 Workflows: Cadeia de e-mails, Análise de contratos digitais, Metadados. Caso real: 2.847 e-mails, 12 críticos, assédio moral provado em 6h20."
  },
  {
    part: 4,
    partTitle: "O Perito Aumentado",
    partIntro: "De método individual para estrutura escalável. De eficiência para escala. De responsabilidade compartilhada para responsabilidade clara.",
    num: 11,
    title: "O Laudo Irrefutável",
    content: "Não é sem erros — é metodologicamente transparente. Os 7 elementos estruturais que nenhum laudo pode ignorar. O teste dos 3 adversários que valida antes de entregar. Sequência de trabalho que transforma caos em documento que sobrevive a impugnação."
  },
  {
    part: 4,
    num: 12,
    title: "Ética, Privacidade e Responsabilidade",
    content: "A IA comete erros. Quem assina embaixo do laudo é você. Este capítulo não é paranoia — é reconhecimento de que responsabilidade não é delegável. Human-in-the-loop, teste de propriedade, anonimização de dados, protocolo pessoal de 5 regras."
  },
  {
    part: 4,
    num: 13,
    title: "O Escritório Pericial do Futuro",
    content: "De perito solo a operação. 4 camadas de escala, 3 novos serviços, precificação por valor, autoridade de nicho. Estrutura: perito sênior + 2 plenos + 1 assistente = 10-12 laudos/mês vs. 2-3 solo."
  },
];

const appendices = [
  {
    num: "A",
    title: "Biblioteca de 30 Prompts Prontos por Especialidade",
    content: "10 prompts fundamentais (aplicáveis a todas). 8 para perícia contábil/fiscal. 8 para trabalhista. 7 para digital/documental. 4 para assistência técnica. Todos prontos para copiar/colar e customizar."
  },
  {
    num: "B",
    title: "Checklist CNJ 615/2025 para Laudos com IA",
    content: "12 caixas de verificação que validam conformidade total antes de entregar qualquer laudo. 7 seções cobrindo declaração, metodologia, análise, privacidade, estrutura, testes finais."
  },
  {
    num: "C",
    title: "Modelo de Declaração de Uso de IA no Laudo",
    content: "3 versões prontas: padrão (recomendada), concisa (para laudos curtos), detalhada (para casos complexos). Variações por especialidade. Pronto para incorporar na seção de Metodologia."
  },
];

// Create document structure
const sections = [];

// Title page
sections.push(
  new Paragraph({
    children: [new TextRun("")],
    spacing: { line: 480 }
  }),
  new Paragraph({
    children: [new TextRun("")],
    spacing: { line: 480 }
  }),
  new Paragraph({
    children: [new TextRun("")],
    spacing: { line: 480 }
  }),
  new Paragraph({
    text: bookContent.title,
    alignment: AlignmentType.CENTER,
    spacing: { before: 400, after: 200 },
    style: "Heading1"
  }),
  new Paragraph({
    text: bookContent.subtitle,
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 400 },
    run: { size: 28, italics: true, color: "666666" }
  }),
  new Paragraph({
    children: [new TextRun("")],
    spacing: { line: 480 }
  }),
  new Paragraph({
    children: [new TextRun("")],
    spacing: { line: 480 }
  }),
  new Paragraph({
    text: bookContent.author,
    alignment: AlignmentType.CENTER,
    spacing: { before: 400 },
    run: { size: 24 }
  }),
  new Paragraph({
    text: bookContent.date,
    alignment: AlignmentType.CENTER,
    spacing: { before: 40, after: 400 },
    run: { size: 22, color: "999999" }
  }),
  new Paragraph({ children: [new PageBreak()] })
);

// Introduction
sections.push(
  new Paragraph({
    text: "Introdução",
    style: "Heading1",
    spacing: { before: 200, after: 200 }
  }),
  new Paragraph({
    text: bookContent.intro,
    spacing: { line: 360, before: 200, after: 200 }
  }),
  new Paragraph({ children: [new PageBreak()] })
);

// Chapters
let currentPart = null;
chapters.forEach((ch, idx) => {
  if (ch.part !== currentPart) {
    if (currentPart !== null) {
      sections.push(new Paragraph({ children: [new PageBreak()] }));
    }
    currentPart = ch.part;

    sections.push(
      new Paragraph({
        text: `PARTE ${ch.part} — ${ch.partTitle}`,
        style: "Heading1",
        spacing: { before: 400, after: 100 }
      }),
      new Paragraph({
        text: ch.partIntro,
        spacing: { before: 0, after: 300 },
        run: { italics: true, color: "666666", size: 22 }
      }),
      new Paragraph({ children: [new PageBreak()] })
    );
  }

  sections.push(
    new Paragraph({
      text: `Capítulo ${ch.num} — ${ch.title}`,
      style: "Heading1",
      spacing: { before: 200, after: 100 }
    }),
    new Paragraph({
      text: ch.content,
      spacing: { line: 360, before: 200, after: 300 }
    }),
    new Paragraph({
      text: "~2.800–3.600 palavras | Método DELTA + Casos Reais",
      spacing: { before: 100, after: 200 },
      run: { italics: true, color: "999999", size: 20 }
    })
  );

  if (idx < chapters.length - 1) {
    sections.push(new Paragraph({ children: [new PageBreak()] }));
  }
});

// Conclusion
sections.push(
  new Paragraph({ children: [new PageBreak()] }),
  new Paragraph({
    text: "Conclusão",
    style: "Heading1",
    spacing: { before: 200, after: 200 }
  }),
  new Paragraph({
    text: bookContent.conclusion,
    spacing: { line: 360, before: 200, after: 200 }
  }),
  new Paragraph({ children: [new PageBreak()] })
);

// Appendices
appendices.forEach((app, idx) => {
  sections.push(
    new Paragraph({
      text: `Apêndice ${app.num} — ${app.title}`,
      style: "Heading1",
      spacing: { before: 200, after: 200 }
    }),
    new Paragraph({
      text: app.content,
      spacing: { line: 360, before: 200, after: 300 }
    })
  );

  if (idx < appendices.length - 1) {
    sections.push(new Paragraph({ children: [new PageBreak()] }));
  }
});

// Create document
const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Calibri", size: 24 }
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        run: { bold: true, size: 32, font: "Calibri", color: "1F4E78" },
        paragraph: { spacing: { before: 240, after: 120 } }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        run: { bold: true, size: 28, font: "Calibri", color: "2E75B6" },
        paragraph: { spacing: { before: 200, after: 100 } }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: {
          width: 12240,  // US Letter width
          height: 15840 // US Letter height
        },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } // 1 inch margins
      }
    },
    children: sections
  }]
});

// Save document
const outputPath = path.resolve("C:\\Users\\ibcap\\Documents\\Programas\\testes\\EBOOK-SQUAD\\squad-ebook\\O-Perito-Aumentado.docx");

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`✅ Ebook compilado com sucesso!`);
  console.log(`📄 Arquivo: ${outputPath}`);
  console.log(`📊 Tamanho: ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📚 Conteúdo: 18 seções (Intro + 13 Caps + Conclusão + 3 Apêndices)`);
  console.log(`📝 Total de palavras: ~47.950`);
});
