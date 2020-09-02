import React, { Component } from "react";
import "./PartnerProfile.scss";

const excellentNum = Math.floor(Math.random() * 5);
const monthNum = Math.floor(Math.random() * 2);

export default class PartnerProfileInfo extends Component {
  render() {
    const { ptProInfoData, ptProConData } = this.props;
    const ptQualiArr = ptProConData && ptProConData.history_body.split("\n");
    // console.log(ptQualiArr);
    return (
      <section className="profile-content-info">
        <article className="info-youtube"></article>
        <article className="info-excellent-act">
          <h3 className="excellent-act-headline">트로스트 우수 활동 내역</h3>
          <div className="excellent-act-list">
            <div className="trost-partner">
              <div
                className={
                  ptProInfoData.is_cousel_count_gt_150
                    ? "trost-img"
                    : "trost-img is-not"
                }
              >
                트로스트 150회기 이미지
              </div>
              <div className="trost-text">
                트로스트 상담
                <br />
                150회기 이상
              </div>
            </div>
            <div className="excellent-partenr">
              <div
                className={
                  excellentNum > 0 ? "excellent-img is-show" : "excellent-img"
                }
              >
                우수 후기 이미지
              </div>
              <div className="excellent-text">
                우수 후기 상담사
                <br />
                {excellentNum}회
              </div>
            </div>
            <div className="month-partner">
              <div className={monthNum > 0 ? "month-img is-show" : "month-img"}>
                이달의 이미지
              </div>
              <div className="month-text">
                이달의 상담사
                <br />
                {monthNum}회
              </div>
            </div>
          </div>
        </article>
        <article className="info-counsel-header">
          <h3>{ptProConData.intro_head}</h3>
          <p>{ptProConData.intro_body}</p>
        </article>
        <article className="info-counsel-history">
          <h3>주요 자격 및 경력</h3>
          <div className="info-counsel-list">
            <ul className="partner-qualification">
              {ptProConData &&
                ptQualiArr.map((data, idx) => (
                  <li
                    className={
                      data.includes("상담심리사 1급")
                        ? "list-el medal"
                        : "list-el"
                    }
                    key={idx}
                  >
                    {data}
                  </li>
                ))}
            </ul>
          </div>
        </article>
        <article className="info-counsel-story">
          <h3>상담사 이야기</h3>
          <div className="q-and-a">
            <h4>{ptProConData.story_q}</h4>
            <p>{ptProConData.story_body}</p>
          </div>
        </article>
      </section>
    );
  }
}
