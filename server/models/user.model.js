const pool = require("../config/db");

// Tìm user theo email
const findUserByEmail = async (email) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
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
    await pool.query(
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

// Cập nhật mật khẩu theo email
const updatePasswordByEmail = async (email, hashedPassword) => {
  try {
    await pool.query(
      "UPDATE users SET password = ?, updatedAt = NOW() WHERE email = ?",
      [hashedPassword, email]
    );
  } catch (err) {
    console.error("Lỗi cập nhật mật khẩu:", err.message);
    throw err;
  }
};

module.exports = {
  findUserByEmail,
  createUser,
  updatePasswordByEmail,
};
