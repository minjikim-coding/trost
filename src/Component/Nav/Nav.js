import React from "react";
import "Component/Nav/Nav.scss";
import { Link } from "react-router-dom";

export class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      dropIndex: "",
    };
  }
  dropClick = () => {
    this.setState({
      dropIndex: "",
    });
  };
  mouseOver = (e) => {
    this.setState({
      dropIndex: e,
    });
  };
  mouseLeave = () => {
    this.setState({
      dropIndex: "",
    });
  };

  render() {
    let displayBlock = { display: "block" };
    let displayNone = { display: "none" };

    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/"></Link>
        </div>
        <div className="dropdown-first-btn">
          <div className="dropdown" onMouseLeave={this.mouseLeave}>
            <button
              className="dropbtn-left"
              onMouseOver={() => this.mouseOver(0)}
            >
              심리상담 받기
            </button>
            <div
              className="dropdown-content"
              style={this.state.dropIndex === 0 ? displayBlock : displayNone}
            >
              <Link to="/partner" onClick={this.dropClick}>
                {" "}
                상담사 찾기
              </Link>
              <Link to="/offline" onClick={this.dropClick}>
                상담센터 찾기
              </Link>
              <Link to="#" onClick={this.dropClick}>
                상담하기
              </Link>
            </div>
          </div>
        </div>
        <div className="dropdown-second-btn">
          <div className="dropdown" onMouseLeave={this.mouseLeave}>
            <button
              className="dropbtn-center"
              onMouseOver={() => this.mouseOver(1)}
            >
              자기분석 테스트
            </button>
            <div
              className="dropdown-content"
              style={this.state.dropIndex === 1 ? displayBlock : displayNone}
            >
              <Link to="#" onClick={this.dropClick}>
                심리검사
              </Link>
              <Link to="#" onClick={this.dropClick}>
                성격검사
              </Link>
            </div>
          </div>
        </div>
        <div className="dropdown-third-btn">
          <div className="dropdown" onMouseLeave={this.mouseLeave}>
            <button
              className="dropbtn-right"
              onMouseOver={() => this.mouseOver(2)}
            >
              약물치료 바로알기
            </button>
            <div
              className="dropdown-content"
              style={this.state.dropIndex === 2 ? displayBlock : displayNone}
            >
              <Link to="#" onClick={this.dropClick}>
                복용약 찾기
              </Link>
              <Link to="#" onClick={this.dropClick}>
                약물 의존도 자가체크
              </Link>
              <Link to="#" onClick={this.dropClick}>
                정신의학과 찾기
              </Link>
            </div>
          </div>
        </div>
        <ul className="navbar-login">
          <li className="navbar-login-page">
            <Link to="/login" className="navbar-login-a">
              로그인
            </Link>
          </li>
          <li className="navbar-signup">
            <Link to="/signup" className="navbar-signup-a">
              회원가입
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
