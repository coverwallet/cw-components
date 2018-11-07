import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccordionSelect from './AccordionSelect';
import WideButton from './WideButton';
import QuestionIcon from './QuestionIcon';
import TextWithIcon from './TextWithIcon';

class ButtonsListSelectOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: !!props.selected,
      opened: !!props.opened,
    };
  }

  onClickTitle = () => {
    this.setState({ selected: !this.state.selected });
    this.props.onClick(this.props.value);
  };

  onClickTooltip = () => {
    this.setState({ opened: !this.state.opened });
    this.props.onClickHelp(this.props.value);
  };

  render() {
    const { label, iconClass, infoText, accordion } = this.props;
    const { selected, opened } = this.state;

    if (accordion) {
      return (
        <AccordionSelect infoText={infoText} opened={opened} selected={selected} onClick={this.onClickTitle} >
          <TextWithIcon className="wide-button__title-item" label={label} iconClass={iconClass} onClick={this.onClickTitle} />
          {infoText && (
            <div className="wide-button__right-button" onClick={this.onClickTooltip}>
              <QuestionIcon accordion className="wide-button__title-item wide-button__title-item--bordered" />
            </div>
          )}
        </AccordionSelect>
      );
    } else {
      return (
        <WideButton selected={selected}>
          <TextWithIcon className="wide-button__title-item" label={label} iconClass={iconClass} onClick={this.onClickTitle} />
          <div className="wide-button__right-button question-icon__tooltip">
            <QuestionIcon infoText={infoText} className="wide-button__title-item wide-button__title-item--bordered" />
          </div>
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
