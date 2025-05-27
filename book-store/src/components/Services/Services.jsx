import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { getFolder } from "../../utils/folderMapping";

const Services = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/book/featured")
      .then((res) => {
        const data = res.data.map((book) => ({
          img: `/images/book/${getFolder(book.loaiSach)}/${book.hinh}`,
          title: book.tenSach,
          description: book.moTa,
        }));
        setBooks(data);
      })
      .catch((err) => {
        console.error("❌ Lỗi khi fetch sách Services:", err);
      });
  }, []);

  return (
    <div className="py-10" id="services">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Best Books</h1>
          <p className="text-xs text-gray-400">
            Cùng khám phá những cuốn sách được yêu thích nhất hiện nay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {books.map((book, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* Ảnh */}
              <div className="h-[100px]">
                <img
                  src={book.img}
                  alt={book.title}
                  className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                />
              </div>

              {/* Nội dung */}
              <div className="p-4 text-center">
                {/* ⭐⭐⭐⭐ */}
                <div className="flex justify-center gap-1 mb-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>

                <h2 className="text-xl font-bold">{book.title}</h2>
                <p className="text-gray-500 group-hover:text-white text-sm line-clamp-2">
                  {book.description}
                </p>

                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => console.log("Order Now clicked")}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
