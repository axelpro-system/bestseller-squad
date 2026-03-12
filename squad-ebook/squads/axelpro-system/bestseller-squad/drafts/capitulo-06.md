# Capítulo 6 — *Os 5 Componentes Fundamentais*

---

**Você não precisa de 80 componentes para ter um Design System. Precisa dos 5 certos.**

Este capítulo é o mais denso do livro em código — e de propósito. Vamos construir, do zero, os 5 componentes que resolvem 80% dos casos de interface de produto: Button, Input, Typography, Card e Badge. Cada componente usa os tokens criados nos Capítulos 4 e 5, tem variantes controladas com CVA, é acessível por padrão e tem stories documentados.

O resultado ao final do capítulo: um pacote `@ds-bookshop/components` instalável, com 5 componentes prontos para produção.

---

## 6.1 — Setup do Pacote de Componentes

```bash
# Estrutura do pacote
packages/components/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Typography/
│   │   ├── Card/
│   │   └── Badge/
│   └── index.ts        ← exports públicos
├── package.json
└── tsconfig.json
```

```json
// packages/components/package.json
{
  "name": "@ds-bookshop/components",
  "version": "0.1.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@ds-bookshop/tokens": "workspace:*",
    "react": "^18.2.0",
    "tsup": "^8.0.0",
    "typescript": "^5.0.0"
  }
}
```

```typescript
// packages/components/src/lib/cn.ts
// Utilitário para merge de classes Tailwind
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 6.2 — Componente 1: Button

O Button é o componente mais usado e o mais crítico para o design do DS. Ele deve:
- Ter variants: primary, secondary, ghost, danger
- Ter size variants: sm, md, lg
- Suportar estado disabled
- Suportar ícones (esquerda/direita)
- Ser polimórfico (renderizar como `<button>` ou qualquer elemento via `asChild`)
- Ser acessível por padrão (foco visível, aria-disabled)

```typescript
// packages/components/src/components/Button/Button.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const buttonVariants = cva(
  // Base — aplicado a todas as variantes
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium rounded-md transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-brand-primary)] focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'whitespace-nowrap select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[var(--ds-color-brand-primary)] text-white',
          'hover:bg-[var(--ds-color-blue-700)]',
          'active:bg-[var(--ds-color-blue-800)]',
        ],
        secondary: [
          'bg-transparent text-[var(--ds-color-brand-primary)]',
          'border border-[var(--ds-color-brand-primary)]',
          'hover:bg-[var(--ds-color-blue-50)]',
          'active:bg-[var(--ds-color-blue-100)]',
        ],
        ghost: [
          'bg-transparent text-[var(--ds-color-text-default)]',
          'hover:bg-[var(--ds-color-surface-muted)]',
          'active:bg-[var(--ds-color-gray-200)]',
        ],
        danger: [
          'bg-[var(--ds-color-feedback-danger)] text-white',
          'hover:bg-red-700',
          'active:bg-red-800',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" />
            </svg>
            <span className="sr-only">Carregando...</span>
          </>
        ) : null}
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

**Uso:**
```tsx
// Casos de uso
<Button>Comprar agora</Button>
<Button variant="secondary" size="sm">Cancelar</Button>
<Button variant="ghost">Ver detalhes</Button>
<Button variant="danger">Excluir conta</Button>
<Button loading>Processando...</Button>

// Polimórfico — renderiza como link
<Button asChild>
  <a href="/checkout">Finalizar compra</a>
</Button>
```

---

## 6.3 — Componente 2: Input

O Input cobre campos de texto. Precisa de:
- Estados: default, focus, error, disabled
- Suporte a label e mensagem de erro
- Suporte a ícone esquerdo (ex: lupa em campo de busca)
- Props acessíveis (aria-describedby, aria-invalid)

```typescript
// packages/components/src/components/Input/Input.tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const inputVariants = cva(
  [
    'flex w-full rounded-md border bg-[var(--ds-color-surface-default)]',
    'text-[var(--ds-color-text-default)] placeholder:text-[var(--ds-color-text-muted)]',
    'transition-colors duration-150',
    'focus:outline-none focus:ring-2 focus:ring-[var(--ds-color-brand-primary)] focus:ring-offset-1',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
  ],
  {
    variants: {
      inputSize: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
      state: {
        default: 'border-[var(--ds-color-border-default)]',
        error:   'border-[var(--ds-color-feedback-danger)] focus:ring-red-500',
      },
    },
    defaultVariants: {
      inputSize: 'md',
      state: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  errorMessage?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  inputSize?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, errorMessage, hint, leftIcon, inputSize, id, ...props }, ref) => {
    const inputId = id ?? React.useId();
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;
    const hasError = !!errorMessage;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--ds-color-text-default)]"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ds-color-text-muted)]">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              inputVariants({ inputSize, state: hasError ? 'error' : 'default' }),
              leftIcon && 'pl-10',
              className
            )}
            aria-invalid={hasError ? 'true' : undefined}
            aria-describedby={
              [hasError ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ') || undefined
            }
            {...props}
          />
        </div>

        {hint && !hasError && (
          <p id={hintId} className="text-xs text-[var(--ds-color-text-muted)]">
            {hint}
          </p>
        )}

        {hasError && (
          <p id={errorId} className="text-xs text-[var(--ds-color-feedback-danger)]" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
```

