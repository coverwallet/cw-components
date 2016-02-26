import React, { PropTypes } from 'react';
import classNames from 'classnames';

class IconRadioInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.checked(props.value, props.checkedValue),
      clicked: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({checked: this.checked(nextProps.value, nextProps.checkedValue)})
  }

  checked(a, b) {
    return a === b;
  }

  handleChange() {
    this.props.onChange && this.props.onChange(this.props.value);
  }

  render() {
    var buttonClass = classNames(
      'icons-radio-input',
      {'icons-radio-input--checked': this.state.checked},
      {'icons-radio-input--clicked': this.state.clicked}
    );
    return (
      <label
        className={buttonClass}
        >
        {this.renderIcon()}
        <input
          type='radio'
          name={this.props.name}
          className='icons-radio-input__input'
          onChange={this.handleChange.bind(this)}
          value={this.props.value}
          checked={this.state.checked}
        />
        <div className='icons-radio-input__label'>{this.props.label}</div>
      </label>
    );
  }

  renderIcon() {
    if (this.props.iconClass) {
      return (
        <div className='icons-radio-input__icon'>
          <span className={this.props.iconClass} />
        </div>
      )
    }
    return <span />
  }
}

IconRadioInput.propTypes = {
  iconClass: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

export default IconRadioInput;
