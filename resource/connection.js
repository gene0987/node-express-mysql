const mysql = require("mysql2");
const dbConfig = require("../config/credentials");

const conn = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASS,
  database: dbConfig.DATABASE,
});

module.exports = conn;
