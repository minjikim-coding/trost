import React, { Component } from "react";
import "./Offline.scss";
class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      clickIndex: "",
      positions: [],
      marker: {},
    };
  }

  componentDidMount() {
    alert("설정에서 위치정보 허용 후 사용할 수 있습니다");
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=76a449f1dae5315175afe4994035d80d&libraries=LIBRARY";
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=76a449f1dae5315175afe4994035d80d&libraries=services";
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=76a449f1dae5315175afe4994035d80d&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        var mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new kakao.maps.LatLng(37.504481, 127.049007), // 지도의 중심좌표
            level: 5, // 지도의 확대 레벨
          };
        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        this.setState({
          location: this.props.location,
          map,
        });

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
        // 마커를 표시할 위치와 title 객체 배열입니다
        let validationIndex = () => {
          //알파벳 인덱스 함수
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
          for (let i in this.state.location) {
            if (this.state.location[i]["isTrostPartnerCenter"] === true) {
              imgIndexArr.push("trost");
            }
          }
          let alphabetRemovedArr = alphabetArr.splice(
            imgIndexArr.length,
            alphabetArr.length - 1
          );
          let resultArr = imgIndexArr.concat(alphabetRemovedArr);
          return resultArr;
        };
        var positions = []; //마커 포지션 생성
        for (let i in this.state.location) {
          positions.push({
            title: this.state.location[i]["title"],
            latlng: new kakao.maps.LatLng(
              this.state.location[i]["mapY"],
              this.state.location[i]["mapX"]
            ),
            unSelectedImg: `https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/${
              validationIndex()[i]
            }_unselected.png`,
            SelectedImg: `https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/${
              validationIndex()[i]
            }_selected.png`,
          });
        }
        var imageSize = new kakao.maps.Size(30, 30);

        // 마커 이미지를 생성합니다

        // 마커를 생성합니다
        let marker = {};
        let markerClickIndex = (i) => {
          this.props.markerClick(i);
        };

        for (let i = 0; i < positions.length; i++) {
          var markerImage = new kakao.maps.MarkerImage(
            positions[i]["unSelectedImg"],
            imageSize
          );
          marker[i] = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
          kakao.maps.event.addListener(marker[i], "click", function () {
            markerClickIndex(i);
            for (let j in positions) {
              //이미지 unSelect로 초기화, z-index 초기화
              var disableImage = new kakao.maps.MarkerImage(
                positions[j]["unSelectedImg"],
                new kakao.maps.Size(30, 30)
              );
              marker[j].setImage(disableImage);
              marker[j].setZIndex(2);
            }
            var markerImage = new kakao.maps.MarkerImage(
              positions[i]["SelectedImg"],
              new kakao.maps.Size(40, 60),
              new kakao.maps.Point(20, 60)
            );
            marker[i].setImage(markerImage);
            marker[i].setZIndex(3); //z-index 설정해준다.
          });
        }
        this.setState({
          marker,
          positions,
        });
      });
    };
  }
  componentDidUpdate(prevProps) {
    console.log("맵컴디업");
    const { kakao } = window;
    if (prevProps.location !== this.props.location) {
      for (let k in prevProps.location) {
        this.state.marker[k].setMap(null);
      }
      console.log(this.state.marker);
      let validationIndex = () => {
        //알파벳 인덱스 함수
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
        for (let i in this.state.location) {
          if (this.state.location[i]["isTrostPartnerCenter"] === true) {
            imgIndexArr.push("trost");
          }
        }
        let alphabetRemovedArr = alphabetArr.splice(
          imgIndexArr.length,
          alphabetArr.length - 1
        );
        let resultArr = imgIndexArr.concat(alphabetRemovedArr);
        return resultArr;
      };
      var positions = []; //마커 포지션 생성
      for (let i in this.props.location) {
        positions.push({
          title: this.props.location[i]["title"],
          latlng: new kakao.maps.LatLng(
            this.props.location[i]["mapY"],
            this.props.location[i]["mapX"]
          ),
          unSelectedImg: `https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/${
            validationIndex()[i]
          }_unselected.png`,
          SelectedImg: `https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_selected_mark/${
            validationIndex()[i]
          }_selected.png`,
        });
      }
      var imageSize = new kakao.maps.Size(30, 30);

      // 마커 이미지를 생성합니다

      // 마커를 생성합니다
      let marker = {};
      let markerClickIndex = (i) => {
        this.props.markerClick(i);
      };

      for (let i = 0; i < positions.length; i++) {
        var markerImage = new kakao.maps.MarkerImage(
          positions[i]["unSelectedImg"],
          imageSize
        );
        marker[i] = new kakao.maps.Marker({
          map: this.state.map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
        kakao.maps.event.addListener(marker[i], "click", function () {
          markerClickIndex(i);
          for (let j in positions) {
            //이미지 unSelect로 초기화, z-index 초기화
            var disableImage = new kakao.maps.MarkerImage(
              positions[j]["unSelectedImg"],
              new kakao.maps.Size(30, 30)
            );
            marker[j].setImage(disableImage);
            marker[j].setZIndex(2);
          }
          var markerImage = new kakao.maps.MarkerImage(
            positions[i]["SelectedImg"],
            new kakao.maps.Size(40, 60),
            new kakao.maps.Point(20, 60)
          );
          marker[i].setImage(markerImage);
          marker[i].setZIndex(3); //z-index 설정해준다.
        });
      }
      this.setState({
        marker,
        positions,
        PartnerShowRandomNum: this.props.PartnerShowRandomNum,
      });
    }

    if (this.props.clickIndex) {
      if (prevProps.clickIndex !== this.props.clickIndex) {
        this.setState(
          {
            clickIndex: this.props.clickIndex,
          },
          () => {
            let marker = this.state.marker;
            let positions = this.state.positions;
            for (let j in positions) {
              //이미지 unSelect로 초기화, z-index 초기화
              var disableImage = new kakao.maps.MarkerImage(
                positions[j]["unSelectedImg"],
                new kakao.maps.Size(30, 30)
              );
              marker[j].setImage(disableImage);
              marker[j].setZIndex(2);
            }
            var markerImage = new kakao.maps.MarkerImage(
              positions[this.state.clickIndex]["SelectedImg"],
              new kakao.maps.Size(40, 60),
              new kakao.maps.Point(20, 60)
            );
            marker[this.state.clickIndex].setImage(markerImage);
            marker[this.state.clickIndex].setZIndex(3); //z-index 설정해준다.
          }
        );
      }
    }
  }

  render() {
    console.log("맵렌더");
    return <div className="map" id="map"></div>;
  }
}
export default Map;
