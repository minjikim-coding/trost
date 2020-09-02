import React, { Component } from 'react'

export default class Daylist extends Component {
    render() {
        return (
            <li>
                <button
                  className={`trost-day-${this.props.day}${this.props.stateDay === this.props.day ? " is-active" : ""}`}
                  name={this.props.day}
                  onMouseOver={this.props.MouseOver}
                  onMouseOut={this.props.MouseOut}
                >
                  {this.props.time}
                  <p>
                    {this.props.maintext}
                    <span>{this.props.text}</span>
                  </p>
                </button>
              </li>
        )
    }
}
