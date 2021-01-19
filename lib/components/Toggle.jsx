import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

class Toggle extends Component {
  handleClick = e => {
    const { onToggle } = this.props;

    if (onToggle) {
      onToggle(e);
    }
  };

  render() {
    const { value, disabled, id, label, dataTest } = this.props;
    const inputId = id || `toggle-${uniqueId()}`;

    return (
      <div className="cw-toggle">
        <label className="cw-toggle__switch" data-test={dataTest}>
          <input
            id={inputId}
            className="cw-toggle__input"
            type="checkbox"
            checked={value}
            onChange={this.handleClick}
            disabled={disabled}
          />
          <span className="cw-toggle__slider cw-toggle__slider--round" />
        </label>
        {label && (
          <label htmlFor={inputId} className="cw-toggle__label" >
            {label}
          </label>
        )}
      </div>
    );
  }
}

Toggle.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onToggle: PropTypes.func,
  dataTest: PropTypes.string,
};

export default Toggle;
