import React  from 'react';
import {shallow} from 'enzyme';
import { config } from "../config";
import {Withdraw} from './Withdraw';
import {INIT_JARS} from '../redux/constants';

describe("Withdraw", () => {
    const mockWithdrawJar = jest.fn();

    const props = {withdrawJar: mockWithdrawJar, jars: INIT_JARS};
    const withdraw = shallow(<Withdraw {...props}/>);
    it("renders properly", () => {
        expect(withdraw).toMatchSnapshot();
    });

    describe("user enters a new withdraw", () => {
        const input = 10;
        beforeEach(() => {
            withdraw.find('.withdraw-input').simulate('change', {target: {
                value: input
            }});
        });

        it("saves the entered value to local state", () => {
            expect(withdraw.state().withdraw).toEqual(input);
        });
    });

    describe("users submits a withdraw", () => {
        beforeEach(() => {
            withdraw.find('.withdraw-btn').simulate('click');
        });

        it("clears the local state", () => {
            expect(withdraw.state().withdraw).toEqual(0);
        });

        it("triggers `withdrawJar()` method from props", () => {
            expect(mockWithdrawJar).toHaveBeenCalled();
        })
    });
});