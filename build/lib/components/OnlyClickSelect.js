'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _smoothscroll = require('smoothscroll');

var _smoothscroll2 = _interopRequireDefault(_smoothscroll);

var _OnlyClickListOptions = require('./OnlyClickListOptions');

var _OnlyClickListOptions2 = _interopRequireDefault(_OnlyClickListOptions);

var _OnlyClickIconOptions = require('./OnlyClickIconOptions');

var _OnlyClickIconOptions2 = _interopRequireDefault(_OnlyClickIconOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OnlyClickSelect = function (_React$Component) {
  _inherits(OnlyClickSelect, _React$Component);

  function OnlyClickSelect(props) {
    _classCallCheck(this, OnlyClickSelect);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OnlyClickSelect).call(this, props));

    _this.mobileWidth = 480;
    _this.state = {
      values: _this.props.values,
      typeValue: ''
    };
    return _this;
  }

  _createClass(OnlyClickSelect, [{
    key: 'propsChanged',
    value: function propsChanged(nextProps) {
      return this.props.type !== nextProps.type || this.props.values.length !== nextProps.values.length || this.props.options.length !== nextProps.options.length;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextState = { values: nextProps.values };
      if (this.propsChanged(nextProps)) {
        nextState.typeValue = '';
      }
      this.setState(nextState);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.refs['text-input'].focus();
    }
  }, {
    key: 'scrollToInput',
    value: function scrollToInput() {
      var searchBox = this.refs['search-box'];
      var input = this.refs['text-input'];
      var scrollTop = this.props.scrollTop || 100;
      var scrollToPosition = searchBox.getBoundingClientRect().top + window.pageYOffset - scrollTop;
      (0, _smoothscroll2.default)(scrollToPosition, 1000, function () {
        return input.focus();
      });
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
    key: 'shouldScroll',
    value: function shouldScroll() {
      var searchBox = this.refs['search-box'];
      var pixelsToElement = searchBox.getBoundingClientRect().top;
      return pixelsToElement < 0;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(value) {
      var values = this.state.values;

      if (values.indexOf(value) === -1) {
        this.setState({ values: [].concat(_toConsumableArray(values), [value]) });
        this.props.onClick && this.props.onClick(value);
      } else {
        this.handleDelete(value);
      }
      if (this.shouldScroll()) {
        this.scrollToInput();
      } else if (window && window.innerWidth > this.mobileWidth) {
        this.handleFocus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var type = _props.type;
      var options = _props.options;
      var placeholder = _props.placeholder;
      var hint = _props.hint;
      var onHelpIconClick = _props.onHelpIconClick;

      var filteredOptions = options.filter(function (option) {
        var regexInput = new RegExp(_this2.state.typeValue.toLowerCase());
        return regexInput.test(option.value.toLowerCase());
      });
      return _react2.default.createElement(
        'div',
        { className: 'oc-select' },
        _react2.default.createElement(
          'div',
          { className: 'oc-select__search-container' },
          _react2.default.createElement(
            'div',
            { className: 'oc-select__search', ref: 'search-box', onClick: this.handleFocus.bind(this) },
            this.state.values.map(function (value) {
              return _react2.default.createElement(
                'span',
                { className: 'oc-selected-value', key: value },
                value,
                _react2.default.createElement('span', {
                  className: 'oc-selected-value__close-icon',
                  onClick: _this2.handleDelete.bind(_this2, value)
                })
              );
            }),
            _react2.default.createElement(
              'div',
              { className: 'oc-select__input-container' },
              _react2.default.createElement('input', {
                ref: 'text-input',
                className: 'oc-select__input',
                type: 'text',
                placeholder: placeholder,
                value: this.state.typeValue,
                onChange: function onChange(e) {
                  return _this2.setState({ typeValue: e.target.value });
                }
              })
            )
          )
        ),
        hint && _react2.default.createElement(
          'div',
          { className: 'oc-select__hint' },
          hint
        ),
        _react2.default.createElement(
          'div',
          { className: 'oc-select__options-container' },
          type == 'icons' ? _react2.default.createElement(_OnlyClickIconOptions2.default, {
            options: filteredOptions,
            selectedValues: this.state.values,
            onClick: this.handleClick.bind(this),
            onHelpClick: onHelpIconClick
          }) : _react2.default.createElement(_OnlyClickListOptions2.default, {
            options: filteredOptions,
            selectedValues: this.state.values,
            onClick: this.handleClick.bind(this)
          })
        )
      );
    }
  }]);

  return OnlyClickSelect;
}(_react2.default.Component);

OnlyClickSelect.propTypes = {
  type: _react.PropTypes.string,
  options: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  values: _react.PropTypes.arrayOf(_react.PropTypes.string),
  onClick: _react.PropTypes.func,
  onDelete: _react.PropTypes.func
};

OnlyClickSelect.defaultProps = {
  values: []
};

exports.default = OnlyClickSelect;
