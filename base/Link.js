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

var Link = function (_YXReactUIBase) {
	_inherits(Link, _YXReactUIBase);

	_createClass(Link, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				theme: _react2.default.PropTypes.string,
				name: _react2.default.PropTypes.string,
				href: _react2.default.PropTypes.string,
				target: _react2.default.PropTypes.string,
				icon: _react2.default.PropTypes.string,
				iconStyle: _react2.default.PropTypes.object,
				hoverStyle: _react2.default.PropTypes.object,
				disabled: _react2.default.PropTypes.bool,
				onClick: _react2.default.PropTypes.func
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				target: '_self',
				disabled: false,
				children: ''
			};
		}
	}]);

	function Link(props) {
		_classCallCheck(this, Link);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this, props));

		_this.state = {
			theme: props.disabled ? Link.theme['disabled'] : props.theme ? Link.theme[props.theme] : '',
			active: false
		};
		return _this;
	}

	_createClass(Link, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.state = {
				theme: nextProps.disabled ? Link.theme['disabled'] : nextProps.theme ? Link.theme[nextProps.theme] : '',
				active: false
			};
		}
	}, {
		key: 'changeBg',
		value: function changeBg() {
			this.setState({ active: true });
			if (this.props.onMouseOver) {
				this.props.onMouseOver();
			}
		}
	}, {
		key: 'recoverBg',
		value: function recoverBg() {
			this.setState({ active: false });
			if (this.props.onMouseOut) {
				this.props.onMouseOut();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var theme = this.state.theme;
			var link = {
				display: 'flex',
				alignItems: 'center',
				color: theme ? theme.color : 'inherit',
				cursor: 'pointer',
				textDecoration: this.props.disabled ? 'none' : this.state.active ? 'underline' : 'none'
			};
			var linkStyle = this.style(link);
			linkStyle.color = this.state.active ? theme ? theme.hover : linkStyle.color : linkStyle.color;
			linkStyle.fontSize = linkStyle.fontSize ? linkStyle.fontSize : 12;
			linkStyle = !this.props.disabled && !!this.props.hoverStyle && this.state.active ? Object.assign({}, linkStyle, this.props.hoverStyle) : linkStyle;
			var icon = {
				fontSize: linkStyle.fontSize + 2,
				marginRight: 4
			};
			return _react2.default.createElement(
				'a',
				{ style: linkStyle, name: this.props.name, onClick: !this.props.disabled && this.props.onClick, href: !this.props.disabled && this.props.href ? this.props.href : 'javascript:void(0);', target: this.props.target, onMouseOver: this.changeBg.bind(this), onMouseOut: this.recoverBg.bind(this) },
				this.props.icon ? _react2.default.createElement('i', { style: Object.assign({}, icon, this.props.iconStyle), className: "fontello  " + this.props.icon }) : '',
				this.props.children
			);
		}
	}]);

	return Link;
}(_uibase2.default);

Link.theme = {
	primary: {
		color: color.b03,
		hover: color.a12
	},
	danger: {
		color: color.b08,
		hover: color.a11
	},
	success: {
		color: color.b04,
		hover: color.a13
	},
	warning: {
		color: color.b06,
		hover: color.a09
	},
	info: {
		color: color.c03,
		hover: color.c05
	},
	default: {
		color: color.c10,
		hover: color.c12
	},
	disabled: {
		color: color.c08,
		hover: color.c08
	}
};
module.exports = Link;