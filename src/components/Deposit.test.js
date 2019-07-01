import React from 'react';
import {shallow} from 'enzyme';
import config from '../config';
import {Deposit} from './Deposit';
import * as constants from '../redux/constants';

describe("deposit", () => {
    const mockSetJars = jest.fn();
    const props = {setJars: mockSetJars, jars: constants.INIT_JARS};
    const deposit = shallow(<Deposit {...props}/>);
    it("renders", () => {
        expect(deposit).toMatchSnapshot();
    })


    describe('user adds a deposit', () => {

        var newDeposit = 10;

        beforeEach(() => {
            deposit.find('.deposit-input').simulate('change',{target: {value: newDeposit}});
        });
        it("saves deposit that user inputs to local `state`", () => {
            expect(deposit.state().deposit).toEqual(newDeposit);
        })

        describe('user submits a new deposit', () => {
            beforeEach(() => {
                deposit.find('.deposit-btn').simulate('click');
            });

            it('triggers the `setJars()` method received from props', () => {
                expect(mockSetJars).toHaveBeenCalled();
            })
            
           

            it("clears the local state", () => {
                expect(deposit.state().deposit).toEqual(0);
            });
        })
       
    });
})