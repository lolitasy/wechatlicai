import React from "react";
import { Route, Link } from 'react-router-dom';
//引入样式
import "./more.less";

//引入组件
import Header from "../../component/cmn/header/header.jsx";
import Tabs from "../../component/cmn/tabs/tabs.jsx";
import Activity from "./activity/activity.jsx";
import Notice from "./notice/notice.jsx";
const More = ({ match }) => (
    <div>
        <Route exact path={match.url} render={() => (
            <div>
                <Header title="更多" />
                <main style={{ marginTop: "0.88rem" }}>
                    <div className="menu">
                        <Link className="menu-item" to="more/activity">
                            <i className="icon icon-activity"></i>
                            <span>活动专区</span>
                            <i className="icon-1 icon-right-arrow"></i>
                        </Link>
                        <Link className="menu-item" to="more/notice">
                            <i className="icon icon-notice"></i>
                            <span>公告消息</span>
                            <i className="icon-1 icon-right-arrow"></i>
                        </Link>
                    </div>

                    <div className="menu">
                        <a className="menu-item" href="safe.html">
                            <i className="icon icon-safe"></i>
                            <span>安全保障</span>
                            <i className="icon-1 icon-right-arrow"></i>
                        </a>
                        <a className="menu-item" href="invite.html">
                            <i className="icon icon-invite"></i>
                            <span>邀请好友</span>
                            <i className="icon-1 icon-right-arrow"></i>
                        </a>
                    </div>

                    <div className="menu">
                        <a className="menu-item" href="help.html">
                            <i className="icon icon-help"></i>
                            <span>帮助</span>
                            <i className="icon-1 icon-right-arrow"></i>
                        </a>
                        <a className="menu-item" href="install.html">
                            <i className="icon icon-settings"></i>
                            <span>设置</span>
                            <i className="icon-1 icon-right-arrow"></i>
                        </a>
                    </div>

                    <div className="menu">
                        <a className="menu-item" href="intro.html">
                            <i className="icon icon-intro"></i>
                            <span>爱贷介绍</span>
                            <i className="icon-1 icon-right-arrow"></i>
                        </a>
                        <div className="menu-item">
                            <i className="icon icon-telephone"></i>
                            <span>客服电话</span>
                            <a className="menu-right" href="tel:4008886365">400-888-6365</a>
                            <i className="icon-1 icon-right-arrow"></i>
                        </div>
                        <div className="menu-item link-service" href="install.html">
                            <i className="icon icon-qq"></i>
                            <span>在线客服</span>
                            <span className="menu-right">09:00-21:00</span>
                            <i className="icon-1 icon-right-arrow"></i>
                        </div>
                    </div>
                </main>
                <Tabs cur="3" />
            </div>
        )} />
        <Route path={`${match.url}/activity`} component={Activity} />
        <Route path={`${match.url}/notice`} component={Notice} />
    </div>

)
export default More
