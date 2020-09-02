import React, { Component } from "react";
import "./PartnerProfile.scss";

export default class PartnerProfileReservation extends Component {
  render() {
    return (
      <section className="profile-content-reservation">
        <article className="reservation-text-phone">
          <div className="text-phone-title">텍스트테라피 / 전화상담</div>
          <div className="text-phone-sub-title">
            트로스트 앱을 통해 진행하는 비대면 심리상담입니다.
          </div>
          <div className="text-phone-flow">
            <div className="flow-title">텍스트테라피 / 전화상담 진행 과정</div>
            <div className="flow-content-wrap">
              <div className="flow-one">
                <img
                  className="img-num"
                  alt="1"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_one.png"
                />
                <img
                  className="img-process"
                  alt="텍스트테라피, 전화상담 결제 이미지"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_online_process_1.png"
                />
                <div className="text-process">
                  상담신청 후<br />
                  상담권결제
                </div>
              </div>
              <div className="flow-two">
                <img
                  className="img-num"
                  alt="2"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_two.png"
                />
                <img
                  className="img-process"
                  alt="텍스트테라피, 전화상담 프로세스 이미지"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_online_process_2.png"
                />
                <div className="text-process">
                  상담방에서
                  <br />
                  일정예약
                </div>
              </div>
              <div className="flow-three">
                <img
                  className="img-num"
                  alt="3"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_three.png"
                />
                <img
                  className="img-process"
                  alt="텍스트테라피, 전화상담 예약 이미지"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_online_process_3.png"
                />
                <div className="text-process">
                  예약일 상담방에서
                  <br />
                  상담시작
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="reservation-meet">
          <div className="meet-title">대면상담</div>
          <div className="meet-sub-title">
            상담센터에 방문하여 진행하는 대면 심리상담입니다.
          </div>
          {/* 사용여부 확인 */}
          {/* <div className="meet-map">
            <div className="map-title">대면상담 위치정보</div>
            <div className="flow-meet-location"></div>
            <div className="flow-meet-location-text">
              <p>
                구로구청소년상담복지센터
                <br />
                서울특별시 구로구 부일로13길 3
              </p>
            </div>
          </div> */}
          <div className="meet-flow">
            <div className="flow-title">대면상담 진행과정</div>
            <div className="flow-content-wrap">
              <div className="flow-one">
                <img
                  className="img-num"
                  alt="1"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_one.png"
                />
                <img
                  className="img-process"
                  alt="상담사 위치확인"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_offline_process_1.png"
                />
                <div className="text-process">
                  상담사
                  <br />
                  위치확인
                </div>
              </div>
              <div className="flow-two">
                <img
                  className="img-num"
                  alt="2"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_two.png"
                />
                <img
                  className="img-process"
                  alt="상담신청 후 상담권 결제"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_offline_process_2.png"
                />
                <div className="text-process">
                  상담신청 후<br />
                  상담권 결제
                </div>
              </div>
              <div className="flow-three">
                <img
                  className="img-num"
                  alt="3"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_three.png"
                />
                <img
                  className="img-process"
                  alt="상담방에서 일정예약"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_offline_process_3.png"
                />
                <div className="text-process">
                  상담방에서
                  <br />
                  일정예약
                </div>
              </div>
              <div className="flow-four">
                <img
                  className="img-num"
                  alt="4"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_four.png"
                />
                <img
                  className="img-process"
                  alt="텍스트테라피, 전화상담 예약 이미지"
                  src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_offline_process_4.png"
                />
                <div className="text-process">
                  예약일 센터
                  <br />
                  방문상담
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="reservation-notice">
          <div className="reservation-title">상담 예약 안내</div>
          <div className="reservation-notice-list">
            <ul className="reservation-list">
              <li className="list-el">
                상담 예약은 상담권 구매 후 상담방이 연결되면 상담사와 일정을
                협의하여 확정합니다.
              </li>
              <li className="list-el">
                다른 상담 진행 중인 경우 첫응대까지 시간이 소요될 수 있습니다.
              </li>
              <li className="list-el">
                원하는 일정이 맞지 않는 경우, 일대일 문의에 예약 희망 시간을
                남겨주세요. 원하는 시간에 최대한 상담받으실 수 있도록
                도움드립니다.
              </li>
              <li className="list-el">
                지금 빠르게 상담이 필요할 땐 바로상담을 이용해주세요.
              </li>
              <li className="list-el">
                상담사찾기 메뉴에서 바로상담 배너를 선택하면 지금 상담 가능한
                상담사님을 확인하실 수 있습니다.
              </li>
            </ul>
          </div>
        </article>
      </section>
    );
  }
}
