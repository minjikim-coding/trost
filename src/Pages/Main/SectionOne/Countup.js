import React, { Component } from "react";
import CountUp from "react-countup";

export default class Countup extends Component {
  render() {
    return (
      <div className="main-center">
        <p className="center-text">
          지금까지 트로스트에서 위안을 얻은 분들은
          <br />
          <CountUp
            end={139526}
            separator=","
            duration={1.7}
            className="count-animation"
          ></CountUp>
          명 입니다
        </p>
      </div>
    );
  }
}
