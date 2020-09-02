import React, { Component } from "react";
import "./TopBtn.scss";

export default class TopBtn extends Component {
  render() {
    return (
      <>
        <button
          type="button"
          class="btn-to-top-arrow"
          onClick={() => {
            window.scroll(0, 0);
          }}
        />
        <button type="button" class="btn-guide-floating">
          <img src="https://d2qrvi4l1nprmf.cloudfront.net/images/common/symbol_logo.png" />
          앱 다운로드
        </button>
      </>
    );
  }
}
