// server.mjs

import express from "express";
import { router } from "./routes/routes.mjs";
import dotenv from "dotenv";

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Criar uma instância do aplicativo Express
const app = express();

// Porta em que o servidor irá escutar (usando a variável de ambiente PG_PORT ou uma porta padrão)
const PORT = process.env.SERVER_PORT;

// Middleware para processar dados JSON
app.use(express.json());

// Montar as rotas
app.use("/api", router);

// Rota para o caminho raiz
app.get("/", (req, res) => {
  res.send("Bem-vindo à minha API!");
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
