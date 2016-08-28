import React, { Component } from 'react';

export default class Repos extends Component {
	static propTypes = {
		username: React.PropTypes.string.isRequired,
		repos: React.PropTypes.array.isRequired
	};

	render() {
		const {repos} = this.props;
		return (
			<ul>
				{repos.map((repo, i) => (<li key={i}><a href={repo.html_url}>{repo.name}</a></li>))}
			</ul>
		);
	}
}