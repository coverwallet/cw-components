import React from 'react';
import PropTypes from 'prop-types';
import OnlyClickDropdownListOptions from './OnlyClickDropdownListOptions';

class OnlyClickMultiSelectDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.values,
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextState = { values: nextProps.values };
    this.setState(nextState);
  }

  propsChanged(nextProps) {
    return (
      this.props.values.length !== nextProps.values.length ||
      this.props.options.length !== nextProps.options.length
    );
  }

  handleMultiselectClick = value => {
    const { values } = this.state;
    if (values.indexOf(value) === -1) {
      this.setState({ values: [...values, value] });
      if (this.props.onClick) {
        this.props.onClick(value);
      }
    } else {
      this.handleDelete(value);
    }
  }

  handleNonMultiselectClick = value => {
    const { values } = this.state;
    this.setState({ values: [value] });
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

  handleDropdownClick = (value) => {
    const { openedItems = [] } = this.state;
    const valueIndex = openedItems.indexOf(value);
    if (valueIndex !== -1) {
      openedItems.splice(valueIndex, 1);
    } else {
      openedItems.push(value);
    }
    this.setState({ openedItems });
  }

  render() {
    const { options, hint, errorMessage, onHelpIconClick, openText, closeText, multiselect } = this.props;
    const { values, openedItems } = this.state;
    const handleClick = multiselect ? this.handleMultiselectClick : this.handleNonMultiselectClick;

    return (
      <div className="oc-multi-select-dropdown">
        {hint && <div className="oc-multi-select-dropdown__hint">{hint}</div>}
        {errorMessage && <div className="oc-multi-select-dropdown__error">{errorMessage}</div>}
        <div className="oc-multi-select-dropdown__options-container">
          <OnlyClickDropdownListOptions
            listType="multiSelect"
            isDropdown
            options={options}
            selectedValues={values}
            onClick={handleClick}
            onHelpClick={onHelpIconClick}
            onDropdownClick={this.handleDropdownClick}
            openedElements={openedItems}
            openDropdownText={openText}
            closeDropdownText={closeText}
          />
        </div>
      </div>
    );
  }
}

OnlyClickMultiSelectDropdown.propTypes = {
  hint: PropTypes.string,
  errorMessage: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onHelpIconClick: PropTypes.func,
  openText: PropTypes.string,
  closeText: PropTypes.string,
  multiselect: PropTypes.bool,
};

OnlyClickMultiSelectDropdown.defaultProps = {
  values: [],
};

export default OnlyClickMultiSelectDropdown;
