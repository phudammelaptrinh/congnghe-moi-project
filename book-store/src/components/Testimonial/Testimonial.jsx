import React from "react";
import Slider from "react-slick";

// Dữ liệu lời đánh giá khách hàng
const testimonialData = [
  {
    id: 1,
    name: "Phú Nguyễn",
    text: "Dịch vụ ở đây thật tuyệt vời! Tôi rất hài lòng với cách làm việc chuyên nghiệp và thân thiện.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Thành Lương",
    text: "Sản phẩm chất lượng, giao hàng nhanh chóng. Tôi sẽ quay lại và giới thiệu cho bạn bè!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Naruto Uzumaki",
    text: "Trải nghiệm mua sắm online dễ dàng, đội ngũ hỗ trợ rất nhiệt tình và chu đáo.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[600px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Khách hàng nói gì về chúng tôi
          </p>
          <h1 className="text-3xl font-bold">Lời đánh giá</h1>
          <p className="text-xs text-gray-400">
            Cùng lắng nghe cảm nhận thật từ những khách hàng đã sử dụng sản phẩm
            và dịch vụ của chúng tôi.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
        >
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div>
                    <img
                      className="rounded-full w-20 h-20"
                      src={data.img}
                      alt={data.name}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>

                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
