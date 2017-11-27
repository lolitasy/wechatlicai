import React, { Component } from "react";
import "./header.less";
// const Header = () => (
//     <header>
//         <div className="title">投资</div>
//     </header>

// )
// export default Header

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="title">{this.props.title || "爱贷网"}</div>
            </header>)
    }
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        //'//offline-news-api.herokuapp.com/stories'

    }
}