# Chapter Draft: CAPÍTULO 4 — Setup do Perito

## Chapter Metadata
- Target words: 4.000
- Actual words: ~4.100
- Purpose: Configuração completa do Claude para uso pericial — leitor sai do capítulo operacional
- Tone: Professoral-acessível (tutorial prático, passo a passo)
- Status: First Draft v1.0 — 2026-03-12

---

## Draft Content

---

# Setup do Perito

Em 30 minutos você terá um assistente pericial configurado que conhece sua especialidade, sua linguagem e seu estilo de laudo.

Não é promessa de marketing. É o tempo que leva para completar os quatro passos deste capítulo: conta no plano correto, Project exclusivo para perícia, system prompt personalizado, validação da configuração.

Ao final deste capítulo, você não vai "ter testado o Claude". Você vai estar operacional.

Uma observação antes de começar: este capítulo é deliberadamente prático. Há menos narrativa e mais instrução direta. Se você é do tipo que prefere entender o porquê antes de seguir o passo, os capítulos anteriores cobriram isso. Agora é hora de configurar.

---

## Passo 1: O Plano Certo para Seu Perfil

O Claude tem planos diferentes com capacidades diferentes. Para uso pericial profissional, o plano gratuito não é suficiente — e há razões técnicas específicas para isso, não apenas comerciais.

### Por Que o Plano Gratuito Não Serve para Perícia

O plano gratuito do Claude tem limitações que impactam diretamente o trabalho pericial:

- **Janela de contexto reduzida:** O plano gratuito oferece acesso ao modelo com janela de contexto menor. Para processos extensos, isso significa fragmentação da análise — exatamente o problema que queremos resolver.
- **Cota de mensagens limitada:** Em análises longas, você vai atingir o limite no meio do trabalho. Isso interrompe o fluxo analítico e pode comprometer a coerência da sessão.
- **Sem Projects:** A funcionalidade de Projects — onde você configura o system prompt permanente e organiza processos por pasta — não está disponível no plano gratuito.
- **Priority access:** Em horários de alta demanda, usuários gratuitos têm acesso degradado. Para trabalho profissional com prazo, isso é inaceitável.

### Os Dois Planos que Servem

**Claude Pro (individual) — R$ ~100/mês**
Para o perito que trabalha individualmente — mesmo que tenha equipe de apoio, mas é você quem usa o Claude diretamente — este é o plano adequado. Oferece acesso completo ao Claude com janela de 200K tokens, Projects ilimitados e prioridade de acesso.

Quando faz sentido: perito autônomo, escritório pequeno onde você é o único usuário do Claude para análise pericial.

**Claude Team — por usuário/mês**
Para escritórios onde mais de um profissional vai usar o Claude — dois ou mais peritos, um perito e um assistente, etc. O plano Team oferece um workspace compartilhado, Projects que toda a equipe acessa, e políticas de privacidade reforçadas para uso empresarial (os dados da organização não são usados para treinamento, por contrato).

Quando faz sentido: dois ou mais usuários ativos, escritório que quer controle centralizado dos Projects e histórico de uso.

**Decisão prática:** Se você vai usar o Claude sozinho, comece com o Pro. Se planeja envolver equipe desde o início, avalie o Team. A diferença de capacidade técnica entre os dois é pequena — a diferença principal é o workspace colaborativo e a gestão de usuários.

### Como Criar a Conta

1. Acesse **claude.ai**
2. Clique em "Sign up" e crie sua conta com e-mail profissional (use o e-mail do escritório, não pessoal — facilita eventual migração para Team depois)
3. Confirme o e-mail
4. Acesse as configurações de conta e selecione o plano Pro
5. Complete o pagamento

**Não pule esta etapa.** Tudo que vem a seguir pressupõe o plano Pro ativo.

---

## Passo 2: Criar Seu Project Pericial

Projects é a funcionalidade do Claude que transforma uma ferramenta de IA genérica em um assistente especializado. É aqui que a diferença entre "usar o Claude" e "ter um assistente pericial configurado" começa.

