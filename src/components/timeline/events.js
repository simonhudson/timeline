'use strict';

import React from 'react';
import './css/styles.scss';
import { hasItems } from '~/utilities/array';

const Events = props => {
    if (!props || !hasItems(props.events)) return null;

    return (
        <div className="timeline__events" data-test="timeline__events"></div>
    );
};

export default Events;
