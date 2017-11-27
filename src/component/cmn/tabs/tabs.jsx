import React from "react";
import { HashRouter as Router, StaticRouter, Route, Link, hashHistory, NavLink } from 'react-router-dom';
import "./tabs.less";

// import Index from "../../../pages/index/index.jsx";
// import Invest from "../../../pages/invest/invest.jsx";
// import Mine from "../../../pages/mine/mine.jsx";
// import More from "../../../pages/more/more.jsx";
const Tabs = (props) => (


    <footer>
        <Link className={"tab-item" + (props.cur == "0" ? " tab-item-active" : "")} to="/">首页</Link>
        <Link className={"tab-item" + (props.cur == "1" ? " tab-item-active" : "")} to="/invest">投资</Link>
        <Link className={"tab-item" + (props.cur == "2" ? " tab-item-active" : "")} to="/mine">我的</Link>
        <Link className={"tab-item" + (props.cur == "3" ? " tab-item-active" : "")} to="/more">更多</Link>
    </footer>



)
export default Tabs