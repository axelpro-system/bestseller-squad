# RASCUNHO — Prefácio & Introdução
**Agent:** `@chapter-builder` | Tasks: `draft-chapter-content` + `create-micro-victories`
**Status:** Primeira versão | **Palavras:** ~3.200

---

## Chapter Metadata
- Target words: 3.000
- Actual words: ~3.200
- Purpose: Criar identificação emocional imediata e orientar o leitor sobre como usar o livro

---

# Prefácio — *Por que este livro existe*

Era uma terça-feira de março. Eu estava abrindo o quinto Pull Request na mesma semana com a mesma correção: *"bot˜ao primário estava com a cor errada na tela de checkout".*

A cor errada. De novo.

Não era um bug. Era uma inconsistência. E a diferença entre essas duas palavras custou ao time três sprints, dois conflitos entre design e desenvolvimento, e uma reunião de pós-mortem onde ninguém sabia de quem era a culpa — porque, honestamente, não era culpa de ninguém. Era culpa da ausência de um sistema.

Naquela mesma semana, fiz um experimento que me deixou sem dormir. Abri o repositório do nosso app e procurei por `"background-color: #2563EB"` — a cor do nosso botão primário. Encontrei **23 ocorrências diferentes** espalhadas por 14 arquivos. Algumas com exatamente esse hex. Outras com `#1D6FEB`. Outras com `var(--brand-blue)`. Outras com `blue-600` do Tailwind. Todas "o mesmo botão". Todas levemente diferentes.

Não era um projeto bagunçado. Era um projeto normal. Com um time normal. Em uma empresa normal.

E foi aí que entendi: nós não tínhamos um problema de design. Tínhamos um problema de sistema.

---

Este livro nasceu dessa frustração. E também de anos trabalhando com times de produto que vivem o mesmo ciclo: criam componentes, recriam componentes, discutem sobre os componentes, e nunca chegam a um acordo sobre como eles deveriam funcionar. Os designs ficam no Figma. O código fica no repositório. E as duas coisas crescem em direções diferentes até que uma viagem ao Figma se torna arqueologia — *"quando foi feito isso aqui?"* — e o código vira um museu de decisões esquecidas.

Se você está lendo isso, provavelmente reconhece esse cenário. Talvez você seja o desenvolvedor que cansa de receber comentários de PR sobre pixels. Talvez seja o designer que ficou sabendo que aquele componente que passou horas refinando nunca foi implementado direito. Talvez seja o tech lead que quer fazer certo, mas não sabe por onde começar sem parar o roadmap.

Eu escrevi este livro para você.

Não para uma empresa de 500 pessoas com um time dedicado de Design System. Para você, com o time que tem agora, entregando o que precisa entregar na sprint de amanhã.

O projeto que vamos construir juntos — o **DS Book Shop** — é um e-commerce fictício, mas com problemas reais. Tokens que precisam suportar modo escuro. Componentes que precisam funcionar em contextos diferentes. Documentação que o time vai consultar antes de perguntar no Slack. Um pacote no npm que você vai instalar com `npm install` como qualquer outra dependência.

Ao final deste livro, você terá construído isso. Não lido sobre isso. Construído.

Vamos começar.

---

## 🏆 Micro-vitória do Prefácio
> *Você acabou de identificar que o problema que sente no dia a dia tem nome e tem solução. Isso já coloca você à frente de 80% dos devs que ainda chamam isso de "problema de comunicação entre design e tech".*

---

## Introdução — *O que é este livro e como usá-lo*

Antes de abrir o editor de código ou o Figma, quero ter uma conversa honesta sobre o que este livro é — e o que não é.

### O que é um Design System de verdade?

Pergunta um desenvolvedor sênior o que é um Design System e ele vai dizer: *"uma biblioteca de componentes React."*

Pergunta a um designer e ele vai dizer: *"o guia de estilo no Figma."*

Pergunta a um PM e ele vai dizer: *"aquela coisa que o time de plataforma deveria ter feito ano passado."*

