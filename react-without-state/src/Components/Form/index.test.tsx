import React from 'react';
import { shallow } from 'enzyme';
import Form from './index';

describe('Form Component', () => {
  test('render correctly', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.exists()).toBe(true);
  });
});
