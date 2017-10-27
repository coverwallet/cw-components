import React from 'react';
import { mount } from 'enzyme';

import { NumberInput } from '../../index';


describe('NumberInput', () => {
  it('should has span with class "number-input__currency--dollaricon"', () => {
    expect(mount(<NumberInput currency />).find('.number-input__currency--dollaricon').length).toBe(1);
  });

  it('should has span with class "number-input__currency--euroicon"', () => {
    expect(mount(<NumberInput currency currencyType="euro" />).find('.number-input__currency--euroicon').length).toBe(1);
  });
});
