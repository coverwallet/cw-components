import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const addModifierClass = (modifier, modValue) => classname => classNames(classname, { [`${classname}--${modifier}`]: modValue });

const AccordionSelect = ({ selected, opened, infoText, children, onClick, disabled, dataTest }) => {
  const addClassWithSelected = addModifierClass('selected', selected);
  const addClassWithOpened = addModifierClass('opened', opened);
  const addClassWithDisabled = addModifierClass('disabled', disabled);

  return (
    <li className={`${addClassWithSelected('wide-button')} wide-button--accordion ${addClassWithDisabled('wide-button')}`} data-test={dataTest}>
      <div className={classNames('wide-button__title--space-between', addClassWithSelected('wide-button__title'))}>
        {children}
      </div>
      <div
        className={`${addClassWithOpened('wide-button__content')} ${addClassWithSelected('wide-button__tooltip-text')}`}
        onClick={onClick}
      >
        {infoText && <p className="wide-button__tooltip-text">{infoText}</p>}
      </div>
    </li>
  );
};

AccordionSelect.propTypes = {
  selected: PropTypes.bool,
  opened: PropTypes.bool,
  infoText: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  dataTest: PropTypes.string,
};

export default AccordionSelect;
