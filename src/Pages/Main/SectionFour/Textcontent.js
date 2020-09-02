import React, { Component } from 'react'
import Theraphy from "./Theraphy/Theraphy";
import TheraphyDots from "./Theraphy/TheraphyDots";

export default class Textcontent extends Component {
    render() {
        return (
            <div className={`text-service-contents${this.props.service === "textService" ? " is-clicked" : ""}`}>
            <div className="text-service-slide">
              <div className="text-service-slide-bg">
                <ul className="text-service-slide-images">
                  {this.props.theraphyArr.map((showclass) => {
                    return <Theraphy theraphyShow={showclass} />
                  })}
                </ul>
              </div>
              <div className="slide-dots">
                {this.props.theraphyArr.map((x,i) => {
                  return <TheraphyDots label={i}  countChange={this.props.countChange} theraphyShow={x}/>
                })}
              </div>
            </div>
            <h3>텍스트 테라피</h3>
            <p>
              트로스트 앱 또는 웹페이지에서 전문 심리상담사와 채팅으로
              진행되는 상담입니다.
              <br />
              익명으로 모든 비밀이 보장되며, 상담사와 일정을 조율해 자신이
              원하는 시간에 편리하게 상담을 받을 수 있습니다.
            </p>
            <div className="service-link-tab">
              <button className="service-info">
                상담권 정보<span className="btn-arrow">></span>
              </button>
              <a href="#">
                이용 안내<span className="btn-arrow">></span>
              </a>
            </div>
          </div>
        )
    }
}
