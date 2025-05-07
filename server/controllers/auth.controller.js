const db = require("../config/db");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser } = require("../models/user.model");

//login
const login = (req, res) => {
  const { taiKhoan, password } = req.body;
  const sql = "SELECT * FROM user WHERE taiKhoan = ?";

  db.query(sql, [taiKhoan], async (err, results) => {
    if (err) return res.status(500).json({ message: "Lỗi server" });
    if (results.length === 0)
      return res.status(400).json({ message: "Tài khoản không tồn tại" });

    const user = results[0];

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Sai mật khẩu" });

    const token = jwt.sign({ id_user: user.id_user }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      msg: "Đăng nhập thành công",
      token,
      user: {
        id: user.id_user,
        username: user.taiKhoan,
        name: user.nguoiDung,
        email: user.email,
        phone: user.soDienThoai,
        role: user.id_role,
      },
    });
  });
};

//register
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

//logout
const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false,
  });

  res.status(200).json({ message: "Dang xuat thanh cong" });
};

module.exports = { login, register, logout };
