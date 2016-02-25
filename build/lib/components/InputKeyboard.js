'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _keyboard = require('./keyboard');

var _keyboard2 = _interopRequireDefault(_keyboard);

var InputKeyboard = (function (_React$Component) {
  _inherits(InputKeyboard, _React$Component);

  function InputKeyboard(props) {
    _classCallCheck(this, InputKeyboard);

    _get(Object.getPrototypeOf(InputKeyboard.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: this.props.value ? this.props.value : null
    };
  }

  _createClass(InputKeyboard, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
      this.props.setValue && this.props.setValue(event.target.value);
    }
  }, {
    key: 'pressKey',
    value: function pressKey(key) {
      var value = this.state.value;
      if (!value) {
        value = key;
      } else {
        value = value + '' + key;
      }
      var nextValue = parseInt(value, 10);
      this.setState({ value: nextValue });
      this.props.setValue && this.props.setValue(nextValue);
    }
  }, {
    key: 'deleteKey',
    value: function deleteKey() {
      if (this.state.value && this.state.value.toString().length > 0) {
        var nextValue = parseInt(this.state.value.toString().substring(0, this.state.value.toString().length - 1), 0);
        this.setState({ value: nextValue });
        this.props.setValue && this.props.setValue(nextValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'input-keyboard' },
        this.props.currency && _react2['default'].createElement('span', { className: 'input-keyboard__currency' }),
        _react2['default'].createElement('input', {
          type: 'number',
          className: 'input-keyboard__input',
          pattern: '[0-9]*',
          inputMode: 'numeric',
          min: this.props.min ? this.props.min : 0,
          onChange: this.handleChange.bind(this),
          value: this.state.value }),
        _react2['default'].createElement(_keyboard2['default'], { pressKey: this.pressKey.bind(this), deleteKey: this.deleteKey.bind(this) })
      );
    }
  }]);

  return InputKeyboard;
})(_react2['default'].Component);

exports['default'] = InputKeyboard;
module.exports = exports['default'];