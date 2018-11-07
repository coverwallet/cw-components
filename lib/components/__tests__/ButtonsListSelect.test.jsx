/* eslint-disable no-use-before-define */
import React from 'react';
import { mount } from 'enzyme';

import { ButtonsListSelect, ButtonsListSelectOption } from '../..';

describe('Buttons List Select', () => {
  describe('pagination', () => {
    it('does NOT render show more button if pagination is NOT enabled', () => {
      const component = renderComponent(PAGINATION_DISABLED_PROPS);
      const viewMoreButton = getViewMoreButton(component);

      expect(viewMoreButton.exists()).toBeFalsy();
    });

    it('renders all options if pagination is NOT enabled', () => {
      const component = renderComponent(PAGINATION_DISABLED_PROPS);
      const options = getOptions(component);

      expect(options.length).toEqual(DEFAULT_PROPS.options.length);
    });

    it('renders 2 options the first time by default', () => {
      const component = renderComponent();
      const options = getOptions(component);

      expect(options.length).toEqual(DEFAULT_OPTIONS_FIRST_PAGE);
    });

    it('renders as many options as itemsToShowFirstRender prop the first time', () => {
      const ITEMS_PER_PAGE = 3;
      const testProps = setProps({ itemsToShowFirstRender: ITEMS_PER_PAGE });
      const component = renderComponent(testProps);
      const options = getOptions(component);

      expect(options.length).toEqual(ITEMS_PER_PAGE);
    });

    it('renders as many options as itemsToShowFirstRender + itemsPerPage the first time view more is clicked', () => {
      const expectedResult = DEFAULT_OPTIONS_FIRST_PAGE + DEFAULT_OPTIONS_PER_PAGE;

      const component = renderComponent();
      clickViewMore(component);
      const options = getOptions(component);

      expect(options.length).toEqual(expectedResult);
    });

    it('renders as many options as the sum of first render options and options per page 2 times when clicking view more button for the second time', () => {
      const expectedResult = DEFAULT_OPTIONS_FIRST_PAGE + (DEFAULT_OPTIONS_PER_PAGE * 2);

      const component = renderComponent();
      clickViewMore(component);
      clickViewMore(component);
      const options = getOptions(component);

      expect(options.length).toEqual(expectedResult);
    });

    it('hides the view more button when all the options are shown', () => {
      const itemsToShowFirstRender = Math.floor(DEFAULT_PROPS.options.length);
      const itemsPerPage = DEFAULT_PROPS.options.length - itemsToShowFirstRender;
      const testProps = setProps({ itemsToShowFirstRender, itemsPerPage });
      const component = renderComponent(testProps);
      clickViewMore(component);
      const viewMoreButton = getViewMoreButton(component);

      expect(viewMoreButton.exists()).toBeFalsy();
    });
  });

  describe('selected options', () => {
    beforeEach(() => {
      DEFAULT_ON_SELECT_CALLBACK.mockReset();
      DEFAULT_ON_DESELECT_CALLBACK.mockReset();
    });

    it('set selected prop of option to true when its value is included in selectedOptions', () => {
      const testProps = setProps({ selectedOptions: [DEFAULT_PROPS.options[0].value] });
      const component = renderComponent(testProps);
      const options = getOptions(component);

      expect(options.first().prop('selected')).toBeTruthy();
    });

    it('does NOT set selected prop of option to false when its value is NOT included in selectedOptions', () => {
      const testProps = setProps({ selectedOptions: [DEFAULT_PROPS.options[0].value] });
      const component = renderComponent(testProps);
      const options = getOptions(component);

      expect(options.last().prop('selected')).toBeFalsy();
    });

    it('calls the onSelect prop when an option is clicked once', () => {
      const component = renderComponent();
      const firstOption = getOptions(component).first();
      clickOption(firstOption, component);

      expect(DEFAULT_ON_SELECT_CALLBACK).toBeCalledWith(firstOption.props().value);
    });

    it('does NOT call the onSelect prop twice when an option is clicked twice', () => {
      const component = renderComponent();
      const firstOption = getOptions(component).first();
      clickOption(firstOption, component);
      clickOption(firstOption, component);

      expect(getNumberOfCalls(DEFAULT_ON_SELECT_CALLBACK)).toEqual(1);
    });

    it('calls the onDeselect prop when an option is clicked twice', () => {
      const component = renderComponent();
      const firstOption = getOptions(component).first();
      clickOption(firstOption, component);
      clickOption(firstOption, component);

      expect(DEFAULT_ON_DESELECT_CALLBACK).toBeCalledWith(firstOption.props().value);
    });
  });

  const DEFAULT_OPTIONS_FIRST_PAGE = 2;
  const DEFAULT_OPTIONS_PER_PAGE = 3;
  const DEFAULT_ON_SELECT_CALLBACK = jest.fn();
  const DEFAULT_ON_DESELECT_CALLBACK = jest.fn();
  const EXAMPLE_INSURANCE_TYPE = {
    name: 'Business Owners Policy (BOP)',
    label: 'Business Owners Policy (BOP)',
    value: 'Business Owners Policy (BOP)',
    slug: 'business-owners-policy-bop',
    notes: 'notes',
    what_is_it: ' what_is_it',
    why_get_it: 'why_get_it',
    tooltip_key: 'tooltip_key',
    display_order: 1,
    icon_name: 'business_owners_policy_bop',
    iconClass: 'business_owners_policy_bop',
    formatted_text: null,
  };

  const createOptionsExample = () => (
    [0, 1, 2, 3, 4, 5, 6, 7].map(key => ({ ...EXAMPLE_INSURANCE_TYPE, value: EXAMPLE_INSURANCE_TYPE.value + key }))
  );

  const EXAMPLE_OPTIONS = createOptionsExample();

  const DEFAULT_PROPS = {
    options: EXAMPLE_OPTIONS,
    onSelect: DEFAULT_ON_SELECT_CALLBACK,
    onDeselect: DEFAULT_ON_DESELECT_CALLBACK,
    itemsToShowFirstRender: DEFAULT_OPTIONS_FIRST_PAGE,
    itemsPerPage: DEFAULT_OPTIONS_PER_PAGE,
  };


  const setProps = props => Object.assign({}, DEFAULT_PROPS, props);
  const PAGINATION_DISABLED_PROPS = Object.assign({}, DEFAULT_PROPS, { viewMoreEnabled: false });
  const renderComponent = (props = DEFAULT_PROPS) => mount(<ButtonsListSelect {...props} />);
  const getOptions = component => component.find(ButtonsListSelectOption);
  const getViewMoreButton = component => component.find('button');

  const clickViewMore = component => {
    getViewMoreButton(component).simulate('click');
    component.update();
  };

  const clickOption = (option, component) => {
    option.simulate('click');
    component.update();
  };

  const getNumberOfCalls = fn => fn.mock.calls.length;
});
