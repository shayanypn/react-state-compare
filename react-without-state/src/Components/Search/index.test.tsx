import React from 'react';
import { shallow } from 'enzyme';
import Search from './index';

describe('Search Component', () => {
  test('render correctly', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.exists()).toBe(true);
  });
});
