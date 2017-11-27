import React, { Component, ReactDOM } from "react";
import reactDOM, { render } from "react-dom";
//引入样式
import "./index.less";

//引入组件
import Tabs from "../../component/cmn/tabs/tabs.jsx";

export default class Index extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            list: [1, 2, 3, 4, 5, 6],
            index: 0
        }
    }
    componentDidMount() {
        var startX;
        var finishX;

        this.banner.addEventListener('touchstart', (evt) => {
            evt.preventDefault();
            startX = evt.touches[0].pageX;
        }, false);
        this.banner.addEventListener('touchend', (evt) => {
            finishX = evt.changedTouches[0].pageX;
            if ((finishX - startX) < 0) {
                this.scrollBanner(1);
            }
            if ((finishX - startX) > 0) {
                this.scrollBanner(0);
            }
        }, false);
    }
    scrollBanner = (value) => {
        this.setState((prevState, props) => {
            if (value == 0) {
                if (prevState.index != 0) {
                    return {
                        index: prevState.index + 1
                    }
                }
            } else if (value == 1) {
                if (Math.abs(prevState.index) < (prevState.list.length - 1)) {
                    return {
                        index: prevState.index - 1
                    }
                }
            }
        });
    }
    doLogin = (e) => {
        var data = "username=" + this.state.username + "&password=" + this.state.password;
        console.log(data);
        fetch('/webchat/datasvr/invest/list.cgi', {
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
                    var errMsg = rslt.message || "返回数据异常,请刷新重试!";
                    alert(errMsg);
                    return;
                } else {
                    baseView.render("#template-slider", result.scrollPicList.scrollPicList, ".swiper-wrapper");
                }

            });
    }

    render() {
        return (<div className="index-page" ref="aaa">
            <main>
                <div className="banner-box" ref={el => { this.banner = el }}>
                    <ul className="ul-box" ref={el => { this.ulBox = el }} style={{
                        width: this.state.list.length * 7.5 + "rem",
                        height: "3rem",
                        left: this.state.index * 7.5 + "rem"
                    }}>
                        {this.state.list.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })}
                    </ul>
                    <ul className="changeBtn">
                        {this.state.list.map((value, index) => {
                            return <li className={Math.abs(this.state.index) == index ? "current" : ""} key={index}></li>
                        })}
                    </ul>
                    <a className="left" onClick={() => { this.scrollBanner(0) }}>{"<"}</a>
                    <a className="right" onClick={() => { this.scrollBanner(1) }}>{">"}</a>
                </div>
            </main>
            <section className="list-container">
            </section>

            <section className="section-achievements">
                <div>
                    <span>用户总数</span>
                    <span className="user-count"></span>
                </div>
                <div>
                    <span>累计成交</span>
                    <span className="transaction-count"></span>
                </div>
            </section>

            <section className="section-advantage">
              
            </section>

            <section className="section-safe">
                <i className="icon-security"></i>
                <span>您的资金由财险机构和第三方共同保障</span>
            </section>

            <section className="section-app">
                <a href="https://pc.cnaidai.com/webpc/qrcode/download.htm">客户端</a>
                <a href="http://www.cnaidai.com?viewType=desktop">电脑版</a>
            </section>
            <Tabs cur="0" />
        </div>)
    }
    
}
