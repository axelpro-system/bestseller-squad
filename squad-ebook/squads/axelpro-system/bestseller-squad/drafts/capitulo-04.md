# Capítulo 4 — *Design Tokens: O DNA do Seu Sistema*

---

**Um Design System sem tokens é uma coleção de componentes. Com tokens, é um sistema.**

A diferença não é filosófica — é prática. Sem tokens, mudar a cor primária da empresa significa caçar 200 ocorrências de `#1E4FD8` em 40 arquivos. Com tokens, é mudar uma linha. E nos próximos 24 horas, todo produto que consome o DS reflete a mudança automaticamente.

Este capítulo explica o que são tokens, por que importam, como os estruturar e como implementar o pipeline completo de design (`tokens.json`) até código (CSS Custom Properties ou TypeScript constants). Você vai sair deste capítulo com os tokens do DS Book Shop prontos para uso.

---

## 4.1 — O Que São Design Tokens?

Design tokens são os **valores atômicos do seu sistema visual**, armazenados em um formato agnóstico de plataforma.

Valores atômicos: cor, espaçamento, tipografia, bordas, sombras, animações.

Agnóstico de plataforma: o valor `blue-600: #2563EB` é o mesmo para React, React Native, email HTML, documentação PDF. O token é a fonte de verdade; a transformação para cada plataforma é automática.

Em código, sem tokens:
```css
/* Espalhado por 12 arquivos diferentes */
.button-primary {
  background-color: #2563EB;
  border-radius: 6px;
  padding: 8px 16px;
}

.input-focus {
  border-color: #2563EB; /* mesma cor — hardcoded novamente */
}

.link {
  color: #2563EB; /* terceira ocorrência */
}
```

Com tokens:
```css
/* Definido uma vez em :root */
:root {
  --color-brand-primary: #2563EB;
  --border-radius-md: 6px;
  --spacing-2: 8px;
  --spacing-4: 16px;
}

/* Usado em qualquer arquivo */
.button-primary {
  background-color: var(--color-brand-primary);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-2) var(--spacing-4);
}
```

Quando a marca decide muda o azul para violeta, você altera `--color-brand-primary` em um lugar. O resto é automático.

---

## 4.2 — Os Três Tipos de Tokens

A maioria dos sistemas de tokens bem estruturados usa uma hierarquia de três camadas:

```
GLOBAL / PRIMITIVE TOKENS
└─ Valores brutos — toda a paleta possível
   Exemplos: blue-100 ... blue-900, gray-50 ... gray-950
   Nunca usados diretamente nos componentes.

SEMANTIC / ALIAS TOKENS
└─ Referências com significado — o que cada cor faz
   Exemplos: color-brand-primary → blue-600
             color-text-default → gray-900
             color-surface-default → gray-50
   Usados nos componentes.

COMPONENT TOKENS (opcional)
└─ Valores específicos de um componente
   Exemplos: button-primary-bg → color-brand-primary
             input-border-color → color-border-default
   Usados quando você quer sobrescritar um componente sem mudar o tema.
```

**Por que essa separação importa?**

Se você tem apenas tokens globais (`blue-600`), mudar de tema (light → dark) significa sobrescrever cada valor manualmente. Se você tem tokens semânticos (`color-text-default → gray-900`), mudar para dark mode é apenas redefinir os aliases: `color-text-default → gray-100` no tema escuro.

Para o DS Book Shop, usamos dois níveis: primitivos e semânticos. Component tokens são avançados demais para o escopo inicial.

---

## 4.3 — Nomenclatura de Tokens: O Sistema que Vai Salvar Sua Sanidade

Nomenclatura de tokens é onde a maioria dos times inventa a roda de formas erradas. A convenção abaixo é amplamente adotada e resolve os casos mais comuns:

