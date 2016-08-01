import React, { Component } from 'react';
import Search from './Search';

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
	}
};

export default class Main extends Component {
	render() {
		return (
			<div className="mdl-layout">
				<div className="mdl-layout__header" style={style.header}>
					<Search />
				</div>
				<main className="mdl-layout__content">
					<div className="page-content mdl-layout__container"  style={style.container}>{this.props.children}</div>
				</main>
			</div>
		);
	}
}
