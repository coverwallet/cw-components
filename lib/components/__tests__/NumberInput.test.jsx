import React from 'react';
import { mount } from 'enzyme';

import { NumberInput } from '../../index';


describe('NumberInput', () => {
  it('should has span with class "number-input__currency--dollar-icon"', () => {
    expect(mount(<NumberInput currency />).find('.number-input__currency--dollar-icon').length).toBe(1);
  });

  it('should has span with class "number-input__currency--euro-icon"', () => {
    expect(mount(<NumberInput currency currencyType="euro" />).find('.number-input__currency--euro-icon').length).toBe(1);
  });

  it('should increment from 1 if firstIncrement is not set', () => {
    const wrapper = mount(<NumberInput />);
    wrapper.find('.number-input__plus').simulate('click');
    expect(wrapper.find('input').props().value).toBe(1);
  });

  it('should show firstIncrement when increment for first time if it exists', () => {
    const firstIncrement = 2018;
    const wrapper = mount(<NumberInput firstIncrement={firstIncrement} />);
    wrapper.find('.number-input__plus').simulate('click');
    expect(wrapper.find('input').props().value).toBe(firstIncrement);
  });

  it('should mantain the input empty when clicking minus if value is not set', () => {
    const wrapper = mount(<NumberInput />);
    wrapper.find('.number-input__minus').simulate('click');
    expect(wrapper.find('input').props().value).toBe('');
  });

  it('should show firstDecrement when decrement for first time if it exists', () => {
    const firstDecrement = 2017;
    const wrapper = mount(<NumberInput firstDecrement={firstDecrement} />);
    wrapper.find('.number-input__minus').simulate('click');
    expect(wrapper.find('input').props().value).toBe(firstDecrement);
  });
});
