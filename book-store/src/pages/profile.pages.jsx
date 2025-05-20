import React, { useState } from "react";
import axios from "axios";

const UpdateProfile = ({ userId }) => {
  const [fullName, setFullName] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [NgayThangNamSinh, setNgayThangNamSinh] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5002/api/users/${userId}`, {
        fullName,
        soDienThoai,
        NgayThangNamSinh,
      });

      setMessage("✅ Cập nhật thành công!");
    } catch (err) {
      setMessage("❌ Cập nhật thất bại.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Cập nhật thông tin cá nhân</h2>

      <input
        type="text"
        placeholder="Họ tên"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full px-3 py-2 border rounded mb-3"
      />

      <input
        type="tel"
        placeholder="Số điện thoại"
        value={soDienThoai}
        onChange={(e) => setSoDienThoai(e.target.value)}
        className="w-full px-3 py-2 border rounded mb-3"
      />

      <input
        type="date"
        value={NgayThangNamSinh}
        onChange={(e) => setNgayThangNamSinh(e.target.value)}
        className="w-full px-3 py-2 border rounded mb-3"
      />

      <button
        onClick={handleUpdate}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Cập nhật
      </button>

      {message && <p className="mt-3 text-center text-sm">{message}</p>}
    </div>
  );
};

export default UpdateProfile;