**Uso:**
```tsx
<Input label="E-mail" type="email" placeholder="seu@email.com" />

<Input
  label="Buscar livro"
  leftIcon={<SearchIcon />}
  placeholder="Título, autor ou ISBN..."
/>

<Input
  label="CPF"
  errorMessage="CPF inválido. Use o formato 000.000.000-00"
  value="123.456"
/>
```

---

## 6.4 — Componente 3: Typography

Typography não é apenas um componente — é um sistema de tipos que garante consistência em todos os textos do produto.

```typescript
// packages/components/src/components/Typography/Typography.tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'font-serif text-[var(--ds-font-size-4xl)] font-bold leading-tight text-[var(--ds-color-text-default)]',
      h2: 'font-serif text-[var(--ds-font-size-3xl)] font-semibold leading-tight text-[var(--ds-color-text-default)]',
      h3: 'font-serif text-[var(--ds-font-size-2xl)] font-semibold leading-snug text-[var(--ds-color-text-default)]',
      h4: 'font-sans text-[var(--ds-font-size-xl)] font-semibold leading-snug text-[var(--ds-color-text-default)]',
      body: 'font-sans text-[var(--ds-font-size-md)] text-[var(--ds-color-text-default)] leading-relaxed',
      'body-sm': 'font-sans text-[var(--ds-font-size-sm)] text-[var(--ds-color-text-default)] leading-normal',
      label: 'font-sans text-[var(--ds-font-size-sm)] font-medium text-[var(--ds-color-text-default)]',
      caption: 'font-sans text-[var(--ds-font-size-xs)] text-[var(--ds-color-text-muted)]',
      overline: 'font-sans text-[var(--ds-font-size-xs)] font-semibold uppercase tracking-widest text-[var(--ds-color-text-muted)]',
    },
    muted: {
      true: 'text-[var(--ds-color-text-muted)]',
    },
    truncate: {
      true: 'truncate',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm' | 'label' | 'caption' | 'overline';

const variantElementMap: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  'body-sm': 'p',
  label: 'span',
  caption: 'span',
  overline: 'span',
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  variant?: TypographyVariant;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', muted, truncate, as, ...props }, ref) => {
    const Comp = as ?? variantElementMap[variant];

    return (
      <Comp
        ref={ref}
        className={cn(typographyVariants({ variant, muted, truncate }), className)}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
```

**Uso:**
```tsx
<Typography variant="h1">Bestsellers de 2024</Typography>
<Typography variant="body">Descubra os livros mais vendidos do ano.</Typography>
<Typography variant="caption" muted>Última atualização: jan 2025</Typography>
<Typography variant="overline">Destaque da semana</Typography>
<Typography as="h2" variant="h3">Seção com elemento semântico diferente</Typography>
```

---

## 6.5 — Componente 4: Card

Card é a unidade mais comum de layout de produto. Para uma livraria, um card de livro precisa de:
- Área de imagem (header)
- Área de conteúdo com padding consistente
- Footer para ações

```typescript
// packages/components/src/components/Card/Card.tsx
import * as React from 'react';
import { cn } from '../../lib/cn';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border border-[var(--ds-color-border-default)]',
        'bg-[var(--ds-color-surface-default)]',
        'shadow-sm',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-1.5 p-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'font-semibold text-lg leading-none text-[var(--ds-color-text-default)] tracking-tight',
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-[var(--ds-color-text-muted)]', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center p-6 pt-0',
        className
      )}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
```

**Uso — Card de Livro:**
```tsx
<Card className="max-w-xs">
  <div className="aspect-[2/3] relative overflow-hidden rounded-t-lg">
    <img src={book.coverUrl} alt={book.title} className="object-cover w-full h-full" />
  </div>
  <CardHeader>
    <CardTitle>{book.title}</CardTitle>
    <CardDescription>{book.author}</CardDescription>
  </CardHeader>
  <CardContent>
    <Typography variant="body-sm">R$ {book.price}</Typography>
  </CardContent>
  <CardFooter className="gap-2">
    <Button className="flex-1">Comprar</Button>
    <Button variant="ghost" size="md" aria-label="Adicionar à lista">
      <HeartIcon />
    </Button>
  </CardFooter>
</Card>
```

