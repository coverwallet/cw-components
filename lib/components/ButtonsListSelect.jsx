import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonsListSelectOptions from './ButtonsListSelectOptions';

class ButtonsListSelect extends Component {
  constructor(props) {
    super(props);

    const lastItemToShow = props.viewMoreEnabled ? props.itemsToShowFirstRender : undefined;

    this.state = {
      selectedOptions: props.selectedOptions,
      lastItemToShow,
      isViewMoreEnabled: props.viewMoreEnabled,
      options: this.getOptionsToRender(lastItemToShow, props.viewMoreEnabled),
    };
  }

  getOptionsToRender = (lastItemToShow, isViewMoreEnabled) => {
    const { options } = this.props;
    return isViewMoreEnabled ? options.slice(0, lastItemToShow) : options;
  };

  calculateLastItemToShow = () => {
    const { lastItemToShow } = this.state;
    const { itemsPerPage, options } = this.props;
    let result;

    if (this.props.viewMoreEnabled) {
      const optionsMaxIndex = options.length - 1;
      const nextPageMaxIndex = lastItemToShow + itemsPerPage;

      result = Math.min(nextPageMaxIndex, optionsMaxIndex);
    }
    return result;
  };

  areOptionsLeft = (lastItemShown) => {
    if (!this.state.isViewMoreEnabled) {
      return this.state.isViewMoreEnabled;
    }

    return lastItemShown < this.props.options.length - 1;
  };

  deselectValue = (selectedOptions, valueIndex) => selectedOptions.splice(valueIndex, 1) && selectedOptions;

  selectValue = (selectedOptions, value) => Array.from(new Set([...selectedOptions, value]));

  updateselectedOptions = (selectedOptions, value) => {
    const valueIndex = selectedOptions.indexOf(value);
    return valueIndex > -1 ? this.deselectValue(selectedOptions, valueIndex) : this.selectValue(selectedOptions, value);
  };

  handleClick = (value) => {
    this.setState((state, props) => {
      const selectedOptions = this.updateselectedOptions(state.selectedOptions, value);

      if (selectedOptions.includes(value)) {
        props.onSelect(value);
      } else {
        props.onDeselect(value);
      }

      return {
        selectedOptions,
      };
    });
  };

  renderNext = () => {
    this.setState(() => {
      const lastItemToShow = this.calculateLastItemToShow();
      const isViewMoreEnabled = this.areOptionsLeft(lastItemToShow);
      const options = this.getOptionsToRender(lastItemToShow, isViewMoreEnabled);

      return {
        lastItemToShow,
        isViewMoreEnabled,
        options,
      };
    });
  }

  render() {
    const { options: optionsProp, selectedOptions: selectedOptionsProp, viewMoreEnabled, ...rest } = this.props;
    const { isViewMoreEnabled, selectedOptions, options } = this.state;

    return (
      <div>
        <ButtonsListSelectOptions
          options={options}
          selectedOptions={selectedOptions}
          onClick={this.handleClick}
          {...rest}
        />
        {isViewMoreEnabled &&
          <button onClick={this.renderNext}>
            View more
          </button>}
      </div>
    );
  }
}

ButtonsListSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  onClickHelp: PropTypes.func,
  viewMoreEnabled: PropTypes.bool,
  itemsToShowFirstRender: PropTypes.number,
  itemsPerPage: PropTypes.number,
};

ButtonsListSelect.defaultProps = {
  itemsToShowFirstRender: 6,
  itemsPerPage: 12,
  options: [],
  selectedOptions: [],
  viewMoreEnabled: true,
};

export default ButtonsListSelect;
