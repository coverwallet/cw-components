import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import exists from '../utils/exists';

class NumPadMobile extends React.Component {
  render() {
    const { name, type, showRequired, placeholder, onBlur, getValue, maxLength, disabled } = this.props;
    const inputClass = classNames(
      'form-input form-input--long ',
      this.props.inputClass,
      { required: this.props.showRequired() },
    );
    return (
      <input
        ref="input"
        name={name}
        type={type}
        inputmode="decimal"
        pattern="[0-9]*"
        className={inputClass}
        placeholder={placeholder}
        onBlur={e => (onBlur ? onBlur(e) : null)}
        onChange={e => this.setValue(e.target.value)}
        value={exists(getValue()) ? getValue() : ''}
        maxLength={maxLength}
        disabled={disabled}
      />
    );
  }
}

NumPadMobile.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  getValue: PropTypes.func,
  disabled: PropTypes.bool,
  inputClass: PropTypes.string,
  showRequired: PropTypes.func,
};

NumPadMobile.defaultProps = {
  type: 'text',
};

export default NumPadMobile;
