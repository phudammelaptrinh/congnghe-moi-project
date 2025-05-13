const db = require("../config/db");

// tim user theo email
const findUserByEmail = async (email) => {
  const rows = await db.query("SELECT * FROM `users` WHERE email = ? ", [
    email,
  ]);

  // const rows = Array.isArray(results) ? results[0] : results;
  return rows[0];
};

//tao user moi
const createUser = async (user) => {
  try {
    const {
      userID,
      roleID,
      fullName,
      email,
      password,
      soDienThoai,
      NgayThangNamSinh,
      status,
      // createdAt,
      // updatedAt,
    } = user;

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
    console.error("Loi co so du lieu!");
  }
};

module.exports = {
  findUserByEmail,
  createUser,
};
