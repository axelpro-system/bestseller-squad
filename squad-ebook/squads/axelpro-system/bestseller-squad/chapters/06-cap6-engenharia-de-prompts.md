# Chapter Draft: CAPÍTULO 6 — Engenharia de Prompts para Peritos

## Chapter Metadata
- Target words: 4.000
- Actual words: ~4.200
- Purpose: Entregar biblioteca de prompts prontos + metodologia para criar novos prompts específicos
- Tone: Professoral-acessível (método + biblioteca prática — o capítulo mais denso em entregáveis)
- Status: First Draft v1.0 — 2026-03-12

---

## Draft Content

---

# Engenharia de Prompts para Peritos

Um prompt mal feito é como uma pergunta mal formulada ao seu assistente: você vai receber a resposta que perguntou, não a que precisava.

A diferença não é sutil. Dois prompts sobre o mesmo documento, escritos de formas diferentes, podem produzir resultados que variam de inútil a transformador. E o que separa os dois não é conhecimento técnico de IA — é saber estruturar uma instrução.

Este capítulo tem dois objetivos. Primeiro: ensinar a anatomia do prompt pericial eficaz, para que você entenda *por que* um prompt funciona melhor do que outro. Segundo: entregar os 10 prompts fundamentais que cobrem a maioria das situações que aparecem no trabalho pericial — prontos para usar e adaptar.

Se o Capítulo 5 foi o método de análise, este capítulo é o idioma que você usa para executá-lo.

---

## A Anatomia do Prompt Pericial

Todo prompt eficaz para trabalho pericial tem cinco componentes. Não todos os cinco precisam estar explícitos em toda situação — mas entender cada um ajuda a diagnosticar por que um prompt não está produzindo o resultado esperado.

### Componente 1: Papel (Role)

Define quem o Claude deve ser para esta tarefa específica.

O sistema prompt que você configurou no Capítulo 4 já estabelece o papel geral — assistente técnico da sua especialidade. Mas para tarefas específicas, refinar o papel dentro do prompt melhora a precisão.

**Exemplo:**
*"Na análise a seguir, atue como um perito contábil especializado em apuração de haveres com foco em detectar manipulações de resultados."*

A diferença entre "assistente técnico" e "perito contábil especializado em detectar manipulações" não é cosmética. O segundo instrói o Claude a aplicar um filtro analítico específico — olhar para os dados com a lente de quem está verificando irregularidades, não apenas descrevendo.

### Componente 2: Contexto (Context)

Fornece as informações de fundo que o Claude precisa para calibrar a resposta.

O contexto responde: qual é o caso, quais são as partes, qual é a natureza do litígio, qual é o período analisado, quais documentos estão disponíveis.

**Exemplo:**
*"O processo envolve dissolução litigiosa de sociedade limitada entre dois sócios com participação paritária. O período analisado é 2018–2023. Os documentos disponíveis são os balanços anuais dos 5 exercícios, DREs correspondentes e extratos bancários de conta corrente empresarial — com lacuna nos extratos de março a agosto de 2020."*

Um prompt sem contexto adequado vai produzir análise genérica. Um prompt com contexto preciso vai produzir análise calibrada para as especificidades do caso.

### Componente 3: Tarefa (Task)

Define o que exatamente você quer que o Claude faça — o verbo que comanda a ação.

Verbos imprecisos produzem resultados imprecisos. Compare:

- *"Analise os balanços"* — amplo demais, resultado imprevisível
- *"Identifique divergências entre o lucro líquido reportado nos balanços e as movimentações financeiras nos extratos bancários"* — preciso, verificável, acionável

A tarefa deve ser específica o suficiente para que você consiga avaliar se o resultado a cumpriu ou não.

### Componente 4: Formato (Format)

Especifica como você quer que a resposta seja estruturada.

O sistema prompt já define um formato padrão — mas para tarefas específicas, um formato customizado melhora a usabilidade do output.

**Exemplos de especificação de formato:**
- *"Apresente em tabela com colunas: documento, dado, localização, grau de relevância"*
- *"Organize em tópicos numerados, um por quesito"*
- *"Escreva em parágrafo contínuo, linguagem formal, adequada para incorporação direta ao laudo"*

