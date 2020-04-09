'use strict';

import React from 'react';
import { mount } from 'enzyme';
import Timeline from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists } from '&/tests/utilities';

const baseProps = {};

describe('Timeline', () => {
    let objectUnderTest;
    const selector = `div[data-test="timeline"]`;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
    });

    const initialise = props =>
        (objectUnderTest = mount(<Timeline {...props} />));
});
