import React from 'react';
import PropTypes from 'prop-types';

import ButtonsListSelectOption from './ButtonsListSelectOption';

const ButtonsListSelectOptions = props => {
  const { options, onClick, onClickHelp } = props;

  return (
    <ul>
      {options.map(option => (
        <ButtonsListSelectOption
          key={option.value}
          value={option.value}
          label={option.label}
          infoText={option.infoText}
          onClick={onClick}
          onClickHelp={onClickHelp}
        />
      ))}
    </ul>
  );
};

ButtonsListSelectOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func,
  onClickHelp: PropTypes.func,
  selectedValues: PropTypes.arrayOf(PropTypes.string),
};

export default ButtonsListSelectOptions;
