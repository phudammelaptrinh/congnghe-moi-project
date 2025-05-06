import React from "react";
// import BooksStack from "../../assets/website/books-stack.png"; // ảnh cũ không dùng
import BooksStack from "../../assets/website/library.jpg"; // ảnh thư viện đang dùng
import Vector from "../../assets/vector3.png";

// Icon từ react-icons
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  // Background style cho banner (vector3.png làm nền mờ)
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      {/* Banner chính */}
      <div className="min-h-[550px]">
        {/* Section chính có hiệu ứng mờ và padding */}
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
          <div data-aos="slide-up" className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Cột bên trái: Hình ảnh */}
              <div>
                <img
                  src={BooksStack}
                  alt="Library Image"
                  className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                />
              </div>

              {/* Cột bên phải: Nội dung văn bản và icon */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                {/* Tiêu đề */}
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Library at your fingertips
                </h1>

                {/* Đoạn mô tả ngắn */}
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Nơi lưu trữ hàng nghìn đầu sách chất lượng, từ văn học đến kỹ
                  năng sống. Truy cập thư viện mọi lúc, mọi nơi chỉ bằng một cú
                  chạm.
                </p>

                {/* Các lợi ích (hàng icon + text) */}
                <div className="flex flex-col gap-4">
                  {/* Ưu điểm 1: Sách chất lượng */}
                  <div className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                    <p>Quality Books</p>
                  </div>

                  {/* Ưu điểm 2: Giao hàng nhanh */}
                  <div className="flex items-center gap-4">
                    <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p>Fast Delivery</p>
                  </div>

                  {/* Ưu điểm 3: Thanh toán dễ dàng */}
                  <div className="flex items-center gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                    <p>Easy Payment method</p>
                  </div>

                  {/* Ưu điểm 4: Có khuyến mãi */}
                  <div className="flex items-center gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                    <p>Get Offers on Books</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
