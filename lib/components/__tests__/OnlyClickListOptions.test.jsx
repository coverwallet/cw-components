import React from 'react';
import { mount } from 'enzyme';

import { OnlyClickListOptions } from '../../index';

describe('OnlyClickListOptions', () => {
  describe('selectedOptions', () => {
    it('should be optional', () => {
      const options = [{
        value: 'Value',
        label: 'Label',
      }];
      const wrapper = mount(<OnlyClickListOptions
        options={options}
      />);

      expect(wrapper.props().options).toBe(options);
    });
  });
});
