'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsDeviceDetector = require('../utils/deviceDetector');

function OnlyClickListOption(props) {
  var value = props.value;
  var label = props.label;
  var checked = props.checked;
  var onClick = props.onClick;

  var optionClass = (0, _classnames2['default'])('oc-options-list__item oc-list-option', { 'oc-list-option--checked': checked }, { 'oc-list-option--no-touch': (0, _utilsDeviceDetector.isDesktop)() });
  return _react2['default'].createElement(
    'li',
    {
      className: optionClass,
      onClick: onClick.bind(null, value)
    },
    _react2['default'].createElement(
      'span',
      { className: 'oc-option__message' },
      label
    ),
    _react2['default'].createElement('span', { className: 'oc-option__next-icon' })
  );
}

OnlyClickListOption.propTypes = {
  value: _react.PropTypes.string.isRequired,
  label: _react.PropTypes.string.isRequired,
  checked: _react.PropTypes.bool,
  onClick: _react.PropTypes.func
};

exports['default'] = OnlyClickListOption;
module.exports = exports['default'];