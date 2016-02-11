import React from 'react';
import ReactDOM from 'react-dom';
import { InputKeyboard } from '../../lib/index';
import { NumberInput } from '../../lib/index';
import { IconRadioGroup } from '../../lib/index';

const iconRadioGroupOptions =[
  {
    label: 'Yes',
    value: 'Yes',
    iconClass: 'styleguide-icon-onlyclick-yes'
  }, {
    label: 'No',
    value: 'No',
    iconClass: 'styleguide-icon-onlyclick-no'
  }, {
    label: 'Not sure',
    value: 'Not sure',
    iconClass: 'styleguide-icon-onlyclick-notsure'
  }
];

let App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>cw-components</h1>
        <div className="clearfix">
          <h2>Keyboard input</h2>
          <InputKeyboard currency={true}/>
        </div>

        <hr/>

        <div className="clearfix">
          <h2>Number input</h2>

          <div className="clearfix">
            <h3>Default</h3>
            <NumberInput />
          </div>

          <div className="clearfix">
            <h3>Max 20, Min 5, Step 5</h3>
            <NumberInput min={5} max={20} step={5} />
          </div>
        </div>

        <hr/>

        <div>
          <h2>Icon Radio Group</h2>

          <IconRadioGroup
            options={iconRadioGroupOptions}
            name="test_radio_input"
            value="Not sure"
            onChange={(value)=> alert("You pick " + value)}
          />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
