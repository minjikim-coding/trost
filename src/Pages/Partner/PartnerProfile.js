import React, { Component } from "react";
import PartnerNav from "./PartnerNav";
import PartnerProfileCard from "./PartnerProfileCard";
import PartnerProfileInfo from "./PartnerProfileInfo";
import PartnerProfileReservation from "./PartnerProfileReservation";
import PartnerProfileReview from "./PartnerProfileReview";
import PartnerProfileAside from "./PartnerProfileAside";
import "./PartnerProfile.scss";

// props 로 데이터 전달을 위한 수정
// const ptContentTab = {
//   tabInfo: <PartnerProfileInfo />,
//   tabReservation: <PartnerProfileReservation />,
//   tabReview: <PartnerProfileReview />,
// };

export default class PartnerProfile extends Component {
  constructor() {
    super();

    this.state = {
      showTab: "tabInfo",
      partnerProfileData: [],
    };
  }

  componentDidMount() {
    fetch(`http://3.34.141.93:8000/partner/${this.props.match.params.id}`)
      .then((res) => res.json())
      // 확인용
      // .then((res) => console.log(res));
      .then((res) => {
        this.setState({ partnerProfileData: res.information });
      });
    //http://localhost:3000/data/partnerProfileData.json
    //http://10.58.7.28:8000/partner/10
  }

  clickShowTab = (tabName) => {
    this.setState({ showTab: tabName });
  };

  // props 로 데이터 전달 위해 수정
  // activeTabShow = (activeTab) => {
  //   switch (activeTab) {
  //     case "tabInfo":
  //       return <PartnerProfileInfo />;
  //     case "tabReservation":
  //       return <PartnerProfileReservation />;
  //     case "tabReview":
  //       return <PartnerProfileReview />;
  //     default:
  //       break;
  //   }
  // };

  activeTabShow = (activeTab) => {
    switch (activeTab) {
      case "tabInfo":
        return (
          <PartnerProfileInfo
            ptProInfoData={
              this.state.partnerProfileData.length > 0 &&
              this.state.partnerProfileData[0]
            }
            ptProConData={
              this.state.partnerProfileData.length > 0 &&
              this.state.partnerProfileData[1].patner_content
            }
          />
        );
      case "tabReservation":
        return <PartnerProfileReservation />;
      case "tabReview":
        return (
          <PartnerProfileReview
            ptProInfoData={
              this.state.partnerProfileData.length > 0 &&
              this.state.partnerProfileData[0]
            }
            ptProReviewData={
              this.state.partnerProfileData.length > 0 &&
              this.state.partnerProfileData[2].reviews
            }
          />
        );
      default:
        break;
    }
  };

  render() {
    // render 안 or 밖?
    // const activeTabShow = (activeTab) => {
    //   switch (activeTab) {
    //     case "tabInfo":
    //       return (
    //         <PartnerProfileInfo
    //           ptProInfoData={
    //             this.state.partnerProfileData.length > 0 &&
    //             this.state.partnerProfileData[0]
    //           }
    //           ptProConData={
    //             this.state.partnerProfileData.length > 0 &&
    //             this.state.partnerProfileData[1]
    //           }
    //         />
    //       );
    //     case "tabReservation":
    //       return <PartnerProfileReservation />;
    //     case "tabReview":
    //       return (
    //         <PartnerProfileReview
    //           ptProInfoData={
    //             this.state.partnerProfileData.length > 0 &&
    //             this.state.partnerProfileData[0]
    //           }
    //           ptProConData={
    //             this.state.partnerProfileData.length > 0 &&
    //             this.state.partnerProfileData[1]
    //           }
    //         />
    //       );
    //     default:
    //       break;
    //   }
    // };

    return (
      <div className="PartnerProfile">
        <nav className="partner-profile-nav">
          <ul>
            <PartnerNav pageLink={"/"} pageName={"홈"} />
            <PartnerNav pageLink={"/partner"} pageName={"상담사 찾기"} />
            <PartnerNav
              pageLink={`/partner/profile/${this.props.match.params.id}`}
              pageName={"상담사 프로필"}
            />
          </ul>
        </nav>
        <main className="partner-profile-main">
          <section className="partner-profile-section">
            {/* 파트너 카드 */}
            <PartnerProfileCard
              ptProData={
                this.state.partnerProfileData.length > 0 &&
                this.state.partnerProfileData[0]
              }
            />
            {/* 메인 content 구현 */}
            <div className="partner-profile-contents">
              <header className="profile-contents-wrap-list">
                <ul className="content-list">
                  <li
                    className={
                      this.state.showTab === "tabInfo"
                        ? "content-el is-click"
                        : "content-el"
                    }
                    onClick={() => this.clickShowTab("tabInfo")}
                  >
                    상담사 정보
                  </li>
                  <li
                    className={
                      this.state.showTab === "tabReservation"
                        ? "content-el is-click"
                        : "content-el"
                    }
                    onClick={() => this.clickShowTab("tabReservation")}
                  >
                    예약 방법
                  </li>
                  <li
                    className={
                      this.state.showTab === "tabReview"
                        ? "content-el is-click"
                        : "content-el"
                    }
                    onClick={() => this.clickShowTab("tabReview")}
                  >
                    상담 후기
                  </li>
                </ul>
              </header>
              {/* {ptContentTab[this.state.showTab]} */}
              {this.activeTabShow(this.state.showTab)}
              {/* [switch (this.state.showTab) {}] */}
            </div>
          </section>
          {/* 사이드바 구현 */}
          <PartnerProfileAside
            ptProData={
              this.state.partnerProfileData.length > 0 &&
              this.state.partnerProfileData[0]
            }
          />
        </main>
      </div>
    );
  }
}
