import React, { useEffect, useState } from "react";
import axios from "axios";
import { getFolder } from "../../utils/folderMapping";
import Vector from "../../assets/website/blue-pattern.png";

const Hero = ({ handleOrderPopup }) => {
  const [books, setBooks] = useState([]);
  const [imageId, setImageId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Style ảnh nền
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/book/hero")
      .then((res) => {
        const data = res.data.map((book) => ({
          img: `/images/book/${getFolder(book.loaiSach)}/${book.hinh}`,
          title: book.loaiSach,
          description: book.moTa,
        }));
        setBooks(data);
        if (data.length > 0) {
          setImageId(data[0].img);
          setTitle(data[0].title);
          setDescription(data[0].description);
        }
      })
      .catch((err) => {
        console.error("Lỗi khi fetch hero books:", err);
      });
  }, []);

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Văn bản */}
          <div
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              {title}
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                by Anonymous
              </p>
            </h1>

            <p
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm"
            >
              {description}
            </p>

            <div>
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Ảnh */}
          <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                src={imageId}
                alt="hero book"
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
              />
            </div>

            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
              {books.map((item, index) => (
                <img
                  key={index}
                  src={item.img}
                  onClick={() => {
                    setImageId(item.img);
                    setTitle(item.title);
                    setDescription(item.description);
                  }}
                  alt="thumbnail"
                  className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
