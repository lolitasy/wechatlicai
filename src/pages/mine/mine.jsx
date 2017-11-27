import React, { Component } from "react";
import fetch from 'isomorphic-fetch'
//引入组件
import Header from "../../component/cmn/header/header.jsx";
import Tabs from "../../component/cmn/tabs/tabs.jsx";

//引入样式
import style from "./mine.css"

export default class Mine extends Component {
    render() {
        return (<div>
            <Header title="个人中心" />
            <main style={{ "marginTop": "0.88rem" }}>
                <h2>个人中心</h2>
                <p className={style.welcome}>{this.state.username ? "欢迎您，" + this.state.username : <a href="#/login">请登录</a>}</p>
            </main>
            <Tabs cur="2" />
        </div >)
    }
    constructor(prop) {
        super(prop);
        this.state = {
            username: "",
            userId: ""
        }
    }
    componentDidMount() {
        var startX;
        var finishX;
        var that = this;
        fetch('/wechatlicai/src/datapi/accountInfo.cgi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            // xhrFields: { withCredentials: true },
            credentials: 'include',
            body: ""
        })
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (rslt) {
                console.log(rslt);
                if (rslt && rslt.user) {
                    that.setState({
                        userId: rslt.user.userId,
                        username: rslt.user.username
                    });
                }

            });
    }

}