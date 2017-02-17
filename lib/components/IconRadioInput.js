import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { isIOS } from '../utils/deviceDetector';

class IconRadioInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.checked(props.value, props.checkedValue)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: this.checked(nextProps.value, nextProps.checkedValue) });
  }

  checked(a, b) {
    return a === b;
  }

  handleChange = () => {
    if (this.props.onChange) {
      this.props.onChange(this.props.value);
    }
  };

  renderIcon() {
    if (this.props.iconClass) {
      return (
        <div className="icons-radio-input__icon">
          <span className={this.props.iconClass} />
        </div>
      );
    }
    return <span />;
  }

  render() {
    const buttonClass = classNames(
      'icons-radio-input',
      { 'icons-radio-input--checked': this.state.checked },
      { 'icons-radio-input--no-touch': !isIOS() },
      { 'icons-radio-input--small': this.props.size === 'small' },
    );
    return (
      <label className={buttonClass}>
        {this.renderIcon()}
        <input
          type="radio"
          name={this.props.name}
          className="icons-radio-input__input"
          onChange={this.handleChange}
          value={this.props.value}
          checked={this.state.checked}
        />
        <div className="icons-radio-input__label">{this.props.label}</div>
      </label>
    );
  }
}

IconRadioInput.propTypes = {
  iconClass: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  checkedValue: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
};

export default IconRadioInput;
