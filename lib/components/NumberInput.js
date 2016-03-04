import React, { PropTypes } from 'react';

class NumberInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value ? this.props.value : (this.props.min ? this.props.min : '')
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    this.props.setValue && this.props.setValue(e.target.value);
  }

  handlePlus() {
    var number = parseInt(this.refs.input.value) || 0;
    var step = this.props.step ? this.props.step : 1;
    var max = this.props.max ? this.props.max : null;
    var nextValue = number + step;
    if (max) {
      if ((number + step) <= max) {
        this.setState({value: nextValue});
      }
    } else {
      this.setState({value: nextValue});
      this.props.setValue && this.props.setValue(nextValue);
    }
  }

  handleMinus() {
    var number = parseInt(this.refs.input.value) || 0;
    var step = this.props.step ? this.props.step : 1;
    var min = this.props.min ? this.props.min : 0;
    if ((number - step) >= min) {
      let nextValue = number - step;
      this.setState({value: nextValue});
      this.props.setValue && this.props.setValue(nextValue);
    }
  }

  render() {
    return (
      <div className='number-input' style={{width: this.props.width}}>
        <input
          ref='input'
          className='number-input__input'
          type='number'
          pattern='[0-9]*'
          inputMode='numeric'
          name={this.props.name}
          min={this.props.min ? this.props.min : 0}
          max={this.props.max ? this.props.max : null}
          step={this.props.step ? this.props.step : 1}
          onBlur={(e) => (this.props.onBlur ? this.props.onBlur(e) : null)}
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
