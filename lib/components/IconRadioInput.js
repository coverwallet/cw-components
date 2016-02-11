import React, { PropTypes } from 'react';

class IconRadioInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.checked(props.value, props.checkedValue)
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
    return (
      <label className={'icons-radio-input ' + (this.state.checked ? 'icons-radio-input--checked' : '')}>
        {this.renderIcon()}
        <input
          type="radio"
          name={this.props.name}
          className="icons-radio-input__input"
          onChange={this.handleChange.bind(this)}
          value={this.props.value}
          checked={this.state.checked}
        />
        <div>{this.props.label}</div>
      </label>
    );
  }

  renderIcon() {
    if (this.props.iconClass) {
      return (
        <div className="icons-radio-input__icon">
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
