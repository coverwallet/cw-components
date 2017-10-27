import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import numberWithCommas from '../utils/numberWithCommas';
import exists from '../utils/exists';

const convertNextValue = (value, props) => {
  let nextValue = value;
  nextValue = String(nextValue).replace(/[,%]/g, '');
  nextValue = nextValue.indexOf('0') !== -1 ? nextValue : nextValue || '';
  nextValue = props.type === 'number' && nextValue !== '' ? parseInt(nextValue, 10) : nextValue;
  if (props.max && parseInt(nextValue, 10) > props.max) {
    nextValue = props.max;
  }
  if (parseInt(nextValue, 10) <= props.min) {
    nextValue = props.min;
  }
  nextValue = (props.commas || props.currency) ? numberWithCommas(nextValue) : nextValue;
  return nextValue;
};

class NumberInput extends React.Component {
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
    this.setNextValue(e.target.value);
  };

  handlePlus = () => {
    const number = parseInt(String(this.refs.input.value).replace(/[,%]/g, ''), 10) || 0;
    const step = this.props.step ? this.props.step : 1;
    const max = this.props.max ? this.props.max : null;
    const nextValue = number + step;
    if (max) {
      if ((number + step) <= max) {
        this.setNextValue(nextValue);
      }
    } else {
      this.setNextValue(nextValue);
    }
  };

  handleMinus = () => {
    const number = parseInt(String(this.refs.input.value).replace(/[,%]/g, ''), 10) || 0;
    const step = this.props.step ? this.props.step : 1;
    const min = this.props.min ? this.props.min : 0;
    if ((number - step) >= min) {
      const nextValue = number - step;
      this.setNextValue(nextValue);
    }
  };

  render() {
    const { name, min, max, step, commas, percents, currency, currencyType = 'dollar', type, width, onBlur, autoFocus } = this.props;
    const inputClass = classNames(
      'number-input__input',
      { 'number-input__input--nan number-input__input--currency': currency },
      { 'number-input__input--nan': commas || type !== 'number' },
      { 'number-input__input--percents': percents },
    );
    return (
      <div className="number-input" style={{ width }}>
        {currency && <span className={`number-input__currency number-input__currency--${currencyType}-icon`} />}
        <input
          ref="input"
          className={inputClass}
          type={commas || currency ? 'text' : type}
          pattern={(commas || percents || currency) ? '.*' : '[0-9]*'}
          inputMode="numeric"
          lang="en"
          name={name}
          min={min}
          max={max}
          step={step}
          onBlur={e => (onBlur ? onBlur(e) : null)}
          onChange={this.handleChange}
          value={this.state.value}
          autoFocus={autoFocus}
        />
        {percents && <span className="number-input__percents">%</span> }
        {!currency && <span className="number-input__minus" onClick={this.handleMinus} />}
        {!currency && <span className="number-input__plus" onClick={this.handlePlus} />}
      </div>
    );
  }
}

NumberInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  type: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  currency: PropTypes.bool,
  currencyType: PropTypes.string,
  commas: PropTypes.bool,
  percents: PropTypes.bool,
  autoFocus: PropTypes.bool,
  onBlur: PropTypes.func,
  setValue: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

NumberInput.defaultProps = {
  type: 'number',
  min: 0,
  step: 1,
};

export default NumberInput;
