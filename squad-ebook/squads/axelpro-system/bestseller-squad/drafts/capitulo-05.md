# Capítulo 5 — *Figma Variables e a Ponte Design-Código*

---

**Tokens no código sem tokens no Figma são metade do sistema.**

O gap design-código não é um problema de comunicação entre pessoas — é um problema de infraestrutura. Quando o designer trabalha com cores hardcoded no Figma e o dev trabalha com CSS Custom Properties, os dois estão editando artefatos tecnicamente independentes. Qualquer mudança em um não reflete no outro sem esforço manual.

Figma Variables (lançadas em 2023 e aprimoradas em 2024) fecham esse gap. Este capítulo mostra como configurar suas variáveis no Figma para espelhar exatamente os tokens do Capítulo 4 — e como manter os dois em sincronia ao longo do tempo.

---

## 5.1 — Figma Variables: O Conceito

Figma Variables são, em essência, o equivalente dos design tokens dentro do Figma. Você cria uma variável `color/brand/primary` com o valor `#2563EB` e a conecta ao componente de botão. Quando você muda a variável, todos os botões do arquivo atualizam automaticamente.

Mas o poder real vem dos **modos**: a mesma variável pode ter um valor no modo "Light" e outro valor no modo "Dark". Troque o modo do frame e todo o design muda — automaticamente, sem refatorar cada layer.

**Tipos de variáveis disponíveis:**
- **Color** — valores de cor (rgba, hex)
- **Number** — espaçamento, tamanho de fonte, border-radius
- **String** — valores de texto como famílias de fonte, mensagens de conteúdo
- **Boolean** — para visibilidade condicional de layers

---

## 5.2 — Estrutura de Collections no Figma

O equivalente do diretório de tokens no Figma são as **Collections**. A estrutura recomendada para o DS Book Shop:

```
Collection: Primitives
├── Modo: (único — sem temas)
├── Grupo: color/blue
│   ├── 50: #EFF6FF
│   ├── 600: #2563EB
│   └── 900: #1E3A8A
├── Grupo: color/gray
│   └── ... (escala completa)
├── Grupo: spacing
│   ├── 1: 4
│   ├── 2: 8
│   └── 4: 16
└── Grupo: font-size
    ├── sm: 14
    ├── md: 16
    └── lg: 18

Collection: Semantic
├── Modo: Light
│   ├── color/brand/primary → Primitives/color/blue/600
│   ├── color/text/default  → Primitives/color/gray/900
│   └── color/surface/default → #FFFFFF
└── Modo: Dark
    ├── color/brand/primary → Primitives/color/blue/400
    ├── color/text/default  → Primitives/color/gray/100
    └── color/surface/default → Primitives/color/gray/900
```

---

## 5.3 — Criando as Variables no Figma (Passo a Passo)

### Passo 1: Criar a Collection "Primitives"

1. Abra o painel **Assets** no Figma (ícone de quatro quadrados)
2. Clique em **Variables** → **+ Create new collection**
3. Nomeie: `Primitives`
4. Clique em **+ Add variable** → escolha **Color**
5. Nomeie: `color/blue/600` (a barra `/` cria grupo automaticamente)
6. Valor: `#2563EB`
7. Repita para todos os primitivos

> **Atalho:** O plugin "Token Studio for Figma" pode importar automaticamente seu `tokens.json` gerado pelo Style Dictionary. Veja seção 5.5.

### Passo 2: Criar a Collection "Semantic"

1. Crie nova collection: `Semantic`
2. Adicione modo **Light** e modo **Dark** (clique em **+** ao lado de Modes)
3. Crie variável: `color/brand/primary` → tipo Color
4. No modo Light, clique na cor → escolha **Library variable** → selecione `Primitives/color/blue/600`
5. No modo Dark, mesmo processo → `Primitives/color/blue/400`

### Passo 3: Aplicar Variables aos Componentes

Para um botão primário:
1. Selecione o layer de background do botão
2. No painel **Fill**, clique no ícone de variável (quadrado com ícone de link)
3. Selecione `Semantic/color/brand/primary`

Agora o botão responde automaticamente ao modo Light/Dark.

---

## 5.4 — Sincronização Automática: Style Dictionary ↔ Figma

A abordagem manual do 5.3 funciona, mas cria um problema recorrente: quando você edita os tokens JSON, precisa lembrar de atualizar o Figma. Quando o designer muda uma variável no Figma, precisa comunicar ao dev para atualizar o JSON.

A solução são ferramentas de sincronização bidirecional. Existem duas opções principais em 2024:

### Opção A — Token Studio for Figma (Plugin)

**Token Studio** (antigo Figma Tokens) é o plugin mais adotado para bridging DS-código.

Permite:
- Importar `tokens.json` → cria variáveis no Figma automaticamente
- Exportar variáveis do Figma → gera `tokens.json` compatível
- Sincronizar com GitHub: push/pull direto do plugin

**Configuração básica:**
1. Instale o plugin "Token Studio for Figma" (marketplace do Figma)
2. Abra um arquivo Figma → Plugin → Token Studio
3. Settings → Sync → GitHub → configure o repo e caminho do `tokens.json`
4. Pull → tokens do repositório são importados como variáveis