---

## 6.6 — Componente 5: Badge

Badge é o componente de status — aparece em produtos (disponível, esgotado), categorias (ficção, romance, autoajuda) e notificações.

```typescript
// packages/components/src/components/Badge/Badge.tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const badgeVariants = cva(
  [
    'inline-flex items-center gap-1',
    'rounded-full border px-2.5 py-0.5',
    'text-xs font-semibold',
    'transition-colors',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-[var(--ds-color-border-brand)]',
          'bg-[var(--ds-color-blue-50)] text-[var(--ds-color-brand-primary)]',
        ],
        success: [
          'border-green-200',
          'bg-green-50 text-green-700',
        ],
        warning: [
          'border-amber-200',
          'bg-amber-50 text-amber-700',
        ],
        danger: [
          'border-red-200',
          'bg-red-50 text-red-700',
        ],
        neutral: [
          'border-[var(--ds-color-border-default)]',
          'bg-[var(--ds-color-surface-muted)] text-[var(--ds-color-text-muted)]',
        ],
        solid: [
          'border-transparent',
          'bg-[var(--ds-color-brand-primary)] text-white',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  )
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
```

**Uso:**
```tsx
<Badge>Novo</Badge>
<Badge variant="success">Em estoque</Badge>
<Badge variant="danger">Últimas unidades</Badge>
<Badge variant="neutral">Esgotado</Badge>
<Badge variant="warning">Pré-venda</Badge>
<Badge variant="solid">Bestseller</Badge>
```

---

## 6.7 — Exports Públicos do Pacote

```typescript
// packages/components/src/index.ts
export { Button, buttonVariants } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';

export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';

export { Typography, typographyVariants } from './components/Typography/Typography';
export type { TypographyProps } from './components/Typography/Typography';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './components/Card/Card';

export { Badge, badgeVariants } from './components/Badge/Badge';
export type { BadgeProps } from './components/Badge/Badge';

export { cn } from './lib/cn';
```

---

## 📋 EXERCÍCIO 6.1 — Implementar o Primeiro Componente do Seu DS

```
Objetivo: usar este capítulo como base para criar o Button do
seu próprio DS — com a identidade visual da sua marca.

PASSO 1 — Configure as variáveis de cor no CSS
Copie o output do Style Dictionary (Cap 4) para seu projeto.
Importe o CSS no root da aplicação de playground.

PASSO 2 — Instale as dependências
pnpm add class-variance-authority clsx tailwind-merge
pnpm add @radix-ui/react-slot

PASSO 3 — Crie o utilitário cn.ts
Copie o código da seção 6.1.

PASSO 4 — Implemente seu Button
Ajuste as classes de cor para usar seus tokens semânticos.
Mantenha a estrutura CVA — apenas substitua os valores.

PASSO 5 — Teste no playground
Crie um arquivo TestPage.tsx com os 4 variants e 3 sizes.
Confirme que:
□ Primary tem sua cor de brand
□ Foco visível é claro (anel de foco em volta do botão)
□ Estado disabled reduz opacidade
□ Loading state mostra spinner

ENTREGÁVEL: screenshot do playground com todos os variants.
```

---

## 🏆 Micro-vitória 6.1

> *Você tem 5 componentes prontos. Não são componentes genéricos copiados de um template — são componentes construídos sobre os seus tokens, com a identidade visual da sua marca, acessíveis por padrão. Isso é um Design System em funcionamento.*

---

## Key Takeaways — Capítulo 6

1. **5 componentes** (Button, Input, Typography, Card, Badge) cobrem 80% dos casos de interface de produto. Comece aqui, não com 40 componentes.
2. **CVA (Class Variance Authority)** é a forma mais limpa de gerenciar variantes em Tailwind — evita strings de template ternárias ilegíveis.
3. **Radix UI Slot** (`asChild`) torna componentes polimórficos sem sacrificar tipagem TypeScript.
4. Acessibilidade não é um passo extra — `aria-invalid`, `aria-describedby`, `focus-visible` são parte do componente desde o início.
5. Todos os valores visuais vêm de **CSS Custom Properties** (`var(--ds-color-*)`), não de classes Tailwind hardcoded. Isso garante que os tokens sejam a única fonte de verdade.

---

## Hook de Fechamento

> *Os 5 componentes existem. Mas componentes sem documentação são, na prática, inúteis para outros devs do time. No próximo capítulo, você vai aprender a configurar o Storybook 8 — a ferramenta padrão da indústria para documentação de componentes — e criar stories que documentam automaticamente props, estados e exemplos de uso.*
