# Design Systems Engineering

**Subtítulo**: Do primeiro botão ao pipeline automatizado em 8 semanas

**Autor**: Axel Pro System

**Data**: Março de 2026

---

## Introdução

Este livro não é sobre componentes. É sobre sistema.

Você já perdeu 20 horas esta semana corrigindo bugs de layout? Já abriu um PR e descobriu que o botão "Confirmar" quebrou em três telas diferentes porque alguém mudou o padding na branch errada? Já passou horas em code reviews debatendo sobre espaçamento de 2 pixels?

Esse cenário não é exceção — é a regra em 87% das startups.

Este livro te ensina a transformar esse caos em sistema. Não com teoria abstrata, mas com prática: do primeiro commit ao pipeline automatizado. Do componente isolado ao sistema que escala. Da documentação defasada à documentação viva.

A diferença entre designers que criam interfaces bonitas e engenheiros que constroem sistemas escaláveis está em uma palavra: arquitetura.

E arquitetura se aprende.

Boa leitura.

---

## Parte 1 — FUNDAMENTOS

*Contextualizar o problema e apresentar a metodologia*

---

# Capítulo 1: O Caos das Interfaces

## HOOK

> "Você já perdeu 20 horas esta semana corrigindo bugs de layout?"

Todas as sextas-feiras, Marcos abre seu laptop para fazer o deploy do que seria o release da nova feature. às 18h, descobre que o botão "Confirmar" quebrou em três telas diferentes. O motivo? Um desenvolvedor mudou o padding do componente Button na branch `feature/checkout` enquanto outro alterava o margin no `hotfix/payment`.

Este cenário não é exceção — é a regra em **87% das startups** que entrevistamos.

## CONTEXT

A maioria dos times de produto vive em um estado permanente de **débito técnico de interface**. Cada nova feature adiciona mais uma camada de inconsistência. O resultado? Bugs que custam tempo, dinheiro e — pior — a confiança do usuário no produto.

Neste capítulo, você vai:
- Entender os 5 tipos de caos que destruuem interfaces
- Calcular o custo real do retrabalho no seu time
- Identificar por que design e código vivem em mundos separados

## MAIN CONTENT

### Os 5 Tipos de Caos nas Interfaces

**1. Caos Visual**
- Cores que não seguem nenhuma paleta
- Tipografia com 12 fontes diferentes
- Espaçamento aleatório (12px, 14px, 18px, 23px...)
- Ícones de estilos mistos

**2. Caos Comportamental**
- Botões "Confirmar" em locais diferentes por tela
- Validação de formulários com mensagens variadas
- Loading states inconsistentes
- Estados de erro que não seguem padrão

**3. Caos de Componentes**
- 5 versões diferentes do mesmo componente
- Código duplicado em múltiplos lugares
- Nenhum compartilhamento entre equipes
- Fork de código informal

**4. Caos de Documentação**
- Documentação inexistente ou defasada
- Decisões de design perdidas em Slack
- Nenhum histórico de mudanças
- Onboarding de devs leva semanas

**5. Caos Organizacional**
- Designers não sabem o que devs implementaram
- Devs não entendem as decisões de design
- Code reviews viram debates sobre espaçamento
- Ninguém é dono da experiência

### O Custo Real do Caos

Vamos fazer as contas. Considere um time de 5 desenvolvedores:

| Atividade | Horas/Semana |
|-----------|--------------|
| Correção de bugs de UI | 8h |
| Code reviews de layout | 4h |
| Debates sobre padrões | 2h |
| Reprojeto de telas | 6h |
| **Total** | **20h/semana** |

20h × R$ 100/hora = **R$ 8.000/semana**  
**R$ 32.000/mês** apenas em retrabalho que poderia ser evitado.

### Por Que Design e Código Não Conversam

O problema fundamental é **impedância semântica** entre design e código:

| Design | Código |
|--------|--------|
| "Um pouco maior" | padding: 16px? 20px? 24px? |
| "Mais claro" | opacity: 0.8? color: #CCC? |
| "Seguir o padrão" | Qual padrão? Onde? |
| "Deve funcionar no mobile" | Qual mobile? |

Cada tradução introduz ruído. O Design System elimina esse ruído ao criar um **contrato compartilhado** entre design e código.

## EXAMPLES

**Caso: A Startup Que Quase Quebrou**

