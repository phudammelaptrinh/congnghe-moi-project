const mysql = require("mysql");
const util = require("util");
//require file .env
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Ket noi toi CSDL thanh cong");
});

//covert callback-> promise
db.query = util.promisify(db.query);

module.exports = db;
