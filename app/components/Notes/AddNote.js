import React, {Component} from 'react';

export default class AddNote extends Component {
	static propTypes = {
		addNote: React.PropTypes.func.isRequired
	};

	handleSubmit(e) {
		if (e.key == 'Enter') {
			console.log(this.refs.note.value);
			this.props.addNote(this.refs.note.value);
			this.refs.note.value = '';
		}
	}

	render() {
		return (
			<form className="">
				<div className="mdl-textfield mdl-js-textfield">
					<input className="mdl-textfield__input" placeholder='New note' onKeyPress={::this.handleSubmit} type="text" ref='note' id="note"/>
					<label className="mdl-textfield__label" htmlFor="note">New note</label>
				</div>
			</form>
		);
	}
}