# Capítulo 2 — *Por Que Sua Última Tentativa Falhou (e Não Foi Culpa Sua)*

---

**A maioria dos times tenta criar um Design System da forma mais difícil possível. E depois culpa a cultura da empresa quando falha.**

Este capítulo vai mostrar o padrão exato de fracasso — não para você se sentir mal, mas para que você nunca repita os mesmos erros. Porque o problema não é de esforço, não é de talento e não é de orçamento. É de abordagem.

E a boa notícia: as abordagens erradas são sempre as mesmas. Se você conhece o padrão, você o evita.

---

## 2.1 — O Erro do Big Bang Design System

Imagine a cena: uma reunião de planning trimestral. O time está frustrado com inconsistências acumuladas. O tech lead bate na mesa e diz: "Precisamos de um Design System de verdade."

Todos concordam. A empolgação é real. O slide com o roadmap fica lindo. A iniciativa tem nome, tem sponsor, tem budget. Começa a *Operação Design System*.

O plan:
- Semana 1–2: Levantamento de todos os componentes existentes
- Semana 3–4: Figma reorganizado do zero
- Semana 5–8: Implementação dos 40 componentes identificados
- Semana 9: Documentação no Storybook
- Semana 10: Rollout para o time

Parece certo, não parece?

**O que acontece na prática:**

Na semana 3, o produto lança uma feature crítica e 2 dos 4 devs são redirecionados. O Figma reorganizado fica pela metade. Os 40 componentes viram 15. Na semana 7, a iniciativa está "quase pronta mas precisando só de mais um sprint". Na semana 11, o projeto foi silenciosamente cancelado. Os 15 componentes ficam em um repositório que ninguém faz merge. Seis meses depois, alguém pergunta: "e aquele DS que íamos criar?"

Este é o **Big Bang Design System** — e é o padrão de falha número um de Design Systems no mundo todo.

### Por que o Big Bang falha?

**1. O produto não para de crescer enquanto o DS é construído.**
Enquanto você recria componentes em um repositório isolado, o produto principal continua acumulando variações. Quando o DS "fica pronto", o produto já evoluiu além do que o DS cobre. O gap é maior do que quando você começou.

**2. O DS em construção não entrega valor até estar "completo".**
Nenhum usuário (dev) consegue usar 12 componentes feitos e 28 em andamento. A percepção de valor só vem quando há cobertura suficiente para ser útil. Com Big Bang, esse momento demora muito — e muitas vezes nunca chega.

**3. Mudanças de prioridade matam projetos longos.**
Um DS Big Bang precisa de 8–12 semanas para chegar a um estado minimamente utilizável. Em qualquer empresa que não seja um monopólio, existe 2-3 mudanças de prioridade em 12 semanas. O DS perde para uma feature de produto toda vez, porque o produto tem usuário externo e o DS ainda não tem.

**A alternativa** — e vamos implementar ao longo deste livro — é a abordagem incremental: começar com 5 componentes, lançar, obter feedback, crescer. O DS entrega valor desde a semana 2. A prioridade nunca cai a zero porque ele já está em uso.

---

## 2.2 — O Problema da Adoção: DS Perfeitos que Ninguém Usa

Aqui está um padrão que curadores de vagas de emprego front-end veem a toda hora:

> *"Criamos um Design System completo com Storybook, documentação detalhada, npm package e tudo mais. Mas o time continuou usando Material UI."*

Como isso é possível?

A resposta tem três partes:

**Parte 1: O DS foi criado num vácuo.**
Se os devs que vão usar o DS não foram consultados sobre o que precisam, eles vão usar outra coisa. Porque a "outra coisa" resolve o problema deles agora. O DS cobre casos que o time de DS achou que eram importantes.

**Parte 2: A barreira de entrada foi alta demais.**
"Instale o pacote, configure o provider, adicione o preset do Tailwind, importe os tokens, registre os temas..." — se o quickstart tem mais de 5 passos antes do primeiro componente aparecer na tela, a maioria dos devs vai desistir e usar o que já conhece.