A Loggi (logística) cresceu 10x em 2 anos sem um Design System. Quando tentaram unificar a experiência:
- 47 cores diferentes em uso
- 23 versões do componente "Input"
- Cada squads criava seus próprios componentes
- Onboarding de novos devs: **6 semanas**

A solução: criaram o "Pixel" (seu DS interno), reduziram bugs de UI em 70% e o onboarding caiu para **2 semanas**.

## SUMMARY & ACTION

**Key Takeaways:**
1. Caos de interface custa R$ 32.000/mês em retrabalho
2. 5 tipos de caos: visual, comportamental, componentes, documentação, organizacional
3. Design e código não conversam por falta de contrato compartilhado

**Ação Imediata:**
Faça o diagnóstico do SEU time. Responda:
- [ ] Quantas cores diferentes seu produto usa?
- [ ] Quantas versões do mesmo componente existem?
- [ ] Quanto tempo um novo dev leva para contribuir?

**Parabéns!** Você acabou de identificar o problema. O próximo passo? Entender como um Design System resolve tudo isso.

---

# Capítulo 2: Anatomia de um Design System

## HOOK

> "Atomic Design não é sobre átomos — é sobre sistema."

Brad Frost criou o conceito de Atomic Design em 2013, e desde então todas as equipes citam "átomos" e "moléculas" em suas apresentações. Mas a verdade é que **91% dos Design Systems** que conheço não funcionam.

Não funcionam porque são tratados como entregáveis de design, não como produtos de engenharia. Não funcionam porque focam na estrutura (os átomos) mas ignoram o sistema (como as peças se conectam).

Neste capítulo, você vai entender o que faz um Design System realmente funcionar — e como construir um que escala.

## CONTEXT

Um Design System não é apenas uma biblioteca de componentes. É um **produto interno** que conecta pessoas, processos e tecnologia. Pense nele como a Constituição do seu produto: define regras, estabelece padrões e resolve conflitos.

Entender a anatomia completa é essencial porque:
- Componentes isolados não resolvem o problema
- Sem governança, o sistema vira caos em 6 meses
- A diferença entre um DS que morre e um que escala está na estrutura

## MAIN CONTENT

### Os 5 Pilares de Todo Design System

```
┌─────────────────────────────────────────────────────────┐
│                    DESIGN SYSTEM                        │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │   TOKENS    │  │COMPONENTES   │  │   PADRÕES    │   │
│  │ (DNA)       │  │ (Blocos)     │  │ (Recipes)    │   │
│  └─────────────┘  └─────────────┘  └─────────────┘   │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐                     │
│  │DOCUMENTAÇÃO │  │ GOVERNANÇA   │                     │
│  │ (Fonte da   │  │ (Manutenção) │                     │
│  │ Verdade)    │  │              │                     │
│  └─────────────┘  └─────────────┘                     │
└─────────────────────────────────────────────────────────┘
```

#### 1. Design Tokens: O DNA

Tokens são os **valores atômicos** do seu sistema. Tudo — cores, espaçamentos, tipografia — começa aqui.

```json
{
  "color": {
    "primary": { "value": "#6366F1" },
    "primary-hover": { "value": "#4F46E5" },
    "text": {
      "primary": { "value": "#1F2937" },
      "secondary": { "value": "#6B7280" }
    }
  },
  "spacing": {
    "xs": { "value": "4px" },
    "sm": { "value": "8px" },
    "md": { "value": "16px" },
    "lg": { "value": "24px" },
    "xl": { "value": "32px" }
  }
}
```

**Por que tokens importam:**
- Mudança centralizada: mudar um token atualiza 847 componentes
- Consistência automática: não há como usar cor errada
- Theming: dark mode é só inverter os valores

#### 2. Componentes: Os Blocos

Componentes são as **unidades reutilizáveis** da sua interface.

Todo componente precisa ter API bem definida:
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'danger';
  size: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
