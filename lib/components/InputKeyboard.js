import React from 'react';
import Keyboard from './keyboard';

class InputKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value ? this.props.value : null
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.setValue && this.props.setValue(event.target.value);
  }

  pressKey(key) {
    var value = this.state.value;
    if (!value) {
      value = key;
    } else {
      value = value + '' + key;
    }
    var nextValue = parseInt(value, 10);
    this.setState({value: nextValue});
    this.props.setValue && this.props.setValue(nextValue);
  }
  deleteKey() {
    if (this.state.value && this.state.value.toString().length > 0) {
      let nextValue = parseInt(this.state.value.toString().substring(0, this.state.value.toString().length - 1), 0);
      this.setState({value: nextValue});
      this.props.setValue && this.props.setValue(nextValue);
    }
  }
  render() {
    return (
      <div className="InputKeyboard">
        <input type="number" className="form-input" onChange={this.handleChange.bind(this)} value={this.state.value}/>
        <Keyboard pressKey={this.pressKey.bind(this)} deleteKey={this.deleteKey.bind(this)} />
      </div>
    );
  }
}

export default InputKeyboard;
