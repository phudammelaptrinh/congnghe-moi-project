const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
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

  //forget password

  // Gửi email đặt lại mật khẩu
  static async forgotPassword(req, res) {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Vui lòng nhập email" });
    }

    try {
      const user = await User.findUserByEmail(email);
      if (!user) {
        // Không tiết lộ email có tồn tại hay không
        return res.status(200).json({
          message: "Nếu email tồn tại, hướng dẫn đặt lại mật khẩu sẽ được gửi.",
        });
      }

      const token = crypto.randomBytes(20).toString("hex");
      const resetLink = `http://localhost:5173/reset-password?token=${token}`;

      // Gửi email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      console.log("GMAIL_USER:", process.env.GMAIL_USER);
      console.log("GMAIL_PASS:", process.env.GMAIL_PASS);

      await transporter.sendMail({
        to: email,
        subject: "Yêu cầu đặt lại mật khẩu",
        html: `
        <p>Bạn vừa yêu cầu đặt lại mật khẩu.</p>
        <p>Nhấn vào liên kết dưới đây để đặt lại:</p>
        <a href="${resetLink}">${resetLink}</a>
      `,
      });

      res.status(200).json({
        message: "Nếu email tồn tại, hướng dẫn đặt lại mật khẩu sẽ được gửi.",
      });
    } catch (err) {
      console.error("Lỗi quên mật khẩu:", err.message);
      res.status(500).json({ message: "Đã có lỗi xảy ra." });
    }
  }

  static async resetPassword(req, res) {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ message: "Thiếu token hoặc mật khẩu." });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Cần phải gửi token dạng JWT
      const email = decoded.email;

      const user = await User.findUserByEmail(email);
      if (!user) {
        return res
          .status(400)
          .json({ message: "Token không hợp lệ hoặc user không tồn tại." });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await User.updatePasswordByEmail(email, hashedPassword);

      return res
        .status(200)
        .json({ message: "Mật khẩu đã được đặt lại thành công." });
    } catch (err) {
      console.error("Lỗi reset password:", err.message);
      return res
        .status(400)
        .json({ message: "Token hết hạn hoặc không hợp lệ." });
    }
  }
}

module.exports = Auth;
