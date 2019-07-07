import React from 'react';
import {shallow } from 'enzyme';
import config from '../config';
import AuthLayer from './AuthLayer';

describe("AuthLayer", () => {
    var authLayer = shallow(<AuthLayer/>);
    it('renders', () => {
        expect(authLayer).toMatchSnapshot();
    })
})