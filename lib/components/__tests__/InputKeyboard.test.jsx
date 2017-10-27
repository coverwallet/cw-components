import React from 'react';
import { mount } from 'enzyme';

import { InputKeyboard } from '../../index';


describe('InputKeyboard', () => {
  it('should has span with class "input-keyboard__currency--dollar-icon"', () => {
    expect(mount(<InputKeyboard currency />).find('.input-keyboard__currency--dollar-icon').length).toBe(1);
  });

  it('should has span with class "input-keyboard__currency--euro-icon"', () => {
    expect(mount(<InputKeyboard currency currencyType="euro" />).find('.input-keyboard__currency--euro-icon').length).toBe(1);
  });
});
