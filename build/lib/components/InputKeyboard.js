'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _keyboard = require('./keyboard');

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputKeyboard = function (_React$Component) {
  _inherits(InputKeyboard, _React$Component);

  function InputKeyboard(props) {
    _classCallCheck(this, InputKeyboard);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputKeyboard).call(this, props));

    _this.state = {
      value: _this.props.value ? _this.props.value : null
    };
    return _this;
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
      return _react2.default.createElement(
        'div',
        { className: 'input-keyboard', style: { width: this.props.width } },
        this.props.currency && _react2.default.createElement('span', { className: 'input-keyboard__currency' }),
        _react2.default.createElement('input', {
          ref: 'input',
          type: 'number',
          className: 'input-keyboard__input ' + (this.props.currency ? 'input-keyboard__input--currency' : ''),
          pattern: '[0-9]*',
          inputMode: 'numeric',
          min: this.props.min ? this.props.min : 0,
          onChange: this.handleChange.bind(this),
          value: this.state.value }),
        _react2.default.createElement(_keyboard2.default, { pressKey: this.pressKey.bind(this), deleteKey: this.deleteKey.bind(this) })
      );
    }
  }]);

  return InputKeyboard;
}(_react2.default.Component);

exports.default = InputKeyboard;