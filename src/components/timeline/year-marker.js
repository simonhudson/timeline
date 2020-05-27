'use strict';

import React, { Component } from 'react';
import Events from './events';
import hasItems from '~/utilities/array/hasItems';

const setClassName = (props) => {
	const classNames = ['timeline__year-marker'];
	if (hasItems(props.events)) classNames.push('timeline__year-marker--has-items');
	return classNames.join(' ');
};

class YearMarker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showEvents: false,
		};
	}

	componentDidMount = () => {};

	toggleEvents = () => {
		const newState = !this.state.showEvents;
		this.setState({ showEvents: newState });
	};

	render = () => {
		const { props, state } = this;
		if (!props || typeof props.year !== 'number') return null;

		return (
			<div className={setClassName(props)} data-test="timeline__year-marker">
				<button onClick={this.toggleEvents}>{props.year}</button>
				{state.showEvents && <Events events={props.events} />}
			</div>
		);
	};
}

export default YearMarker;