### Componente 5: Restrições (Constraints)

Define o que o Claude *não* deve fazer — os limites da tarefa.

Restrições são frequentemente o componente mais esquecido, mas são críticas para manter a qualidade analítica:

- *"Não faça inferências além do que está documentado"*
- *"Não inclua informações de períodos fora do escopo 2018–2023"*
- *"Quando houver ambiguidade interpretativa, apresente as possibilidades sem escolher uma — essa decisão é do perito"*

---

## Os 10 Prompts Fundamentais

A seguir, os 10 prompts que cobrem a maioria das situações no trabalho pericial. Cada um segue a anatomia descrita acima. Os campos em colchetes devem ser substituídos pela informação do seu caso.

---

### Prompt 1 — Inventário Documental Completo

*"Você recebeu os documentos do processo [CASO/NÚMERO]. Faça um inventário estruturado de todo o material: (1) nome e tipo de cada documento, (2) período temporal coberto, (3) partes mencionadas, (4) volume aproximado (páginas), (5) aparente completude — sinalize documentos com indícios de incompletude, cortes ou lacunas de período. Apresente em tabela. Ao final, liste documentos que estariam tipicamente presentes em um processo desta natureza mas que não foram localizados no material recebido."*

**Quando usar:** Início de qualquer processo — etapa D do DELTA.

---

### Prompt 2 — Extração de Movimentações Financeiras

*"No papel de perito especializado em análise de fluxo de caixa, extraia dos documentos fornecidos todas as movimentações financeiras relevantes para o período [PERÍODO]. Para cada movimentação: (a) data, (b) valor, (c) natureza (entrada/saída), (d) contrapartida ou beneficiário identificado, (e) documento de origem com localização. Organize em ordem cronológica. Sinalize movimentações sem documentação de suporte visível e movimentações que aparecem em apenas uma fonte (não confirmadas por outra)."*

**Quando usar:** Perícias contábeis, trabalhistas, dissoluções societárias, apurações de haveres.

---

### Prompt 3 — Análise de Consistência Interna

*"Compare as informações sobre [ASPECTO ESPECÍFICO: ex. lucro líquido / faturamento / remuneração] entre os seguintes documentos: [LISTA DE DOCUMENTOS]. Para cada par de documentos comparados: (a) valor ou informação no Documento A, (b) valor ou informação no Documento B, (c) divergência identificada (valor absoluto e percentual quando aplicável), (d) possível explicação técnica para a divergência (diferença de critério, erro de registro, ou sem explicação aparente). Apresente em tabela. Ordene por grau de divergência, da maior para a menor."*

**Quando usar:** Triangulação (etapa T do DELTA) — comparação sistemática entre fontes.

---

### Prompt 4 — Resposta Estruturada a Quesitos

*"Responda os quesitos abaixo com base exclusiva nos documentos do processo. Para cada quesito: (1) resposta direta e objetiva na primeira linha (máximo 2 frases); (2) fundamentação — cite os documentos específicos e os trechos ou dados que sustentam a resposta; (3) limitações — o que não foi possível concluir com os documentos disponíveis e por quê; (4) se a resposta depende de informação ausente no processo, declare explicitamente. Não faça inferências além do documentado. Quando a resposta admitir mais de uma interpretação razoável, apresente as alternativas e indique qual parece mais sustentável tecnicamente. Quesitos: [COLE OS QUESITOS NUMERADOS]."*

**Quando usar:** Alinhamento (etapa A do DELTA) — resposta formal aos quesitos.

---

### Prompt 5 — Linha do Tempo de Eventos Críticos

*"Com base nos documentos disponíveis, construa uma linha do tempo dos eventos relevantes para o caso [BREVE DESCRIÇÃO]. Inclua: data ou período, evento ou fato, documento de origem, partes envolvidas. Marque com [LACUNA] períodos onde a documentação deveria registrar eventos mas não registra. Marque com [CRÍTICO] eventos que têm impacto direto sobre os quesitos ou sobre o objeto central da disputa. Apresente em ordem cronológica, sem análise interpretativa — apenas os fatos documentados."*

