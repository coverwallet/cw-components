import React from 'react';
import PropTypes from 'prop-types';
import smoothScroll from 'smoothscroll';
import _ from 'lodash';
import OnlyClickOptionsList from './OnlyClickListOptions';
import OnlyClickIconOptions from './OnlyClickIconOptions';
import escapeSpecialCharacters from '../utils/string-helper';

const filterOption = (option, typedValue) => {
  const text = typedValue.toLowerCase();
  const regexInput = new RegExp(escapeSpecialCharacters(text));
  return regexInput.test(option.value.toLowerCase());
};

class OnlyClickHideableSelect extends React.Component {
  constructor(props) {
    super(props);
    this.mobileWidth = 480;
    this.state = {
      values: props.values,
      typedValue: props.defaultValue || '',
      isShowSelectOptions: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextState = { values: nextProps.values };
    this.setState(nextState);

    if (nextProps.clickedElement && this.props.clickedElement !== nextProps.clickedElement) {
      this.triggerIsShowSelectOptions(nextProps);
    }
  }

  getFilteredOptions(typedValue) {
    const { options, maxVisible } = this.props;
    return _(options)
      .filter(option => {
        if (this.props.filterOption) {
          return this.props.filterOption(option, typedValue);
        }
        return filterOption(option, typedValue);
      })
      .take(maxVisible)
      .value();
  }

  setFocusOnInput = () => {
    this.refs['text-input'].focus();
  };

  triggerIsShowSelectOptions = nextProps => {
    if (!this.refs['oc-select'].contains(nextProps.clickedElement)) {
      this.setState({ isShowSelectOptions: false });
    }
  };

  propsChanged(nextProps) {
    return (
      this.props.type !== nextProps.type ||
      this.props.values.length !== nextProps.values.length ||
      this.props.options.length !== nextProps.options.length
    );
  }

  scrollToInput() {
    const searchBox = this.refs['search-box'];
    const input = this.refs['text-input'];
    const scrollTop = this.props.scrollTop || 100;
    const scrollToPosition =
      searchBox.getBoundingClientRect().top + (window.pageYOffset - scrollTop);
    smoothScroll(scrollToPosition, 1000, () => {
      if (this.props.autoFocus) {
        input.focus();
      }
    });
  }

  shouldScroll() {
    const searchBox = this.refs['search-box'];
    const pixelsToElement = searchBox.getBoundingClientRect().top;
    return this.props.autoScroll && pixelsToElement < 0;
  }

  shouldFocus() {
    return this.props.autoFocus && window && window.innerWidth > this.mobileWidth;
  }

  handleChange = e => {
    const { typedValue } = this.state;

    if (typedValue !== e.target.value) {
      this.setState({ isShowSelectOptions: true });
    }

    const value = e.target.value;
    this.setState({ typedValue: value }, () => {
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    });
  };

  handleFocus = () => {
    this.setState({ isShowSelectOptions: true });
  };

  handleClick = value => {
    const { values } = this.state;

    if (values.indexOf(value) === -1) {
      this.setState({ values: [...values, value], isShowSelectOptions: false, typedValue: '' });

      if (this.props.onClick) {
        this.props.onClick(value);
      }
    } else {
      this.handleDelete(value);
    }
    if (this.shouldScroll()) {
      this.scrollToInput();
    } else if (this.shouldFocus()) {
      this.setFocusOnInput();
    }
  };

  handleKeyPress = e => {
    const { onEnterKeyPress } = this.props;

    if (onEnterKeyPress && e.key === 'Enter') {
      const { value } = e.target;
      onEnterKeyPress(value);
    }
  };

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({ isShowSelectOptions: false });
    }
  };

  handleDelete(value) {
    const { values } = this.state;
    if (values.indexOf(value) !== -1) {
      this.setState({
        values: values.filter(val => value !== val),
      });
    }
    if (this.props.onDelete) {
      this.props.onDelete(value);
    }
  }

  render() {
    const {
      type,
      options,
      placeholder,
      hint,
      errorMessage,
      highlight,
      highlightSanitizer,
      maxVisible,
      onHelpIconClick,
      disableFilter,
      disableInput,
      disableDelete,
      animatedSelection,
    } = this.props;

    const { values, typedValue } = this.state;
    let { isShowSelectOptions } = this.state;
    const filteredOptions = disableFilter
      ? _.take(options, maxVisible)
      : this.getFilteredOptions(typedValue);

    isShowSelectOptions = isShowSelectOptions && !!filteredOptions.length;

    return (
      <div className="oc-select oc-select--hideable" ref="oc-select">
        <div className="oc-select__search-container">
          <div className="oc-select__search" ref="search-box" onClick={this.setFocusOnInput}>
            {values.map(value => (
              <span className="oc-selected-value" key={value}>
                {value}
                {!disableDelete && (
                  <span
                    className="oc-selected-value__close-icon"
                    onClick={() => this.handleDelete(value)}
                  />
                )}
              </span>
            ))}
            <div className="oc-select__input-container">
              <input
                ref="text-input"
                className="oc-select__input"
                type="text"
                placeholder={placeholder}
                value={typedValue}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                onKeyDown={this.handleKeyDown}
                onFocus={this.handleFocus}
                disabled={disableInput}
              />
            </div>
          </div>
        </div>
        {hint && <div className="oc-select__hint">{hint}</div>}
        {errorMessage && <div className="oc-select__error">{errorMessage}</div>}
        {isShowSelectOptions && (
          <div className="oc-select__options-container">
            {type === 'icons' ? (
              <OnlyClickIconOptions
                options={filteredOptions}
                selectedValues={values}
                onClick={this.handleClick}
                onHelpClick={onHelpIconClick}
              />
            ) : (
              <OnlyClickOptionsList
                options={filteredOptions}
                selectedValues={values}
                onClick={this.handleClick}
                typedValue={typedValue}
                highlight={highlight}
                highlightSanitizer={highlightSanitizer}
                animatedSelection={animatedSelection}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

OnlyClickHideableSelect.propTypes = {
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  hint: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.arrayOf(PropTypes.string),
  filterOption: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onHelpIconClick: PropTypes.func,
  onEnterKeyPress: PropTypes.func,
  disableFilter: PropTypes.bool,
  disableDelete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  highlight: PropTypes.bool,
  highlightSanitizer: PropTypes.func,
  disableInput: PropTypes.bool,
  autoScroll: PropTypes.bool,
  scrollTop: PropTypes.number,
  maxVisible: PropTypes.number,
  hideableOptions: PropTypes.bool,
  animatedSelection: PropTypes.bool,
  clickedElement: PropTypes.object,
};

OnlyClickHideableSelect.defaultProps = {
  defaultValue: '',
  values: [],
  maxVisible: 1000,
};

export default OnlyClickHideableSelect;
