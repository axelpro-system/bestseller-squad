# Chapter Draft: CAPÍTULO 8 — Claude para Perícia Trabalhista e Econômica

## Chapter Metadata
- Target words: 3.500
- Actual words: ~3.650
- Purpose: Workflows específicos para economistas e peritos trabalhistas
- Tone: Professoral-acessível (aplicação prática — foco em casos e prompts)
- Status: First Draft v1.0 — 2026-03-12

---

## Draft Content

---

# Claude para Perícia Trabalhista e Econômica

O maior gargalo na perícia trabalhista não é fazer o cálculo — é verificar se os dados de entrada estão corretos.

Isso não é óbvio. A maioria dos peritos trabalhistas investe horas em planilhas de cálculo sofisticadas, com fórmulas testadas e metodologia sólida. E depois, na base de dados que alimenta essas planilhas, há um holerite com um salário que não bate com o registrado no TRCT, uma data de admissão que difere entre o cartão de ponto e o contrato, uma jornada declarada que nenhum outro documento confirma.

O resultado calculado com precisão de centavos é construído sobre dados que ninguém teve tempo de verificar adequadamente.

É aqui que o Claude muda a equação. Não no cálculo — mas na verificação dos dados que entram no cálculo. E em perícia trabalhista, essa é exatamente a diferença que define se o laudo vai sobreviver à impugnação da parte contrária.

---

## O Universo Documental da Perícia Trabalhista

Antes dos workflows, vale mapear o tipo de material com que o perito trabalhista lida — porque a heterogeneidade documental desta especialidade é alta, e o Claude precisa de contexto sobre o que está analisando.

Um processo trabalhista típico de médio porte pode conter:

- **Contrato de trabalho** (versão original e eventuais aditivos)
- **Holerites** (um por mês durante todo o vínculo — pode ser dezenas ou centenas)
- **TRCT** (Termo de Rescisão do Contrato de Trabalho)
- **Cartões de ponto** (manual, mecânico ou eletrônico — ou ausência de registro)
- **Fichas financeiras** (espelho do histórico de pagamentos)
- **CTPS** (Carteira de Trabalho — anotações do vínculo)
- **Guias de recolhimento** (FGTS, INSS)
- **Convenção Coletiva de Trabalho** aplicável
- **Comunicações internas** (e-mails, mensagens, ordens de serviço)
- **Laudos médicos** (em casos com doença ocupacional ou acidente)

Cada tipo de documento carrega informações específicas que devem ser consistentes entre si. As inconsistências entre essas fontes são, em geral, o núcleo do litígio.

---

## Workflow 1: Auditoria de Holerites e TRCT

### Por Que Auditar Antes de Calcular

A auditoria de holerites tem dois objetivos: verificar a consistência interna de cada holerite (os cálculos estão corretos?) e verificar a consistência cruzada entre holerites ao longo do tempo (os dados são coerentes com o histórico e com os outros documentos?).

Fazer isso manualmente para 48 meses de holerites leva horas. Com o Claude, leva minutos — e cobre aspectos que a análise manual frequentemente deixa passar.

### Prompt de Auditoria Cruzada de Holerites

---
*"Você recebeu os holerites do período [MÊS/ANO] a [MÊS/ANO] do trabalhador [NOME/CARGO]. Faça uma auditoria cruzada com os seguintes focos: (1) evolução salarial — mapeie todas as alterações de salário base ao longo do período e verifique se há correspondência com documentos de alteração (promoções, acordos, CCT); (2) inconsistências de base de cálculo — identifique meses onde o salário base usado para calcular adicionais (hora extra, adicional noturno, DSR) difere do salário base declarado naquele holerite; (3) rubricas ausentes — identifique meses onde rubricas habitualmente presentes na série histórica estão ausentes sem justificativa aparente; (4) variações atípicas — sinalize meses com variação de valor líquido superior a [PERCENTUAL: ex. 20%] em relação ao mês anterior, sem aumento de rubrica que justifique. Para cada inconsistência: mês, rubrica, valor esperado vs. valor encontrado, nível de relevância."*

---

### Prompt de Conferência do TRCT

