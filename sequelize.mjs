import dotenv from "dotenv";
import { Sequelize } from "sequelize";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configuração do Sequelize usando as variáveis de ambiente
const sequelize = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: "postgres", // ou o dialect do seu banco de dados
  }
);

export default sequelize;
