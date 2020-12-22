import React from 'react';
import PropTypes from 'prop-types';
import IconRadioInput from './IconRadioInput';
import classNames from 'classnames';
import exists from '../utils/exists';

class IconRadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.value !== nextProps.value && exists(nextProps.value)) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  getValue() {
    let value = this.state.value;
    if (this.props.getValue) {
      value = this.props.getValue();
    }
    return value;
  }

  handleChange = value => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    const { options, name, size, disabled, className, innerRef, dataTest } = this.props;
    return (
      <div
        className={classNames(
          'icons-radio-group',
          {
            'icons-radio-group--disabled': disabled,
          },
          className,
        )}
      >
        {options.map((option, i) => (
          <IconRadioInput
            innerRef={innerRef}
            key={i}
            iconClass={option.iconClass}
            label={option.label}
            name={name}
            value={option.value}
            recommendable={option.recommendable}
            checkedValue={this.getValue()}
            onChange={this.handleChange}
            size={size}
            disabled={disabled || option.disabled}
            icon={option.icon}
            dataTest={dataTest || `${String(name).replace(/_/g, '-')}-${option.label}`}
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
  disabled: PropTypes.bool,
  className: PropTypes.string,
  innerRef: PropTypes.func,
  dataTest: PropTypes.string,
};

IconRadioGroup.defaultProps = {
  dataTest: '',
};

export default IconRadioGroup;
