import React, { Component } from "react";
import "./PartnerProfile.scss";

export class partnerQualification extends Component {
  render() {
    return <li className="list-el">{this.props.ptQualiContents}</li>;
  }
}
