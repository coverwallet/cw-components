import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const addModifierClass = (modifier, modValue) => classname => classNames(classname, { [`${classname}--${modifier}`]: modValue });

const AccordionSelect = ({ selected, opened, infoText, children, onClick }) => {
  const addClassWithSelected = addModifierClass('selected', selected);
  const addClassWithOpened = addModifierClass('opened', opened);

  return (
    <li className={`${addClassWithSelected('wide-button')} wide-button--accordion`}>
      <div className={classNames('wide-button__title--space-between', addClassWithSelected('wide-button__title'))}>
        {children}
      </div>
      <div
        className={`${addClassWithOpened('wide-button__content')} ${addClassWithSelected('wide-button__tooltip-text')}`}
        onClick={onClick}
      >
        {infoText && <p
          className="wide-button__tooltip-text"
          dangerouslySetInnerHTML={{ __html: infoText }}
        />}
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
};

export default AccordionSelect;
