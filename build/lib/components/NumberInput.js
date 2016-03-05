'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberInput = function (_React$Component) {
  _inherits(NumberInput, _React$Component);

  function NumberInput(props) {
    _classCallCheck(this, NumberInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NumberInput).call(this, props));

    _this.state = {
      value: _this.props.value ? _this.props.value : _this.props.min ? _this.props.min : ''
    };
    return _this;
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
      var number = parseInt(this.refs.input.value) || 0;
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
      var number = parseInt(this.refs.input.value) || 0;
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
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'number-input', style: { width: this.props.width } },
        _react2.default.createElement('input', {
          ref: 'input',
          className: 'number-input__input',
          type: 'number',
          pattern: '[0-9]*',
          inputMode: 'numeric',
          name: this.props.name,
          min: this.props.min ? this.props.min : 0,
          max: this.props.max ? this.props.max : null,
          step: this.props.step ? this.props.step : 1,
          onBlur: function onBlur(e) {
            return _this2.props.onBlur ? _this2.props.onBlur(e) : null;
          },
          onChange: this.handleChange.bind(this),
          value: this.state.value
        }),
        _react2.default.createElement('span', { className: 'number-input__minus', onClick: this.handleMinus.bind(this) }),
        _react2.default.createElement('span', { className: 'number-input__plus', onClick: this.handlePlus.bind(this) })
      );
    }
  }]);

  return NumberInput;
}(_react2.default.Component);

exports.default = NumberInput;