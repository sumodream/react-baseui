'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

var _FontIcon = require('./FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDown = function (_YXReactUIBase) {
	_inherits(DropDown, _YXReactUIBase);

	_createClass(DropDown, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				theme: _react2.default.PropTypes.string,
				list: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
				listStyle: _react2.default.PropTypes.object
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				theme: 'default',
				list: [{
					item: '个人中心',
					href: '',
					icon: 'icon-iconfont-yonghu',
					fuc: null
				}],
				children: '下拉菜单'
			};
		}
	}]);

	function DropDown(props) {
		_classCallCheck(this, DropDown);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DropDown).call(this, props));

		_this.renderDropList.bind(_this);
		_this.overIndex = -1;
		_this.state = {
			theme: DropDown.theme[props.theme]
		};

		return _this;
	}

	_createClass(DropDown, [{
		key: 'renderDropList',
		value: function renderDropList() {
			var _this2 = this;

			var bodyrect = document.body.getBoundingClientRect();
			var pos = _reactDom2.default.findDOMNode(this.refs.dropui).getBoundingClientRect();
			var listLast = this.props.list.length - 1;
			var theme = this.state.theme;
			var styles = {
				link: {
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					fontSize: 12,
					color: '#333333',
					height: 32,
					textDecoration: 'none',
					boxSizing: 'border-box'
				}
			};
			var listStyle = Object.assign({}, styles.link, theme.listStyle.link, this.props.listStyle ? this.props.listStyle : {});
			var values = this.props.list.map(function (item, idx) {
				return _react2.default.createElement(
					_Link2.default,
					{ key: idx, onMouseOver: function (idx, evt) {
							_this2.overIndex = idx;
							_this2.renderDropList();
						}.bind(_this2, idx),
						onMouseOut: function (idx, evt) {
							_this2.overIndex = -1;
							_this2.renderDropList();
						}.bind(_this2, idx),
						href: item.href ? item.href : '',
						icon: item.icon ? item.icon : '',
						iconStyle: theme.listStyle.icon,
						onClick: item.fuc ? item.fuc : null,
						style: Object.assign({}, listStyle, { backgroundColor: idx == _this2.overIndex ? '#E7E7E7' : '#FFFFFF', borderBottom: idx == listLast ? 0 : '1px solid #f2f2f2' }) },
					item.item
				);
			});
			_reactDom2.default.render(_react2.default.createElement(
				'div',
				{ onClick: this.cancel.bind(this), style: { position: 'absolute', left: window.pageXOffset, top: window.pageYOffset, width: bodyrect.width, height: bodyrect.height, display: 'flex', flexDirection: 'column' } },
				_react2.default.createElement(
					'div',
					{ style: { position: 'absolute', left: pos.left, top: pos.top + pos.height, width: pos.width, backgroundColor: 'white', display: 'flex', flexDirection: 'column', boxShadow: '#c7c7c7 0 1px 1px', WebkitBoxShadow: '#c7c7c7 0 1px 1px' } },
					_react2.default.createElement(
						_VerticalLayout2.default,
						{ style: { alignItems: 'stretch' } },
						values
					)
				)
			), this.dropElem);
		}
	}, {
		key: 'showList',
		value: function showList() {
			if (typeof this.dropElem == 'undefined') {
				this.dropElem = document.createElement('div');
				document.body.appendChild(this.dropElem);
			}
			this.renderDropList();
		}
	}, {
		key: 'cancel',
		value: function cancel() {
			_reactDom2.default.unmountComponentAtNode(this.dropElem);
			this.dropElem.parentNode.removeChild(this.dropElem);
			this.dropElem = undefined;
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = {
				title: {
					display: 'flex',
					height: 40,
					justifyContent: 'space-between',
					alignItems: 'center',
					cursor: 'pointer',
					fontSize: 14,
					color: '#4d4d4d'
				},
				downIcon: {
					marginLeft: 6,
					fontSize: 18
				}
			};
			return _react2.default.createElement(
				_HorizontalLayout2.default,
				{ style: this.style(styles.title), ref: 'dropui', onClick: this.showList.bind(this) },
				this.props.children,
				_react2.default.createElement(_FontIcon2.default, { style: styles.downIcon, icon: 'icon-down-dir-1' })
			);
		}
	}]);

	return DropDown;
}(_uibase2.default);

DropDown.theme = {
	default: {
		listStyle: {
			link: {
				height: 40
			},
			icon: {
				color: '#b1b1b1'
			}
		}
	}
};
module.exports = DropDown;