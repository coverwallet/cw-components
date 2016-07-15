import React, { PropTypes } from 'react';
import BoxRadioInput from './BoxRadioInput';

class IconRadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  getValue() {
    var value = this.state.value;
    if (this.props.getValue) {
      value = this.props.getValue()
    }
    return value
  }

  handleChange = (value) => {
    this.setState({ value: value });
    this.props.onChange && this.props.onChange(value);
  };

  calcInputWidth(count, rows = 1) {
    return `calc(${100 * rows / count}% - 6px)`;
  }

  render() {
    const { options, name, style, rows } = this.props;
    const elementWidth = this.calcInputWidth(options.length, rows);
    var radioInputs = options.map((option, i)=> {
      return (
        <BoxRadioInput
          key={i}
          label={option.label}
          name={name}
          value={option.value}
          width={elementWidth}
          checkedValue={this.getValue()}
          onChange={this.handleChange}
        />
      );
    });
    return (
      <div className='box-radio-group' style={style}>
        {radioInputs}
      </div>
    )

  }
}

IconRadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  rows: PropTypes.number,
};

export default IconRadioGroup;