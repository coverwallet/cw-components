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
});
