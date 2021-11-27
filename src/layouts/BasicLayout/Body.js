import React from "react";
import { NavLink, Switch, Route, withRouter } from "react-router-dom";
import { Menu } from "antd";
import P404 from "@/pages/404";
import routes, { menu } from "@/router";
import { menus } from "../../router";

function AppContent() {
	return (
		<div className="app-content">
			<Switch>
				{routes.map(route => (
					<Route
						key={route.name}
						path={route.path}
						exact={!!route.exact}
						component={route.component}
					/>
				))}
				<P404 />
			</Switch>
		</div>
	);
}

const AppSider = withRouter(
	class extends React.Component {
		handleMenuItemSelect = ({ item }) => {
			const { history } = this.props;
			history.push(item.props.to);
		};

		renderSubMenu = (subMenu, children) => {
			return (
				<Menu.SubMenu
					key={subMenu.path}
					title={
						<span>
							{subMenu.icon}
							<span>{subMenu.name}</span>
						</span>
					}
				>
					{children}
				</Menu.SubMenu>
			);
		};

		renderMenuItem = (menuItem = []) => {
			return menuItem.map(item => (
				<Menu.Item key={item.path} to={item.path}>
					{item.name}
				</Menu.Item>
			));
		};

		render() {
			const {
				location: { pathname },
			} = this.props;

			let defaultOpenKeys = menus
				.filter(item => {
					return (
						item.path == pathname ||
						(item.children && item.children.find(v => v.path == pathname))
					);
				})
				.map(item => item.path);

			return (
				<Menu
					mode="inline"
					style={{ paddingTop: 16, width: 256 }}
					selectedKeys={[pathname]}
					onSelect={this.handleMenuItemSelect}
					defaultOpenKeys={defaultOpenKeys}
				>
					{menus.map(item =>
						item.children
							? this.renderSubMenu(item, this.renderMenuItem(item.children))
							: this.renderMenuItem([item])
					)}
				</Menu>
			);
		}
	}
);

export default () => {
	return (
		<main className="app-body-layout">
			<div className="app-body-inner">
				<AppSider />
				<AppContent />
			</div>
		</main>
	);
};
