# 💰 Sistema de Controle de Gastos Residenciais

![Status](https://img.shields.io/badge/Status-Concluído-success)
![.NET](https://img.shields.io/badge/.NET-8.0-purple)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![SQLite](https://img.shields.io/badge/SQLite-Database-green)

Projeto desenvolvido como teste técnico utilizando **ASP.NET Core (.NET)** no Back-end e **React + TypeScript** no Front-end.

O sistema realiza o gerenciamento de pessoas e de transações financeiras residenciais, respeitando todas as regras de negócio propostas no desafio.

---

# 📸 Demonstração

## Dashboard

![Dashboard](assets/dashboard.png)

---

## Cadastro de Pessoas

![Pessoas](assets/pessoas.png)

---

## Cadastro de Transações

![Transações](assets/transacoes.png)

---

# 📖 Objetivo

Desenvolver um sistema para controle de gastos residenciais contendo:

- Cadastro de Pessoas;
- Cadastro de Transações;
- Consulta dos totais financeiros;
- Persistência dos dados utilizando SQLite;
- Interface web desenvolvida em React.

---

# ✨ Funcionalidades

## 👤 Pessoas

- Cadastro de pessoas
- Listagem
- Exclusão
- Exclusão automática das transações relacionadas (Cascade Delete)

---

## 💳 Transações

- Cadastro de receitas
- Cadastro de despesas
- Associação obrigatória a uma pessoa existente
- Listagem de todas as transações

---

## 📊 Dashboard

- Total de Receitas
- Total de Despesas
- Saldo Atual

---

## 📈 Consulta de Totais

Consulta individual contendo:

- Receitas
- Despesas
- Saldo

Consulta geral utilizada pelo Dashboard.

---

# 📌 Regras de Negócio

✔ Pessoa obrigatoriamente cadastrada antes da transação.

✔ Menores de 18 anos podem cadastrar apenas despesas.

✔ Ao excluir uma pessoa todas as suas transações são removidas automaticamente.

✔ Persistência dos dados utilizando SQLite.

---

# 🛠 Tecnologias

## Back-end

- ASP.NET Core (.NET 8)
- C#
- Entity Framework Core
- SQLite
- Swagger

## Front-end

- React
- TypeScript
- Vite
- Axios
- CSS

---

# 📂 Estrutura

```
ControleGastosResidenciais
│
├── backend
│   └── ControleGastos.API
│
├── frontend
│
├── assets
│   ├── dashboard.png
│   ├── pessoas.png
│   └── transacoes.png
│
└── README.md
```

---

# 🚀 Executando o Projeto

## Pré-requisitos

- .NET 8 SDK
- Node.js 18+
- Git

---

## Back-end

```bash
cd backend/ControleGastos.API

dotnet restore

dotnet run
```

ou

```bash
dotnet watch run
```

API

```
http://localhost:5262
```

Swagger

```
http://localhost:5262/swagger
```

---

## Front-end

Abra outro terminal.

```bash
cd frontend

npm install

npm run dev
```

Aplicação

```
http://localhost:5173
```

---

# 🗄 Banco de Dados

O sistema utiliza SQLite para persistência dos dados.

O relacionamento entre Pessoa e Transação foi configurado utilizando Cascade Delete através do Entity Framework Core.

---

# 📝 Comentários sobre a Implementação

Durante o desenvolvimento foram adotadas algumas decisões para melhorar a organização e atender às regras propostas no desafio:

- Utilização do Entity Framework Core para acesso aos dados.
- Uso do SQLite para persistência local.
- Separação entre Back-end e Front-end.
- Interface moderna em tema escuro.
- Controllers responsáveis pelas validações das regras de negócio.
- Organização do código visando facilitar manutenção e leitura.

---

# 👨‍💻 Autor

**Kaik Limitti Cardoso**

Desenvolvido como solução para teste técnico utilizando ASP.NET Core (.NET) e React + TypeScript.