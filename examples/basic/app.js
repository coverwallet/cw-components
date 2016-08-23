import React from 'react';
import ReactDOM from 'react-dom';
import objectAssign from 'object-assign';
import {
  InputKeyboard,
  NumberInput,
  BoxRadioGroup,
  IconRadioGroup,
  Loader,
  OnlyClickListOptions,
  OnlyClickSelect,
} from '../../lib/index';
import industries from './catalog_api_json/industries';
import insuranceTypes from './catalog_api_json/insuranceTypes';

import './app.scss';

const iconRadioGroupOptions = [
  {
    label: 'Yes',
    value: 'Yes',
    iconClass: 'styleguide-icon-onlyclick-yes',
  }, {
    label: 'No',
    value: 'No',
    iconClass: 'styleguide-icon-onlyclick-no',
  }, {
    label: 'Not sure',
    value: 'Not sure',
    iconClass: 'styleguide-icon-onlyclick-notsure',
  },
];

const currentYear = new Date().getFullYear();
const BoxRadioGroupYearsOptions = [
  {
    label: `${currentYear}`,
    value: `${currentYear}`,
  }, {
    label: `${currentYear + 1}`,
    value: `${currentYear + 1}`,
  },
];

const BoxRadioGroupMonthsOptions = [
  {
    label: 'Jan',
    value: 'Jan',
  }, {
    label: 'Feb',
    value: 'Feb',
  }, {
    label: 'Mar',
    value: 'Mar',
  }, {
    label: 'Spr',
    value: 'Spr',
  }, {
    label: 'May',
    value: 'May',
  }, {
    label: 'Jun',
    value: 'Jun',
  }, {
    label: 'Jul',
    value: 'Jul',
  }, {
    label: 'Aug',
    value: 'Aug',
  }, {
    label: 'Sep',
    value: 'Sep',
  }, {
    label: 'Oct',
    value: 'Oct',
  }, {
    label: 'Nov',
    value: 'Nov',
  }, {
    label: 'Dec',
    value: 'Dec',
  },
];

const App = function App() {
  return (
    <div className="example">
      <h1>cw-components</h1>
      <div className="clearfix">
        <h2>Default Keyboard input with text type</h2>
        <InputKeyboard type="text" value={0} />
      </div>

      <div className="clearfix">
        <h2>Currency with commas Keyboard input</h2>
        <InputKeyboard currency commas />
      </div>

      <div className="clearfix">
        <h2>Long Keyboard input</h2>
        <InputKeyboard width="100%" />
      </div>

      <hr />

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
          <h3>Long with commas</h3>
          <NumberInput width="100%" commas />
        </div>
      </div>

      <hr />

      <div>
        <h2>Box Radio Group</h2>

        <BoxRadioGroup
          options={BoxRadioGroupMonthsOptions}
          rows={2}
          name="test_radio_input"
          value="Not sure"
          style={{ width: 360 }}
          onChange={(value) => console.log('You pick ', value)}
        />

        <BoxRadioGroup
          options={BoxRadioGroupYearsOptions}
          name="test_radio_input"
          value="Not sure"
          style={{ width: 360 }}
          onChange={(value) => console.log('You pick ', value)}
        />
      </div>

      <hr />

      <div>
        <h2>Icon Radio Group</h2>

        <IconRadioGroup
          options={iconRadioGroupOptions}
          name="test_radio_input"
          value="Not sure"
          onChange={(value) => console.log('You pick ', value)}
        />
      </div>

      <hr />

      <div>
        <h2>Loader</h2>

        <div className="box">
          <Loader />
        </div>
      </div>

      <hr />

      <div>
        <h2>Only Click List Options </h2>

        <div>
          <OnlyClickListOptions
            options={iconRadioGroupOptions}
            onClick={(value) => console.log('You choose ', value)}
            selectedValues={['Yes']}
          />
        </div>
      </div>

      <hr />

      <div>
        <h2>Only Click Select</h2>

        <h4>Icons view with auto focus</h4>

        <div>
          <OnlyClickSelect
            placeholder="or type it here"
            hint="Select your industry"
            type="icons"
            options={industries.map((industry) => objectAssign({},
              industry,
              { label: industry.name, value: industry.name, iconClass: industry.icon_name }
            ))}
            onClick={(value) => console.log('You choose ', value)}
            onDelete={(value) => console.log('You remove ', value)}
            autoFocus
          />
        </div>

        <h4>Normal List view</h4>

        <div>
          <OnlyClickSelect
            placeholder="Search industry subcategory"
            hint="Select your industry subcategory"
            options={industries[0].subindustries.map(subindustry => objectAssign({},
              subindustry,
              { label: subindustry.name, value: subindustry.name }
            ))}
            onClick={(value) => console.log('You choose ', value)}
            onDelete={(value) => console.log('You remove ', value)}
            values={[industries[0].subindustries[0].name]}
          />
        </div>

        <h4>List view with auto scroll, highlight and adition, 10 max visible</h4>

        <div>
          <OnlyClickSelect
            placeholder="Search industry subcategory"
            hint="Select your industry subcategory"
            options={industries[0].subindustries.map(subindustry => objectAssign({},
              subindustry,
              { label: subindustry.name, value: subindustry.name, addition: subindustry.name }
            ))}
            onChange={(value) => console.log('You typed ', value)}
            onClick={(value) => console.log('You choose ', value)}
            onDelete={(value) => console.log('You remove ', value)}
            values={[industries[0].subindustries[0].name]}
            maxVisible={10}
            disableFilter
            autoScroll
            highlight
          />
        </div>

        <h4>With help icon</h4>

        <div>
          <OnlyClickSelect
            placeholder="Search"
            type="icons"
            options={insuranceTypes.map((type) => objectAssign({},
              type,
              {
                label: type.name,
                value: type.name,
                iconClass: type.icon_name,
                tooltipKey: type.tooltip_key,
              },
            ))}
            onClick={(value) => console.log('You choose ', value)}
            onDelete={(value) => console.log('You remove ', value)}
            onHelpIconClick={(key) => console.log('Some help info for: ', key)}
          />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('container'));
