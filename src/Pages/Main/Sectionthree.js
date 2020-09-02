import React, { Component } from 'react'

class Sectionthree extends Component {
    render() {
        return (
        <section className="section-three">
          <div className="content-box-three">
            <h2 className="content-title">감정데이터에 기반한 전문 심리상담</h2>
            <div className="partner-intro-box">
              <ul className="partner-intro-list">
                <li className="partner-intro-item-one">
                  상담, 심리, 임상 전공 석사 졸업 이상의 학력!
                </li>
                <li className="partner-intro-item-two">
                  공인된 상담학회의 자격증 보유
                  <ul>
                    <li>- 한국상담심리학회 상담심리사 2급 이상</li>
                    <li>- 한국상담학회 전문상담사 2급 이상</li>
                  </ul>
                </li>
                <li className="partner-intro-item-three">
                  상담진행 횟수, 후기로 검증된 상담사
                </li>
              </ul>
              <div className="partner-intro-img"></div>
            </div>
          </div>
        </section>
        )
    }
}

export default React.memo(Sectionthree);