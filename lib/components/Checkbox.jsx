import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import exists from '../utils/exists';

const Checkbox = props => {
  const {
    id,
    name,
    label,
    className,
    labelClass,
    setValue,
    getValue,
    onChange,
  } = props;
  const inputId = id || name;
  const checkboxClassName = classNames('form-checkbox', className);

  const handleChange = e => {
    if (onChange) {
      onChange(e);
    }
    setValue(e.target.checked);
  };

  return (
    <div className="form-group form-group--checkbox">
      <div className={checkboxClassName}>
        <input
          type="checkbox"
          id={inputId}
          name={name}
          onChange={handleChange}
          checked={exists(getValue) ? getValue() : false}
        />
        <label htmlFor={inputId} />
      </div>
      {label && (
        <label htmlFor={inputId} className={labelClass}>
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelClass: PropTypes.string,
  setValue: PropTypes.func,
  getValue: PropTypes.func,
  onChange: PropTypes.func,
};

export default Checkbox;
