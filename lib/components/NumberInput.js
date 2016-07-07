import React, { PropTypes } from 'react';
import classNames from 'classnames';
import numberWithCommas from '../utils/numberWithCommas';
import exists from '../utils/exists';

class NumberInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.convertNextValue(exists(props.value) ? props.value : '', props)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value) {
      this.setState({
        value: this.convertNextValue(exists(nextProps.value) ? nextProps.value : '', nextProps)
      })
    }
  }

  convertNextValue(value, props) {
    value = String(value).replace(/,/g, "");
    value = value.indexOf('0') !== -1 ? value : value || '';
    value = props.type === 'number' && value !== '' ? parseInt(value) : value;
    value = props.commas ? numberWithCommas(value): value;
    return value
  }

  setNextValue(value) {
    var nextValue = this.convertNextValue(value, this.props);
    this.setState({value: nextValue});
    this.props.setValue && this.props.setValue(nextValue);
  }

  handleChange(e) {
    this.setNextValue(e.target.value);
  }

  handlePlus() {
    var number = parseInt(String(this.refs.input.value).replace(/,/g, "")) || 0;
    var step = this.props.step ? this.props.step : 1;
    var max = this.props.max ? this.props.max : null;
    var nextValue = number + step;
    if (max) {
      if ((number + step) <= max) {
        this.setNextValue(nextValue);
      }
    } else {
      this.setNextValue(nextValue);
    }
  }

  handleMinus() {
    var number = parseInt(String(this.refs.input.value).replace(/,/g, "")) || 0;
    var step = this.props.step ? this.props.step : 1;
    var min = this.props.min ? this.props.min : 0;
    if ((number - step) >= min) {
      let nextValue = number - step;
      this.setNextValue(nextValue);
    }
  }

  render() {
    let {name, min, max, step, commas, type, width, onBlur} = this.props;
    let inputClass = classNames(
      'number-input__input',
      {'number-input__input--nan': commas || type !== 'number'}
    );
    return (
      <div className='number-input' style={{width: width}}>
        <input
          ref='input'
          className={inputClass}
          type={commas ? 'text' : type}
          pattern={commas ? '[0-9,-]*' : '[0-9]*'}
          inputMode='numeric'
          lang="en"
          name={name}
          min={min ? min : 0}
          max={max}
          step={step ? step : 1}
          onBlur={(e) => (onBlur ? onBlur(e) : null)}
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        />
        <span className='number-input__minus' onClick={this.handleMinus.bind(this)} />
        <span className='number-input__plus' onClick={this.handlePlus.bind(this)} />
      </div>
    );
  }
}

NumberInput.defaultProps = {
  type: 'number'
};

export default NumberInput;
