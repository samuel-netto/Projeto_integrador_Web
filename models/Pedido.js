const { DataTypes } = require("sequelize");

const connection = require("../database/connection");

const Pedido = connection.define("pedidos", {

  Telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Endereco1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Endereco2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Bairro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Referencia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Cep: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Pedido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Pedido.sync();

module.exports = Pedido;