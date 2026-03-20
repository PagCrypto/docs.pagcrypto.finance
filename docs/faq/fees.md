---
title: "Fees"
---


## 1. Conceito de Taxa de Rede

A **Taxa de Rede** é um valor fixo cobrado por transação, destinado a cobrir os **custos técnicos de processamento, liquidação e integração entre redes blockchain e sistemas bancários nacionais** (como PIX e boletos bancários).
Ela **não constitui spread, juros, tarifa financeira ou taxa de câmbio**, sendo estritamente uma **taxa de operação tecnológica**.

A PagFinance atua como **provedora de infraestrutura e tecnologia de pagamento cripto-fiat**, processando ordens de pagamento através de conexões seguras entre carteiras Web3, APIs bancárias e smart contracts.
Toda cobrança realizada é destinada à **manutenção, liquidação e auditoria on-chain/off-chain** do serviço.

---

## 2. Estrutura de Cálculo

A taxa total aplicada em cada transação segue a seguinte lógica:

**Fórmula geral:**
**Taxa Total = max(Taxa Mínima ; % sobre o valor da transação)**

A taxa mínima e o percentual variam conforme o nível de verificação (KYC) e o método de pagamento:

| | KYC-1 (não verificado) | KYC-2 (verificado) |
|---|---|---|
| **Percentual** | 3,50% flat | progressivo (ver tabela) |
| **Mínimo PIX** | R$ 1,20 | R$ 1,20 |
| **Mínimo Boleto** | R$ 2,50 | R$ 2,50 |

---

## 3. Regras para Usuários com Cadastro Básico (KYC-1)

Usuários com registro básico **não completaram verificação de identidade** e operam com taxa de **3,50% sobre o valor da transação**, respeitando os seguintes limites operacionais:

| Tipo de Limite | Valor | Descrição |
|----------------|--------|------------|
| **Por transação** | R$ 650,00 | Valor máximo permitido em uma única transação |
| **Diário** | R$ 1.300,00 | Valor total permitido em um mesmo dia |
| **Mensal** | R$ 20.000,00 | Teto máximo de movimentação por mês |

| Valor da transação | Taxa (PIX) | Taxa (Boleto) |
|---:|--:|--:|
| R$ 20,00 | R$ 1,20 (mínimo) | R$ 2,50 (mínimo) |
| R$ 50,00 | R$ 1,75 | R$ 2,50 (mínimo) |
| R$ 100,00 | R$ 3,50 | R$ 3,50 |
| R$ 500,00 | R$ 17,50 | R$ 17,50 |
| R$ 650,00 | R$ 22,75 | R$ 22,75 |

**Observações:**
- Transações acima de **R$ 650** por operação, **R$ 1.300/dia** ou **R$ 20.000/mês** requerem verificação de identidade (KYC).
- A limitação protege contra uso indevido e garante conformidade com práticas AML.
- A taxa mínima incide **uma vez por transação**, independente do valor.


## 3.1. Regras para Usuários Verificados (KYC-2)

Usuários que concluíram o **cadastro completo (PF ou PJ)** têm acesso a **limites ampliados** e **taxas progressivas** conforme o valor da transação.

| Tipo de Limite | Valor | Descrição |
|----------------|--------|------------|
| **Por transação** | R$ 10.000,00 | Valor máximo permitido por operação |
| **Diário** | R$ 30.000,00 | Valor total permitido em um mesmo dia |
| **Mensal** | R$ 100.000,00 | Teto máximo de movimentação mensal |

**Estrutura de taxas progressiva:**

| Faixa de valor | Taxa de serviço | Mínimo PIX | Mínimo Boleto |
|---|---:|---:|---:|
| até R$ 5.000 | 2,75% | R$ 1,20 | R$ 2,50 |
| R$ 5.001 – R$ 50.000 | 2,50% | R$ 1,20 | R$ 2,50 |
| R$ 50.001 – R$ 100.000 | 2,00% | R$ 1,20 | R$ 2,50 |
| acima de R$ 100.000 | 1,75% | R$ 1,20 | R$ 2,50 |

**Exemplos práticos:**

| Valor da transação | Taxa (PIX) | Taxa (Boleto) | Faixa aplicada |
|---:|--:|--:|---|
| R$ 20,00 | R$ 1,20 (mínimo) | R$ 2,50 (mínimo) | até R$ 5.000 |
| R$ 100,00 | R$ 2,75 | R$ 2,75 | até R$ 5.000 |
| R$ 500,00 | R$ 13,75 | R$ 13,75 | até R$ 5.000 |
| R$ 10.000,00 | R$ 250,00 | R$ 250,00 | até R$ 5.000 → R$ 50.000 |
| R$ 60.000,00 | R$ 1.200,00 | R$ 1.200,00 | R$ 50.001 – R$ 100.000 |
| R$ 200.000,00 | R$ 3.500,00 | R$ 3.500,00 | acima de R$ 100.000 |

**Observações:**
- O cadastro KYC-2 habilita transferências para contas de mesma titularidade.
- A transição entre níveis é automática após análise de documentos e validação do sistema.
- O percentual aplicado é o da faixa em que o **valor total da transação** se enquadra — não há divisão progressiva por faixas dentro de uma mesma transação.


## 4. Transparência e Governança

A PagFinance adota o princípio de **transparência tarifária**.
Todos os valores cobrados são apresentados de forma clara antes da execução da transação, com detalhamento de cada componente.

Os parâmetros de taxa poderão ser **ajustados periodicamente** conforme custos operacionais de rede e liquidação, sempre respeitando os seguintes princípios:
- Clareza e comunicação prévia ao usuário;
- Manutenção do caráter tecnológico da cobrança;
- Compatibilidade com o modelo de **infraestrutura de liquidação cripto-fiat**, e não de instituição financeira.


## 5. Definições Técnicas

- **Taxa Mínima:** valor mínimo garantido por transação, independente do percentual calculado. R$ 1,20 para PIX e R$ 2,50 para Boleto.
- **Percentual de Serviço:** percentual aplicado sobre o valor da transação — 3,50% flat para KYC-1 e progressivo (2,75% → 1,75%) para KYC-2.
- **Usuário Verificado (KYC-2):** cliente que realizou verificação completa de identidade, conforme política de conformidade da PagFinance.
- **Usuário Básico (KYC-1):** cliente com cadastro inicial, sem verificação documental completa.
- **Liquidação Off-chain:** integração técnica com provedores financeiros (ex.: Celcoin, OpenPix) para compensação de boletos e PIX.
- **Liquidação On-chain:** registro de hash, assinatura ou metadado de pagamento na blockchain suportada (Solana, Base, XRPL, etc.).


## 6. Atualizações e Revisões

A PagFinance reserva-se o direito de revisar a política de taxas conforme:
- Variações de custo dos provedores de liquidação;
- Alterações regulatórias;
- Expansão para novas redes blockchain ou países.

Todas as atualizações serão publicadas nesta página e comunicadas previamente aos usuários ativos.


## 7. Contato e Suporte

Em caso de dúvidas sobre esta política, abra um chamado pelos canais oficiais do suporte no aplicativo ou pelo e-mail informado na área de **Ajuda e Suporte** da PagFinance.