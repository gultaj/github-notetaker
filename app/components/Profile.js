import React, { Component } from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';

export default class Profile extends Component {
	constructor() {
		super();
		this.state = {bio: {}, notes: [], repos: []}
	}

	render() {
		const {username} = this.props.params;
		const {bio, repos, notes} = this.state;
		return (
			<div className='mdl-grid'>
				<div className='mdl-cell mdl-cell--4col'>
					<UserProfile username={username} bio={bio} />
				</div>
				<div className='mdl-cell mdl-cell--4col'>
					<Repos username={username} repos={repos} />
				</div>
				<div className='mdl-cell mdl-cell--4col'>
					<Notes username={username} notes={notes} />
				</div>
			</div>
		);
	}
}