import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderTitle = {
  small: "SNACKBOX",
  title: "에너지가 필요할 때",
  desc: "에너지가 부족한 당신!! 식사를 하기에는 애매하고 출출해서 무언가 먹고 싶지 않나요?",
};
const sliderDesc = [
  {
    link: "/",
    btn: "자세히 보기",
    btncolor: "",
  },
  {
    link: "/",
    btn: "정보 보기",
    btncolor: "black",
  },
];

// function SliderInner({ link, btn, btncolor }) {
//   return (
//     <div className="desc">
//       <a href={`${link}`} className={`${btncolor}`}>
//         {`${btn}`}
//       </a>
//     </div>
//   );
// }

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
              <span>{SliderTitle.small}</span>
              <h3>{SliderTitle.title}</h3>
              <p>{SliderTitle.desc}</p>
              <div className="btn">
                <a
                  href={`${sliderDesc[0].link}`}
                  className={`${sliderDesc[0].btncolor}`}
                >
                  {`${sliderDesc[0].btn}`}
                </a>
                <a
                  href={`${sliderDesc[1].link}`}
                  className={`${sliderDesc[1].btncolor}`}
                >
                  {`${sliderDesc[1].btn}`}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>{SliderTitle.small}</span>
              <h3>{SliderTitle.title}</h3>
              <p>{SliderTitle.desc}</p>
              <div className="btn">
                <a
                  href={`${sliderDesc[0].link}`}
                  className={`${sliderDesc[0].btncolor}`}
                >
                  {`${sliderDesc[0].btn}`}
                </a>
                <a
                  href={`${sliderDesc[1].link}`}
                  className={`${sliderDesc[1].btncolor}`}
                >
                  {`${sliderDesc[1].btn}`}
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>{SliderTitle.small}</span>
              <h3>{SliderTitle.title}</h3>
              <p>{SliderTitle.desc}</p>
              <div className="btn">
                <a
                  href={`${sliderDesc[0].link}`}
                  className={`${sliderDesc[0].btncolor}`}
                >
                  {`${sliderDesc[0].btn}`}
                </a>
                <a
                  href={`${sliderDesc[1].link}`}
                  className={`${sliderDesc[1].btncolor}`}
                >
                  {`${sliderDesc[1].btn}`}
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default Slider;
