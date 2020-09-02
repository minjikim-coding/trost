import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Partner.scss";

export default class PartnerCard extends Component {
  constructor() {
    super();
    this.state = {
      isWishBtnActive: false,
    };
  }

  // 3명한테만 추천 표시 수정중
  // ptRecomendAdd = () => {
  //   return this.props.level === "마스터 상담사" ? "partner-list-box marter-recommend " : "partner-list-box";
  // };

  handlePtWish = () => {
    this.setState({ isWishBtnActive: !this.state.isWishBtnActive });
  };

  ptPointClassName = (num) => {
    let starNum = this.props.point - num;
    if (starNum >= 0) {
      return "star-point full";
    } else if (-1 < starNum && starNum < -0.5) {
      return "star-point";
    } else if (-0.5 <= starNum && starNum < 0) {
      return "star-point half";
    } else if (starNum <= -1) {
      return "star-point";
    }
  };

  render() {
    return (
      <article className="partner-list-box">
        <button
          className={
            this.state.isWishBtnActive
              ? "btn-partner-wish add-wish"
              : "btn-partner-wish"
          }
          onClick={this.handlePtWish}
        >
          상담사 찜하기
        </button>
        {/* URL parameter 구현 필요 */}
        <Link
          to={`/partner/profile/${this.props.id}`}
          style={{ textDecoration: "none", color: "var(--black)" }}
        >
          <div className="partner-info">
            <div className="partner-info-wrap-img">
              <img
                className="partner-info-img"
                alt="상담사 사진"
                src={this.props.partnerImg}
              />
            </div>
            <div className="partner-info-wrap-text">
              <div className="partner-info-text">
                <span className="partner-info-name">{this.props.name}</span>
                <span
                  className={`partner-info-position ${
                    this.props.level === "마스터 상담사"
                      ? "master"
                      : this.props.level === "전문 상담사"
                      ? "sub"
                      : "nomal"
                  }`}
                >
                  {this.props.level}
                </span>
                <span
                  className="partner-info-new"
                  style={this.props.point === null ? {} : { display: "none" }}
                >
                  NEW
                </span>
              </div>
              <div className="partner-info-headline">{this.props.headLine}</div>
              <div className="partner-info-point-count">
                <div className="partner-info-point">
                  <ol>
                    <li className={this.ptPointClassName(1)}></li>
                    <li className={this.ptPointClassName(2)}></li>
                    <li className={this.ptPointClassName(3)}></li>
                    <li className={this.ptPointClassName(4)}></li>
                    <li className={this.ptPointClassName(5)}></li>
                  </ol>
                </div>
                <div className="partner-info-count">
                  ({this.props.reviewNum})
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="partner-price">
          <div className="partner-price-text">
            <img
              className="partner-price-img"
              alt="문자상담 사진"
              src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_tt.png"
            />
            <div className="partner-price-won">
              {this.props.textPrice.toLocaleString()}원
            </div>
          </div>
          <div className="partner-price-call">
            <img
              className="partner-price-img"
              alt="전화상담 사진"
              src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_vt.png"
            />
            <div className="partner-price-won">
              {this.props.phonePrice.toLocaleString()}원
            </div>
          </div>
          <div className="partner-price-meet">
            <img
              className="partner-price-img"
              alt="대면상담 사진"
              src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_ot.png"
            />
            <div className="partner-price-won">
              {this.props.meetPrice.toLocaleString()}원
            </div>
          </div>
        </div>
      </article>
    );
  }
}
