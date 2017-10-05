import React from 'react';
import { shallow } from 'enzyme';
import Router from './index';

describe('Router spec', () => {
  it('should render', () => {
    const component = shallow(<Router />);
    expect(component.isEmptyRender()).toBe(false);
  });
});
