'use strict';

import React, { Component } from 'react';
import Events from './events';
import hasItems from '~/utilities/array/hasItems';
import { Marker, Button } from './year-marker.styles';

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
			<Marker hasItems={hasItems(props.events)} data-test="timeline__year-marker">
				<Button onClick={this.toggleEvents}>{props.year}</Button>
				{state.showEvents && <Events events={props.events} />}
			</Marker>
		);
	};
}

export default YearMarker;
