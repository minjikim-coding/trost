import React, { Component } from 'react'

export default class Pcversion extends Component {
    render() {
        return (
            <div className={`pc-version-contents${this.props.service === "pcVersion" ? " is-clicked" : ""}`}>
                <p>
                  PC를 이용하여
                  <br />
                  트로스트 웹사이트에서도
                  <br />
                  상담을 받으실 수 있습니다.
                </p>
            </div>
        )
    }
}
