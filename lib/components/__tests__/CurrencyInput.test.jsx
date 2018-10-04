import React from 'react';
import { mount } from 'enzyme';

import { CurrencyInput } from '../../index';


describe('CurrencyInput', () => {
  it('should have span with class "currency-input__icon--dollar"', () => {
    expect(mount(<CurrencyInput />).find('.currency-input__icon--dollar').length).toBe(1);
  });
  it('should have span with class "currency-input__icon--euro"', () => {
    expect(mount(<CurrencyInput currencyType="euro" />).find('.currency-input__icon--euro').length).toBe(1);
  });
  it('should admit only 2 decimal values', () => {
    const wrapper = mount(<CurrencyInput value="23.123" />);
    expect(wrapper.find('input').props().value).toBe('23.12');
  });
  it('should allow negative values', () => {
    const wrapper = mount(<CurrencyInput
      value="-54"
    />);
    expect(wrapper.find('input').props().value).toBe('-54');
  });

  describe('thousandsSeparator and decimalSeparator', () => {
    it('should add thousandsSeparator', () => {
      const wrapper = mount(<CurrencyInput value="1000000" />);
      expect(wrapper.find('input').props().value).toBe('1,000,000');
    });
    it('should allow use another thousandsSeparator', () => {
      const wrapper = mount(<CurrencyInput
        value={1000000.23}
        thousandsSeparator=" "
      />);
      expect(wrapper.find('input').props().value).toBe('1 000 000.23');
    });
    it('should allow use another decimalSeparator', () => {
      const wrapper = mount(<CurrencyInput
        value={1000000.23}
        decimalSeparator=" "
      />);
      expect(wrapper.find('input').props().value).toBe('1,000,000 23');
    });
  });
  describe('min', () => {
    it('should set value to min when value is smaller than min', () => {
      const wrapper = mount(<CurrencyInput
        value="-4000"
        min={-200}
      />);
      expect(wrapper.find('input').props().value).toBe('-200');
    });
  });
  describe('max', () => {
    it('should set value to max when value is bigger than max', () => {
      const wrapper = mount(<CurrencyInput
        value="400000"
        max={10000}
      />);
      expect(wrapper.find('input').props().value).toBe('10,000');
    });
  });
  describe('setValue', () => {
    it('should pass value to setValue as a Number', () => {
      let testValue;
      const setValueTest = value => {
        testValue = value;
      };
      const wrapper = mount(<CurrencyInput
        value={10000}
        setValue={setValueTest}
      />);
      const currencyInput = wrapper.find('input');
      expect(currencyInput.props().value).toBe('10,000');
      currencyInput.simulate('change', { target: { value: '100' } });
      expect(currencyInput.props().value).toBe('100');
      expect(testValue).toBe(100);
    });
  });
});
