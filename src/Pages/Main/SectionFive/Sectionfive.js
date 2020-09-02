import React, { Component } from 'react';
import Review from "./Review";


export default class Sectionfive extends Component {
    render() {
    let slideCalc = this.props.slidePage * (-100/19); //슬라이드 transform 계산
        return (
        <section className="section-five">
          <div className="content-box-five">
            <h2 className="content-title">심리상담 후기</h2>
            <div className="review-list-box">
              <ul className="review-list"  style={{transform: `translateX(${slideCalc}%)`}}>
                {this.props.reviewData.length > 0 && this.props.reviewData.map((_,i) => { {/* reviewData가 불러와지기 전에 사용을하면 에러가 나오기때문에 Data가 생기면 작동하도록 작성 */}
                  return (<Review key={i} program={this.props.reviewData[i]["program"]} hashtag={this.props.reviewData[i]["hashtag"]} article={this.props.reviewData[i]["article"]} id={this.props.reviewData[i]["id"]}/>)
                })}
              </ul>
            </div>
            <div className="slide-dots">
              {Array(19).fill().map((_,i) => {
                return(<span className={i === +this.props.slidePage && "is-active"} aria-label={i} onClick={this.props.clickdot}/>)}
              )} 
            </div>
            <div className="slide-left" style={+this.props.slidePage === 0 ? {opacity : "0.5"} : {}} onClick={this.props.slickLeft}></div>
            <div className="slide-right" style={+this.props.slidePage === 18 ? {opacity : "0.5"} : {}} onClick={this.props.slickRight}></div>
          </div>
        </section>
        )
    }
} 
{/* 이 section에서 this.props.slidepage가 string형태로 나오는 이유는 뭘까? */}
