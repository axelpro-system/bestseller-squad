# Guia Prático para Iniciantes - Bestseller Squad

## Sistema de Criação de Bestsellers com Agentes de IA

---

## 1. O que é o Bestseller Squad?

O **Bestseller Squad** é um sistema inteligente que automatiza a criação de livros bestseller usando a metodologia **"7 Passos para um BestSeller"**.

Em vez de você fazer tudo sozinho, você tem **7 agentes especializados** que trabalham juntos:

- **Market Analyst** - Pesquisa de mercado e tendências
- **Promise Architect** - Define a promessa do seu livro
- **Content Strategist** - Estrutura o conteúdo
- **Chapter Builder** - Escreve os capítulos
- **Engagement Designer** - Estratégias de engajamento
- **Authority Builder** - Posiciona sua autoridade
- **Asset Strategist** - Prepara o lançamento

**Benefícios reais:**
- ⏱️ Economiza meses de trabalho
- 💡 Reduz decisões erradas (baseado em análise de mercado)
- 📈 Livro otimizado para vendas desde o início
- ✅ Validação em cada etapa

---

## 2. Os 7 Passos do Bestseller Squad

### **Passo 1: Análise de Mercado** 🔍
O Market Analyst identifica:
- Tendências de mercado atuais
- Dores e desejos do seu público
- Análise de concorrentes
- Lacunas de mercado a explorar

**Seu primeiro arquivo:** `data/01-market-research-data.md`

### **Passo 2: Desenvolvimento da Promessa** 🎯
O Promise Architect define:
- A promessa central do livro
- Posicionamento único
- Proposição de valor
- Diferencial competitivo

**Seu segundo arquivo:** `data/02-reader-insights-data.md`

### **Passo 3: Estrutura de Conteúdo** 📚
O Content Strategist cria:
- Estrutura completa do livro
- Fluxo de capítulos
- Jornada do leitor
- Arquitetura de aprendizado

**Seu terceiro arquivo:** `data/05-book-structure-data.md`

### **Passo 4: Criação de Capítulos** ✍️
O Chapter Builder escreve:
- Conteúdo de cada capítulo
- Exercícios práticos
- Estudos de caso
- "Micro-vitórias" para engajamento

**Seus capítulos:** `chapters/01-cap1.md`, `chapters/02-cap2.md`, etc.

### **Passo 5: Engajamento e Autoridade** 💪
O Engagement Designer e Authority Builder:
- Estratégias de conexão com o leitor
- Prova social (testimoniais, reviews)
- Credibilidade do autor
- Continuidade (hooks entre capítulos)

**Seu arquivo:** `data/08-engagement-authority-data.md`

### **Passo 6: Livro como Ativo** 💎
O Asset Strategist define:
- Livro como ativo estratégico
- Micro-mercados
- Escalabilidade
- Desdobramentos (cursos, coaching)

**Seu arquivo:** `data/09-asset-strategy-data.md`

### **Passo 7: Marketing e Lançamento** 🚀
Execução final:
- Estratégia de lançamento
- Campanhas de marketing
- Distribuição (Amazon, plataformas)
- Métricas de sucesso

**Seu arquivo:** `data/10-marketing-launch-data.md`

---

## 3. Como Usar o Bestseller Squad - Passo a Passo

### **Setup Inicial**

```bash
# 1. Navegue até o diretório do squad
cd squads/axelpro-system/bestseller-squad

# 2. Configure suas variáveis de ambiente
# Edite o arquivo .env com sua chave de API do Claude

# 3. Verifique a estrutura
ls -la
```

### **Execução do Fluxo Completo**

**Fase 1: Preparação (1-2 dias)**
```
1. Defina seu tema/nicho do livro
2. Identifique seu público-alvo principal
3. Liste seus pontos fortes e experiência
```

**Fase 2: Execução com Agentes (2-3 semanas)**
```
Passo 1 → Passo 2 → Passo 3 → Passo 4 → Passo 5 → Passo 6 → Passo 7
```

**Fase 3: Validação (1 semana)**
```
Revise cada deliverable com os checklists
Faça ajustes se necessário
Aprove antes de avançar
```

**Fase 4: Finalização (3-5 dias)**
```
Compile o livro final
Prepare para lançamento
Execute estratégia de marketing
```

---

## 4. Como Convocar os Agentes

### **Sintaxe Básica**
```
@[nome-do-agente] [tarefa específica]
```

### **Exemplos Reais**

**Iniciar análise de mercado:**
```
@market-analyst Analisar o mercado de livros sobre IA para profissionais jurídicos.
Incluir tendências 2025, dores principais e lacunas de mercado.
```

**Definir a promessa do livro:**
```
@promise-architect Criar promessa para livro sobre IA na perícia judicial.
Público: Peritos judiciários
Diferencial: Metodologia prática com Claude AI
```

