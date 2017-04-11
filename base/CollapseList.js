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

var _FontIcon = require('./FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = require('../common/color');

var CollapseList = function (_YXReactUIBase) {
	_inherits(CollapseList, _YXReactUIBase);

	_createClass(CollapseList, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				title: _react2.default.PropTypes.string,
				icon: _react2.default.PropTypes.string,
				list: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
				default: _react2.default.PropTypes.number, //默认选中的列表索引
				fold: _react2.default.PropTypes.bool,
				onValueChange: _react2.default.PropTypes.func,
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default', 'infoBlack', 'infoWhite', 'infoGray', 'disabled'])
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				theme: 'default',
				title: '折叠列表',
				fold: false,
				default: -1,
				list: [{
					item: '测试数据1',
					href: '',
					icon: ''
				}, {
					item: '测试数据2'
				}, {
					item: '测试数据3'
				}]
			};
		}
	}]);

	function CollapseList(props) {
		_classCallCheck(this, CollapseList);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CollapseList).call(this, props));

		_this.state = {
			showContent: props.fold,
			activeItem: props.default,
			hoverItem: props.default,
			theme: CollapseList.theme[props.theme]
		};

		return _this;
	}

	_createClass(CollapseList, [{
		key: 'toggleContent',
		value: function toggleContent() {
			this.setState({
				showContent: !this.state.showContent
			});
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({
				showContent: nextProps.fold,
				activeItem: nextProps.default
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var objStyle = this.state.theme;
			var styles = {
				titleStyle: {
					paddingLeft: 30,
					height: 52,
					color: '#333333',
					boxSizing: 'border-box',
					alignItems: 'center',
					fontSize: 14,
					cursor: 'pointer'
				},
				toggleIcon: {
					marginRight: 20,
					fontSize: 16,
					color: objStyle.color,
					alignSelf: 'center',
					marginLeft: 10
				},
				icon: {
					color: objStyle.color,
					fontSize: 16,
					marginRight: 4,
					alignSelf: 'center'
				}

			};
			var listContent = function () {
				var listLast = _this2.props.list.length - 1;
				var list = _this2.props.list.map(function (item, idx) {
					return _react2.default.createElement(
						_Link2.default,
						{ key: idx,
							onMouseOver: function (idx, evt) {
								_this2.setState({
									hoverItem: idx
								});
							}.bind(_this2, idx),
							onMouseOut: function (idx, evt) {
								_this2.setState({
									hoverItem: -1
								});
							}.bind(_this2, idx),
							onClick: function (idx) {
								if (_this2.props.onValueChange) {
									_this2.props.onValueChange(idx);
								}
								_this2.setState({
									activeItem: idx
								});
							}.bind(_this2, idx),
							href: item.href ? item.href : '',
							icon: item.icon ? item.icon : '',
							style: { flexGrow: 1, paddingLeft: _this2.props.icon ? 50 : 38, backgroundColor: idx == _this2.state.activeItem ? objStyle.color : idx == _this2.state.hoverItem ? objStyle.color : '#FFFFFF', fontSize: 12, color: idx == _this2.state.activeItem ? '#ffffff' : idx == _this2.state.hoverItem ? '#ffffff' : '#333333', height: 40, display: 'flex', flexDirection: 'row', alignItems: 'center', textDecoration: 'none', borderBottom: '1px solid #f2f2f2' } },
						item.item
					);
				});
				return _react2.default.createElement(
					_VerticalLayout2.default,
					{ style: { alignItems: 'stretch' } },
					list
				);
			}();
			return _react2.default.createElement(
				_VerticalLayout2.default,
				{ style: this.style({ alignItems: 'stretch' }) },
				_react2.default.createElement(
					_HorizontalLayout2.default,
					{ style: styles.titleStyle, onClick: this.toggleContent.bind(this) },
					_react2.default.createElement(
						_HorizontalLayout2.default,
						null,
						this.props.icon ? _react2.default.createElement('i', { className: "fontello  " + this.props.icon, style: styles.icon }) : '',
						this.props.title
					),
					_react2.default.createElement(_FontIcon2.default, { style: styles.toggleIcon, icon: this.state.showContent ? 'icon-up-open-2' : 'icon-down-open-2' })
				),
				this.state.showContent ? listContent : null
			);
		}
	}]);

	return CollapseList;
}(_uibase2.default);

CollapseList.theme = {
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
module.exports = CollapseList;