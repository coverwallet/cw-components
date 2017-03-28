import React, { PropTypes } from 'react';

const Loader = (props) => {
  let loader = <div className="loader"><span className="loader__inner" /></div>;
  if (props.global) {
    loader = <div className="loader-container">{loader}</div>;
  }
  return loader;
};

Loader.propTypes = {
  global: PropTypes.bool,
};

export default Loader;
