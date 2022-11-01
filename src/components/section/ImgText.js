import React from "react";

const imageTitle ={
  title: "24시간 언제 어디서나 신선하게",
  desc: "‘콜드체인 배달 시스템’에 따라 신선도를 유지해 안전하게 배송되며,온도 모니터링 기능이 가능한 스마트 디바이스로 현장관리자 없이 24시간운영 가능한 비대면 플랫폼 입니다.",
}

const imageTextDesc = [
  {
  imgClass: "img1",
  btnClass: "basic",
  link: "/",
  },
  {
  imgClass: "img2",
  btnClass: "blue",
  link: "/",
  },
];

function ImgDesc({imgClass,btnClass,link}) {
  return (
    <div className={`imgText__img ${imgClass}`}>
    <a href={link} className={btnClass}>결제 박스</a>
    </div>
  );
}


function ImgText({attr}) {
  return (
    <section
    id="imgTextType"
    className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
  >
    <h2 className="blind">이미지/텍스트 영역</h2>
    <div className={`imgText__inner ${attr[3]}`}>
      <div className="imgText__txt">
        <h3>{imageTitle.title}</h3>
        <p>{imageTitle.desc}</p>
      </div>
      <div className={`imgText__img ${imgClass}`}>
        <a className={`basic href=${link}`}>결제 박스</a>
      </div>
      <div className="imgText__img img2">
        <a className="blue" href={link}>스낵 박스</a>
      </div>

    {imageTextDesc.map((desc,index)=>(
      <ImgDesc
        kye={index}
        title={desc.title}
        imgClass={desc.imgClass}
        btnClass={desc.btnClass}
        link={desc.link}
      />
    ))}

    </div>
  </section>

  )
}



// function ImgText({ attr }) {
//   return (
//     <section
//       id="imgTextType"
//       className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
//     >
//       <h2 className="blind">이미지/텍스트 영역</h2>
//       <div className="imgText__inner container">
//         <div className="imgText__txt">
//           <h3>24시간 언제 어디서나 신선하게</h3>
//           <p>
//             ‘콜드체인 배달 시스템’에 따라 신선도를 유지해 안전하게 배송되며,
//             온도 모니터링 기능이 가능한 스마트 디바이스로 현장관리자 없이 24시간
//             운영 가능한 비대면 플랫폼 입니다.
//           </p>
//         </div>
//         <div className="imgText__img img1">
//           <a className="basic" href="/">결제 박스</a>
//         </div>
//         <div className="imgText__img img2">
//           <a className="blue" href="/">스낵 박스</a>
//         </div>
//       </div>
//     </section>
//   );
// }
export default ImgText;
