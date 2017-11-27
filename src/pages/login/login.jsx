import React, { Component, ReactDOM } from "react";
import reactDOM, { render } from "react-dom";
import fetch from 'isomorphic-fetch'
import "./login.less";

//引入组件
import Header from "../../component/cmn/header/header.jsx";
import Tabs from "../../component/cmn/tabs/tabs.jsx";

export default class Index extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            username: "",
            password: "",
            enableLogin: false,
            earShow:true,
        }
    }
    doLogin = (e) => {
        var data = "username=" + this.state.username + "&password=" + this.state.password;
        console.log(data);
        fetch('/webchat/datasvr/oauth/login.cgi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
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
                if (rslt.code != 200) {
                    console.log("用户名或密码错误")
                } else {
                    console.log("登录成功")
                    location.href = "#/mine";
                }

            });
    }

    handleChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
            enableLogin: !!e.target.value && !!this.state.password
        })
    }
    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value,
            enableLogin: !!this.state.username && !!e.target.value
        })
    }
    changeEar = () => {
        if(this.state.earShow==true) {
            this.setState({
                earShow:false
            });
        }else{
            this.setState({
                earShow:true
            });
        } 
    }
    render() {
        return (<div className="index-page" ref="aaa">
            <Header title="登录" />
            <main style={{ paddingTop: "0.88rem" }}>
                <div className="g-cnt">
                    <div className="icon-logo">&#xe610;</div>
                    <div className="m-login">
                        <div className="u-input username">
                            <label htmlFor="username">用户名</label>
                            <input type="text" placeholder="请输入用户名/手机号" ref="username" autoComplete="off" onChange={(e) => { this.handleChangeUsername(e) }} />
                        </div>
                        <div className="u-input password">
                            <label htmlFor="password">登录密码</label>
                            <input type={this.state.earShow?"password":"text"} placeholder="密码" ref="password" autoComplete="off" onChange={(e) => { this.handleChangePassword(e) }} />
                            this.state.earShow?
                            <em className="icon-eye J_eye" onClick={this.changeEar} style={{display:this.state.earShow?"block":"none"}}>&#xe60d;</em>:
                            <em className="icon-eye J_eyeopen" onClick={this.changeEar} style={{display:this.state.earShow?"none":"block"}}>&#xe60e;</em>
                        </div>

                        <a href="javascript:;" type="text" className={this.state.enableLogin ? "u-submit" : "u-submit disable"} onClick={() => { console.log("click"); this.doLogin() }}>登&nbsp;&nbsp;录</a>
                        <div className="f-fr"><a href="#register" className="" style={{ fontSize: " .28rem", color: "#4C8CF8", paddingRight: ".35rem" }}>注册领取188元红包</a></div>
                        <div className="f-fl"><a href="#getpasswd" style={{ fontSize: ".28rem", color: "#666", paddingLeft: ".35rem" }}>忘记密码？</a></div>
                    </div>
                </div>
            </main>
        </div >)
    }
}