**Estruturar o conteúdo:**
```
@content-strategist Estruturar livro com 14 capítulos sobre IA na perícia.
Jornada: Iniciante → Profissional especializado
Cada capítulo deve ter exercício prático.
```

**Escrever um capítulo:**
```
@chapter-builder Escrever capítulo sobre "Engenharia de Prompts para Peritos".
- 2000 palavras
- 3 exemplos práticos com Claude
- 1 exercício prático
- Conectar ao próximo capítulo sobre análise de documentos
```

---

## 5. Melhores Práticas

### ✅ **FAÇA:**
- ✓ Seja muito específico nas instruções
- ✓ Forneça contexto completo (público, objetivo, diferencial)
- ✓ Use exemplos concretos
- ✓ Valide cada etapa com os checklists
- ✓ Revise o conteúdo gerado
- ✓ Faça iterações pequenas se precisar ajustar

### ❌ **EVITE:**
- ✗ Instruções vagas ("escreve sobre marketing")
- ✗ Pular etapas (análise de mercado é crítica)
- ✗ Não fornecer contexto sobre o público-alvo
- ✗ Tentar fazer tudo de uma vez
- ✗ Ignorar os checklists de validação
- ✗ Editar manualmente sem mencionar ao agente

---

## 6. Estrutura de Arquivos

```
bestseller-squad/
├── chapters/              ← Seus capítulos (gerados pelos agentes)
├── data/                  ← Arquivos de pesquisa e estratégia
├── workflows/             ← Fluxos de trabalho (5 passos)
├── checklists/           ← Validações por fase
├── agents/               ← Definições dos 7 agentes
├── templates/            ← Templates para reutilizar
└── GUIA_INICIANTES.md    ← Este guia!
```

### **Arquivos Importantes**

| Arquivo | O Que Contém | Quando Usar |
|---------|-------------|-----------|
| `data/01-market-research-data.md` | Pesquisa de mercado | Antes de começar a escrever |
| `data/02-reader-insights-data.md` | Insights do leitor | Para personalizar conteúdo |
| `data/05-book-structure-data.md` | Estrutura do livro | Antes de cada capítulo |
| `chapters/*.md` | Conteúdo dos capítulos | Seu livro final |
| `checklists/*.md` | Listas de validação | Ao completar cada etapa |

---

## 7. Troubleshooting

### **Problema: Agente não entende minha instrução**
**Solução:** Seja mais específico. Em vez de "escreve sobre marketing", diga:
"Crie estratégia de lançamento para livro sobre IA na perícia, dirigido a profissionais entre 35-55 anos, com foco em ROI e casos de sucesso reais."

### **Problema: Conteúdo não atende minhas expectativas**
**Solução:**
1. Diga ao agente exatamente o que falta
2. Forneça um exemplo do tom/estilo esperado
3. Peça para refazer com ajustes específicos

### **Problema: Não sei por onde começar**
**Solução:** Comece aqui:
1. Defina seu tema e público-alvo (5 linhas)
2. Chame @market-analyst para validar
3. Chame @promise-architect para definir a promessa
4. Só depois comece a estrutura e capítulos

### **Problema: Achei que deveria ter menos/mais capítulos**
**Solução:**
1. Converse com @content-strategist
2. Ele reestruturará mantendo a lógica
3. Os capítulos serão reagrupados automaticamente

---

## 8. Timeline Típico

```
Semana 1:    Análise + Promessa + Estrutura
Semanas 2-3: Capítulos 1-7
Semanas 4-5: Capítulos 8-14
Semana 6:    Engajamento + Autoridade + Ativo
Semana 7:    Marketing + Validação Final
Semana 8:    Lançamento
```

**Resultado:** Um livro completo, validado e pronto para mercado em 2 meses.

---

## 9. Próximos Passos

1. **Hoje:** Defina seu tema e público-alvo
2. **Amanhã:** Rode Passo 1 (Análise de Mercado)
3. **Dia 3:** Rode Passo 2 (Promessa)
4. **Dias 4-5:** Rode Passo 3 (Estrutura)
5. **Semanas 2-3:** Rode Passo 4 (Capítulos)
6. **Semana 4:** Rode Passos 5-7 (Engajamento, Ativo, Marketing)

---

## 10. Recursos Extras

- **Checklists:** Veja `checklists/` para validações
- **Templates:** Use `templates/` para reutilizar estruturas
- **Tarefas:** Veja a lista completa de tasks em `squad.yaml`
- **Workflows:** Entenda o fluxo em `workflows/*.yaml`

---

## Conclusão

O Bestseller Squad é sua equipe de especialistas em livros. **Você é o estrategista**, os agentes são seus executores.

**Comece agora:**
```
@market-analyst Vamos criar um bestseller sobre [seu tema].
Público-alvo: [descreva seu leitor ideal]
Diferencial: [o que torna único]
```

Boa sorte! 🚀 Seu livro bestseller está apenas começando!

---

**Última atualização:** Março 2025
**Versão:** 1.0
**Criado por:** Axelpro System
