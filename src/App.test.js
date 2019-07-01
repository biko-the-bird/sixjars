import React from 'react';
import config from './config';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App/>);
  it("renders on the page", () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a Connect(Balance) component', () => {
    expect(app.find('Connect(Balance)').exists()).toBe(true);
  });
  it('contains a Connect(Deposit) component', () => {
    expect(app.find('Connect(Deposit)').exists()).toBe(true);
  });
  it('contains a Connect(Withdraw) component', () => {
    expect(app.find('Connect(Withdraw)').exists()).toBe(true);
  });
});
