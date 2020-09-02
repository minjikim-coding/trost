import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Partner.scss";

export default class PartnerNav extends Component {
  render() {
    return (
      <li>
        <Link to={this.props.pageLink}>{this.props.pageName}</Link>
      </li>
    );
  }
}
