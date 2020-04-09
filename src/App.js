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
            currentPerson: null
        };
    }

    mutateData = () => {
        people.forEach(person => {
            person.age = moment().diff(moment(person.dateOfBirth), 'years');
            person.fullName = `${person.firstName} ${person.lastName}`;
        });
    };

    componentDidMount = () => {
        this.mutateData();
        this.setState({ people });
    };

    setCurrentPerson = e => this.setState({ currentPerson: e.target.value });

    getCurrentPerson = () => {
        if (this.state.people) {
            return this.state.people.filter(
                person => person.fullName === this.state.currentPerson
            )[0];
        }
    };

    render = () => {
        const { state } = this;
        return (
            <>
                <h1>Timeline</h1>
                {this.state.currentPerson && (
                    <h2>{this.state.currentPerson}</h2>
                )}
                <SelectPerson
                    onChange={this.setCurrentPerson}
                    people={state.people}
                />
                <Timeline
                    people={state.people}
                    currentPerson={state.currentPerson}
                />
            </>
        );
    };
}

export default App;
