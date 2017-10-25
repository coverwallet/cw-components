import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
  let loader = null;
  if (props.subtitle) {
      loader = <div className="loader__box"><div className="loader"><span className="loader__inner" /></div><h5 className="loader__title">{props.subtitle}</h5></div>;
  } else {
    loader = <div className="loader"><span className="loader__inner" /></div>;
  }
  if (props.global) {
    loader = <div className="loader-container">{loader}</div>;
  }
  return loader;
};

Loader.propTypes = {
  global: PropTypes.bool,
  subtitle: PropTypes.string,
};

export default Loader;