```
Formato: [categoria]-[propriedade]-[variante]-[estado]

Exemplos:
color-brand-primary           ← cor primária da marca
color-text-default            ← cor do texto padrão
color-text-muted              ← cor do texto secundário
color-border-default          ← cor da borda padrão
color-surface-default         ← cor de superfície (fundo de cards)
color-surface-elevated         ← superfície com elevação (modais)

spacing-1                     ← 4px
spacing-2                     ← 8px
spacing-4                     ← 16px
spacing-8                     ← 32px

font-size-sm                  ← 14px (texto pequeno)
font-size-md                  ← 16px (texto base)
font-size-lg                  ← 18px
font-size-xl                  ← 20px
font-size-2xl                 ← 24px
font-size-4xl                 ← 36px (headings)

border-radius-sm              ← 4px
border-radius-md              ← 6px
border-radius-lg              ← 8px
border-radius-full            ← 9999px (circular)
```

**Regra de ouro:** se você precisar olhar para um mockup para saber o valor do token, o nome do token está errado. `color-brand-primary` comunica contexto; `blue-600` apenas comunica o valor.

---

## 4.4 — Implementando os Tokens com Style Dictionary

Style Dictionary (criado pelo time de design da Amazon) é a ferramenta padrão da indústria para transformar tokens de JSON para qualquer formato de saída (CSS, SCSS, TypeScript, Android, iOS).

### Instalação

```bash
# No workspace do packages/tokens
pnpm add -D style-dictionary
```

### Estrutura de arquivos

```
packages/tokens/
├── src/
│   ├── primitives/
│   │   ├── colors.json
│   │   ├── spacing.json
│   │   ├── typography.json
│   │   ├── borders.json
│   │   └── shadows.json
│   └── semantic/
│       ├── colors.json
│       └── spacing.json
├── build/        ← gerado automaticamente
│   ├── css/
│   │   └── tokens.css
│   └── js/
│       └── tokens.ts
├── config.js
└── package.json
```

### Tokens Primitivos de Cores

```json
// src/primitives/colors.json
{
  "color": {
    "blue": {
      "50":  { "value": "#EFF6FF" },
      "100": { "value": "#DBEAFE" },
      "200": { "value": "#BFDBFE" },
      "300": { "value": "#93C5FD" },
      "400": { "value": "#60A5FA" },
      "500": { "value": "#3B82F6" },
      "600": { "value": "#2563EB" },
      "700": { "value": "#1D4ED8" },
      "800": { "value": "#1E40AF" },
      "900": { "value": "#1E3A8A" }
    },
    "amber": {
      "50":  { "value": "#FFFBEB" },
      "400": { "value": "#FBBF24" },
      "500": { "value": "#F59E0B" },
      "600": { "value": "#D97706" }
    },
    "gray": {
      "50":  { "value": "#F9FAFB" },
      "100": { "value": "#F3F4F6" },
      "200": { "value": "#E5E7EB" },
      "300": { "value": "#D1D5DB" },
      "400": { "value": "#9CA3AF" },
      "500": { "value": "#6B7280" },
      "600": { "value": "#4B5563" },
      "700": { "value": "#374151" },
      "800": { "value": "#1F2937" },
      "900": { "value": "#111827" },
      "950": { "value": "#030712" }
    },
    "white": { "value": "#FFFFFF" },
    "black": { "value": "#000000" }
  }
}
```

### Tokens Semânticos de Cores (Theme-aware)

```json
// src/semantic/colors.json — tema claro
{
  "color": {
    "brand": {
      "primary":  { "value": "{color.blue.600}" },
      "secondary": { "value": "{color.amber.500}" }
    },
    "text": {
      "default":   { "value": "{color.gray.900}" },
      "muted":     { "value": "{color.gray.500}" },
      "inverse":   { "value": "{color.white}" },
      "link":      { "value": "{color.blue.600}" },
      "danger":    { "value": "#DC2626" }
    },
    "surface": {
      "default":   { "value": "{color.white}" },
      "muted":     { "value": "{color.gray.50}" },
      "elevated":  { "value": "{color.white}" },
      "inverse":   { "value": "{color.gray.900}" }
    },
    "border": {
      "default":   { "value": "{color.gray.200}" },
      "muted":     { "value": "{color.gray.100}" },
      "strong":    { "value": "{color.gray.400}" },
      "brand":     { "value": "{color.blue.600}" }
    },
    "feedback": {
      "success":  { "value": "#16A34A" },
      "warning":  { "value": "{color.amber.500}" },
      "danger":   { "value": "#DC2626" },
      "info":     { "value": "{color.blue.600}" }
    }
  }
}
```

