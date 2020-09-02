import React, { Component } from "react";

import { Link } from "react-router-dom";

import PartnerCard from "Pages/Partner/PartnerCard";

import "./Partner.scss";

// 컴포넌트 수정전 코드

// class PartnerResult extends Component {

//   constructor() {

//     super();

//     this.state = {

//       ptConditionShow: false,

//       ptBtnOptionListShow: '고민 연관순',

//     };

//   }

//   ptConditionClassName = () => {

//     this.setState({ ptConditionShow: !this.state.ptConditionShow });

//   };

//   ptBtnClick = (name) => {

//     this.setState({ ptBtnOptionListShow: name });

//   };

//   render() {

//     return (

//       <header className='partner-list-header'>

//         <div className='partner-list-header-result'>

//           <span className='partner-list-header-num'>

//             검색 결과 <em className='partner-count'>56</em> 건

//           </span>

//         </div>

//         <div className='partner-list-search-condition'>

//           <button className='btn-partner-list-search-condition' type='button' onClick={this.ptConditionClassName}>

//             {this.state.ptBtnOptionListShow}

//           </button>

//           <ul className={this.state.ptConditionShow ? 'partner-list-option-list' : 'partner-list-option-list not-show'}>

//             <li

//               className='partner-list-option-list-element'

//               onClick={(event) => {

//                 this.ptConditionClassName();

//                 this.ptBtnClick('고민 연관순');

//               }}

//             >

//               고민 연관순

//             </li>

//             <li

//               className='partner-list-option-list-element'

//               onClick={(event) => {

//                 this.ptConditionClassName();

//                 this.ptBtnClick('상담 만족도순');

//               }}

//             >

//               상담 만족도순

//             </li>

//             <li

//               className='partner-list-option-list-element'

//               onClick={(event) => {

//                 this.ptConditionClassName();

//                 this.ptBtnClick('낮은 상담 가격순');

//               }}

//             >

//               낮은 상담 가격순

//             </li>

//             <li

//               className='partner-list-option-list-element'

//               onClick={(event) => {

//                 this.ptConditionClassName();

//                 this.ptBtnClick('높은 상담 가격순');

//               }}

//             >

//               높은 상담 가격순

//             </li>

//           </ul>

//         </div>

//       </header>

//     );

//   }

// }

export default class PartnerList extends Component {
  constructor() {
    super();

    this.state = {
      ptConditionShow: false,
      ptBtnOptionListShow: "고민 연관순",
    };
  }

  ptConditionClassName = () => {
    this.setState({ ptConditionShow: !this.state.ptConditionShow });
  };

  ptBtnClick = (name) => {
    this.setState({ ptBtnOptionListShow: name });
  };

  render() {
    return (
      <section className="partner-list">
        <header className="partner-list-header">
          <div className="partner-list-header-result">
            <span className="partner-list-header-num">
              검색 결과{" "}
              <em className="partner-count">{this.props.partnerData.length}</em>{" "}
              건
            </span>
          </div>

          <div className="partner-list-search-condition">
            <button
              className="btn-partner-list-search-condition"
              type="button"
              onClick={this.ptConditionClassName}
            >
              {this.state.ptBtnOptionListShow}
            </button>

            <ul
              className={
                this.state.ptConditionShow
                  ? "partner-list-option-list"
                  : "partner-list-option-list not-show"
              }
            >
              <li
                className="partner-list-option-list-element"
                onClick={(event) => {
                  this.ptConditionClassName();

                  this.ptBtnClick("고민 연관순");
                }}
              >
                고민 연관순
              </li>

              <li
                className="partner-list-option-list-element"
                onClick={(event) => {
                  this.ptConditionClassName();

                  this.ptBtnClick("상담 만족도순");
                }}
              >
                상담 만족도순
              </li>

              <li
                className="partner-list-option-list-element"
                onClick={(event) => {
                  this.ptConditionClassName();

                  this.ptBtnClick("낮은 상담 가격순");
                }}
              >
                낮은 상담 가격순
              </li>

              <li
                className="partner-list-option-list-element"
                onClick={(event) => {
                  this.ptConditionClassName();

                  this.ptBtnClick("높은 상담 가격순");
                }}
              >
                높은 상담 가격순
              </li>
            </ul>
          </div>
        </header>

        {/* 파트너 카드 map */}

        <div className="partner-list-content-wrap">
          {this.props.partnerData.map((data) => {
            return (
              <PartnerCard
                key={data.partner_id}
                id={data.partner_id}
                partnerImg={data.profile_image_url}
                name={data.name}
                level={data.level}
                headLine={data.introduction}
                point={data.stars}
                reviewNum={data.review_count}
                textPrice={Number(data.prices[0])}
                phonePrice={Number(data.prices[3])}
                meetPrice={Number(data.prices[6])}
              />
            );
          })}
        </div>

        {/* 일치하는 상담사가 0명일때 화면 */}

        <div
          className="partner-no-data"
          style={this.props.partnerData.length !== 0 ? { display: "none" } : {}}
        >
          <p>
            조건과 일치하는 상담사가 없습니다. <br />
            상세 조건을 변경하여 다시 검색해보세요.
          </p>
        </div>

        {/* 페이지 네이션 준비 */}
        <div className="partner-list-pages">
          <ul>
            <li></li>
          </ul>
        </div>
      </section>
    );
  }
}
