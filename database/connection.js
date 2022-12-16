const Sequelize = require("sequelize");

if (process.env.NODE_ENV == 'production' ) {
const connection = new Sequelize(
  'bdpizzaria',
  'sam_prog',
  '',{
    host: 'db4free.net',
    dialect:'mysql',
    timezone: '-03:00',
  }
);
module.exports = connection;
}else {
  const connection = new Sequelize("bdpizzaria", "root", "aluno", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});
module.exports = connection;
}

