'use strict';

import React, { Component } from 'react';
import people from '~/data/people';
import Timeline from '~/components/timeline';
import SelectPerson from '~/components/select-person';
const moment = require('moment');
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentYear: moment().year(),
		};
	}

	mutateData = () => {
		people.forEach((person) => {
			person.age = moment().diff(moment(person.dateOfBirth), 'years');
			person.birthYear = moment(person.dateOfBirth).year();
			person.fullName = `${person.firstName} ${person.lastName}`;
		});
	};

	setCurrentPerson = (e) => {
		const currentPerson = this.state.people.filter((person) => person.fullName === e.target.value)[0];
		this.setState({ currentPerson });
	};

	componentDidMount = () => {
		this.mutateData();
		this.setState({ people, currentPerson: people[0] });
	};

	render = () => {
		const { props, state } = this;
		return (
			<>
				<props.theme.layout.Wrap>
					<props.theme.typography.H1>Timeline</props.theme.typography.H1>
					<SelectPerson onChange={this.setCurrentPerson} people={state.people} />
					<Timeline
						people={state.people}
						currentPerson={state.currentPerson}
						currentYear={state.currentYear}
					/>
				</props.theme.layout.Wrap>
			</>
		);
	};
}

export default Home;
