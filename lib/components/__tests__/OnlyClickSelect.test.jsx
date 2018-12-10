/* eslint no-use-before-define: 0 */
import React from 'react';
import { mount } from 'enzyme';

import OnlyClickSelect from '../OnlyClickSelect';

describe('OnlyClickSelect', () => {
  describe('keypress event', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    it('calls onEnterKeyPress prop with the input value when Enter key is pressed', () => {
      const keyword = 'text';
      const component = renderComponent();
      const input = component.find('.oc-select__input');
      typeIn(component, input, keyword);
      pressEnterKey(input);

      expect(component.prop('onEnterKeyPress')).toHaveBeenCalledWith(keyword);
    });

    it('does NOT call onEnterKeyPress prop when pressing a key that is NOT the Enter key', () => {
      const component = renderComponent();
      const input = component.find('.oc-select__input');
      input.simulate('keypress', { key: 'a' });

      expect(component.prop('onEnterKeyPress')).not.toHaveBeenCalled();
    });

    const props = {
      options: [
        {
          label: 'option',
          value: 'option',
        },
      ],
      onEnterKeyPress: jest.fn(),
    };

    const renderComponent = () => mount(<OnlyClickSelect {...props} />);

    const typeIn = (component, input, text) => {
      input.simulate('change', { target: { value: text } });
      component.update();
    };

    const pressEnterKey = (input) => input.simulate('keypress', { key: 'Enter' });
  });
});
