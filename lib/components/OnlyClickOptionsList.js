'use strict';

import React, { PropTypes } from 'react';

var OnlyClickOptionsList = (props)=> {
  var items = props.options.map((item, i)=> {
    return (
      <li
        key={i}
        className="oc-options-list__item oc-option"
        onClick={props.onClick.bind(null, item.value)}
      >
        <span className="oc-option__message">{item.label}</span>
        <span className="oc-option__next-icon" />
      </li>
    )
  });
  return (
    <ul className="oc-options-list">
      {items}
    </ul>
  );
};

OnlyClickOptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func
};

export default OnlyClickOptionsList;