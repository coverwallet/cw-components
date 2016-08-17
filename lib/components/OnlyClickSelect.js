import React, { PropTypes } from 'react';
import smoothScroll from 'smoothscroll';
import OnlyClickOptionsList from './OnlyClickListOptions';
import OnlyClickIconOptions from './OnlyClickIconOptions';

class OnlyClickSelect extends React.Component {
  constructor(props) {
    super(props);
    this.mobileWidth = 480;
    this.state = {
      values: props.values,
      typedValue: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextState = { values: nextProps.values };
    if (this.propsChanged(nextProps)) {
      nextState.typedValue = '';
    }
    this.setState(nextState);
  }

  propsChanged(nextProps) {
    return (
      this.props.type !== nextProps.type ||
      this.props.values.length !== nextProps.values.length ||
      this.props.options.length !== nextProps.options.length
    );
  }

  handleFocus = () => {
    this.refs['text-input'].focus();
  };

  scrollToInput() {
    const searchBox = this.refs['search-box'];
    const input = this.refs['text-input'];
    const scrollTop = this.props.scrollTop || 100;
    const scrollToPosition = searchBox.getBoundingClientRect().top + window.pageYOffset - scrollTop;
    smoothScroll(scrollToPosition, 1000, () => {
      if (this.props.autoFocus) {
        input.focus();
      }
    });
  }

  shouldScroll() {
    const searchBox = this.refs['search-box'];
    const pixelsToElement = searchBox.getBoundingClientRect().top;
    return (this.props.autoScroll && (pixelsToElement < 0));
  }

  shouldFocus() {
    return (this.props.autoFocus && window && (window.innerWidth > this.mobileWidth));
  }

  handleClick = (value) => {
    const { values } = this.state;
    if (values.indexOf(value) === -1) {
      this.setState({ values: [...values, value] });
      this.props.onClick && this.props.onClick(value);
    } else {
      this.handleDelete(value);
    }
    if (this.shouldScroll()) {
      this.scrollToInput();
    } else if (this.shouldFocus()) {
      this.handleFocus();
    }
  };

  handleDelete(value) {
    const { values } = this.state;
    if (values.indexOf(value) !== -1) {
      this.setState({
        values: values.filter(val => value !== val),
      });
    }
    this.props.onDelete && this.props.onDelete(value);
  }

  render() {
    const { type, options, placeholder, hint, onHelpIconClick, highlight } = this.props;
    const { values, typedValue } = this.state;
    const filteredOptions = options.filter(option => {
      const regexInput = new RegExp(typedValue.toLowerCase());
      return regexInput.test(option.value.toLowerCase());
    });
    return (
      <div className="oc-select">
        <div className="oc-select__search-container">
          <div className="oc-select__search" ref="search-box" onClick={this.handleFocus}>
            {values.map(value => (
              <span className="oc-selected-value" key={value}>
                {value}
                <span
                  className="oc-selected-value__close-icon"
                  onClick={() => this.handleDelete(value)}
                />
              </span>
            ))}
            <div className="oc-select__input-container">
              <input
                ref="text-input"
                className="oc-select__input"
                type="text"
                placeholder={placeholder}
                value={this.state.typedValue}
                onChange={(e) => this.setState({ typedValue: e.target.value })}
              />
            </div>
          </div>
        </div>
        {hint && <div className="oc-select__hint">{hint}</div>}
        <div className="oc-select__options-container">
          {type === 'icons' ?
            <OnlyClickIconOptions
              options={filteredOptions}
              selectedValues={values}
              onClick={this.handleClick}
              onHelpClick={onHelpIconClick}
            /> :
            <OnlyClickOptionsList
              options={filteredOptions}
              selectedValues={values}
              onClick={this.handleClick}
              typedValue={typedValue}
              highlight={highlight}
            />
          }
        </div>
      </div>
    );
  }
}

OnlyClickSelect.propTypes = {
  type: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onHelpIconClick: PropTypes.func,
  autoFocus: PropTypes.bool,
  highlight: PropTypes.bool,
  autoScroll: PropTypes.bool,
  scrollTop: PropTypes.number,
};

OnlyClickSelect.defaultProps = {
  values: [],
};

export default OnlyClickSelect;
