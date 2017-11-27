import React, { Component } from "react";
// import { HashRouter as Router, StaticRouter, Route, Link, hashHistory, NavLink, IndexRoute } from 'react-router-dom';
//引入样式
import "./biddetail.less";

//引入组件
import Header from "../../../component/cmn/header/header.jsx";

export default class Index extends Component {
    render() {
        let tpl_productTag;
        let item = this.state.getContent;
        tpl_productTag = (
            <span className="tags f-cb">
                {
                    item.isCashQuan != 0
                        ? <i className="u-tag di"></i>
                        : ""

                }
                {
                    item.isAprQuan != 0
                        ? <i className="u-tag xi"></i>
                        : ""
                }
                {
                    item.tagsArray && item.tagsArray[0] &&
                    (item.tagsArray[0].tagType == "1"
                        ? <i className="u-ordinary">{item.tagsArray[0].tagName}</i>
                        : <i className="u-hot">{item.tagsArray[0].tagName}</i>
                    )

                }
                {
                    (item.award == "bl" || item.award == "gd") &&
                    <i className="u-tag award">奖item.awardAccount</i>
                }
                {
                    item.activeArray && (item.activeArray.length > 0) &&
                    item.activeArray.map(function (act) {
                        return (<a href={act.activeUrl} className="u-tag" style={{ "background": "url(" + act.activeImg + ") center no-repeat", "backgroundSize": "100% 100%" }}></a>)
                    })
                }
            </span>
        );
        return (
            <div>
                <Header title="标的详情" />
                <main style={{ marginTop: "0.88rem" }}>
                    <p>id：{this.props.match.params.bid}</p>
                    <div className="m-summaryBox">
                        <div className="f-fl" id="J_productTag">
                            {tpl_productTag}
                        </div>
                        <div className="content">
                            <p style={{ "color": "#999" }}>年化收益率</p>
                            <p className="rate">
                                <em>{this.state.getContent.apr}</em><i style={{ "fontSize": "30px" }}>%</i></p>
                            <p>
                                <span className="metaInfo"><em>{this.state.getContent.minFlowMoney}</em>元起投</span>
                                <span className="metaInfo">期限<em>{this.state.getContent.timeLimit}</em><em className="J_isDay">个月</em></span>
                                <span className="metaInfo"><em className="J_investType">{this.state.getContent.investType}</em></span>
                            </p>
                            <p className="tags">
                                <em className="tag">稳健收益</em>
                                <em className="tag">安全保障</em>
                                <em className="tag">大众门槛</em>
                                <em className="tag">期限灵活</em>
                            </p>
                        </div>
                    </div>

                    <div className="g-cnt" style={{ "backgroundColor": "#fff" }}>
                        <div className="m-menuItem m-progressBox">
                            <div className="u-progressBar">
                                <div className="progress J_progress" style={{ "width": this.state.getContent.scale + "%" }}>
                                    <div className="u-tip">
                                        <div className="content"><em>{Math.floor(this.state.getContent.scale)}</em>%</div>
                                        <div className="leg"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="f-cb">
                                <div className="f-fl J_tenderList" style={{ "color": "#fe623c" }}>已投人数<em>{this.state.getContent.tenderTimes}</em>人&gt;&gt;</div>
                                <div className="f-fr" style={{ "color": "#adadad" }}>剩余可投<em>{this.state.getContent.account - this.state.getContent.alreadyFlow * this.state.getContent.minFlowMoney}</em>元</div>
                            </div>
                        </div>
                        <div className="m-menuItem J_projectIntro">
                            <label>项目简介:</label><a href="javascript:;" className="u-back u-back-right"></a>
                        </div>
                        <div className="m-menuItem J_borrowDetail">
                            <label>借款详情:</label><a href="javascript:;" className="u-back u-back-right"></a>
                        </div>
                    </div>
                    <div className="buy-explain"></div>
                    <div className="m-navBox">
                        <div className="u-btn u-btn-1 J_order">立即投资</div>
                    </div>
                </main>
            </div>
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            getContent: {
                title: "标题",
                tagsArray: [
                    {
                        tagName: "aa",
                        tagValue: "bb"
                    }
                ]
            }
        };
    }

    componentDidMount() {
        //'//offline-news-api.herokuapp.com/stories'
        var that = this;
        console.log(this.props.match.params.bid);
        fetch('/wechatlicai/src/datapi/invest/biddetail.cgi')
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (rslt) {
                console.log(rslt);
                if (rslt.code == 200) {
                    that.setState({
                        getContent: rslt.getContent
                    });

                }
            });
    }
}