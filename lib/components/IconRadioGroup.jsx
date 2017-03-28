import React, { PropTypes } from 'react';
import IconRadioInput from './IconRadioInput';

class IconRadioGroup extends React.Component {
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
    if (this.props.onChange) this.props.onChange(value);
  };

  render() {
    const { options, name, size } = this.props;
    return (
      <div className="icons-radio-group">
        {options.map((option, i) => (
          <IconRadioInput
            key={i}
            iconClass={option.iconClass}
            label={option.label}
            name={name}
            value={option.value}
            checkedValue={this.getValue()}
            onChange={this.handleChange}
            size={size}
          />
        ))}
      </div>
    );
  }
}

IconRadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  value: PropTypes.any,
  getValue: PropTypes.func,
  onChange: PropTypes.func,
  size: PropTypes.string,
};

export default IconRadioGroup;
