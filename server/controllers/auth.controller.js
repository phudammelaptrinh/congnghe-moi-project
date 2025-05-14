const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

class Auth {
  // Đăng ký
  static async register(req, res) {
    const { fullName, email, password, soDienThoai, NgayThangNamSinh } =
      req.body;

    try {
      const userExist = await User.findUserByEmail(email);
      if (userExist)
        return res.status(400).json({ message: "Email đã tồn tại" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = {
        userID: uuidv4(),
        roleID: "56f2bf5b-2f19-11f0-a03f-088fc30ddfe2", // role khách hàng
        fullName,
        email,
        password: hashedPassword,
        soDienThoai,
        NgayThangNamSinh,
        status: 1,
      };

      await User.createUser(newUser);
      res.status(201).json({ message: "Đăng ký thành công" });
    } catch (err) {
      res.status(500).json({ message: "Lỗi server", error: err.message });
    }
  }

  // Đăng nhập
  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findUserByEmail(email);
      if (!user)
        return res.status(400).json({ message: "Email không tồn tại" });

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
  }

  // Đăng xuất
  static logout(req, res) {
    res.status(200).json({ message: "Đăng xuất thành công" });
  }

  // ✅ Cập nhật thông tin cá nhân
  static async update(req, res) {
    const { userId } = req.params;
    const { fullName, soDienThoai, NgayThangNamSinh } = req.body;

    try {
      const existing = await User.findById(userId);
      if (!existing) {
        return res.status(404).json({ message: "Không tìm thấy người dùng" });
      }

      await User.update(userId, { fullName, soDienThoai, NgayThangNamSinh });

      res.json({ message: "Cập nhật thành công" });
    } catch (error) {
      console.error("Lỗi khi cập nhật user:", error);
      res.status(500).json({ message: "Cập nhật thất bại" });
    }
  }
}

module.exports = Auth;
