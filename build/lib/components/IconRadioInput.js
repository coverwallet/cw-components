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

var IconRadioInput = (function (_React$Component) {
  _inherits(IconRadioInput, _React$Component);

  function IconRadioInput(props) {
    _classCallCheck(this, IconRadioInput);

    _get(Object.getPrototypeOf(IconRadioInput.prototype), 'constructor', this).call(this, props);
    this.state = {
      checked: this.checked(props.value, props.checkedValue),
      clicked: false
    };
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
    key: 'handleClick',
    value: function handleClick() {
      var _this = this;

      this.setState({ clicked: true });
      setTimeout(function () {
        _this.setState({ clicked: false });
      }, 300);
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonClass = (0, _classnames2['default'])("icons-radio-input", { 'icons-radio-input--checked': this.state.checked }, { 'icons-radio-input--clicked': this.state.clicked });
      return _react2['default'].createElement(
        'label',
        {
          className: buttonClass,
          onClick: this.handleClick.bind(this)
        },
        this.renderIcon(),
        _react2['default'].createElement('input', {
          type: 'radio',
          name: this.props.name,
          className: 'icons-radio-input__input',
          onChange: this.handleChange.bind(this),
          value: this.props.value,
          checked: this.state.checked
        }),
        _react2['default'].createElement(
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
        return _react2['default'].createElement(
          'div',
          { className: 'icons-radio-input__icon' },
          _react2['default'].createElement('span', { className: this.props.iconClass })
        );
      }
      return _react2['default'].createElement('span', null);
    }
  }]);

  return IconRadioInput;
})(_react2['default'].Component);

IconRadioInput.propTypes = {
  iconClass: _react.PropTypes.string,
  label: _react.PropTypes.string,
  name: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.any.isRequired,
  onChange: _react.PropTypes.func.isRequired
};

exports['default'] = IconRadioInput;
module.exports = exports['default'];