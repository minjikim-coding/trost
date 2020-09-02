import React, { Component } from 'react'

export default class Sectioneight extends Component {
    render() {
        return (
        <section className="section-eight">
          <div className="content-box-eight">
            <h3 className="eap-companies-title">EAP 프로그램 이용 기업</h3>
            <div className="eap-companies">
              {Array(14).fill().map(() => <div className="eap-company"></div>)}
            </div>
            <h3 className="partnership-title">제휴 기업</h3>
            <div className="partnership-companies">
              {Array(5).fill().map(() =>  <div className="partnership-company"></div>)}
            </div>
          </div>
        </section>
        )
    }
}
