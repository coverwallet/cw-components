import React from 'react';
import Keyboard from './keyboard';

class InputKeyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    pressKey(key) {
        var value = this.state.value;
        if (!value) {
            value = key;
        } else {
            value = value + '' + key;
        }
        this.setState({
            value: parseInt(value, 10)
        });
    }
    deleteKey() {
        if (this.state.value && this.state.value.toString().length > 0) {
            this.setState({
                value: this.state.value.toString().substring(0, this.state.value.toString().length - 1)
            });
        }
    }
    render() {
        return (
            <div className="InputKeyboard">
                <input type="number" className="form-input" onChange={this.handleChange.bind(this)} value={this.state.value}/>
                <Keyboard pressKey={this.pressKey.bind(this)} deleteKey={this.deleteKey.bind(this)}></Keyboard>
            </div>
        );
    }
}

export default InputKeyboard;