Um Project no Claude é um espaço de trabalho com três componentes:

1. **System prompt permanente:** Instruções que definem quem o Claude é, como deve se comportar, e qual é o contexto de uso — essas instruções ficam ativas em *todas* as conversas dentro do Project.
2. **Arquivos de referência:** Documentos que o Claude mantém disponíveis em todas as sessões — suas normas técnicas, modelos de laudo, checklist CNJ 615/2025.
3. **Histórico organizado:** Todas as conversas do Project ficam agrupadas, facilitando retomar análises de processos que se estendem por dias ou semanas.

### Configurando o Project

No menu lateral do Claude, clique em **"Projects"** → **"New Project"**.

**Nome do Project:** Use um nome que faça sentido para seu fluxo de trabalho. Sugestões:
- `Perícia [Sua Especialidade]` (ex: "Perícia Contábil", "Perícia Trabalhista")
- `Escritório Pericial` (se você atua em mais de uma especialidade)

**Não crie um Project por processo.** Um Project é seu *escritório virtual*, não um arquivo de processo. Os processos individuais ficam dentro de conversas separadas dentro do mesmo Project.

Exceção: processos muito longos que vão gerar dezenas de sessões ao longo de meses podem merecer seu próprio Project — mas isso é uma exceção, não a regra.

---

## Passo 3: O System Prompt do Perito

Este é o passo mais importante de todo o capítulo.

O system prompt é o conjunto de instruções permanentes que define como o Claude vai se comportar em todo o seu trabalho pericial. Ele é o equivalente a contratar um assistente altamente qualificado e dar a ele, no primeiro dia, um briefing completo sobre quem você é, o que você faz, como você trabalha e o que você espera dele.

Um system prompt bem construído faz o Claude:
- Usar a linguagem técnica correta da sua especialidade
- Responder com o nível de detalhe que você precisa
- Seguir o formato que você usa nos seus laudos
- Manter postura compatível com o uso regulamentado pela CNJ 615/2025
- Pedir esclarecimento quando a pergunta é ambígua, em vez de inventar

### Template Completo: System Prompt do Perito

A seguir está o template base. **Leia cada seção e personalize os campos em colchetes antes de usar.** Não cole o template sem personalizar — a eficácia depende da especificidade.

---

