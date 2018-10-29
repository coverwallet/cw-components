import React from 'react';
import PropTypes from 'prop-types';

const ButtonsListSelectOption = props => {
  const { value, label, selected, iconClass, onClick, infoText, onClickHelp } = props;

  return (
    <li>
      <div>
        <p onClick={() => onClick(value)}>
          <span className={iconClass}></span>
          {label}
        </p>
        {infoText &&
          <div onClick={() => onClickHelp(value)}>
            <span className="coverwallet-general-what-circle"></span>
          </div>}
      </div>
      {infoText && <p>{infoText}</p>}
    </li>
  );
};

ButtonsListSelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  infoText: PropTypes.string,
  selected: PropTypes.bool,
  iconClass: PropTypes.string,
  onClick: PropTypes.func,
  onClickHelp: PropTypes.func,
};

export default ButtonsListSelectOption;
