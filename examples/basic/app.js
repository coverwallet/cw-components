import React from 'react';
import ReactDOM from 'react-dom';
import {
  InputKeyboard,
  NumberInput,
  IconRadioGroup,
  Loader,
  OnlyClickListOptions,
  OnlyClickSelect
} from '../../lib/index';
import industries from './catalog_api_json/industries';
import insuranceTypes from './catalog_api_json/insuranceTypes';

import './app.scss';

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
          <h2>Default Keyboard input</h2>
          <InputKeyboard currency={true}/>
        </div>

        <div className="clearfix">
          <h2>Long Keyboard input</h2>
          <InputKeyboard width="100%" />
        </div>

        <hr/>

        <div className="clearfix">
          <h2>Number input</h2>

          <div className="clearfix">
            <h3>Default</h3>
            <NumberInput />
          </div>

          <div className="clearfix">
            <h3>Max 20, Min -5, Step 5</h3>
            <NumberInput min={-5} max={20} step={5} />
          </div>

          <div className="clearfix">
            <h3>Long</h3>
            <NumberInput width="100%"/>
          </div>
        </div>

        <hr/>

        <div>
          <h2>Icon Radio Group</h2>

          <IconRadioGroup
            options={iconRadioGroupOptions}
            name="test_radio_input"
            value="Not sure"
            onChange={(value)=> console.log("You pick " + value)}
          />
        </div>

        <hr/>

        <div>
          <h2>Loader</h2>

          <div className="box">
            <Loader />
          </div>
        </div>

        <hr/>

        <div>
          <h2>Only Click List Options </h2>

          <div>
            <OnlyClickListOptions
              options={iconRadioGroupOptions}
              onClick={(value)=> console.log("You choose " + value)}
              selectedValues={['Yes']}
            />
          </div>
        </div>

        <hr/>

        <div>
          <h2>Only Click Select</h2>

          <h4>Icons view</h4>

          <div>
            <OnlyClickSelect
              placeholder="or type it here"
              hint="Select your industry"
              type="icons"
              options={industries.map((industry) => Object.assign({},
                industry,
                {label: industry.name, value: industry.name, iconClass: industry.icon_name}
              ))}
              onClick={(value)=> console.log("You choose " + value)}
              onDelete={(value)=> console.log("You remove " + value)}
            />
          </div>

          <h4>List view</h4>

          <div>
            <OnlyClickSelect
              placeholder="Search industry subcategory"
              hint="Select your industry subcategory"
              options={industries[0].subindustries.map(subindustry=> Object.assign({},
                subindustry,
                {label: subindustry.name, value: subindustry.name}
              ))}
              onClick={(value)=> console.log("You choose " + value)}
              onDelete={(value)=> console.log("You remove " + value)}
              values={[industries[0].subindustries[0].name]}
            />
          </div>

          <h4>With help icon</h4>

          <div>
            <OnlyClickSelect
              placeholder="Search"
              type="icons"
              options={insuranceTypes.map((type) => Object.assign({},
                type,
                {label: type.name, value: type.name, iconClass: type.icon_name, tooltipKey: type.tooltip_key}
              ))}
              onClick={(value)=> console.log("You choose " + value)}
              onDelete={(value)=> console.log("You remove " + value)}
              onHelpIconClick={(key)=> console.log("Some help info for: " + key)}
            />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
