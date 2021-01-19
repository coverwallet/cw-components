import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const addModifierClass = (modifier, modValue) => classname => classNames(classname, { [`${classname}--${modifier}`]: modValue });

const WideButton = ({ selected, children, dataTest }) => {
  const addClassWithSelected = addModifierClass('selected', selected);

  return (
    <li className={addClassWithSelected('wide-button')} data-test={dataTest}>
      <div className="wide-button__title--space-between wide-button__title">
        {children}
      </div>
    </li>
  );
};

WideButton.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.any,
  dataTest: PropTypes.string,
};

export default WideButton;
