import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]} content__item`}
    >
      <h2 className="blind">이미지 영역</h2>
      <h2>간식박스의 특별함</h2>
      <p>신선도, 영양, 균형, 가공단계까지 고려한 간식 = 식품입니다.</p>
      <div className={`image__inner ${props.attr[2]}`}>
        <article className="image img1">
          <h3 className="image__title">요거트</h3>
          <p className="image__desc">
            플레인, 딸기, 복숭아, 포도, 파인애플, 고구마, 단호박 등 다양한 맛이
            있습니 다. 또, 소화기 질병, 콜레스테롤 수치 안정에 도움을 주며, 장수
            건강식입니다.
          </p>
          <a className="image__btn" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title2">과일음료, 과일</h3>
          <p className="image__desc2">
            오렌지 주스, 포도 주스, 토마토 주스, 등 다양하게 준비되어 있습니다.
            과일도 바나나 외에도 사과, 딸기, 귤 등 다양하게 준비되어 있습니다.
          </p>
          <a className="image__btn yellow" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
