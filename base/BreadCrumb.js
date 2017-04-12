'use strict';

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import color from '../common/color'

var BreadCrumb = function (_YXReactUIBase) {
	_inherits(BreadCrumb, _YXReactUIBase);

	_createClass(BreadCrumb, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				list: _react2.default.PropTypes.array,
				icon: _react2.default.PropTypes.string,
				separator: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default', 'infoBlack', 'infoWhite', 'infoGray'])
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				theme: 'primary',
				icon: 'icon-fanhui2',
				separator: _react2.default.createElement('i', { className: 'icon-right-open-3' }),
				list: [{
					item: '面包屑'
				}, {
					item: '当前页'
				}]
			};
		}
	}]);

	function BreadCrumb(props) {
		_classCallCheck(this, BreadCrumb);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(BreadCrumb).call(this, props));

		_this2.state = {
			theme: BreadCrumb.theme[props.theme]
		};
		return _this2;
	}

	_createClass(BreadCrumb, [{
		key: 'render',
		value: function render() {
			var objStyle = this.state.theme;
			var styles = {
				breadCrumbBar: {
					alignItems: 'center',
					boxSizing: 'border-box',
					fontSize: 14
				},
				icon: {
					color: this.state.select && objStyle.color ? objStyle.color : objStyle.color,
					fontSize: 16,
					marginRight: 2
				}
			};
			var _this = this;
			var listLength = this.props.list.length;
			if (listLength == 1) {
				var currentName = '';
				if (typeof this.props.list[0] == 'string') {
					currentName = this.props.list[0];
				} else {
					currentName = this.props.list[0].item;
				}
				var content = _react2.default.createElement(
					'span',
					{ style: { color: '#333333' } },
					currentName
				);
			} else if (listLength > 1) {
				var listContent = this.props.list.map(function (item, idx) {
					if (idx < listLength - 1) {
						return _react2.default.createElement(
							_HorizontalLayout2.default,
							{ key: idx, style: { alignItems: 'center' } },
							_react2.default.createElement(
								_Link2.default,
								{ style: { color: '#999999', fontSize: 14 }, onClick: item.fuc ? item.fuc : null, hoverStyle: { color: objStyle.color }, href: item.href ? item.href : '' },
								item.item
							),
							typeof _this.props.separator == 'string' ? _react2.default.createElement(
								'span',
								{ style: { marginLeft: 5, marginRight: 5 } },
								_this.props.separator
							) : _this.props.separator
						);
					} else {
						return _react2.default.createElement(
							'span',
							{ key: idx, style: { color: '#333' } },
							item.item
						);
					}
				});
				var content = _react2.default.createElement(
					_HorizontalLayout2.default,
					{ style: { alignItems: 'center', flex: '1 0 auto', color: '#999999', fontSize: 14 } },
					_this.props.icon ? _react2.default.createElement('i', { className: _this.props.icon, style: styles.icon }) : '',
					listContent
				);
			}

			return _react2.default.createElement(
				_HorizontalLayout2.default,
				{ style: this.style(styles.breadCrumbBar) },
				content
			);
		}
	}]);

	return BreadCrumb;
}(_uibase2.default);

BreadCrumb.theme = {
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
	}
};
module.exports = BreadCrumb;