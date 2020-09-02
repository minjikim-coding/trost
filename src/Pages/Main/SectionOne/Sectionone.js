import React, { Component } from 'react';
import Countup from "./Countup";
import Type from "./Type";


export default class Sectionone extends Component {
    render() {
        return (
        <section className="section-one">
          <div className="content-box-one">
            <div className="main-title">
              <Type />
              <div className="main-sub-title">
                " 나의 24시간 마음전문가 트로스트 "
              </div>
            </div>
            <div className="main-app-link">
              <button className="google-app"></button>
              <button className="appstore-app"></button>
            </div>
            <Countup/>
          </div>
        </section>
        )
    }
}
