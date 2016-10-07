import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import MainComponent from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={MainComponent}>
			<IndexRoute component={HomeContainer} />
		</Route>
	</Router>
	);

export default routes;