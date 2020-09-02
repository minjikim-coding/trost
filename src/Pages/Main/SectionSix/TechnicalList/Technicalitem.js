import React, { Component } from 'react'

export default class Technicalitem extends Component {
    render() {
      const {num, index, head, text1, text2, text3, text4, text5, text6, notice} = this.props;
        return (
            
            <div className={`technical-research-item-${num}`}>
                <div className="technical-research-head">
                  {index}
                  <br />
                  {head}
                </div>
                <div className="technical-research-img"></div>
                <div className="technical-research-text">
                  {text1}<span>{text2}</span>{text3}<br/>{text4}<span>{text5}</span>{text6}
                </div>
                <div className="technical-research-notice">
                  {notice}
                </div>
            </div>
        )
    }
}
