import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonsListSelectOptions from './ButtonsListSelectOptions';

class ButtonsListSelect extends Component {
  constructor(props) {
    super(props);

    const itemsToShow = props.isViewMoreEnabled ? props.itemsToShowFirstRender : props.options.length;

    this.state = {
      itemsToShow,
      isViewMoreRendered: props.isViewMoreEnabled,
    };
  }

  getOptionsToRender = (itemsToShow, isViewMoreRendered) => {
    const { options } = this.props;
    return isViewMoreRendered ? options.slice(0, itemsToShow) : options;
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

  areOptionsLeft = (itemsToShow) => {
    if (!this.state.isViewMoreRendered) {
      return false;
    }

    return itemsToShow < this.props.options.length;
  };

  handleClick = (value) => {
    const { selectedOptions, onSelect, onDeselect } = this.props;

    if (selectedOptions.includes(value)) {
      onDeselect(value);
    } else {
      onSelect(value);
    }
  };

  renderNextItems = () => {
    this.setState(() => {
      const itemsToShow = this.calculateItemsToShow();
      const isViewMoreRendered = this.areOptionsLeft(itemsToShow);

      return {
        itemsToShow,
        isViewMoreRendered,
      };
    });
  }

  render() {
    const { onClickHelp, selectedOptions, accordion } = this.props;
    const { isViewMoreRendered, itemsToShow } = this.state;
    const optionsToRender = this.getOptionsToRender(itemsToShow, isViewMoreRendered);

    return (
      <div>
        <ButtonsListSelectOptions
          options={optionsToRender}
          selectedOptions={selectedOptions}
          onClick={this.handleClick}
          onClickHelp={onClickHelp}
          accordion={accordion}
        />
        {isViewMoreRendered &&
          <button className="button-view-more" onClick={this.renderNextItems}>
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
  accordion: PropTypes.bool,
};

ButtonsListSelect.defaultProps = {
  itemsToShowFirstRender: 6,
  itemsPerPage: 12,
  options: [],
  selectedOptions: [],
  isViewMoreEnabled: true,
};

export default ButtonsListSelect;
