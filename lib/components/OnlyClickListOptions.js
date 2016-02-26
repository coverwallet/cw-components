'use strict';

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import OnlyClickOption from './OnlyClickListOption';

function OnlyClickListOptions(props) {
  let {options, selectedValues,  onClick} = props;

  return (
    <ul className='oc-list-options'>
      {options.map(option=> {
        return (
          <OnlyClickOption
            key={option.value}
            checked={selectedValues.indexOf(option.value) !== -1}
            onClick={onClick}
            {...option}
          />
        );
      })}
    </ul>
  );
}

OnlyClickListOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  selectedValues: PropTypes.arrayOf(PropTypes.string)
};

export default OnlyClickListOptions;
