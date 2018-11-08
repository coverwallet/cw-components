import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const addModifierClass = (modifier, modValue) => classname => classNames(classname, { [`${classname}--${modifier}`]: modValue });

const WideButton = ({ selected, children }) => {
  const addClassWithSelected = addModifierClass('selected', selected);

  return (
    <li className={addClassWithSelected('wide-button')}>
      <div className="wide-button__title--space-between wide-button__title">
        {children}
      </div>
    </li>
  );
};

WideButton.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.any,
};

export default WideButton;
