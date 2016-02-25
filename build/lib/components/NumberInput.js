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

var NumberInput = (function (_React$Component) {
  _inherits(NumberInput, _React$Component);

  function NumberInput(props) {
    _classCallCheck(this, NumberInput);

    _get(Object.getPrototypeOf(NumberInput.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: this.props.value ? this.props.value : this.props.min ? this.props.min : 0
    };
  }

  _createClass(NumberInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ value: e.target.value });
      this.props.setValue && this.props.setValue(e.target.value);
    }
  }, {
    key: 'handlePlus',
    value: function handlePlus() {
      var number = parseInt(this.refs.number.value);
      var step = this.props.step ? this.props.step : 1;
      var max = this.props.max ? this.props.max : null;
      var nextValue = number + step;
      if (max) {
        if (number + step <= max) {
          this.setState({ value: nextValue });
        }
      } else {
        this.setState({ value: nextValue });
        this.props.setValue && this.props.setValue(nextValue);
      }
    }
  }, {
    key: 'handleMinus',
    value: function handleMinus() {
      var number = parseInt(this.refs.number.value);
      var step = this.props.step ? this.props.step : 1;
      var min = this.props.min ? this.props.min : 0;
      if (number - step >= min) {
        var nextValue = number - step;
        this.setState({ value: nextValue });
        this.props.setValue && this.props.setValue(nextValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      return _react2['default'].createElement(
        'div',
        { className: 'number-input' },
        _react2['default'].createElement('input', {
          ref: 'number',
          className: 'number-input__input',
          type: 'number',
          pattern: '[0-9]*',
          inputMode: 'numeric',
          name: this.props.name,
          min: this.props.min ? this.props.min : 0,
          max: this.props.max ? this.props.max : null,
          step: this.props.step ? this.props.step : 1,
          onBlur: function (e) {
            return _this.props.onBlur ? _this.props.onBlur(e) : null;
          },
          onChange: this.handleChange.bind(this),
          value: this.state.value
        }),
        _react2['default'].createElement('span', { className: 'number-input__minus', onClick: this.handleMinus.bind(this) }),
        _react2['default'].createElement('span', { className: 'number-input__plus', onClick: this.handlePlus.bind(this) })
      );
    }
  }]);

  return NumberInput;
})(_react2['default'].Component);

exports['default'] = NumberInput;
module.exports = exports['default'];