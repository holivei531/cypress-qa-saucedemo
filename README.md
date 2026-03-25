# 🧪 Teste Técnico QA - Cypress E2E

## 📌 Sobre o Projeto

Automação de testes E2E utilizando Cypress + TypeScript no sistema SauceDemo, com foco no fluxo de login.

---

## 🚀 Tecnologias

* Cypress
* TypeScript
* Page Object Model
* Gherkin

---

## ⚙️ Instalação

Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

📌 1. Pré-requisitos

Antes de começar, você precisa ter instalado:

Node.js (versão 16 ou superior)
npm (gerenciador de pacotes, já vem com o Node)
Git (para clonar o repositório)

👉 Para verificar se já possui instalado:

node -v
npm -v
git --version


📌 2. Clonar o Repositório

Clone o projeto para sua máquina:

git clone <https://github.com/holivei531/cypress-qa-saucedemo>

Acesse a pasta do projeto:

cd teste-tecnico-trier-sistemas


📌 3. Instalar Dependências

Execute o comando abaixo para instalar todas as dependências do projeto:

npm install


---

## ▶️ Execução dos Testes

Modo interativo:

npx cypress open


Modo headless:

npx cypress run


---

## 🏗️ Arquitetura

* **Page Object Model** → separação de responsabilidades
* **Fixtures** → dados reutilizáveis

---

## 🧪 Estratégia de Testes

* Testes E2E focados no fluxo crítico (login)
* Cobertura de cenários positivos e negativos
* Validação de mensagens de erro
* Assertions confiáveis sem uso de waits fixos

---

## 📌 Decisões Técnicas

* Uso de TypeScript para tipagem e melhor manutenção
* Uso de Page Object para reutilização
* Separação de dados via fixtures
* Estrutura escalável para crescimento do projeto

---

## 🚧 Melhorias Futuras

* Integração com CI/CD (GitHub Actions)
* Relatórios com Allure
* Testes visuais
* Testes de API integrados


---

## 📊 Cenários Testados

* Login com sucesso
* Login com usuário bloqueado
* Login com senha inválida
* Login com campos vazios

---

## 📁 Estrutura do projeto
---
<pre>
teste-tecnico-trier-sistemas/
│
├── cypress/
│   ├── e2e/
│   │   └── login/
│   │       ├── login.cy.ts
│   │       └── login.feature
│   │   
│   ├── fixtures/
│   │   └── users.json
│   │
│   ├── support/
│   │   ├── commands.ts
│   │   └── e2e.ts
│   │
│   └── pages/
│       └── LoginPage.ts
│
├── cypress.config.ts
├── package.json
├── tsconfig.json
└── README.md
</pre>

---

📄 cypress.config.js
Arquivo de configuração do Cypress, contendo as definições básicas necessárias para o funcionamento do projeto de automação.

---

📄 package.json
Responsável pelo gerenciamento das dependências utilizadas no projeto de automação.

---

📄 .gitignore
Define os arquivos e pastas que não devem ser versionados, como dependências e artefatos gerados durante a execução dos testes.