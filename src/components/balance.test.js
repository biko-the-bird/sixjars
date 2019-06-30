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
    

    describe('user adds a deposit', () => {

        var newDeposit = 10;

        beforeEach(() => {
            balance.find('.deposit-input').simulate('change',{target: {value: newDeposit}});
        });
        it("saves deposit that user inputs to local `state`", () => {
            expect(balance.state().deposit).toEqual(newDeposit);
        })

        describe('user submits a new deposit', () => {
            beforeEach(() => {
                balance.find('.deposit-btn').simulate('click');
            })
            
           

            it("clears the local state", () => {
                expect(balance.state().deposit).toEqual(0);
            });
        })
       
    });



    describe('user makes a withdraw', () => {

        var newWithdraw = 10;

        beforeEach(() => {
            balance.find('.withdraw-input').simulate('change',{target: {value: newWithdraw}});
        });
        it("saves withdraw that user inputs to local `state`", () => {
            expect(balance.state().withdraw).toEqual(newWithdraw);
        })

        describe('user submits a new withdraw', () => {
            beforeEach(() => {
                balance.find('.withdraw-btn').simulate('click');
            })
            
           

            it("clears the local state", () => {
                expect(balance.state().withdraw).toEqual(0);
            });
        })
       
    });
})