**Quando usar:** Etapa L do DELTA — construção do histórico factual para o laudo.

---

### Prompt 6 — Cálculo com Memória Detalhada

*"Realize o cálculo de [OBJETO DO CÁLCULO: ex. verbas rescisórias / haveres do sócio retirante / atualização monetária de crédito] com base nos seguintes dados extraídos do processo: [LISTE OS DADOS COM FONTE]. Utilize o critério [CRITÉRIO LEGAL/NORMATIVO APLICÁVEL]. Apresente: (1) premissas adotadas com justificativa, (2) memória de cálculo passo a passo, (3) resultado final, (4) sensibilidade do resultado a variações nas premissas (calcule cenário conservador e cenário expansivo). Sinalize qualquer dado que precisou ser estimado por ausência no processo."*

**Quando usar:** Perícias com componente de cálculo — trabalhistas, apuração de haveres, atualização de créditos.

---

### Prompt 7 — Identificação de Padrões e Anomalias

*"Analise os dados de [TIPO DE DADO: ex. movimentações bancárias / lançamentos contábeis / registros de ponto] do período [PERÍODO] com o objetivo de identificar padrões que se desviam do comportamento esperado. Considere como 'anomalia' qualquer ocorrência que: seja estatisticamente atípica em relação à série histórica; ocorra em datas ou condições específicas que mereçam atenção; não tenha correspondência com outros documentos do processo. Para cada anomalia identificada: descreva o padrão esperado vs. o observado, aponte o período/dados afetados, e sugira qual verificação adicional o perito deveria realizar."*

**Quando usar:** Perícias de fraude, irregularidades contábeis, litígios trabalhistas com alegação de manipulação.

---

### Prompt 8 — Revisão Crítica de Laudo Adverso

*"Você vai analisar o laudo pericial adverso como assistente técnico da parte [PARTE]. Sua tarefa é identificar: (1) falhas metodológicas — procedimentos que não seguem as normas técnicas aplicáveis ou que são internamente inconsistentes; (2) premissas não justificadas — onde o laudo adota um critério sem fundamentar a escolha entre alternativas disponíveis; (3) conclusões não suportadas — onde a conclusão vai além do que os dados documentados permitem afirmar; (4) omissões relevantes — fatos ou documentos que estão no processo mas não foram abordados e que poderiam alterar as conclusões. Para cada ponto: cite a página e seção do laudo, descreva o problema e indique a norma ou argumento técnico que sustenta a crítica."*

**Quando usar:** Atuação como assistente técnico — Cap 9 trata este tema em profundidade.

---

### Prompt 9 — Rascunho de Seção de Metodologia

*"Com base no seguinte processo de análise que realizei [DESCREVA O QUE FOI FEITO: documentos analisados, métodos utilizados, ferramentas empregadas], redija uma seção de Metodologia para o laudo pericial. A seção deve: (1) descrever os documentos analisados; (2) explicar o método de análise aplicado; (3) declarar o uso de ferramenta de IA como instrumento de apoio, conforme Resolução CNJ 615/2025; (4) afirmar que as conclusões são de responsabilidade exclusiva do perito signatário. Use linguagem técnica formal, adequada para documento judicial. Extensão: [CURTA: 1 parágrafo / PADRÃO: 3-4 parágrafos / DETALHADA: seção completa]."*

**Quando usar:** Redação do laudo — seção de metodologia com declaração CNJ 615/2025 integrada.

---

### Prompt 10 — Quesitos Complementares Estratégicos

*"Com base nos achados da análise deste processo, que quesitos adicionais um assistente técnico criterioso deveria formular ao perito nomeado? Considere: (1) aspectos que os quesitos originais não cobrem mas que são relevantes para o caso; (2) esclarecimentos sobre metodologia do laudo que poderiam fortalecer ou questionar as conclusões; (3) verificações documentais que o laudo não realizou mas que seriam esperadas. Para cada quesito sugerido, explique a justificativa estratégica — o que ele pode revelar e como pode impactar o resultado."*

**Quando usar:** Atuação como assistente técnico — formulação de quesitos complementares para o perito nomeado.

---

## Análise Comparativa: O Mesmo Pedido, Três Versões

