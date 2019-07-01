import React from 'react';
import {shallow} from 'enzyme';
import config from '../config';

import {AdvancedSetting} from './AdvancedSetting';

describe("AdvancedSetting", () => {
    const advancedSetting = shallow(<AdvancedSetting/>);

    it('renders', () => {
        expect(advancedSetting).toMatchSnapshot();
    })
})
