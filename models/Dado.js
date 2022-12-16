const { DataTypes } = require("sequelize");

const connection = require("../database/connection");

const Dado = connection.define("dados", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  preco: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },

  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

Dado.sync().then(() => {});

module.exports = Dado;