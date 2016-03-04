'use strict';

import React, { PropTypes } from 'react';
import smoothScroll from 'smoothscroll';
import OnlyClickOptionsList from './OnlyClickListOptions';
import OnlyClickIconOptions from './OnlyClickIconOptions';

class OnlyClickSelect extends React.Component {
  constructor(props) {
    super(props);
    this.mobileWidth = 480;
    this.state = {
      values: this.props.values,
      typeValue: ''
    }
  }

  propsChanged(nextProps) {
    return (
      this.props.type !== nextProps.type ||
      this.props.values.length !== nextProps.values.length ||
      this.props.options.length !== nextProps.options.length
    );
  }

  componentWillReceiveProps(nextProps) {
    var nextState = {values: nextProps.values};
    if (this.propsChanged(nextProps)) {
      nextState.typeValue = ''
    }
    this.setState(nextState)
  }

  handleFocus() {
    this.refs['text-input'].focus();
  }

  scrollToInput() {
    var searchBox = this.refs['search-box'];
    var input = this.refs['text-input'];
    var scrollToPosition = searchBox.getBoundingClientRect().top + window.pageYOffset - 50;
    smoothScroll(scrollToPosition, 1000, ()=> input.focus())
  }

  handleDelete(value) {
    let {values} = this.state;
    if(values.indexOf(value) !== -1) {
      this.setState({values: values.filter(val=> value !== val)});
    }
    this.props.onDelete && this.props.onDelete(value);
  }

  handleClick(value) {
    let {values} = this.state;
    if(values.indexOf(value) === -1) {
      this.setState({values: [...values, value]});
      this.props.onClick && this.props.onClick(value);
    } else {
      this.handleDelete(value)
    }
    if (window && (window.innerWidth > this.mobileWidth)) {
      this.scrollToInput();
    }
  }

  render() {
    let {type, options, placeholder, onHelpClick} = this.props;
    let filteredOptions = options.filter(option=> {
      let regexInput = new RegExp(this.state.typeValue.toLowerCase());
      return regexInput.test(option.value.toLowerCase());
    });
    return (
      <div className='oc-select'>
        <div className='oc-select__search-container'>
          <div className='oc-select__search' ref="search-box" onClick={this.handleFocus.bind(this)}>
            {this.state.values.map(value=> {
              return (
                <span className='oc-selected-value' key={value}>
                  {value}
                  <span
                    className='oc-selected-value__close-icon'
                    onClick={this.handleDelete.bind(this, value)}
                  />
                </span>
              );
            })}
            <div className='oc-select__input-container'>
              <input
                ref='text-input'
                className='oc-select__input'
                type='text'
                placeholder={placeholder}
                value={this.state.typeValue}
                onChange={(e)=> this.setState({typeValue: e.target.value})}
              />
            </div>
          </div>
        </div>
        {type == 'icons' ?
          <OnlyClickIconOptions
            options={filteredOptions}
            selectedValues={this.state.values}
            onClick={this.handleClick.bind(this)}
            onHelpClick={onHelpClick}
          /> :
          <OnlyClickOptionsList
            options={filteredOptions}
            selectedValues={this.state.values}
            onClick={this.handleClick.bind(this)}
          />
        }
      </div>
    );
  }
}

OnlyClickSelect.propTypes = {
  type:     PropTypes.string,
  options:  PropTypes.arrayOf(PropTypes.object).isRequired,
  values:   PropTypes.arrayOf(PropTypes.string),
  onClick:  PropTypes.func,
  onDelete: PropTypes.func
};

OnlyClickSelect.defaultProps = {
  values: []
};

export default OnlyClickSelect;