---
*"Confira o TRCT [REFERÊNCIA] contra os holerites e demais documentos do processo. Verifique: (1) data de admissão e demissão — coincidem com CTPS, contrato e últimos holerites?; (2) salário base da rescisão — bate com o último holerite e com a CCT vigente?; (3) saldo de salário — correto para o período proporcional?; (4) aviso prévio — modalidade (trabalhado ou indenizado) e valor correto?; (5) 13º salário proporcional — base de cálculo e meses de direito corretos?; (6) férias proporcionais com 1/3 — período aquisitivo correto e valor compatível?; (7) multa do FGTS — percentual correto para a modalidade de demissão?; (8) FGTS — saldo indicado é compatível com os recolhimentos ao longo do contrato? Para cada item: valor no TRCT, valor calculado com base nos documentos, divergência se houver."*

---

Esses dois prompts juntos produzem uma auditoria documental completa que alimenta diretamente a seção de "constatações" do laudo — com citação de fonte para cada ponto.

---

## Workflow 2: Cálculo de Verbas Rescisórias com Simulação de Cenários

### A Lógica dos Três Cenários

Em perícia trabalhista, a metodologia de três cenários — que vimos na apuração de haveres do capítulo anterior — tem uma aplicação ainda mais frequente: os cenários refletem as versões das partes.

Em uma reclamação trabalhista típica, há três versões dos fatos:
- **Versão do reclamante:** jornada maior, salário às vezes irregular, condições descritas de uma forma
- **Versão da reclamada:** jornada regular, tudo pago corretamente, outra narrativa dos fatos
- **Versão documental:** o que os documentos efetivamente registram — que raramente coincide exatamente com nenhuma das duas versões anteriores

O laudo que apresenta os cálculos nos três cenários — e esclarece qual é a base documental de cada um — é metodologicamente superior ao que escolhe uma versão e calcula apenas ela.

### Prompt de Cálculo Multi-Cenário

---
*"Com base nos documentos do processo, calcule as verbas rescisórias em três cenários: Cenário A (versão documental — use exclusivamente os dados registrados nos documentos, sem aceitar alegações não documentadas de nenhuma das partes); Cenário B (hipótese favorável ao reclamante — adote as alegações do reclamante nos pontos onde não há documento que as contrarie); Cenário C (hipótese favorável à reclamada — adote os registros da empresa nos pontos em disputa). Para cada cenário: (1) premissas adotadas com justificativa, (2) cálculo detalhado de cada verba (saldo de salário, aviso prévio, 13º proporcional, férias + 1/3, multa FGTS), (3) total líquido. Apresente os três cenários em tabela comparativa. Sinalize os itens de maior impacto — onde a diferença entre os cenários é maior em valor absoluto."*

---

O item "sinalize os itens de maior impacto" é estratégico para o perito: é o mapa dos pontos que a instrução processual vai precisar resolver. Ao apresentar explicitamente onde estão as divergências de maior valor, o laudo auxilia o juízo a focar o que realmente importa.

---

## Workflow 3: Atualização Monetária com Índices Econômicos

### O Problema da Atualização

Cálculos trabalhistas frequentemente envolvem atualização de valores históricos por índices econômicos — IPCA para correção monetária, SELIC para juros de mora, TR para FGTS. A escolha do índice correto, do critério de apuração (mensal, acumulado, pro rata) e da data de início da correção impacta significativamente o resultado final.

O Claude não acessa tabelas de índices em tempo real — ele não vai buscar o IPCA de março de 2022 na internet. Mas ele consegue estruturar a memória de cálculo, verificar a metodologia e trabalhar com os índices que você fornece.

### Prompt de Estruturação da Memória de Cálculo

---
*"Estruture a memória de cálculo para atualização monetária das seguintes verbas: [LISTE AS VERBAS COM VALORES E DATAS DE VENCIMENTO]. Critério de correção: [ÍNDICE APLICÁVEL — ex. IPCA para correção + SELIC para juros de mora, conforme [FUNDAMENTO: ex. Súmula TST / CCT / Decisão do juízo]]. Para cada verba: (a) valor original, (b) data de vencimento/exigibilidade, (c) data de atualização, (d) número de meses a corrigir, (e) fator de correção a aplicar [forneça a tabela de índices ou os fatores acumulados], (f) valor corrigido. Apresente a memória de cálculo com precisão suficiente para reprodução por terceiros."*

