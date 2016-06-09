import React, { Component } from 'react';

const style = {
	header: {
		background: '#F3F3F3',
		color: 'inherit'
	},
	container: {
		width: '75%',
		position: 'relative',
		margin: '0 auto',
		textAlign: 'center'
	},
	contentCenter: {
		contentJustify: 'center'
	},
	input: {
		marginRight: 20
	}
};

export default class Main extends Component {
	render() {
		return (
			<div className="mdl-layout">
				<div className="mdl-layout__header" style={style.header}>
					<form action="#" className="mdl-layout__container" style={style.container}>
						<div className="mdl-textfield mdl-js-textfield mdl-cell--4-col" style={style.input}>
							<input className="mdl-textfield__input" type="text" id="sample3"/>
							<label className="mdl-textfield__label" htmlFor="sample3">Search GitHub</label>
						</div>
						<button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">Search</button>
					</form>
				</div>
				<main className="mdl-layout__content">
					<div className="page-content mdl-layout__container"  style={style.container}>{this.props.children}</div>
				</main>
			</div>
		);
	}
}
