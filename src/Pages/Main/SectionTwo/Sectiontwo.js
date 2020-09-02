import React, { Component } from 'react';
import DayList from './Daylist';

export default class Sectiontwo extends Component {
    render() {
        return (
        <section className="section-two">
          <div className="content-box-two">
            <h2 className="content-title">트로스트와 함께한 하루</h2>
            <ul className="trost-day-list">
              <DayList day="one" stateDay={this.props.stateDay} text="바로상담 신청" time="AM 1:00" MouseOver={this.props.MouseOver} MouseOut={this.props.MouseOut}/>
              <DayList day="two" stateDay={this.props.stateDay} maintext="출근길" text="감정기록" time="AM 8:30" MouseOver={this.props.MouseOver} MouseOut={this.props.MouseOut}/>
              <DayList day="three" stateDay={this.props.stateDay} maintext="점심시간" text="미션 수행" time="PM 12:00" MouseOver={this.props.MouseOver} MouseOut={this.props.MouseOut}/>
              <DayList day="four" stateDay={this.props.stateDay} maintext="퇴근길" text="마음정리 보고서" time="PM 6:00" MouseOver={this.props.MouseOver} MouseOut={this.props.MouseOut}/>
              <DayList day="five" stateDay={this.props.stateDay} maintext="예약상담" text="진행" time="PM 10:00" MouseOver={this.props.MouseOver} MouseOut={this.props.MouseOut}/>
            </ul>
            <button className="trost-all-day-btn">
              트로스트와 24시간 함께해보기 
            </button>
          </div>
        </section>
        )
    }
}
