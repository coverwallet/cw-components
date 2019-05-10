import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import classNames from 'classnames';
import Tooltip from './Tooltip';

function TooltipIcon(props) {
  const { id, containerClassName, iconClassName, tooltipClassName, text, children } = props;
  const iconId = id || uniqueId('tooltip-icon-');
  const iconClass = classNames(
    'help-icon',
    iconClassName,
  );

  return (
    <span className={containerClassName}>
      <span className={iconClass} id={iconId} tabIndex="-1" />
      <Tooltip for={iconId} className={tooltipClassName} text={text}>{children}</Tooltip>
    </span>
  );
}

TooltipIcon.propTypes = {
  id: PropTypes.string,
  containerClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  tooltipClassName: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TooltipIcon;
