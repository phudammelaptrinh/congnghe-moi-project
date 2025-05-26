import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

// Danh sách các liên kết ở phần footer
const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        {/* Grid chia 3 cột chính */}
        <div className="grid md:grid-cols-3 py-5">
          {/* Cột 1: Thông tin công ty */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              Books Store
            </h1>
            <p>
              Nền tảng đọc và mua sách trực tuyến hiện đại, mang đến trải nghiệm
              cá nhân hóa cho mọi độc giả. Khám phá hàng ngàn đầu sách chất
              lượng chỉ trong vài cú click.
            </p>
            <br />

            {/* Địa chỉ */}
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>TP. Hồ Chí Minh, Việt Nam</p>
            </div>

            {/* Số điện thoại */}
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+84 3443989667</p>
            </div>

            {/* Mạng xã hội */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Cột 2-3: Các liên kết quan trọng */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Block 1: Important Links */}
            {/* <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                  >
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Block 2: Links (lặp lại giống block 1) */}
            {/* <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title + "-2"}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                  >
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Block 3: Location (cũng dùng lại link để minh họa) */}
            {/* <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Location
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    key={link.title + "-3"}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                  >
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>

        {/* Phần bản quyền cuối trang */}
        <div className="text-center py-10 border-t-2 border-gray-300/50">
          @ 2025 All rights reserved || Made with ❤️ by Hồ Trường Minh Phú
        </div>
      </section>
    </div>
  );
};

export default Footer;
