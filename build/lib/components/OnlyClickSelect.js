'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OnlyClickListOptions = require('./OnlyClickListOptions');

var _OnlyClickListOptions2 = _interopRequireDefault(_OnlyClickListOptions);

var _OnlyClickIconOptions = require('./OnlyClickIconOptions');

var _OnlyClickIconOptions2 = _interopRequireDefault(_OnlyClickIconOptions);

var OnlyClickSelect = (function (_React$Component) {
  _inherits(OnlyClickSelect, _React$Component);

  function OnlyClickSelect(props) {
    _classCallCheck(this, OnlyClickSelect);

    _get(Object.getPrototypeOf(OnlyClickSelect.prototype), 'constructor', this).call(this, props);
    this.state = {
      values: this.props.values,
      typeValue: ''
    };
  }

  _createClass(OnlyClickSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ values: nextProps.values });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.refs['text-input'].focus();
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete(value) {
      var values = this.state.values;

      if (values.indexOf(value) !== -1) {
        this.setState({ values: values.filter(function (val) {
            return value !== val;
          }) });
      }
      this.props.onDelete && this.props.onDelete(value);
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(value) {
      var values = this.state.values;

      if (values.indexOf(value) === -1) {
        this.setState({ values: [].concat(_toConsumableArray(values), [value]) });
      }
      this.props.onClick && this.props.onClick(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var _props = this.props;
      var type = _props.type;
      var options = _props.options;
      var placeholder = _props.placeholder;

      var filteredOptions = options.filter(function (option) {
        var regexInput = new RegExp(_this.state.typeValue.toLowerCase());
        return regexInput.test(option.value.toLowerCase());
      });
      return _react2['default'].createElement(
        'div',
        { className: 'oc-select' },
        _react2['default'].createElement(
          'div',
          { className: 'oc-select__search-container' },
          _react2['default'].createElement(
            'div',
            { className: 'oc-select__search', onClick: this.handleFocus.bind(this) },
            this.state.values.map(function (value) {
              return _react2['default'].createElement(
                'span',
                { className: 'oc-selected-value', key: value },
                value,
                _react2['default'].createElement('span', {
                  className: 'oc-selected-value__close-icon',
                  onClick: _this.handleDelete.bind(_this, value)
                })
              );
            }),
            _react2['default'].createElement(
              'div',
              { className: 'oc-select__input-container' },
              _react2['default'].createElement('input', {
                ref: 'text-input',
                className: 'oc-select__input',
                type: 'text',
                placeholder: placeholder,
                onChange: function (e) {
                  return _this.setState({ typeValue: e.target.value });
                }
              })
            )
          )
        ),
        type == 'icons' ? _react2['default'].createElement(_OnlyClickIconOptions2['default'], {
          options: filteredOptions,
          selectedValues: this.state.values,
          onClick: this.handleSelect.bind(this)
        }) : _react2['default'].createElement(_OnlyClickListOptions2['default'], {
          options: filteredOptions,
          selectedValues: this.state.values,
          onClick: this.handleSelect.bind(this)
        })
      );
    }
  }]);

  return OnlyClickSelect;
})(_react2['default'].Component);

OnlyClickSelect.propTypes = {
  type: _react.PropTypes.string,
  options: _react.PropTypes.arrayOf(_react.PropTypes.object),
  values: _react.PropTypes.arrayOf(_react.PropTypes.string),
  onClick: _react.PropTypes.func,
  onDelete: _react.PropTypes.func
};

OnlyClickSelect.defaultProps = {
  values: []
};

exports['default'] = OnlyClickSelect;
module.exports = exports['default'];