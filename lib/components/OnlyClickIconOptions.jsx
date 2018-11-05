import React from 'react';
import PropTypes from 'prop-types';
import OnlyClickIconOption from './OnlyClickIconOption';
import IconTooltip from './IconTooltip';

function OnlyClickIconOptions(props) {
  const { selectedValues, onClick, onHelpClick, options } = props;
  return (
    <div className="oc-icon-options">
      {options.map(option => (
        <div className="oc-icon-options__item oc-icon-option-container" key={option.value}>
          <OnlyClickIconOption
            checked={selectedValues.indexOf(option.value) !== -1}
            onClick={onClick}
            {...option}
          />
          {option.tooltipKey && (
            <IconTooltip onHelpClick={onHelpClick} tooltipKey={option.tooltipKey} />
          )}
        </div>
      ))}
    </div>
  );
}

OnlyClickIconOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  onHelpClick: PropTypes.func,
  selectedValues: PropTypes.arrayOf(PropTypes.string),
};

export default OnlyClickIconOptions;
