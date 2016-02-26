import React, { PropTypes } from 'react';
import OnlyClickIconOption from './OnlyClickIconOption';

function OnlyClickIconOptions(props) {
  var {selectedValues, onClick} = props;
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
          </div>
        );
      })}
    </div>
  );
}

OnlyClickIconOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  selectedValues:  PropTypes.arrayOf(PropTypes.string)
};

export default OnlyClickIconOptions;
