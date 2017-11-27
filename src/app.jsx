import React, { Component, ReactDOM } from "react";
import reactDOM, { render } from "react-dom";
import { HashRouter as Router, StaticRouter, Route, Link, hashHistory, NavLink, IndexRoute } from 'react-router-dom';

//引入公共样式
import "./assets/css/app.less";
// import "./component/cmn/tabs/tabs.less";

//引入组件
// import Tabs from "./component/cmn/tabs/tabs.jsx";
import Index from "./pages/index/index.jsx";
import Invest from "./pages/invest/invest.jsx";
import Mine from "./pages/mine/mine.jsx";
import More from "./pages/more/more.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className="wrap">
					<Route exact path="/" component={Index}></Route>
					<Route path="/invest" component={Invest}></Route>
					<Route path="/mine" component={Mine}></Route>
					<Route path="/more" component={More}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/register" component={Register}></Route>
				</div>
			</Router>
		);
	}
	componentDidMount() {

	}

}

