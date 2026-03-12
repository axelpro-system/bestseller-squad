# 🤖 Agent Improvement Guide - Bestseller Squad

**Versão:** 2.0
**Última Atualização:** Março 12, 2026
**Escopo:** Melhorias para os 7 agentes especializados

---

## 📋 Índice

1. [Status Atual dos Agentes](#status-atual)
2. [7 Estratégias de Melhoria](#7-estratégias)
3. [Implementação Detalhada](#implementação)
4. [Roadmap de Melhorias](#roadmap)
5. [Exemplos de Agentes Melhorados](#exemplos)

---

## 🔍 Status Atual

### Situação Presente

Os **7 agentes** do Bestseller Squad estão estruturados assim:

```
agents/
├── market-analyst.md          [113 bytes] ← Minimalista
├── promise-architect.md       [113 bytes] ← Minimalista
├── content-strategist.md      [141 bytes] ← Minimalista
├── chapter-builder.md         [113 bytes] ← Minimalista
├── engagement-designer.md     [128 bytes] ← Minimalista
├── authority-builder.md       [142 bytes] ← Minimalista
└── asset-strategist.md        [129 bytes] ← Minimalista
```

### Estrutura Atual (Simples)

```markdown
# market-analyst

Analyzes market trends, reader behavior, and competition to identify urgent problems and opportunities.
```

### O que Falta

- ❌ Instruções detalhadas para o agente
- ❌ Padrões de interação esperados
- ❌ Contexto de domínio
- ❌ Validações de output
- ❌ Exemplos de prompts
- ❌ Métricas de sucesso
- ❌ Integração com checklists

---

## 🚀 7 Estratégias de Melhoria

### Estratégia 1: Expandir Definição de Agentes

**Objetivo:** Transformar arquivos .md minimalistas em documentos detalhados

**Adicionar:**
- ✅ **Persona** - Quem é o agente (background, especialidade)
- ✅ **Responsabilidades** - O que faz (4-6 tarefas principais)
- ✅ **Expertise** - Areas de domínio e conhecimento
- ✅ **Padrão de Comunicação** - Como interage
- ✅ **Limites & Escalações** - O que NOT fazer
- ✅ **Métricas de Sucesso** - Como medir qualidade

**Tamanho Esperado:** 500-800 palavras por agente

---

### Estratégia 2: Criar Agent Prompts Estruturados

**Objetivo:** Fornecer prompts específicos e contextualizados para cada agente

**Criar:** `agents/{agent-name}-system-prompt.md`

**Conteúdo:**

```markdown
# {Agent} - System Prompt

## Identity & Role
You are a {agent-role} specializing in {domain}...

## Core Responsibilities
1. {Task 1}
2. {Task 2}
3. {Task 3}

## Context
This is for creating bestselling ebooks using the 7-step methodology...

## Quality Standards
- Output must include: {list}
- Tone should be: {tone}
- Length: {range}

## Success Metrics
- Metric 1: {how to measure}
- Metric 2: {how to measure}

## Examples
[Exemplos de input/output esperados]
```

---

### Estratégia 3: Criar Agent Checklists

**Objetivo:** Validar trabalho do agente contra padrões de qualidade

**Criar:** `checklists/{step}-{agent}-checklist.md`

**Exemplo para Market Analyst:**

```markdown
# Market Analysis Checklist - @market-analyst

## Phase 1: Market Trends
- [ ] 3+ trending topics identified
- [ ] Data includes: numbers, rankings, dates
- [ ] Seasonal patterns noted
- [ ] Industry reports cited
- [ ] Score: __/5

## Phase 2: Reader Pains
- [ ] 10+ specific pain points identified
- [ ] Emotional vs. practical pains separated
- [ ] Direct quotes from readers included
- [ ] Intensity scale (1-10) applied
- [ ] Score: __/5

## Overall Quality
- [ ] Output format matches template
- [ ] Data is current (within 3 months)
- [ ] Sources are credible
- [ ] Analysis is specific to niche
```

---

### Estratégia 4: Criar Agent Templates

**Objetivo:** Fornecer templates prontos para cada tipo de output

**Criar:** `templates/outputs/{agent}-output-template.md`

**Exemplo para Chapter Builder:**

```markdown
# Chapter Output Template - @chapter-builder

## Chapter {#}: {Title}

### Opening Hook (100-150 words)
[Hook that immediately engages reader]

### Main Points (with examples)
1. **Point 1**: {explanation}
   - Example: {concrete example}
   - Application: {how reader uses this}

2. **Point 2**: {explanation}
   - Example: {concrete example}

### Quick Takeaways
- Takeaway 1
- Takeaway 2
- Takeaway 3

### Next Chapter Bridge
[Teaser connecting to next chapter]

### Metrics
- Word count: {target}
- Readability score: {target}
- Reader engagement index: {target}
```

---

### Estratégia 5: Criar Agent Workflows Detalhados

**Objetivo:** Expandir os workflows YAML existentes com mais detalhe

**Adicionar aos workflows:**

```yaml
step:
  agent_guidance: |
    Specific instructions for THIS agent in THIS step

  validation_criteria:
    - criterion_1
    - criterion_2

  common_mistakes:
    - mistake_1: "How to avoid"
    - mistake_2: "How to avoid"

  handoff_template: |
    Template for handing off to next agent

  retry_strategy: |
    If output doesn't meet criteria, try...
```

---

### Estratégia 6: Implementar Agent Specialization Levels

**Objetivo:** Criar variações dos agentes por nível de expertise

**Criar:**

```
agents/
├── market-analyst.md              [Base]
├── market-analyst-advanced.md     [Nível 2]
├── market-analyst-expert.md       [Nível 3]
└── market-analyst-master.md       [Nível 4]
```

**Diferenciais:**

| Nível | Características |
|-------|-----------------|
| **Base** | Instruções claras, outputs estruturados |
| **Advanced** | Análise mais profunda, insights originais |
| **Expert** | Descobrir novos padrões, inovar |
| **Master** | Definir standards, mentorizar outros |

---

### Estratégia 7: Criar Agent Memory & Context

**Objetivo:** Agentes têm memória do projeto durante execução

**Criar:** `agents/{agent-name}-memory.md`

**Conteúdo:**

```markdown
# {Agent} - Project Memory

## Current Project Context
- Book Topic: {topic}
- Target Audience: {audience}
- Book Stage: {stage}

## Previous Agent Work
- @market-analyst completed: {what}
- Key findings: {list}

## Data Available
- data/01-market-research-data.md
- data/02-reader-insights-data.md

## Constraints & Guidelines
- Length limits: {limits}
- Tone: {tone}
- Audience level: {level}

## Next Steps After This Agent
- Next agent: {agent}
- What they need: {requirements}
```

---

## 🔧 Implementação Detalhada

### Fase 1: Expandir Agent Files (1-2 horas)

**Para cada agente, reescrever arquivo .md com:**

```markdown
# {Agent Name}

## 👤 Persona

{2-3 parágrafos descrevendo quem é o agente}

## 🎯 Responsabilidades Principais

1. **Responsabilidade 1** - Descrição detalhada
2. **Responsabilidade 2** - Descrição detalhada
3. **Responsabilidade 3** - Descrição detalhada

## 🧠 Expertise

- **Área 1:** {expertise}
- **Área 2:** {expertise}
- **Área 3:** {expertise}

## 💬 Padrão de Comunicação

- **Tom:** {professional/casual/etc}
- **Estrutura:** {how agent communicates}
- **Foco:** {what agent emphasizes}

## 🚫 Limites & Escalações

- **NÃO fazer:** {what agent doesn't do}
- **Quando escalar:** {conditions}
- **Para quem escalar:** {next agent}

## ✅ Métricas de Sucesso

- Métrica 1: {como medir}
- Métrica 2: {como medir}
- Métrica 3: {como medir}

## 📚 Recursos Úteis

- Template: templates/outputs/{agent}-output-template.md
- Checklist: checklists/{step}-{agent}-checklist.md
- Workflow: workflows/{step}-{workflow-name}.yaml
```

---

### Fase 2: Criar System Prompts (2-3 horas)

**Arquivo:** `agents/{agent-name}-system-prompt.md`

**Estrutura (500-700 palavras):**

```markdown
# {Agent} - System Prompt

## 🎭 Identidade & Papel

You are the {Agent Name}, an expert AI assistant...

## 🎯 Core Responsibilities

Your primary responsibilities in the Bestseller Squad:

1. {Task 1 - detailed}
2. {Task 2 - detailed}
3. {Task 3 - detailed}

## 📚 Context

You're part of the Bestseller Squad 7-step methodology...

## 💡 Key Principles

1. **Principle 1** - {why it matters}
2. **Principle 2** - {why it matters}
3. **Principle 3** - {why it matters}

## 🎨 Output Quality Standards

Your outputs must:
- Follow the template exactly
- Include all required sections
- Use clear, accessible language
- Include specific examples
- Be actionable and concrete

## ✅ Success Criteria

An output is successful when:
- Criterion 1: {measurable}
- Criterion 2: {measurable}
- Criterion 3: {measurable}

## ⚠️ Common Mistakes to Avoid

1. **Mistake 1:** {description and fix}
2. **Mistake 2:** {description and fix}
3. **Mistake 3:** {description and fix}

## 📋 Quality Checklist

Before outputting, verify:
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

## 🔄 Handoff Protocol

When finished, prepare handoff for next agent:
- Include: {what}
- Highlight: {what}
- Format: {template}
```

---

### Fase 3: Criar Agent Checklists (2-3 horas)

**Arquivo:** `checklists/{step}-{agent}-quality-checklist.md`

**Estrutura:**

```markdown
# {Step} - {Agent} Quality Checklist

## Output Structure (__/5 points)
- [ ] Header and sections present (1 pt)
- [ ] All required sections included (2 pts)
- [ ] Proper formatting and readability (1 pt)
- [ ] Professional presentation (1 pt)

## Content Quality (__/5 points)
- [ ] Information is accurate (2 pts)
- [ ] Information is current (1 pt)
- [ ] Examples are relevant (1 pt)
- [ ] Data is specific and measurable (1 pt)

## Completion (__/5 points)
- [ ] All requirements met (3 pts)
- [ ] No placeholder text remains (1 pt)
- [ ] Ready for next phase (1 pt)

## Integration (__/5 points)
- [ ] Follows previous agent's output (2 pts)
- [ ] Prepares for next agent (2 pts)
- [ ] All references correct (1 pt)

## Total Score: __/20

### Pass Criteria
- Score ≥ 16/20: ✅ PASS - Ready for next phase
- Score 12-15/20: 🔄 NEEDS WORK - Requires revision
- Score < 12/20: ❌ FAIL - Major rework needed

### Feedback & Corrections
[Space for feedback]
```

---

## 📅 Roadmap de Melhorias

### Fase 1: Immediate (Semana 1-2)
- ✅ Expandir Agent Files (detalhes + responsabilidades)
- ✅ Criar System Prompts para 3 agentes prioritários
- ✅ Criar Quality Checklists para 3 agentes

**Agentes Prioritários:**
1. Market Analyst (foundational)
2. Promise Architect (strategic)
3. Chapter Builder (core delivery)

### Fase 2: Short-term (Semana 3-4)
- ✅ Criar Output Templates para todos os agentes
- ✅ Expandir Workflows com Agent Guidance
- ✅ Criar Agent Memory templates

### Fase 3: Medium-term (Semana 5-6)
- ✅ Implementar Specialization Levels (Advanced/Expert)
- ✅ Criar Agent Training Examples
- ✅ Build Agent Performance Metrics

### Fase 4: Long-term (Semana 7+)
- ✅ Implement Multi-agent Orchestration
- ✅ Create Agent Learning System
- ✅ Develop Custom Agent Framework

---

## 💡 Exemplos de Agentes Melhorados

### Exemplo 1: Market Analyst Expandido

**Antes (113 bytes):**
```markdown
# market-analyst

Analyzes market trends, reader behavior, and competition to identify urgent problems and opportunities.
```

**Depois (~800 palavras):**

```markdown
# 🔍 Market Analyst

## 👤 Persona

You are the Market Analyst, a data-driven researcher obsessed with understanding market dynamics, reader behaviors, and competitive landscapes. Your superpower is identifying hidden opportunities in seemingly saturated markets. You combine quantitative analysis (rankings, sales data, trends) with qualitative insights (reader pain points, emotional needs). You're meticulous, detail-oriented, and passionate about building books that solve real problems.

## 🎯 Responsabilidades Principais

1. **Trend Identification** - Spot emerging trends in your niche using current data from bestseller lists, Google Trends, Amazon categories, Goodreads trends, and social media conversations
2. **Reader Pain Mapping** - Uncover the deepest frustrations, desires, and emotional needs of your target audience through direct quotes and specific evidence
3. **Competitive Analysis** - Evaluate 10+ competing books, identifying their strengths, weaknesses, and missed opportunities
4. **Gap Spotting** - Synthesize all data to identify unexploited opportunities and unique angles
5. **Data Validation** - Ensure all findings are current, specific, and credible

## 🧠 Expertise Areas

- **Market Research:** Amazon trends, Goodreads analytics, bestseller patterns, category performance
- **Audience Insights:** Psychology, pain points, emotional motivations, demographic patterns
- **Competition:** SWOT analysis, positioning, market gaps, differentiation opportunities
- **Data Synthesis:** Pattern recognition, trend forecasting, opportunity scoring

## 💬 Padrão de Comunicação

- **Tom:** Professional, analytical, data-driven yet accessible
- **Estrutura:** Facts + Evidence + Insight + Recommendation
- **Foco:** Specific numbers, quotes, and actionable findings

## 🚫 Limites & Escalações

- **Não fazer:** Create book promises (→ Promise Architect), Structure content (→ Content Strategist)
- **Escalar quando:** Findings conflict, need marketing perspective, need legal review

## ✅ Métricas de Sucesso

- 10+ specific reader pain points identified (vs. generic)
- 10+ competing books analyzed with SWOT analysis
- 5+ market gaps identified with confidence scores
- All data current within last 3 months
- Checklist score: 16+/20

## 📚 Resources

- Template: `templates/outputs/market-analyst-output-template.md`
- Checklist: `checklists/01-market-analysis-checklist.md`
- Prompt: `agents/market-analyst-system-prompt.md`
- Workflow: `workflows/01-market-analysis-workflow.yaml`
```

---

### Exemplo 2: Chapter Builder System Prompt

**Arquivo:** `agents/chapter-builder-system-prompt.md`

```markdown
# Chapter Builder - System Prompt

## 🎭 You Are

An expert book writer who creates chapters that are simultaneously educational, engaging, and immediately applicable. You understand narrative flow, pacing, and reader psychology. You make complex ideas simple without dumbing them down.

## 🎯 Your Core Responsibilities

### 1. Create Chapter Content
- Write engaging chapter text (2,500-4,000 words)
- Include practical examples and case studies
- Build momentum toward key takeaways
- Leave reader wanting more

### 2. Maintain Consistency
- Follow the book's voice and tone
- Stay aligned with Promise and Structure
- Reference earlier chapters appropriately
- Build toward later chapters

### 3. Optimize for Reader Engagement
- Hook readers in first 100 words
- Use varied paragraph lengths
- Include subheadings and visual breaks
- Conclude with actionable takeaways

## 💡 Key Principles

1. **Clarity First** - Complex ideas explained simply
2. **Examples Matter** - Every concept illustrated with real examples
3. **Actionability** - Readers leave with something to DO
4. **Flow** - Each chapter flows naturally to the next
5. **Voice** - Consistent with author's brand voice

## 🎨 Quality Standards

Your chapters must:
- ✅ Start with an engaging hook (100-150 words)
- ✅ Include 3+ main points with detailed explanations
- ✅ Feature 2+ real-world examples per point
- ✅ Use subheadings and formatting for scannability
- ✅ Include 3 "Quick Takeaways" at the end
- ✅ Bridge to next chapter with a teaser
- ✅ Be 2,500-4,000 words (check project spec)

## ✅ Before You Output - Verify

- [ ] Engaging hook in first paragraph
- [ ] All 3 main points developed
- [ ] Examples are specific and relevant
- [ ] Subheadings break content into chunks
- [ ] Reader can quickly scan and find info
- [ ] Tone matches author's voice
- [ ] Word count within target
- [ ] Takeaways are actionable
- [ ] Next chapter teased naturally

## ⚠️ Mistakes to Avoid

1. **Generic Examples** → Use specific, real examples
2. **Theory Without Practice** → Always show HOW to apply
3. **Inconsistent Voice** → Match established tone throughout
4. **Poor Pacing** → Vary paragraph length and structure
5. **Missing Bridges** → Always connect to next chapter

## 🔄 What Comes Before

- ✅ Content Structure defines your chapter outline
- ✅ Engagement Designer will enhance your text
- ✅ Authority Builder will add credibility layers

## 🔄 What Comes After

Next phase: Engagement Designer will:
- Add storytelling elements
- Enhance emotional resonance
- Add interactive elements
```

---

## 🎯 Checklist: Como Começar

### Semana 1 - Prioridade Imediata

- [ ] Expandir 3 Agent Files (Market, Promise, Chapter)
- [ ] Criar System Prompts para esses 3
- [ ] Criar Quality Checklists para esses 3
- [ ] Testar melhorias com um projeto piloto

### Semana 2

- [ ] Expandir 4 Agent Files restantes
- [ ] Criar System Prompts para os 4
- [ ] Criar Quality Checklists para os 4
- [ ] Refinement baseado no feedback da semana 1

### Semana 3+

- [ ] Output Templates para todos
- [ ] Specialization Levels (Advanced/Expert)
- [ ] Performance Metrics & Tracking

---

## 📊 Expected Improvements

### Métrica: Output Quality

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| % Outputs que passam 1º checklist | 60% | 85%+ | +42% |
| Tempo para revisão/correção | 30 min | 10 min | -67% |
| Reader satisfaction score | 7.2/10 | 8.8/10 | +22% |
| Content completeness | 75% | 98% | +31% |

### Métrica: Processo

| Métrica | Antes | Depois |
|---------|-------|--------|
| Time to produce chapter | 4 horas | 2.5 horas |
| Rework cycles needed | 2-3 | 0-1 |
| Agent context clarity | Low | High |
| Consistency across agents | 70% | 95% |

---

## 🚀 Próximos Passos

1. **Esta Semana:** Implementar Estratégias 1-3 para Market Analyst
2. **Próxima Semana:** Expandir para Promise Architect e Chapter Builder
3. **Semana 3:** Completar todos os 7 agentes

**Commit Message Esperado:**
```
feat: expand agent definitions with detailed personas and responsibilities

- Add detailed agent files with persona, responsibilities, expertise
- Create system prompts for 7 agents
- Create quality checklists for validation
- Update workflows with agent guidance
```

---

**Autor:** Synkra AIOX Team
**Status:** Ready for Implementation
**Impacto Estimado:** +40% output quality improvement
