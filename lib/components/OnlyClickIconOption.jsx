import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isIOS } from '../utils/deviceDetector';

function OnlyClickIconOption(props) {
  const { id, value, label, checked, disabled, recommendable, iconClass, onClick, textContent, iconClassForCheckedState, dataTest } = props;
  const optionClass = classNames(
    'oc-icon-option',
    { 'oc-icon-option--checked': checked },
    { 'oc-icon-option--disabled': disabled },
    { 'oc-icon-option--recommendable': recommendable },
    { 'oc-icon-option--no-touch': !isIOS() }
  );

  const isCheckedIcon = checked && iconClassForCheckedState;
  const finalIconClass = isCheckedIcon ? iconClassForCheckedState : iconClass;

  const iconClasses = classNames(
    'oc-icon-option__icon',
    { [finalIconClass]: finalIconClass },
  );

  const dataTestValue = `${dataTest}-${String(value).toLowerCase().replace(' ', '-')}`;

  return (
    <div id={id} className={optionClass} onClick={() => !disabled && onClick(value)} data-test={dataTestValue}>
      <div className="oc-icon-option__content-container">
        <div className="oc-icon-option__content">
          <div className="oc-icon-option__icon-container">
            <span className={iconClasses} />
            {!isCheckedIcon && (
              <div className="oc-icon-option__text-content">
                {textContent}
              </div>)}
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
  textContent: PropTypes.string,
  iconClassForCheckedState: PropTypes.string,
  dataTest: PropTypes.string,
};

export default OnlyClickIconOption;
