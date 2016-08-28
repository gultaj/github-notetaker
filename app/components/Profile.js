import React, { Component } from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Store from '../utils/Store';
import { getGitHubUser } from '../utils/helpers';
//var ReactFireMixin = require('reactfire');
import Rebase from 're-base';

const base = Rebase.createClass({
	apiKey: "AIzaSyALSoVLL80McMYv2G8kR5S1nSnzMSF_xEk",
	authDomain: "react-notetaker-84957.firebaseapp.com",
	databaseURL: "https://react-notetaker-84957.firebaseio.com",
	storageBucket: "react-notetaker-84957.appspot.com",
});

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [], bio: {}, repos: [1,2,3]	
		};
	}
	init() {
		const {username} = this.props.params;
		this.ref = base.syncState(username, {
			context: this,
			asArray: true,
			state: 'notes'
		});
		getGitHubUser(username).then(data => {
			this.setState({repos: data.repos, bio: data.bio});
		});

	}
	componentWillMount() {
		this.init();
	}
	componentWillUnmount() {
		base.removeBinding(this.ref);
	}
	componentWillReceiveProps(nextProps) {
		base.removeBinding(this.ref);
		this.init();	
	}
	handleAddNote(text) {
		this.setState({
      		notes: this.state.notes.concat([text])
    	});
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
					<Notes username={username} notes={notes} addNote={::this.handleAddNote} />
				</div>
			</div>
		);
	}
}
export default Profile;