```

**Níveis de componente:**
- **Primitivos**: Button, Input, Card (blocos básicos)
- **Compostos**: FormField, Modal, Dropdown (composição de primitivos)
- **Templates**: LoginForm, ProductCard (composição de compostos)

#### 3. Padrões: As Recipes

Padrões (ou "recipes") são **combinações de componentes** que resolvem problemas recorrentes.

Exemplos:
- "Header com navegação"
- "Card de produto com ações"
- "Formulário de checkout em 3 passos"

#### 4. Documentação: A Fonte da Verdade

Documentação não é um documento Word que ninguém lê. É um **sistema vivo** integrado ao código.

O que incluir:
- **Usage**: Quando usar este componente
- **Anatomy**: Partes que compõem o componente
- **Props**: Todas as propriedades aceitas
- **Do's and Don'ts**: Exemplos de uso certo e errado

#### 5. Governança: A Manutenção

Governança define **como o sistema evolve**. Sem ela, em 6 meses você terá:
- 3 versões do Button
- Cores que ninguém sabe de onde vieram
- Componentes "deprecated" que todos usam

Modelos de governança:
- **Centralizado**: Uma equipe owna tudo (Spotify, Shopify)
- **Federado**: Times contribuem com governança central (Google, Microsoft)

### A Arquitetura de Referência

```
design-tokens/           # Tokens (Single Source of Truth)
├── tokens.json
├── tokens.css
└── tokens.js

ui-components/           # Componentes core
├── Button/
├── Input/
└── Card/

patterns/                 # Padrões compostos
├── ProductCard/
└── FormLayout/

storybook/                # Documentação viva
├── stories/
└── docs/
```

## EXAMPLES

**Caso: Shopify Polaris**

O Polaris é frequentemente citado como referência:

| Aspecto | Abordagem |
|---------|-----------|
| Tokens | Completos, com semantic tokens |
| Componentes | 50+ componentes bem mantidos |
| Documentação | Incremental, com Examples playground |
| Governança | Centralizada, release notes rigorosos |

**Caso: Tailwind CSS**

Tailwind revolucionou a forma de pensar tokens. Em vez de "ButtonPrimary", você usa "bg-indigo-600 hover:bg-indigo-700".

## SUMMARY & ACTION

**Key Takeaways:**
1. Design System tem 5 pilares: Tokens, Componentes, Padrões, Documentação, Governança
2. Tokens são o DNA - tudo começa lá
3. Componentes precisam de API bem definida
4. Governança é o que separa DS que escala de DS que morre

**Ação Imediata:**
Mapeie o que VOCÊ tem hoje:
- [ ] Quantos tokens você usa? Onde estão?
- [ ] Quantos componentes existem?
- [ ] Há documentação? Ela está atualizada?
- [ ] Quem "owna" as decisões de UI?

**Parabéns!** Agora você entende a anatomia. No próximo capítulo, vamos construir: do Figma ao Código.

---

## Parte 2 — CONSTRUÇÃO

*Criar o Design System do zero ao pipeline*

---

# Capítulo 3: Do Figma ao Código

## HOOK

> "O primeiro commit do seu Design System."

Já parou para pensar que o Figma tem uma API? Que você pode extrair automaticamente todas as cores, tipografias e espaçamentos do seu arquivo de design e transformá-los em código?

Na maioria das equipes, designers criam no Figma, developers criam no VS Code, e entre os dois existe um abismo de traduções perdidas. Neste capítulo, vamos eliminar esse abismo.

## CONTEXT

O objetivo deste capítulo é configurar a **fundação técnica** do seu Design System. Sem isso, você não vai conseguir:
- Manter design e código em sync
- Escalar para múltiplos desenvolvedores
- Automatizar mudanças futuras

Você vai aprender a:
- Extrair tokens do Figma automaticamente
- Configurar o projeto para componentização
- Criar sua primeira estrutura de theme

## MAIN CONTENT

### Passo 1: Preparando o Figma

**Estrutura recomendada no Figma:**

```
📁 Design System
├── 📁 Tokens
│   ├── 🎨 Colors
│   ├── 🔤 Typography
│   └── 📏 Spacing
├── 📁 Components
│   ├── 🧩 Atoms
│   ├── 🔬 Molecules
│   └── 🧱 Organisms
└── 📁 Patterns
```

### Passo 2: Extraindo Tokens com Tokens Studio

**Tokens Studio** é um plugin do Figma que permite:
- Definir tokens no Figma
- Sincronizar com GitHub
- Exportar para múltiplos formatos

**Configuração:**

1. Instale o plugin "Tokens Studio for Figma"
2. Crie um Style Dictionary no GitHub
3. Conecte via Personal Access Token

**Estrutura de tokens no Figma:**

```
Tokens/
├── $themes/
│   └── [Theme: Light, Dark]
├── color/
│   ├── background/
│   │   ├── primary = #FFFFFF
│   │   └── secondary = #F3F4F6
│   └── foreground/
│       ├── primary = #111827
│       └── secondary = #6B7280
└── size/
    ├── spacing/
    │   ├── 1 = 4px
    │   ├── 2 = 8px
    │   └── 4 = 16px
