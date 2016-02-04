import React from 'react';
import Keyboard from './keyboard';

class InputKeyboard extends React.Component {
  pressKey (key) {
    this.refs.input.value = this.refs.input.value + key;
  }
  deleteKey () {
    this.refs.input.value = this.refs.input.value.substring(0, this.refs.input.value.length - 1);
  }
  render () {
    return (
      <div className="InputKeyboard">
        <input type="number" className="form-input" ref="input"/>
        <Keyboard pressKey={this.pressKey.bind(this)} deleteKey={this.deleteKey.bind(this)}></Keyboard>
      </div>
    );
  }
}

export default InputKeyboard;
