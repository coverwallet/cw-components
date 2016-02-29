(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["CwComponents"] = factory(require("React"));
	else
		root["CwComponents"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _componentsInputKeyboard = __webpack_require__(1);
	
	var _componentsInputKeyboard2 = _interopRequireDefault(_componentsInputKeyboard);
	
	var _componentsNumberInput = __webpack_require__(4);
	
	var _componentsNumberInput2 = _interopRequireDefault(_componentsNumberInput);
	
	var _componentsIconRadioGroup = __webpack_require__(5);
	
	var _componentsIconRadioGroup2 = _interopRequireDefault(_componentsIconRadioGroup);
	
	var _componentsIconRadioInput = __webpack_require__(6);
	
	var _componentsIconRadioInput2 = _interopRequireDefault(_componentsIconRadioInput);
	
	var _componentsLoader = __webpack_require__(8);
	
	var _componentsLoader2 = _interopRequireDefault(_componentsLoader);
	
	var _componentsOnlyClickListOption = __webpack_require__(9);
	
	var _componentsOnlyClickListOption2 = _interopRequireDefault(_componentsOnlyClickListOption);
	
	var _componentsOnlyClickListOptions = __webpack_require__(10);
	
	var _componentsOnlyClickListOptions2 = _interopRequireDefault(_componentsOnlyClickListOptions);
	
	var _componentsOnlyClickIconOption = __webpack_require__(11);
	
	var _componentsOnlyClickIconOption2 = _interopRequireDefault(_componentsOnlyClickIconOption);
	
	var _componentsOnlyClickIconOptions = __webpack_require__(12);
	
	var _componentsOnlyClickIconOptions2 = _interopRequireDefault(_componentsOnlyClickIconOptions);
	
	var _componentsOnlyClickSelect = __webpack_require__(13);
	
	var _componentsOnlyClickSelect2 = _interopRequireDefault(_componentsOnlyClickSelect);
	
	exports.InputKeyboard = _componentsInputKeyboard2['default'];
	exports.NumberInput = _componentsNumberInput2['default'];
	exports.IconRadioGroup = _componentsIconRadioGroup2['default'];
	exports.IconRadioInput = _componentsIconRadioInput2['default'];
	exports.Loader = _componentsLoader2['default'];
	exports.OnlyClickListOption = _componentsOnlyClickListOption2['default'];
	exports.OnlyClickListOptions = _componentsOnlyClickListOptions2['default'];
	exports.OnlyClickIconOption = _componentsOnlyClickIconOption2['default'];
	exports.OnlyClickIconOptions = _componentsOnlyClickIconOptions2['default'];
	exports.OnlyClickSelect = _componentsOnlyClickSelect2['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _keyboard = __webpack_require__(3);
	
	var _keyboard2 = _interopRequireDefault(_keyboard);
	
	var InputKeyboard = (function (_React$Component) {
	  _inherits(InputKeyboard, _React$Component);
	
	  function InputKeyboard(props) {
	    _classCallCheck(this, InputKeyboard);
	
	    _get(Object.getPrototypeOf(InputKeyboard.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      value: this.props.value ? this.props.value : null
	    };
	  }
	
	  _createClass(InputKeyboard, [{
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.setState({ value: event.target.value });
	      this.props.setValue && this.props.setValue(event.target.value);
	    }
	  }, {
	    key: 'pressKey',
	    value: function pressKey(key) {
	      var value = this.state.value;
	      if (!value) {
	        value = key;
	      } else {
	        value = value + '' + key;
	      }
	      var nextValue = parseInt(value, 10);
	      this.setState({ value: nextValue });
	      this.props.setValue && this.props.setValue(nextValue);
	    }
	  }, {
	    key: 'deleteKey',
	    value: function deleteKey() {
	      if (this.state.value && this.state.value.toString().length > 0) {
	        var nextValue = parseInt(this.state.value.toString().substring(0, this.state.value.toString().length - 1), 0);
	        this.setState({ value: nextValue });
	        this.props.setValue && this.props.setValue(nextValue);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'input-keyboard', style: { width: this.props.width } },
	        this.props.currency && _react2['default'].createElement('span', { className: 'input-keyboard__currency' }),
	        _react2['default'].createElement('input', {
	          type: 'number',
	          className: 'input-keyboard__input ' + (this.props.currency ? 'input-keyboard__input--currency' : ''),
	          pattern: '[0-9]*',
	          inputMode: 'numeric',
	          min: this.props.min ? this.props.min : 0,
	          onChange: this.handleChange.bind(this),
	          value: this.state.value }),
	        _react2['default'].createElement(_keyboard2['default'], { pressKey: this.pressKey.bind(this), deleteKey: this.deleteKey.bind(this) })
	      );
	    }
	  }]);
	
	  return InputKeyboard;
	})(_react2['default'].Component);
	
	exports['default'] = InputKeyboard;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
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
	
	      return _react2['default'].createElement(
	        'table',
	        { className: 'keyboard' },
	        _react2['default'].createElement(
	          'tbody',
	          null,
	          _react2['default'].createElement(
	            'tr',
	            { className: 'keyboard__row' },
	            [7, 8, 9].map(function (i) {
	              return _react2['default'].createElement(
	                'td',
	                { key: i, className: 'keyboard__number', onClick: _this.click.bind(_this, i) },
	                i
	              );
	            })
	          ),
	          _react2['default'].createElement(
	            'tr',
	            { className: 'keyboard__row' },
	            [4, 5, 6].map(function (i) {
	              return _react2['default'].createElement(
	                'td',
	                { key: i, className: 'keyboard__number', onClick: _this.click.bind(_this, i) },
	                i
	              );
	            })
	          ),
	          _react2['default'].createElement(
	            'tr',
	            { className: 'keyboard__row' },
	            [1, 2, 3].map(function (i) {
	              return _react2['default'].createElement(
	                'td',
	                { key: i, className: 'keyboard__number', onClick: _this.click.bind(_this, i) },
	                i
	              );
	            })
	          ),
	          _react2['default'].createElement(
	            'tr',
	            { className: 'keyboard__row' },
	            _react2['default'].createElement(
	              'td',
	              { className: 'keyboard__number keyboard__number--0', colSpan: '2', onClick: this.click.bind(this, 0) },
	              '0'
	            ),
	            _react2['default'].createElement('td', { key: '10', className: 'keyboard__delete keyboard__backspace', onClick: this['delete'].bind(this) })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Keyboard;
	})(_react2['default'].Component);
	
	exports['default'] = Keyboard;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NumberInput = (function (_React$Component) {
	  _inherits(NumberInput, _React$Component);
	
	  function NumberInput(props) {
	    _classCallCheck(this, NumberInput);
	
	    _get(Object.getPrototypeOf(NumberInput.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      value: this.props.value ? this.props.value : this.props.min ? this.props.min : 0
	    };
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
	      var number = parseInt(this.refs.number.value);
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
	      var number = parseInt(this.refs.number.value);
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
	      var _this = this;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'number-input', style: { width: this.props.width } },
	        _react2['default'].createElement('input', {
	          ref: 'number',
	          className: 'number-input__input',
	          type: 'number',
	          pattern: '[0-9]*',
	          inputMode: 'numeric',
	          name: this.props.name,
	          min: this.props.min ? this.props.min : 0,
	          max: this.props.max ? this.props.max : null,
	          step: this.props.step ? this.props.step : 1,
	          onBlur: function (e) {
	            return _this.props.onBlur ? _this.props.onBlur(e) : null;
	          },
	          onChange: this.handleChange.bind(this),
	          value: this.state.value
	        }),
	        _react2['default'].createElement('span', { className: 'number-input__minus', onClick: this.handleMinus.bind(this) }),
	        _react2['default'].createElement('span', { className: 'number-input__plus', onClick: this.handlePlus.bind(this) })
	      );
	    }
	  }]);
	
	  return NumberInput;
	})(_react2['default'].Component);
	
	exports['default'] = NumberInput;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _IconRadioInput = __webpack_require__(6);
	
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
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
	    key: 'render',
	    value: function render() {
	      var buttonClass = (0, _classnames2['default'])('icons-radio-input', { 'icons-radio-input--checked': this.state.checked }, { 'icons-radio-input--clicked': this.state.clicked });
	      return _react2['default'].createElement(
	        'label',
	        {
	          className: buttonClass
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Loader = function Loader(props) {
	  var loader = _react2['default'].createElement(
	    'div',
	    { className: 'loader' },
	    _react2['default'].createElement('span', { className: 'loader__inner' })
	  );
	  if (props.global) {
	    loader = _react2['default'].createElement(
	      'div',
	      { className: 'loader-container' },
	      loader
	    );
	  }
	  return loader;
	};
	
	Loader.propTypes = {
	  global: _react.PropTypes.bool
	};
	
	exports['default'] = Loader;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function OnlyClickListOption(props) {
	  var value = props.value;
	  var label = props.label;
	  var checked = props.checked;
	  var onClick = props.onClick;
	
	  var optionClass = (0, _classnames2['default'])('oc-options-list__item oc-list-option', { 'oc-list-option--checked': checked });
	  return _react2['default'].createElement(
	    'li',
	    {
	      className: optionClass,
	      onClick: onClick.bind(null, value)
	    },
	    _react2['default'].createElement(
	      'span',
	      { className: 'oc-option__message' },
	      label
	    ),
	    _react2['default'].createElement('span', { className: 'oc-option__next-icon' })
	  );
	}
	
	OnlyClickListOption.propTypes = {
	  value: _react.PropTypes.string.isRequired,
	  label: _react.PropTypes.string.isRequired,
	  checked: _react.PropTypes.bool,
	  onClick: _react.PropTypes.func
	};
	
	exports['default'] = OnlyClickListOption;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _OnlyClickListOption = __webpack_require__(9);
	
	var _OnlyClickListOption2 = _interopRequireDefault(_OnlyClickListOption);
	
	function OnlyClickListOptions(props) {
	  var options = props.options;
	  var selectedValues = props.selectedValues;
	  var onClick = props.onClick;
	
	  return _react2['default'].createElement(
	    'ul',
	    { className: 'oc-list-options' },
	    options.map(function (option) {
	      return _react2['default'].createElement(_OnlyClickListOption2['default'], _extends({
	        key: option.value,
	        checked: selectedValues.indexOf(option.value) !== -1,
	        onClick: onClick
	      }, option));
	    })
	  );
	}
	
	OnlyClickListOptions.propTypes = {
	  options: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  onClick: _react.PropTypes.func,
	  selectedValues: _react.PropTypes.arrayOf(_react.PropTypes.string)
	};
	
	exports['default'] = OnlyClickListOptions;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function OnlyClickIconOption(props) {
	  var value = props.value;
	  var label = props.label;
	  var checked = props.checked;
	  var iconClass = props.iconClass;
	  var onClick = props.onClick;
	
	  var optionClass = (0, _classnames2['default'])('oc-icon-option', { 'oc-icon-option--checked': checked });
	  return _react2['default'].createElement(
	    'div',
	    { className: optionClass, onClick: onClick.bind(null, value) },
	    _react2['default'].createElement(
	      'div',
	      { className: 'oc-icon-option__content' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'oc-icon-option__icon-container' },
	        _react2['default'].createElement('span', { className: 'oc-icon-option__icon ' + iconClass })
	      ),
	      _react2['default'].createElement(
	        'div',
	        { className: 'oc-icon-option__label' },
	        label
	      )
	    )
	  );
	}
	
	OnlyClickIconOption.propTypes = {
	  value: _react.PropTypes.string.isRequired,
	  label: _react.PropTypes.string.isRequired,
	  checked: _react.PropTypes.bool,
	  iconClass: _react.PropTypes.string,
	  onClick: _react.PropTypes.func
	};
	
	exports['default'] = OnlyClickIconOption;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _OnlyClickIconOption = __webpack_require__(11);
	
	var _OnlyClickIconOption2 = _interopRequireDefault(_OnlyClickIconOption);
	
	function OnlyClickIconOptions(props) {
	  var selectedValues = props.selectedValues;
	  var onClick = props.onClick;
	
	  return _react2['default'].createElement(
	    'div',
	    { className: 'oc-icon-options' },
	    props.options.map(function (option) {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'oc-icon-options__item oc-icon-option-container', key: option.value },
	        _react2['default'].createElement(_OnlyClickIconOption2['default'], _extends({
	          checked: selectedValues.indexOf(option.value) !== -1,
	          onClick: onClick
	        }, option))
	      );
	    })
	  );
	}
	
	OnlyClickIconOptions.propTypes = {
	  options: _react.PropTypes.arrayOf(_react.PropTypes.object),
	  onClick: _react.PropTypes.func,
	  selectedValues: _react.PropTypes.arrayOf(_react.PropTypes.string)
	};
	
	exports['default'] = OnlyClickIconOptions;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _OnlyClickListOptions = __webpack_require__(10);
	
	var _OnlyClickListOptions2 = _interopRequireDefault(_OnlyClickListOptions);
	
	var _OnlyClickIconOptions = __webpack_require__(12);
	
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
	                value: this.state.typeValue,
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
	  options: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
	  values: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  onClick: _react.PropTypes.func,
	  onDelete: _react.PropTypes.func
	};
	
	OnlyClickSelect.defaultProps = {
	  values: []
	};
	
	exports['default'] = OnlyClickSelect;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cw-components.js.map