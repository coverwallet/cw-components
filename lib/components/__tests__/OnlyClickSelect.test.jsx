/* eslint no-use-before-define: 0 */
import React from 'react';
import { mount } from 'enzyme';

import OnlyClickSelect from '../OnlyClickSelect';

describe('OnlyClickSelect', () => {
  describe('keypress event', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      props = {
        options: [
          {
            label: 'option',
            value: 'option',
          },
        ],
        onEnterKeyPress: jest.fn(),
      };
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
  });

  describe('dropdown', () => {
    beforeEach(() => {
      props = {
        dropdown: true,
        options: [
          {
            label: 'option',
            value: 'option',
          },
        ],
      };
    });

    it('list is closed when dropdown', () => {
      const component = renderComponent();

      expect(component.find('.oc-select__options-container').exists()).toBeFalsy();
    });

    it('list is open when you click on the input', () => {
      const component = renderComponent();
      component.find('.oc-select__search').simulate('click');

      expect(component.find('.oc-select__options-container').exists()).toBeTruthy();
    });

    it('list is closed when you double click on the input', () => {
      const component = renderComponent();
      component.find('.oc-select__search').simulate('click');
      component.find('.oc-select__search').simulate('click');

      expect(component.find('.oc-select__options-container').exists()).toBeFalsy();
    });

    it('if you do NOT have dropdown, list is displayed', () => {
      props.dropdown = false;
      const component = renderComponent();

      expect(component.find('.oc-select__options-container').exists()).toBeTruthy();
    });

    it('if you do NOT have dropdown, and click, the list continue visible', () => {
      props.dropdown = false;
      const component = renderComponent();
      component.find('.oc-select__search').simulate('click');

      expect(component.find('.oc-select__options-container').exists()).toBeTruthy();
    });
  });

  let props;

  const renderComponent = () => mount(<OnlyClickSelect {...props} />);

  const typeIn = (component, input, text) => {
    input.simulate('change', { target: { value: text } });
    component.update();
  };

  const pressEnterKey = input => input.simulate('keypress', { key: 'Enter' });
});
