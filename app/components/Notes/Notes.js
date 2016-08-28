import React, { Component } from 'react';
import AddNote from './AddNote';


export default class Notes extends Component {
	static propTypes = {
		username: React.PropTypes.string.isRequired,
		notes: React.PropTypes.array.isRequired,
		addNote: React.PropTypes.func.isRequired
	};

	render() {
		const {notes, username} = this.props;
		return (
			<div>
				<h3>Notes for user: {username}</h3>
				<AddNote addNote={this.props.addNote} />
				<ul>
					{notes.map((note, i) => (<li key={i}>{note}</li>))}
				</ul>
			</div>
		);
	}
}