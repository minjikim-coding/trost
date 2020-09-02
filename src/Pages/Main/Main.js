import React, { Component } from "react";
import Sectionone from "./SectionOne/Sectionone";
import Sectiontwo from "./SectionTwo/Sectiontwo";
import Sectionthree from "./Sectionthree";
import Sectionfour from "./SectionFour/Sectionfour";
import Sectionfive from "./SectionFive/Sectionfive";
import Sectionsix from "./SectionSix/Sectionsix";
import Sectionseven from "./Sectionseven";
import Sectioneight from "./Sectioneight";
import TopBtn from "Component/TopBtn";
import Footer from "Component/Footer/Footer";
import "Pages/Main/Main.scss";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      day: "",
      theraphyArr: ["", "", "", "", ""],
      service: "textService",
      slidePage: 0,
      reviewData: "",
      count: 0,
    };
  }
  slickSlideLeft = () => {
    //sectionfive 슬릭슬라이드
    const { slidePage } = this.state;
    if (slidePage > 0) {
      this.setState({
        slidePage: slidePage - 1,
      });
    }
  };
  slickSlideRight = () => {
    //sectionfive 슬릭슬라이드
    const { slidePage } = this.state;
    if (slidePage < 18) {
      this.setState({
        slidePage: slidePage + 1,
      });
    }
  };
  tabHandler = (e) => {
    //sectionfour 탭
    this.setState({
      service: e.target.ariaLabel,
    });
  };
  mouseOver = (e) => {
    //sectiontwo 마우스오버
    this.setState({
      day: e.target.name, //!계산된 속성명
    });
  };
  mouseOut = () => {
    //sectiontwo 마우스아웃
    this.setState({
      day: "",
    });
  };
  componentDidMount() {
    this.transitionSlides(0); //Interval을 시작 delay없이 실행시키기 위해
    this.intervalHandler();
    fetch("http://localhost:3000/data/reviewData.json") //sectionfive 후기 데이터 불러오기
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          reviewData: res["data"],
        });
      });
  }

  intervalHandler = () => {
    setInterval(() => {
      //sectionfour - textService 함수 반복 실행 함수
      if (this.state.count >= 4) {
        this.setState({
          count: 0,
        });
        this.transitionSlides(0);
      } else {
        this.setState({
          count: +this.state.count + 1,
        });
        this.transitionSlides(this.state.count);
      }
    }, 3000);
  };

  transitionSlides = (count) => {
    //sectionfour - textService 애니메이션 함수
    let Arr = ["", "", "", "", ""];
    Arr[count] = " is-show"; //2번
    this.setState({
      theraphyArr: Arr,
    });
  };
  countChange = (e) => {
    this.transitionSlides(e.target.ariaLabel);
    this.setState({
      count: e.target.ariaLabel,
    });
  };
  clickdot = (e) => {
    this.setState({
      slidePage: e.target.ariaLabel,
    });
  };

  render() {
    return (
      <div className="container">
        <Sectionone />
        <Sectiontwo
          stateDay={this.state.day}
          MouseOver={this.mouseOver}
          MouseOut={this.mouseOut}
        />
        <Sectionthree />
        <Sectionfour
          service={this.state.service}
          tabHandler={this.tabHandler}
          theraphyArr={this.state.theraphyArr}
          countChange={this.countChange}
        />
        <Sectionfive
          reviewData={this.state.reviewData}
          slidePage={this.state.slidePage}
          slickLeft={this.slickSlideLeft}
          slickRight={this.slickSlideRight}
          clickdot={this.clickdot}
        />
        <Sectionsix />
        <Sectionseven />
        <Sectioneight />
        <Footer />
        <TopBtn />
      </div>
    );
  }
}
