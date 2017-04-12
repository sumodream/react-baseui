'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import color from '../common/color'

var Tabs = function (_YXReactUIBase) {
	_inherits(Tabs, _YXReactUIBase);

	_createClass(Tabs, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				onSelect: _react2.default.PropTypes.func,
				values: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element])),
				default: _react2.default.PropTypes.number,
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default', 'infoBlue', 'infoBlack', 'infoWhite', 'infoGray', 'disabled']),
				width: _react2.default.PropTypes.number
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				values: [_react2.default.createElement(
					_Link2.default,
					{ hoverStyle: { color: '#23527c' } },
					'英语'
				), '语文'],
				onSelect: function onSelect(index) {
					return index;
				},
				default: 0,
				theme: 'primary'
			};
		}
	}]);

	function Tabs(props) {
		_classCallCheck(this, Tabs);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

		_this.state = {
			selectedTab: props.default,
			theme: Tabs.theme[props.theme]
		};
		return _this;
	}

	_createClass(Tabs, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!isNaN(nextProps.default) && nextProps.default != this.props.default) {
				this.setState({
					selectedTab: nextProps.default,
					default: nextProps.default
				});
			}
		}
	}, {
		key: 'handleSelect',
		value: function handleSelect(index) {
			this.props.onSelect(index);
			this.setState({
				selectedTab: index
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var objStyle = this.state.theme;
			var items = this.props.values.map(function (item, index) {
				var styles = {
					selectedTab: _defineProperty({
						marginRight: 20,
						padding: '5px 12px',
						cursor: 'pointer',
						fontSize: 14,
						borderRadius: 2,
						border: _this2.state.selectedTab ? objStyle.border ? objStyle.border : 0 : 0,
						borderStyle: objStyle.border ? 'solid' : 'none',
						borderColor: _this2.state.selectedTab && objStyle.borderColor ? objStyle.borderColor : '',
						color: _this2.state.selectedTab && objStyle.hoverColor ? objStyle.hoverColor : objStyle.color,
						backgroundColor: _this2.state.selectedTab ? objStyle.hover : objStyle.bg
					}, 'border', objStyle.border ? objStyle.border : 0),
					unselectedTab: {
						marginRight: 20,
						padding: '5px 12px',
						cursor: 'pointer',
						fontSize: 14,
						borderRadius: 2,
						color: color.c12
					}
				};
				return _react2.default.createElement(
					'div',
					_defineProperty({ key: index, style: index == _this2.state.selectedTab ? _this2.style(styles.selectedTab) : _this2.style(styles.unselectedTab), onClick: _this2.handleSelect.bind(_this2, index) }, 'key', index),
					item
				);
			});
			return _react2.default.createElement(
				_HorizontalLayout2.default,
				_extends({}, this.props, { style: { flexWrap: 'wrap', width: this.props.width } }),
				items
			);
		}
	}]);

	return Tabs;
}(_uibase2.default);

Tabs.theme = {
	primary: {
		bg: color.b03,
		color: color.c01,
		hover: color.b03
	},
	danger: {
		bg: color.b08,
		color: color.c01,
		hover: color.b08
	},
	success: {
		bg: color.b04,
		color: color.c01,
		hover: color.b04
	},
	warning: {
		bg: color.b06,
		color: color.c01,
		hover: color.b06
	},
	info: {
		bg: color.c03,
		color: color.c10,
		hover: color.c03
	},
	default: {
		bg: color.a06,
		color: color.c01,
		hover: color.a06
	},
	infoBlue: {
		bg: color.c01,
		color: color.b03,
		hover: color.a12,
		border: 1,
		borderColor: color.b03,
		hoverColor: color.c01
	},
	infoWhite: {
		bg: color.c01,
		color: color.c10,
		hover: color.a03,
		border: 1,
		boderColor: color.c04,
		hoverColor: color.c01
	},
	infoGray: {
		bg: color.c15,
		color: color.c10,
		hover: color.a03,
		border: 1,
		boderColor: color.c04,
		hoverColor: color.c01
	}
};
module.exports = Tabs;