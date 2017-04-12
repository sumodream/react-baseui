'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import color from '../common/color'

var Folder = function (_YXReactUIBase) {
	_inherits(Folder, _YXReactUIBase);

	_createClass(Folder, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				title: _react2.default.PropTypes.string,
				borderLeft: _react2.default.PropTypes.bool,
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default', 'infoBlack', 'infoWhite', 'infoGray', 'disabled'])
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				borderLeft: false,
				title: '无标题',
				theme: 'primary'
			};
		}
	}]);

	function Folder(props) {
		_classCallCheck(this, Folder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Folder).call(this, props));

		_this.state = {
			theme: Folder.theme[props.theme]
		};

		return _this;
	}

	_createClass(Folder, [{
		key: 'render',
		value: function render() {
			var objStyle = this.state.theme;
			var styles = {
				layout: {
					marginTop: 30,
					padding: '0 30px',
					alignItems: 'stretch',
					textAlign: 'left'
				},
				title: {
					display: 'flex',
					flexFlow: 'row',
					padding: 10,
					marginBottom: 10,
					fontSize: 14,
					color: '#333333',
					borderLeft: this.props.borderLeft ? '4px solid' + objStyle.color : ''
				}
			};
			return _react2.default.createElement(
				_VerticalLayout2.default,
				{ style: this.style(styles.layout) },
				_react2.default.createElement(
					'span',
					{ style: styles.title },
					this.props.title
				),
				this.props.children
			);
		}
	}]);

	return Folder;
}(_uibase2.default);

Folder.theme = {
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
module.exports = Folder;