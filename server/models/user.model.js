const connectDB = require("../config/db");

// Tìm user theo email
const findUserByEmail = async (email) => {
  try {
    const db = await connectDB(); // 👈 Lấy connection đúng cách
    const [rows] = await db.query("SELECT * FROM `users` WHERE email = ?", [
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
    const db = await connectDB(); // 👈 lấy connection
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

const updatePasswordByEmail = async (email, hashedPassword) => {
  const db = await connectDB();
  await db.query(
    "UPDATE users SET password = ?, updatedAt = NOW() WHERE email = ?",
    [hashedPassword, email]
  );
};

module.exports = {
  findUserByEmail,
  createUser,
  updatePasswordByEmail,
};
