// routes.mjs

import { Router } from "express";
const router = Router();
import Paciente from "../models/pacienteModel.mjs";

// Rota para criar um paciente

router.post("/pacientes", async (req, res) => {
  try {
    const { nome, telefone, data_nascimento, sexo, ala, quarto } = req.body;

    if (
      !["A", "B"].includes(ala) ||
      !["M", "F"].includes(sexo) ||
      !quartoValido(quarto)
    ) {
      return res.status(400).json({
        mensagem:
          "Os valores 'ala' e 'sexo' devem ser 'A' ou 'B' e 'M' ou 'F' respectivamente. O numero do quarto tambem deve ser entre 1 e 9",
      });
    }

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

// Rota para remover um paciente pelo ID

router.delete("/pacientes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pacienteRemovido = await Paciente.destroy({ where: { id } });
    if (pacienteRemovido === 0) {
      return res.status(404).json({ mensagem: "Paciente não encontrado" });
    }
    res.status(200).json({ mensagem: "Paciente removido com sucesso" });
  } catch (error) {
    console.error("Erro ao remover paciente:", error);
    res.status(500).json({ mensagem: "Erro ao remover paciente" });
  }
});

// Rota para listar todos os pacientes
router.get("/pacientes", async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.status(200).json(pacientes);
  } catch (error) {
    console.error("Erro ao obter pacientes:", error);
    res.status(500).json({ mensagem: "Erro ao obter pacientes" });
  }
});

// Rota para listar pacientes por ALA
router.get("/pacientes/ala/:ala", async (req, res) => {
  try {
    const { ala } = req.params;
    const pacientes = await Paciente.findAll({ where: { ala } });
    res.status(200).json(pacientes);
  } catch (error) {
    console.error("Erro ao obter pacientes por ALA:", error);
    res.status(500).json({ mensagem: "Erro ao obter pacientes por ALA" });
  }
});

// Rota para obter dados de um único paciente pelo ID
router.get("/pacientes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({ mensagem: "Paciente não encontrado" });
    }
    res.status(200).json(paciente);
  } catch (error) {
    console.error("Erro ao obter paciente:", error);
    res.status(500).json({ mensagem: "Erro ao obter paciente" });
  }
});

router.put("/pacientes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, telefone, data_nascimento, sexo, ala, quarto } = req.body;

    if (
      !["A", "B"].includes(ala) ||
      !["M", "F"].includes(sexo) ||
      !quartoValido(quarto)
    ) {
      return res.status(400).json({
        mensagem:
          "Os valores 'ala' e 'sexo' devem ser 'A' ou 'B' e 'M' ou 'F' respectivamente. O numero do quarto tambem deve ser entre 1 e 9",
      });
    }

    // Verificar se o paciente com o ID fornecido existe no banco de dados
    const paciente = await Paciente.findByPk(id);
    if (!paciente) {
      return res.status(404).json({ mensagem: "Paciente não encontrado" });
    }

    // Atualizar as informações do paciente com os novos dados
    await paciente.update({
      nome,
      telefone,
      data_nascimento,
      sexo,
      ala,
      quarto,
    });

    // Responder com os dados atualizados do paciente
    res.status(200).json(paciente);
  } catch (error) {
    console.error("Erro ao editar paciente:", error);
    res.status(500).json({ mensagem: "Erro ao editar paciente" });
  }
});

function quartoValido(quarto) {
  return quarto >= 1 && quarto <= 9;
}

export { router };
