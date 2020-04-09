'use strict';

import React from 'react';
import './css/styles.scss';
import { hasItems } from '~/utilities/array';
import YearMarker from './yearMarker';

const generateYearMarkers = props => {
    let yearMarkers = [];
    for (let x = props.currentYear; x >= props.currentPerson.birthYear; x--) {
        yearMarkers.push(<YearMarker year={x} />);
    }
    return yearMarkers;
};

const Timeline = props => {
    if (
        !props ||
        !hasItems(props.people) ||
        !props.currentPerson ||
        !props.currentYear
    )
        return null;

    const { currentPerson } = props;

    return (
        <div data-test="timeline">
            <h2>{currentPerson.fullName}</h2>
            {generateYearMarkers(props)}
        </div>
    );
};

export default Timeline;
