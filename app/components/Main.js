// var React = require('react');
// var ReactDOM = require('react-dom');
import React, { Component } from 'react';
import { render } from 'react-dom';

const Main = () => (<div>Hello, World!</div>);

// var Main = React.createClass({
// 	render: function() {
// 		return (<div>Hello, World!</div>);
// 	}
// });

// ReactDOM.render(<Main />, document.getElementById('app'));
render(<Main />, document.getElementById('app'));