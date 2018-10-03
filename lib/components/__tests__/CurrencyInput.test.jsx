import React from 'react';
import { mount } from 'enzyme';

import { CurrencyInput } from '../../index';


describe('CurrencyInput', () => {
  it('should has span with class "currency-input__icon--dollar"', () => {
    expect(mount(<CurrencyInput/>).find('.currency-input__icon--dollar').length).toBe(1);
  });

  it('should has span with class "currency-input__icon--euro"', () => {
    expect(mount(<CurrencyInput currencyType="euro" />).find('.currency-input__icon--euro').length).toBe(1);
  });

  it('should admit only 2 decimal values', () => {
    const wrapper = mount(<CurrencyInput value="23.123"/>);
    //wrapper.find('.number-input__plus').simulate('click');
    expect(wrapper.find('input').props().value).toBe("23.12");
  });

  it('should add thousandsSplitter', () => {
    const wrapper = mount(<CurrencyInput value="1000000"/>);
    expect(wrapper.find('input').props().value).toBe("1,000,000");
  });

  it('should allow use another thousandsSplitter and decimalSplitter', () => {
    const wrapper = mount(<CurrencyInput 
        value="1000000,23"
        decimalSplitter=","
        thousandsSplitter="."
        />);
    expect(wrapper.find('input').props().value).toBe("1.000.000,23");
  });
});
