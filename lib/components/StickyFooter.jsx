import React from 'react';
import PropTypes from 'prop-types';

const StickyFooter = (props) => {
  return (
    <div className="sticky-footer">
      <div className="sticky-footer__container">
        {props.children}
      </div>
    </div>
  );
};

export default StickyFooter;

StickyFooter.propTypes = {
  children: PropTypes.any,
};
