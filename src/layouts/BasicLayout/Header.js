import React from "react";
import { Link } from "react-router-dom";
import version from "@/version";
import GlobalContext from "../GlobalContext";

export default () => {
	const globalData = React.useContext(GlobalContext);

	return (
		<nav className="app-header-layout">
			<div className="app-header-inner">
				<div className="nav-left">
					<Link className="app-title" to="/">
						前端项目脚手架
					</Link>{" "}
					<span>ver{version()}</span>
				</div>
				<div className="nav-right">
					<span
						style={{
							fontSize: 14,
						}}
					>
						{globalData.userInfo.username}
					</span>
					<img
						title={globalData.userInfo.username}
						src={globalData.userInfo.avatar}
						style={{
							marginLeft: "0.5rem",
							width: 32,
							height: 32,
						}}
					/>
				</div>
			</div>
		</nav>
	);
};
