import React, { Component } from 'react'

export default class TheraphyDots extends Component {
    render() {
        return (
            <span aria-label={this.props.label} onClick={this.props.countChange} className={this.props.theraphyShow}></span>
        )
    }
}
