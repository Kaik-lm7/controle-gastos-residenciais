# 💰 Sistema de Controle de Gastos Residenciais

Projeto desenvolvido como teste técnico utilizando **ASP.NET Core (.NET)** no back-end e **React + TypeScript** no front-end.

O sistema permite realizar o gerenciamento de pessoas e transações financeiras, seguindo as regras de negócio propostas no desafio.

---

## 📌 Funcionalidades

### 👤 Cadastro de Pessoas

- Cadastro de pessoas
- Listagem de pessoas
- Exclusão de pessoas
- Exclusão automática das transações ao remover uma pessoa (Cascade Delete)

### 💳 Cadastro de Transações

- Cadastro de receitas e despesas
- Listagem das transações
- Associação obrigatória a uma pessoa cadastrada
- Validação para impedir que menores de 18 anos cadastrem receitas

### 📊 Dashboard

- Total de receitas
- Total de despesas
- Saldo geral
- Resumo financeiro individual por pessoa

---

## 🛠 Tecnologias Utilizadas

### Back-end

- ASP.NET Core
- C#
- Entity Framework Core
- SQLite

### Front-end

- React
- TypeScript
- Vite
- Axios

---

## 📂 Estrutura do Projeto

```
ControleGastosResidenciais/

├── backend/
│   └── ControleGastos.API/
│
├── frontend/
│   └── src/
│
└── README.md
```

---

# ▶ Como executar o projeto

## Pré-requisitos

- .NET SDK 8.0 (ou versão utilizada no projeto)
- Node.js
- npm

---

## Executando o Back-end

Entre na pasta da API:

```bash
cd backend/ControleGastos.API
```

Execute:

```bash
dotnet restore
dotnet run
```

ou

```bash
dotnet watch run
```

A API ficará disponível em:

```
http://localhost:5262
```

Swagger:

```
http://localhost:5262/swagger
```

---

## Executando o Front-end

Abra outro terminal.

Entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

O React será iniciado em:

```
http://localhost:5173
```

---

## 📋 Regras de Negócio

- Cada transação deve estar vinculada a uma pessoa cadastrada.
- Pessoas menores de 18 anos podem cadastrar apenas despesas.
- Ao excluir uma pessoa, todas as suas transações são removidas automaticamente.
- O Dashboard apresenta o resumo financeiro geral e por pessoa.

---

## 👨‍💻 Autor

Kaik Cardoso