import React, { Component } from 'react';

export default class Notes extends Component {
	static propTypes = {
		username: React.PropTypes.string.isRequired,
		notes: React.PropTypes.array.isRequired
	};

	render() {
		return (<div>Notes</div>);
	}
}