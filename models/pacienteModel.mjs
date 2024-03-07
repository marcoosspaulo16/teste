import { DataTypes } from "sequelize";
import sequelize from "../sequelize.mjs";

const Paciente = sequelize.define(
  "Paciente",
  {
    // Definição dos campos da tabela Paciente
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ala: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quarto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "pacientes",
    timestamps: false,
  }
);

// `sequelize.define` also returns the model
console.log(Paciente === sequelize.models.Paciente); // true

export default Paciente;
