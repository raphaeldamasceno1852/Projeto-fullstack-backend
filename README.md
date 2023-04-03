# Projeto-fullstack-backend

# Guia da API

- BaseURL: http://localhost:3000

## Tabela de Conteúdos

- [Visão Geral](#2-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)

A URL base da aplicação:
http//:localhost:3001

---

## 2. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
.env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 3. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Login](#1-login)
  - [POST - /login](#11-autenticação-de-usuário)

---

## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#4-users)
  - [POST - /users](#41-criação-de-usuário)
  - [GET - /users](#42-listando-usuários)
  - [PATCH - /users/:user_id](#43-atualizar-usuário-por-id)
  - [DELETE - /users/:user_id](#44-deletar-usuário-por-id)
- [clients](#5-clients)
  - [POST - /clients](#51-criação-de-clients)
  - [GET - /clients](#52-listando-ongs)
  - [PATCH - /clients/:client_id](#53-atualizar-clients-por-id)
  - [DELETE - /clients/:client_id](#54-deletar-clients-por-id)
