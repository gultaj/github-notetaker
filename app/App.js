import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import Home from './components/Home';
import Profile from './components/Profile';

render((
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='/profile/:username' component={Profile} />
		</Route>
	</Router>
), document.getElementById('app'));