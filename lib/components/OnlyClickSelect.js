'use strict';

import React, { PropTypes } from 'react';
import OnlyClickOptionsList from './OnlyClickListOptions';
import OnlyClickIconOptions from './OnlyClickIconOptions';

class OnlyClickSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: this.props.values,
      typeValue: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({values: nextProps.values})
  }

  handleFocus() {
    this.refs['text-input'].focus();
  }

  handleDelete(value) {
    let {values} = this.state;
    if(values.indexOf(value) !== -1) {
      this.setState({values: values.filter(val=> value !== val)});
    }
    this.props.onDelete && this.props.onDelete(value);
  }

  handleSelect(value) {
    let {values} = this.state;
    if(values.indexOf(value) === -1) {
      this.setState({values: [...values, value]});
    }
    this.props.onClick && this.props.onClick(value);
  }

  render() {
    let {type, options, placeholder} = this.props;
    let filteredOptions = options.filter(option=> {
      let regexInput = new RegExp(this.state.typeValue.toLowerCase());
      return regexInput.test(option.value.toLowerCase());
    });
    return (
      <div className='oc-select'>
        <div className='oc-select__search-container'>
          <div className='oc-select__search' onClick={this.handleFocus.bind(this)}>
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
                onChange={(e)=> this.setState({typeValue: e.target.value})}
              />
            </div>
          </div>
        </div>
        {type == 'icons' ?
          <OnlyClickIconOptions
            options={filteredOptions}
            selectedValues={this.state.values}
            onClick={this.handleSelect.bind(this)}
          /> :
          <OnlyClickOptionsList
            options={filteredOptions}
            selectedValues={this.state.values}
            onClick={this.handleSelect.bind(this)}
          />
        }
      </div>
    );
  }
}

OnlyClickSelect.propTypes = {
  type:     PropTypes.string,
  options:  PropTypes.arrayOf(PropTypes.object),
  values:   PropTypes.arrayOf(PropTypes.string),
  onClick:  PropTypes.func,
  onDelete: PropTypes.func
};

OnlyClickSelect.defaultProps = {
  values: []
};

export default OnlyClickSelect;
