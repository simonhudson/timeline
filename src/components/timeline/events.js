'use strict';

import React from 'react';
import hasItems from '~/utilities/array/hasItems';

const Events = (props) => {
	if (!props || !hasItems(props.events)) return null;

	return (
		<div className="timeline__events" data-test="timeline__events">
			{props.events.map((event, index) => {
				return (
					<div key={index}>
						<p className="timeline__event-title">{event.title}</p>
						{event.content && <p>{event.content}</p>}
					</div>
				);
			})}
		</div>
	);
};

export default Events;
