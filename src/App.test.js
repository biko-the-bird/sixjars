import React from 'react';
import config from './config';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App/>);
  it("renders on the page", () => {
    expect(app).toMatchSnapshot();
  })
});
