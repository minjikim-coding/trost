import React from "react";
import "Component/Footer/Footer.scss";
// import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-box">
          <div className="footer-link">
            <div className="footer-info-link">
              <div className="footer-info-link-item">회사 소개</div>
              <div className="footer-info-link-item">인재 채용</div>
              <div className="footer-info-link-item">
                이용약관 & 개인정보처리방침
              </div>
              <div className="footer-info-link-item">공지사항</div>
              <div className="footer-info-link-item">자주 묻는 질문</div>
              <div className="footer-info-link-item">문의하기</div>
            </div>
            <div className="footer-sns-link">
              <div className="sns facebook"></div>
              <div className="sns instagram"></div>
              <div className="sns brunch"></div>
              <div className="sns kakao"></div>
              <div className="sns blog"></div>
            </div>
          </div>
          <div className="footer-download-text">트로스트 앱 다운로드</div>
          <div className="footer-app">
            <button className="google-play"></button>
            <button className="app-store"></button>
          </div>
          <div className="footer-info">
            <div>
              상호명 : (주)휴마트컴퍼니<span>|</span>대표 : 김동현
            </div>
            <div>
              사업장소재지 : 서울특별시 강남구 선릉로 428, 위워크 선릉 3호점
            </div>
            <div>
              사업자등록번호 : 773-81-00238<span>|</span>통신판매업신고번호 :
              2018-서울강남-02734<span>|</span>개인정보책임자 : 김태욱
            </div>
            <div>
              대표 메일 : trost@hu-mart.com<span>|</span>
            </div>
            <div>
              고객 문의 : 카카오톡 플러스친구 '트로스트' <span>|</span>
              전화번호:02-6435-1242
            </div>
          </div>
          <div className="footer-sos">
            본인 또는 타인의 생명이 위급한 상황일 경우에는 24시간 상담 가능한
            정신건강 위기상담전화 1577-0199 혹은 보건복지콜센터 129에 도움을
            요청하십시오.
            <br />
            긴급 신고는 119 안전신고센터를 이용하시기 바랍니다.
          </div>
          <div className="footer-copyright">
            ⓒ Humart Company Co., Ltd. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}
