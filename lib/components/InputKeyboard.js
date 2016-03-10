import React from 'react';
import classNames from 'classnames';
import Keyboard from './keyboard';
import numberWithCommas from '../utils/numberWithCommas';

class InputKeyboard extends React.Component {
  constructor(props) {
    super(props);
    var value = this.props.value ? this.props.value : '';
    if(this.props.commas) {
      value = numberWithCommas(value)
    }
    this.state = {
      value: value
    }
  }
  handleChange(e) {
    this.setNextValue(e.target.value);
  }

  setNextValue(value) {
    var nextValue = parseInt(String(value).replace(/,/g, "")) || '';
    if (this.props.commas) {
      this.setState({ value: numberWithCommas(nextValue) });
    } else {
      this.setState({ value: nextValue });
    }
    this.props.setValue && this.props.setValue(nextValue);
  }

  pressKey(key) {
    var value = String(this.state.value).replace(/,/g, "");
    if (!value) {
      value = key;
    } else {
      value = value + '' + key;
    }
    this.setNextValue(value);
  }
  deleteKey() {
    var value = String(this.state.value).replace(/,/g, "");
    if (value && value.length > 0) {
      let nextValue = parseInt(value.substring(0, value.toString().length - 1), 0) || '';
      this.setNextValue(nextValue);
    }
  }
  render() {
    let {min ,currency, commas, width} = this.props;
    let inputClass = classNames(
      'input-keyboard__input',
      {'input-keyboard__input--currency': currency},
      {'input-keyboard__input--with-commas': commas}
    );
    return (
      <div className='input-keyboard' style={{width: width}}>
        {currency && <span className='input-keyboard__currency'/>}
        <input
          ref='input'
          type={commas ? 'text' : 'number'}
          className={inputClass}
          pattern={commas ? '[0-9\,]*' : '[0-9]*'}
          inputMode='numeric'
          lang="en"
          min={min ? min : 0}
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        />
        <Keyboard pressKey={this.pressKey.bind(this)} deleteKey={this.deleteKey.bind(this)} />
      </div>
    );
  }
}

export default InputKeyboard;
