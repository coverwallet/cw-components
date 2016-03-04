'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconRadioInput = require('./IconRadioInput');

var _IconRadioInput2 = _interopRequireDefault(_IconRadioInput);

var IconRadioGroup = (function (_React$Component) {
  _inherits(IconRadioGroup, _React$Component);

  function IconRadioGroup(props) {
    _classCallCheck(this, IconRadioGroup);

    _get(Object.getPrototypeOf(IconRadioGroup.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: this.props.value
    };
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
      var _this = this;

      var _props = this.props;
      var options = _props.options;
      var name = _props.name;

      var radioInputs = options.map(function (option, i) {
        return _react2['default'].createElement(_IconRadioInput2['default'], {
          key: i,
          iconClass: option.iconClass,
          label: option.label,
          name: name,
          value: option.value,
          checkedValue: _this.getValue(),
          onChange: _this.handleChange.bind(_this)
        });
      });
      return _react2['default'].createElement(
        'div',
        { className: 'icons-radio-group' },
        radioInputs
      );
    }
  }]);

  return IconRadioGroup;
})(_react2['default'].Component);

IconRadioGroup.propTypes = {
  options: _react.PropTypes.arrayOf(_react.PropTypes.object),
  name: _react.PropTypes.string,
  value: _react.PropTypes.any,
  onChange: _react.PropTypes.func
};

exports['default'] = IconRadioGroup;
module.exports = exports['default'];