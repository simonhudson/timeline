'use strict';

import React from 'react';
import './css/styles.scss';

const YearMarker = props => {
    return <div data-test="year-marker">{props.year}</div>;
};

export default YearMarker;
