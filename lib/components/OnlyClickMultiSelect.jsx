import React from 'react';
import PropTypes from 'prop-types';
import OnlyClickOptionsList from './OnlyClickListOptions';

class OnlyClickMultiSelect extends React.Component {
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

  handleClick = (value) => {
    const { values } = this.state;
    if (values.indexOf(value) === -1) {
      this.setState({ values: [...values, value] });
      if (this.props.onClick) {
        this.props.onClick(value);
      }
    } else {
      this.handleDelete(value);
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
    const { options, hint, errorMessage, onHelpIconClick, dataTest } = this.props;
    const { values } = this.state;
    return (
      <div className="oc-multi-select">
        {hint && <div className="oc-multi-select__hint">{hint}</div>}
        {errorMessage && <div className="oc-multi-select__error">{errorMessage}</div>}
        <div className="oc-multi-select__options-container">
          <OnlyClickOptionsList
            listType="multiSelect"
            options={options}
            selectedValues={values}
            onClick={this.handleClick}
            onHelpClick={onHelpIconClick}
            dataTest={dataTest}
          />
        </div>
      </div>
    );
  }
}

OnlyClickMultiSelect.propTypes = {
  hint: PropTypes.string,
  errorMessage: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onHelpIconClick: PropTypes.func,
  dataTest: PropTypes.string,
};

OnlyClickMultiSelect.defaultProps = {
  values: [],
  dataTest: '',
};

export default OnlyClickMultiSelect;
