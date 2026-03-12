# EBOOK-SQUAD

Sistema de criação de ebooks bestsellers utilizando IA com agentes especializados, baseado na metodologia **"7 Passos para um BestSeller"**.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Como Usar](#como-usar)
- [Agentes do Sistema](#agentes-do-sistema)
  - [Agentes Core AIOX](#agentes-core-aiox)
  - [Agentes do Bestseller Squad](#agentes-do-bestseller-squad)
- [Workflows](#workflows)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias](#tecnologias)

---

## Sobre o Projeto

O **EBOOK-SQUAD** é um sistema de orquestração de agentes de IA projetado para criar ebooks de alta qualidade seguindo uma metodologia comprovada. O sistema utiliza o framework **Synkra AIOX** e combina 12 agentes core com 5 agentes especializados em criação de livros.

### Principais Recursos

- **Orquestração de Agentes**: 17 agentes especializados trabalhando em conjunto
- **Metodologia Estruturada**: 7 workflows sequenciais para criação de bestsellers
- **Validação em Cada Fase**: Checklists e quality gates garantem qualidade
- **Multi-IDE**: Suporte para Claude Code, AntiGravity, Cursor, Gemini e outros
- **Integração Completa**: Supabase, GitHub, ClickUp, N8N e mais

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

| Requisito | Versão Mínima | Descrição |
|-----------|---------------|-----------|
| Node.js | 18+ | Runtime JavaScript |
| npm | 9+ | Gerenciador de pacotes |
| Git | 2.30+ | Controle de versão |
| GitHub CLI | 2.0+ | Operações GitHub (opcional) |

---

## Instalação

### 1. Clone o Repositório

```bash
git clone [https://github.com/seu-usuario/EBOOK-SQUAD.git](https://github.com/axelpro-system/bestseller-squad)
cd EBOOK-SQUAD
```

### 2. Instale as Dependências

```bash
cd squad-ebook/.aiox-core
npm install
```

### 3. Configure o Ambiente

```bash
cd ../..
cp squad-ebook/.env.example squad-ebook/.env
```

---

## Configuração

Edite o arquivo `.env` com suas chaves de API:

### Provedores de LLM (pelo menos um obrigatório)

```env
# Anthropic (Claude) - Recomendado
ANTHROPIC_API_KEY=sua_chave_aqui

# OpenAI (GPT)
OPENAI_API_KEY=sua_chave_aqui

# DeepSeek (alternativa econômica)
DEEPSEEK_API_KEY=sua_chave_aqui

# OpenRouter (multi-modelo)
OPENROUTER_API_KEY=sua_chave_aqui
```

### Pesquisa e Contexto (recomendado)

```env
# Pesquisa web avançada
EXA_API_KEY=sua_chave_aqui

# Documentação de bibliotecas
CONTEXT7_API_KEY=sua_chave_aqui
```

### Banco de Dados (opcional)

```env
SUPABASE_URL=sua_url_aqui
SUPABASE_ANON_KEY=sua_chave_aqui
SUPABASE_SERVICE_ROLE_KEY=sua_chave_aqui
```

### Integração e Deploy (opcional)

```env
# GitHub
GITHUB_TOKEN=seu_token_aqui

# Gerenciamento de Projeto
CLICKUP_API_KEY=sua_chave_aqui

# Automação
N8N_API_KEY=sua_chave_aqui
N8N_WEBHOOK_URL=sua_url_aqui

# Deploy
RAILWAY_TOKEN=seu_token_aqui
VERCEL_TOKEN=seu_token_aqui
```

---

## Como Usar

### Ativando Agentes

Use a sintaxe `@nome-do-agente` para ativar um agente específico:

```
@aiox-master     # Orquestrador principal
@market-analyst  # Analista de mercado (Bestseller Squad)
@dev             # Desenvolvedor
@architect       # Arquiteto de sistemas
```

### Comandos dos Agentes

Use o prefixo `*` para executar comandos:

| Comando | Descrição |
|---------|-----------|
| `*help` | Mostra comandos disponíveis |
| `*create-story` | Cria uma história de desenvolvimento |
| `*task {nome}` | Executa uma tarefa específica |
| `*workflow {nome}` | Executa um workflow |
| `*exit` | Sai do modo agente |

### Fluxo Completo para Criar um Ebook

```bash
# 1. Ative o orquestrador principal
@aiox-master

# 2. Inicie a análise de mercado
@market-analyst
*analyze-market-trends

# 3. Desenvolva a promessa do livro
@promise-architect
*craft-book-promise

# 4. Estruture o conteúdo
@content-strategist
*design-book-structure

# 5. Crie os capítulos
@chapter-builder
*create-chapters

# 6. Implemente engajamento
@engagement-designer
*design-reader-journey

# 7. Prepare o lançamento
@marketing-agent
*prepare-launch
```

---

## Agentes do Sistema

### Agentes Core AIOX

O sistema conta com **12 agentes core** para desenvolvimento e orquestração:

| Agente | Nome | Função Principal |
|--------|------|------------------|
| **aiox-master** | Orion | **Orquestrador Principal** - Coordena todos os agentes, gerencia o framework e garante qualidade |
| **analyst** | Atlas | **Analista de Negócios** - Pesquisa de mercado, análise competitiva, brainstorming |
| **architect** | Aria | **Arquiteto de Sistemas** - Arquitetura fullstack, decisões de stack tecnológico |
| **data-engineer** | Dara | **Engenheiro de Dados** - Design de schemas, migrações, políticas RLS |
| **dev** | Dex | **Desenvolvedor Full Stack** - Implementação de código, debugging |
| **devops** | Gage | **Especialista DevOps** - ÚNICO autorizado para git push |
| **pm** | Morgan | **Product Manager** - Criação de PRD, gestão de épicos |
| **po** | Pax | **Product Owner** - Gestão de backlog, validação de histórias |
| **qa** | Quinn | **Arquiteto de Testes** - Code review, quality gates |
| **sm** | River | **Scrum Master** - Criação de histórias, planejamento de sprints |
| **squad-creator** | Craft | **Criador de Squads** - Cria, valida e publica squads |
| **ux-design-expert** | Uma | **Designer UX/UI** - Pesquisa de usuários, design systems |

### Agentes do Bestseller Squad

O **Bestseller Squad** possui **5 agentes especializados** em criação de livros:

| Agente | Função | O Que Faz |
|--------|--------|-----------|
| **market-analyst** | Analista de Mercado | Analisa tendências de mercado, comportamento de leitores, concorrência e identifica gaps de mercado |
| **promise-architect** | Arquiteto de Promessa | Traduz problemas do mercado em promessas de livro convincentes. Cria a proposta de valor central do ebook |
| **content-strategist** | Estrategista de Conteúdo | Projeta a estrutura do livro, fluxo de capítulos e garante progressão lógica do conteúdo |
| **chapter-builder** | Construtor de Capítulos | Desenvolve o conteúdo dos capítulos com exercícios práticos e micro-vitórias para o leitor |
| **engagement-designer** | Designer de Engajamento | Implementa estratégias de engajamento do leitor, hooks de continuidade e estabelece credibilidade do autor |

---

## Workflows

O sistema segue **7 workflows sequenciais** baseados na metodologia "7 Passos para um BestSeller":

### Fase 1: Análise de Mercado
**Arquivo**: `01-market-analysis-workflow.yaml`
- Analisar tendências de mercado
- Identificar dores dos leitores
- Avaliar concorrência
- Identificar gaps de mercado

### Fase 2: Desenvolvimento da Promessa
**Arquivo**: `02-promise-development-workflow.yaml`
- Criar promessa do livro
- Refinar declaração de promessa
- Testar clareza da promessa

### Fase 3: Estrutura de Conteúdo
**Arquivo**: `03-content-structure-workflow.yaml`
- Criar outline do livro
- Definir fluxo de capítulos
- Garantir progressão lógica

### Fase 4: Criação de Capítulos
**Arquivo**: `04-chapter-creation-workflow.yaml`
- Escrever conteúdo dos capítulos
- Integrar exercícios práticos
- Criar micro-vitórias

### Fase 5: Engajamento e Autoridade
**Arquivo**: `05-engagement-authority-workflow.yaml`
- Projetar jornada do leitor
- Implementar hooks de continuidade
- Estabelecer credibilidade

### Fase 6: Ativo e Lançamento
**Arquivo**: `06-asset-launch-workflow.yaml`
- Definir livro como ativo
- Aproveitar micro-mercados
- Escalar impacto do livro

### Fase 7: Marketing e Lançamento
**Arquivo**: `07-marketing-launch-workflow.yaml`
- Executar campanha de marketing
- Lançar no mercado

---

## Estrutura do Projeto

```
EBOOK-SQUAD/
│
├── assests/                          # Materiais de referência
│   └── 7-passos-para-um-bestseller.pdf
│
└── squad-ebook/                      # Projeto principal
    │
    ├── .aiox-core/                   # Core do Framework AIOX
    │   ├── core-config.yaml          # Configuração do projeto
    │   ├── package.json              # Dependências
    │   ├── data/                     # Dados e registros
    │   ├── development/              # Tarefas e templates
    │   └── infrastructure/           # Ferramentas e schemas
    │
    ├── .antigravity/                 # Suporte AntiGravity IDE
    │   ├── agents/                   # 12 definições de agentes
    │   └── rules/                    # Regras dos agentes
    │
    ├── .claude/                      # Configuração Claude Code
    │   ├── CLAUDE.md                 # Instruções do sistema
    │   ├── commands/                 # Comandos customizados
    │   ├── hooks/                    # Hooks pré/pós ação
    │   └── rules/                    # Regras de contexto
    │
    └── squads/                       # Squads customizados
        ├── .designs/                 # Blueprints de design
        └── axelpro-system/
            └── bestseller-squad/     # Squad principal
                ├── agents/           # 5 agentes especializados
                ├── workflows/        # 7 workflows YAML
                ├── data/             # 10 arquivos de dados
                ├── checklists/       # Validações por fase
                └── tools/            # Ferramentas customizadas
```

---

## Tecnologias

### Framework Core
- **Synkra AIOX v4.31.1** - Sistema de orquestração de agentes IA
- **Node.js 18+** - Runtime
- **JavaScript/TypeScript** - Linguagens primárias

### Dependências Principais
```
ajv           - Validação JSON Schema
chalk         - Estilização de terminal
commander     - Framework CLI
inquirer      - Prompts interativos
js-yaml       - Parse de YAML
fs-extra      - Utilitários de filesystem
```

### IDEs Suportadas
- Claude Code (primário)
- AntiGravity
- Cursor
- Gemini
- GitHub Copilot

### Integrações MCP
- **Supabase** - Banco de dados, auth, storage
- **Context7** - Documentação de bibliotecas
- **Exa** - Pesquisa web avançada
- **ClickUp** - Gestão de projetos
- **GitHub CLI** - Controle de versão
- **N8N** - Automação de workflows
- **Railway/Vercel** - Deploy

---

## Licença

Este projeto é privado e de uso interno.

---

## Suporte

Para dúvidas ou problemas:
1. Consulte a documentação em `/squad-ebook/.aiox-core/`
2. Verifique os checklists em `/squads/axelpro-system/bestseller-squad/checklists/`
3. Use `@aiox-master *help` para ajuda interativa
