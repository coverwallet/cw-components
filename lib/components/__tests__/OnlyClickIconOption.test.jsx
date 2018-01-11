import React from 'react';
import { shallow } from 'enzyme';

import { OnlyClickIconOption } from '../../index';

describe('OnlyClickIconOption', () => {
  describe('disabled option', () => {
    it('should has "oc-list-option--disabled" class', () => {
      expect(shallow(<OnlyClickIconOption value="Yes" label="Yes" disabled />).is('.oc-icon-option--disabled')).toBe(true);
    });

    it('should has no "oc-list-option--disabled" class ', () => {
      expect(shallow(<OnlyClickIconOption value="Yes" label="Yes" />).is('.oc-icon-option--disabled')).toBe(false);
    });
  });
});
