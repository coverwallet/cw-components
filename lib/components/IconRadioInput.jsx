import React from 'react';
import PropTypes from 'prop-types';
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
    const {
      name,
      value,
      label,
      size,
      disabled,
      iconClass,
      recommendable,
      className,
      localIcon,
    } = this.props;
    const { checked } = this.state;
    const buttonClass = classNames(
      'icons-radio-input',
      { 'icons-radio-input--checked': checked },
      { 'icons-radio-input--no-touch': !isIOS() },
      { 'icons-radio-input--small': size === 'small' },
      { 'icons-radio-input--disabled': disabled },
      { 'icons-radio-input--no-icon': !iconClass },
      { 'icons-radio-input--recommendable': recommendable },
      className,
    );
    const inputId = `${name}${value}`;
    return (
      
      <label className={buttonClass} htmlFor={inputId}>
        {localIcon && (
          <div className="icons-radio-input__icon">
            {localIcon()}
          </div>
        )}
        {this.renderIcon()}
        <input
          id={inputId}
          type="radio"
          name={name}
          className="icons-radio-input__input"
          onChange={this.handleChange}
          value={value}
          checked={checked}
          disabled={disabled}
        />
        <div
          className={classNames('icons-radio-input__label', {
            'icons-radio-input__label--top-separation': iconClass,
          })}
        >
          {label}
        </div>
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
  disabled: PropTypes.bool,
  recommendable: PropTypes.bool,
  className: PropTypes.string,
};

export default IconRadioInput;
