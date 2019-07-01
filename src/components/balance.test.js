import React from 'react';
import config from '../config';
import {shallow} from 'enzyme';
import {Balance} from './balance';
import {updateJars} from '../helpers';
import * as constants from '../redux/constants';


describe("balance", () => {
    const mockSetJars = jest.fn();
    const mockWithdrawJar = jest.fn();
    const balance = shallow(<Balance setJars={mockSetJars} jars={constants.INIT_JARS} withdrawJar={mockWithdrawJar}/>);
    it("renders", () => {
        expect(balance).toMatchSnapshot();
    })
    

   it("contains a card component", () => {
    expect(balance.find(".balance-card").exists()).toBe(true);
   });



    
})