'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';

class OnlyClickOption extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick() {
    this.setState({clicked: true});
    setTimeout(() => {
      this.setState({clicked: false})
    }, 300)
    this.props.onClick && this.props.onClick(this.props.value)
  }

  render () {
    var {value, label, checkValue} = this.props;
    var optionClass = classNames(
      "oc-options-list__item oc-option",
      {'oc-option--checked': (value === checkValue)},
      {'oc-option--checked': this.state.clicked},
    );
    return (
      <li
        className={optionClass}
        onClick={this.handleClick.bind(this)}
      >
        <span className="oc-option__message">{label}</span>
        <span className="oc-option__next-icon" />
      </li>
    );
  }

};

OnlyClickOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default OnlyClickOption;