Todos estão certos. E todos estão errados.

Um Design System é, na prática, **o contrato visual e técnico entre design e desenvolvimento**. É o documento vivo que responde: *como esse botão deveria parecer, como ele deveria se comportar, e onde está o código que o faz funcionar?* Três perguntas. Uma resposta unificada.

A confusão começa porque um DS tem múltiplas camadas:

| Camada | O que é | Exemplo |
|---|---|---|
| **Tokens** | Os valores primitivos do sistema | cor, espaçamento, tipografia |
| **Componentes** | Os blocos de interface reutilizáveis | Button, Input, Card |
| **Padrões** | Como componentes se combinam | formulário de login, cabeçalho |
| **Documentação** | O manual de uso de tudo acima | Storybook, guia de estilo |
| **Processo** | Como o DS evolui e é governado | RFC, versionamento, revisão |

A maioria dos times tem as camadas do meio (componentes) mas não tem as de baixo (tokens) nem as de cima (processo). O resultado é um conjunto de componentes que divergem com o tempo — o que chamamos de **component drift**.

**Este livro aborda todas as cinco camadas**, nessa ordem.

---

### A diferença entre um DS que o time usa e um que ninguém usa

Existe um graveyard silencioso de Design Systems tecnicamente impecáveis que ninguém usa. Times que passaram meses construindo um Storybook completo, publicaram no GitHub, mandaram o link no Slack — e três meses depois o time ainda usava Material UI porque era "mais rápido de achar".

O problema não é técnico. É de adoção. E adoção começa no dia 1, não após o lançamento.

Ao longo deste livro, vamos construir cada decisão pensando em como ela facilita (ou dificulta) a adoção. Um nome de componente claro. Uma API que não surpreende. Uma documentação que leva 5 minutos para alguém externo ao projeto seguir sozinho.

Porque um DS ignorado não resolve nada.

---

### O projeto DS Book Shop

Do Capítulo 4 ao 14, vamos construir um Design System para um e-commerce fictício: o **DS Book Shop**.

Por que um e-commerce? Porque e-commerces têm os problemas clássicos de interface:
- Botões com diferentes hierarquias (primário, secundário, destrutivo)
- Formulários com validação e estados de erro
- Tipografia com escala clara (título de produto, descrição, preço)
- Cards com layouts variados (lista, grid, destaque)
- Modo escuro para leitura noturna

O DS Book Shop vai crescer a cada capítulo. No final, você terá:
- ✅ Tokens semânticos com suporte a light/dark mode
- ✅ 5 componentes core documentados no Storybook 8
- ✅ Figma Variables sincronizadas com o código
- ✅ Monorepo com Turborepo
- ✅ Pacote publicado no npm
- ✅ CI/CD com GitHub Actions + Chromatic
- ✅ Política de versionamento com Changesets
- ✅ Guia de adoção para o time

Todo o código estará disponível no repositório GitHub referenciado no Apêndice C.

---

### Pré-requisitos

Este livro assume que você:
- Conhece **React 18+** (sabe criar componentes funcionais com hooks)
- Tem contato básico com **TypeScript** (sabe declarar interfaces e tipos simples)
- Usa **Figma** no nível de usuário (sabe criar frames, aplicar estilos)
- Conhece básico de **npm** (sabe instalar pacotes, rodar scripts)

Você **não** precisa:
- Ter experiência prévia com Design Systems
- Saber configurar webpack, Vite ou bundlers do zero
- Ser designer (entender de design ajuda, mas não é prerequisito)
- Ter um time grande (funciona para projetos solo também)

---

### Como extrair o máximo deste livro

**Leia e faça.** Cada capítulo tem 1-2 exercícios práticos. Se você pular os exercícios, vai absorver 30% do conteúdo. Se você fizer, vai terminar o livro com um DS funcional.

**Use o projeto-modelo.** O DS Book Shop é o seu sandbox. Adapte para o seu contexto, mas não pule — cada capítulo assume que o anterior foi feito.

