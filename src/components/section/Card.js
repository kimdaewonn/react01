import React from "react";

const cardTitle = {
  title: "도시락 부터 샐러드 까지",
  desc: "신선한 품질과 좋은 식사를 합리적인 가격으로 만나볼 기회!!",
};
const cardText = [
  {
    title: "도시락",
    desc: "고기중심 도시락, 스테이크 도시락, 치킨 도시락, 비빔밥형 도시락,새우튀김 도시락, 돈까스 도시락, 야채도시락 등 다양한 도시 락이준비되어 있습니다.",
    btn: "더 자세히 보기",
    btnLink: "/",
    img: "assets/img/card_bg01.jpg",
  },
  {
    title: "샐러드",
    desc: "샐러드 별로 드레싱도 다르고 황금 공식이란것이 존재합니다. 감자샐러드, 그린 샐러드, 멕시칸 샐러드, 시저 샐러드 등 다양한 샐러드가준비되어 있습니다.",
    btn: "더 자세히 보기",
    btnLink: "/",
    img: "assets/img/card_bg02.jpg",
  },
  {
    title: "샌드위치",
    desc: "잼 샌드위치, 참치 샌드위치, 치즈 샌드위치, 햄치즈 샌드위치,땅콩버터 샌드위치, 달걀 샌드위치, 야채 샌드위치, 치킨 샌드위치 등다양한 종류가 준비되어 있습니다.",
    btn: "더 자세히 보기",
    btnLink: "/",
    img: "assets/img/card_bg03.jpg",
  },
];

function CardInner({title, desc, btn, btnLink, img}){
  return (
    <article className="card">
    <figure className="card__header">
      <img src={img} alt={title} />
    </figure>
    <div className="card__body">
      <h3 className="tit">{title}</h3>
      <p className="desc">{desc}</p>
      <a className="btn" href={btnLink}>
        {btn}
        <span aria-hidden="true">
          <svg
            width="65"
            height="8"
            viewBox="0 0 65 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
              fill="black"
            />
          </svg>
        </span>
      </a>
    </div>
  </article>
  );
}

function Card({ attr }){
  return (
     <section id="cardType" className={`card__wrap ${attr[0]} ${attr[1]}`}>
      <h2>{cardTitle.title}</h2>
      <p>{cardTitle.desc}</p>
      <div className={`card__inner ${attr[2]}`}>
        {cardText.map((card,index)=>(
          <CardInner
            key={index}
            title={card.title}
            desc={card.desc}
            btn={card.btn}
            btnLink={card.btnLink}
            img={card.img}
          />
        ))}
      </div>
    </section>
  );
}
export default Card;
