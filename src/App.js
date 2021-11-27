import React from "react";
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import routes from "@/router";
import './App.scss'


export default function() {
	return (
		<div className="app-root">
			<BrowserRouter >
				<Switch>
					{routes.map((route)=>(
						<Route
						key={route.name}
						path={route.path}
						exact={!!route.exact}
						component={route.component}
					/>
					))}
					<Redirect to='/resume'></Redirect>
				</Switch>
			</BrowserRouter>
		</div>
	);
}