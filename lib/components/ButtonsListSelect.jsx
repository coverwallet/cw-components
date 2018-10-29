import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonsListSelectOptions from './ButtonsListSelectOptions';

class ButtonsListSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.values,
      selectedValues: props.selectedValues,
    };
  }

  render() {
    const { showMoreEnabled } = this.props;

    return (
      <div>
        <ButtonsListSelectOptions {...this.props} />
        {showMoreEnabled && <button>
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
  showMoreEnabled: PropTypes.bool,
  itemsPerPage: PropTypes.number,
};

ButtonsListSelect.defaultProps = {
  itemsPerPage: 6,
  values: [],
  showMoreEnabled: true,
};

export default ButtonsListSelect;