### Tokens de Espaçamento

```json
// src/primitives/spacing.json
{
  "spacing": {
    "0":   { "value": "0px" },
    "px":  { "value": "1px" },
    "0.5": { "value": "2px" },
    "1":   { "value": "4px" },
    "1.5": { "value": "6px" },
    "2":   { "value": "8px" },
    "2.5": { "value": "10px" },
    "3":   { "value": "12px" },
    "4":   { "value": "16px" },
    "5":   { "value": "20px" },
    "6":   { "value": "24px" },
    "8":   { "value": "32px" },
    "10":  { "value": "40px" },
    "12":  { "value": "48px" },
    "16":  { "value": "64px" },
    "20":  { "value": "80px" },
    "24":  { "value": "96px" }
  }
}
```

### Tokens de Tipografia

```json
// src/primitives/typography.json
{
  "font": {
    "family": {
      "sans":    { "value": "Inter, ui-sans-serif, system-ui, sans-serif" },
      "serif":   { "value": "Merriweather, ui-serif, Georgia, serif" },
      "mono":    { "value": "ui-monospace, SFMono-Regular, Menlo, monospace" }
    },
    "size": {
      "xs":   { "value": "12px" },
      "sm":   { "value": "14px" },
      "md":   { "value": "16px" },
      "lg":   { "value": "18px" },
      "xl":   { "value": "20px" },
      "2xl":  { "value": "24px" },
      "3xl":  { "value": "30px" },
      "4xl":  { "value": "36px" },
      "5xl":  { "value": "48px" }
    },
    "weight": {
      "regular":   { "value": "400" },
      "medium":    { "value": "500" },
      "semibold":  { "value": "600" },
      "bold":      { "value": "700" }
    },
    "lineHeight": {
      "none":    { "value": "1" },
      "tight":   { "value": "1.25" },
      "snug":    { "value": "1.375" },
      "normal":  { "value": "1.5" },
      "relaxed": { "value": "1.625" },
      "loose":   { "value": "2" }
    }
  }
}
```

### Configuração do Style Dictionary

```javascript
// config.js
import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['src/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'ds',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            selector: ':root',
            outputReferences: true
          }
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/es6'
        }
      ]
    }
  }
});

await sd.buildAllPlatforms();
```

### Script de build no package.json

```json
{
  "name": "@ds-bookshop/tokens",
  "version": "0.0.1",
  "scripts": {
    "build": "node config.js",
    "watch": "node --watch config.js"
  },
  "devDependencies": {
    "style-dictionary": "^4.0.0"
  }
}
```

---

## 4.5 — O Output: O Que o Style Dictionary Gera

Após `pnpm build` no pacote de tokens:

```css
/* build/css/tokens.css */
:root {
  --ds-color-blue-50: #EFF6FF;
  --ds-color-blue-600: #2563EB;
  /* ... todas as primitivas ... */
  
  --ds-color-brand-primary: var(--ds-color-blue-600);
  --ds-color-text-default: var(--ds-color-gray-900);
  --ds-color-surface-default: var(--ds-color-white);
  --ds-color-border-default: var(--ds-color-gray-200);
  /* ... todos os semânticos ... */
  
  --ds-spacing-1: 4px;
  --ds-spacing-2: 8px;
  --ds-spacing-4: 16px;
  /* ... todos os spacings ... */
  
  --ds-font-size-sm: 14px;
  --ds-font-size-md: 16px;
  /* ... toda a tipografia ... */
}
```

