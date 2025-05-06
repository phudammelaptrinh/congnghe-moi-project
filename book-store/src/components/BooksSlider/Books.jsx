import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

// Dữ liệu danh sách sách: hình ảnh, tiêu đề, tác giả, đánh giá
const booksData = [
  { id: 1, img: Book1, title: "Who's there", rating: 5.0, author: "Someone" },
  { id: 2, img: Book2, title: "His Life", rating: 4.5, author: "John" },
  { id: 3, img: Book3, title: "Lost boys", rating: 4.7, author: "Lost Girl" },
  { id: 4, img: Book2, title: "His Life", rating: 4.4, author: "Someone" },
  { id: 5, img: Book1, title: "Who's There", rating: 4.5, author: "Someone" },
];

const Books = () => {
  return (
    <>
      {/* Khoảng cách phía trên và dưới */}
      <div className="mt-14 mb-12">
        <div className="container">
          {/* Tiêu đề phần sách */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
              Khám phá những cuốn sách được yêu thích nhất hiện nay – từ truyện
              tranh, tiểu thuyết đến kỹ năng sống. Phù hợp với mọi lứa tuổi và
              sở thích.
            </p>
          </div>

          {/* Danh sách sách hiển thị dạng lưới */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="space-y-3">
                  {/* Hình ảnh sách */}
                  <img
                    src={img}
                    alt={title}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />

                  {/* Nội dung thông tin sách */}
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nút xem thêm sách */}
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
