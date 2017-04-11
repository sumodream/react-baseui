'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = require('../common/color');

var PlateSwitch = function (_YXReactUIBase) {
	_inherits(PlateSwitch, _YXReactUIBase);

	_createClass(PlateSwitch, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				values: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
				disabled: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.bool),
				default: _react2.default.PropTypes.number,
				onChange: _react2.default.PropTypes.func,
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default', 'infoBlack', 'infoWhite', 'infoGray', 'disabled'])
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				values: ['对比班级', '对比年级'],
				theme: 'primary'
			};
		}
	}]);

	function PlateSwitch(props) {
		_classCallCheck(this, PlateSwitch);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlateSwitch).call(this, props));

		_this.state = {
			activeIndex: props.default ? props.default : 0,
			theme: PlateSwitch.theme[props.theme]
		};
		return _this;
	}

	_createClass(PlateSwitch, [{
		key: 'itemChange',
		value: function itemChange(index) {
			if (this.props.onChange) {
				this.props.onChange(index);
			}
			if (this.state.activeIndex != index && (!this.props.disabled || !this.props.disabled[index])) {
				this.setState({
					activeIndex: index
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var objStyle = this.state.theme;
			var wrapStyle = this.style({
				position: 'relative',
				width: 170,
				height: 26,
				borderRadius: 20,
				border: '1px solid',
				borderColor: objStyle.color,
				boxSizing: 'border-box',
				fontSize: 12,
				textAlign: 'center',
				WebkitUserSelect: 'none'
			});

			var style = {
				wrap: {
					position: 'relative',
					width: 170,
					height: 26,
					borderRadius: 20,
					border: '1px solid',
					borderColor: objStyle.color,
					boxSizing: 'border-box',
					fontSize: 12,
					textAlign: 'center',
					WebkitUserSelect: 'none'
				},
				bg: {
					position: 'absolute',
					top: 0,
					left: this.state.activeIndex ? wrapStyle.width / 2 : -1,
					width: wrapStyle.width / 2 - 1,
					height: wrapStyle.height - 2,
					backgroundColor: objStyle.color,
					borderRadius: 20
				},
				itemFirst: {
					display: 'flex',
					position: 'absolute',
					top: 0,
					left: 0,
					width: wrapStyle.width / 2,
					height: wrapStyle.height,
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
					boxSizing: 'border-box',
					color: this.state.activeIndex ? objStyle.color : '#ffffff'
				},
				itemLast: {
					display: 'flex',
					position: 'absolute',
					top: 0,
					right: 0,
					width: wrapStyle.width / 2,
					height: wrapStyle.height,
					alignItems: 'center',
					justifyContent: 'center',
					cursor: 'pointer',
					boxSizing: 'border-box',
					color: this.state.activeIndex ? '#ffffff' : objStyle.color
				}

			};
			return _react2.default.createElement(
				'div',
				{ style: this.style(wrapStyle) },
				_react2.default.createElement('div', _extends({}, this.props, { style: style.bg })),
				_react2.default.createElement(
					'span',
					{ style: style.itemFirst, onClick: this.itemChange.bind(this, 0) },
					this.props.values[0]
				),
				_react2.default.createElement(
					'span',
					{ style: style.itemLast, onClick: this.itemChange.bind(this, 1) },
					this.props.values[1]
				)
			);
		}
	}]);

	return PlateSwitch;
}(_uibase2.default);

PlateSwitch.theme = {
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
	},
	infoBlack: {
		color: color.c01
	},
	infoWhite: {
		color: color.c13
	},
	infoGray: {
		color: color.c15
	},
	disabled: {
		color: color.c03
	}
};
module.exports = PlateSwitch;