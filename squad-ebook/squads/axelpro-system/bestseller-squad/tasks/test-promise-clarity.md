---
task: Test Promise Clarity
responsavel: "@promise-architect"
Entrada:
  - refined_book_promise: "Final promise and title options"
  - test_audience_sample: "5-10 people from target demographic"
  - test_format: "Online survey, in-person, or landing page test"
Saida:
  - promise_clarity_score: "Quantitative score (1-10)"
  - comprehension_rate: "% who immediately understand the promise"
  - emotional_response_rate: "% who feel compelled by the promise"
  - purchase_intent_rate: "% who would buy the book based on promise alone"
  - reader_response_summary: "Qualitative feedback and suggestions"
  - recommended_title: "Best performing title from tests"
---

## Objetivo
Testar a promessa com pessoas reais do público-alvo para validar se comunica claramente e gera interesse genuíno. Dados reais > opiniões internas.

## Contexto (Baseado no PDF "7 Passos para um BestSeller")
- **Passo 2**: Validar a promessa antes de escrever
- Teste com público real revela pontos cegos
- 3 segundos = tempo de decisão na Amazon
- Se a promessa não funciona em texto, o livro não vende

## Metodologia de Teste

### Método 1: Teste de Compreensão
Mostre a promessa (título + subtítulo) e pergunte:
- "O que você acha que este livro ensina?"
- "Para quem este livro é?"
- "O que você vai ganhar lendo?"

**Espera-se**: Respostas alinhadas com a promessa pretendida

### Método 2: Teste de Impacto Emocional
Perguntas pós-leitura:
- "Numa escala de 1-10, quão interessante isso parece?"
- "O que você sentiu ao ler?"
- "Essa promessa te motiva a querer saber mais?"

**Espera-se**: Scores acima de 7/10, emoções positivas

### Método 3: Teste de Intenção de Compra
Após ver a promessa:
- "Você compraria este livro?"
- "Quanto pagaria por ele?"
- "O que faria você comprar agora?"

**Espera-se**: Alta intenção de compra, disposição de pagar preço de livro

### Método 4: Landing Page Test (Avançado)
- Crie uma página simples com capa, título, descrição
- Acompanhe taxa de clique em "Comprar" ou cadastro de email

## Instruções de Execussão

### Preparação
1. Reúna 5-10 pessoas do público-alvo
2. Prepare a promessa em formato de capa de livro
3. Crie perguntas estruturadas
4. Tenha uma opção alternativa para comparar

### Execução
1. Mostre a promessa sem contexto adicional
2. Faça perguntas na ordem: compreensão → interesse → intenção
3. Registre respostas exatas (capture linguagem)
4. Faça perguntas abertas: "O que mudaria?"

### Análise
1. Calcule taxas de compreensão (>80% = bom)
2. Calcule scores de interesse (>7/10 = bom)
3. Identifique padrões nas respostas
4. Documente linguagem que as pessoas usam

## Critérios de Sucesso
- [ ] Testado com pelo menos 5 pessoas do público-alvo
- [ ] Comprehension rate > 80%
- [ ] Average interest score > 7/10
- [ ] Purchase intent > 50%
- [ ] Identificados pelo menos 3 pontos de melhoria
- [ ] Title choice validated by majority preference

## Formato do Output
```
# Promise Test Results

## Test Setup
- Method: [How tested]
- Sample size: [X people]
- Demographics: [Who]

## Results

### Comprehension Test
- Correct understanding: X%
- Misunderstandings: [List if any]

### Emotional Response
- Avg Interest Score: X/10
- Common emotions: [List]

### Purchase Intent
- Would buy: X%
- Would consider: X%
- Would not buy: X%
- Price range acceptable: $XX - $XX

## Title Testing
[Which title performed best]

## Feedback Summary
[Direct quotes from testers]

## Recommendations
[Changes to make based on test results]

## Final Recommendation
[Best promise/title combination to proceed with]
```