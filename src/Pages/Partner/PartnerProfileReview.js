import React, { Component } from "react";
import PartnerProfileReviewData from "./PartnerProfileReviewData";
import "./PartnerProfile.scss";

export default class PartnerProfileReview extends Component {
  changePointClassName = (num) => {
    let starNum =
      (this.props.ptProInfoData.stars &&
        this.props.ptProInfoData.stars.review__score__avg) - num;
    if (starNum >= 0) {
      return "star-point full";
    } else if (-1 < starNum && starNum < -0.5) {
      return "star-point";
    } else if (-0.5 <= starNum && starNum < 0) {
      return "star-point half";
    } else if (this.props.point - num <= -1) {
      return "star-point";
    } else {
      return "star-point";
    }
  };

  render() {
    // console.log(this.props.ptProReviewData.reviews);
    const { ptProInfoData, ptProReviewData } = this.props;

    return (
      <section className="profile-content-review">
        <h3>상담 후기</h3>
        <article className="review-star-graph">
          <div className="review-star">
            <div className="review-star-head">
              <h4>상담 만족도 평균</h4>
              <span>
                {ptProInfoData.stars &&
                ptProInfoData.stars.review__score__avg === null
                  ? "0.0"
                  : ptProInfoData.stars &&
                    ptProInfoData.stars.review__score__avg.toFixed(1)}
              </span>
            </div>
            <div className="review-star-list">
              <ol>
                <li className={this.changePointClassName(1)}></li>
                <li className={this.changePointClassName(2)}></li>
                <li className={this.changePointClassName(3)}></li>
                <li className={this.changePointClassName(4)}></li>
                <li className={this.changePointClassName(5)}></li>
              </ol>
            </div>
          </div>
          {/* 사용 여부 확인 */}
          {/* <div className="review-graph">
            <div className="review-graph-head">
              <h4>상담 만족도 비율</h4>
            </div>
            <div className="review-graph-list">
              <div className="review-graph-el">
                <div className="review-graph-height"></div>
                <div className="review-graph-num">1</div>
              </div>
              <div className="review-graph-el">
                <div className="review-graph-height"></div>
                <div className="review-graph-num">2</div>
              </div>
              <div className="review-graph-el">
                <div className="review-graph-height"></div>
                <div className="review-graph-num">3</div>
              </div>
              <div className="review-graph-el">
                <div className="review-graph-height one-fourth"></div>
                <div className="review-graph-num">4</div>
              </div>
              <div className="review-graph-el">
                <div className="review-graph-height full"></div>
                <div className="review-graph-num">5</div>
              </div>
            </div>
          </div> */}
        </article>
        <article className="review-input"></article>
        <article className="review-data">
          <ul className="review-list">
            {/* 리뷰데이터 컴포넌트, map 구현 */}
            {ptProReviewData.map((data, idx) => {
              return (
                <PartnerProfileReviewData
                  key={idx}
                  review_created={data.review_created}
                  review_score={data.review_score}
                  review_comment={data.review_comment}
                />
              );
            })}
          </ul>
          <button></button>
        </article>
      </section>
    );
  }
}
