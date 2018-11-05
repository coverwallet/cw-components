import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonsListSelectOptions from './ButtonsListSelectOptions';

class ButtonsListSelect extends Component {
  constructor(props) {
    super(props);

    const lastItemToShow = props.viewMoreEnabled ? props.itemsToShowFirstRender: undefined;

    this.state = {
      values: props.values,
      selectedValues: props.selectedValues,
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

  updateSelectedValues = (value) => {
    const { selectedValues } = this.state;
    const valueIndex = selectedValues.indexOf(value);

    return valueIndex > -1 ? [...selectedValues].splice(valueIndex, 1) : Array.from(new Set([...selectedValues, value]));
  };

  handleClick = (value) => {
    this.setState(state => ({
      selectedValues: this.updateSelectedValues(value),
    }));

    this.props.onClick(value);
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
    const { options: optionsProp, selectedValues: selectedValuesProp, viewMoreEnabled, onClick, ...rest } = this.props;
    const { isViewMoreEnabled, selectedValues, options } = this.state;

    return (
      <div>
        <ButtonsListSelectOptions
          options={options}
          selectedValues={selectedValues}
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
  values: PropTypes.array,
  selectedValues: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onClickHelp: PropTypes.func,
  viewMoreEnabled: PropTypes.bool,
  itemsToShowFirstRender: PropTypes.number,
  itemsPerPage: PropTypes.number,
};

ButtonsListSelect.defaultProps = {
  itemsToShowFirstRender: 6,
  itemsPerPage: 12,
  values: [],
  selectedValues: [],
  viewMoreEnabled: true,
};

export default ButtonsListSelect;
