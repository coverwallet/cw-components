import React from 'react';
import PropTypes from 'prop-types';

const TextWithIcon = ({ iconClass, label, className = '', ...props }) => (
  <p {...props} className={`title-with-icon ${className} ${iconClass}`}>
    {label}
  </p>
);

TextWithIcon.propTypes = {
  iconClass: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TextWithIcon;
