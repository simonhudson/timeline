'use strict';

import React from 'react';
import './css/styles.scss';
import { hasItems } from '~/utilities/array';

const Timeline = props => {
    if (!props || !hasItems(props.people)) return null;

    return <div data-test="timeline">timeline</div>;
};

export default Timeline;
