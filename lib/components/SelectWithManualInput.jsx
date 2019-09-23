import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import OnlyClickOptionsList from './OnlyClickListOptions';
import escapeSpecialCharacters from '../utils/string-helper';

const filterOption = (option, typedValue) => {
  const text = typedValue.toLowerCase();
  const regexInput = new RegExp(escapeSpecialCharacters(text));
  return regexInput.test(option.value.toLowerCase());
};

class SelectWithManualInput extends React.Component {
  state = {
    typedValue: '',
    isShowSelectOptions: false,
  };

  getFilteredOptions = typedValue => {
    const { options, selectedOptions, maxVisible } = this.props;
    const availableOptions = options.filter(option => !selectedOptions.includes(option.value));

    return _(availableOptions)
      .filter(option => filterOption(option, typedValue))
      .take(maxVisible)
      .value();
  }

  setFocusOnInput = () => {
    this.refs['text-input'].focus();
  };

  handleChange = selectedOptions => {
    const { onChange } = this.props;
    onChange(_.uniq(selectedOptions));
  }

  handleInputTyping = e => {
    const { typedValue } = this.state;
    const { value } = e.target;

    this.setState({ typedValue: value });
    if (typedValue !== value) {
      this.setState({ isShowSelectOptions: true });
    }
  };

  handleFocus = () => {
    this.setState({ isShowSelectOptions: true });
  };

  handleBlur = () => {
    const { typedValue } = this.state;
    if (!typedValue) return;
    const { selectedOptions } = this.props;
    this.handleChange([...selectedOptions, typedValue]);
    this.setState({ isShowSelectOptions: false, typedValue: '' });
  };

  handleSelectOption = optionSelected => {
    const { selectedOptions } = this.props;
    let newSelectedOptions = [];

    if (selectedOptions.includes(optionSelected)) {
      newSelectedOptions = selectedOptions.filter(option => option !== optionSelected);
    } else {
      newSelectedOptions = [...selectedOptions, optionSelected];
    }
    this.setState({ isShowSelectOptions: false, typedValue: '' });
    this.handleChange(newSelectedOptions);
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      const { typedValue } = this.state;
      const { selectedOptions } = this.props;
      this.handleChange([...selectedOptions, typedValue]);
      this.setState({ typedValue: '', isShowSelectOptions: false });
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.setState({ isShowSelectOptions: false });
    }
  };

  handleDelete = optionToDelete => {
    const { selectedOptions, onDelete } = this.props;
    const updatedSelectedOptions = selectedOptions.filter(optionSelected => optionSelected !== optionToDelete);

    this.handleChange(updatedSelectedOptions);
    if (onDelete) {
      onDelete(optionToDelete);
    }
  }

  render() {
    const { options, selectedOptions, highlight, maxVisible, animatedSelection } = this.props;

    const { typedValue, isShowSelectOptions } = this.state;
    const filteredOptions = this.getFilteredOptions(typedValue);

    const isOptionsDisplayed = isShowSelectOptions && !!filteredOptions.length;

    return (
      <div className="oc-select oc-select--hideable" ref="oc-select">
        <div className="oc-select__search-container">
          <div className="oc-select__search" ref="search-box" onClick={this.setFocusOnInput}>
            {selectedOptions.map(optionSelected => (
              <span className="oc-selected-value" key={optionSelected}>
                {optionSelected}
                <span className="oc-selected-value__close-icon" onMouseDown={() => this.handleDelete(optionSelected)} />
              </span>
            ))}
            <div className="oc-select__input-container">
              <input
                ref="text-input"
                className="oc-select__input"
                type="text"
                value={typedValue}
                onChange={this.handleInputTyping}
                onKeyPress={this.handleKeyPress}
                onKeyDown={this.handleKeyDown}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
            </div>
          </div>
        </div>
        {isOptionsDisplayed && (
          <div className="oc-select__options-container">
            <OnlyClickOptionsList
              options={filteredOptions}
              selectedValues={selectedOptions}
              onClick={this.handleSelectOption}
              typedValue={typedValue}
              highlight={highlight}
              animatedSelection={animatedSelection}
            />
          </div>
        )}
      </div>
    );
  }
}

SelectWithManualInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onBlur: PropTypes.func,
  highlight: PropTypes.bool,
  maxVisible: PropTypes.number,
  animatedSelection: PropTypes.bool,
};

SelectWithManualInput.defaultProps = {
  selectedOptions: [],
  maxVisible: 1000,
};

export default SelectWithManualInput;