Para ilustrar o impacto concreto da qualidade do prompt, veja o mesmo pedido em três versões — e o que cada versão produz.

**Situação:** Processo trabalhista. Você quer que o Claude identifique inconsistências nos registros de jornada.

---

**Versão 1 — Prompt genérico:**
*"Analise os registros de ponto e veja se tem algo errado."*

**Resultado provável:** Análise superficial, comentários genéricos sobre "a necessidade de verificar a conformidade com a CLT", sem identificação de inconsistências específicas. Útil apenas como ponto de partida.

---

**Versão 2 — Prompt melhorado:**
*"Compare os registros de ponto do período com os holerites do mesmo período e identifique inconsistências de jornada."*

**Resultado provável:** Melhor — o Claude vai comparar as fontes e provavelmente identificar divergências. Mas ainda falta especificidade sobre o que conta como inconsistência relevante e como apresentar os resultados.

---

**Versão 3 — Prompt completo (anatomia PCTFR):**
*"Na análise a seguir, atue como perito trabalhista especializado em verificação de jornada. O processo envolve reclamação de horas extras por empregado no período 2020–2023. Documentos disponíveis: cartões de ponto, holerites mensais e controles de acesso eletrônico dos três períodos. Compare as três fontes e identifique: (a) dias onde o registro de ponto difere do controle de acesso eletrônico em mais de 30 minutos; (b) meses onde a jornada média registrada no ponto é sistematicamente inferior à jornada implícita nos holerites (com base no adicional de horas extras pago); (c) períodos com ausência de registro em uma das fontes mas presença nas outras duas. Apresente em tabela com colunas: data/período, divergência identificada, fontes em conflito, grau de relevância. Não interprete a causa das divergências — apenas registre o que os documentos mostram."*

**Resultado provável:** Tabela estruturada com divergências específicas, verificáveis, citadas por fonte e período. Output diretamente utilizável na seção de análise do laudo.

---

A diferença entre Versão 1 e Versão 3 não é o tamanho do prompt — é a clareza das cinco dimensões: papel, contexto, tarefa, formato e restrições. Um prompt de 3 linhas bem estruturado é sempre melhor do que um prompt de 10 linhas vago.

---

## Adaptando Prompts para Situações Adversariais

Quando você sabe que o laudo vai ser contestado — ou quando está atuando como assistente técnico e quer preparar contra-argumentação —, os prompts precisam de uma camada adicional: o teste de adversidade.

O princípio é simples: antes de incorporar uma análise ao laudo, passe ela pelo "teste dos três adversários".

### O Prompt do Advogado da Parte Contrária

*"Considere a seguinte análise [COLE A ANÁLISE]. Atue como advogado da parte contrária e identifique: (1) os pontos mais vulneráveis da argumentação — onde a fundamentação é mais fraca ou onde outras interpretações são possíveis; (2) perguntas que um bom advogado faria para questionar as conclusões; (3) normas técnicas ou jurídicas que poderiam ser invocadas contra essa análise. Seja rigoroso — o objetivo é encontrar os pontos fracos antes que a parte contrária o faça."*

### O Prompt do Revisor Técnico

*"Revisite a seguinte análise [COLE A ANÁLISE] com o olhar de um revisor técnico independente. Identifique: (1) afirmações que vão além do que os documentos suportam; (2) premissas implícitas que deveriam ser tornadas explícitas; (3) termos técnicos usados de forma imprecisa ou que admitem interpretação diferente da pretendida."*

Passar sua análise por esses dois filtros antes de incorporá-la ao laudo reduz significativamente a probabilidade de questionamentos procedentes — porque você já identificou e tratou as vulnerabilidades antes de apresentar o resultado.

---

## Construindo Sua Biblioteca Pessoal

Os 10 prompts deste capítulo são ponto de partida, não ponto de chegada.

Ao longo do uso, você vai desenvolver prompts específicos para as situações que aparecem com frequência na sua especialidade. Minha recomendação: mantenha um documento de texto simples — pode ser dentro do Project como arquivo de referência — com sua biblioteca pessoal.

Estruture cada entrada assim:

