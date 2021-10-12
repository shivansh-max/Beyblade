import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../Components/Home/Home";
import Header from "../Components/Header/Header";
import Music from '../Components/Music/Music';

/*
	TODO: Battle
	TODO: Chat
	TODO: How

	Working On : Music

	DONE: Home
*/

function Router(props) {
	return (
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route path={'/music'}>
					<Music/>
				</Route>
				<Route path={'/'}>
					<Home/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;