'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _deviceDetector = require('../utils/deviceDetector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconRadioInput = function (_React$Component) {
  _inherits(IconRadioInput, _React$Component);

  function IconRadioInput(props) {
    _classCallCheck(this, IconRadioInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IconRadioInput).call(this, props));

    _this.state = {
      checked: _this.checked(props.value, props.checkedValue)
    };
    return _this;
  }

  _createClass(IconRadioInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ checked: this.checked(nextProps.value, nextProps.checkedValue) });
    }
  }, {
    key: 'checked',
    value: function checked(a, b) {
      return a === b;
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.props.onChange && this.props.onChange(this.props.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonClass = (0, _classnames2.default)('icons-radio-input', { 'icons-radio-input--checked': this.state.checked }, { 'icons-radio-input--no-touch': !(0, _deviceDetector.isIOS)() });
      return _react2.default.createElement(
        'label',
        {
          className: buttonClass
        },
        this.renderIcon(),
        _react2.default.createElement('input', {
          type: 'radio',
          name: this.props.name,
          className: 'icons-radio-input__input',
          onChange: this.handleChange.bind(this),
          value: this.props.value,
          checked: this.state.checked
        }),
        _react2.default.createElement(
          'div',
          { className: 'icons-radio-input__label' },
          this.props.label
        )
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      if (this.props.iconClass) {
        return _react2.default.createElement(
          'div',
          { className: 'icons-radio-input__icon' },
          _react2.default.createElement('span', { className: this.props.iconClass })
        );
      }
      return _react2.default.createElement('span', null);
    }
  }]);

  return IconRadioInput;
}(_react2.default.Component);

IconRadioInput.propTypes = {
  iconClass: _react.PropTypes.string,
  label: _react.PropTypes.string,
  name: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.any.isRequired,
  onChange: _react.PropTypes.func.isRequired
};

exports.default = IconRadioInput;