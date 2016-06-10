import React, { Component } from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Firebase from 'firebase';
import reactFire from 'reactfire';

@reactFire
class Profile extends Component {
	constructor() {
		super();
		this.state = {bio: {}, notes: [], repos: []}
	}

	render() {
		const {username} = this.props.params;
		const {bio, repos, notes} = this.state;
		return (
			<div className='mdl-grid'>
				<div className='mdl-cell mdl-cell--4-col'>
					<UserProfile username={username} bio={bio} />
				</div>
				<div className='mdl-cell mdl-cell--4-col'>
					<Repos username={username} repos={repos} />
				</div>
				<div className='mdl-cell mdl-cell--4-col'>
					<Notes username={username} notes={notes} />
				</div>
			</div>
		);
	}
}
export default Profile;