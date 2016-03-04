import React, { PropTypes } from 'react';
import OnlyClickIconOption from './OnlyClickIconOption';

function OnlyClickIconOptions(props) {
  var {selectedValues, onClick, onHelpClick} = props;
  return (
    <div className='oc-icon-options'>
      {props.options.map(option=> {
        return (
          <div className='oc-icon-options__item oc-icon-option-container' key={option.value}>
            <OnlyClickIconOption
              checked={selectedValues.indexOf(option.value) !== -1}
              onClick={onClick}
              {...option}
            />
            {(option.tooltipKey && onHelpClick) ?
              <span
                className="oc-icon-options__item-help-icon"
                onClick={props.onHelpClick.bind(null, option.tooltipKey)}
              /> : ''
            }
          </div>
        );
      })}
    </div>
  );
}

OnlyClickIconOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  onHelpClick: PropTypes.func,
  selectedValues:  PropTypes.arrayOf(PropTypes.string)
};

export default OnlyClickIconOptions;