// routes.mjs

import { Router } from "express";
const router = Router();

// Rota para criar um paciente

router.post("/pacientes", async (req, res) => {
  try {
    const { nome, telefone, data_nascimento, sexo, ala, quarto } = req.body;
    const novoPaciente = await Paciente.create({
      nome,
      telefone,
      data_nascimento,
      sexo,
      ala,
      quarto,
    });
    res.status(201).json(novoPaciente);
  } catch (error) {
    console.error("Erro ao criar paciente:", error);
    res.status(500).json({ mensagem: "Erro ao criar paciente" });
  }
});

// Rota para obter todos os pacientes
router.get("/pacientes", (req, res) => {
  // Implementação para obter todos os pacientes
});

// Outras rotas para atualizar e excluir pacientes, se necessário

export { router };
