import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonsListSelectOptions from './ButtonsListSelectOptions';

class ButtonsListSelect extends Component {
  constructor(props) {
    super(props);

    const itemsToShow = props.isViewMoreEnabled ? props.itemsToShowFirstRender : undefined;

    this.state = {
      itemsToShow,
      isViewMoreShown: props.isViewMoreEnabled,
    };
  }

  getOptionsToRender = (itemsToShow, isViewMoreShown) => {
    const { options } = this.props;
    return isViewMoreShown ? options.slice(0, itemsToShow) : options;
  };

  calculateItemsToShow = () => {
    const { itemsToShow } = this.state;
    const { itemsPerPage, options, isViewMoreEnabled } = this.props;
    let result;

    if (isViewMoreEnabled) {
      const nextPageMaxIndex = itemsToShow + itemsPerPage;

      result = Math.min(nextPageMaxIndex, options.length);
    }

    return result;
  };

  areOptionsLeft = (lastItemShown) => {
    if (!this.state.isViewMoreShown) {
      return false;
    }

    return lastItemShown < this.props.options.length - 1;
  };

  handleClick = (value) => {
    const { selectedOptions, onSelect, onDeselect } = this.props;

    if (selectedOptions.includes(value)) {
      onDeselect(value);
    } else {
      onSelect(value);
    }
  };

  calculateNextRender = () => {
    this.setState(() => {
      const itemsToShow = this.calculateItemsToShow();
      const isViewMoreShown = this.areOptionsLeft(itemsToShow);

      return {
        itemsToShow,
        isViewMoreShown,
      };
    });
  }

  render() {
    const { onClickHelp, selectedOptions } = this.props;
    const { isViewMoreShown, itemsToShow } = this.state;
    const options = this.getOptionsToRender(itemsToShow, isViewMoreShown);

    return (
      <div>
        <ButtonsListSelectOptions
          options={options}
          selectedOptions={selectedOptions}
          onClick={this.handleClick}
          onClickHelp={onClickHelp}
        />
        {isViewMoreShown &&
          <button className="button-view-more" onClick={this.calculateNextRender}>
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
  isViewMoreEnabled: PropTypes.bool,
  itemsToShowFirstRender: PropTypes.number,
  itemsPerPage: PropTypes.number,
};

ButtonsListSelect.defaultProps = {
  itemsToShowFirstRender: 6,
  itemsPerPage: 12,
  options: [],
  selectedOptions: [],
  isViewMoreEnabled: true,
};

export default ButtonsListSelect;
