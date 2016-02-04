import React, { PropTypes } from 'react';

class NumberInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.min ? this.props.min : 0
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    this.props.onChange ? this.props.onChange(e) : null
  }

  handlePlus() {
    var number = parseInt(this.refs.number.value);
    var step = this.props.step ? this.props.step : 1;
    var max = this.props.max ? this.props.max : null;
    if (max) {
      if ((number + step) <= max) {
        this.setState({value: (number + step)});
      }
    } else {
      this.setState({value: (number + step)});
    }
  }

  handleMinus() {
    var number = parseInt(this.refs.number.value);
    var step = this.props.step ? this.props.step : 1;
    var min = this.props.min ? this.props.min : 0;
    if ((number - step) >= min) {
      this.setState({value: (number - step)});
    }
  }

  render() {
    return (
      <div className='NumberInput'>
        <input
          ref='number'
          className='form-input NumberInput__input'
          name={this.props.name}
          min={this.props.min ? this.props.min : 0}
          max={this.props.max ? this.props.max : null}
          step={this.props.step ? this.props.step : 1}
          type={this.props.type ? this.props.type : 'number'}
          onBlur={(e) => (this.props.onBlur ? this.props.onBlur(e) : null)}
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        />
        <span className='NumberInput__minus' onClick={this.handleMinus.bind(this)} />
        <span className='NumberInput__plus' onClick={this.handlePlus.bind(this)} />
      </div>
    );
  }
}

export default NumberInput;
