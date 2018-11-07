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
    const { itemsPerPage, options, viewMoreEnabled } = this.props;
    let result;

    if (viewMoreEnabled) {
      const optionsMaxIndex = options.length - 1;
      const nextPageMaxIndex = lastItemToShow + itemsPerPage;

      result = Math.min(nextPageMaxIndex, optionsMaxIndex);
    }

    return result;
  };

  areOptionsLeft = (lastItemShown) => {
    if (!this.state.isViewMoreEnabled) {
      return false;
    }

    return lastItemShown < this.props.options.length - 1;
  };

  deselectValue = (selectedOptions, value, onDeselect) => {
    onDeselect(value);
    return selectedOptions.filter(option => option !== value);
  }

  selectValue = (selectedOptions, value, onSelect) => {
    onSelect(value);
    return Array.from(new Set([...selectedOptions, value]));
  }

  handleClick = (value) => {
    this.setState((state, props) => {
      const selectedOptions = state.selectedOptions.includes(value)
        ? this.deselectValue(state.selectedOptions, value, props.onSelect)
        : this.selectValue(state.selectedOptions, value, props.onSelect);

      return {
        selectedOptions,
      };
    });
  };

  renderNextItems = () => {
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
          <button onClick={this.renderNextItems}>
            View more
          </button>}
      </div>
    );
  }
}

ButtonsListSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func.isRequired,
  onDeselect: PropTypes.func.isRequired,
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