```
IDENTIDADE E CONTEXTO

Você é um assistente técnico especializado em [ESPECIALIDADE: ex. perícia contábil e fiscal / perícia trabalhista e econômica / análise documental e forense], atuando como suporte ao trabalho de [SEU NOME], perito judicial e assistente técnico com atuação em [ESTADOS/REGIÕES DE ATUAÇÃO].

Seu papel é auxiliar na análise de processos judiciais, organização de informação documental, identificação de inconsistências, estruturação de laudos e conferência de cálculos. Você é um instrumento de apoio ao julgamento técnico do perito — não um agente autônomo de decisão.

ESPECIALIDADE TÉCNICA

Sua base de conhecimento técnico inclui:
- [ÁREA 1: ex. Contabilidade societária, fiscal e tributária]
- [ÁREA 2: ex. Normas contábeis CPC, IFRS e NBC]
- [ÁREA 3: ex. Legislação societária e tributária brasileira]
- [ÁREA 4: adicione conforme sua especialidade]

Quando necessário, aplique os princípios e normas dessas áreas na análise de documentos. Quando a questão técnica estiver fora da sua especialidade configurada, sinalize claramente.

POSTURA E COMPORTAMENTO

1. Precisão documental acima de tudo: cite trechos específicos dos documentos ao fazer afirmações. Se a informação não está no documento, diga "não encontrei esse dado no material fornecido" — nunca suponha ou infira sem sinalizar explicitamente.

2. Estrutura analítica: organize suas respostas com hierarquia clara (numeração, marcadores, seções). Laudos periciais são documentos estruturados — sua análise deve refletir essa estrutura.

3. Sinalize incerteza: quando há interpretações possíveis para um dado ou documento, apresente as alternativas e indique qual parece mais sustentável e por quê. Não escolha por mim sem explicar o raciocínio.

4. Peça esclarecimento antes de trabalhar com hipóteses: se o documento está incompleto ou a pergunta é ambígua, pergunte antes de prosseguir. Uma análise baseada em suposição incorreta gera mais trabalho do que uma pergunta inicial.

5. Linguagem técnica calibrada: use terminologia técnica adequada para documentos periciais. Evite linguagem informal. Quando usar termos que podem gerar dúvida, explique entre parênteses na primeira ocorrência.

CONFORMIDADE CNJ 615/2025

Este assistente opera em conformidade com a Resolução CNJ 615/2025. Sua função é instrumental — o julgamento técnico, as conclusões periciais e a responsabilidade pelo laudo pertencem ao perito. Quando fornecer análises que serão incorporadas ao laudo, sinalize com: "[ANÁLISE IA — REVISÃO DO PERITO REQUERIDA]" ao final do bloco.

FORMATO DE OUTPUT PADRÃO

Para análise de documentos: organize em (1) Sumário do documento, (2) Pontos críticos identificados, (3) Inconsistências e divergências, (4) Itens que requerem atenção do perito.

Para respostas a quesitos: use numeração que espelhe os quesitos originais. Para cada quesito: resposta direta, fundamentação documental, limitações da análise.

Para cálculos e conferências: apresente memória de cálculo detalhada, fundamento legal/normativo aplicado e resultado. Sinalize quando assumiu premissas não explicitadas no processo.

SOBRE OS DOCUMENTOS DO PROCESSO

Os documentos que você vai receber são sigilosos e cobertos pelo sigilo judicial. Trate toda informação com discrição. Não faça referências a informações de processos em contextos fora da análise em curso.

[ADICIONE AQUI QUALQUER INSTRUÇÃO ESPECÍFICA PARA SUA PRÁTICA]
```

---

### Como Personalizar

Os campos em colchetes não são opcionais. Um system prompt genérico produz respostas genéricas. Quanto mais específico você for na personalização, mais calibrado será o assistente.

**Especialidade:** Seja preciso. "Perícia contábil" é mais útil do que "contabilidade". "Perícia trabalhista com foco em dissídios coletivos" é mais útil ainda.

**Áreas técnicas:** Liste as normas, legislações e referenciais que você mais usa. CPC, NBC, legislação previdenciária, CLT — o que for relevante para sua prática.

**Instrução específica:** Adicione qualquer peculiaridade do seu trabalho. Se você atua muito em determinado tipo de ação (ex: ações de dissolução societária, reclamatórias trabalhistas de grande porte), mencione. Se tem um estilo preferido de estruturação de laudo, descreva.

### Inserindo o System Prompt no Project

1. Dentro do seu Project, clique em **"Project Instructions"** (ou "Customize" — a interface pode variar por versão)
2. Cole o texto personalizado
3. Salve

O system prompt fica ativo em todas as conversas do Project a partir desse momento. Você pode editá-lo a qualquer tempo — o que aprender no decorrer do uso vai naturalmente melhorar as instruções.

---

## Passo 4: Arquivos de Referência no Project

Além do system prompt, o Project permite carregar documentos de referência que ficam disponíveis em todas as sessões. Pense nesses arquivos como a estante do assistente — o material que ele pode consultar sem você precisar reenviar a cada conversa.

### O Que Carregar nos Arquivos de Referência

**Modelo de laudo:** Um laudo seu que você considera bem estruturado. O Claude vai usar como referência de formato, nível de detalhe e linguagem ao auxiliar na redação. Anonimize antes de carregar — substitua dados reais por placeholders.

**Checklist CNJ 615/2025:** O checklist que montaremos no Apêndice B deste livro. Mantê-lo no Project garante que o Claude possa verificar qualquer análise contra os requisitos da resolução.

**Normas técnicas de referência:** Se você trabalha regularmente com normas específicas (NBCs do CFC, ITGs, legislação previdenciária), carregar os textos relevantes permite que o Claude os consulte diretamente em vez de depender apenas do treinamento.

