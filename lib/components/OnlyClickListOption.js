'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import {isIOS} from '../utils/deviceDetector';

function OnlyClickListOption(props) {
  var {value, label, checked, onClick} = props;
  var optionClass = classNames(
    'oc-options-list__item oc-list-option',
    {'oc-list-option--checked': checked},
    {'oc-list-option--no-touch': !isIOS()}
  );
  return (
    <li
      className={optionClass}
      onClick={onClick.bind(null, value)}
    >
      <span className='oc-option__message'>{label}</span>
      <span className='oc-option__next-icon' />
    </li>
  );
}

OnlyClickListOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onClick: PropTypes.func
};

export default OnlyClickListOption;
