import React, { Component } from "react";

export default class Theraphy extends Component {
  render() {
    return <li className={`slide-img${this.props.theraphyShow}`}></li>;
  }
}
