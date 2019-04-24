import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import exists from '../utils/exists';

const isNumeric = (value) => {
  const regex = new RegExp('-?\\d*(\\.\\d{1,2})?', 'g');
  const match = String(value).match(regex);
  return match[0] === String(value);
};

const formatNumberWithDecimalSeparator = (number, decimalSeparator) => {
  const [integers, decimals] = String(number).split('.');
  const decimalSection = decimals ? `${decimalSeparator}${decimals}` : '';

  return `${integers}${decimalSection}`;
};

const removeThousandsSeparator = (str, thousandsSeparator) => {
  const regex = new RegExp(`\\${thousandsSeparator}`, 'g');

  return str.replace(regex, '');
};

const removeInvalidCharacters = (str, thousandsSeparator, decimalSeparator) => {
  const validValue = removeThousandsSeparator(str, thousandsSeparator);
  const regex = new RegExp(`(-?\\d*(?:\\${decimalSeparator}\\d{0,2})?)`, 'g');
  const match = validValue.match(regex);

  return match ? match[0] : undefined;
};

const addThousandsSeparator = (value, thousandsSeparator) =>
  String(value).replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

const convertNextValue = (value, props) => {
  let nextValue = isNumeric(value) ? formatNumberWithDecimalSeparator(value, props.decimalSeparator) : value;
  nextValue = removeInvalidCharacters(nextValue, props.thousandsSeparator, props.decimalSeparator);
  if (!nextValue) {
    return '';
  }
  if (props.max && Number(nextValue) > props.max) {
    nextValue = props.max;
  }
  if (Number(nextValue) < props.min) {
    nextValue = props.min;
  }
  return addThousandsSeparator(nextValue, props.thousandsSeparator);
};

class CurrencyInput extends React.Component {
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
    const numericValue = this.numberFromValue(nextValue);
    const valueHasChanged = numericValue !== this.numberFromValue(this.state.value);
    this.setState({ value: nextValue });
    if (this.props.setValue && valueHasChanged) {
      this.props.setValue(numericValue);
    }
  }

  numberFromValue(value) {
    return Number(removeThousandsSeparator(value, this.props.thousandsSeparator));
  }

  handleChange = e => {
    this.setNextValue(e.target.value);
  };

  render() {
    const { name, min, max, currencyType = 'dollar', width, onBlur, autoFocus, disabled = false } = this.props;
    const inputClass = classNames(
      'currency-input__input',
    );
    return (
      <div className="currency-input" style={{ width }}>
        <span className={`currency-input__icon currency-input__icon--${currencyType}`} />
        <input
          ref="input"
          className={inputClass}
          type="text"
          pattern=".*"
          inputMode="numeric"
          lang="en"
          name={name}
          min={min}
          max={max}
          onBlur={e => (onBlur ? onBlur(e) : null)}
          onChange={this.handleChange}
          value={this.state.value}
          autoFocus={autoFocus}
          disabled={disabled}
        />
      </div>
    );
  }
}

const differentPropsValueValidator = (props, propName, otherPropName, componentName) => {
  if (props[propName] === props[otherPropName]) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Values of ${propName} and ${otherPropName} must be different.`);
  }
};

CurrencyInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  currencyType: PropTypes.string,
  decimalSeparator: (props, propName, componentName) => differentPropsValueValidator(props, propName, 'thousandsSeparator', componentName),
  thousandsSeparator: (props, propName, componentName) => differentPropsValueValidator(props, propName, 'decimalSeparator', componentName),
  autoFocus: PropTypes.bool,
  onBlur: PropTypes.func,
  setValue: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
};

CurrencyInput.defaultProps = {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  decimalSeparator: '.',
  thousandsSeparator: ',',
};

export default CurrencyInput;
