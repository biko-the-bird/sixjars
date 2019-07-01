import React from 'react';
import {shallow} from 'enzyme';
import config from '../config';
import Footer from './Footer';


describe("footer", () => {
    const footer = shallow(<Footer/>);
    it("renders", () => {
        expect(footer).toMatchSnapshot();
    });
   
})