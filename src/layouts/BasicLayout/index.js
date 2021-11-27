import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { getUserInfo } from "@/models/common";
import GlobalContext from "../GlobalContext";
import "./index.scss";

export default class BasicLayout extends React.Component {
	state = {
		isInit: true,
		userInfo: {},
	};

	componentDidMount() {
		getUserInfo().then(info => {
			this.setState({
				isInit: false,
				userInfo: info,
			});
		});
	}

	render() {
		const { isInit, userInfo } = this.state;

		return isInit ? (
			<div
				style={{
					padding: "1rem",
					textAlign: "center",
				}}
			>
				加载中...
			</div>
		) : (
			<GlobalContext.Provider
				value={{
					userInfo,
				}}
			>
				<div className="app-main-layout">
					<Header />
					<Body />
					<Footer />
				</div>
			</GlobalContext.Provider>
		);
	}
}
