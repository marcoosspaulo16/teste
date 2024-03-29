# API REST - Teste

Esse repositório é destinado a criação de uma API-REST, usando as tecnologias de NODE.js, Express, Migration e PostgreSQL.

## Descrição

Esta API-REST foi desenvolvida para gerenciar dados de pacientes em um negócio de saúde, utilizando as tecnologias Node.js, Express, Migration e PostgreSQL. As funcionalidades da API incluem:

## CRUD (Create, Read, Update, Delete) de pacientes:

- Criação de novos pacientes.
- Edição de dados de pacientes existentes.
- Consulta de dados de um único paciente.
- Listagem de todos os pacientes.
- Exclusão de pacientes.

## Filtragem por ALA:

- Listagem de pacientes por área de atendimento (ALA).

## Configuração de ambiente:

- Instalação do node na máquina (versão 20.11.0)

```
npm init -y
```

- Instalação dos pacotes necessários

```
npm install express pg pg-hstore sequelize
npm install nodemon --save-dev
```

express: Framework web para Node.js que facilita a criação de APIs RESTful.

- pg: Cliente PostgreSQL para Node.js.

- pg-hstore: Um pacote que permite armazenar objetos JSON em colunas PostgreSQL.

- sequelize: ORM (Object-Relational Mapping) para Node.js, que facilita a interação com o banco de dados PostgreSQL.

- nodemon: Ferramenta que observa as alterações nos arquivos e reinicia automaticamente o servidor Node.js.

- Instalação do banco de dados PostgreSQL

  ```
  sudo apt update
  sudo apt install postgresql postgresql-contrib
  // Verificação de instalação
  psql --version
  // Versão utilizada 12.18
  ```

- Instalação da Migration

  ```
  npm install node-pg-migrate@6.2.2 --save-dev
  ```

- Instalação DotEnv@16.4.4
  ```
  npm install dotenv@16.4.4
  ```

## Agora será necessário rodar os script's para criação da tabela `pacientes`

- Realizar migração para criação da tabela `pacientes`

  ```
  npm run migration:up
  ```

- Inicie o banco de dados Postgres

  ```
  npm run dev
  ```

- Levantando o servidor express e o sequelize.

  ```
  npm run start
  ```

### Finalmente a API pode ser testada via Postman.
