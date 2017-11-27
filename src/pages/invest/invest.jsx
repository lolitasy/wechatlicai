import React, { Component } from "react";
import { Route } from 'react-router-dom';
// import 'whatwg-fetch';
import fetch from 'isomorphic-fetch'

// 引入样式
import "./invest.less";

//引入组件
import Tabs from "../../component/cmn/tabs/tabs.jsx";
import Header from "../../component/cmn/header/header.jsx";
import BidItem from "../../component/cmn/bidItem/bidItem.jsx";
import BidDetail from "./biddetail/biddetail.jsx";

class Index extends Component {
    render() {
        return (
            <div>
                <Header title="投资" />
                <main style={{ paddingTop: "0.88rem" }}>
                    <section className="list-container invest">
                        {this.state.bidList.map(function (item, i) {
                            return (
                                <BidItem key={i} name={item.name} bid={item.bid} apr={item.apr} limit={item.limit} flowmoney={item.flowmoney} tagname={item.tagName} rate={item.rate} />
                            )
                        })}
                    </section>

                    <a className="more" href="invest/repaying.html">
                        <span>已售罄项目</span>
                        <span className="repaying">{this.state.flowRepayingCount}</span>
                        <span>个，已还款项目</span>
                        <span className="repayed">{this.state.flowRepayedCount}</span>
                        <span>个，点击查看</span>
                    </a>
                </main>
                <button onClick={() => { this.refreshList() }}>更新</button>
                <Tabs cur="1" />
            </div>
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            flowRepayingCount: "",
            flowRepayedCount: "",
            bidList: [

            ]
        };
    }
    refreshList() {
        this.setState({
            bidList: [
                {
                    "name": "企融贷-aa",
                    "bid": "11111",
                    "apr": 12,
                    "limit": 3,
                    "flowmoney": 100,
                    "tagName": "金秋送爽",
                    "rate": 100
                }, {
                    "name": "企融贷-ab",
                    "bid": "11112",
                    "apr": 12,
                    "limit": 3,
                    "flowmoney": 100,
                    "tagName": "突破80亿",
                    "rate": 100
                }, {
                    "name": "企融贷-ac",
                    "bid": "11113",
                    "apr": 10,
                    "limit": 3,
                    "flowmoney": 100,
                    "tagName": "金秋送爽",
                    "rate": 98
                }
            ]
        });
    }

    componentDidMount() {
        var that = this;
        fetch('/wechatlicai/src/datapi/invest/get.cgi')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (rslt) {
                console.log(rslt);
                if (rslt.code == 200 && rslt.list) {
                    that.setState({
                        flowRepayingCount: rslt.flowRepayingCount || "",
                        flowRepayedCount: rslt.flowRepayedCount || "",
                        bidList: rslt.list
                    });
                }
            });
    }
}

const Invest = ({ match }) => (
    <div>
        <Route exact path={match.url} component={Index} />
        <Route path={`${match.url}/bidDetail/:bid`} component={BidDetail} />
    </div>
)
export default Invest