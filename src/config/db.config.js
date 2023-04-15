const Sequelize = require("sequelize");
require('dotenv').config();
// Viene con manejos de errores y todo eso por si no conecta o algo. 
module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres",
});