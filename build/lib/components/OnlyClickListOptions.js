'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _OnlyClickListOption = require('./OnlyClickListOption');

var _OnlyClickListOption2 = _interopRequireDefault(_OnlyClickListOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OnlyClickListOptions(props) {
  var options = props.options;
  var selectedValues = props.selectedValues;
  var onClick = props.onClick;


  return _react2.default.createElement(
    'ul',
    { className: 'oc-list-options' },
    options.map(function (option) {
      return _react2.default.createElement(_OnlyClickListOption2.default, _extends({
        key: option.value,
        checked: selectedValues.indexOf(option.value) !== -1,
        onClick: onClick
      }, option));
    })
  );
}

OnlyClickListOptions.propTypes = {
  options: _react.PropTypes.arrayOf(_react.PropTypes.object),
  onClick: _react.PropTypes.func,
  selectedValues: _react.PropTypes.arrayOf(_react.PropTypes.string)
};

exports.default = OnlyClickListOptions;