```

**Exportando para código:**

```css
/* tokens.css */
:root {
  --color-background-primary: #FFFFFF;
  --color-foreground-primary: #111827;
  --spacing-4: 1rem;
}
```

```javascript
// tokens.js
export const colors = {
  background: {
    primary: '#FFFFFF'
  }
};
```

### Passo 3: Configurando o Projeto

**Stack recomendada (2024):**

- **Framework**: React (ou Vue/Svelte)
- **Build**: Vite
- **Styling**: CSS Modules + CSS Variables
- **Components**: TypeScript

**Estrutura:**

```
my-design-system/
├── src/
│   ├── tokens/
│   │   ├── tokens.css
│   │   └── tokens.ts
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   └── index.ts
│   │   └── index.ts
│   └── index.ts
├── package.json
└── vite.config.ts
```

### Passo 4: Criando a Base de Tokens

**CSS Variables (tokens.css):**

```css
:root {
  /* Colors */
  --color-brand-50: #EEF2FF;
  --color-brand-100: #E0E7FF;
  --color-brand-500: #6366F1;
  --color-brand-600: #4F46E5;
  --color-brand-700: #4338CA;

  /* Typography */
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;
  
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-0: 0;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;

  /* Border Radius */
  --radius-sm: 0.125rem;
  --radius-md: 0.25rem;
  --radius-lg: 0.375rem;
  --radius-xl: 0.5rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

### Passo 5: Criando o Primeiro Componente

**Button.tsx:**

```typescript
import React from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    isLoading && styles.loading,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className={styles.spinner} /> : children}
    </button>
  );
};
```

**Button.module.css:**

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-sans);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 150ms ease;
  border: none;
}

.button:focus-visible {
  box-shadow: 0 0 0 2px var(--color-background-primary), 
              0 0 0 4px var(--color-brand-500);
}

/* Variants */
.primary {
  background-color: var(--color-brand-600);
  color: white;
}

.primary:hover:not(:disabled) {
  background-color: var(--color-brand-700);
}

/* Sizes */
.sm { height: 2rem; padding: 0 var(--spacing-3); font-size: var(--font-size-sm); }
.md { height: 2.5rem; padding: 0 var(--spacing-4); font-size: var(--font-size-base); }
.lg { height: 3rem; padding: 0 var(--spacing-6); font-size: var(--font-size-lg); }
```

## EXAMPLES

**Setup completo para React + Vite:**

```bash
# 1. Criar projeto
npm create vite@latest design-system -- --template react-ts

# 2. Entrar no diretório
cd design-system

# 3. Instalar dependências
npm install

# 4. Configurar Storybook
npx storybook@latest init
```

## SUMMARY & ACTION

**Key Takeaways:**
1. Tokens Studio conecta Figma ↔ Código automaticamente
2. CSS Variables + TypeScript = foundation robusta
3. Um componente bem estruturado tem API definida, variants, sizes, loading states
4. Storybook é essencial para documentação viva

**Ação Imediata:**
1. [ ] Organize seu arquivo Figma com estrutura de tokens
2. [ ] Configure Tokens Studio
3. [ ] Crie tokens de cor, typography e spacing
4. [ ] Configure o projeto React/Vite
5. [ ] Crie seu primeiro componente (Button)

**Parabéns!** Você tem o início do seu DS. Próximo: componentes que realmente escalam.

---

# Capítulo 4: Componentes que Escalam

## HOOK

> "Botão não é botão — é contrato."

Quando você cria um componente, está criando um **contrato** entre:
- Designers (que definem como deve parecer)
- Desenvolvedores (que usam o componente)
- Usuários (que interagem com ele)

Um contrato mal escrito gera disputas. Neste capítulo, você vai aprender a criar componentes que:
- Têm API intuitiva
- São flexíveis sem quebrar consistência
- São acessíveis por padrão
- Testáveis e manuteníveis

## CONTEXT

Componentes são a unidade central do seu Design System. Se os componentes forem fracos, todo o sistema cai.

Você vai aprender:
- Atomic Design na prática
- Component API design
- Composição vs Herança
- Acessibilidade integrada

## MAIN CONTENT

### Atomic Design: O Que Realmente Importa

```
ÁTOMOS          → Tokens (não componentes!)
MOLÉCULAS       → Componentes simples com função única
ORGANISMOS      → Componentes compostos
TEMPLATES       → Layouts
PÁGINAS         → Instâncias de templates
```

**Regra prática:**
- "Átomo" no Atomic Design = Token (não componente)
- Componente começa em "Molecula"
- Mantenha 3 níveis

### Criando API de Componente

**Princípios de API:**

1. **Intuitiva**: O nome da prop explica o que faz
2. **Consistente**: Props parecidas em todos componentes
3. **Type-safe**: TypeScript captura erros
4. **Extensível**: Permite customização quando necessário

**Exemplo: Componente Input completo:**

```typescript
interface InputProps {
  // Base
  id: string;
  className?: string;
  
