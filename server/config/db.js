const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "phu",
  password: "123456",
  database: "web_sales_book",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Ket noi toi CSDL thanh cong");
});

module.exports = db;
