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

        <h3>Default</h3>
        <NumberInput />

        <h3>Max 20, Min 5, Step 5</h3>
        <NumberInput min={5} max={20} step={5} />
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
