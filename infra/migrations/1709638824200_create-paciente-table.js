/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("pacientes", {
    id: {
      type: "serial",
      primaryKey: true,
    },
    nome: {
      type: "varchar(100)",
      notNull: true,
    },
    telefone: {
      type: "varchar(20)",
      notNull: true,
    },
    data_nascimento: {
      type: "date",
      notNull: true,
    },
    sexo: {
      type: "char(1)",
      notNull: true,
    },
    ala: {
      type: "char(1)",
      notNull: true,
    },
    quarto: {
      type: "integer",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("pacientes");
};