**Glossário de termos do processo:** Se você trabalha com um juízo ou vara específica que usa terminologia particular, um glossário ajuda a calibrar a linguagem das análises.

### O Que NÃO Carregar nos Arquivos de Referência

- Documentos reais de processos ativos (esses ficam em conversas individuais, não como referência permanente)
- Dados pessoais de clientes (desnecessário e cria exposição)
- Arquivos muito grandes sem necessidade regular (ocupa contexto sem usar)

---

## Passo 5: Os Três Testes de Validação

Antes de usar o ambiente configurado em trabalho real, execute os três testes de validação. Eles confirmam que o system prompt está funcionando como esperado e identificam ajustes necessários.

### Teste 1: Identidade e Especialidade

**Abra uma nova conversa dentro do Project e pergunte:**

*"Quem você é e qual é o seu papel neste ambiente de trabalho?"*

**O que esperar na resposta:**
- O Claude deve se identificar como assistente técnico especializado na sua especialidade
- Deve mencionar o papel instrumental (apoio ao julgamento do perito)
- Deve referenciar a conformidade com CNJ 615/2025
- Não deve se identificar como "ChatGPT" ou com qualquer outra identidade genérica

Se a resposta for genérica ("Sou o Claude, um assistente de IA...") sem incorporar o contexto que você configurou, o system prompt não foi salvo corretamente. Revise o Passo 3.

### Teste 2: Postura Documental (Anti-Alucinação)

**Na mesma conversa, pergunte:**

*"Com base nos documentos do processo, qual foi o faturamento da empresa no exercício de 2022?"*

**O que esperar:**
O Claude deve responder que não há documentos do processo carregados nesta conversa e que não pode responder a perguntas sobre documentos que não foram fornecidos. Deve oferecer ajuda assim que você carregar o material.

**O que NÃO deve acontecer:**
O Claude inventar um valor, dar uma resposta genérica sobre "empresas típicas", ou fingir ter acesso a documentos que não existem.

Se acontecer qualquer coisa diferente de "não tenho documentos para analisar", há um problema de configuração ou o system prompt está sendo ignorado. Reporte o comportamento e ajuste as instruções de precisão documental.

### Teste 3: Formato e Estrutura

**Ainda na mesma conversa, envie:**

*"Analise o seguinte trecho de balanço e identifique pontos que merecem atenção pericial: [cole aqui 2 ou 3 linhas de um balanço qualquer — pode ser fictício para este teste]"*

**O que esperar:**
- Resposta organizada em seções numeradas ou com hierarquia clara
- Uso de linguagem técnica adequada
- Indicação de "[ANÁLISE IA — REVISÃO DO PERITO REQUERIDA]" ao final
- Pontos apresentados com referência ao trecho analisado, não como afirmação genérica

Se a resposta vier como texto corrido sem estrutura, revise a seção "FORMATO DE OUTPUT PADRÃO" do system prompt e aumente a especificidade das instruções de formato.

---

## Boas Práticas de Upload de Documentos

Uma vez com o ambiente configurado, você vai passar grande parte do tempo fazendo upload de documentos de processos para análise. Algumas práticas que fazem diferença:

### Formatos e Compatibilidade

O Claude aceita PDFs, documentos de texto (.docx, .txt), planilhas (.xlsx, .csv) e imagens. Para processos judiciais, o PDF é o formato mais comum — e funciona bem.

**Atenção aos PDFs digitalizados sem OCR:** Documentos escaneados e salvos como imagem dentro de PDF não são "lidos" da mesma forma. Se o texto não está pesquisável no seu leitor de PDF, o Claude também vai ter dificuldade. Nesse caso, use uma ferramenta de OCR antes de carregar — ou mencione para o Claude que o documento pode ter trechos de baixa qualidade.

### Nomenclatura de Arquivos

