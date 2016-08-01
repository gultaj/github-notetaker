import React, { Component } from 'react';

const style = {
	container: {
		width: '75%',
		position: 'relative',
		margin: '0 auto',
		textAlign: 'center'
	},
	input: {
		marginRight: 20
	}
};

export default class Search extends Component {
	static contextTypes = {
  		router: React.PropTypes.object.isRequired
  	};
	handleSubmit = (e) => {
		e.preventDefault();
		var username = this.refs.username.value;
		console.log(this.context);
		this.refs.username.value = '';
		this.context.router.push('profile/' + username);
	}
	render() {
		return (
			<form onSubmit={::this.handleSubmit} className="mdl-layout__container" style={style.container}>
				<div className="mdl-textfield mdl-js-textfield mdl-cell--4-col" style={style.input}>
					<input className="mdl-textfield__input" ref="username" type="text" id="sample3"/>
					<label className="mdl-textfield__label" htmlFor="sample3">Search GitHub</label>
				</div>
				<button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">Search</button>
			</form>
		);
	}
}