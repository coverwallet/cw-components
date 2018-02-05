import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Keyboard from './keyboard';
import numberWithCommas from '../utils/numberWithCommas';
import exists from '../utils/exists';

const convertNextValue = (value, props) => {
  let nextValue = String(value).replace(/,/g, '');
  nextValue = nextValue.indexOf('0') !== -1 ? nextValue : nextValue || '';
  nextValue = convertNegativeValues(nextValue, props);
  nextValue = props.commas ? numberWithCommas(nextValue) : nextValue;
  return nextValue;
};

const convertNegativeValues = (nextValue, props) => {
  let currentValue = nextValue;

  if (nextValue !== '-') {
    currentValue = props.type === 'number' && nextValue !== '' ? parseInt(nextValue, 10) : nextValue;
  }

  return nextValue;
}

class InputKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: convertNextValue(exists(props.value) ? props.value : '', props),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      this.setState({
        value: convertNextValue(exists(nextProps.value) ? nextProps.value : '', nextProps),
      });
    }
  }

  setNextValue(value) {
    const nextValue = convertNextValue(value, this.props);
    this.setState({ value: nextValue });
    if (this.props.setValue) {
      this.props.setValue(nextValue);
    }
  }

  handleChange = (e) => {
    if (this.props.currency || this.props.type === 'number') {
      if (/^[0-9.,]+$/.test(e.target.value)) {
        this.setNextValue(e.target.value);
      } else {
        this.setNextValue('');
      }
    } else {
      this.setNextValue(e.target.value);
    }
  }

  pressKey = (key) => {
    let value = String(this.state.value).replace(/,/g, '');
    const maxLength = this.props.maxLength;

    if (maxLength && value.length >= maxLength) {
      return;
    } else {
      if (!value || value === 'NaN') {
        value = `${key}`;
      } else if ( key === '-') {
        if (value.indexOf(key) >= 0) {
          value = value.substring(1, value.length);
        } else {
          value = `${key}${value}`;
        }
      } else {
        value = `${value}${key}`;
      }
    }

    this.setNextValue(value);
  };

  deleteKey = () => {
    const value = String(this.state.value).replace(/,/g, '');
    if (value && value.length > 0) {
      const nextValue = value.substring(0, value.toString().length - 1) || '';
      this.setNextValue(nextValue);
    }
  };

  render() {
    const { min, currency, currencyType = 'dollar', commas, width, type, autoFocus, maxLength, negatives } = this.props;
    const inputClass = classNames(
      'input-keyboard__input',
      { 'input-keyboard__input--currency': currency },
      { 'input-keyboard__input--nan': commas || type !== 'number' }, 
      { 'input-keyboard__input--negative': this.state.value.indexOf('-') === 0 }
    );
    return (
      <div className="input-keyboard" style={{ width }}>
        {currency && <span className={`input-keyboard__currency input-keyboard__currency--${currencyType}-icon`} />}
        <input
          ref="input"
          type={commas ? 'text' : type}
          className={inputClass}
          pattern={commas || type !== 'number' ? '[0-9,-]*' : '[0-9]*'}
          inputMode="numeric"
          lang="en"
          min={negatives ? Number.MIN_SAFE_INTEGER : min || 0}
          onChange={this.handleChange}
          value={this.state.value}
          autoFocus={autoFocus}
          maxLength={maxLength}
        />
        <Keyboard
          pressKey={this.pressKey}
          deleteKey={this.deleteKey}
          dashKeyActive={this.props.negatives}
        />
      </div>
    );
  }
}

InputKeyboard.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.string,
  min: PropTypes.number,
  currency: PropTypes.bool,
  currencyType: PropTypes.string,
  commas: PropTypes.bool,
  autoFocus: PropTypes.bool,
  setValue: PropTypes.func,
  maxLength: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  negativeEnabled: PropTypes.bool,
};

InputKeyboard.defaultProps = {
  type: 'number',
};

export default InputKeyboard;
