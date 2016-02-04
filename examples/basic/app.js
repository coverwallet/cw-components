import React from 'react';
import ReactDOM from 'react-dom';
import { InputKeyboard } from '../../lib/index';
import { NumberInput } from '../../lib/index';

let App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>cw-components</h1>
        <h2>Keyboard input</h2>
        <InputKeyboard/>

        <h2>Number input</h2>
        <NumberInput />
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