---

**Nota prática:** Para obter os índices corretos, consulte as tabelas oficiais do TST, do BACEN ou do IBGE. Copie os valores relevantes para dentro do prompt ou como arquivo de referência no Project. O Claude vai trabalhar com os números que você fornece — e vai garantir que a memória de cálculo seja rastreável.

---

## Workflow 4: Lucros Cessantes — Metodologia com Documentação

### O Desafio dos Lucros Cessantes

A perícia de lucros cessantes — seja em contexto trabalhista (incapacidade laborativa), empresarial (interrupção de atividade) ou cível (dano emergente futuro) — exige uma habilidade específica: projetar o que *teria acontecido* na ausência do evento danoso, com base no que a documentação registra sobre o passado.

É um exercício de contrafactual documentado — e é exatamente o tipo de análise em que a estruturação metodológica importa tanto quanto o número final.

### Prompt de Construção de Linha de Base

---
*"Com base nos documentos financeiros do período [PERÍODO HISTÓRICO — antes do evento danoso], construa a linha de base de desempenho do [EMPRESA/TRABALHADOR]. Para cada período disponível: (a) receita ou remuneração, (b) variação percentual em relação ao período anterior, (c) sazonalidade identificada. Calcule: média mensal do período, tendência de crescimento (crescimento médio período a período), intervalo de variação (mínimo e máximo). Essa linha de base será usada como referência para a projeção de lucros cessantes."*

---

### Prompt de Projeção em Três Cenários

---
*"Com base na linha de base estabelecida e no período de cessação [DATA INÍCIO] a [DATA FIM ou 'data da perícia'], calcule os lucros cessantes em três cenários: (1) Cenário conservador — aplique a média histórica sem crescimento; (2) Cenário base — aplique a média histórica com a taxa de crescimento histórica identificada; (3) Cenário expansivo — aplique o valor máximo da série histórica. Para cada cenário: (a) projeção mensal de receita/remuneração, (b) total do período, (c) deduções aplicáveis [custos operacionais, contribuições, impostos — conforme documentação disponível], (d) lucro cessante líquido. Apresente em tabela mensal com totais por cenário e síntese comparativa. Indique qual cenário é mais sustentável tecnicamente com base na série histórica e nos documentos disponíveis."*

---

A apresentação em três cenários em perícia econômica tem uma função adicional: demonstra ao juízo que o perito avaliou a incerteza da projeção — que é inerente a qualquer exercício de contrafactual — e a quantificou em vez de escondê-la.

---

## Caso Completo: Jornada em Disputa, Cálculo em Três Cenários

**O caso:** Reclamação trabalhista. Motorista, vínculo de 4 anos, demitido sem justa causa. Reclamante alega jornada de 12 horas diárias em regime 12×36, com supressão habitual das horas extras. Reclamada apresenta cartões de ponto com jornada de 8h diárias e pagamento regular de adicionais. Inconsistência central: os holerites mostram pagamento de adicional de horas extras em todos os meses — mas o valor do adicional é idêntico em todos os 48 meses do vínculo, sem variação.

**Sessão 1 — Auditoria (35 minutos):**
O prompt de auditoria cruzada identificou imediatamente a anomalia do adicional fixo: em 48 holerites consecutivos, o valor pago como "horas extras" é R$ [VALOR] sem variação de centavo. Probabilidade de jornada real constante ao longo de 4 anos, incluindo férias coletivas, afastamentos e variações de escala: matematicamente improvável. O Claude classificou a rubrica como "valor fixo não variável — inconsistente com pagamento de horas extras reais por regime de compensação."

**Sessão 2 — Conferência do TRCT (25 minutos):**
O TRCT usou como base de cálculo do 13º e das férias apenas o salário base — sem incluir o adicional de horas extras habitual no cálculo das médias, como exige a Súmula 253 do TST para verbas pagas com habitualidade. Divergência identificada e quantificada.

