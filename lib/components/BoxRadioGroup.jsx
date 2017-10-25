import React from 'react';
import PropTypes from 'prop-types';
import BoxRadioInput from './BoxRadioInput';

const calcInputWidth = (count, rows = 1) => `calc(${100 / Math.ceil(count / rows)}% - 6px)`;

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
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    const { options, name, style, rows } = this.props;
    const elementWidth = calcInputWidth(options.length, rows);
    const radioInputs = options.map((option, i) => (
      <BoxRadioInput
        key={i}
        label={option.label}
        name={name}
        value={option.value}
        width={elementWidth}
        checkedValue={this.getValue()}
        onChange={this.handleChange}
      />
    ));
    return (
      <div className="box-radio-group" style={style}>
        {radioInputs}
      </div>
    );
  }
}

IconRadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  getValue: PropTypes.func,
  rows: PropTypes.number,
};

export default IconRadioGroup;
