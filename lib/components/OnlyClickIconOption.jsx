import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isIOS } from '../utils/deviceDetector';

function OnlyClickIconOption(props) {
  const { id, value, label, checked, disabled, recommendable, iconClass, onClick } = props;
  const optionClass = classNames(
    'oc-icon-option',
    { 'oc-icon-option--checked': checked },
    { 'oc-icon-option--disabled': disabled },
    { 'oc-icon-option--recommendable': recommendable },
    { 'oc-icon-option--no-touch': !isIOS() }
  );
  return (
    <div id={id} className={optionClass} onClick={() => !disabled && onClick(value)} >
      <div className="oc-icon-option__content-container">
        <div className="oc-icon-option__content">
          <div className="oc-icon-option__icon-container">
            <span className={`oc-icon-option__icon ${iconClass}`} />
          </div>
          <div className="oc-icon-option__label">{label}</div>
        </div>
      </div>
    </div>
  );
}

OnlyClickIconOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  recommendable: PropTypes.bool,
  iconClass: PropTypes.string,
  onClick: PropTypes.func,
};

export default OnlyClickIconOption;
