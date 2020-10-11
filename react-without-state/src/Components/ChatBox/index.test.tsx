import React from 'react';
import { shallow } from 'enzyme';
import ChatBox from './index';

describe('ChatBox Component', () => {
  test('render correctly', () => {
    const wrapper = shallow(<ChatBox />);
    expect(wrapper.exists()).toBe(true);
  });
});
