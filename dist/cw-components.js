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
	
	exports.InputKeyboard = _componentsInputKeyboard2['default'];
	exports.NumberInput = _componentsNumberInput2['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
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
	        { className: 'InputKeyboard' },
	        _react2['default'].createElement('input', { type: 'number', className: 'form-input', onChange: this.handleChange.bind(this), value: this.state.value }),
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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
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
	      var numbers = [];
	      for (var i = 9; i >= 0; i--) {
	        if (i > 0) {
	          numbers.push(_react2['default'].createElement(
	            'div',
	            { key: i, className: 'number', onClick: this.click.bind(this, i) },
	            i
	          ));
	        } else {
	          numbers.push(_react2['default'].createElement(
	            'div',
	            { key: i, className: 'number number--0', onClick: this.click.bind(this, i) },
	            i
	          ));
	        }
	      }
	      numbers.push(_react2['default'].createElement(
	        'div',
	        { key: '10', className: 'delete', onClick: this['delete'].bind(this) },
	        '<'
	      ));
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
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
	        { className: 'NumberInput' },
	        _react2['default'].createElement('input', {
	          ref: 'number',
	          className: 'form-input NumberInput__input',
	          name: this.props.name,
	          min: this.props.min ? this.props.min : 0,
	          max: this.props.max ? this.props.max : null,
	          step: this.props.step ? this.props.step : 1,
	          type: this.props.type ? this.props.type : 'number',
	          onBlur: function (e) {
	            return _this.props.onBlur ? _this.props.onBlur(e) : null;
	          },
	          onChange: this.handleChange.bind(this),
	          value: this.state.value
	        }),
	        _react2['default'].createElement('span', { className: 'NumberInput__minus', onClick: this.handleMinus.bind(this) }),
	        _react2['default'].createElement('span', { className: 'NumberInput__plus', onClick: this.handlePlus.bind(this) })
	      );
	    }
	  }]);
	
	  return NumberInput;
	})(_react2['default'].Component);
	
	exports['default'] = NumberInput;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cw-components.js.map