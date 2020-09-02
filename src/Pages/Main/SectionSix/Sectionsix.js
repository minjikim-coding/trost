import React, { Component } from 'react';
import TechnicalList from "./TechnicalList/TechnicalList";


class Sectionsix extends Component {
    render() {
        return (
        <section className="section-six">
          <div className="content-box-six">
            <h2 className="content-title">기술 연구</h2>
            <p className="technical-research">
              트로스트는 전산심리치료(Computational Psychotherapy) 분야를
              선도하며, <br />
              효과적인 심리치료를 위한 자연어처리 기술과 기계학습 모델을
              연구합니다.
            </p>
            <TechnicalList/>
            <div className="content-six-footer">
              <h3>투자사</h3>
              <div className="content-six-footer-img">
                {Array(2).fill().map((_,i) => {
                  return <div className={`content-six-footer-img-${i+1}`}></div>
                })}
              </div>
            </div>
          </div>
        </section>
        )
    }
}
export default React.memo(Sectionsix);