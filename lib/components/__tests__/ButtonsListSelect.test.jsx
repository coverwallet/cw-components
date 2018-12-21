/* eslint-disable no-use-before-define */
import React from 'react';
import { mount } from 'enzyme';

import { ButtonsListSelect, ButtonsListSelectOption, AccordionSelect } from '../..';

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

    it('renders the "Show More" button although the options left are options.length - 1', () => {
      const testProps = setProps({
        options: EXAMPLE_OPTIONS.slice(0, 4),
        itemsToShowFirstRender: 1,
        itemsPerPage: 2,
      });

      const component = renderComponent(testProps);
      clickViewMore(component);
      const viewMoreButton = getViewMoreButton(component);

      expect(viewMoreButton.exists()).toBeTruthy();
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

    it('calls the onSelect prop when an option is clicked and NOT is selected', () => {
      const component = renderComponent();
      const firstOption = getOptions(component).first();
      clickTitleOption(firstOption, component);

      expect(DEFAULT_ON_SELECT_CALLBACK).toBeCalledWith(firstOption.props().value);
    });

    it('calls the onDeselect prop when an option is clicked and is selected', () => {
      const testProps = setProps({ selectedOptions: [DEFAULT_PROPS.options[0].value] });
      const component = renderComponent(testProps);
      const firstOption = getOptions(component).first();
      clickTitleOption(firstOption, component);

      expect(DEFAULT_ON_DESELECT_CALLBACK).toBeCalledWith(firstOption.props().value);
    });
  });

  describe('accordion', () => {
    it('renders Accordion if "accordion" prop is passed as true', () => {
      const testProps = setProps({ accordion: true });
      const component = renderComponent(testProps);
      const accordion = getAccordion(component);

      expect(accordion.exists()).toBeTruthy();
    });

    it('does NOT render Accordion if "accordion" prop is NOT passed OR passed as false', () => {
      const testProps = setProps({ accordion: false });
      const component = renderComponent(testProps);
      const accordion = getAccordion(component);

      expect(accordion.exists()).toBeFalsy();
    });
  });

  describe('error message', () => {
    it('renders a error message if errorMessage prop is present', () => {
      const testProps = setProps({ errorMessage: 'error message' });
      const component = renderComponent(testProps);

      expect(getErrorMessage(component).exists()).toBeTruthy();
    });

    it('does NOT render a error message if errorMessage prop is NOT present', () => {
      const component = renderComponent();

      expect(getErrorMessage(component).exists()).toBeFalsy();
    });
  });

  describe('help button', () => {
    describe('on open', () => {
      it('calls onOpenHelp if accordion when clicked AND is closed', () => {
        const component = renderComponent();
        const firstOption = getOptions(component).first();
        clickHelpButton(component);
        const infoText = getOptionInfoText(component);

        expect(DEFAULT_ON_OPEN_HELP).toBeCalledWith(firstOption.props().value, getHelpIcon(component).trim());
        expect(isHelpRendered(component, infoText)).toBeTruthy();
      });
    });

    describe('on close', () => {
      it('calls onCloseHelp when clicked AND is opened', () => {
        const component = renderComponent();
        const firstOption = getOptions(component).first();
        clickHelpButton(component);
        clickHelpButton(component);
        const infoText = getOptionInfoText(component);

        expect(DEFAULT_ON_CLOSE_HELP).toBeCalledWith(firstOption.props().value, getHelpIcon(component).trim());
        expect(isHelpRendered(component, infoText)).toBeFalsy();
      });
    });
  });

  const DEFAULT_OPTIONS_FIRST_PAGE = 2;
  const DEFAULT_OPTIONS_PER_PAGE = 3;
  const DEFAULT_ON_SELECT_CALLBACK = jest.fn();
  const DEFAULT_ON_DESELECT_CALLBACK = jest.fn();
  const DEFAULT_ON_OPEN_HELP = jest.fn();
  const DEFAULT_ON_CLOSE_HELP = jest.fn();
  const EXAMPLE_INSURANCE_TYPE = {
    label: 'Business Owners Policy (BOP)',
    value: 'Business Owners Policy (BOP)',
    tooltip_key: 'tooltip_key',
    iconClass: 'business_owners_policy_bop',
  };

  const createOptionsExample = () => (
    [0, 1, 2, 3, 4, 5, 6, 7].map(key => (
      { ...EXAMPLE_INSURANCE_TYPE,
        value: EXAMPLE_INSURANCE_TYPE.value + key,
        infoText: `${EXAMPLE_INSURANCE_TYPE.value + key}tooltip`,
      }
    ))
  );

  const EXAMPLE_OPTIONS = createOptionsExample();

  const DEFAULT_PROPS = {
    options: EXAMPLE_OPTIONS,
    onSelect: DEFAULT_ON_SELECT_CALLBACK,
    onDeselect: DEFAULT_ON_DESELECT_CALLBACK,
    itemsToShowFirstRender: DEFAULT_OPTIONS_FIRST_PAGE,
    itemsPerPage: DEFAULT_OPTIONS_PER_PAGE,
    onOpenHelp: DEFAULT_ON_OPEN_HELP,
    onCloseHelp: DEFAULT_ON_CLOSE_HELP,
    accordion: true,
  };


  const setProps = props => Object.assign({}, DEFAULT_PROPS, props);
  const PAGINATION_DISABLED_PROPS = Object.assign({}, DEFAULT_PROPS, { isViewMoreEnabled: false });
  const renderComponent = (props = DEFAULT_PROPS) => mount(<ButtonsListSelect {...props} />);
  const getOptions = component => component.find(ButtonsListSelectOption);
  const getViewMoreButton = component => component.find('.button-view-more');
  const getAccordion = component => component.find('AccordionSelect');
  const getErrorMessage = component => component.find('.error-message');
  const getHelpButton = (component, index = 0) => component.find('QuestionIcon').at(index).parent();
  const getHelpIcon = component => component.find('QuestionIcon').at(0).text();
  const getOptionInfoText = (component, index = 0) => component.find('ButtonsListSelectOption').at(index).props().infoText;

  const clickViewMore = component => {
    getViewMoreButton(component).simulate('click');
    component.update();
  };

  const clickTitleOption = (option, component) => {
    option.find('TextWithIcon').find('.wide-button__title-item').simulate('click');
    component.update();
  };

  const clickHelpButton = (component, index = 0) => {
    getHelpButton(component, index).simulate('click');
    component.update();
  };

  const isHelpRendered = (component, text) =>
    component.find('.wide-button__content--opened').length && component.find('.wide-button__content--opened').text() === text;
});
