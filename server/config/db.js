const mysql = require("mysql2/promise");

//require file .env
require("dotenv").config();

let conn;

async function connectDB() {
  if (!conn) {
    try {
      connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      console.log("Kết nối CSDL thành công");
    } catch (err) {
      console.error("Kết nối CSDL thất bại:", err.message);
      throw err;
    }
  }
  return conn;
}

module.exports = connectDB;
