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
    highlightSanitizer,
    listType,
    onClick,
    onHelpClick,
    disabled,
    listClasses,
    optionComponent,
    animatedSelection,
    withArrows,
    scrollable,
    dataTest,
  } = props;

  return (
    <ul
      className={classNames('oc-list-options', listClasses, {
        'oc-list-options--disabled': disabled,
      })}
    >
      {options.map((option, i) => (
        <OnlyClickOption
          key={option.value + i}
          checked={selectedValues ? selectedValues.indexOf(option.value) !== -1 : false}
          typedValue={typedValue}
          highlight={highlight}
          highlightSanitizer={highlightSanitizer}
          listType={listType}
          onClick={onClick}
          onHelpClick={onHelpClick}
          {...option}
          {...props}
          disabled={disabled || option.disabled}
          optionComponent={optionComponent}
          animatedSelection={animatedSelection}
          withArrow={withArrows}
          dataTest={dataTest}
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
  animatedSelection: PropTypes.bool,
  highlightSanitizer: PropTypes.func,
  listType: PropTypes.string,
  listClasses: PropTypes.string,
  disabled: PropTypes.bool,
  optionComponent: PropTypes.func,
  withArrows: PropTypes.bool,
  scrollable: PropTypes.bool,
  dataTest: PropTypes.string,
};

export default OnlyClickListOptions;
