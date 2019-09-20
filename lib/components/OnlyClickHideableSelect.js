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
      typedValue: '',
      isShowSelectOptions: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextState = { values: nextProps.values };
    this.setState(nextState);
  }

  getFilteredOptions(typedValue) {
    const { options, maxVisible } = this.props;
    return _(options)
      .filter(option => filterOption(option, typedValue))
      .take(maxVisible)
      .value();
  }

  setFocusOnInput = () => {
    this.refs['text-input'].focus();
  };

  propsChanged(nextProps) {
    return this.props.values.length !== nextProps.values.length || this.props.options.length !== nextProps.options.length;
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

  handleBlur = e => {
    if (!this.state.isShowSelectOptions) return;
    this.setState({ isShowSelectOptions: false });
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
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
    const { options, highlight, maxVisible, animatedSelection } = this.props;

    const { values, typedValue } = this.state;
    let { isShowSelectOptions } = this.state;
    const filteredOptions = this.getFilteredOptions(typedValue);

    isShowSelectOptions = isShowSelectOptions && !!filteredOptions.length;

    return (
      <div className="oc-select oc-select--hideable" ref="oc-select">
        <div className="oc-select__search-container">
          <div className="oc-select__search" ref="search-box" onClick={this.setFocusOnInput}>
            {values.map(value => (
              <span className="oc-selected-value" key={value}>
                {value}
                <span className="oc-selected-value__close-icon" onMouseDown={() => this.handleDelete(value)} />
              </span>
            ))}
            <div className="oc-select__input-container">
              <input
                ref="text-input"
                className="oc-select__input"
                type="text"
                value={typedValue}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                onKeyDown={this.handleKeyDown}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
            </div>
          </div>
        </div>
        {isShowSelectOptions && (
          <div className="oc-select__options-container">
            <OnlyClickOptionsList
              options={filteredOptions}
              selectedValues={values}
              onClick={this.handleClick}
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

OnlyClickHideableSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onBlur: PropTypes.func,
  onEnterKeyPress: PropTypes.func,
  autoFocus: PropTypes.bool,
  highlight: PropTypes.bool,
  maxVisible: PropTypes.number,
  hideableOptions: PropTypes.bool,
  animatedSelection: PropTypes.bool,
};

OnlyClickHideableSelect.defaultProps = {
  defaultValue: '',
  values: [],
  maxVisible: 1000,
};

export default OnlyClickHideableSelect;
