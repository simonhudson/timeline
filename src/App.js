'use strict';

import React, { Component } from 'react';
import '~/assets/css/styles.scss';
import people from '~/data/people.json';
import Timeline from '~/components/timeline';

const moment = require('moment');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    mutateData = () => {
        people.forEach(person => {
            person.age = moment().diff(moment(person.dateOfBirth), 'years');
        });
    };

    componentDidMount = () => {
        this.mutateData();
        this.setState({ people });
    };

    render = () => {
        return (
            <>
                <Timeline />
            </>
        );
    };
}

export default App;
