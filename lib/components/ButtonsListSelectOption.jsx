import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccordionSelect from './AccordionSelect';
import WideButton from './WideButton';
import QuestionIcon from './QuestionIcon';
import CheckboxIcon from './CheckboxIcon';
import TextWithIcon from './TextWithIcon';

class ButtonsListSelectOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened,
    };
  }

  onClickTitle = () => {
    const { onClick, value } = this.props;

    onClick(value);
  };

  onClickTooltip = () => {
    const { opened } = this.state;
    const { onOpenHelp, onCloseHelp, value } = this.props;

    this.setState({ opened: !opened });

    if (!opened && onOpenHelp) {
      onOpenHelp(value, '?');
    } else if (opened && onCloseHelp) {
      onCloseHelp(value, '?');
    }
  };

  renderAccordion() {
    const { label, iconClass, infoText, selected, showCheckbox } = this.props;
    const { opened } = this.state;

    return (
      <AccordionSelect infoText={infoText} opened={opened} selected={selected} onClick={this.onClickTitle} >
        {showCheckbox && <CheckboxIcon checked={selected} onClick={this.onClickTitle} />}
        <TextWithIcon className="wide-button__title-item" label={label} iconClass={iconClass} onClick={this.onClickTitle} />
        {infoText && (
          <div className="wide-button__right-button" onClick={this.onClickTooltip}>
            <QuestionIcon accordion type={selected ? 'colored-inverted' : 'colored'} />
          </div>
        )}
      </AccordionSelect>
    );
  }

  renderWideButton() {
    const { label, iconClass, infoText, selected } = this.props;

    return (
      <WideButton selected={selected}>
        <TextWithIcon className="wide-button__title-item" label={label} iconClass={iconClass} onClick={this.onClickTitle} />
        <div className="wide-button__right-button question-icon__tooltip">
          <QuestionIcon infoText={infoText} type={selected ? 'colored-inverted' : 'colored'} />
        </div>
      </WideButton>
    );
  }

  render() {
    const { accordion } = this.props;

    return accordion ? this.renderAccordion() : this.renderWideButton();
  }
}

ButtonsListSelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  infoText: PropTypes.string,
  selected: PropTypes.bool,
  opened: PropTypes.bool,
  accordion: PropTypes.bool,
  showCheckbox: PropTypes.bool,
  iconClass: PropTypes.string,
  onClick: PropTypes.func,
  onOpenHelp: PropTypes.func,
  onCloseHelp: PropTypes.func,
  iconToolTip: PropTypes.func,
};

export default ButtonsListSelectOption;