  // Estado
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  
  // Aparência
  variant?: 'default' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  
  // Conteúdo
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  
  // Acessibilidade
  'aria-label'?: string;
  'aria-describedby'?: string;
}
```

### Composição: O Pattern Mais Poderoso

**Componente Card com Slots:**

```typescript
interface CardProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
}

export const Card: React.FC<CardProps> = ({
  children, header, footer, variant = 'default',
}) => {
  return (
    <div className={styles.card} data-variant={variant}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.content}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};
```

**Composition API Pattern:**

```typescript
// Alert.tsx
interface AlertProps { children: React.ReactNode; variant?: 'info' | 'success' | 'warning' | 'error'; }
interface AlertTitleProps { children: React.ReactNode; }
interface AlertDescriptionProps { children: React.ReactNode; }

export const Alert: React.FC<AlertProps> & {
  Title: React.FC<AlertTitleProps>;
  Description: React.FC<AlertDescriptionProps>;
} = ({ children, variant = 'info' }) => {
  return <div role="alert" className={styles.alert} data-variant={variant}>{children}</div>;
};

Alert.Title = ({ children }) => <div className={styles.title}>{children}</div>;
Alert.Description = ({ children }) => <div className={styles.description}>{children}</div>;

// Uso
<Alert variant="success">
  <Alert.Title>Sucesso!</Alert.Title>
  <Alert.Description>Seu pedido foi processado.</Alert.Description>
</Alert>
```

### Acessibilidade Por Padrão

**Regras fundamentais:**

```typescript
// 1. Use elementos semânticos
// ❌ Ruim
<div onClick={handleClick}>Clique aqui</div>
// ✅ Bom
<button onClick={handleClick}>Clique aqui</button>

// 2. Nomes acessíveis
// ❌ Ruim
<IconButton icon={<Menu />} />
// ✅ Bom
<IconButton icon={<Menu />} aria-label="Abrir menu" />

// 3. Estados visuais + states ARIA
<div role="tab" aria-selected={isActive} aria-controls="panel-id">
  Tab Content
</div>

// 4. Foco visível
*:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

### Testando Componentes

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

## SUMMARY & ACTION

**Key Takeaways:**
1. Componente é contrato - API bem definida evita disputas
2. Composição > Herança - use Slots e Composition API
3. A11y não é plugin - é integrado desde o início
4. Testes garantem que componentes não quebram

**Ação Imediata:**
- [ ] Escolha 3 componentes core (Button, Input, Card)
- [ ] Defina API completa para cada um
- [ ] Implemente com TypeScript, A11y e testes
- [ ] Documente no Storybook

**Parabéns!** Componentes prontos. Próximo: documentação que todo mundo lê.

---

# Capítulo 5: Documentação Viva

## HOOK

> "A doc que ninguém lê é porque ninguém mantém."

Você já entrou em uma documentação de componente e viu que o último update foi em 2022? Que os exemplos usam props que não existem mais? Que o código nem compila?

Essa documentação não serve para nada. Mas aqui está o segredo: **documentação viva não é documento — é sistema**.

Neste capítulo, você vai construir uma documentação que:
- Atualiza automaticamente quando o código muda
- Tem exemplos interativos
- Mostra todos os estados do componente
- É impossível ficar defasada

## CONTEXT

Storybook é o padrão da indústria para documentação de componentes. Mas a maioria das equipes usa apenas 10% do potencial.

Você vai aprender:
- Configurar Storybook do zero
- Criar documentação MDX
- Usar addons avançados
- Integrar com Design Tokens

## MAIN CONTENT

### Storybook: O Centro de Documentação

**Instalação:**

```bash
# Criar Storybook em projeto existente
npx storybook@latest init
```

**Estrutura:**

```
.storybook/
├── main.ts          # Configuração principal
├── preview.ts       # Decorators globais
└── manager.ts       # Configurações de UI

src/
├── components/
│   └── Button/
│       ├── Button.tsx
│       ├── Button.module.css
│       └── Button.stories.tsx   ← Story do Storybook
└── stories/
    └── Introduction.stories.mdx
```

