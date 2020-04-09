'use strict';

import React from 'react';
import './css/styles.scss';
import { hasItems } from '~/utilities/array';
import YearMarker from './year-marker';

const generateYearMarkers = props => {
    let yearMarkers = [];
    for (let x = props.currentPerson.birthYear; x <= props.currentYear; x++) {
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
            <div className="timeline">{generateYearMarkers(props)}</div>
        </div>
    );
};

export default Timeline;