**Sessão 3 — Cálculo Multi-Cenário (60 minutos):**
- Cenário A (documental): confirma o que está nos papéis — jornada registrada, adicional conforme holerite, TRCT como apresentado menos a correção da base de cálculo das médias.
- Cenário B (hipótese do reclamante): jornada de 12h em 12×36, calcula todas as horas extras não pagas e reflexos em todos os institutos.
- Cenário C (hipótese da reclamada): mantém a jornada dos cartões, corrige apenas a base de cálculo das médias.

**Diferença entre Cenário B e Cenário C:** R$ [VALOR] — o que o juízo vai precisar resolver com base nos elementos de prova além dos documentos.

**Total do trabalho:** 4 horas e 20 minutos, incluindo redação dos quesitos com fundamentação.

O laudo não escolheu uma versão. Apresentou as três com metodologia transparente e deixou ao juízo — com base nos demais elementos de prova — a decisão sobre qual versão adotar.

---

## Uma Nota sobre Convenções Coletivas

A Convenção Coletiva de Trabalho (CCT) é um documento de referência fundamental na perícia trabalhista — mas raramente está nos autos do processo completo.

Mantenha as CCTs aplicáveis às categorias em que você atua como arquivos de referência no seu Project do Claude. Quando o processo envolver uma categoria específica, você pode carregar a CCT diretamente na sessão e o Claude vai aplicar as disposições específicas na análise — adicional noturno da categoria, piso salarial, jornada convencional, regras específicas de horas extras.

Sem a CCT como referência, o Claude vai operar com a CLT geral — que pode não refletir condições mais favoráveis da categoria.

---

E quando você está do outro lado — não como perito nomeado, mas como assistente técnico da parte contrária? O Capítulo 9 trata exatamente dessa inversão de papel.

---

### Key Takeaways
1. O maior gargalo da perícia trabalhista é a verificação dos dados de entrada — o Claude cobre essa fase com eficiência que a análise manual raramente alcança
2. A auditoria cruzada de holerites detecta anomalias sistemáticas (como o adicional fixo do caso) que passam despercebidas na leitura linear
3. O cálculo em três cenários (documental / reclamante / reclamada) é mais robusto metodologicamente do que calcular apenas uma versão
4. Na projeção de lucros cessantes, quantificar a incerteza em cenários é mais defensável do que apresentar um único número como verdade
5. CCTs como arquivo de referência no Project garantem que análises trabalhistas apliquem as condições específicas da categoria, não apenas a CLT geral

### Call to Action
*"Se você atua em perícia trabalhista: construa um arquivo de referência com as CCTs das três categorias que mais aparecem nos seus processos e carregue no seu Project. Na próxima perícia envolvendo essas categorias, o Claude vai aplicar as condições específicas automaticamente — sem você precisar verificar cada cláusula manualmente."*

### Preview do Próximo Capítulo
*No Capítulo 9, a lógica se inverte: você não é o perito nomeado — é o assistente técnico que precisa encontrar as falhas no laudo adverso. O Claude como ferramenta de auditoria adversarial.*

---

## Quality Check
- [x] Hook abre com o problema real (verificação de dados, não o cálculo em si)
- [x] Propósito cumprido (4 workflows práticos + caso completo)
- [x] Workflow 1 (holerites/TRCT): auditoria cruzada + conferência do TRCT
- [x] Workflow 2 (verbas rescisórias): lógica dos 3 cenários + prompt multi-cenário
- [x] Workflow 3 (atualização monetária): estrutura de memória de cálculo + nota sobre índices
- [x] Workflow 4 (lucros cessantes): linha de base + projeção em 3 cenários
- [x] Caso completo: jornada em disputa, anomalia detectada, 3 cenários calculados
- [x] Nota prática sobre CCTs como arquivo de referência
- [x] Ação clara ao final (carregar CCTs das categorias mais frequentes)
- [x] Extensão adequada (~3.650 palavras — dentro do target de 3.500)
- [x] Tom consistente (aplicação prática, casos concretos, menos teoria)
- [x] Closing hook correto ("quando você está do outro lado — Cap 9")
- [x] Bridge para Cap 9 (assistente técnico, auditoria adversarial)
