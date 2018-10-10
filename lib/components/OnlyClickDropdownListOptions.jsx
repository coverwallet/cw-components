import React from 'react';
import PropTypes from 'prop-types';
import OnlyClickDropdownListOption from './OnlyClickDropdownListOption';
import classNames from 'classnames';

function OnlyClickDropdownListOptions(props) {
  const {
    options,
    selectedValues,
    openedElements,
    typedValue,
    highlight,
    highlightSanitizer,
    listType,
    onClick,
    onDropdownClick,
    onHelpClick,
    disabled,
    openDropdownText,
    closeDropdownText,
    isDropdown,
  } = props;

  return (
    <ul
      className={classNames('oc-list-options', 'oc-multi-select-dropdown__list-items', {
        'oc-list-options--disabled': disabled,
      })}
    >
      {options.map((option, i) => (
        <OnlyClickDropdownListOption
          key={option.value + i}
          checked={selectedValues.indexOf(option.value) !== -1}
          dropdownShowed={openedElements.includes(option.value)}
          typedValue={typedValue}
          highlight={highlight}
          highlightSanitizer={highlightSanitizer}
          listType={listType}
          onClick={onClick}
          onDropdownClick={onDropdownClick}
          onHelpClick={onHelpClick}
          openDropdownText={openDropdownText}
          closeDropdownText={closeDropdownText}
          isDropdown={isDropdown}
          {...option}
          disabled={disabled || option.disabled}
        />
      ))}
    </ul>
  );
}

OnlyClickDropdownListOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  onHelpClick: PropTypes.func,
  selectedValues: PropTypes.arrayOf(PropTypes.string),
  typedValue: PropTypes.string,
  highlight: PropTypes.bool,
  highlightSanitizer: PropTypes.func,
  listType: PropTypes.string,
  disabled: PropTypes.bool,
  onDropdownClick: PropTypes.func,
  openedElements: PropTypes.arrayOf(PropTypes.string),
  openDropdownText: PropTypes.string,
  closeDropdownText: PropTypes.string,
  isDropdown: PropTypes.bool,
};

OnlyClickDropdownListOptions.defaultProps = {
  openedElements: [],
};

export default OnlyClickDropdownListOptions;
