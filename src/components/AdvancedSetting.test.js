import React from 'react';
import {mount} from 'enzyme';
import config from '../config';

import {AdvancedSetting} from './AdvancedSetting';

describe("AdvancedSetting", () => {
    const mockSetJars = jest.fn();
    const advancedSetting = mount(<AdvancedSetting setJars={mockSetJars}/>);

    it('renders', () => {
        expect(advancedSetting).toMatchSnapshot();
    });

    describe("users toggles the advanced settings", () =>{
        beforeAll(() => {
            advancedSetting.find('.show-advance-btn').simulate('click');
        })
        it('switches `show` in local state', () => {
            expect(advancedSetting.state().show).toBe(true);
        });
        it('shows the advanced settings div', () => {
            expect(advancedSetting.find('h4').text()).toEqual('⚠️Advanced Setting⚠️');
        });
        it('contains a text input `advanced-setting-input`', () => {
            expect(advancedSetting.find('.advanced-setting-input').exists()).toBe(true);
        });

        describe("when the user enters a input in `advanced-setting-input`", () => {
            const input = "{\"NEC\":10,\"FFA\":0,\"GIV\":0,\"PLA\":0,\"EDU\":0,\"LTS\":0}";
            beforeAll(() => {
                advancedSetting.find('.advanced-setting-input').simulate('change', {target: {value: input}});
            })
            it("pushes the change to local `state`", () => {
                expect(advancedSetting.state().jars).toEqual(input);
            });

            describe("the user presses the `advanced-setting-btn`", () => {
                const defaultState = "{\"NEC\":0,\"FFA\":0,\"GIV\":0,\"PLA\":0,\"EDU\":0,\"LTS\":0}";
                beforeAll(() => {
                    advancedSetting.find('.advanced-setting-btn').simulate('click');
                })

                it('resets the local state of `jars`', () => {
                    expect(advancedSetting.state().jars).toEqual(defaultState);
                });

                it('triggers the `setJars()` method from props', () => {
                    expect(mockSetJars).toHaveBeenCalled();
                })
            })
        })
    });
});
