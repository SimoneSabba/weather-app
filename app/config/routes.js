import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'
import ForecastContainer from '../containers/ForecastContainer'
import DetailContainer from '../containers/DetailContainer'

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={MainContainer}>
			<IndexRoute component={HomeContainer} />
			<Route path="/forecast/:city" component={ForecastContainer} />
			<Route path="/detail/:city" component={DetailContainer} />
		</Route>
	</Router>
	);

export default routes;