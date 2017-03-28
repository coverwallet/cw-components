import React, { PropTypes } from 'react';
import OnlyClickIconOption from './OnlyClickIconOption';

function OnlyClickIconOptions(props) {
  const { selectedValues, onClick, onHelpClick } = props;
  return (
    <div className="oc-icon-options">
      {props.options.map(option => (
        <div className="oc-icon-options__item oc-icon-option-container" key={option.value}>
          <OnlyClickIconOption
            checked={selectedValues.indexOf(option.value) !== -1}
            onClick={onClick}
            {...option}
          />
          {option.tooltipKey && (
            <span
              className="oc-icon-options__item-help-icon"
              id={option.tooltipKey}
              onClick={onHelpClick && onHelpClick.bind(null, option.tooltipKey)}
              tabIndex="-1"
            />
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
