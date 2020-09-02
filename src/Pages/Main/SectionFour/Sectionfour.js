import React, { Component } from 'react';
import Servicetab from "./Servicetab";
import Textcontent from "./Textcontent";
import Callservice from "./Callservice";
import Pcversion from "./Pcversion";

export default class Sectionfour extends Component {
    render() {
        return (
        <section className="section-four">
          <div className="content-box-four">
            <Servicetab service={this.props.service} tabHandler={this.props.tabHandler}/>
            <div className="service-contents">
              <Textcontent service ={this.props.service} theraphyArr={this.props.theraphyArr} countChange={this.props.countChange}/>
              <Callservice service ={this.props.service}/>
              <Pcversion service={this.props.service}/>
            </div>
          </div>
        </section>
        )
    }
}
