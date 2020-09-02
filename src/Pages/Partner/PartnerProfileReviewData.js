import React, { Component } from "react";
import "./PartnerProfile.scss";

// 랜덤데이터
const keyword = [
  "#우울",
  "#불안",
  "#분노",
  "#강박",
  "#무기력",
  "#자살",
  "#자존감상실",
  "#자해",
  "#스트레스",
  "#트라우마",
  "#공황",
  "#콤플렉스",
  "#상실",
  "#대인관계",
  "#친구",
  "#부부",
  "#연인",
  "#가족",
  "#직장",
  "#진로",
  "#취업",
  "#육아",
  "#해외생활",
  "#중독",
  "#섭식장애",
  "#성생활",
  "#성소수자",
  "#환청",
  "#기타",
];

const program = [
  "텍스트테라피 50분 상담권 상담후기",
  "텍스트테라피 50분 2회 상담권 상담후기",
  "텍스트테라피 50분 4회 상담권 상담후기",
  "전화상담 30분 상담권 상담후기",
  "전화상담 60분 상담권 상담후기",
  "전화상담 60분 상담권 2회 상담후기",
  "대면상담 30분 상담권 상담후기",
  "대면상담 50분 상담권 상담후기",
  "대면상담 50분 상담권 2회 상담후기",
];

export default class PartnerProfileReviewData extends Component {
  changePointClassName = (num) => {
    let starNum = this.props.review_score - num;
    if (starNum >= 0) {
      return "star-point full";
    } else if (-1 < starNum && starNum < -0.5) {
      return "star-point";
    } else if (-0.5 <= starNum && starNum < 0) {
      return "star-point half";
    } else if (starNum - num <= -1) {
      return "star-point";
    }
  };

  render() {
    const { review_created, review_score, review_comment } = this.props;
    // console.log(review_created);
    return (
      <li className="review-content-wrap">
        <div className="review-content-top">
          <div className="review-star-point">
            <ol>
              <li className={this.changePointClassName(1)}></li>
              <li className={this.changePointClassName(2)}></li>
              <li className={this.changePointClassName(3)}></li>
              <li className={this.changePointClassName(4)}></li>
              <li className={this.changePointClassName(5)}></li>
            </ol>
          </div>
          <div className="review-info">
            <span>{Math.floor(Math.random() * 8999) + 1000}....</span> 님 /{" "}
            <span>{review_created.split("").splice(0, 10).join("")}</span>
          </div>
        </div>
        <div className="review-content-main">
          <div className="review-text">{review_comment}</div>
          <div className="review-cate">
            <h5>{program[Math.floor(Math.random() * program.length)]}</h5>
            <ul>
              <li>{keyword[Math.floor(Math.random() * 6) + 0]}</li>
              <li>{keyword[Math.floor(Math.random() * 6) + 6]}</li>
              <li>{keyword[Math.floor(Math.random() * 6) + 12]}</li>
              <li>{keyword[Math.floor(Math.random() * 6) + 18]}</li>
              <li>{keyword[Math.floor(Math.random() * 5) + 24]}</li>
            </ul>
          </div>
        </div>
      </li>
    );
  }
}
