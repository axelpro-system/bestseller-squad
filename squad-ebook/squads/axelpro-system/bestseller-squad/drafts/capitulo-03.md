# Capítulo 3 — *A Metodologia DS-First: Decisões Antes do Código*

---

**A diferença entre um DS que dura e um que é abandonado não está no código — está nas decisões tomadas antes de abrir o editor.**

Nos Capítulos 1 e 2, você diagnosticou o problema e conheceu os padrões de falha. Agora começa a parte boa: vamos construir um mapa. Um framework claro de quatro fases que o livro inteiro vai seguir.

Este capítulo é o mais curto em código e o mais importante em estratégia. Cada decisão que você tomar aqui vai economizar semanas de retrabalho mais tarde.

---

## 3.1 — A Metodologia DS-First

DS-First não é um nome de ferramenta. É um princípio: **decisões de Design System precedem decisões de componente.**

O problema com a maioria das implementações é que elas começam no lugar errado. Alguém cria um botão, depois cria um input, depois percebe que as cores não batem, tenta padronizar, descobre que a escala de tipografia está inconsistente, e acaba refatorando tudo do zero três vezes.

DS-First inverte a ordem:

```
❌ Abordagem comum:
Componente → Variante → Token → Sistema

✅ DS-First:
Sistema → Token → Componente → Variante
```

Você decide a arquitetura do sistema antes de escrever o primeiro componente. Escolhe os tokens, define a nomenclatura, escolhe as ferramentas, define a governança. Depois constrói.

É mais lento para começar. Muito mais rápido para escalar.

---

## 3.2 — As Quatro Fases da Metodologia

```
FASE 1 — FUNDAÇÃO      (Caps 4–5)
─────────────────────────────────
• Design Tokens (cores, espaçamento, tipografia)
• Figma Variables configuradas e sincronizadas
• Style Dictionary gerando CSS Custom Properties
• Tema claro e escuro funcionando

Entregável: tokens.json + CSS vars + Figma sincronizado
Tempo médio: 2–3 dias

──────────────────────────────────────────────────────

FASE 2 — CORE          (Caps 6–7)
─────────────────────────────────
• 5 componentes fundamentais implementados
• Storybook com autodocs configurado
• Stories completos para cada componente
• Publicação no Chromatic

Entregável: 5 componentes prontos + Storybook publicado
Tempo médio: 1–2 semanas

──────────────────────────────────────────────────────

FASE 3 — ENGENHARIA    (Caps 8–11)
─────────────────────────────────
• Monorepo com Turborepo
• Pacote npm publicado (versão 0.1.0)
• Changesets configurados
• CI/CD com GitHub Actions
• Testes (Vitest + Chromatic visual tests)
• Acessibilidade (axe-core no Storybook)

Entregável: DS publicável e mantível como pacote
Tempo médio: 1–2 semanas

──────────────────────────────────────────────────────

FASE 4 — ESCALA        (Caps 12–14)
─────────────────────────────────
• Estratégia de adoção para o time
• Governança e processo de contribuição
• Plano de roadmap

Entregável: DS em uso real pelo time, com processo
Tempo médio: em curso (nunca termina)
```

**Total até o DS ser instalável e em uso: ~3–5 semanas** (part-time, sem parar o produto)

---

## 3.3 — Definindo o Escopo Mínimo Viável

O escopo é a decisão mais subavaliada na criação de um DS.

A pergunta errada: "Quais componentes precisamos ter?"
A pergunta certa: "Quais componentes vamos criar primeiro para entregar o máximo de valor com o mínimo de esforço?"

Para responder com dados, faça uma auditoria simples: olhe as últimas 10 telas ou features do seu produto. Liste quais componentes aparecem em 7 ou mais delas. Esses são os candidatos para os seus primeiros 5 componentes.

Para a maioria dos produtos web, a lista de componentes que aparecem em 70%+ das telas é sempre parecida:

1. **Button** — presença garantida em qualquer produto com interação
2. **Input / Form field** — qualquer produto com dados de usuário
3. **Typography** — todo texto que não está em um componente específico
4. **Card** — a unidade de layout mais comum em produtos de informação
5. **Badge / Tag** — status, categorias, alertas inline

Não é coincidência que esses são os 5 componentes que implementamos no Capítulo 6. Eles resolvem 80% dos casos de interface de produto. Os outros 20% vêm depois, baseados em necessidades reais.

---

## 3.4 — Decisões de Stack: O Framework de Escolha

Uma das perguntas mais frequentes de devs que começam um DS: "Qual stack devo usar?"

A resposta honesta é: depende do contexto. Mas existem padrões claros:

### Variável 1: Você usa React?

Se sim, as opções se organizam em dois grupos:

