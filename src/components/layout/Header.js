import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">간식박스</a>
        </div>
        <div className="header__menu">
          <ul>
            <li className="active">
              <a href="#slideTyper">에너지 보충</a>
            </li>
            <li>
              <a href="#imageType">영양식</a>
            </li>
            <li>
              <a href="#imgTextType">24시간</a>
            </li>
            <li>
              <a href="#cardType">식사</a>
            </li>
            <li>
              <a href="#bannerType">키친 박스</a>
            </li>
            <li>
              <a href="#textType">간식박스 설치</a>
            </li>
          </ul>
        </div>
        <div className="header__member">
          <a href="/" className="header__member1">
            온라인 주문하기
          </a>
          <a href="/" className="header__member2">
            문의하기
          </a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
