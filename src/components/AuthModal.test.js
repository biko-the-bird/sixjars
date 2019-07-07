import React from 'react';
import {shallow} from 'enzyme';
import config from '../config';
import AuthModal from './AuthModal'

describe("authModal", () => {
    const authmodal = shallow(<AuthModal/>);
    const expectedUsername = "janedoe";
    const expectedPass = "password";
    it('renders', () => {
        expect(authmodal).toMatchSnapshot();
    });
    describe(('username input'),() => {
        it('contains a input for username', () => {
            expect(authmodal.find('.username-input').exists()).toBe(true);
        });
        describe('when user enters a `username` input', () => {
            
            beforeAll(() => {
                authmodal.find('.username-input').simulate('change', {target: {value: expectedUsername}})
            });
            it("updates the local `state`", () => {
                expect(authmodal.state().username).toEqual(expectedUsername);
            });
        });
        describe('when user enters a `password` input', () => {
            
            beforeAll(() => {
                authmodal.find('.password-input').simulate('change', {target: {value: expectedPass}})
            });
            it("updates the local `state`", () => {
                expect(authmodal.state().password).toEqual(expectedPass);
            });
        });
        describe('when user enters a `password` input', () => {
            const expectedPass = "password";
            beforeAll(() => {
                authmodal.find('.password-input').simulate('change', {target: {value: expectedPass}})
            });
            it("updates the local `state`", () => {
                expect(authmodal.state().password).toEqual(expectedPass);
            });
        });
        describe('only show `login` and `signup` buttons when there is valid input', () => {
            it('contains a ul when there are no inputs', () => {
                expect(authmodal.find('ul').exists()).toBe(true);
            });
            describe ("when there are valid inputs", () => {
                beforeAll(() => {
                    authmodal.find('.username-input').simulate('change', {target: {value: expectedUsername}})
                    authmodal.find('.password-input').simulate('change', {target: {value: expectedPass}})
                });
                it("renders buttons", () => {
                    expect(authmodal.find('button').exists()).toBe(true);
                });
            })
           
        });
    })
   
})