import React, { Component } from "react";
import Typing from "react-typing-animation";
import ReactHtmlParser from "react-html-parser";

class Type extends Component {
  render() {
    let typeText =
      "내가 정말 하고 싶은 일이 <br/> 이 일이 맞는지 혼란스러울 때";
    return (
      <Typing speed={65} loop={true} className="main-animation">
        {ReactHtmlParser(typeText)}
        <Typing.Reset delay={3000} />
      </Typing>
    );
  }
}
export default React.memo(Type);
