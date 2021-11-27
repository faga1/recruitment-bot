import React from "react";
import ReactDOM from "react-dom";
import App from '@/App.js'
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "@/assets/common.scss";
import "@/assets/styles.scss";
import "@/assets/dsky-antd.scss";

if (process.env.NODE_ENV !== "production") {
	import("./mock");
}

moment.locale("zh-cn");



ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		<App />
	</ConfigProvider>,
	document.getElementById("root")
);
