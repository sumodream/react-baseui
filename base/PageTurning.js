'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

var _FontIcon = require('./FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import color from '../common/color'

var PageTurning = function (_YXReactUIBase) {
	_inherits(PageTurning, _YXReactUIBase);

	_createClass(PageTurning, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				page: _react2.default.PropTypes.number,
				maxPage: _react2.default.PropTypes.number,
				showLength: _react2.default.PropTypes.number,
				onPageChange: _react2.default.PropTypes.func,
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default', 'infoBlack', 'infoWhite', 'infoGray', 'disabled'])
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				page: 1,
				maxPage: 12,
				showLength: 10,
				theme: 'primary'
			};
		}
	}]);

	function PageTurning(props) {
		_classCallCheck(this, PageTurning);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PageTurning).call(this, props));

		_this.state = {
			hoverPage: -1,
			hoverBtn: -1,
			activePage: props.page,
			theme: PageTurning.theme[props.theme]
		};
		return _this;
	}

	_createClass(PageTurning, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.page != this.props.page) {
				this.state.activePage = nextProps.page;
				this.setState({
					theme: PageTurning.theme[nextProps.theme]
				});
			}
		}
	}, {
		key: 'mouseover',
		value: function mouseover(idx) {
			this.setState({
				hoverBtn: idx
			});
		}
	}, {
		key: 'mouseout',
		value: function mouseout() {
			this.setState({
				hoverBtn: -1
			});
		}
	}, {
		key: 'pagePrev',
		value: function pagePrev() {
			if (this.state.activePage > 1) {
				this.pageNumClick(this.state.activePage - 1);
			}
		}
	}, {
		key: 'pageNext',
		value: function pageNext() {
			if (this.state.activePage < this.props.maxPage) {
				this.pageNumClick(this.state.activePage + 1);
			}
		}
	}, {
		key: 'pageNumOver',
		value: function pageNumOver(page) {
			this.setState({
				hoverPage: page
			});
		}
	}, {
		key: 'pageNumOut',
		value: function pageNumOut(page) {
			this.setState({
				hoverPage: -1
			});
		}
	}, {
		key: 'pageNumClick',
		value: function pageNumClick(page) {
			if (this.props.onPageChange) {
				this.props.onPageChange(page);
			}
			this.setState({
				activePage: page
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var objStyle = this.state.theme;
			var styles = {
				pageStyle: {
					alignSelf: 'stretch',
					alignItems: 'center',
					justifyContent: 'flex-start',
					paddingTop: 30,
					paddingBottom: 30

				},
				pageButton: {
					display: 'flex',
					width: 22,
					height: 22,
					borderRadius: '50%',
					backgroundColor: '#e7e7e7',
					cursor: 'pointer',
					justifyContent: 'center',
					alignItems: 'center'
				},
				pageList: {
					listStyle: 'none',
					margin: '0 22px',
					padding: 0
				}
			};
			var pageList = function () {
				var pageArr = [];
				var showPageArr = [];
				var maxPage = _this2.props.maxPage;
				var showLength = _this2.props.showLength;
				for (var i = 1; i <= maxPage; i++) {
					pageArr.push(i);
				}
				if (maxPage <= showLength) {
					showPageArr = pageArr;
				} else {
					var firstPage = _this2.state.activePage - 1 - (_this2.state.activePage - 1) % showLength;
					if (maxPage - firstPage >= showLength) {
						for (var j = 0; j < showLength; j++) {
							showPageArr.push(pageArr[firstPage + j]);
						}
					} else {
						for (var _j = 0; _j < maxPage - firstPage; _j++) {
							showPageArr.push(pageArr[firstPage + _j]);
						}
					}
				}
				var list = showPageArr.map(function (item, idx) {
					var pageIndex = idx + 1;
					var liStyle = {
						display: 'inline-block',
						marginRight: pageIndex == showLength || item == maxPage ? 0 : 18,
						color: _this2.state.activePage == item ? objStyle.color : _this2.state.hoverPage == pageIndex ? objStyle.color : '#999999',
						fontSize: 16,
						cursor: 'pointer'
					};
					return _react2.default.createElement(
						'li',
						{ key: pageIndex, style: liStyle, onClick: _this2.pageNumClick.bind(_this2, item), onMouseOver: _this2.pageNumOver.bind(_this2, pageIndex), onMouseOut: _this2.pageNumOut.bind(_this2, pageIndex) },
						item
					);
				});
				return _react2.default.createElement(
					'ul',
					{ style: styles.pageList },
					list
				);
			}();

			return _react2.default.createElement(
				_HorizontalLayout2.default,
				{ style: this.style(styles.pageStyle) },
				_react2.default.createElement(
					'div',
					{ onClick: this.pagePrev.bind(this), style: Object.assign({}, styles.pageButton, { backgroundColor: this.state.hoverBtn == 1 ? '#c6c6c6' : '#e7e7e7' }), onMouseOver: this.mouseover.bind(this, 1), onMouseOut: this.mouseout.bind(this) },
					_react2.default.createElement(_FontIcon2.default, { icon: 'icon-left-open-3', style: { fontSize: 14, color: '#ffffff', cursor: 'pointer' } })
				),
				pageList,
				_react2.default.createElement(
					'div',
					{ onClick: this.pageNext.bind(this), style: Object.assign({}, styles.pageButton, { backgroundColor: this.state.hoverBtn == 2 ? '#c6c6c6' : '#e7e7e7' }), onMouseOver: this.mouseover.bind(this, 2), onMouseOut: this.mouseout.bind(this) },
					_react2.default.createElement(_FontIcon2.default, { icon: 'icon-right-open-3', style: { fontSize: 14, color: '#ffffff', cursor: 'pointer' } })
				)
			);
		}
	}]);

	return PageTurning;
}(_uibase2.default);

PageTurning.theme = {
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
module.exports = PageTurning;