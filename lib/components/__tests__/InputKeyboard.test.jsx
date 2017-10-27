import React from 'react';
import { mount } from 'enzyme';

import { InputKeyboard } from '../../index';


describe('InputKeyboard', () => {
  it('should has span with class "input-keyboard__currency--dollaricon"', () => {
    expect(mount(<InputKeyboard currency />).find('.input-keyboard__currency--dollaricon').length).toBe(1);
  });

  it('should has span with class "input-keyboard__currency--euroicon"', () => {
    expect(mount(<InputKeyboard currency currencyType="euro" />).find('.input-keyboard__currency--euroicon').length).toBe(1);
  });
});
