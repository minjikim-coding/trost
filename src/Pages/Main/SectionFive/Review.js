import React, { Component } from 'react'

export default class Review extends Component {
    render() {
        return (
            <li className="review-item">
                <strong className="review-program">
                    {this.props.program}
                </strong>
                <div className="hash-tags">
                    <span>{this.props.hashtag}</span>
                </div>
                <div className="review-text">
                    {this.props.article}
                </div>
                <div className="review-user-name">
                    <span>{this.props.id}</span>님
                </div>
            </li>
        )
    }
}
