import React, { PropTypes } from 'react';
import classNames from 'classnames';
import HighLightedText from './HighLightedText';
import { isIOS } from '../utils/deviceDetector';

function OnlyClickListOption({ value, label, addition, checked, typedValue, highlight, onClick }) {
  const optionClass = classNames(
    'oc-options-list__item oc-list-option',
    { 'oc-list-option--checked': checked },
    { 'oc-list-option--no-touch': !isIOS() },
    { 'oc-list-option--with-addition': addition },
  );
  const messageClass = classNames(
    'oc-option__message'
  );
  return (
    <li
      className={optionClass}
      onClick={() => onClick(value)}
    >
      <span className={messageClass}>
        {highlight
          ? <HighLightedText text={label} selection={typedValue} />
          : label
        }
        {addition && <div className="oc-option__addition">
          {addition}
        </div>}
      </span>
      <span className="oc-option__next-icon" />
    </li>
  );
}

OnlyClickListOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  addition: PropTypes.string,
  typedValue: PropTypes.string,
  checked: PropTypes.bool,
  highlight: PropTypes.bool,
  onClick: PropTypes.func,
};

export default OnlyClickListOption;
