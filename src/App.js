'use strict';

import React, { Component } from 'react';
import '~/assets/css/styles.scss';
import people from '~/data/people.json';
import Timeline from '~/components/timeline';
import SelectPerson from '~/components/select-person';

const moment = require('moment');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentYear: moment().year()
        };
    }

    mutateData = () => {
        people.forEach(person => {
            person.age = moment().diff(moment(person.dateOfBirth), 'years');
            person.birthYear = moment(person.dateOfBirth).year();
            person.fullName = `${person.firstName} ${person.lastName}`;
        });
    };

    componentDidMount = () => {
        this.mutateData();
        this.setState({ people, currentPerson: people[0] });
    };

    setCurrentPerson = e => {
        const currentPerson = this.state.people.filter(
            person => person.fullName === e.target.value
        )[0];
        this.setState({ currentPerson });
    };

    render = () => {
        const { state } = this;
        return (
            <>
                <h1>Timeline</h1>
                <SelectPerson
                    onChange={this.setCurrentPerson}
                    people={state.people}
                />
                <Timeline
                    people={state.people}
                    currentPerson={state.currentPerson}
                    currentYear={state.currentYear}
                />
            </>
        );
    };
}

export default App;
