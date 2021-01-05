'use strict';

import React from 'react';
import { mount } from 'enzyme';
import YearMarker from './year-marker';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist } from '~/config/tests/utilities';

const baseProps = {
	year: 1981,
	onClick: jest.fn()
};

describe('YearMarker', () => {
	let objectUnderTest;
	const selector = `div[data-test="timeline__year-marker"]`;

	afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

	it('should return null if no year prop passed', () => {
		const props = cloneDeep(baseProps);
		delete props.year;
		initialise(props);
		assertElementDoesNotExist(objectUnderTest, selector);
	});

	it('should return null if year prop is not a number', () => {
		const props = cloneDeep(baseProps);
		props.year = true;
		initialise(props);
		assertElementDoesNotExist(objectUnderTest, selector);
	});

	it('should render as expected', () => {
		const props = cloneDeep(baseProps);
		initialise(props);
		assertElementExists(objectUnderTest, selector);
		expect(objectUnderTest.find(selector).text()).toEqual('1981');
	});

	// it('should handle click event', () => {
	// 	const props = cloneDeep(baseProps);
	// 	initialise(props);
	// 	objectUnderTest.find('button').simulate('click');
	// 	expect(props.onClick).toHaveBeenCalledTimes(1);
	// });

	const initialise = (props) => (objectUnderTest = mount(<YearMarker {...props} />));
});
