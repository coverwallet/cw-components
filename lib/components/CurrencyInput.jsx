import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import exists from '../utils/exists';

const removeThousandsSplitter = (str, thousandsSplitter) => {
  const regex = new RegExp(`\\${thousandsSplitter}`, 'g');

  return str.replace(regex, '');
};

const removeInvalidCharacters = (str, thousandsSplitter, decimalSplitter) => {
  let validValue = String(str);
  validValue = removeThousandsSplitter(validValue, thousandsSplitter);
  const regex = new RegExp(`(\\d+(?:\\${decimalSplitter}\\d{0,2})?)`, 'g');
  const match = validValue.match(regex);

  return match ? match[0] : undefined;
};

const addThousandsSplitter = (value, thousandsSplitter) =>
  String(value).replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSplitter);

const convertNextValue = (value, props) => {
  let nextValue = removeInvalidCharacters(value, props.thousandsSplitter, props.decimalSplitter);
  if (!nextValue) {
    return '';
  }
  if (props.max && Number(nextValue) > props.max) {
    nextValue = props.max;
  }
  if (Number(nextValue) < props.min) {
    nextValue = props.min;
  }
  return addThousandsSplitter(nextValue, props.thousandsSplitter);
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
    this.setState({ value: nextValue });
    if (this.props.setValue) {
      this.props.setValue(Number(nextValue));
    }
  }

  handleChange = (e) => {
    this.setNextValue(e.target.value);
  };

  render() {
    const { name, min, max, currencyType = 'dollar', width, onBlur, autoFocus } = this.props;
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
        />
      </div>
    );
  }
}

CurrencyInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  currencyType: PropTypes.string,
  decimalSplitter: PropTypes.string,
  thousandsSplitter: PropTypes.string,
  autoFocus: PropTypes.bool,
  onBlur: PropTypes.func,
  setValue: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CurrencyInput.defaultProps = {
  min: 0,
  max: Number.MAX_SAFE_INTEGER,
  decimalSplitter: '.',
  thousandsSplitter: ',',
};

export default CurrencyInput;
