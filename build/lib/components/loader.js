"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Loader = function Loader(props) {
  if (props.global) {
    return _react2["default"].createElement(
      "div",
      { className: "loader-container" },
      _react2["default"].createElement(
        "div",
        { className: "loader" },
        _react2["default"].createElement("span", { className: "loader__inner" })
      )
    );
  } else {
    return _react2["default"].createElement(
      "div",
      { className: "loader" },
      _react2["default"].createElement("span", { className: "loader__inner" })
    );
  }
};

Loader.propTypes = {
  global: _react.PropTypes.bool
};

exports["default"] = Loader;
module.exports = exports["default"];