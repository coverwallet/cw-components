import React from 'react';
import PropTypes from 'prop-types';
import OnlyClickOption from './OnlyClickListOption';
import classNames from 'classnames';

function OnlyClickListOptions(props) {
  const {
    options,
    selectedValues,
    typedValue,
    highlight,
    listType,
    onClick,
    onHelpClick,
    disabled,
  } = props;

  return (
    <ul
      className={classNames('oc-list-options', {
        'oc-list-options--disabled': disabled
      })}
    >
      {options.map((option, i) => (
        <OnlyClickOption
          key={option.value + i}
          checked={selectedValues.indexOf(option.value) !== -1}
          typedValue={typedValue}
          highlight={highlight}
          listType={listType}
          onClick={onClick}
          onHelpClick={onHelpClick}
          {...option}
          disabled={disabled}
        />
      ))}
    </ul>
  );
}

OnlyClickListOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  onHelpClick: PropTypes.func,
  selectedValues: PropTypes.arrayOf(PropTypes.string),
  typedValue: PropTypes.string,
  highlight: PropTypes.bool,
  listType: PropTypes.string,
};

export default OnlyClickListOptions;
