import React, { Component } from 'react';

export default class Repos extends Component {
	static propTypes = {
		username: React.PropTypes.string.isRequired,
		repos: React.PropTypes.array.isRequired
	};

	render() {
		return (<div>{this.props.repos.length}</div>);
	}
}