**Fluxo sugerido:**
```
Dev edita tokens.json → push para GitHub → 
Designer faz Pull no Token Studio → Figma atualizado

Designer muda variável → Export para JSON → 
PR automático no GitHub → Dev faz review e merge
```

### Opção B — Variables Import Export (Plugin nativo)

Para times que preferem não depender de plugin de terceiro.

O Figma tem uma API de variables nativa. Você pode usar o plugin "Variables Import Export" para:
- Exportar todas as variáveis como JSON
- Importar JSON e criar/atualizar variáveis

É menos automatizado que o Token Studio, mas não tem custo de assinatura.

---

## 5.5 — O Que Sincronizar e o Que Não Sincronizar

Uma armadilha comum: tentar sincronizar tudo — incluindo estilos de texto, grids, effects — via tokens. O resultado é um pipeline frágil e difícil de manter.

**Sincronize via tokens (JSON):**
- Cores (primitivas e semânticas)
- Espaçamentos
- Tamanhos de fonte
- Border radius
- Sombras (box-shadow)

**Não sincronize via tokens (gerencie manualmente no Figma):**
- Composições de texto (Text Styles) — melhor criar manualmente usando os tokens
- Grades e layouts — responsivos têm lógica demais para tokens simples
- Ícones e ilustrações — artefatos SVG externos ao sistema de tokens

---

## 5.6 — Verificando a Sincronização: Checklist de Paridade

Antes de seguir para os componentes, verifique que Figma e código estão em paridade:

```
□ Todas as cores semânticas do tokens.json existem no Figma como variables
□ Todos os spacings existem como variáveis numéricas no Figma
□ Modo Light e Dark definidos na collection Semantic
□ As variáveis semânticas referenciam as primitivas (não hardcode!)
□ O componente Button (teste) usa variáveis semânticas, não valores fixos
□ Ao trocar para o modo Dark no Figma, o Button muda de cor corretamente
□ No CSS, as mesmas variáveis existem em :root e [data-theme="dark"]
```

Se todos os boxes estão checados, a fundação está pronta. A fonte de verdade é o `tokens.json`; Figma e CSS são consumidores derivados.

---

## 📋 EXERCÍCIO 5.1 — Setup do Figma Variables

```
Objetivo: criar a estrutura de variables no Figma do seu DS
Tempo estimado: 45–60 minutos

PASSO 1 — Crie um arquivo Figma dedicado ao DS
Nomeie: "[Seu DS] — Variables & Components"
(Não misture variables e mockups de produto no mesmo arquivo)

PASSO 2 — Crie a Collection Primitives
Importe as cores primitivas que você definiu no Ex 4.1:
• 5–9 tons de sua cor primária
• 5–9 tons de sua cor de acento
• Escala completa de neutros (gray)

PASSO 3 — Crie a Collection Semantic com modos Light e Dark
Mapeie todos os tokens semânticos do seu colors.json semântico:
• color/text/default (Light: gray-900, Dark: gray-100)
• color/surface/default (Light: white, Dark: gray-900)
• color/brand/primary (Light: brand-600, Dark: brand-400)
• color/border/default (Light: gray-200, Dark: gray-700)
Mínimo: 12 tokens semânticos

PASSO 4 — Crie um frame de teste
Adicione um retângulo com background = color/surface/default
Adicione um texto com cor = color/text/default
Mude entre os modos Light e Dark
Confirme que os valores mudam

ENTREGÁVEL: screenshot do painel de Variables no Figma
mostrando as collections Primitives e Semantic configuradas.
```

---

## 🏆 Micro-vitória 5.1

> *Figma e código agora falam a mesma língua. O designer pode trocar `color/brand/primary` no Figma e você, dev, sabe exatamente o que isso significa em código — porque é o mesmo token. Isso elimina 80% das conversas de alinhamento sobre cores no seu time.*

---

## Key Takeaways — Capítulo 5

1. **Figma Variables** são o equivalente de design tokens dentro do Figma — permitem dark mode automático e single source of truth visual.
2. A estrutura recomendada usa duas **Collections**: `Primitives` (valores brutos) e `Semantic` (aliases com significado e modos Light/Dark).
3. **Token Studio** oferece sincronização bidirecional automática entre `tokens.json` e o Figma via GitHub.
4. O que sincronizar via tokens: cores, espaçamentos, tipografia, sombras. O que não sincronizar: text styles compostos, grids, ícones.
5. A paridade Figma-código está verificada quando trocar de modo no Figma produz exatamente as mesmas mudanças que `[data-theme="dark"]` no CSS.

---

## Hook de Fechamento

> *Com tokens definidos em código e no Figma, você tem a fundação do sistema. Agora começa a parte visível: os componentes. No Capítulo 6, vamos construir os 5 componentes fundamentais do DS Book Shop — Button, Input, Typography, Card e Badge — do zero, com TypeScript, CVA, Radix e os tokens que acabamos de criar.*
