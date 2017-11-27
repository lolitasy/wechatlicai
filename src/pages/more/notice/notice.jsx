import React from "react";
import { Link } from 'react-router-dom';
//引入样式
// import "./more.less";

//引入组件
import Header from "../../../component/cmn/header/header.jsx";

const Index = ({ match }) => (
    <div>
        <main style={{ marginTop: "0.88rem" }}>
            <h2>公告列表页</h2>
            <Link className="menu-item" to="/more">返回</Link>
        </main>
    </div>

)
export default Index