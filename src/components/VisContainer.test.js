import React from 'react';
import {shallow} from 'enzyme';
import config from '../config';
import VisContainer from './VisContainer';


describe("vis-container", () => {
    const visContainer = shallow(<VisContainer/>);

    it('renders', () => {
        expect(visContainer).toMatchSnapshot();
    });
    it('contains a Connect(Balance) component', () => {
        expect(visContainer.find('Connect(Balance)').exists()).toBe(true);
    });
    it('contains a Connect(Visualization) component', () => {
        expect(visContainer.find('Connect(Visualization)').exists()).toBe(true);
    });
});