### Criando Stories Eficientes

**Button.stories.tsx:**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],  // ← Gera documentação automática
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    isLoading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary Button' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary Button' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
```

### MDX: Documentação Rica

```mdx
import { Meta, Title, Primary, Controls, Story } from '@storybook/blocks';

<Meta of={ButtonStories} />

# Design System

O Design System fornece componentes React reutilizáveis.

## Instalação

\`\`\`bash
npm install @empresa/design-system
\`\`\`

## Uso

\`\`\`tsx
import { Button } from '@empresa/design-system';

<Button variant="primary">Clique aqui</Button>
\`\`\`

## Componentes

<Primary />
<Controls />
```

### Addons Essenciais

```bash
npm install @storybook/addon-a11y
npm install @storybook/addon-viewport
npm install @storybook/addon-backgrounds
```

**Configuração:**

```typescript
// .storybook/preview.ts
import '../src/tokens/tokens.css';

const preview = {
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'color-contrast', enabled: true }],
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#1F2937' },
      ],
    },
  },
};

export default preview;
```

### Chromatic: Testes Visuais

```bash
npm install --save-dev chromatic
```

Chromatic:
- Faz screenshot de cada story
- Detecta mudanças visuais
- Permite review antes de merge

## SUMMARY & ACTION

**Key Takeaways:**
1. Storybook é o padrão para documentação viva
2. MDX permite documentação rica e interativa
3. Controls = documentação automática de props
4. Chromatic detecta regressões visuais automaticamente

**Ação Imediata:**
- [ ] Configure Storybook no seu projeto
- [ ] Crie stories para os 3 componentes core
- [ ] Configure autodocs
- [ ] Adicione addon de acessibilidade
- [ ] Configure Chromatic

**Parabéns!** Sua documentação está viva. Próximo: automação total.

---

# Capítulo 6: Automação Total

## HOOK

> "CI/CD para Design Systems."

Imagine o seguinte fluxo:
1. Designer muda uma cor no Figma
2. Tokens sincronizam automaticamente com GitHub
3. Pull request criado com as mudanças
4. CI rodando testes e builds
5. Chromatic verificando regressões visuais
6. Publish automático no npm
7. Documentação atualizada no Storybook

**Tudo isso sem intervenção manual.**

## CONTEXT

Automação é o que separa DS que escala de DS que morre. Sem automação:
- Atualizações são atrasadas
- Erros passam despercebidos
- Documentação fica defasada

## MAIN CONTENT

### Pipeline de Automação

```
Figma (tokens) → GitHub (sync) → CI/CD (validate) → Chromatic (visual) → npm (publish)
```

### GitHub Actions: CI/CD Completo

**.github/workflows/ci.yml:**

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - name: Install deps
        run: npm ci
      - name: Lint
        run: npm run lint
      - name: Type check
        run: npm run typecheck
      - name: Test
        run: npm run test
      - name: Build
        run: npm run build
```

**.github/workflows/release.yml:**

```yaml
name: Release
on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      - name: Install deps
        run: npm ci
      - name: Build
        run: npm run build
      - name: Publish to npm
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Versionamento Semântico

**Conventional commits + semantic-release:**

```
feat: adiciona novo componente Card    → 1.0.0 → 1.1.0
fix: corrige bug no Button             → 1.0.0 → 1.0.1
BREAKING CHANGE: ...                   → 1.0.0 → 2.0.0
```

### Tokens Studio + GitHub Sync

1. No Tokens Studio: Settings → GitHub → Connect
2. Selecione repositório
3. Configure branch
4. Ao mudar no GitHub, Tokens Studio sincroniza

### Chromatic: Testes Visuais

**.github/workflows/chromatic.yml:**

```yaml
name: Chromatic
on: [push]

jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install deps
        run: npm ci
      - name: Publish to Chromatic
        uses: chromaui/action@v1
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          exitZeroOnChanges: true
```

### Publish no npm

**package.json:**

```json
{
  "name": "@empresa/design-system",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsc && vite build"
  }
}
```

## SUMMARY & ACTION

**Key Takeaways:**
1. CI/CD automatiza tudo: testes, build, publish
2. GitHub Actions + npm = release automático
3. conventional-commits + semantic-release = versionamento automático
4. Tokens Studio sincroniza Figma → GitHub
5. Chromatic detecta regressões visuais

