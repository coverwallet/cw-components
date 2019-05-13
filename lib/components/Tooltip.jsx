import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'cw-styleguide/bower_components/material-design-lite/src/mdlComponentHandler';
import 'cw-styleguide/bower_components/material-design-lite/src/tooltip/tooltip';


class Tooltip extends Component {
  static defaultProps = {
    position: 'bottom',
  }

  componentDidMount() {
    this.updateTooltips();
  }

  componentDidUpdate() {
    this.updateTooltips();
  }

  updateTooltips() {
    if (window.componentHandler) {
      window.componentHandler.upgradeAllRegistered();
    }
  }

  render() {
    const { for: htmlFor, text, children, className, position } = this.props;
    const tooltipClass = classNames(
      'mdl-tooltip',
      {
        'mdl-tooltip--bottom': position === 'bottom',
        'mdl-tooltip--top': position === 'top',
      },
      className,
    );

    return (
      <div className={tooltipClass} htmlFor={htmlFor}>
        {text || children}
      </div>
    );
  }
}

Tooltip.propTypes = {
  for: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  position: PropTypes.oneOf(['top', 'bottom']),
};

export default Tooltip;
