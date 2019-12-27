import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RadioInput = props => {
  const {
    id,
    name,
    label,
    className,
    labelClass,
    value,
    onChange,
    checked,
    dataCy,
  } = props;
  const inputId = id || `${name}${value}`;
  const checkboxClassName = classNames('form-checkbox', className);

  const handleChange = e => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div className="form-group form-group--checkbox">
      <div className={checkboxClassName}>
        <input
          type="radio"
          id={inputId}
          name={name}
          onChange={handleChange}
          value={value}
          checked={checked}
          data-cy={dataCy}
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

RadioInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelClass: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  dataCy: PropTypes.string,
};

export default RadioInput;
