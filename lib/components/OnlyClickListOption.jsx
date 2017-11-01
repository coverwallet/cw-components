import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Highlighter from 'react-highlight-words';
import { isIOS } from '../utils/deviceDetector';

function OnlyClickListOption({ value, label, addition, checked, typedValue, highlight, listType, onClick }) {
  const optionClass = classNames(
    'oc-options-list__item oc-list-option',
    { 'oc-list-option--checked': checked },
    { 'oc-list-option--no-touch': !isIOS() },
    { 'oc-list-option--with-addition': addition },
  );
  const messageClass = classNames(
    'oc-option__message'
  );
  const multiSelectIconClass = classNames(
    'oc-option__checked-icon',
    { 'oc-option__checked-icon--checked': checked },
  );
  return (
    <li
      className={optionClass}
      onClick={() => onClick(value)}
    >
      {listType === 'multiSelect' && <span className={multiSelectIconClass} />}
      <span className={messageClass}>
        {highlight ?
          <Highlighter
            highlightClassName={'oc-option__search-term'}
            searchWords={typedValue.trim().split(' ')}
            textToHighlight={label}
          /> :
          label
        }
        {addition && <div className="oc-option__addition">
          {addition}
        </div>}
      </span>
      {listType !== 'multiSelect' && <span className="oc-option__next-icon" />}
    </li>
  );
}

OnlyClickListOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  addition: PropTypes.string,
  typedValue: PropTypes.string,
  checked: PropTypes.bool,
  highlight: PropTypes.bool,
  listType: PropTypes.string,
  onClick: PropTypes.func,
};

export default OnlyClickListOption;
