import Login from '../pages/Login';
import Resume from '../pages/Resume';
import Exist from '../pages/Exist'
function flatten(arr) {
	return arr.reduce((prev, current) => {
		return prev.concat(Array.isArray(current.children) ? flatten(current.children) : current);
	}, []);
}

export const menus = [
	{
		path: "/login",
		name: "简历",
		icon: "",
		exact: true,
		component: Login,
	},
	{
		path: "/resume",
		name: "简历",
		icon: "",
		exact: true,
		component: Resume,
	},
	{
		path:'/exist/:isExist',
		name: "存在",
		icon: "",
		exact: true,
		component: Exist,
	}
	
	// {
	// 	path: "/func",
	// 	name: "功能",
	// 	icon: "",
	// 	children: [
	// 		{
	// 			path: "/page1",
	// 			name: "员工管理",
	// 			icon: "",
	// 			exact: true,
	// 			component: Page1,
	// 		},
	// 		{
	// 			path: "/page2",
	// 			name: "Page2",
	// 			icon: "",
	// 			exact: true,
	// 			component: Page2,
	// 		},
	// 		{
	// 			path: "/page3",
	// 			name: "Page3",
	// 			icon: "",
	// 			exact: true,
	// 			component: Page3,
	// 		}
	// 	],
	// },
	// {
	// 	path: "/setting",
	// 	name: "设置",
	// 	icon: "",
	// 	component: Setting,
	// },
];

const routes = flatten(menus);

export default routes;
