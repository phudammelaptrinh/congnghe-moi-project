import React, { useState, useEffect } from "react";
import darkPng from "../../assets/website/dark-mode-button.png";
import lightPng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  // Khởi tạo state theme từ localStorage nếu có, mặc định là 'light'
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Lấy phần tử <html> để thay đổi class 'dark' cho Tailwind
  const element = document.documentElement;

  // Cập nhật class 'dark' khi theme thay đổi
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark"); // lưu lại vào localStorage
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // chạy mỗi khi 'theme' thay đổi

  return (
    <>
      {/* Nút chuyển đổi chế độ sáng/tối */}
      <div className="relative">
        {/* Icon light - chỉ hiển thị khi đang ở chế độ sáng */}
        <img
          src={lightPng}
          alt="light-mode"
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Icon dark - luôn hiển thị (ở dưới icon light) */}
        <img
          src={darkPng}
          alt="dark-mode"
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300"
        />
      </div>
    </>
  );
};

export default DarkMode;
