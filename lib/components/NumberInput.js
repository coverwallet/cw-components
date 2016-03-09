import React, { PropTypes } from 'react';
import classNames from 'classnames';

class NumberInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value ? this.props.value : (this.props.min ? this.props.min : '')
    }
  }

  setNextValue(value) {
    if(this.props.commas) {
      var nextValue = parseInt(String(value).replace(/,/g, "")) || '';
      this.setState({value: nextValue.toLocaleString('US')});
    } else {
      this.setState({value: value});
    }
    this.props.setValue && this.props.setValue(value);
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
    var number = parseInt(this.refs.input.value.replace(/,/g, "")) || 0;
    var step = this.props.step ? this.props.step : 1;
    var min = this.props.min ? this.props.min : 0;
    if ((number - step) >= min) {
      let nextValue = number - step;
      this.setNextValue(nextValue);
    }
  }

  render() {
    let {name, min, max, step, commas, width, onBlur} = this.props;
    let inputClass = classNames(
      'number-input__input',
      {'number-input__input--with-commas': commas}
    );
    return (
      <div className='number-input' style={{width: width}}>
        <input
          ref='input'
          className={inputClass}
          type={commas ? 'text' : 'number'}
          pattern={commas ? '[0-9\,]*' : '[0-9]*'}
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

export default NumberInput;
