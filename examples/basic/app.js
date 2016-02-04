import React from 'react';
import InputKeyboard from '../../lib/index';

let App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>cw-components</h1>
        <InputKeyboard/>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('container'));
