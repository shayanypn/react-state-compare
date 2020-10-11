import React from 'react';
import { shallow } from 'enzyme';
import Messages from './index';

describe('Messages Component', () => {
  test('render correctly', () => {
    const wrapper = shallow(<Messages />);
    expect(wrapper.exists()).toBe(true);
  });
});
