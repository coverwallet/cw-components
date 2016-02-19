'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import OnlyClickOption from './OnlyClickOption';

class OnlyClickOptionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  handleClick(value) {
    this.setState({value: value});
    this.props.onClick && this.props.onClick(value);
  }

  render() {
    var items = this.props.options.map((item, i)=> {
      return (
        <OnlyClickOption
          key={i}
          value={item.value}
          label={item.label}
          checkValue={this.state.value}
          onClick={this.handleClick.bind(this)}
        />
      );
    });

    return (
      <ul className="oc-options-list">
        {items}
      </ul>
    );
  }
}

OnlyClickOptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default OnlyClickOptionsList;
