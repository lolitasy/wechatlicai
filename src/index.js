import React, { Component, ReactDOM } from "react";
import reactDOM, { render } from "react-dom";
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();

import App from "./app.jsx";
// import {Demo1,Demo2,Index} from "../component/react-router/demo";
// import Demo from "../component/demo1/demo1";
// import Demo3 from "../component/demo3/demo";

// import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink } from 'react-router-dom';

//  var defaultState = {
//    todos: [
//      {
//        text: 'Consider using Redux',
//        completed: true,
//      },
//      {
//        text: 'Keep all state in a single tree',
//        completed: false
//      }
//    ]
//  }


//  function reduce(state=defaultState, active) {
//    return state
//  }

//  let store = createStore(reduce)

//console.log(store.getState());
//  function mapStateToProps(state){
//    return state
//  }

//  const De = connect(
//    mapStateToProps
//  )(Demo);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

reactDOM.render(
	// <Provider store={store}>
	// 	<De/>
	// </Provider>,
	<App />,
	document.getElementById('contain')
);
