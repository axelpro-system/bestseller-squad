---
task: Spot Market Gaps
responsavel: "@market-analyst"
Entrada:
  - market_trends_report: "Results from analyze-market-trends"
  - reader_pain_points: "Results from identify-reader-pains"
  - competitor_analysis_report: "Results from evaluate-competition"
Saida:
  - market_gap_opportunities: "Prioritized list of book concepts"
  - gap_validation: "Evidence that gap is real and actionable"
  - estimated_market_size: "Potential reader base"
  - competition_level: "How crowded is this gap?"
---

## Objetivo
Identificar oportunidades inexploradas ou nichos subatendidos no mercado. O best-seller ideal ocupa um espaço onde há DEMANDA + BAIXA COMPETIÇÃO + ALTA CONVERSÃO.

## Contexto (Baseado no PDF "7 Passos para um BestSeller")
- **Passo 1**: Encontrar o "molho" - a combinação única de tópico + promessa + posicionamento
- Micromercados são a chave: nichos específicos com público fiel
- A lacuna ideal = problema urgente + poucos concorrentes + público que compra
- "Não escreva um livro sobre 'marketing' - escreva sobre 'marketing para dentistas'"

## Instruções de Execussão

### 1. Cruzamento de Dados
Combine as 3 análises anteriores:
- **Tendências**: O que está crescendo?
- **Dores**: O que pessoas querem resolver?
- **Concorrência**: O que está faltando?

### 2. Identificação de Gaps
Procure por:
- **Dores sem solução**: Problemas urgentes sem livro que resolva bem
- **Públicos esquecidos**: Grupos específicos ignorados pela concorrência
- **Ângulos inexplorados**: Formas diferentes de abordar o mesmo tema
- **Formatos inovados**: Maneiras diferentes de entregar o conteúdo
- **Atualizações necessárias**: Livros velhos com informações desatualizadas

### 3. Validação de Gaps
Para cada gap identificado:
- Quantas pessoas procuram isso? (Volume de busca)
- Quanto estão dispostas a pagar? (Pesquisa de preço)
- Já compram produtos similares? (Comprovante de vontade de pagar)
- É um problema recorrente ou pontual? (Recorrência = clientes recorrentes)

### 4. Scoring de Oportunidades
Crie um score para cada gap (1-10):
- **Urgência**: Quão urgente é o problema?
- **Tamanho do público**: Quantas pessoas têm esse problema?
- **Capacidade de pagar**: O público tem recursos?
- **Intensidade emocional**: O problema afeta emocionalmente?
- **Concorrência**: Quão ocupado está esse espaço?
- **Facilidade de execução**: Você pode escrever esse livro?

## Critérios de Sucesso
- [ ] Identificar pelo menos 5 oportunidades de gap
- [ ] Validar cada gap com dados (busca, reviews, concorrentes)
- [ ] Score de pelo menos 3 gaps com nota > 7/10
- [ ] Documentar público-alvo específico para cada gap
- [ ] Definir ângulo único de abordagem

## Formato do Relatório
```
# Market Gaps Report

## Methodology
[How gaps were identified]

## Top Opportunities (Ranked)

### Opportunity 1: [Name]
- Gap description: [What specifically is missing]
- Target audience: [Specific profile]
- Urgency score: X/10
- Market size: [Estimated readers]
- Competition level: [Low/Medium/High]
- Emotional intensity: X/10
- Unique angle: [How to approach this differently]
- Validation: [Proof this gap exists]
- Recommendation: [Strong/Moderate/Weak]

### Opportunity 2: [Same structure]

## Final Recommendation
[Top 1-3 gaps to pursue with rationale]
```