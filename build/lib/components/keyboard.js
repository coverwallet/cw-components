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

var Keyboard = function (_React$Component) {
  _inherits(Keyboard, _React$Component);

  function Keyboard() {
    _classCallCheck(this, Keyboard);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Keyboard).apply(this, arguments));
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
      var _this2 = this;

      return _react2.default.createElement(
        'table',
        { className: 'keyboard' },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            { className: 'keyboard__row' },
            [7, 8, 9].map(function (i) {
              return _react2.default.createElement(
                'td',
                { key: i, className: 'keyboard__number', onClick: _this2.click.bind(_this2, i) },
                i
              );
            })
          ),
          _react2.default.createElement(
            'tr',
            { className: 'keyboard__row' },
            [4, 5, 6].map(function (i) {
              return _react2.default.createElement(
                'td',
                { key: i, className: 'keyboard__number', onClick: _this2.click.bind(_this2, i) },
                i
              );
            })
          ),
          _react2.default.createElement(
            'tr',
            { className: 'keyboard__row' },
            [1, 2, 3].map(function (i) {
              return _react2.default.createElement(
                'td',
                { key: i, className: 'keyboard__number', onClick: _this2.click.bind(_this2, i) },
                i
              );
            })
          ),
          _react2.default.createElement(
            'tr',
            { className: 'keyboard__row' },
            _react2.default.createElement(
              'td',
              { className: 'keyboard__number keyboard__number--0', colSpan: '2', onClick: this.click.bind(this, 0) },
              '0'
            ),
            _react2.default.createElement('td', { key: '10', className: 'keyboard__delete keyboard__backspace', onClick: this.delete.bind(this) })
          )
        )
      );
    }
  }]);

  return Keyboard;
}(_react2.default.Component);

exports.default = Keyboard;