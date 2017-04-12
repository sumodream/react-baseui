'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import color from '../common/color'

var Collapse = function (_YXReactUIBase) {
	_inherits(Collapse, _YXReactUIBase);

	_createClass(Collapse, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				title: _react2.default.PropTypes.string,
				fold: _react2.default.PropTypes.bool,
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default', 'infoBlack', 'infoWhite', 'infoGray', 'disabled'])
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				title: '折叠面板',
				showIcon: true,
				theme: 'default'
			};
		}
	}]);

	function Collapse(props) {
		_classCallCheck(this, Collapse);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collapse).call(this, props));

		_this.state = {
			showContent: props.fold,
			theme: Collapse.theme[props.theme]
		};
		return _this;
	}

	_createClass(Collapse, [{
		key: 'toggleContent',
		value: function toggleContent() {
			this.setState({
				showContent: !this.state.showContent
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var objStyle = this.state.theme;
			var styles = {
				titleStyle: {
					alignSelf: 'stretch',
					alignItems: 'center',
					padding: '12px 10px 12px 20px',
					fontSize: 14,
					color: '#333333',
					cursor: 'pointer',
					border: 'thin solid #e7e7e7',
					backgroundColor: '#fafafa'
				},
				toggleContent: {
					alignSelf: 'stretch',
					padding: 20,
					alignItems: 'stretch',
					border: 'thin solid #e7e7e7',
					borderTop: 0,
					backgroundColor: '#fff'
				},
				icon: {
					color: objStyle.color,
					marginRight: 5,
					fontSize: 12
				}
			};
			return _react2.default.createElement(
				_VerticalLayout2.default,
				{ style: this.style({ alignSelf: 'stretch' }) },
				_react2.default.createElement(
					_HorizontalLayout2.default,
					{ style: styles.titleStyle, onClick: this.toggleContent.bind(this) },
					_react2.default.createElement(
						'div',
						{ style: { flex: '1 0 auto' } },
						this.props.title
					),
					_react2.default.createElement('i', { className: this.state.showContent ? 'icon-up-open-2' : 'icon-down-open-2', style: styles.icon })
				),
				this.state.showContent ? _react2.default.createElement(
					_VerticalLayout2.default,
					{ style: styles.toggleContent },
					this.props.children
				) : null
			);
		}
	}]);

	return Collapse;
}(_uibase2.default);

Collapse.theme = {
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
module.exports = Collapse;