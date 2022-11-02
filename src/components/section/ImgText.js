import React from "react";
const imgTextTitle = {
  title: "24시간 언제 어디서나 신선하게",
  desc: "‘콜드체인 배달 시스템’에 따라 신선도를 유지해 안전하게 배송되며,온도 모니터링 기능이 가능한 스마트 디바이스로 현장관리자 없이 24시간운영 가능한 비대면 플랫폼 입니다.",
};
ddd;
const ImgTextDesc = [
  {
    img: "assets/img/imgText_bg01.jpg",
    btn: "결제 박스",
    btncolor: "basic",
    link: "/",
  },
  {
    img: "assets/img/imgText_bg02.jpg",
    btn: "스낵 박스",
    btncolor: "blue",
    link: "/",
  },
];

function ImgTextInner({ img, btn, link, btncolor }) {
  return (
    <section>
      <div className="imgText__txt">
        <h3>{imgTextTitle.title}</h3>
        <p>{imgTextTitle.desc}</p>
      </div>
      <div className={`imgText__img ${img}`}>
        <a className={btncolor} href={link}>
          {btn}
        </a>
      </div>
      <div className={`imgText__img ${img}`}>
        <a className={btncolor} href={link}>
          {btn}
        </a>
      </div>
    </section>
  );
}

function ImgText({ attr }) {
  return (
    <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]}`}>
      <h2 className="blind">이미지/텍스트 영역</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <h3>{imgTextTitle.title}</h3>
          <p>{imgTextTitle.desc}</p>
          {ImgTextDesc.map((imgtext, index) => (
            <ImgTextInner
              key={index}
              img={imgtext.img}
              btn={imgtext.btn}
              link={imgtext.link}
              btncolor={imgtext.btncolor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImgText;
