'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var OnlyClickOptionsList = function OnlyClickOptionsList(props) {
  var items = props.options.map(function (item, i) {
    return _react2['default'].createElement(
      'li',
      {
        key: i,
        className: 'oc-options-list__item oc-option',
        onClick: props.onClick.bind(null, item.value)
      },
      _react2['default'].createElement(
        'span',
        { className: 'oc-option__message' },
        item.label
      ),
      _react2['default'].createElement('span', { className: 'oc-option__next-icon' })
    );
  });
  return _react2['default'].createElement(
    'ul',
    { className: 'oc-options-list' },
    items
  );
};

OnlyClickOptionsList.propTypes = {
  options: _react.PropTypes.arrayOf(_react.PropTypes.object),
  onClick: _react.PropTypes.func
};

exports['default'] = OnlyClickOptionsList;
module.exports = exports['default'];