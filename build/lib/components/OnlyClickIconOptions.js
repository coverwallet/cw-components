'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OnlyClickIconOption = require('./OnlyClickIconOption');

var _OnlyClickIconOption2 = _interopRequireDefault(_OnlyClickIconOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OnlyClickIconOptions(props) {
  var selectedValues = props.selectedValues;
  var onClick = props.onClick;
  var onHelpClick = props.onHelpClick;

  return _react2.default.createElement(
    'div',
    { className: 'oc-icon-options' },
    props.options.map(function (option) {
      return _react2.default.createElement(
        'div',
        { className: 'oc-icon-options__item oc-icon-option-container', key: option.value },
        _react2.default.createElement(_OnlyClickIconOption2.default, _extends({
          checked: selectedValues.indexOf(option.value) !== -1,
          onClick: onClick
        }, option)),
        option.tooltipKey && onHelpClick ? _react2.default.createElement('span', {
          className: 'oc-icon-options__item-help-icon',
          onClick: props.onHelpClick.bind(null, option.tooltipKey)
        }) : ''
      );
    })
  );
}

OnlyClickIconOptions.propTypes = {
  options: _react.PropTypes.arrayOf(_react.PropTypes.object),
  onClick: _react.PropTypes.func,
  onHelpClick: _react.PropTypes.func,
  selectedValues: _react.PropTypes.arrayOf(_react.PropTypes.string)
};

exports.default = OnlyClickIconOptions;