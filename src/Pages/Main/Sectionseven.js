import React, { Component } from 'react'

export default class Sectionseven extends Component {
    render() {
        return (
        <section className="section-seven">
            <div className="content-box-seven">
            <h2 className="content-title">트로스트 모바일 EAP</h2>
            <div className="eap-intro">
              <div className="eap-intro-title">
                EAP(Employee Assistance Program) 란?
              </div>
              <div className="eap-intro-text">
                기업 내 임직원이 개인, 조직 내 문제로 어려움을 겪을 때 <br />
                심리진단, 상담 서비스 등을 통해 종합적으로 해결방안을 지원하는
                복지 프로그램
              </div>
            </div>
            <div className="eap-contents">
              <div className="eap-content-one">
                <div className="eap-content-text">
                  <div className="eap-content-title">철저한 익명성 보장</div>
                  <div className="eap-content-sub-title">
                    - 대면상담의 부담을 벗어나 훨씬 더 편하고 자유로운 이용
                  </div>
                </div>
              </div>
              <div className="eap-content-two">
                <div className="eap-content-text">
                  <div className="eap-content-title">
                    초기 투자 및 운영비용 부담 감소
                  </div>
                  <div className="eap-content-sub-title">
                    - 기존 사내 상담실, 오프라인 센터에 비해 낮아진 가격 부담
                    <br />- 전체 구성원의 사전진단부터 사후관리까지 폭 넓은
                    심리케어 가능
                  </div>
                </div>
              </div>
              <div className="eap-content-three">
                <div className="eap-content-text">
                  <div className="eap-content-title">접근성의 한계 해결</div>
                  <div className="eap-content-sub-title">
                    - 장소, 시간의 제약 등이 적어 지속적으로 상담이 불가능한
                    해외, 지방근무자들의 이용도 가능
                  </div>
                </div>
              </div>
            </div>
            <div className="eap-content-contact">
              <a href="#" className="eap-content-contact-email">
                제휴 문의 : management@hu-mart.com
              </a>
            </div>
          </div>
        </section>
        )
    }
}
