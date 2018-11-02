import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextWithIcon = ({ iconClass, label, className = '', ...props }) => (
  <p {...props} className={classNames('title-with-icon', `${className}`)}>
    <span className={`${iconClass} title-with-icon__icon`} />
    {label}
  </p>
);

TextWithIcon.propTypes = {
  iconClass: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TextWithIcon;
