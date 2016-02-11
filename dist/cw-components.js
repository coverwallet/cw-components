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
	
	exports.InputKeyboard = _componentsInputKeyboard2['default'];
	exports.NumberInput = _componentsNumberInput2['default'];
	exports.IconRadioGroup = _componentsIconRadioGroup2['default'];
	exports.IconRadioInput = _componentsIconRadioInput2['default'];

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
	        { className: 'input-keyboard' },
	        this.props.currency && _react2['default'].createElement('span', { className: 'input-keyboard__currency' }),
	        _react2['default'].createElement('input', { type: 'number', className: 'input-keyboard__input', onChange: this.handleChange.bind(this), value: this.state.value }),
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
	            { key: i, className: 'keyboard__number', onClick: this.click.bind(this, i) },
	            i
	          ));
	        } else {
	          numbers.push(_react2['default'].createElement(
	            'div',
	            { key: i, className: 'keyboard__number keyboard__number--0', onClick: this.click.bind(this, i) },
	            i
	          ));
	        }
	      }
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
	        { className: 'number-input' },
	        _react2['default'].createElement('input', {
	          ref: 'number',
	          className: 'number-input__input',
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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var IconRadioInput = (function (_React$Component) {
	  _inherits(IconRadioInput, _React$Component);
	
	  function IconRadioInput(props) {
	    _classCallCheck(this, IconRadioInput);
	
	    _get(Object.getPrototypeOf(IconRadioInput.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      checked: this.checked(props.value, props.checkedValue)
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
	      return _react2['default'].createElement(
	        'label',
	        { className: 'icons-radio-input ' + (this.state.checked ? 'icons-radio-input--checked' : '') },
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=cw-components.js.map