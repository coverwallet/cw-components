import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Highlighter from 'react-highlight-words';
import { isIOS } from '../utils/deviceDetector';

const showArrowIcon = (listType, isDropdown) =>
  listType !== 'multiSelect' && !isDropdown;

const handleDropdownClick = (disabled, onDropdownClick, value) => e => {
  e.stopPropagation();
  return !disabled && onDropdownClick(value);
};

function OnlyClickDropdownListOption({
  id,
  value,
  label,
  addition,
  checked,
  tooltipKey,
  typedValue,
  highlight,
  highlightSanitizer,
  listType,
  onClick,
  onHelpClick,
  disabled,
  isDropdown,
  dropdownShowed,
  onDropdownClick,
  openDropdownText,
  closeDropdownText,
  dropdownContent,
}) {
  const optionClass = classNames(
    'oc-options-list__item oc-list-option',
    { 'oc-list-option--checked': checked },
    { 'oc-list-option--no-touch': !isIOS() },
    { 'oc-list-option--with-addition': addition },
    { 'oc-list-option--disabled': disabled },
    { 'oc-list-option--dropdown-opened': dropdownShowed },
  );
  const messageClass = classNames('oc-option__message');
  const multiSelectIconClass = classNames('oc-option__checked-icon', { 'oc-option__checked-icon--checked': checked });
  const dropdownIconClass = classNames(dropdownShowed ? 'oc-option__up-icon' : 'oc-option__down-icon');
  const dropdownText = dropdownShowed ? closeDropdownText : openDropdownText;

  return (
    <li id={id} className={optionClass} onClick={() => !disabled && onClick(value)} disabled={disabled}>
      <div className="oc-option__dropdown-head">
        {listType === 'multiSelect' && <span className={multiSelectIconClass} />}
        <span className={messageClass}>
          {label}
          {addition && <div className="oc-option__addition">{addition}</div>}
        </span>
        <span onClick={handleDropdownClick(disabled, onDropdownClick, value)} className="oc-option__dropdown-text-block">
          <span className="oc-option__dropdown-text">{dropdownText}</span><i className={dropdownIconClass} />
        </span>
      </div>
      <div className="oc-option__dropdown-content">
        {dropdownContent}
      </div>
    </li>
  );
}

OnlyClickDropdownListOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  addition: PropTypes.string,
  tooltipKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  typedValue: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  highlight: PropTypes.bool,
  highlightSanitizer: PropTypes.func,
  listType: PropTypes.string,
  onClick: PropTypes.func,
  onHelpClick: PropTypes.func,
  isDropdown: PropTypes.bool,
  onDropdownClick: PropTypes.func,
  dropdownShowed: PropTypes.bool,
  openDropdownText: PropTypes.string,
  closeDropdownText: PropTypes.string,
  dropdownContent: PropTypes.func,
};

export default OnlyClickDropdownListOption;
