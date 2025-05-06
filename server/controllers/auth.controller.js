const bcrypt = require("bcrypt");
const { createUser } = require("../models/user.model");

const register = (req, res) => {
  const { nguoiDung, taiKhoan, password, email, soDienThoai, id_role } =
    req.body;

  if (!taiKhoan || !password || !email) {
    return res.status(400).json({ message: "Thieu thong tin bat buoc  " });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ message: "Loi ma hoa mat khau" });

    const userData = {
      nguoiDung,
      taiKhoan,
      password: hashedPassword,
      email,
      soDienThoai,
      id_role,
    };

    createUser(userData, (err, result) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ message: "Tai khoan hoac email da ton tai!" });
      }
      res.status(201).json({ message: " Dang ky thanh cong " });
    });
  });
};

module.exports = { register };
