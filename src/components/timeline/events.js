'use strict';

import React from 'react';
import hasItems from '~/utilities/array/hasItems';
import { Wrap, Title } from './events.styles';

const Events = (props) => {
	if (!props || !hasItems(props.events)) return null;

	return (
		<Wrap data-test="timeline__events">
			{props.events.map((event, index) => {
				return (
					<div key={index}>
						<Title>{event.title}</Title>
						{event.content && <p>{event.content}</p>}
					</div>
				);
			})}
		</Wrap>
	);
};

export default Events;
