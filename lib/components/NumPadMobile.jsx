import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import exists from '../utils/exists';

class NumPadMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: (exists(props.value) ? props.value : ''),
    };
  }

  setValue(nextValue) {
    this.setState({ value: nextValue });
  }

  render() {
    const { name, type, placeholder, onBlur, getValue, maxLength, disabled, width } = this.props;
    const inputClass = classNames(
      'number-input__input',
      { 'number-input__input--nan': type !== 'number' },
    );
    return (
      <div className="number-input" style={{ width }}>
        <input
          ref="input"
          name={name}
          type={type}
          inputMode="decimal"
          pattern="[0-9]*"
          className={inputClass}
          placeholder={placeholder}
          onBlur={e => (onBlur ? onBlur(e) : null)}
          onChange={e => this.setValue(e.target.value)}
          value={this.state.value}
          maxLength={maxLength}
          disabled={disabled}
        />
      </div>
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
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

NumPadMobile.defaultProps = {
  type: 'text',
};

export default NumPadMobile;
