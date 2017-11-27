import {Demo1,Demo2,Index} from "../component/react-router/demo.jsx";
var router = [
	{
		path:"/",
		component:Index,
		title:"首页"
	},{
		path:"/a",
		component:Demo1,
		title:"child1"
	},{
		path:"/b",
		component:Demo2,
		title:"child2"
	},{
		path:"/c",
		component:Demo2,
		title:"child3"
	}
];

export default router;