import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../Components/Home/Home";
import Header from "../Components/Header/Header";
import Music from '../Components/Music/Music';
import Battle from '../Components/Battle/Battle';

function Router(props) {
	return (
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route path={'/home'} component={Home} />
				<Route path={'/music'} component={Music} />
				<Route path={'/battle'} component={Battle} />
				<Route path={'/'} component={Home} />
			</Switch>
		</BrowserRouter>
	);
}

export default Router;