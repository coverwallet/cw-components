import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { isIOS } from '../utils/deviceDetector';

class IconRadioInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.value === props.checkedValue,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.value === nextProps.checkedValue });
  }

  handleChange = () => {
    if (this.props.onChange) {
      this.props.onChange(this.props.value);
    }
  };

  render() {
    const { name, value, label, width } = this.props;
    const { checked } = this.state;
    const buttonClass = classNames(
      'box-radio-input',
      { 'box-radio-input--checked': checked },
      { 'box-radio-input--no-touch': !isIOS() }
    );
    return (
      <label className={buttonClass} style={{ width }} htmlFor={name}>
        <input
          type="radio"
          name={name}
          className="box-radio-input__input"
          onChange={this.handleChange}
          value={value}
          checked={checked}
        />
        <div className="box-radio-input__label">{label}</div>
      </label>
    );
  }
}

IconRadioInput.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  checkedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
};

export default IconRadioInput;
