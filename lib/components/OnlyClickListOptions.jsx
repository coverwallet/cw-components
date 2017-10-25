import React from 'react';
import PropTypes from 'prop-types';
import OnlyClickOption from './OnlyClickListOption';

function OnlyClickListOptions(props) {
  const { options, selectedValues, typedValue, highlight, onClick } = props;
  return (
    <ul className="oc-list-options">
      {options.map((option, i) => (
        <OnlyClickOption
          key={option.value + i}
          checked={selectedValues.indexOf(option.value) !== -1}
          typedValue={typedValue}
          highlight={highlight}
          onClick={onClick}
          {...option}
        />
      ))}
    </ul>
  );
}

OnlyClickListOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  selectedValues: PropTypes.arrayOf(PropTypes.string),
  typedValue: PropTypes.string,
  highlight: PropTypes.bool,
};

export default OnlyClickListOptions;
