const db = require("../config/db");

const createUser = (userData, callBack) => {
  const sql = `INSERT INTO user (nguoiDung, taiKhoan, password, email, soDienThoai, id_role) VALUES (?, ?, ?, ?, ?, ?)`;

  const values = [
    userData.nguoiDung,
    userData.taiKhoan,
    userData.password,
    userData.email,
    userData.soDienThoai,
    userData.id_role || 1,
  ];
  db.query(sql, values, callBack);
};

module.exports = { createUser };
