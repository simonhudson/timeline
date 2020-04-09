'use strict';

import React from 'react';
import './css/styles.scss';

const YearMarker = props => {
    if (!props || typeof props.year !== 'number') return null;

    return (
        <div
            className="timeline__year-marker"
            data-test="timeline__year-marker"
        >
            {props.year}
        </div>
    );
};

export default YearMarker;