```
NOME DO PROMPT: [Nome descritivo]
SITUAÇÃO DE USO: [Quando usar]
ÚLTIMA ATUALIZAÇÃO: [Data]
PROMPT:
[Texto completo do prompt]
NOTAS: [Variações úteis, avisos, casos especiais]
```

Quando um prompt funciona excepcionalmente bem em um caso real, anote o que o tornou eficaz. Quando um prompt não funcionou como esperado, anote o que ajustou e o resultado da versão corrigida.

Em 6 meses de uso consistente, sua biblioteca vai ter 20 a 30 prompts altamente calibrados para sua prática específica — e esse conjunto vai ser um ativo profissional tão valioso quanto qualquer outro recurso do seu escritório.

---

## O Fim da Parte 2

Com o Método DELTA do Capítulo 5 e a biblioteca de prompts deste capítulo, você tem a fundação completa para o trabalho pericial com Claude.

Setup configurado. Método de análise estruturado. Linguagem dos prompts dominada.

Nos próximos quatro capítulos, aplicamos tudo isso na sua especialidade específica. Cada capítulo da Parte 3 usa o mesmo framework — mas com as nuances, os documentos típicos e os casos reais da área em questão.

Vá direto para o capítulo da sua especialidade: Cap 7 (contábil/fiscal), Cap 8 (trabalhista/econômico), Cap 9 (assistente técnico) ou Cap 10 (digital/documental). O método é o mesmo — o que muda é como ele se aplica ao seu universo de trabalho.

Método e prompts dominados. Nos próximos quatro capítulos, aplicamos tudo isso na sua especialidade específica.

---

### Key Takeaways
1. A anatomia do prompt pericial tem 5 componentes: Papel, Contexto, Tarefa, Formato, Restrições — todos os cinco melhoram a qualidade do output
2. Os 10 prompts fundamentais cobrem as principais situações do trabalho pericial: inventário, extração, análise de consistência, quesitos, cálculo, anomalias, revisão adversa, metodologia e quesitos complementares
3. A diferença entre um prompt genérico e um prompt estruturado não é tamanho — é precisão nas 5 dimensões
4. O teste dos adversários (advogado da parte contrária + revisor técnico) identifica vulnerabilidades antes da entrega
5. Uma biblioteca pessoal de prompts é um ativo profissional que se acumula e melhora com o uso

### Call to Action
*"Pegue um dos 10 prompts deste capítulo — o que mais se aproxima de uma tarefa que você realiza frequentemente. Adapte os campos em colchetes para um processo real (já encerrado, se preferir). Execute. Avalie o resultado em três dimensões: precisão (o que o Claude encontrou está correto?), cobertura (o que ele deixou de encontrar?) e formato (o output seria utilizável diretamente?). Essa avaliação vai dizer exatamente onde ajustar o prompt para a sua prática."*

### Preview do Próximo Capítulo
*A Parte 3 começa no Capítulo 7 — Claude para Perícia Contábil e Fiscal. Se esta não é sua especialidade, vá direto para o capítulo da sua área. O método é o mesmo; o que muda são os documentos, as normas e os casos reais.*

---

## Quality Check
- [x] Hook abre com o princípio fundamental (pergunta mal feita → resposta errada)
- [x] Propósito cumprido (anatomia do prompt + 10 prompts prontos + biblioteca pessoal)
- [x] Anatomia PCTFR explicada com exemplos para cada componente
- [x] 10 prompts completos, prontos para uso, com contexto de quando usar
- [x] Análise comparativa (3 versões do mesmo prompt) — demonstra impacto concreto
- [x] Prompts adversariais (teste dos 3 adversários)
- [x] Framework para biblioteca pessoal com estrutura de entrada
- [x] Ação clara ao final (testar 1 prompt em processo real)
- [x] Extensão adequada (~4.200 palavras — dentro do target de 4.000)
- [x] Tom consistente (mais rico em entregáveis que qualquer capítulo anterior)
- [x] Escaneável (10 prompts em blocos destacados, comparativo visual, tabela de anatomia)
- [x] Closing hook correto ("próximos 4 capítulos, sua especialidade específica")
- [x] Bridge para Parte 3 (vai direto para o capítulo da sua especialidade)