Este arquivo CSS é importado uma única vez no root da aplicação. Todos os componentes usam as variáveis.

---

## 4.6 — Modo Escuro com Tokens

A grande vantagem dos tokens semânticos é que dark mode se torna trivial:

```css
/* Adicione ao seu tokens.css (ou gere via Style Dictionary) */

[data-theme="dark"] {
  --ds-color-text-default: var(--ds-color-gray-100);
  --ds-color-text-muted: var(--ds-color-gray-400);
  --ds-color-surface-default: var(--ds-color-gray-900);
  --ds-color-surface-muted: var(--ds-color-gray-800);
  --ds-color-border-default: var(--ds-color-gray-700);
  --ds-color-brand-primary: var(--ds-color-blue-400);
}
```

Apenas os tokens semânticos precisam ser sobrescritos. Os primitivos (`blue-600`, `gray-200`) continuam iguais. Os componentes não precisam de nenhuma mudança.

Para ativar o modo escuro:
```javascript
document.documentElement.setAttribute('data-theme', 'dark')
```

---

## 📋 EXERCÍCIO 4.1 — Criar Seus Tokens Primitivos de Cor

```
Objetivo: definir a paleta primitiva do seu DS
Tempo estimado: 30–45 minutos

PASSO 1 — Escolha sua cor primária
Pegue o hex da cor principal da sua marca e gere uma escala
completa usando uma das ferramentas:
• tailwind.ink (input o hex, gera 10 tons)
• uicolors.app
• www.tints.dev

PASSO 2 — Escolha sua cor de acento
Cor secundária/acento seguindo o mesmo processo.

PASSO 3 — Escolha sua escala de neutros
Recomendado: reutilize a escala gray do Tailwind se não tiver
uma equivalente na marca. É testada e funciona bem.

PASSO 4 — Crie seu colors.json primitivo
Baseie-se no template da seção 4.4. Substitua os valores blue
e amber pelos da sua marca.

PASSO 5 — Crie seu colors.json semântico
Mapeie seus primitivos para tokens com significado:
• Qual primitivo é sua cor de texto primária?
• Qual é sua cor de superfície (fundo de cards)?
• Qual é sua cor de borda padrão?

ENTREGÁVEL: dois arquivos JSON — primitives/colors.json
e semantic/colors.json com pelo menos 15 tokens semânticos.
```

---

## 🏆 Micro-vitória 4.1

> *Você acabou de criar a espinha dorsal do seu Design System. Todo componente que você construir daqui para frente vai consumir esses tokens. Quando a marca mudar (e vai mudar), você altera um arquivo JSON e o sistema inteiro se atualiza. É exatamente assim que sistemas escaláveis funcionam.*

---

## Key Takeaways — Capítulo 4

1. **Design Tokens** são os valores atômicos do sistema visual em formato agnóstico de plataforma — a única fonte de verdade para cores, espaçamento e tipografia.
2. A hierarquia de três camadas (**primitivos → semânticos → componente**) permite que dark mode e multi-tema sejam implementados apenas sobrescrevendo os tokens semânticos.
3. **Style Dictionary** transforma `tokens.json` em CSS Custom Properties, TypeScript e qualquer outra plataforma de forma automática e repetiível.
4. A estratégia de **nomenclatura** `[categoria]-[propriedade]-[variante]-[estado]` torna tokens autoexplicativos e fáceis de buscar.
5. **Dark mode** com tokens é trivial: apenas redefinir os aliases semânticos no seletor `[data-theme="dark"]`.

---

## Hook de Fechamento

> *Os tokens existem no código. Mas você também precisa que eles existam no Figma — de forma sincronizada, automática e sem fricção para o designer. No próximo capítulo, vamos configurar as Figma Variables para que o designer trabalhe com os mesmos tokens que o dev usa, sem sincronizar manualmente.*
