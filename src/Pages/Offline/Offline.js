import React, { Component } from "react";
import Map from "./Map";
import { Link } from "react-router-dom";

export default class Offline extends Component {
  constructor() {
    super();

    this.state = {
      partnerList: "",
      locationList: "",
      showDetail: "",
      detailIndex: "",
      paginationIndex: 1,
    };
  }

  componentDidMount() {
    console.log("오프컴디마");
    fetch("http://3.34.141.93:8000/partner")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          partnerList: res["information"],
        });
      });
    fetch("http://3.34.141.93:8000/offline")
      // fetch("http://localhost:3000/data/location1.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          locationList: res["location"],
        });
      });
  }

  componentDidUpdate(prevProps) {
    console.log("오프컴디업");
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(
        `http://3.34.141.93:8000/offline?page=${+this.props.match.params.id}`
      )
        //   fetch(
        //     `http://localhost:3000/data/location${+this.props.match.params.id}.json`
        //   )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          this.setState({
            locationList: res["location"],
            paginationIndex: +this.props.match.params.id,
          });
        });
    }
  }

  ptPointClassName = (num, PartnerstarNum) => {
    let starNum = PartnerstarNum - num;
    if (starNum >= 0) {
      return "star-point full";
    } else if (-1 < starNum && starNum < -0.5) {
      return "star-point";
    } else if (-0.5 <= starNum && starNum < 0) {
      return "star-point half";
    } else if (this.props.point - num <= -1) {
      return "star-point";
    }
  };

  randomNum = () => {
    return Math.floor(Math.random() * (this.state.partnerList.length - 1));
  };

  clickHandler = (i) => {
    if (i === "close") {
      this.setState({
        showDetail: "",
      });
    } else if (
      this.state.showDetail === " is-show" &&
      this.state.detailIndex === i.toString()
    ) {
      this.setState({
        showDetail: "",
      });
    } else {
      this.setState({
        detailIndex: i.toString(), //숫자로 받게되면 &&연산자에서 0일때 false가 나와서 string형태로 바꿔줌
        showDetail: " is-show",
      });
    }
  };
  profileCheck = (e) => {
    if (!this.state.detailIndex) {
      return;
    }
    console.log(this.state.locationList[this.state.detailIndex]);
    if (this.state.locationList[this.state.detailIndex]["trostPartners"][0]) {
      if (e === "name") {
        return this.state.locationList[this.state.detailIndex][
          "trostPartners"
        ][0]["name"];
      } else {
        return this.state.locationList[this.state.detailIndex][
          "trostPartners"
        ][0]["level"];
      }
    } else {
      return null;
    }
  };
  existCheck = (e) => {
    if (!this.state.detailIndex) {
      return;
    }
    if (e === "link" && !this.state.locationList[this.state.detailIndex][e]) {
      return { display: "none" };
    }
    if (
      e === "counselingTypes" &&
      this.state.locationList[this.state.detailIndex][e].length < 1
    ) {
      return { display: "none" };
    } else {
      return;
    }
  };
  profileImgCheck = () => {
    if (!this.state.detailIndex) {
      return;
    }
    if (!this.state.locationList[this.state.detailIndex]["trostPartners"][0]) {
      return;
    } else {
      return {
        backgroundImage: `url(${
          this.state.locationList[this.state.detailIndex]["trostPartners"][0][
            "pic"
          ]
        })`,
      };
    }
  };

  render() {
    let PartnerShowRandomNum = Math.floor(Math.random() * 2) + 1;
    let BannerShowRandomNum = Math.floor(Math.random() * 4) + 1;

    let validationIndex = () => {
      let imgIndexArr = [];
      let alphabetArr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
      ];
      for (let i in this.state.locationList) {
        if (this.state.locationList[i]["isTrostPartnerCenter"] === true) {
          imgIndexArr.push("trost");
        }
      }
      console.log(imgIndexArr);
      if (imgIndexArr.length > 0) {
        let alphabetRemovedArr = alphabetArr.splice(
          imgIndexArr.length,
          alphabetArr.length - 1
        );

        let resultArr = imgIndexArr.concat(alphabetRemovedArr);
        return resultArr;
      } else {
        return alphabetArr;
      }
    };

    let priceLocaleString = (randomNumber) => {
      return +this.state.partnerList[randomNumber]["prices"][0];
    };
    return (
      <div className="offline-container">
        <aside className="offline-aside">
          <div className="aside-title">상담센터 리스트 100</div>
          <div className="center-list-box" id="scrollTop">
            <div className="center-recommend-list">
              {this.state.partnerList &&
                Array(PartnerShowRandomNum)
                  .fill()
                  .map(() => {
                    var randomNumber = this.randomNum();
                    return (
                      <div className="center-recommend-item">
                        <div
                          className="center-recommend-img"
                          style={{
                            backgroundImage: `url(${this.state.partnerList[randomNumber]["profile_image_url"]})`,
                          }}
                        ></div>
                        <div className="center-recommend-text">
                          <div className="center-recommend-name">
                            {this.state.partnerList[randomNumber]["name"]}
                            <span
                              style={
                                this.state.partnerList[randomNumber][
                                  "level"
                                ][0] === "마"
                                  ? { color: "#ef8b24" }
                                  : this.state.partnerList[randomNumber][
                                      "level"
                                    ][0] === "전"
                                  ? { color: "#f5ba08" }
                                  : { color: "#91897F" }
                              }
                            >
                              {" "}
                              {this.state.partnerList &&
                                this.state.partnerList[randomNumber]["level"]}
                            </span>
                          </div>
                          <div className="center-recommend-type">
                            온라인상담<span>|</span>
                            <div className="center-recommend-star">
                              <ul>
                                <li
                                  className={this.ptPointClassName(
                                    1,
                                    this.state.partnerList[randomNumber][
                                      "stars"
                                    ]
                                  )}
                                ></li>
                                <li
                                  className={this.ptPointClassName(
                                    2,
                                    this.state.partnerList[randomNumber][
                                      "stars"
                                    ]
                                  )}
                                ></li>
                                <li
                                  className={this.ptPointClassName(
                                    3,
                                    this.state.partnerList[randomNumber][
                                      "stars"
                                    ]
                                  )}
                                ></li>
                                <li
                                  className={this.ptPointClassName(
                                    4,
                                    this.state.partnerList[randomNumber][
                                      "stars"
                                    ]
                                  )}
                                ></li>
                                <li
                                  className={this.ptPointClassName(
                                    5,
                                    this.state.partnerList[randomNumber][
                                      "stars"
                                    ]
                                  )}
                                ></li>
                              </ul>
                              <span className="review-num">
                                {
                                  this.state.partnerList[randomNumber][
                                    "review_count"
                                  ]
                                }
                              </span>
                            </div>
                          </div>
                          <div className="center-recommend-intro">
                            {
                              this.state.partnerList[randomNumber][
                                "introduction"
                              ]
                            }
                          </div>
                          <div className="center-recommend-price">
                            <div className="center-recommend-normal-price">
                              {`${
                                this.state.partnerList[randomNumber] &&
                                priceLocaleString(randomNumber).toLocaleString()
                              } ~`}
                            </div>
                            <div className="center-recommend-reduced-price">
                              {`${
                                this.state.partnerList[randomNumber] &&
                                (
                                  (priceLocaleString(randomNumber) * 9) /
                                  10
                                ).toLocaleString()
                              } ~`}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
            <ul className="center-list">
              {this.state.locationList &&
                this.state.locationList.map((_, i) => {
                  return (
                    <li
                      className="center-item"
                      onClick={() => {
                        this.clickHandler(i);
                        document
                          .getElementById("scrollTop")
                          .scroll(0, PartnerShowRandomNum + i * 119);
                      }}
                    >
                      {console.log(validationIndex())}
                      <div
                        className="center-item-img"
                        style={{
                          backgroundImage: `url(https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/${
                            validationIndex()[i]
                          }_unselected.png)`,
                        }}
                      ></div>
                      <div className="center-item-text">
                        <div className="center-item-name">
                          {this.state.locationList[i]["title"]}
                        </div>
                        <div className="center-item-type">
                          {this.state.locationList[i]["type"]}
                        </div>
                        <div className="center-item-distance">
                          {this.state.locationList[i]["roadAddress"]}
                        </div>
                        <div className="center-item-number">
                          {this.state.locationList[i]["telephone"]}
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <div className="center-pagination">
              <ul className="pagination-btn-list">
                <li
                  className="pagination-left-btn"
                  onClick={() => {
                    this.setState({
                      paginationIndex: this.state.paginationIndex - 1,
                    });

                    this.props.history.push(
                      `/offline/${this.state.paginationIndex - 1}`
                    );
                    document.getElementById("scrollTop").scroll(0, 0);
                  }}
                ></li>
                <li
                  onClick={() => {
                    this.setState({
                      paginationIndex: 1,
                    });
                    this.props.history.push("/offline/1");
                  }}
                  className="pagination btn-1"
                >
                  <span
                    style={
                      this.state.paginationIndex === 1
                        ? { color: "#f57c00" }
                        : { color: "#333333" }
                    }
                  >
                    1
                  </span>
                </li>
                <li
                  onClick={() => {
                    this.setState({
                      paginationIndex: 2,
                    });
                    this.props.history.push("/offline/2");
                    document.getElementById("scrollTop").scroll(0, 0);
                  }}
                  className="pagination btn-2"
                >
                  <span
                    style={
                      this.state.paginationIndex === 2
                        ? { color: "#f57c00" }
                        : { color: "#333333" }
                    }
                  >
                    2
                  </span>
                </li>
                <li
                  onClick={() => {
                    this.setState({
                      paginationIndex: 3,
                    });
                    this.props.history.push("/offline/3");
                    document.getElementById("scrollTop").scroll(0, 0);
                  }}
                  className="pagination btn-3"
                >
                  <span
                    style={
                      this.state.paginationIndex === 3
                        ? { color: "#f57c00" }
                        : { color: "#333333" }
                    }
                  >
                    3
                  </span>
                </li>
                <li
                  onClick={() => {
                    this.setState({
                      paginationIndex: 4,
                    });
                    this.props.history.push("/offline/4");
                    document.getElementById("scrollTop").scroll(0, 0);
                  }}
                  className="pagination btn-4"
                >
                  <span
                    style={
                      this.state.paginationIndex === 4
                        ? { color: "#f57c00" }
                        : { color: "#333333" }
                    }
                  >
                    4
                  </span>
                </li>
                <li
                  onClick={() => {
                    this.setState({
                      paginationIndex: 5,
                    });
                    this.props.history.push("/offline/5");
                    document.getElementById("scrollTop").scroll(0, 0);
                  }}
                  className="pagination btn-5"
                >
                  <span
                    style={
                      this.state.paginationIndex === 5
                        ? { color: "#f57c00" }
                        : { color: "#333333" }
                    }
                  >
                    5
                  </span>
                </li>
                <li
                  onClick={() => {
                    this.setState({
                      paginationIndex: this.state.paginationIndex + 1,
                    });

                    this.props.history.push(
                      `/offline/${this.state.paginationIndex + 1}`
                    );
                    document.getElementById("scrollTop").scroll(0, 0);
                  }}
                  className="pagination-right-btn"
                ></li>
              </ul>
            </div>
          </div>
        </aside>
        <div className={`center-detail-box${this.state.showDetail}`}>
          <div
            className="center-detail-close"
            onClick={() => this.clickHandler("close")}
          >
            <div className="close-img" />
          </div>
          <div className="center-detail-item">
            <div className="detail-title">
              <div className="detail-title-name">
                {this.state.detailIndex &&
                  this.state.locationList[this.state.detailIndex]["title"]}
              </div>
              <div className="detail-title-type">
                {this.state.detailIndex &&
                  this.state.locationList[this.state.detailIndex]["type"]}
              </div>
              <div className="find-road">
                <div>길찾기</div>
              </div>
            </div>
            <div className="border-line"></div>
            <div className="center-detail-data">
              <div
                className="center-address"
                style={
                  this.state.detailIndex &&
                  this.state.locationList[this.state.detailIndex]["roadAddress"]
                    ? {}
                    : { display: "none" }
                }
              >
                <div className="center-address-icon" />
                <div className="center-new-address">
                  {this.state.detailIndex &&
                    this.state.locationList[this.state.detailIndex][
                      "roadAddress"
                    ]}
                </div>
                <div className="center-old-address">{`지번) ${
                  this.state.detailIndex &&
                  this.state.locationList[this.state.detailIndex]["address"]
                }`}</div>
              </div>
              <div className="center-number">
                <div className="center-number-icon" />
                <div className="center-number-text">
                  {this.state.detailIndex &&
                    this.state.locationList[this.state.detailIndex][
                      "telephone"
                    ]}
                </div>
              </div>
              <div className="center-url" style={this.existCheck("link")}>
                <div className="center-url-icon" />
                <div className="center-url-text">
                  <a href="https://theraphy.com">
                    {this.state.detailIndex &&
                      this.state.locationList[this.state.detailIndex]["link"]}
                  </a>
                </div>
              </div>

              <div
                className="center-profile"
                style={
                  this.profileCheck("name") !== null
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <div className="center-profile-icon" />
                <div className="center-profile-item">
                  <div
                    className="center-profile-img"
                    style={this.profileImgCheck()}
                  />

                  <div className="center-profile-name">
                    {this.profileCheck("name")}
                  </div>
                  {/* {console.log(this.profileCheck(2)[0])} */}
                  <div
                    className="center-profile-level"
                    style={
                      this.profileCheck(2) === "마스터"
                        ? { color: "#ef8b24" }
                        : this.profileCheck(2) === "전문"
                        ? { color: "#f5ba08" }
                        : { color: "#91897F" }
                    }
                  >
                    {" "}
                    {`${this.profileCheck(2)} 상담사`}
                  </div>
                </div>
              </div>
              <div
                className="detail-banner"
                style={{
                  backgroundImage: `url("https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/mobile_offline_banner_0${BannerShowRandomNum}.png?update=20191114")`,
                }}
              />
              <div className="theraphy-info">
                <div
                  className="theraphy-info-title"
                  style={this.existCheck("counselingTypes")}
                >
                  상담 관련정보
                </div>
                <div
                  className="theraphy-info-sub-title"
                  style={this.existCheck("counselingTypes")}
                >
                  상담
                </div>
                <div className="theraphy-info-text">
                  {this.state.detailIndex &&
                    this.state.locationList[this.state.detailIndex][
                      "counselingTypes"
                    ].map((Type) => {
                      return Type + ", ";
                    })}
                </div>
                <div className="theraphy-info-notice">
                  * 모든 정보는 변경이 있을 수 있습니다. 반드시 전화 확인 후
                  방문해주세요.
                </div>
                <div className="info-change-request">정보 수정 요청 ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-offline-field">
          <div className="search-offline-input-area">
            <div className="search-offline-input-img" />
            <input
              className="search-offline-input"
              placeholder="지역, 지하철역 검색"
            />
          </div>
          <div className="search-offline-keyword">
            <div className="search-offline-keyword-top">
              <div className="search-offline-keyword-top-left">
                <div className="filter-img" />
                <span>키워드로 찾기</span>
              </div>
              <div className="search-offline-keyword-refresh" />
            </div>
            <div className="search-keyword-list">
              <div className="search-keyword-age">연령</div>
              <div className="search-keyword-type">치료방식</div>
              <div className="search-keyword-keyword">고민키워드</div>
            </div>
          </div>
        </div>
        {this.state.locationList.length > 0 && (
          <Map
            location={this.state.locationList}
            clickIndex={this.state.detailIndex}
            markerClick={this.clickHandler}
            PartnerShowRandomNum={PartnerShowRandomNum}
          />
        )}
      </div>
    );
  }
}
