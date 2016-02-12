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

var Keyboard = (function (_React$Component) {
  _inherits(Keyboard, _React$Component);

  function Keyboard() {
    _classCallCheck(this, Keyboard);

    _get(Object.getPrototypeOf(Keyboard.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Keyboard, [{
    key: 'click',
    value: function click(key) {
      if (this.props.pressKey) {
        this.props.pressKey(key);
      }
    }
  }, {
    key: 'delete',
    value: function _delete() {
      if (this.props.deleteKey) {
        this.props.deleteKey();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var numbers = [];
      [7, 8, 9, 6, 4, 5, 1, 2, 3, 0].forEach(function (i) {
        if (i > 0) {
          numbers.push(_react2['default'].createElement(
            'div',
            { key: i, className: 'keyboard__number', onClick: _this.click.bind(_this, i) },
            i
          ));
        } else {
          numbers.push(_react2['default'].createElement(
            'div',
            { key: i, className: 'keyboard__number keyboard__number--0', onClick: _this.click.bind(_this, i) },
            i
          ));
        }
      });
      numbers.push(_react2['default'].createElement('div', { key: '10', className: 'keyboard__delete keyboard__backspace', onClick: this['delete'].bind(this) }));
      return _react2['default'].createElement(
        'div',
        { className: 'keyboard' },
        numbers
      );
    }
  }]);

  return Keyboard;
})(_react2['default'].Component);

exports['default'] = Keyboard;
module.exports = exports['default'];