**Opção A — shadcn/ui + Tailwind CSS**
- Ideal para: times pequenos (1–5 devs), projetos novos, quando você quer velocidade
- Prós: componentes acessíveis prontos, Tailwind para customização rápida, grande comunidade
- Contras: menos controle sobre os primitivos, depende do shadcn manter os componentes atualizados
- Não use se: você precisa de um DS com identidade visual muito própria ou multi-plataforma

**Opção B — Componentes custom + CVA + Radix Primitives**
- Ideal para: times médios a grandes, produto com identidade visual própria, DS que vai escalar
- Prós: controle total, performance melhor, independência da manutenção de terceiros
- Contras: mais esforço para começar, cada componente precisa ser construído do zero
- **É a abordagem deste livro.** Usamos Radix para acessibilidade nos primitivos (Dialog, Tooltip, Select) e CVA para variantes.

### Variável 2: Tailwind vs. CSS Modules vs. CSS-in-JS

| Abordagem | Quando usar | Quando evitar |
|---|---|---|
| **Tailwind CSS** | DS novo, time já usa Tailwind no produto | DS multi-plataforma (mobile, email) |
| **CSS Modules** | Precisa de escopo estrito, sem Tailwind | Time pequeno que prefere utility classes |
| **CSS Custom Props** | Qualquer abordagem — tokens sempre usam | Nunca evitar: é complementar |
| **CSS-in-JS (Emotion, SC)** | Legado que já usa | Projetos novos — bundle e runtime são pesados |

**Nossa stack para o DS Book Shop:**
- **React 18 + TypeScript** — base
- **Tailwind CSS v3** — estilos utilitários
- **Class Variance Authority (CVA)** — variantes de componentes
- **Radix UI Primitives** — acessibilidade para componentes complexos
- **Style Dictionary** — transformação de tokens
- **Storybook 8** — documentação
- **Vitest + Testing Library** — testes
- **Turborepo + pnpm** — monorepo
- **tsup** — bundler de biblioteca
- **Changesets** — versionamento

---

## 3.5 — Governança: Quem Decide, Quem Aprova, Quem Mantém

Governança é o tema mais ignorado e mais crítico de um DS.

Um sistema técnico perfeito sem governança clara evolui para caos em 6 meses. Isso porque:
- Devs adicionam componentes sem padronização
- Designers alteram tokens sem comunicar o time
- Ninguém sabe qual versão está em produção
- Componentes ficam duplicados (há 3 versões de DatePicker no repositório)

Você precisa definir três papéis antes de lançar:

**O Mantenedor**: A pessoa responsável por aceitar ou rejeitar PRs, manter o CHANGELOG, e garantir que o DS segue a arquitetura definida. Para times pequenos, pode ser uma pessoa. Para times maiores, é um pequeno comitê. *Sem um mantenedor claro, o DS evolui sem direção.*

**O Contribuidor**: Qualquer dev do time pode contribuir com novos componentes ou correções — mas existe um processo. O processo (RFC → implementação → review → merge) é detalhado no Capítulo 13.

**O Consumidor**: Os devs que usam o DS mas não contribuem diretamente. Precisam ter acesso fácil à documentação e um canal claro para solicitar novos componentes.

Para times de 1–5 pessoas: mantenedor e contribuidor são a mesma pessoa. O consumidor é o resto do time.
Para times de 5–15: 1–2 mantenedores eleitos trimestralmente.
Para times de 15+: um squad dedicado (DS squad) ou um guild com representantes por time.

---

## 3.6 — A Estratégia "5 → 50 → 500"

Esta é a regra de crescimento que evita o Big Bang sem comprometer o escopo:

**Fase 5**: Comece com 5 componentes que resolvem 80% das suas necessidades de hoje. Lance. Obtenha feedback. Use em produção.

**Fase 50**: A cada feature de produto que precisa de um componente novo, adicione ao DS *antes* de usar no produto. Ao longo dos próximos 6–12 meses, o DS cresce para ~50 componentes organicamente, todos com usuários reais desde o primeiro dia.

**Fase 500**: Em organizações grandes, o DS se torna um produto com equipe dedicada, cobrindo centenas de componentes, múltiplas plataformas (web, mobile, email), múltiplos temas (light, dark, brand A, brand B). Mas isso é construído sobre a base sólida das 50 componentes, não do zero.

O erro de pular direto para "500" sem passar pelo "5" e "50" é exatamente o Big Bang que matou o DS da startup do caso do Capítulo 2.

---

## 3.7 — O Projeto-Modelo: DS Book Shop

A partir do próximo capítulo, cada exercício e exemplo de código usa um projeto real: **o DS Book Shop**.

**O que é:** Um e-commerce fictício de livraria online. Produto simples o suficiente para não distrair com lógica de negócio complexa, mas rico o suficiente para exigir a maioria dos componentes que você vai precisar no dia a dia.

**Por que uma livraria:** Tem formulários (login, checkout), produtos (cards de livros), navegação (header, breadcrumb), feedback (badge de estoque, ratings), e dados (tabelas de pedidos). Cobre 90% dos casos de uso típicos de produto digital.

