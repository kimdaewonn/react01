import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderText = [
  {
    small: "SNACKBOX",
    title: "에너지가 필요할 때",
    desc: "에너지가 부족한 당신!! 식사를 하기에는 애매하고 출출해서 무언가 먹고 싶지 않나요?",
    basicbtn: "자세히 보기",
    blackbtn: "정보 보기",
    link: "/",
  }
]

function SliderInner({small,title,desc,basicbtn,blackbtn,link}){
  return(
        <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
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
            <span>{small}</span>
            <h3>{title}</h3>
            <p>
              {desc}
            </p>
          <div className="btn">
            <a href={link}>{basicbtn}</a>
            <a href={link} className="black">
              {blackbtn}
            </a>
          </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="desc">
            <span>{small}</span>
            <h3>{title}</h3>
            <p>
              {desc}
            </p>
          <div className="btn">
            <a href={link}>{basicbtn}</a>
            <a href={link} className="black">
              {blackbtn}
            </a>
          </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="desc">
            <span>{small}</span>
            <h3>{title}</h3>
            <p>
              {desc}
            </p>
          <div className="btn">
            <a href={link}>{basicbtn}</a>
            <a href={link} className="black">
              {blackbtn}
            </a>
          </div>
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

function Slider(props) {
  return (
    <section id="sliderType" className={`slider__wrap ${props.fonts}`}>
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
            <span>{}</span>
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
  </section>

  )
}

export default Slider;