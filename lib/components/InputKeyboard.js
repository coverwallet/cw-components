import React from 'react';
import classNames from 'classnames';
import Keyboard from './keyboard';
import numberWithCommas from '../utils/numberWithCommas';
import exists from '../utils/exists';

class InputKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.convertNextValue(exists(props.value) ? props.value : '', props)
    }
  }
  handleChange(e) {
    if (this.props.currency || this.props.type=="number" ) {
        if ( /^[0-9.,]+$/.test(e.target.value) ){
          this.setNextValue(e.target.value);
        } else { this.setNextValue('');}
    } else { this.setNextValue(e.target.value); }
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

  pressKey(key) {
    var value = String(this.state.value).replace(/,/g, "");
    if (!value || value === 'NaN') {
      value = `${key}`;
    } else {
      value = value + '' + key;
    }
    this.setNextValue(value);
  }
  deleteKey() {
    var value = String(this.state.value).replace(/,/g, "");
    if (value && value.length > 0) {
      let nextValue = value.substring(0, value.toString().length - 1) || '';
      this.setNextValue(nextValue);
    }
  }
  render() {
    let {min, currency, commas, width, type} = this.props;
    let inputClass = classNames(
      'input-keyboard__input',
      {'input-keyboard__input--currency': currency},
      {'input-keyboard__input--nan': commas || type !== 'number'}
    );
    return (
      <div className='input-keyboard' style={{width: width}}>
        {currency && <span className='input-keyboard__currency'/>}
        <input
          ref='input'
          type={commas ? 'text' : type}
          className={inputClass}
          pattern={commas || type !== 'number' ? '[0-9,-]*' : '[0-9]*'}
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

InputKeyboard.defaultProps = {
  type: 'number'
};

export default InputKeyboard;
