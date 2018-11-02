import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccordionSelect from './AccordionSelect';
import WideButton from './WideButton';
import QuestionIcon from './QuestionIcon';
import TextWithIcon from './TestWithIcon';

class ButtonsListSelectOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: !!props.selected,
      opened: !!props.opened,
    };
  }

  onClickTitle = e => {
    this.setState({ selected: !this.state.selected });
    this.props.onClick(e);
  };

  onClickTooltip = e => {
    this.setState({ opened: !this.state.opened });
    this.props.onClickHelp(e);
  };

  render() {
    const { label, iconClass, infoText, accordion } = this.props;
    const { selected, opened } = this.state;

    if (true || accordion) {
      return (
        <AccordionSelect infoText={infoText} opened={opened} selected={selected} onClick={this.onClickTitle}>
          <TextWithIcon className="wide-button__title-item" label={label} iconClass={iconClass} onClick={this.onClickTitle} />
          <div className="wide-button__separator" />
          {infoText && (
            <div className="wide-button__right-button" onClick={this.onClickTooltip}>
              <QuestionIcon className="wide-button__title-item wide-button__title-item--bordered" />
            </div>
          )}
        </AccordionSelect>
      );
    } else {
      return (
        <WideButton selected={selected} onClick={this.onClickTitle}>
          <TextWithIcon className="wide-button__title-item" label={label} iconClass={iconClass} onClick={this.onClickTitle} />
          <div className="wide-button__separator" />
          <div className="wide-button__right-button" onClick={this.onClickTitle}>{this.props.iconToolTip}</div>
        </WideButton>
      );
    }
  }
}

ButtonsListSelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  infoText: PropTypes.string,
  selected: PropTypes.bool,
  opened: PropTypes.bool,
  accordion: PropTypes.bool,
  iconClass: PropTypes.string,
  onClick: PropTypes.func,
  onClickHelp: PropTypes.func,
  iconToolTip: PropTypes.func,
};

export default ButtonsListSelectOption;