**Volte ao livro.** Quando seu DS crescer e você enfrentar problemas novos (e vai enfrentar), os capítulos da Parte III e IV vão fazer muito mais sentido que agora.

---

### Como este livro está organizado

```
PARTE 0 — MANIFESTO         Prefácio + Introdução
PARTE I — DIAGNÓSTICO       O problema que você tem e por que acontece
PARTE II — FUNDAÇÃO         Tokens, Figma, componentes e documentação
PARTE III — ENGENHARIA      npm, CI/CD, testes, versionamento
PARTE IV — PUBLICAÇÃO       Adoção, governança e carreira
```

Se você nunca criou um DS, leia do início ao fim na ordem. Se você já tem um DS parcialmente construído, vá direto à parte que faz mais sentido para o seu momento — cada parte é relativamente independente.

---

## 🏆 Micro-vitórias da Introdução

> **Vitória 1 — Conhecimento:** *Você agora sabe a diferença entre uma biblioteca de componentes, um guia de estilo e um Design System. Isso parece óbvio, mas 90% dos conflitos entre design e dev acontecem porque essas três coisas são confundidas.*

> **Vitória 2 — Preparação:** *Você tem o mapa completo do que vai construir. O DS Book Shop não é um exemplo — é o seu projeto. Quando chegar ao Capítulo 9 e publicar no npm, você vai entender por que começamos aqui.*

---

## Key Takeaways — Prefácio & Introdução

1. Um Design System não é uma biblioteca de componentes — é o contrato entre design e desenvolvimento em todas as camadas: tokens, componentes, padrões, documentação e processo.
2. A maioria dos DS falha por problemas de adoção, não de qualidade técnica.
3. O DS Book Shop será construído do zero, capítulo a capítulo, entregando um produto completo e instalável ao final.

---

## Call to Action

Antes de virar para o Capítulo 1:

1. **Abra seu projeto atual** (ou pense no projeto em que vai aplicar o DS)
2. **Identifique mentalmente**: existe uma forma única e documentada de criar um botão primário? Ou cada desenvolvedor decide na hora?
3. **Guarde essa resposta** — o Capítulo 1 vai transformá-la em diagnóstico.

---

## Hook de continuidade

> *"Se você já tentou criar um DS e abandonou na metade, a Parte I vai mostrar por que isso acontece e como evitar. Se nunca tentou, ela vai te poupar meses de retrabalho. Vamos ao diagnóstico."*

---

## Quality Check
- [x] Hook funciona? — A história do PR repetido cria identificação imediata
- [x] Propósito claro? — Leitor sabe o que vai construir e com qual projeto
- [x] Exemplos adequados? — Tabela de camadas do DS, exemplos do DS Book Shop
- [x] Acionável? — CTA claro antes do próximo capítulo
- [x] Tamanho correto? — ~3.200 palavras = 12 páginas ✅

## Victory Moments

### Vitória 1 — Perspectiva (Prefácio)
- **Tipo:** Perspectiva
- **Localização:** Final do prefácio
- **Trigger:** Reconhecimento do problema cotidiano
- **Linguagem:** "Você acabou de identificar que o problema tem nome e tem solução"
- **Propósito:** Quebra a sensação de culpa individual → direciona para solução sistêmica

### Vitória 2 — Conhecimento (Introdução)
- **Tipo:** Conhecimento
- **Localização:** Após tabela de camadas do DS
- **Trigger:** Compreensão da distinção entre biblioteca × Design System
- **Linguagem:** "Você agora sabe a diferença que 90% dos times confunde"
- **Propósito:** Eleva autoconfiança técnica logo no início

### Vitória 3 — Preparação (Introdução)
- **Tipo:** Preparação
- **Localização:** Após apresentação do DS Book Shop
- **Trigger:** Clareza sobre o que será construído
- **Linguagem:** "Você tem o mapa completo"
- **Propósito:** Antecipa a satisfação do produto final para motivar continuidade
