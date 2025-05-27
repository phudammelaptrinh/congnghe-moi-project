import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [NgayThangNamSinh, setNgayThangNamSinh] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    // Kiểm tra đầu vào
    if (!fullName || !email || !password || !soDienThoai || !NgayThangNamSinh) {
      setMessage("❗ Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    try {
      await axios.post("http://localhost:5002/api/auth/register", {
        fullName,
        email,
        password,
        soDienThoai,
        NgayThangNamSinh,
      });

      setMessage("✅ Đăng ký thành công! Chuyển hướng...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Đăng ký thất bại.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký</h2>

        <input
          type="text"
          placeholder="Họ và tên"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-2 mb-3 border rounded"
        />
        <input
          type="email"
          placeholder="Email (Gmail)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-3 border rounded"
        />
        <input
          type="tel"
          placeholder="Số điện thoại"
          value={soDienThoai}
          onChange={(e) => setSoDienThoai(e.target.value)}
          className="w-full px-4 py-2 mb-3 border rounded"
        />
        <input
          type="date"
          placeholder="Ngày tháng năm sinh"
          value={NgayThangNamSinh}
          onChange={(e) => setNgayThangNamSinh(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Đăng ký
        </button>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
