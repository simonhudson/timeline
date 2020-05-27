'use strict';

import React from 'react';
import { mount } from 'enzyme';
import Events from './events';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '~/config/tests/utilities';

const baseProps = {
	events: [
		{ title: 'Event 1', year: '1984', content: 'Content 1' },
		{ title: 'Event 2', year: '1986', content: 'Content 2' },
	],
};

describe('Events', () => {
	let objectUnderTest;
	const selector = `div[data-test="timeline__events"]`;

	afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

	it('should return null if no events prop passed', () => {
		const props = cloneDeep(baseProps);
		delete props.events;
		initialise(props);
		assertElementDoesNotExist(objectUnderTest, selector);
	});

	it('should return null if events prop is an empty array', () => {
		const props = cloneDeep(baseProps);
		props.events = [];
		initialise(props);
		assertElementDoesNotExist(objectUnderTest, selector);
	});

	it('should render as expected', () => {
		const props = cloneDeep(baseProps);
		initialise(props);
		assertElementExists(objectUnderTest, selector);
	});

	const initialise = (props) => (objectUnderTest = mount(<Events {...props} />));
});