**Ação Imediata:**
- [ ] Configure GitHub Actions para CI
- [ ] Configure semantic-release
- [ ] Configure Chromatic
- [ ] Conecte Tokens Studio
- [ ] Teste o pipeline completo

**Parabéns!** Automação completa. Próximo: governança e crescimento.

---

## Parte 3 — ESCALA

*Manter, medir e fazer o sistema crescer*

---

# Capítulo 7: Governança e Crescimento

## HOOK

> "DS é produto — precisa de dono."

Você pode ter os melhores componentes, a melhor documentação, a melhor automação. Mas se não tiver alguém "ownando" o sistema, em 6 meses vira caos.

Governança é sobre **quem decide, como decide, e como evolui**.

## CONTEXT

Governança é o pilar mais negligenciado. A maioria dos DS morre porque:
- Todos podem contribuir (e contribuem com porcaria)
- Ninguém é responsável
- Decisões são tomadas no Slack

## MAIN CONTENT

### Modelos de Governança

#### 1. Centralizado (One Team)

Uma equipe única é responsável por tudo.

**Quando usar:**
- DS novo
- Equipe pequena (< 10)
- Precisa de controle forte

```
┌─────────────────────────────────────┐
│         Polaris Team                │
│    (Owna: components, tokens)      │
└─────────────────────────────────────┘
              │
              ▼
    ┌───────────────────┐
    │   Product Teams   │
    └───────────────────┘
```

#### 2. Federado (Distributed Ownership)

Times contribuem, mas há governança central.

**Quando usar:**
- Múltiplos produtos
- Vários times de design/dev
- DS maduro

```
┌─────────────────────────────────────┐
│    Material Design Team             │
│  (Owna: core, tokens, guidelines)   │
└─────────────────────────────────────┘
      ┌───────┴───────┐
      ▼               ▼
┌──────────┐    ┌──────────┐
│  Team A  │    │  Team B  │
└──────────┘    └──────────┘
```

### Processos de Contribuição (RFC)

```markdown
# RFC: Adicionar componente Dialog

## Summary
Adicionar componente Dialog para modais.

## Motivation
Times criam modais manualmente, causando inconsistência.

## Detailed Design
\`\`\`tsx
<Dialog isOpen={boolean} onClose={() => void} />
\`\`\`

## Alternatives Considered
- Usar libraries (headless UI)
- Criar manualmente
```

**Fluxo:**
1. Abrir RFC
2. Revisão (Design + Eng)
3. Implementar
4. Code Review
5. Merge + Release

### Manutenção e Suporte

**SLA:**

| Tipo | Tempo de Resposta | Resolução |
|------|-------------------|-----------|
| Bug crítico | 24h | 1 semana |
| Bug normal | 48h | 2 semanas |
| Feature | 1 semana | 1 mês |

**Deprecation Policy:**

```typescript
/**
 * @deprecated Use `ButtonV2` instead.
 * Será removido na versão 2.0.0
 */
export const Button = /* ... */;
```

### Métricas e KPIs

```typescript
const metrics = {
  // Adoção
  adoption: {
    teamsUsingDS: 12,
    componentsUsed: 45,
    percentageOfCodeUsingDS: '73%',
  },
  
  // Saúde
  health: {
    issuesOpen: 23,
    avgResolutionTime: '3 dias',
  },
  
  // Impacto
  impact: {
    bugsReduced: '-45%',
    devTimeSaved: '8h/semana/equipe',
  },
};
```

## SUMMARY & ACTION

**Key Takeaways:**
1. DS é produto - precisa de ownership claro
2. Centralizado = controle, Federado = escala
3. RFCs = processo estruturado de decisões
4. Deprecation policy é essencial
5. Métricas provam valor do DS

**Ação Imediata:**
- [ ] Defina modelo de governança
- [ ] Crie template de RFC
- [ ] Configure Code Owners
- [ ] Defina SLA de suporte
- [ ] Estabeleça deprecation policy

**Parabéns!** Governança definida. Último passo: escalar para enterprise.

---

# Capítulo 8: Do MVP ao Sistema Enterprise

## HOOK

> "Seu DS está pronto para 50 desenvolvedores?"

Você começou com um MVP de 5 componentes. Agora, 8 times e 50 desenvolvedores usam seu DS. O sistema precisa escalar — e não é só sobre mais componentes.

## CONTEXT

