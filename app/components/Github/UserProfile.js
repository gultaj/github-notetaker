import React, { Component } from 'react';

export default class UserProfile extends Component {
	static propTypes = {
		username: React.PropTypes.string.isRequired,
		bio: React.PropTypes.object.isRequired
	};

	render() {
		return (<div>{this.props.bio.name}</div>);
	}
}