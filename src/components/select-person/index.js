'use strict';

import React from 'react';
import './css/styles.scss';
import { hasItems } from '~/utilities/array';

const SelectPerson = props => {
    if (
        !props ||
        !hasItems(props.people) ||
        typeof props.onChange !== 'function'
    )
        return null;

    return (
        <select
            data-test="select-person"
            id="select-person"
            onChange={e => props.onChange(e)}
        >
            {props.people.map((person, index) => {
                return (
                    <option key={index} value={person.fullName}>
                        {person.fullName}
                    </option>
                );
            })}
        </select>
    );
};

export default SelectPerson;
