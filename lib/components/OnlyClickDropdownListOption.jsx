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
    'oc-list-option',
    'oc-multi-select-dropdown__item',
    { 'oc-list-option--no-touch': !isIOS() },
    { 'oc-list-option--with-addition': addition },
    { 'oc-list-option--disa__container--checkedbled': disabled },
  );
  const containerClass = classNames(
    'oc-dropdown-item', 'oc-dropdown-item__container',
    { 'oc-dropdown-item__container--checked': checked },
    { 'oc-dropdown-item__container--opened': dropdownShowed },
  );
  const contentClass = classNames('oc-dropdown-item__content');
  const headClasses = classNames('oc-dropdown-item__head');
  const dropdownClasses = classNames('oc-dropdown-item__head-info', 'oc-dropdown-item__dropdown-text');
  const messageClass = classNames('oc-option__message', 'oc-dropdown-item__head-info');
  const multiSelectIconClass = classNames('oc-dropdown-item__icon', 'oc-dropdown-item__head-info',
  );

  const dropdownIconClass = classNames(dropdownShowed ? 'oc-dropdown-item__up-icon' : 'oc-dropdown-item__down-icon');
  const dropdownText = dropdownShowed ? closeDropdownText : openDropdownText;

  return (
    <li id={id} className={optionClass} onClick={() => !disabled && onClick(value)} disabled={disabled}>
      <div className={containerClass}>
        <div className={headClasses}>
          {listType === 'multiSelect' && <span className={multiSelectIconClass} />}
          <span className={messageClass}>
            {label}
            {addition && <div className="oc-option__addition">{addition}</div>}
          </span>
          <span onClick={handleDropdownClick(disabled, onDropdownClick, value)} className={dropdownClasses}>
            <span>{dropdownText}</span><i className={dropdownIconClass} />
          </span>
        </div>
        <div className={contentClass}>
          {dropdownContent}
        </div>
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
