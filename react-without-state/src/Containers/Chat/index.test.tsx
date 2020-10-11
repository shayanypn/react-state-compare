import React from 'react';
import { shallow } from 'enzyme';
import Chat from './index';

describe('Chat Component', () => {
  test('render correctly', () => {
    const wrapper = shallow(<Chat />);
    expect(wrapper.exists()).toBe(true);
  });
});
