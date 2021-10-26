import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../Components/Home/Home";
import Header from "../Components/Header/Header";
import Music from '../Components/Music/Music';
import Lab from '../Components/Lab/Lab';
import Error404 from './Error404';
import Name from '../Components/Name/Name';

function Router(props) {
	return (
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route path={'/home'} component={Home} />
				<Route path={'/music'} component={Music} />
				<Route path={'/names'} component={Name} />
				<Route path={'/lab'} component={Lab} />
				<Route path={'/'} component={Error404} />
			</Switch>
		</BrowserRouter>
	);
}

export default Router;