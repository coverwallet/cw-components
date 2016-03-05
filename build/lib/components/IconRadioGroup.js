'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconRadioInput = require('./IconRadioInput');

var _IconRadioInput2 = _interopRequireDefault(_IconRadioInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconRadioGroup = function (_React$Component) {
  _inherits(IconRadioGroup, _React$Component);

  function IconRadioGroup(props) {
    _classCallCheck(this, IconRadioGroup);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IconRadioGroup).call(this, props));

    _this.state = {
      value: _this.props.value
    };
    return _this;
  }

  _createClass(IconRadioGroup, [{
    key: 'handleChange',
    value: function handleChange(value) {
      this.setState({ value: value });
      this.props.onChange && this.props.onChange(value);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var value = this.state.value;
      if (this.props.getValue) {
        value = this.props.getValue();
      }
      return value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var options = _props.options;
      var name = _props.name;

      var radioInputs = options.map(function (option, i) {
        return _react2.default.createElement(_IconRadioInput2.default, {
          key: i,
          iconClass: option.iconClass,
          label: option.label,
          name: name,
          value: option.value,
          checkedValue: _this2.getValue(),
          onChange: _this2.handleChange.bind(_this2)
        });
      });
      return _react2.default.createElement(
        'div',
        { className: 'icons-radio-group' },
        radioInputs
      );
    }
  }]);

  return IconRadioGroup;
}(_react2.default.Component);

IconRadioGroup.propTypes = {
  options: _react.PropTypes.arrayOf(_react.PropTypes.object),
  name: _react.PropTypes.string,
  value: _react.PropTypes.any,
  onChange: _react.PropTypes.func
};

exports.default = IconRadioGroup;