---
title: "Fees"
---


## 1. Conceito de Taxa de Rede

A **Taxa de Rede** é um valor fixo cobrado por transação, destinado a cobrir os **custos técnicos de processamento, liquidação e integração entre redes blockchain e sistemas bancários nacionais** (como PIX e boletos bancários).
Ela **não constitui spread, juros, tarifa financeira ou taxa de câmbio**, sendo estritamente uma **taxa de operação tecnológica**.

A PagCrypto atua como **provedora de infraestrutura e tecnologia de pagamento cripto-fiat**, processando ordens de pagamento através de conexões seguras entre carteiras Web3, APIs bancárias e smart contracts.
Toda cobrança realizada é destinada à **manutenção, liquidação e auditoria on-chain/off-chain** do serviço.

---

## 2. Estrutura de Cálculo

A taxa total aplicada em cada transação é composta por dois componentes:

**Fórmula geral:**
**Taxa Total = (R\$ 3,00 × blocos de R\$ 100) + Taxa de Rede**

- **Taxa Fixa Simplificada:** R\$ 3,00 a cada R\$ 100 pagos.
    - Exemplo: R\$ 500 = (3,00 × 5) = R\$ 15,00.
- **Taxa de Rede (dinâmica):** varia conforme o tipo de liquidação.
    - **PIX → R\$ 1,30**
    - **Boleto → R\$ 2,50**


## 3. Regras para Usuários com Cadastro Básico (KYC-1)

Usuários com registro básico, **não completaram verificação de identidade (KYC)** podem realizar pagamentos **utilizando a Taxa Fixa Simplificada + Taxa de Rede**, respeitando os seguintes limites operacionais:

| Tipo de Limite | Valor | Descrição |
|----------------|--------|------------|
| **Por transação** | R\$ 650,00 | Valor máximo permitido em uma única transação |
| **Diário** | R\$ 1.300,00 | Valor total permitido em um mesmo dia |
| **Mensal** | R\$ 20.000,00 | Teto máximo de movimentação por mês |

| Valor da transação | Cálculo (PIX) | Total (PIX) | Cálculo (Boleto) | Total (Boleto) |
|---:|:--|--:|:--|--:|
| R\$ 100 | 3,00 + 1,30 | **R\$ 4,30** | 3,00 + 2,50 | **R\$ 5,50** |
| R\$ 200 | 6,00 + 1,30 | **R\$ 7,30** | 6,00 + 2,50 | **R\$ 8,50** |
| R\$ 500 | 15,00 + 1,30 | **R\$ 16,30** | 15,00 + 2,50 | **R\$ 17,50** |
| R\$ 650 | 19,50 + 1,30 | **R\$ 20,80** | 19,50 + 2,50 | **R\$ 22,00** |

**Observações:**
- Transações acima de **R\$ 650** por operação, **R\$ 1.300/dia** ou **R\$ 20.000/mês** requerem verificação de identidade (KYC).
- A limitação protege contra uso indevido e garante conformidade com práticas AML.
- Caso o pagamento seja dividido em múltiplas transações, a **Taxa de Rede** incidirá **uma vez por transação**.


## 3.1. Regras para Usuários com Cadastro Manual (KYC-2)

Usuários que concluíram o **cadastro (PF ou PJ)**, com verificação documental manual - nome completo, CPF/CNPJ, titularidade bancária e selfie simples — têm acesso a **limites ampliados** e **taxas reduzidas** em relação ao nível KYC-1.

| Tipo de Limite | Valor | Descrição |
|----------------|--------|------------|
| **Por transação** | R\$ 10.000,00 | Valor máximo permitido por operação |
| **Diário** | R\$ 30.000,00 | Valor total permitido em um mesmo dia |
| **Mensal** | R\$ 100.000,00 | Teto máximo de movimentação mensal |

**Estrutura de taxas:**
- Taxa de serviço: **2,75%** sobre o valor da transação;
- Taxa de rede (fixa): **R\$ 1,30 (PIX)** ou **R\$ 2,50 (boleto)**.

**Exemplo prático:**
> Pagamento de R\$ 2.000 via PIX
> Taxa = (2.000 × 2,75%) + 1,30 = **R\$ 56,30**

**Observações:**
- O cadastro KYC-2 habilita transferências para contas de mesma titularidade.
- Transações acima de R\$ 100.000,00 por mês exigem a verificação completa (KYC-3).
- A transição entre níveis é automática após análise de documentos e validação do sistema.


## 3.2. Regras para Usuários Verificados (KYC-3)

Usuários verificados (níveis **Avançado** ou **Completo**) têm acesso a limites ampliados e taxas reduzidas:

| Tipo de Limite | Valor | Descrição |
|----------------|--------|------------|
| **Por transação** | R\$ 200.000,00 | Valor máximo permitido por operação |
| **Diário** | R\$ 400.000,00 | Valor total permitido em um mesmo dia |
| **Mensal** | R\$ 2.000.000,00 | Teto máximo de movimentação mensal |

| Faixa de valor | Taxa de serviço | + Taxa de Rede |
|---|----------------:|---:|
| até R\$ 5.000 |          2,75 % | + R\$ 1,30 (PIX) ou R\$ 2,50 (Boleto) |
| R\$ 5.001 – R\$ 50.000 |          2,50 % | + variável |
| R\$ 50.001 – R\$ 100.000 |          2,25 % | + variável |
| acima de R\$ 100.001 |          1,75 % | + variável |

A Taxa de Rede segue o mesmo princípio de **custo tecnológico de liquidação**, não caracterizando serviço financeiro.


## 4. Transparência e Governança

A PagCrypto adota o princípio de **transparência tarifária**.
Todos os valores cobrados são apresentados de forma clara antes da execução da transação, com detalhamento de cada componente (Taxa Fixa e Taxa de Rede).

Os parâmetros de taxa poderão ser **ajustados periodicamente** conforme custos operacionais de rede e liquidação, sempre respeitando os seguintes princípios:
- Clareza e comunicação prévia ao usuário;
- Manutenção do caráter tecnológico da cobrança;
- Compatibilidade com o modelo de **infraestrutura de liquidação cripto-fiat**, e não de instituição financeira.


## 5. Definições Técnicas

- **Taxa de Rede (Network Fee):** custo fixo de liquidação em infraestrutura blockchain e/ou provedor bancário (ex.: PIX, boleto).
- **Taxa Fixa Simplificada:** valor escalonado aplicado por bloco de R\$ 100, representando o custo tecnológico do serviço.
- **Usuário Verificado (KYC):** cliente que realizou verificação de identidade, conforme política de conformidade da PagCrypto.
- **Liquidação Off-chain:** integração técnica com provedores financeiros (ex.: Celcoin, OpenPix) para compensação de boletos e PIX.
- **Liquidação On-chain:** registro de hash, assinatura ou metadado de pagamento na blockchain suportada (Solana, Base, XRPL, etc.).


## 6. Atualizações e Revisões

A PagCrypto reserva-se o direito de revisar a política de taxas conforme:
- Variações de custo dos provedores de liquidação;
- Alterações regulatórias;
- Expansão para novas redes blockchain ou países.

Todas as atualizações serão publicadas nesta página e comunicadas previamente aos usuários ativos.


## 7. Contato e Suporte

Em caso de dúvidas sobre esta política, abra um chamado pelos canais oficiais do suporte no aplicativo ou pelo e-mail informado na área de **Ajuda e Suporte** da PagCrypto.

