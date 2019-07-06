import React from 'react';
import {mount} from 'enzyme';
import config from '../config';
import {Visualization} from './Visualization';

describe("Visualization", () => {
    const jars = {NEC: 55, FFA: 10,GIV: 5, PLA: 10,EDU: 10,LTS: 10};
    const visualization = mount(<Visualization jars={jars}/>);

    it("renders", () => {
        expect(visualization).toMatchSnapshot();
    });


    

    it('contains a `piechart` component', () => {
        console.log(visualization.state());
    
            
        expect(visualization.find("PieChart").exists()).toBe(true);
    });

    it('formats `jars` from props from obj to arr', () => {
        var formatted = [{'NEC': 55}, {'FFA': 10},{'GIV': 5}, {'PLA': 10},{'EDU': 10},{'LTS': 10}]
        expect(visualization.state().formatted).toEqual(formatted);
    });
    

   
})