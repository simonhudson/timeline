'use strict';

import React, { Component } from 'react';
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

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {};

    render = () => {
        const { props, state } = this;

        if (
            !props ||
            !hasItems(props.people) ||
            !props.currentPerson ||
            !props.currentYear
        )
            return null;

        return (
            <div data-test="timeline">
                <h2>{props.currentPerson.fullName}</h2>
                <div className="timeline">{generateYearMarkers(props)}</div>
            </div>
        );
    };
}

export default Timeline;
