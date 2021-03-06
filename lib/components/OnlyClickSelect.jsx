import React from 'react';
import PropTypes from 'prop-types';
import smoothScroll from 'smoothscroll';
import take from 'lodash/take';
import OnlyClickOptionsList from './OnlyClickListOptions';
import OnlyClickIconOptions from './OnlyClickIconOptions';
import escapeSpecialCharacters from '../utils/string-helper';
import classNames from 'classnames';

const filterOption = (option, typedValue) => {
  const text = typedValue.toLowerCase();
  const regexInput = new RegExp(escapeSpecialCharacters(text));
  return regexInput.test(option.value.toLowerCase());
};

class OnlyClickSelect extends React.Component {
  constructor(props) {
    super(props);
    this.mobileWidth = 480;
    this.state = {
      values: props.values,
      typedValue: props.defaultValue || '',
      openDropdown: props.dropdown && props.openedDropdown,
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextState = { values: nextProps.values, openDropdown: nextProps.dropdown && nextProps.openedDropdown };
    this.setState(nextState);
  }

  getFilteredOptions(typedValue) {
    const { options, maxVisible } = this.props;
    const filteredOptions = options.filter(option => {
      if (this.props.filterOption) {
        return this.props.filterOption(option, typedValue);
      }
      return filterOption(option, typedValue);
    });

    return take(filteredOptions, maxVisible);
  }

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
    const scrollToPosition = searchBox.getBoundingClientRect().top + (window.pageYOffset - scrollTop);
    smoothScroll(scrollToPosition, 1000, () => {
      if (this.props.autoFocus) {
        input.focus();
      }
    });
  }

  handleFocus = () => {
    this.refs['text-input'].focus();
  };

  toggleDropdown = () => {
    this.setState({ openDropdown: !this.state.openDropdown });
  };

  shouldScroll() {
    const { hideInput } = this.props;
    if (hideInput) {
      return false;
    }
    const searchBox = this.refs['search-box'];
    const pixelsToElement = searchBox.getBoundingClientRect().top;
    return this.props.autoScroll && pixelsToElement < 0;
  }

  shouldFocus() {
    const { hideInput } = this.props;
    if (hideInput) {
      return false;
    }
    return this.props.autoFocus && window && window.innerWidth > this.mobileWidth;
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({ typedValue: value }, () => {
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    });
  };

  handleClick = value => {
    const { values } = this.state;
    const { onClick, resetTypedValue, hideInput } = this.props;
    if (values.indexOf(value) === -1) {
      this.setState({ values: [...values, value] });

      if (resetTypedValue) {
        this.setState({ typedValue: '' });
      }

      if (onClick) {
        onClick(value);
      }
    } else {
      this.handleDelete(value);
    }
    if (this.shouldScroll()) {
      this.scrollToInput();
    } else if (this.shouldFocus()) {
      this.handleFocus();
    }
  };

  handleKeyPress = e => {
    const { onEnterKeyPress } = this.props;
    if (onEnterKeyPress && e.key === 'Enter') {
      const { value } = e.target;
      onEnterKeyPress(value);
    }
  };

  handleDelete(value, e) {
    const { values } = this.state;
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (values.indexOf(value) !== -1) {
      this.setState({
        values: values.filter(val => value !== val),
      });
    }
    if (this.props.onDelete) {
      this.props.onDelete(value);
    }
  }

  selectedValueLabel = (value) => {
    const { options, showOptionLabel } = this.props;
    if (showOptionLabel) {
      const option = options.find((o) => o.value === value);

      if (!!option) return option.label;
    }

    return value;
  };

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
      onTooltipEnter,
      onTooltipOut,
      scrollable,
      dropdown,
      openedDropdown,
      smallInput,
      grayBorder,
      noArrows,
      hideInput,
      showOptionLabel,
      dataTest,
    } = this.props;

    const { values, typedValue, openDropdown } = this.state;
    const filteredOptions = disableFilter ? take(options, maxVisible) : this.getFilteredOptions(typedValue);
    const optionsContainerClassName = classNames('oc-select__options-container', {
      'oc-select__options-container--scrollable': scrollable,
      'oc-select__options-container--dropdown': dropdown,
    });
    const optionSearchClassName = classNames(
      'oc-select__search',
      { 'oc-select__search--dropdown': dropdown },
      { 'oc-select__search--small-input': smallInput },
      { 'oc-select__search--gray-border': grayBorder }
    );
    const inputClassName = classNames(
      'oc-select__input',
      { 'oc-select__input--no-margin': smallInput }
    );
    const shouldRenderInput = !dropdown || values.length === 0;

    return (
      <div className="oc-select">
        {!hideInput && (<div className="oc-select__search-container">
          <div className={optionSearchClassName} ref="search-box" onClick={dropdown ? this.toggleDropdown : this.handleFocus}>
            {values.map(value => (
              <span className="oc-selected-value" key={this.selectedValueLabel(value)}>
                {this.selectedValueLabel(value)}
                {!disableDelete && <span className="oc-selected-value__close-icon" onClick={e => this.handleDelete(value, e)} />}
              </span>
            ))}
            {shouldRenderInput && (
              <div className="oc-select__input-container">
                <input
                  ref="text-input"
                  className={inputClassName}
                  type="text"
                  placeholder={placeholder}
                  value={typedValue}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                  disabled={disableInput}
                  data-test={dataTest}
                />
              </div>
            )}
          </div>
        </div>)}
        {hint && <div className="oc-select__hint">{hint}</div>}
        {errorMessage && <div className="oc-select__error">{errorMessage}</div>}
        {(!dropdown || openDropdown) && (
          <div className={optionsContainerClassName}>
            {type === 'icons' ? (
              <OnlyClickIconOptions
                options={filteredOptions}
                selectedValues={values}
                onClick={this.handleClick}
                onTooltipEnter={onTooltipEnter}
                onTooltipOut={onTooltipOut}
                onHelpClick={onHelpIconClick}
                dataTest={dataTest}
              />
            ) : (
              <OnlyClickOptionsList
                options={filteredOptions}
                selectedValues={values}
                onClick={this.handleClick}
                typedValue={typedValue}
                highlight={highlight}
                highlightSanitizer={highlightSanitizer}
                withArrows={!noArrows}
                scrollable={scrollable}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

OnlyClickSelect.propTypes = {
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
  onTooltipEnter: PropTypes.func,
  onTooltipOut: PropTypes.func,
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
  resetTypedValue: PropTypes.bool,
  scrollable: PropTypes.bool,
  dropdown: PropTypes.bool,
  openedDropdown: PropTypes.bool,
  smallInput: PropTypes.bool,
  grayBorder: PropTypes.bool,
  noArrows: PropTypes.bool,
  hideInput: PropTypes.bool,
  showOptionLabel: PropTypes.bool,
  dataTest: PropTypes.string,
};

OnlyClickSelect.defaultProps = {
  defaultValue: '',
  values: [],
  maxVisible: 1000,
  dataTest: '',
};

export default OnlyClickSelect;
