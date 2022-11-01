import React from "react";

const BannerText = {
  title: "키친 박스",
  desc: "간편식세트부터 샐러드까지 인원이 적어도 조리시설이 없어도 식사 제공이가능합니다.",
};

function Banner({fonts}) {
  return (
    <section id="bannerType" className={`banner__wrap ${fonts[0]}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">{BannerText.title}</h3>
        <p className="desc">
          {BannerText.desc}
        </p>
      </div>
    </section>
  );
}
export default Banner;