**Parte 3: Não existia advocate interno.**
Alguém precisa usar o DS primeiro, resolver seu próprio problema com ele e mostrar para o time que funciona. Se o DS não tem um "champion" que o usa diariamente e pode tirar dúvidas, ele fica orphaned — tecnicamente completo, mas socialmente morto.

A adoção não é um problema técnico. É um problema de produto. O DS é um produto e seus usuários são os desenvolvedores do time. Se o produto não resolve bem o problema do usuário, o usuário abandona.

---

## 2.3 — Por Que Documentação Desatualizada é Pior que Sem Documentação

Parece contraintuitivo. Mas pense na experiência do dev novato que entra no time:

**Cenário A: Sem documentação**
O dev pergunta para o colega como usar o componente. O colega explica. O dev usa. OK.

**Cenário B: Documentação desatualizada**
O dev lê a documentação. Tenta seguir. As props mudaram e o exemplo não funciona. O dev passa 2 horas debugando antes de descobrir que a doc está errada. Sai frustrado. Nunca mais confia na documentação.

Documentação desatualizada cria *ative negative trust* — não apenas ausência de confiança, mas descrença ativa. E descrença ativa é mais difícil de reverter do que ignorância.

A causa raiz: documentação escrita em Confluence ou Notion desacopla do código. Quando o componente muda, a doc não atualiza automaticamente. E ninguém tem tempo de atualizar doc manualmente.

**A solução** — que implementamos no Capítulo 7 — é documentação gerada do código: Storybook com autodocs. Quando a interface do componente muda, a doc muda junto. Quando o código está correto, a doc está correta.

---

## 2.4 — O Gap Figma-Código: Por Que Componentes Sempre Divergem

Um dos padrões mais frustrantes do desenvolvimento front-end moderno:

1. Designer cria componente perfeito no Figma
2. Dev implementa baseado no Figma
3. Designer faz review e encontra 12 diferenças
4. Dev corrige, faz PR
5. Um mês depois, alguém muda o botão no Figma para uma cor nova
6. Ninguém atualizou o código
7. Figma e código divergem novamente

Esse ciclo se repete indefinidamente porque não existe *contrato compartilhado* entre o Figma e o código. São dois artefatos separados que precisam ser mantidos manualmente em sincronia.

A diferença entre um DS e uma coleção de componentes bem feitos é justamente essa: o DS tem um mecanismo de sincronização. Tokens são a fonte única de verdade que alimenta tanto o Figma quanto o código. Quando o token muda, ambos mudam.

Isso não elimina todo o esforço de sincronização — design vai além de tokens — mas elimina 80% da divergência, que em geral acontece em valores de cor, espaçamento e tipografia.

---

## 2.5 — A Armadilha do "Vamos Fazer Quando Tivermos Tempo"

*"O time está no meio de lançamento. Depois que essa fase passar, vamos criar o DS."*

Depois da fase de lançamento: *"Entramos em manutenção emergencial. Assim que estabilizar..."*

Depois de estabilizar: *"Temos um Q4 pesado com features estratégicas. No Q1..."*

No Q1: *"Equipe re-organizada. Precisamos re-priorizar."*

O DS nunca é criado "quando tivermos tempo" porque não existe o momento em que uma empresa de produto tem tempo disponível.

A única forma de criar um DS é tratando-o como o que ele é: **trabalho de produto que entrega valor incremental**, não um projeto separado que compete com o produto.

A estratégia correta: o DS é criado *durante* o desenvolvimento de features de produto. Cada componente novo entra no DS antes de ser usado na feature. O produto entrega a feature *e* o DS cresce. O investimento em tempo é 20–30% maior por componente — e vale cada minuto.

---

## 📋 EXERCÍCIO 2.1 — Autópsia do DS Anterior

