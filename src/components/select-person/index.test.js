'use strict';

import React from 'react';
import { mount } from 'enzyme';
import SelectPerson from './index';
const cloneDeep = require('lodash/cloneDeep');
import {
    assertElementExists,
    assertElementDoesNotExist
} from '&/tests/utilities';

const baseProps = {
    people: [
        { firstName: 'Joe', lastName: 'Bloggs', dateOfBirth: '1980-01-01' },
        { firstName: 'Jane', lastName: 'Doe', dateOfBirth: '1982-08-08' }
    ],
    onChange: jest.fn()
};

describe('SelectPerson', () => {
    let objectUnderTest;
    const selector = `select[data-test="select-person"]`;

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

    it('should return null if no onChange prop is passed', () => {
        const props = cloneDeep(baseProps);
        delete props.onChange;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should return null if onChange prop is not a function', () => {
        const props = cloneDeep(baseProps);
        props.onChange = 'string';
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
    });

    const initialise = props =>
        (objectUnderTest = mount(<SelectPerson {...props} />));
});
