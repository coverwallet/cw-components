import React from 'react';
import PropTypes from 'prop-types';

import ButtonsListSelectOption from './ButtonsListSelectOption';
import getDataTest from '../utils/dataTestHelper';

const ButtonsListSelectOptions = props => {
  const { options, selectedOptions, onClick, onOpenHelp, onCloseHelp, accordion, showCheckbox, dataTest } = props;

  return (
    <ul className="buttons-list-select-options">
      {options.map(option => (
        <ButtonsListSelectOption
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          label={option.label}
          iconClass={option.iconClass}
          infoText={option.infoText}
          onClick={onClick}
          onOpenHelp={onOpenHelp}
          onCloseHelp={onCloseHelp}
          selected={selectedOptions.includes(option.value)}
          accordion={accordion}
          showCheckbox={showCheckbox}
          dataTest={dataTest || getDataTest(option.value)}
        />
      ))}
    </ul>
  );
};

ButtonsListSelectOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired).isRequired,
  onClick: PropTypes.func,
  onOpenHelp: PropTypes.func,
  onCloseHelp: PropTypes.func,
  accordion: PropTypes.bool,
  showCheckbox: PropTypes.bool,
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
  dataTest: PropTypes.string,
};

export default ButtonsListSelectOptions;
