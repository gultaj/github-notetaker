import React, { Component } from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import Store from '../utils/Store';
var ReactFireMixin = require('reactfire');

var Profile = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function() {
		return {
			notes: [], bio: {}, repos: [1,2,3]	
		};
	},
	componentDidMount: function() {
		const {username} = this.props.params;
		this.bindAsArray(firebase.database().ref(username), 'notes');
	},
	componentWillUnmount: function() {
		this.unmount('notes');
	},
	handleAddNote: function(text) {
		this.firebaseRefs.notes.push(text);
	},
	render: function() {
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
					<Notes username={username} notes={notes} addNote={this.handleAddNote} />
				</div>
			</div>
		);
	}
});
export default Profile;
// export default class Profile extends Component {
// 	constructor() {
// 		super();
// 		this.state = {bio: {}, notes: [], repos: []}
// 	}

// 	componentDidMount() {
// 		const {username} = this.props.params;
// 		this.setState({notes: Store.get(username)});	
// 	}

// 	componentWillUpdate(nextProps, nextState) {
// 		if (nextState.notes.length) {
// 			const {username} = this.props.params;
// 			Store.set(username, nextState.notes);
// 		}
// 	}

// 	handleAddNote(note) {
// 		this.setState({notes: this.state.notes.concat([note])});
// 	}

// 	render() {
// 		const {username} = this.props.params;
// 		const {bio, repos, notes} = this.state;
// 		return (
// 			<div className='mdl-grid'>
// 				<div className='mdl-cell mdl-cell--4-col'>
// 					<UserProfile username={username} bio={bio} />
// 				</div>
// 				<div className='mdl-cell mdl-cell--4-col'>
// 					<Repos username={username} repos={repos} />
// 				</div>
// 				<div className='mdl-cell mdl-cell--4-col'>
// 					<Notes username={username} notes={notes} addNote={::this.handleAddNote} />
// 				</div>
// 			</div>
// 		);
// 	}
// }