'use strict';

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import YearMarker from './year-marker';
const cloneDeep = require('lodash/cloneDeep');
import {
    assertElementExists,
    assertElementDoesNotExist
} from '&/tests/utilities';

const baseProps = {
    year: 1981
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
        expect(objectUnderTest.find(selector).text()).to.equal('1981');
    });

    const initialise = props =>
        (objectUnderTest = mount(<YearMarker {...props} />));
});
