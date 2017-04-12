'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import color from '../common/color'

var Input = function (_YXReactUIBase) {
	_inherits(Input, _YXReactUIBase);

	_createClass(Input, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				type: _react2.default.PropTypes.string,
				maxLength: _react2.default.PropTypes.number,
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default']),
				size: _react2.default.PropTypes.oneOf(['larger', 'default', 'small', 'xSmall']),
				icon: _react2.default.PropTypes.string,
				search: _react2.default.PropTypes.string,
				disabled: _react2.default.PropTypes.bool,
				onChange: _react2.default.PropTypes.func
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				type: 'text',
				maxLength: 999,
				size: 'default',
				disabled: false
			};
		}
	}]);

	function Input(props) {
		_classCallCheck(this, Input);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

		_this.state = {
			theme: props.theme ? Input.theme[props.theme] : { color: '#e7e7e7' },
			size: Input.size[props.size],
			focus: false
		};
		return _this;
	}

	_createClass(Input, [{
		key: 'onInputFocus',
		value: function onInputFocus(evt) {
			if (this.props.onFocus) {
				this.props.onFocus(evt);
			}
			this.setState({
				focus: true
			});
		}
	}, {
		key: 'onInputBlur',
		value: function onInputBlur(evt) {
			if (this.props.onBlur) {
				this.props.onBlur(evt);
			}
			this.setState({
				focus: false
			});
		}
	}, {
		key: 'onInputKeyDown',
		value: function onInputKeyDown(evt) {
			if (this.props.onKeyDown) {
				this.props.onKeyDown(evt);
			}
		}
	}, {
		key: 'onValueChange',
		value: function onValueChange(evt) {
			if (this.props.onValueChange) {
				this.props.onValueChange(evt.target.value);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var objStyle = this.state.theme;
			var size = this.state.size;
			var styles = {
				wrap: {
					position: 'relative'
				},
				input: {
					width: '100%',
					outline: 'none',
					textOverflow: 'ellipsis',
					color: '#333',
					border: '1px solid',
					borderColor: this.state.focus ? objStyle.color : '#e7e7e7',
					borderRadius: 2,
					backgroundColor: this.props.disabled ? '#fafafa' : '#fff',
					boxSizing: 'border-box'
				},
				search: {
					position: 'absolute',
					top: (size.height - size.fontSize - 2) / 2,
					right: 2,
					fontSize: size.fontSize + 2,
					color: this.state.focus ? this.props.theme ? objStyle.color : '#B6BAC3' : '#B6BAC3',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					alignSelf: 'stretch'
				},
				icon: {
					position: 'absolute',
					top: (size.height - size.fontSize - 2) / 2,
					left: size.paddingLeft - 2,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					alignSelf: 'stretch',
					fontSize: size.fontSize + 2,
					color: this.state.focus ? this.props.theme ? objStyle.color : '#B6BAC3' : '#B6BAC3'
				}
			};
			var inputStyle = Object.assign({}, styles.input, size, {});
			inputStyle.paddingLeft = this.props.icon ? size.paddingLeft * 2 + size.fontSize : size.paddingLeft;
			inputStyle.paddingRight = this.props.search ? size.paddingLeft * 2 + size.fontSize : size.paddingLeft;

			return _react2.default.createElement(
				_HorizontalLayout2.default,
				{ style: this.style(styles.wrap) },
				this.props.icon ? _react2.default.createElement('i', { className: "fontello  " + this.props.icon, style: styles.icon }) : '',
				_react2.default.createElement('input', { type: this.props.type, placeholder: this.props.placeholder, maxlength: this.props.maxLength, style: inputStyle, disabled: this.props.disabled ? 'disabled' : false, value: this.props.value, onKeyDown: this.onInputKeyDown.bind(this), onFocus: this.onInputFocus.bind(this), onBlur: this.onInputBlur.bind(this), onChange: this.onValueChange.bind(this), defaultValue: this.props.default }),
				this.props.search ? _react2.default.createElement('i', { className: "fontello  " + this.props.search, style: styles.search }) : ''
			);
		}
	}]);

	return Input;
}(_uibase2.default);

Input.theme = {
	primary: {
		color: color.b03
	},
	danger: {
		color: color.b08
	},
	success: {
		color: color.b04
	},
	warning: {
		color: color.b06
	},
	info: {
		color: color.c03
	},
	default: {
		color: color.a06
	}
};
Input.size = {
	larger: {
		height: 40,
		fontSize: 14,
		paddingLeft: 12
	},
	default: {
		height: 34,
		fontSize: 12,
		paddingLeft: 12
	},
	small: {
		height: 28,
		fontSize: 12,
		paddingLeft: 8
	},
	xSmall: {
		height: 20,
		fontSize: 12,
		paddingLeft: 8
	}
};
module.exports = Input;