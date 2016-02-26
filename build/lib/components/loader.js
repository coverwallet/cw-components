'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Loader = function Loader(props) {
  var loader = _react2['default'].createElement(
    'div',
    { className: 'loader' },
    _react2['default'].createElement('span', { className: 'loader__inner' })
  );
  if (props.global) {
    loader = _react2['default'].createElement(
      'div',
      { className: 'loader-container' },
      loader
    );
  }
  return loader;
};

Loader.propTypes = {
  global: _react.PropTypes.bool
};

exports['default'] = Loader;
module.exports = exports['default'];