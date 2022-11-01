import React from "react";

function Text({ attr }) {
  return (
    <section id="cardType" className={`card__wrap ${attr[0]} ${attr[1]}`}>
      <h2 className="blind">텍스트 영역</h2>

      <span>과정을 알아봅시다.</span>
      <h2 className="mb70">간식 박스 설치</h2>
      <div className="text__inner container">
        <div className="text t1">
          <h3 className="text__title">1. 상담접수</h3>
          <p className="text__dsec">
            홈페이지를 통해 상담 문의를 남겨주시면 고객 사의 규모, 업종, 성비,
            비용에 맞춰 적합한 기기 와 서비스 타입을 제안하는 1차 상담을 진행.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">2. 고객사 방문</h3>
          <p className="text__dsec">
            전문 컨설턴트가 직접 방문하여 주변 식당/매점 유무 등을 확인하고
            유동인원, 환경에 맞춰 간식박스 설치 최적 장소를 추천해드립니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">3. 조건협의, 계약</h3>
          <p className="text__dsec">
            고객사 맞춤 상품 제안과 선택, 복지 지원금 에 따른 상품 가격, 월 예상
            금액 등 비용,운 영 조건 협의후 계약이 진행됩니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">4. 설치 및 운영</h3>
          <p className="text__dsec">
            간식박스는 설치와 동시에 바로 운영이 가능 합니다.전문 배송기사님이
            주기적으로 방문, 관 리해드리며 데이터 기반 진열 종류,수량을 조정
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">5. 월 마감</h3>
          <p className="text__dsec">
            기존 간식 업무에서 복잡하고 골치 아팠던 회 계처리. 수많은 영수증,
            바뀌는 업체관리 이 모 든게 한 장의 거래 명세서로 해결됩니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">6. 피드백</h3>
          <p className="text__dsec">
            간식 박스는 마감 이후 불편했던 점, 개선 했으면 좋겠는 점 등을
            적극적으로 수용하 여 개선하기위해 노력합니다.
          </p>
          <a className="text_btn" href="/">
            더보기
          </a>
        </div>
      </div>
    </section>
  );
}
export default Text;
