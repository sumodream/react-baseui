'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import color from '../common/color'

var Button = function (_YXReactUIBase) {
	_inherits(Button, _YXReactUIBase);

	_createClass(Button, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default', 'infoBlue', 'infoBlack', 'infoWhite', 'infoGray', 'disabled', 'green', 'lightGreen', 'warningRev']),
				icon: _react2.default.PropTypes.string,
				size: _react2.default.PropTypes.number,
				disabled: _react2.default.PropTypes.bool,
				onClick: _react2.default.PropTypes.func
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				theme: 'primary',
				disabled: false,
				children: '按钮'
			};
		}
	}]);

	function Button(props) {
		_classCallCheck(this, Button);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

		_this.state = {
			active: false,
			theme: props.disabled ? Button.theme['disabled'] : Button.theme[props.theme]
		};
		return _this;
	}

	_createClass(Button, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.theme != nextProps.theme || this.props.disabled != nextProps.disabled) {
				this.setState({
					active: false,
					theme: nextProps.disabled ? Button.theme['disabled'] : Button.theme[nextProps.theme]
				});
			}
		}
	}, {
		key: 'mouserOver',
		value: function mouserOver(event) {
			this.setState({
				active: true
			});
			event.preventDefault();
			event.stopPropagation();
		}
	}, {
		key: 'mouseOut',
		value: function mouseOut(event) {
			this.setState({
				active: false
			});
			event.preventDefault();
			event.stopPropagation();
		}
	}, {
		key: 'render',
		value: function render() {
			var objStyle = this.state.theme;
			var styles = {
				btn: {
					display: 'flex',
					minHeight: this.props.size ? this.props.size : 32,
					minWidth: this.props.size ? this.props.size : 84,
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: this.props.size ? '50%' : 2,
					border: 1,
					borderStyle: objStyle.border ? 'solid' : 'none',
					borderColor: this.state.active && objStyle.borderColor ? objStyle.color : objStyle.color,
					fontSize: 14,
					color: this.state.active && objStyle.colorHover ? objStyle.colorHover : objStyle.color,
					backgroundColor: this.state.active ? objStyle.bgHover : objStyle.bg,
					cursor: this.props.disabled ? 'not-allowed' : 'pointer',
					outline: 'none',
					WebkitOutline: 'none',
					boxSizing: 'border-box',
					overflow: 'hidden'
				},
				icon: {
					marginRight: 3,
					color: 'inherit'
				}

			};
			return _react2.default.createElement(
				'button',
				{ style: this.style(styles.btn), onClick: this.props.disabled ? null : this.props.onClick, onMouseOver: this.props.disabled ? null : this.mouserOver.bind(this), onMouseOut: this.props.disabled ? null : this.mouseOut.bind(this) },
				this.props.icon ? _react2.default.createElement('i', { className: "fontello  " + this.props.icon, style: styles.icon }) : '',
				this.props.children
			);
		}
	}]);

	return Button;
}(_uibase2.default);

Button.theme = {
	primary: {
		bg: color.b03,
		color: color.c01,
		bgHover: color.b16
	},
	danger: {
		bg: color.b08,
		color: color.c01,
		bgHover: color.a11
	},
	success: {
		bg: color.b04,
		color: color.c01,
		bgHover: color.a13
	},
	warning: {
		bg: color.b06,
		color: color.c01,
		bgHover: color.a09
	},
	warningRev: {
		bg: color.c01,
		color: color.b06,
		bgHover: color.c02
	},
	info: {
		bg: color.c03,
		color: color.c10,
		bgHover: color.a06
	},
	default: {
		bg: color.a06,
		color: color.c01,
		bgHover: color.a05
	},
	green: {
		bg: color.b04,
		color: color.c01,
		bgHover: color.b18
	},
	lightGreen: {
		bg: '#57dcbb',
		color: color.c01,
		bgHover: '#39d6af'
	},
	infoBlue: {
		bg: color.c01,
		color: color.b03,
		bgHover: color.a12,
		border: 1,
		borderColor: color.b03,
		colorHover: color.c01
	},
	infoBlack: {
		bg: color.c01,
		color: color.c13,
		bgHover: color.c13,
		border: 1,
		borderColor: color.c13,
		colorHover: color.c01
	},
	infoWhite: {
		bg: color.c13,
		color: color.c01,
		bgHover: color.c01,
		border: 1,
		borderColor: color.c01,
		colorHover: color.c13
	},
	infoGray: {
		bg: color.c15,
		color: color.c10,
		bgHover: color.a03,
		border: 1,
		borderColor: color.c10,
		colorHover: color.c01
	},
	disabled: {
		bg: color.c03,
		color: color.c07,
		colorHover: color.c03
	}
};
module.exports = Button;