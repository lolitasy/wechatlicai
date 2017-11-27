import React, { Component } from "react";
import { Link } from 'react-router-dom';

//引入样式
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs'
import RaisedButton from 'material-ui/RaisedButton';
// import "./more.less";

//引入组件
import Header from "../../../component/cmn/header/header.jsx";

export default class Activity extends Component {
    render() {
        const standardActions = (
            <FlatButton
                label="Ok"
                primary={true}
                onClick={this.handleRequestClose}
            />
        );
        return (
            <div>
                <main style={{ marginTop: "0.88rem" }}>
                    <h2>活动专区详情页</h2>
                    <Link className="menu-item" to="/more">返回</Link>
                    <MuiThemeProvider>
                        <div>
                            <Dialog
                                open={this.state.open}
                                title="Super Secret Password"
                                actions={standardActions}
                                onRequestClose={this.handleRequestClose}
                            >
                                1-2-3-4-5
                            </Dialog>
                            <Tabs value="0">
                                {
                                    (function () {
                                        let tabs = [
                                            {
                                                title: "tab1"
                                            }, {
                                                title: "tab2"
                                            }, {
                                                title: "tab3"
                                            }
                                        ];
                                        tabs.map((tab, i) =>
                                            <Tab key={i} label={tab.title} value={i}>
                                            </Tab>
                                        )
                                    })()
                                }
                            </Tabs>
                            <RaisedButton label="Default" onClick={this.handleTouchTap} />
                        </div>
                    </MuiThemeProvider>
                </main>
            </div>
        )
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false
        };
    }

    componentDidMount() {
        //'//offline-news-api.herokuapp.com/stories'

    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }
    handleTouchTap = () => {
        this.setState({
            open: true,
        });
    }
}