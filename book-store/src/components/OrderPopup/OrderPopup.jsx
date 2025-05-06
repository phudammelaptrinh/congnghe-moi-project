import React from "react";
import { IoCloseOutline } from "react-icons/io5";

// Component popup đặt sách
const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {/* Chỉ hiển thị khi orderPopup = true */}
      {orderPopup && (
        // Lớp phủ toàn màn hình nền tối mờ
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          {/* Hộp nội dung popup */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header popup */}
            <div className="flex items-center justify-between">
              <div>
                <h1>Order Your Book</h1>
              </div>

              {/* Nút đóng popup */}
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>

            {/* Body form điền thông tin */}
            <div className="mt-4">
              {/* Tên người đặt */}
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              {/* Email người đặt */}
              <input
                type="email"
                placeholder="email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              {/* Địa chỉ giao hàng */}
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />

              {/* Nút đặt hàng */}
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
