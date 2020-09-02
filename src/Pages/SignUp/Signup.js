import React from "react";
import "./Signup.scss";

import { Link } from "react-router-dom";

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      pwre: "",
      nick: "",
      msg: "",
      pwCheck: "",
      rmcode: "",
      fitcode: "",
      checkPW: "",
      chkPwd: "",
      textColor: "",
    };
  }

  idChangeEvent = (e) => {
    this.setState({ id: e.target.value });
  };

  pwreChangeEvent = (e) => {
    this.setState({ pwre: e.target.value });
  };

  nickChangeEvent = (e) => {
    this.setState({ nick: e.target.value });
  };

  rmcodeChangeEvent = (e) => {
    this.setState({ rmcode: e.target.value });
  };

  fitcodeChangeEvent = (e) => {
    this.setState({ fitcode: e.target.value });
  };

  textColorEvent = (e) => {
    this.setState({ textColor: e.target.value });
  };

  clickHandler = () => {
    //e.prevent.Default();
   
    fetch("http://10.58.0.88:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        nickname: this.state.pwre,
      }), 
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          this.props.history.push("/signin");
        }
      }); 
  };

  idCheck = (e) => {
    e.preventDefault();
    fetch("http://10.58.0.88:8000/user/emailcheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.id,
      }),
    }).then((response) => {
      if (response.status === 200) {
        alert("사용 가능한 아이디 입니다."); 
        this.setState({ usable_id: true }); 
      } else if (response.status === 400) {
        alert("이미 사용중인 아이디 입니다."); // 이미 데이터베이스에 있는 아이디일 경우 409
      } else {
        // 그 외에는 사용 불가한 아이디
        alert("사용 불가한 아이디입니다.");
      }
    });
  };

  nickCheck = (e) => {
    e.preventDefault();
    fetch("http://10.58.0.88:8000/user/nickcheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname: this.state.nick,
      }),
    }).then((response) => {
      if (response.status === 200) {
        alert("사용 가능한 닉네임 입니다."); 
        this.setState({ usable_id: true }); 
      } else if (response.status === 400) {
        alert("이미 사용중인 닉네임 입니다."); 
      } else {
        alert("사용 불가한 닉네임입니다.");
      }
    });
  };
  pw = (e) => {
    e.preventDefault();
    this.setState({
      pw: e.target.value,
    });
  };
  pwre = (e) => {
    e.preventDefault();
    this.setState({
      pwre: e.target.value,
    });
  };
  checkPW = (e) => {
    e.preventDefault();
    //비밀번호 유효성검사(영문,숫자 혼합 6~20)
    const chkPwd = function (str) {
      var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
      return !reg_pwd.test(str) ? false : true;
    };
    if (chkPwd(this.state.pwre) === false) {
      alert("영문,숫자를 혼합하여 6~12자 이내");
    } else {
      if (this.state.pw === this.state.pwre) {
        this.setState({
          pwCheck: true,
        });
      } else {
        alert("비밀번호 불일치");
        this.setState({
          pwCheck: false,
        });
      }
    }
  };

  //첫번째 아이디 입력창 set변환
  id = (e) => {
    e.preventDefault();
    this.setState({
      id: e.target.value,
    });
  };

  //아이디 유효성 검사
  checkID = (e) => {
    e.preventDefault();
    //아이디 유효성검사(영문,숫자 혼합 6~20)
    const chkid = function (str) {
      var reg_id = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return !reg_id.test(str) ? false : true;
    };
    if (chkid(this.state.id) === false) {
      alert("유효한 이메일을 적어 주십시오.");
      this.setState({
        id: "",
      });
    } else {
      alert("중복확인을 해주세요.");
    }
  };

  render() {
    return (

        <div className="signUp-email-content">
          <h2 className="signUp-head">이메일로 회원가입</h2>
          <div className="signUp-input-wrap">
            <div className="signUp-left">
              <div className="signUp-input-box">
                <label for="userEmail">
                  <em className="signUp-input-box-head">이메일</em>
                </label>
                <div className="signUp-style">
                  <input
                    onLoad="document.log.id.focus()"
                    onKeyDown="key()"
                    onBlur={this.checkID}
                    onChange={this.idChangeEvent}
                    className="idinput"
                    id="logIn"
                    type="text"
                    className="signUp-input-box-num"
                    id="userEmail"
                    name="emil"
                    maxlength="50"
                    autofocus=""
                    style={{
                      borderColor:
                        this.state.id.length > 1 ? "#f57c00" : "#9e9e9e",
                    }}
                  />
                  <button
                    onClick={this.idCheck}
                    type="button"
                    className="signUp-input-box-btn-check"
                    id="btnOverlapCheckEmail"
                  >
                    중복확인
                  </button>
                </div>
                <div className="signUp-input-box-bottom-info" id="emailMsg">
                  <p
                    onChange={this.textColorEvent}
                    style={{
                      color: this.state.id.length > 1 ? "#f57c00" : "#757575",
                    }}
                    className="signUp-input-box-bottom-email"
                  >
                    수신 가능한 이메일을 입력해주세요. 최초 인증 및 비밀번호
                    분실시 안내 메일이 발송됩니다.
                  </p>
                </div>
              </div>
              <div className="signUp-input-box">
                <label for="userPw">
                  <em className="signUp-input-box-head">비밀번호</em>
                  <input
                    onChange={this.pw}
                    type="password"
                    className="signUp-input-box-input"
                    id="userPw"
                    minlength="6"
                    maxlength="14"
                    style={{
                      borderColor:
                        this.state.pw.length > 1 ? "#f57c00" : "#9e9e9e",
                    }}
                  />
                </label>
                <div className="signUp-input-box-bottom-info" id="pwMsg">
                  <p
                    onChange={this.textColorEvent}
                    style={{
                      color: this.state.pw.length > 1 ? "#f57c00" : "#757575",
                    }}
                    className="signUp-input-box-bottom-passward"
                  >
                    6~12자 이내로 영문, 숫자, 특수문자를 조합하여 작성합니다.
                  </p>
                  <p
                    onChange={this.textColorEvent}
                    style={{
                      color: this.state.pw.length > 1 ? "#f57c00" : "#757575",
                    }}
                    className="signUp-input-box-bottom-passward-list"
                  >
                    사용 가능한 특수문자 !@#$%^&amp;*?()_~
                  </p>
                </div>
              </div>
              <div className="signUp-input-box">
                <label for="userPwCheck">
                  <em className="signUp-input-box-head">비밀번호 확인</em>
                  <input
                    onBlur={this.checkPW}
                    onChange={this.pwreChangeEvent}
                    type="password"
                    className="signUp-input-box-input"
                    id="userPwCheck"
                    style={{
                      borderColor:
                        this.state.pwre.length > 1 ? "#f57c00" : "#9e9e9e",
                    }}
                  />
                </label>
                <div
                  className="signUp-input-box-bottom-info"
                  id="pwCheckMsg"
                ></div>
              </div>
            </div>
            <div className="signUp-right">
              <div className="signUp-input-box">
                <label for="">
                  <em className="signUp-input-box-head">닉네임</em>
                </label>
                <div className="signUp-style">
                  <input
                    onChange={this.nickChangeEvent}
                    type="text"
                    className="signUp-input-box-nickname"
                    id="inputJoinNickName"
                    minlength="2"
                    maxlength="8"
                    style={{
                      borderColor:
                        this.state.nick.length > 1 ? "#f57c00" : "#9e9e9e",
                    }}
                  />
                  <button
                    onClick={this.nickCheck}
                    type="button"
                    className="signUp-input-box-rebtn"
                  >
                    중복확인
                  </button>
                </div>
                <div className="signUp-input-box-bottom-info">
                  <p
                    onChange={this.textColorEvent}
                    style={{
                      color: this.state.nick.length > 1 ? "#f57c00" : "#757575",
                    }}
                    className="signUp-input-box-bottom-nickname"
                  >
                    닉네임은 상담 시 사용되는 이름으로 가입 후 수정이
                    불가합니다.
                  </p>
                  <p
                    onChange={this.textColorEvent}
                    style={{
                      color: this.state.nick.length > 1 ? "#f57c00" : "#757575",
                    }}
                    className="signUp-input-box-bottom-nickname-list"
                  >
                    자동으로 입력된 닉네임은 가입완료 전에 수정이 가능합니다.
                  </p>
                </div>
              </div>
              <div className="signUp-input-box">
                <label for="inputJoinRecUserCode">
                  <em className="signUp-input-box-head">추천인 코드(선택)</em>
                </label>
                <input
                  onChange={this.rmcodeChangeEvent}
                  type="text"
                  className="signUp-input-box-input"
                  maxlength="50"
                  style={{
                    borderColor:
                      this.state.rmcode.length > 1 ? "#f57c00" : "#9e9e9e",
                  }}
                />
                <div className="signUp-input-box-bottom-info"></div>
              </div>
              <div className="signUp-input-box">
                <label for="inputJoinRecProgramCode">
                  <em className="signUp-input-box-head">
                    맞춤 추천 코드(선택)
                  </em>
                </label>
                <input
                  onChange={this.fitcodeChangeEvent}
                  type="text"
                  className="signUp-input-box-input"
                  maxlength="50"
                  style={{
                    borderColor:
                      this.state.fitcode.length > 1 ? "#f57c00" : "#9e9e9e",
                  }}
                />
                <div className="signUp-input-box-bottom-info">
                  <p
                    onChange={this.textColorEvent}
                    style={{
                      color:
                        this.state.fitcode.length > 1 ? "#f57c00" : "#757575",
                    }}
                    className="signUp-input-box-bottom-fitcode"
                  >
                    맞춤 추천 프로그램을 구입하신 분만 입력해주세요.
                  </p>
                  <p
                    onChange={this.textColorEvent}
                    style={{
                      color:
                        this.state.fitcode.length > 1 ? "#f57c00" : "#757575",
                    }}
                    className="signUp-input-box-bottom-fitcode-list"
                  >
                    맞춤 추천 프로그램으로 구매하신 상담권은 트로스트 앱에서만
                    사용 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <label className="signUp-bottom-checkbox">
            <input
              type="checkbox"
              name="check-counseling-type"
              value="textTherapy"
              id="checkbox-text"
              defaultChecked={false}
            />
            (선택)무료 상담, 할인 이벤트 등의 혜택 정보를 수신합니다.
          </label>
          <button
            onClick={this.clickHandler}
            type="button"
            style={{
              backgroundColor:
                this.state.usable_id && this.state.pwCheck
                  ? "#f57c00"
                  : "#ffcc80",
            }}
            className="signUp-main-btn"
            disabled=""
          >
            가입 완료{" "}
          </button>
          <div className="signUp-popup-info-txt">
            이미 트로스트 회원이신가요?
            <Link
              to="/signin"
              className="signUp-popup-link-join"
              id="goLoginMain2"
              type="button"
            >
              로그인
            </Link>
          </div>
        </div>
    );
  }
}