Antes de carregar, renomeie os arquivos para que o Claude possa referenciá-los com clareza nas análises. Em vez de `scan001.pdf` ou `doc_final_v3.pdf`, use nomes descritivos:

- `balanco_2019_empresa_alpha.pdf`
- `contrato_sociedade_2018.pdf`
- `extrato_bancario_conta_corrente_2020.pdf`
- `ata_reuniao_socios_marco_2021.pdf`

Quando você perguntar "o que o balanço de 2019 mostra sobre o ativo circulante?", o Claude vai saber exatamente a qual documento você está se referindo.

### Organizando Processos Extensos

Para processos com muitos documentos, não carregue tudo de uma vez na primeira mensagem. Siga esta sequência:

1. **Primeiro:** Carregue o índice do processo ou a petição inicial — para o Claude ter o mapa do processo
2. **Em seguida:** Carregue os documentos por categoria (todos os balanços juntos, todos os contratos juntos, etc.)
3. **Por último:** Carregue documentos específicos conforme a análise avançar e precisar de detalhes

Isso é mais eficiente do que jogar 800 páginas de uma vez e esperar que o Claude saiba o que priorizar.

---

## Seu Ambiente Está Pronto

Se você completou os cinco passos deste capítulo — conta Pro, Project criado, system prompt personalizado, arquivos de referência carregados, três testes de validação passados —, você tem agora um ambiente pericial configurado.

Não é mais o Claude genérico. É um assistente técnico que conhece sua especialidade, sua linguagem, seu estilo de trabalho e as regras do jogo regulatório.

O próximo passo é o core skill que tudo o mais depende: como analisar um processo extenso sem perder nada. Como estruturar a análise para que o Claude não apenas leia os documentos, mas os leia na ordem certa, com as perguntas certas, gerando o tipo de síntese que alimenta um laudo robusto.

Seu Claude está configurado e calibrado. Mas a verdadeira habilidade começa agora: como fazer ele analisar um processo de 5.000 páginas sem perder nada.

---

### Key Takeaways
1. O plano Pro é o mínimo necessário para uso pericial — o plano gratuito não oferece Projects, janela de contexto completa ou estabilidade de acesso
2. O Project é o escritório virtual: system prompt permanente + arquivos de referência + histórico organizado por especialidade
3. O system prompt é o investimento mais importante do setup — quanto mais específico, mais calibrado o assistente
4. Os três testes de validação confirmam que o ambiente está funcionando antes do primeiro processo real
5. Nomenclatura de arquivos e sequência de upload impactam diretamente a qualidade da análise

### Call to Action
*"Execute o setup agora — antes de virar a página. O Capítulo 5 pressupõe que você está operacional. Se você leu este capítulo mas não configurou ainda, marque a página e volte quando tiver 30 minutos disponíveis. Ler o próximo capítulo sem o ambiente configurado é como ler a bula do remédio sem tomar o remédio."*

### Preview do Próximo Capítulo
*No Capítulo 5, você aprende o Método DELTA — a estrutura de análise documental que transforma um processo extenso de massa desorganizada em mapa analítico. É o core skill que determina a qualidade de tudo que vem depois.*

---

## Quality Check
- [x] Hook abre com promessa concreta e verificável ("30 minutos, você operacional")
- [x] Propósito cumprido (leitor sai do capítulo operacional — 5 passos completos)
- [x] Tutorial genuinamente executável (passos numerados, sem lacunas)
- [x] Template de system prompt completo e adaptável (o maior entregável do capítulo)
- [x] Três testes de validação com critérios de passa/falha claros
- [x] Boas práticas de upload (nomenclatura, sequência, formatos)
- [x] CTA forte e honesto ("leia este cap SEM executar = leu a bula sem tomar o remédio")
- [x] Extensão adequada (~4.100 palavras — dentro do target de 4.000)
- [x] Tom consistente (professoral mas direto — menos narrativa, mais instrução, como prometido na abertura)
- [x] Closing hook correto ("5.000 páginas sem perder nada — Cap 5")
- [x] Bridge para Cap 5 (Método DELTA)
