import React, { Component } from "react";
import "./PartnerProfile.scss";

export default class PartnerProfileCard extends Component {
  constructor() {
    super();

    this.state = {
      btnProfileWishChange: false,
    };
  }

  clickPtWishClassName = () => {
    this.setState({ btnProfileWishChange: !this.state.btnProfileWishChange });
  };

  changePointClassName = (num) => {
    let starNum =
      (this.props.ptProData.stars &&
        this.props.ptProData.stars.review__score__avg) - num;
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
    // console.log(
    //   this.props.ptProData.stars &&
    //     this.props.ptProData.stars.review__score__avg
    // );
    const { ptProData } = this.props;

    return (
      <div className="partner-profile-card-wrap">
        <article className="partner-profile-card">
          <button
            className={
              this.state.btnProfileWishChange
                ? "btn-partner-profile-wish add-wish"
                : "btn-partner-profile-wish"
            }
            onClick={this.clickPtWishClassName}
          >
            상담사 찜하기
          </button>
          <div className="partner-profile-wrap-info">
            <div className="partner-wrap-img">
              <img
                className="partner-img"
                alt="상담사 사진"
                src={ptProData.profile_image_url}
              />
            </div>
            <div className="partner-wrap-text">
              <div className="partner-text-info">
                <h3>{ptProData.partner_name}</h3>
                <h3
                  className={`partner-profile-position ${
                    ptProData.partner_level === "마스터 상담사"
                      ? "master"
                      : ptProData.partner_level === "전문 상담사"
                      ? "sub"
                      : "nomal"
                  }`}
                >
                  {ptProData.partner_level}
                </h3>
              </div>
              <div className="partner-reputation">
                <div className="partner-point-star">
                  <ol>
                    <li className={this.changePointClassName(1)}></li>
                    <li className={this.changePointClassName(2)}></li>
                    <li className={this.changePointClassName(3)}></li>
                    <li className={this.changePointClassName(4)}></li>
                    <li className={this.changePointClassName(5)}></li>
                  </ol>
                </div>
                <div className="partner-profile-point-num">
                  {ptProData.stars &&
                  ptProData.stars.review__score__avg === null
                    ? "0.0"
                    : ptProData.stars &&
                      ptProData.stars.review__score__avg.toFixed(1)}{" "}
                  ({ptProData.review_count})
                </div>
              </div>
              <div className="partner-session-text">
                <span>
                  트로스트 상담{" "}
                  <em>
                    {ptProData && ptProData.counsel_count.toLocaleString()}회기
                  </em>{" "}
                  진행
                </span>
              </div>
            </div>
          </div>
          <div className="partner-profile-wrap-counsel-type">
            <div className="partner-counsel-type">
              <img
                className="partner-counsel-type-img"
                alt="문자상담 사진"
                src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_tt.png"
              />
              <div className="partner-counsel-type-text">텍스트테라피</div>
            </div>
            <div className="partner-counsel-type">
              <img
                className="partner-counsel-type-img"
                alt="전화상담 사진"
                src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_vt.png"
              />
              <div className="partner-counsel-type-text">전화상담</div>
            </div>
            <div className="partner-counsel-type">
              <img
                className="partner-counsel-type-img"
                alt="대면상담 사진"
                src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_ot.png"
              />
              <div className="partner-counsel-type-text last">대면상담</div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
