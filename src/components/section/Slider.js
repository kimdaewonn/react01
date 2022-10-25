import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Slider() {
  return (
    <div className="slider__inner">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="desc">
            <span>SNACKBOX</span>
            <h3>에너지가 필요할 때</h3>
            <p>
              에너지가 부족한 당신!! 식사를 하기에는 애매하고 출출해서 무언가
              먹고 싶지 않나요?
            </p>
            <div className="btn">
              <a href="/">자세히 보기</a>
              <a href="/" className="black">
                정보 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="desc">
            <span>SNACKBOX</span>
            <h3>에너지가 필요할 때</h3>
            <p>
              에너지가 부족한 당신!! 식사를 하기에는 애매하고 출출해서 무언가
              먹고 싶지 않나요?
            </p>
            <div className="btn">
              <a href="/">자세히 보기</a>
              <a href="/" className="black">
                정보 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="desc">
            <span>SNACKBOX</span>
            <h3>에너지가 필요할 때</h3>
            <p>
              에너지가 부족한 당신!! 식사를 하기에는 애매하고 출출해서 무언가
              먹고 싶지 않나요?
            </p>
            <div className="btn">
              <a href="/">자세히 보기</a>
              <a href="/" className="black">
                정보 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Slider;
