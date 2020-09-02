import React, { Component } from 'react';

export default class Servicetab extends Component {
    render() {
        return (
            <ul className="service-tab">
              <li className={`text-service${this.props.service === "textService" ? " is-clicked" : "" }`} aria-label ="textService" onClick={this.props.tabHandler}>
                <span>텍스트테라피</span>
              </li>
              <li className={`call-service${this.props.service === "callService" ? " is-clicked" : ""}`} aria-label="callService" onClick={this.props.tabHandler}>
                <span>전화상담</span>
              </li>
              <li className={`pc-version${this.props.service === "pcVersion" ? " is-clicked" : ""}`} aria-label="pcVersion" onClick={this.props.tabHandler}>
                <span>PC버전</span>
              </li>
            </ul>
        )
    }
}
