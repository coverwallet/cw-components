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

function OnlyClickIconOption(props) {
  var value = props.value;
  var label = props.label;
  var checked = props.checked;
  var iconClass = props.iconClass;
  var onClick = props.onClick;

  var optionClass = (0, _classnames2['default'])('oc-icon-option', { 'oc-icon-option--checked': checked }, { 'oc-icon-option--no-touch': !(0, _utilsDeviceDetector.isIOS)() });
  return _react2['default'].createElement(
    'div',
    { className: optionClass, onClick: onClick.bind(null, value) },
    _react2['default'].createElement(
      'div',
      { className: 'oc-icon-option__content-container' },
      _react2['default'].createElement(
        'div',
        { className: 'oc-icon-option__content' },
        _react2['default'].createElement(
          'div',
          { className: 'oc-icon-option__icon-container' },
          _react2['default'].createElement('span', { className: 'oc-icon-option__icon ' + iconClass })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'oc-icon-option__label' },
          label
        )
      )
    )
  );
}

OnlyClickIconOption.propTypes = {
  value: _react.PropTypes.string.isRequired,
  label: _react.PropTypes.string.isRequired,
  checked: _react.PropTypes.bool,
  iconClass: _react.PropTypes.string,
  onClick: _react.PropTypes.func
};

exports['default'] = OnlyClickIconOption;
module.exports = exports['default'];