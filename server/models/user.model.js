const db = require("../config/db");

// Tìm user theo email
const findUserByEmail = async (email) => {
  try {
    const rows = await db.query("SELECT * FROM `users` WHERE email = ?", [
      email,
    ]);
    return rows[0]; // Trả về 1 user hoặc undefined
  } catch (err) {
    console.error("Lỗi truy vấn tìm user:", err.message);
    throw err;
  }
};

// Tạo user mới
const createUser = async (user) => {
  const {
    userID,
    roleID,
    fullName,
    email,
    password,
    soDienThoai,
    NgayThangNamSinh,
    status,
  } = user;

  try {
    await db.query(
      `INSERT INTO users 
      (userID, roleID, fullName, email, password, soDienThoai, NgayThangNamSinh, status, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [
        userID,
        roleID,
        fullName,
        email,
        password,
        soDienThoai,
        NgayThangNamSinh,
        status,
      ]
    );
  } catch (err) {
    console.error("Lỗi tạo user:", err.message);
    throw err;
  }
};

module.exports = {
  findUserByEmail,
  createUser,
};
