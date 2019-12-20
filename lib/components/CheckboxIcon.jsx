import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getCheckboxIconClass = checked => classNames('checkbox-icon', {
  'checkbox-icon--checked': checked,
  'checkbox-icon--unchecked': !checked,
});

const CheckboxIcon = ({ checked }) => (
  <div className={getCheckboxIconClass(checked)}></div>
);

CheckboxIcon.propTypes = {
  checked: PropTypes.bool,
};

export default CheckboxIcon;