```
(Pule este exercício se for sua primeira tentativa de criar um DS)

Objetivo: identificar o padrão de falha da sua tentativa anterior
Tempo estimado: 20 minutos

PARTE A — O que foi criado?
□ Figma reorganizado
□ Biblioteca de componentes (código)
□ Storybook
□ Documentação (Notion/Confluence/README)
□ npm package publicado
□ Outro: ________________________

PARTE B — Em qual fase o projeto parou?
[ ] Planejamento — nunca saiu do papel
[ ] Primeiros artefatos — algo foi criado mas ficou incompleto
[ ] Implementação parcial — alguns componentes foram feitos
[ ] Adoção — produto foi criado mas o time não usou
[ ] Manutenção — funcionou por um tempo, depois foi abandonado

PARTE C — O gatilho de abandono
Qual foi o evento (ou não-evento) que levou ao abandono?
____________________________________________

PARTE D — Dono do DS
Quem era o "dono" responsável? Era claro para o time?
____________________________________________

PARTE E — O que você faria diferente?
Depois de ler o Capítulo 1 e este capítulo, identifique um padrão
de falha que você reconhece na tentativa anterior:
____________________________________________

---
Resultado: Guarde este diagnóstico. No Cap 3, vamos usar para
calibrar sua estratégia DS-First.
```

---

## 🏆 Micro-vitória 2.1 — Alívio
> *Você acabou de ver que as tentativas falham por padrões previsíveis — não por incompetência do time ou falta de comprometimento. Isso significa que você pode ter um resultado diferente simplesmente evitando os mesmos erros. E agora você sabe quais são.*

---

## Caso Real Fictício: A Startup que Jogou 4 Meses Fora

**Contexto:** Startup de fintech brasileira, time de 8 engenheiros, produto com 2 anos de mercado.

**O que aconteceu:** Em março de 2024, o CTO decidiu criar um DS após receber feedback de clientes sobre inconsistência visual no produto. Contratou um designer sênior especificamente para o projeto e alocou 2 engenheiros front-end por 4 meses.

**O resultado:** Em julho, o designer havia criado um Figma completo com 80 componentes documentados. Os engenheiros haviam implementado 23. O Storybook estava em pé. Tudo parecia encaminhado.

**O problema:** Em agosto, o produto precisava de uma mudança urgente de design para adequação regulatória. O DS não cobria os casos necessários. O time optou por fazer as mudanças diretamente no produto sem passar pelo DS. Em setembro, o DS estava desatualizado. Em outubro, estava sendo usado por menos de 30% das telas. Em novembro, ninguém mais o mencionava.

**O que estava errado:**
1. O DS foi construído sem consultar os devs que iriam usar (eles precisavam de casos diferentes dos que o designer priorizou)
2. A cobertura de 80 componentes era ambiciosa demais — os 23 implementados não cobriam casos cotidianos suficientes
3. Quando o produto precisou de algo fora do DS, não havia processo para adicioná-lo rápido — então o time pulou o DS

**O que diferente com este livro:** A metodologia DS-First começa com 5 componentes que o time precisa hoje, lança em semanas, expande baseado em uso real, e tem processo claro para adicionar novos componentes via RFC.

---

## Key Takeaways — Capítulo 2

1. O **Big Bang Design System** falha porque o produto evolui enquanto o DS é construído, criando um gap que nunca fecha antes do projeto ser cancelado.
2. **Adoção falha** quando o DS não consulta seus usuários (devs), quando a barreira de entrada é alta, e quando não existe um champion interno que o use primeiro.
3. **Documentação desatualizada** é ativamente prejudicial — cria descrença que é mais difícil de reverter do que ausência de documentação.
4. O **gap Figma-código** é endêmico sem um mecanismo de sincronização. Tokens são a solução.
5. **DS não se faz "quando sobrar tempo"** — se faz incrementalmente, durante o desenvolvimento de features, adicionando custo de 20–30% por componente e entregando valor imediato.

---

## Hook de Fechamento

> *Você identificou os padrões de falha. Agora a pergunta é: qual é a abordagem correta? No próximo capítulo, vou apresentar a metodologia DS-First — o mapa de decisões que o livro inteiro vai seguir. É um framework de 4 fases que começa com 5 componentes e escala até um sistema publicado no npm com CI/CD e governança. Você vai definir sua stack, o escopo inicial e quem cuida do quê — antes de escrever uma linha de código.*