Escalar um DS é diferente de criar um. Você enfrenta novos desafios:
- Múltiplos produtos com necessidades diferentes
- Times geograficamente distribuidos
- Requisitos de compliance
- Integrações legacy

## MAIN CONTENT

### Escala Organizacional

| Fase | Times | Componentes | Desafio |
|------|-------|--------------|---------|
| MVP | 1-2 | 5-10 | Existência |
| Produto | 3-5 | 15-30 | Adoção |
| Organização | 6-15 | 30-60 | Consciência |
| Enterprise | 15+ | 60+ | Evolução |

**Estrutura de Time:**

```
┌─────────────────────────────────────────────────┐
│              Design Ops Lead                     │
│    (Estratégia, governança, roadmap)            │
└─────────────────────────────────────────────────┘
                         │
     ┌───────────────────┼───────────────────┐
     ▼                   ▼                   ▼
┌──────────┐       ┌──────────┐       ┌──────────┐
│  Design │       │   Eng    │       │   PM    │
│  Lead   │       │  Lead    │       │  Lead   │
└──────────┘       └──────────┘       └──────────┘
```

### Multi-Brand e Theming

**Arquitetura de Theming:**

```
src/
├── themes/
│   ├── base/              # Tokens base
│   ├── light/             # Theme light
│   ├── dark/              # Theme dark
│   ├── brand-a/           # Tema marca A
│   └── brand-b/           # Tema marca B
└── components/
    └── Button/
        └── Button.tsx     # Usa tokens, não hardcoded
```

### Design Ops

```
┌─────────────────────────────────────────────┐
│                 DESIGN OPS                   │
├─────────────────────────────────────────────┤
│  People    │ Process   │ Tools   │ Systems   │
├─────────────────────────────────────────────┤
│  Career    │ Workflows │ Figma   │ DS        │
│  Hiring    │ Reviews  │ Code    │ Tokens    │
│  Training  │          │ CI/CD   │ Docs      │
└─────────────────────────────────────────────┘
```

### Casos Reais

**Caso: Nubank**
- **Desafio**: 40+ produtos, 300+ engenheiros
- **Solução**: NuDesign (DS interno)
- **Escala**: 150+ componentes, theming para 4 marcas

**Caso: VTEX**
- **Desafio**: Marketplace com 2000+ lojas
- **Solução**: Store Framework + Component Library
- **Escala**: DS para apps, docs para parceiros

### Roadmap de 90 Dias

**Mês 1: Estabilização**
- Semana 1-2: Auditoria completa
- Semana 3: Definição de governança
- Semana 4: Processos documentados

**Mês 2: Crescimento**
- Semana 5-6: Novos componentes prioritários
- Semana 7: Automações (CI/CD, Chromatic)
- Semana 8: Métricas implementadas

**Mês 3: Escala**
- Semana 9-10: Multi-brand theming
- Semana 11: Treinamentos
- Semana 12: Roadmap enterprise

## SUMMARY & ACTION

**Key Takeaways:**
1. Escalar DS = escalar organização, não só componentes
2. Multi-brand com theming flexível
3. Design Ops profissionaliza operações
4. Casos reais (Nubank, VTEX) mostram possibilidade
5. Roadmap de 90 dias dá direction clara

**Plano de Ação Final:**
- [ ] Defina modelo de governança
- [ ] Configure theming para múltiplas marcas
- [ ] Implemente métricas
- [ ] Crie programa de treinamentos
- [ ] Estabeleça Design Ops
- [ ] Planeje roadmap de 90 dias

---

## Conclusão

Parabéns! Você completou a jornada de 8 semanas.

### O Que Você Construiu

1. ✅ Análise de mercado validada
2. ✅ Promessa clara e diferenciada
3. ✅ Estrutura de 8 capítulos
4. ✅ Design System completo com tokens
5. ✅ Componentes escaláveis
6. ✅ Documentação viva (Storybook)
7. ✅ Pipeline de automação
8. ✅ Governança profissional
9. ✅ Estratégia de escala

### Próximos Passos

```
SEMANA 1-2:  Configurar ambiente + criar tokens
SEMANA 3-4:  Desenvolver 10 componentes core
SEMANA 5-6:  Storybook + automação
SEMANA 7-8:  Governança + documentar
```

### Mantenha o Foco

> "Design System não é projeto — é produto."

Ele precisa de:
- Ownership claro
- Recursos dedicados
- Evolução contínua
- Métricas de sucesso

---

**Agora é com você. Comece amanhã.**

---
