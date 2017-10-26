import React from 'react';
import PropTypes from 'prop-types';
import RadioInput from './RadioInput';

class RadioInputGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  getValue() {
    let value = this.state.value;
    if (this.props.getValue) {
      value = this.props.getValue();
    }
    return value;
  }

  handleChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    const { options, name, style } = this.props;
    const currentValue = this.getValue();
    const radioInputs = options.map((option, i) => (
      <RadioInput
        key={i}
        label={option.label}
        name={name}
        value={option.value}
        checkedValue={this.getValue()}
        onChange={this.handleChange}
        checked={option.value === currentValue}
      />
    ));
    return (
      <div className="box-radio-group" style={style}>
        {radioInputs}
      </div>
    );
  }
}

RadioInputGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  getValue: PropTypes.func,
};

export default RadioInputGroup;
