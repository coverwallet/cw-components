import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getCheckboxIconClass = checked => classNames('checkbox-icon', {
  'checkbox-icon--checked': checked,
  'checkbox-icon--unchecked': !checked,
});

const CheckboxIcon = ({ checked, onClick }) => (
  <div className={getCheckboxIconClass(checked)} onClick={onClick}></div>
);

CheckboxIcon.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
};

CheckboxIcon.defaultProps = {
  onClick: () => {},
};

export default CheckboxIcon;
