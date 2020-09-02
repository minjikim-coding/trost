import React, { Component } from 'react'

export default class Callservice extends Component {
    render() {
        return (
            <div className={`call-service-contents${this.props.service === "callService" ? " is-clicked" : ""}`}>
                <div className="call-service-slide">
                  <div className="call-service-slide-bg"></div>
                </div>
                <h3>전화상담</h3>
                <p>
                  트로스트 앱을 통해 전문 심리상담사와 전화로 진행되는
                  상담입니다.
                  <br />
                  익명으로 모든 비밀이 보장되며, 상담사와 일정을 조율해 자신이
                  원하는 시간에 편리하게 상담을 받을 수 있습니다.
                </p>
                <div className="service-link-tab">
                  <button className="service-info">
                    상담권 정보<span className="btn-arrow">></span>
                  </button>
                  <a href="#">이용 안내</a>
                </div>
              </div>
        )
    }
}
