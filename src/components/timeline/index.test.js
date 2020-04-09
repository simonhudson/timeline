'use strict';

import React from 'react';
import { mount } from 'enzyme';
import Timeline from './index';
const cloneDeep = require('lodash/cloneDeep');
import {
    assertElementExists,
    assertElementDoesNotExist
} from '&/tests/utilities';

const baseProps = {
    people: [
        { firstName: 'Joe', lastName: 'Bloggs', dateOfBirth: '1980-01-01' },
        { firstName: 'Jane', lastName: 'Doe', dateOfBirth: '1982-08-08' }
    ]
};
baseProps.currentPerson = baseProps.people[0];
baseProps.currentYear = 2020;

describe('Timeline', () => {
    let objectUnderTest;
    const selector = `div[data-test="timeline"]`;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

    it('should return null if no people prop passed', () => {
        const props = cloneDeep(baseProps);
        delete props.people;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null if people prop is empty array', () => {
        const props = cloneDeep(baseProps);
        props.people = [];
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null if no currentPerson prop is passed', () => {
        const props = cloneDeep(baseProps);
        delete props.currentPerson;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null if no currentYear prop is passed', () => {
        const props = cloneDeep(baseProps);
        delete props.currentYear;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
    });

    const initialise = props =>
        (objectUnderTest = mount(<Timeline {...props} />));
});
