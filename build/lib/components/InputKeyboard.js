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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _keyboard = require('./keyboard');

var _keyboard2 = _interopRequireDefault(_keyboard);

var InputKeyboard = (function (_React$Component) {
  _inherits(InputKeyboard, _React$Component);

  function InputKeyboard(props) {
    _classCallCheck(this, InputKeyboard);

    _get(Object.getPrototypeOf(InputKeyboard.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: this.props.value ? this.props.value : ''
    };
  }

  _createClass(InputKeyboard, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setNextValue(e.target.value);
    }
  }, {
    key: 'setNextValue',
    value: function setNextValue(value) {
      if (this.props.commas) {
        var nextValue = parseInt(String(value).replace(/,/g, "")) || '';
        this.setState({ value: nextValue.toLocaleString('US') });
      } else {
        this.setState({ value: value });
      }
      this.props.setValue && this.props.setValue(value);
    }
  }, {
    key: 'pressKey',
    value: function pressKey(key) {
      var value = String(this.state.value).replace(/,/g, "");
      if (!value) {
        value = key;
      } else {
        value = value + '' + key;
      }
      this.setNextValue(value);
    }
  }, {
    key: 'deleteKey',
    value: function deleteKey() {
      var value = String(this.state.value).replace(/,/g, "");
      if (value && value.length > 0) {
        var nextValue = parseInt(value.substring(0, value.toString().length - 1), 0) || '';
        this.setNextValue(nextValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var min = _props.min;
      var currency = _props.currency;
      var commas = _props.commas;
      var width = _props.width;

      var inputClass = (0, _classnames2['default'])('input-keyboard__input', { 'input-keyboard__input--currency': currency }, { 'input-keyboard__input--with-commas': commas });
      return _react2['default'].createElement(
        'div',
        { className: 'input-keyboard', style: { width: width } },
        currency && _react2['default'].createElement('span', { className: 'input-keyboard__currency' }),
        _react2['default'].createElement('input', {
          ref: 'input',
          type: commas ? 'text' : 'number',
          className: inputClass,
          pattern: commas ? '[0-9\,]*' : '[0-9]*',
          inputMode: 'numeric',
          lang: 'en',
          min: min ? min : 0,
          onChange: this.handleChange.bind(this),
          value: this.state.value
        }),
        _react2['default'].createElement(_keyboard2['default'], { pressKey: this.pressKey.bind(this), deleteKey: this.deleteKey.bind(this) })
      );
    }
  }]);

  return InputKeyboard;
})(_react2['default'].Component);

exports['default'] = InputKeyboard;
module.exports = exports['default'];