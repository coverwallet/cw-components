'use strict';

import React, { PropTypes } from 'react';
import IconRadioInput from './IconRadioInput';

class IconRadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  handleChange(value) {
    this.setState({value: value});
    this.props.onChange && this.props.onChange(value);
  }

  getValue() {
    var value = this.state.value;
    if(this.props.getValue) {
      value = this.props.getValue()
    }
    return value
  }

  render () {
    var {options, name} = this.props;
    var radioInputs = options.map((option, i)=> {
      return (
        <IconRadioInput
          key={i}
          iconClass={option.iconClass}
          label={option.label}
          name={name}
          value={option.value}
          checkedValue={this.getValue()}
          onChange={this.handleChange.bind(this)}
        />
      );
    });
    return (
      <div className='icons-radio-group'>
        {radioInputs}
      </div>
    )

  }
}

IconRadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
};

export default IconRadioGroup;