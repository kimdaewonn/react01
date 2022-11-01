import React from "react";

function Banner({ attr }) {
  return (
    <section id="bannerType" className={`banner__wrap ${attr[0]}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">키친 박스</h3>
        <p className="desc">
          간편식세트부터 샐러드까지 인원이 적어도 조리시설이 없어도 식사 제공이
          가능합니다.
        </p>
      </div>
    </section>
  );
}
export default Banner;
