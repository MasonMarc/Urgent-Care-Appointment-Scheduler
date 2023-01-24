const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    timezone: "-5:00"
  },);

module.exports = sequelize;
