import React from 'react';
import PropTypes from 'prop-types';
import OnlyClickIconOption from './OnlyClickIconOption';

const noOp = () => {};

function OnlyClickIconOptions(props) {
  const {
    selectedValues,
    onClick,
    onHelpClick,
    onMouseEnter = noOp,
    onMouseOut = noOp,
  } = props;
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
              onMouseEnter={onMouseEnter}
              onMouseOut={onMouseOut}
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
  onMouseEnter: PropTypes.func,
  onMouseOut: PropTypes.func,
  selectedValues: PropTypes.arrayOf(PropTypes.string),
};

export default OnlyClickIconOptions;
