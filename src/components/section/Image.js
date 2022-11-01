import React from "react";

const imageTitle =
  {
    title: "간식박스의 특별함",
    desc: "신선도, 영양, 균형, 가공단계까지 고려한 간식 = 식품입니다.",
  };
const imageText = [
  {
    title: "요거트",
    desc: "플레인, 딸기, 복숭아, 포도, 파인애플, 고구마, 단호박 등 다양한 맛이있습니 다. 또, 소화기 질병, 콜레스테롤 수치 안정에 도움을 주며, 장수건강식입니다.",
    imgClass: "img1",
    btnClass:"image__btn",
    btnLink:"/",
  },
  {
    title: "과일음료, 과일",
    desc: "오렌지 주스, 포도 주스, 토마토 주스, 등 다양하게 준비되어 있습니다.과일도 바나나 외에도 사과, 딸기, 귤 등 다양하게 준비되어 있습니다.",
    imgClass: "img2",
    btnClass:"yellow",
    btnLink:"/",
  },
];
function ImageCont({title,desc,imgClass,btnClass,btnLink}){
  return(
    <article className={`image ${imgClass}`}>
    <h3 className="image__title">{title}</h3>
    <p className="image__desc">{desc}</p>
    <a
    className={`image__btn ${btnClass}`}
    href={`${btnLink}`}
    title="자세히 보기"
    >
    {btnClass}</a>
  </article>
  );
}

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]} content__item`}
    >
      <h2>{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>
      <div className={`image__inner ${props.attr[2]}`}>
        {imageText.map((info,index)=>(
          <ImageCont
          key={index}
          title={info.title}
          desc={info.desc}
          imgClass={info.imgClass}
          btnClass={info.btnClass}
          btnLink={info.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
