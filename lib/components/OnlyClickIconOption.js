import React, { PropTypes } from 'react';
import classNames from 'classnames';

function OnlyClickIconOption(props) {
  let {value, label, checked, iconClass, onClick} = props;
  var optionClass = classNames(
    'oc-icon-option',
    {'oc-icon-option--checked': checked}
  );
  return (
    <div className={optionClass} onClick={onClick.bind(null, value)}>
      <div className="oc-icon-option__content">
        <div className='oc-icon-option__icon-container'>
          <span className={`oc-icon-option__icon ${iconClass}`} />
        </div>
        <div className='oc-icon-option__label'>
          {label}
        </div>
      </div>
    </div>
  );
}

OnlyClickIconOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  iconClass: PropTypes.string,
  onClick: PropTypes.func
};

export default OnlyClickIconOption;
