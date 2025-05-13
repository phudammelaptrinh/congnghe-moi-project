const db = require("../config/db");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const userModel = require("../models/user.model");

//register
exports.register = async (req, res) => {
  const { fullName, email, password, soDienThoai, NgayThangNamSinh } = req.body;

  try {
    //check tai khoan da ton tai hay chua?
    const userExist = await userModel.findUserByEmail(email);
    if (userExist) return res.status(400).json({ message: "Email da ton tai" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      userID: uuidv4(),
      roleID: "56f2bf5b-2f19-11f0-a03f-088fc30ddfe2", //roleID
      fullName,
      email,
      password: hashedPassword,
      soDienThoai,
      NgayThangNamSinh,
      status: 1,
    };
    await userModel.createUser(newUser);
    res.status(201).json({ message: "Dang ky thanh cong" });
  } catch (err) {
    res.status(500).json({ message: " Loi server", error: err.message });
  }
};

//login

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findUserByEmail(email);
    if (!user) return res.status(400).json({ message: "Email không tồn tại" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Mật khẩu sai" });

    const token = jwt.sign(
      { userID: user.userID, roleID: user.roleID },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Đăng nhập thành công", token });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

//logout
exports.logout = (req, res) => {
  // Nếu dùng JWT thì logout bên FE, có thể blacklist nếu cần
  res.status(200).json({ message: "Đăng xuất thành công" });
};
