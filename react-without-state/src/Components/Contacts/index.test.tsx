import React from 'react';
import { shallow } from 'enzyme';
import Contacts from './index';

describe('Contacts Component', () => {
  test('render correctly', () => {
    const wrapper = shallow(<Contacts />);
    expect(wrapper.exists()).toBe(true);
  });
});
