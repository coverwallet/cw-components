import React, { PropTypes } from 'react';

var Loader = (props)=> {
  if (props.global) {
    return (
      <div className="loader-container">
        <div className="loader">
          <span className="loader__inner" />
        </div>
      </div>
    )
  } else {
    return (
      <div className="loader">
        <span className="loader__inner" />
      </div>
    )
  }
};

Loader.propTypes = {
  global: PropTypes.bool
};

export default Loader;