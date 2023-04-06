# Projeto-fullstack-backend

# Guia da API

- BaseURL: http://localhost:3000
- acesse a doc por esse repositorio: https://github.com/raphaeldamasceno1852/Client_list_doc
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

```
npm install
<!-- para rodar -->
nom run dev 
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
npm run typeorm migration:run -- -d ./src/data-source
```

---

## 3. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Login](#1-login)
  - [POST - /login](#11-autenticação-de-usuário)

---

## 2. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#2-users)
  - [POST - /users](#21-criação-de-usuário)
  - [GET - /users](#22-listando-usuários)
  - [PATCH - /users/:user_id](#23-atualizar-usuário-por-id)
  - [DELETE - /users/:user_id](#24-deletar-usuário-por-id)
- [clients](#3-clients)
  - [POST - /clients](#31-criação-de-clients)
  - [GET - /clients](#32-listando-Clientss)
  - [PATCH - /clients/:client_id](#33-atualizar-clients-por-id)
  - [DELETE - /clients/:client_id](#34-deletar-clients-por-id)

---

---

---

## 1. **Login**

[ Voltar para Autenticação ](#4-autenticação)

O objeto User é definido como:

| Campo    | Tipo   | Descrição                    |
| -------- | ------ | ---------------------------- |
| email    | string | O e-mail do usuário.         |
| password | string | A senha de acesso do usuário |

### Endpoint

| Método | Rota   | Descrição                   |
| ------ | ------ | --------------------------- |
| POST   | /login | Autenticação de um usuário. |

---

### 1.1. **Autenticação de Usuário**

[ Voltar para Autenticação ](#4-autenticação)

### `/login`

### Exemplo de Request:

```
POST /login
Host: http://localhost:3000
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "seunome@mail.com",
  "password": "123456"
}
```

### Schema de Validação com Yup:

```javascript
loginSerializer = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
200 Ok
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6dHJ1ZSwiaXNBY3RpdmUiOnRydWUsInR5cGVVc2VyIjoiRGV2IiwiaWF0IjoxNjc0MDQ5NTI1LCJleHAiOjE2NzQxMzU5MjUsInN1YiI6ImQyOWY2Mzk2LWQ1MDMtNDg3Ny04NWRhLWY1NTNhMWY2ODE3ZSJ9.wWeXDDMXcJ3mKMC9IEFmljgTC3sPt95U3UR_-i6dpsQ"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                  |
| -------------- | -------------------------- |
| 403 Forbidden  | Invalid email or password. |
| 404 Not found  | User was deleted, 404.     |

---

## 2. **Users**

[ Voltar para os Endpoints ](#2-endpoints)

O objeto User é definido como:

| Campo     | Tipo    | Descrição                                    |
| --------- | ------- | -------------------------------------------- |
| location  | string  | local do usuário                             |
| id        | string  | Identificador único do usuário               |
| firstname | string  | O nome do usuário.                           |
| lastname  | string  | O sobrenome do usuário.                      |
| email     | string  | O e-mail do usuário.                         |
| password  | string  | A senha de acesso do usuário                 |
| isAdm     | boolean | Define se um usuário é Administrador ou não. |
| phone     | string  | Número de telefone de usuário.               |
| createdAt | date    | data da criação do usuário                   |
| updatedAt | date    | data da atualização do usuário               |
| deletedAt | date    | data da atualização do usuário               |
|           |

### Endpoints

| Método | Rota            | Descrição                                        |
| ------ | --------------- | ------------------------------------------------ |
| POST   | /users          | Criação de um usuário.                           |
| GET    | /users/profile  | Listagem de perfil usuários                      |
| PATCH  | /users/:user_id | Atualiza um usuário usando seu ID como parâmetro |
| DELETE | /users/:user_id | Deleta um usuário usando seu ID como parâmetro   |

---

### 2.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
POST /users
Host: http://localhost:3000
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "firstName": "Seu ",
  "lastName": "Nome",
  "email": "seunome@gmail.com",
  "password": "1234",
  "phone": "12245678911"
}
```

### Schema de Validação com Yup:

```javascript
CreateUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phone: yup.string().required(),
    isAdm: yup.boolean().notRequired().default(false)
})
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
  "deletedAt": null,
  "updatedAt": "2023-04-03T12:08:03.048Z",
  "createdAt": "2023-04-03T12:08:03.048Z",
  "isAdm": false,
  "phone": "12245678911",
  "email": "seunome@gmail.com",
  "lastName": "Nome",
  "firstName": "Seu ",
  "id": "549b84ce-4d2d-41b9-9c09-11e54c6edc98"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |

### 2.2. **Listando Usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
GET /users
Host: http://localhost:3000
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "clients": [],
    "deletedAt": null,
    "updatedAt": "2023-04-03T12:08:03.048Z",
    "createdAt": "2023-04-03T12:08:03.048Z",
    "isAdm": false,
    "phone": "12245678911",
    "email": "seunome@gmail.com",
    "lastName": "Nome",
    "firstName": "Seu ",
    "id": "549b84ce-4d2d-41b9-9c09-11e54c6edc98"
  }
]
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

---

### 2.3. **Atualizar Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:user_id`

### Exemplo de Request:

```
PATCH /users/"549b84ce-4d2d-41b9-9c09-11e54c6edc98"
Host: http://localhost:3000
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

Necessita de apenas um campo para fazer a atualização parcial.

```json
{
  "email": "seunomeeditado@gmail.com"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "deletedAt": null,
  "updatedAt": "2023-03-24T13:36:53.818Z",
  "createdAt": "2023-03-24T13:25:53.445Z",
  "isAdm": false,
  "phone": "22992479791",
  "email": "seunomeeditado@gmail.com",
  "lastName": "Nome",
  "firstName": "Seu",
  "id": "549b84ce-4d2d-41b9-9c09-11e54c6edc98"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição         |
| ---------------- | ----------------- |
| 404 Not Found    | User dont exists. |
| 401 Unauthorized | jwt malformed.    |
| 401 Unauthorized | Invalid token.    |

---

### 2.4. **Deletar Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:user_id`

### Exemplo de Request:

```
PATCH /users/549b84ce-4d2d-41b9-9c09-11e54c6edc98
Host: http://localhost:3000
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

vazio.

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 401 Unauthorized | jwt malformed.     |
| 404 Not Found    | User dont exists.  |
| 403 Unauthorized | User is not admin. |

---

## 3. **Clients**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Clients é definido como:

| Campo     | Tipo   | Descrição                                          |
| --------- | ------ | -------------------------------------------------- |
| id        | string | Identificador único da Clients                     |
| fullname  | string | O nome do Cliente.                                 |
| email     | string | O e-mail da Cliente.                               |
| phone     | number | Telefone do Cliente.                               |
| createdAt | date   | Informa a data da criação da conta da Cliente.     |
| updatedAt | date   | Informa a data da atualização da conta da Cliente. |

---

### Endpoints

| Método | Rota                 | Descrição                                        |
| ------ | -------------------- | ------------------------------------------------ |
| POST   | /Clients             | Criação de um Clients.                           |
| GET    | /Clients             | Lista todos os Clientes.                         |
| PATCH  | /Clients/:Clients_id | Atualiza um Cliente usando seu ID como parâmetro |
| DELETE | /Clients/:Clients_id | Deleta um Cliente usando seu ID como parâmetro   |

---

### 3.1. **Criação de Clients**

[ Voltar para os Endpoints ](#5-endpoints)

### `/clients`

### Exemplo de Request:

```
POST /clients
Host: http://localhost:3000
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "fullname": "seucliente",
  "email": "seucliente@mail.com",
  "telefone": "1234578919"
}
```

### Schema de Validação com Yup:

```javascript
CreateClientSchema: SchemaOf<IClientRequest> = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    telefone: yup.string().required()
});
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
  "updatedAt": "2023-04-02T02:06:20.314Z",
  "registeredAt": "2023-04-02T02:06:20.314Z",
  "telefone": "1234578919",
  "email": "seucliente@mail.com",
  "fullname": "seucliente",
  "id": "c335f342-5e02-49e8-862d-3a5ffc99cfa0"
}
```

### Possíveis Erros:

| Código do Erro | Descrição               |
| -------------- | ----------------------- |
| 409 Conflict   | Clients already exists. |

---

### 3.2. **Listando Clients**

[ Voltar aos Endpoints ](#5-endpoints)

### `/clients`

### Exemplo de Request:

```
GET /clients
Host: http://localhost:3000
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "updatedAt": "2023-04-03T12:45:31.003Z",
    "registeredAt": "2023-04-03T12:45:31.003Z",
    "telefone": "1234578919",
    "email": "seuclient@mail.com",
    "fullname": "Seu Cliente",
    "id": "1f187b4e-4935-40df-9c6d-b79419f5a675"
  }
]
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

---

### 3.3. **Atualizar Clients por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/clients/:clients_id`

### Exemplo de Request:

```
PATCH /clients/1f187b4e-4935-40df-9c6d-b79419f5a675
Host: http://localhost:3000
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                |
| --------- | ------ | ---------------------------------------- |
| user_id   | string | Identificador único de Cliente (Clients) |

### Corpo da Requisição:

Necessita de apenas um campo para fazer a atualização parcial.

```json
{
  "fullname": "seu client editado"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "updatedAt": "2023-04-03T12:49:38.430Z",
  "registeredAt": "2023-04-03T12:45:31.003Z",
  "telefone": "1234578919",
  "email": "seuclient@mail.com",
  "fullname": "seu client editado",
  "id": "1f187b4e-4935-40df-9c6d-b79419f5a675"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 401 Unauthorized | Invalid token.     |
| 404 Not Found    | Clients not found. |

---

### 3.4. **Deletar Clients por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/clients/:Clients_id`

### Exemplo de Request:

```
PATCH /clients/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: http://localhost:3000
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                               |
| --------- | ------ | --------------------------------------- |
| user_id   | string | Identificador único da Clients(Clients) |

### Corpo da Requisição:

vazio.

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 401 Unauthorized | Invalid token.     |
| 404 Not Found    | Clients not found. |

---
