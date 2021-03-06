import React from 'react';
import config from './config';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App/>);
  it("renders on the page", () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a AuthLayer component', () => {
    expect(app.find('AuthLayer').exists()).toBe(true);
  
  });
  it('contains a Connect(Deposit) component', () => {
    expect(app.find('Connect(Deposit)').exists()).toBe(true);
  });
  it('contains a Connect(Withdraw) component', () => {
    expect(app.find('Connect(Withdraw)').exists()).toBe(true);
  });
  it('contains a Connect(AdvancedSetting) component', () => {
    expect(app.find('Connect(AdvancedSetting)').exists()).toBe(true);
  });
  it('contains a VisContainer component', () => {
    expect(app.find('VisContainer').exists()).toBe(true);
  });
  
});
