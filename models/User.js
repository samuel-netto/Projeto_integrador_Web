const { DataTypes } = require("sequelize");

const connection = require("../database/connection");

const User = connection.define("usuarios", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eAdmin: {
    type: DataTypes.BOOLEAN,
    default: false
  }
});

User.sync().then(() => {});

module.exports = User;