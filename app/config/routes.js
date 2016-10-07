import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import MainComponent from '../containers/main'

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={MainComponent}>
			<IndexRoute component={MainComponent} />
		</Route>
	</Router>
	);

export default routes;