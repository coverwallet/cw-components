import React from 'react';
import PropTypes from 'prop-types';

function IconTooltip(props) {
  const { onHelpClick, tooltipKey } = props;

  return (
    <span
      className="oc-icon-options__item-help-icon"
      id={tooltipKey}
      onClick={onHelpClick && onHelpClick.bind(null, tooltipKey)}
      tabIndex="-1"
    />
  );
}

IconTooltip.propTypes = {
  onHelpClick: PropTypes.func,
  tooltipKey: PropTypes.any,
};

export default IconTooltip;