**Stack do projeto:**
```
design-system/ (monorepo Turborepo)
├── packages/
│   ├── tokens/           ← @ds-bookshop/tokens
│   ├── components/       ← @ds-bookshop/components
│   └── utils/            ← @ds-bookshop/utils
├── apps/
│   ├── storybook/        ← documentação pública
│   └── playground/       ← app de teste local
├── turbo.json
└── pnpm-workspace.yaml
```

**Identidade visual:**
- Cores: azul índigo (primária) + âmbar (acento) + tons de cinza neutro
- Tipografia: Inter (body) + Merriweather (display/headings)
- Tom: professional, acessível, levemente literário

O repositório completo está disponível no GitHub (veja Apêndice C). Mas o objetivo não é copiar — é construir junto, capítulo por capítulo, entendendo cada decisão.

---

## 📋 EXERCÍCIO 3.1 — Mapa de Decisões de Stack

```
Responda as questões abaixo para definir a configuração ideal
para o SEU DS (não o DS Book Shop, o seu):

─── CONTEXTO DO PRODUTO ──────────────────────────────────
1. Seu produto usa React?
   [ ] Sim, React 16-17  [ ] Sim, React 18+  [ ] Não (veja Apêndice A)

2. Usa TypeScript?
   [ ] Sim, totalmente  [ ] Parcialmente  [ ] Não

3. Tamanho do time de engenharia:
   [ ] 1–3 devs         [ ] 4–8 devs         [ ] 8+ devs

─── CONTEXTO DO DESIGN ───────────────────────────────────
4. Usa Figma?
   [ ] Sim, ativamente  [ ] Sim, pouco usado  [ ] Não

5. Tem designer(s) no time?
   [ ] Sim, 1–2         [ ] Sim, 3+          [ ] Não

─── CONTEXTO DO DS ───────────────────────────────────────
6. O DS será:
   [ ] Interno (só o time usa)
   [ ] Open-source (comunidade ou clientes usam)
   [ ] Multi-produto (várias aplicações consomem)

─── RESULTADO RECOMENDADO ────────────────────────────────
Se respondeu React 18+ | TypeScript | time ≤8 | Figma:
→ Stack: shadcn/ui + Tailwind + CVA + Storybook
→ Monorepo: Turborepo (opcional para time pequeno)
→ Tempo estimado até primeira release: 1–2 semanas

Se respondeu React 18+ | TypeScript | time 8+ | Figma | multi-produto:
→ Stack: Custom + CVA + Radix + Tailwind + Style Dictionary
→ Monorepo: Turborepo com múltiplos packages
→ Tempo estimado até primeira release: 2–4 semanas

─── SEU MANTENEDOR ───────────────────────────────────────
Nome da pessoa responsável pelo DS: ____________________
Frequência de review de PRs: [ ] Diário [ ] Semanal [ ] Quinzenal

─── ESCOPO INICIAL ───────────────────────────────────────
Liste os 5 componentes mais presentes no seu produto:
1. ________________  2. ________________  3. ________________
4. ________________  5. ________________
```

---

## 🏆 Micro-vitória 3.1 — Clareza

> *Você tem agora um mapa. Não uma lista de tarefas impossíveis, mas um caminho de 4 fases com entregáveis claros em cada etapa. Esse mapa é o que separa um DS que vai existir de um DS que vai apenas ser planejado. A partir do próximo capítulo, seguimos o mapa juntos — uma fase de cada vez.*

---

## Key Takeaways — Capítulo 3

1. **DS-First** significa decidir a arquitetura do sistema antes de escrever o primeiro componente. A ordem importa: Sistema → Token → Componente → Variante.
2. A metodologia tem **4 fases**: Fundação (tokens), Core (5 componentes + Storybook), Engenharia (monorepo, npm, CI/CD), Escala (adoção, governança).
3. O **escopo mínimo viável** de qualquer DS começa com 5 componentes que resolvem 80% das necessidades atuais do produto.
4. A **escolha de stack** depende do contexto: tamanho do time, uso de Figma, necessidade de multi-produto. Este livro usa CVA + Radix + Tailwind + Style Dictionary.
5. **Governança** precisa ser definida antes do lançamento: quem decide (mantenedor), quem pode contribuir (contribuidores) e quem usa (consumidores).
6. A estratégia **"5 → 50 → 500"** é a alternativa sustentável ao Big Bang: começa pequeno, cresce baseado em uso real, nunca perde momentum.

---

## Hook de Fechamento

> *Você tem o diagnóstico, entende os padrões de falha e tem um mapa de decisões. Agora começa a construção de verdade.*
>
> *Na Parte II, vamos criar a fundação do DS Book Shop — começando pelo que nunca aparece na tela mas sustenta tudo que aparece: os Design Tokens. Se você nunca entendeu por que tokens existem, o próximo capítulo vai mudar sua forma de pensar sobre sistemas visuais.*
