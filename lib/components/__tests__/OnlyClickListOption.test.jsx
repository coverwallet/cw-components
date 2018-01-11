import React from 'react';
import { shallow } from 'enzyme';

import { OnlyClickListOption } from '../../index';

describe('OnlyClickListOption', () => {
  describe('disabled option', () => {
    it('should has "oc-list-option--disabled" class', () => {
      expect(shallow(<OnlyClickListOption value="Yes" label="Yes" disabled />).is('.oc-list-option--disabled')).toBe(true);
    });

    it('should has no "oc-list-option--disabled" class ', () => {
      expect(shallow(<OnlyClickListOption value="Yes" label="Yes" />).is('.oc-list-option--disabled')).toBe(false);
    });
  });
});
