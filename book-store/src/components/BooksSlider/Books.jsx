import React, { useEffect, useState } from "react";
import axios from "axios";
import { getFolder } from "../../utils/folderMapping";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/book/topbook") // Gọi API backend
      .then((res) => {
        const data = res.data.map((book) => ({
          img: `/images/book/${getFolder(book.loaiSach)}/${book.hinh}`,
          title: book.loaiSach,
          description: book.moTa,
        }));
        setBooks(data);
      })
      .catch((err) => {
        console.error("❌ Lỗi khi fetch sách Books:", err);
      });
  }, []);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Tiêu đề */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Top Books for you
          </p>
          <h1 className="text-3xl font-bold">Top Books</h1>
          <p className="text-xs text-gray-400">
            Khám phá những cuốn sách được yêu thích nhất hiện nay – từ truyện
            tranh, tiểu thuyết đến kỹ năng sống. Phù hợp với mọi lứa tuổi và sở
            thích.
          </p>
        </div>

        {/* Danh sách sách */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {books.map((book, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between text-center space-y-3 h-[360px] max-w-[180px]"
            >
              <img
                src={book.img}
                alt={book.title}
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold text-sm">{book.title}</h3>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nút xem thêm */}
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            View All Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
