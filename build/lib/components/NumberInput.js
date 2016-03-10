'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
    key: 'handleChange',
    value: function handleChange(e) {
      this.setNextValue(e.target.value);
    }
  }, {
    key: 'handlePlus',
    value: function handlePlus() {
      var number = parseInt(String(this.refs.input.value).replace(/,/g, "")) || 0;
      var step = this.props.step ? this.props.step : 1;
      var max = this.props.max ? this.props.max : null;
      var nextValue = number + step;
      if (max) {
        if (number + step <= max) {
          this.setNextValue(nextValue);
        }
      } else {
        this.setNextValue(nextValue);
      }
    }
  }, {
    key: 'handleMinus',
    value: function handleMinus() {
      var number = parseInt(String(this.refs.input.value).replace(/,/g, "")) || 0;
      var step = this.props.step ? this.props.step : 1;
      var min = this.props.min ? this.props.min : 0;
      if (number - step >= min) {
        var nextValue = number - step;
        this.setNextValue(nextValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var name = _props.name;
      var min = _props.min;
      var max = _props.max;
      var step = _props.step;
      var commas = _props.commas;
      var width = _props.width;
      var _onBlur = _props.onBlur;

      var inputClass = (0, _classnames2.default)('number-input__input', { 'number-input__input--with-commas': commas });
      return _react2.default.createElement(
        'div',
        { className: 'number-input', style: { width: width } },
        _react2.default.createElement('input', {
          ref: 'input',
          className: inputClass,
          type: commas ? 'text' : 'number',
          pattern: commas ? '[0-9\,]*' : '[0-9]*',
          inputMode: 'numeric',
          lang: 'en',
          name: name,
          min: min ? min : 0,
          max: max,
          step: step ? step : 1,
          onBlur: function onBlur(e) {
            return _onBlur ? _onBlur(e) : null;
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