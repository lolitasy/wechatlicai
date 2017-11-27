import React, { Component, ReactDOM } from "react";
import reactDOM, { render } from "react-dom";
import fetch from 'isomorphic-fetch'
import "./register.less";

//引入组件
import Header from "../../component/cmn/header/header.jsx";
// import Tabs from "../../component/cmn/tabs/tabs.jsx";

export default class Index extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            username: "",
            password: "",
            enableLogin: false
        }
    }
    doLogin = (e) => {
        console.log(
            "dologin called..."
        )
        var data = "username=" + this.state.username + "&password=" + this.state.password;

        fetch('/wechatlicai/src/datapi/login.cgi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            // crossDomain: true,
            // xhrFields: { withCredentials: true },
            // withCredentials: true,
            credentials: 'include',
            body: data
        })
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (rslt) {
                console.log(rslt);
                if (rslt.code != 200) {
                    console.log("用户名或密码错误")
                } else {
                    console.log("登录成功")
                    location.href = "#/mine";
                }

            });
    }

    render() {
        return (<div className="index-page" ref="aaa">
            <Header title="注册" />
            <main style={{ paddingTop: "0.88rem" }}>
                <div className="g-register">
                    <div className="m-firstStep J_step1" style={{ "display": "none" }}>
                        <div className="m-logo icon-logo">&#xe610;</div>
                        <p className="m-message">新用户注册领取188元红包</p>
                        <div className="m-username">
                            <label for="username">手机号码</label>
                            <input type="text" name="username" autoComplete="off" id="username" maxlength="11" className="J_phone" pattern="[0-9]*" />
                            <em className="icon-close J_close">&#xe60b;</em>
                        </div>
                        <a href="javascript:;" type="text" className="u-btn disable J_nextStep">下一步</a>
                        <p className="u-skip">已有账号？<a href="#login" className="J_login">立即登录</a></p>
                        <div className="m-accept">
                            <em>&#xe608;</em>
                            <span className="agreement">我已阅读并且同意<a href="serviceAgreement.html" className="emphasis J_linkBtn">《爱贷网服务协议》</a></span>
                        </div>
                    </div>
                    <div className="m-autocomplete">
                        <input type="text" name="" />
                        <input type="password" name="" />
                    </div>
                    <div className="m-nextStep J_step2" >
                        <p className="u-phonecode">我们已发送短信验证码至<span className="J_phoneNum"></span></p>
                        <div className="m-input">
                            <div className="valicode">
                                <label for="valicode">验证码</label>
                                <input type="text" className="u-code J_valicode" id="valicode" placeholder="输入验证码" name="registerSn" autoComplete="off" style={{ "width": "3.3rem" }} />
                                <a href="javascript:;" className="u-valicode J_btnValicode">获取验证码</a>
                                <span className="J_recTime u-time" style={{ "display": "none" }}><b className="J_lasttime"></b></span>
                            </div>
                            <div className="password">
                                <label for="password">设置密码</label>
                                <input type="password" placeholder="8~16位数字、字母组合" className="J_password u-code" id="password" name="password" autoComplete="off" />
                                <em className="icon-eye J_eye">&#xe60d;</em>
                                <em className="icon-eye J_eyeopen" style={{ "display": "none" }}>&#xe60e;</em>
                            </div>
                        </div>
                        <div className="invitor">
                            <label for="valicode">推荐码</label>
                            <input type="text" id="invitor" placeholder="输入推荐人用户名(选填)" className="J_invitor" autoComplete="off" />
                        </div>
                        <a href="javascript:;" type="text" className="u-btn disable J_regSubmit">注册</a>
                    </div>
                </div>
            </main>
        </div >)
    }
    
}
