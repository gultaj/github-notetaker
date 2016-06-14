import React, {Component} from 'react';

export default class AddNote extends Component {
	static propTypes = {
		addNote: React.PropTypes.func.isRequired
	};

	handleSubmit() {
		this.props.addNote(this.refs.note.value);
		this.refs.note.value = '';
	}

	render() {
		return (
			<form className="">
				<div className="mdl-textfield mdl-js-textfield">
					<input className="mdl-textfield__input" type="text" ref='note' id="note"/>
					<label className="mdl-textfield__label" htmlFor="note">New note</label>
				</div>
				<button type="submit" onClick={() => this.handleSubmit()} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Add</button>
			</form>
		);
	}
}