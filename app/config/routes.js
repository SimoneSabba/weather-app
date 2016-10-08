import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'
import ForecastContainer from '../containers/ForecastContainer'

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={MainContainer}>
			<IndexRoute component={HomeContainer} />
			<Route path="/forecast/:city" component={ForecastContainer} />
		</Route>
	</Router>
	);

export default routes;