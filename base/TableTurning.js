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

import color from '../common/color'

var TableTurning = function (_YXReactUIBase) {
	_inherits(TableTurning, _YXReactUIBase);

	_createClass(TableTurning, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				page: _react2.default.PropTypes.number,
				maxPage: _react2.default.PropTypes.number,
				showLength: _react2.default.PropTypes.number,
				theme: _react2.default.PropTypes.string,
				onPageChange: _react2.default.PropTypes.func
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				page: 1,
				maxPage: 12,
				showLength: 6,
				theme: '#59bde5'
			};
		}
	}]);

	function TableTurning(props) {
		_classCallCheck(this, TableTurning);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TableTurning).call(this, props));

		_this.state = {
			hoverPage: -1,
			hoverBtn: -1,
			showList: false,
			activePage: props.page
		};
		_this.overIndex = -1;
		_this.focus = false;
		return _this;
	}

	_createClass(TableTurning, [{
		key: 'pageStart',
		value: function pageStart() {
			this.pageNumChange(1);
		}
	}, {
		key: 'pageEnd',
		value: function pageEnd() {
			this.pageNumChange(this.props.maxPage);
		}
	}, {
		key: 'pagePrev',
		value: function pagePrev() {
			if (this.state.activePage > 1) {
				this.pageNumChange(this.state.activePage - 1);
			}
		}
	}, {
		key: 'pageNext',
		value: function pageNext() {
			if (this.state.activePage < this.props.maxPage) {
				this.pageNumChange(this.state.activePage + 1);
			}
		}
	}, {
		key: 'pageNumChange',
		value: function pageNumChange(page) {
			if (this.props.onPageChange) {
				this.props.onPageChange(page);
			}
			this.setState({
				activePage: page
			});
		}
	}, {
		key: 'pageKeyEnter',
		value: function pageKeyEnter(evt) {
			var which = evt.keyCode || evt.which;
			if (which == 13) {
				this.pageNumChange(evt.target.value);
				_reactDom2.default.unmountComponentAtNode(this.pageListElem);
				this.pageListElem = undefined;
				this.setState({
					showList: !this.state.showList
				});
			}
		}
	}, {
		key: 'hoverOverBtn',
		value: function hoverOverBtn(idx) {
			this.setState({
				hoverBtn: idx
			});
		}
	}, {
		key: 'hoverOutBtn',
		value: function hoverOutBtn() {
			this.setState({
				hoverBtn: -1
			});
		}
	}, {
		key: 'toggleShowList',
		value: function toggleShowList(bool) {
			if (bool) {
				if (typeof this.pageListElem == 'undefined') {
					this.pageListElem = document.createElement('div');
					document.body.appendChild(this.pageListElem);
				}
				this.renderPageList();
			} else {
				if (typeof this.pageListElem != 'undefined') {
					_reactDom2.default.unmountComponentAtNode(this.pageListElem);
					this.pageListElem.parentNode.removeChild(this.pageListElem);
					this.pageListElem = undefined;
				}
			}
			this.setState({
				showList: bool
			});
		}
	}, {
		key: 'cancel',
		value: function cancel() {
			if (!this.focus) {
				_reactDom2.default.unmountComponentAtNode(this.pageListElem);
				this.pageListElem.parentNode.removeChild(this.pageListElem);
				this.pageListElem = undefined;
				this.setState({
					showList: !this.state.showList
				});
			}
		}
	}, {
		key: 'renderPageList',
		value: function renderPageList() {
			var _this2 = this;

			var bodyrect = document.body.getBoundingClientRect();
			var pos = _reactDom2.default.findDOMNode(this.refs.pageListUI).getBoundingClientRect();
			var pageArr = [];
			var maxPage = this.props.maxPage;
			var showLength = this.props.showLength;
			for (var i = 1; i <= maxPage; i++) {
				pageArr.push(i);
			}
			var listStyles = {
				edit: {
					position: 'absolute',
					bottom: 6,
					left: 6,
					padding: '0 6px',
					width: 84,
					height: 28,
					alignItems: 'center',
					borderWidth: 1,
					borderStyle: 'solid',
					borderColor: color.c05,
					boxSizing: 'border-box',
					outline: 'none'
				},
				pageList: {
					position: 'relative',
					listStyle: 'none',
					width: '100%',
					height: maxPage >= showLength ? showLength * 22 : maxPage * 22,
					boxSizing: 'border-box',
					overflowY: 'auto',
					margin: 0,
					padding: 0
				}
			};
			var list = pageArr.map(function (num) {
				var pageli = {
					display: 'flex',
					width: '100%',
					flexDecoration: 'row',
					height: 22,
					alignItems: 'center',
					padding: '0 12',
					boxSizing: 'border-box',
					justifyContent: 'space-between',
					fontSize: 12,
					color: color.c12,
					cursor: 'pointer',
					backgroundColor: num == _this2.overIndex ? color.c03 : color.c01
				};
				return _react2.default.createElement(
					'li',
					{ key: num,
						style: pageli,
						onMouseOver: function (num) {
							_this2.overIndex = num;
							_this2.renderPageList();
						}.bind(_this2, num),
						onMouseOut: function (num) {
							_this2.overIndex = -1;
							_this2.renderPageList();
						}.bind(_this2, num),
						onClick: _this2.pageNumChange.bind(_this2, num)
					},
					num,
					_this2.state.activePage == num ? _react2.default.createElement(_FontIcon2.default, { style: { fontSize: 10, color: color.c08 }, icon: 'icon-icon-right' }) : ''
				);
			});
			var pageList = _react2.default.createElement(
				'ul',
				{ style: listStyles.pageList },
				list
			);
			_reactDom2.default.render(_react2.default.createElement(
				'div',
				{ onClick: this.cancel.bind(this), style: { position: 'absolute', left: window.pageXOffset, top: window.pageYOffset, width: bodyrect.width, height: bodyrect.height, display: 'flex', flexDirection: 'column' } },
				_react2.default.createElement(
					'div',
					{ style: { position: 'absolute', left: pos.left, top: maxPage >= showLength ? pos.top - showLength * 22 - 40 : pos.top - maxPage * 22 - 40, width: pos.width, height: maxPage >= showLength ? showLength * 22 + 40 : maxPage * 22 + 40, display: 'flex', flexDirection: 'column', border: 'thin solid #e7e7e7', borderBottom: 0, boxSizing: 'border-box', backgroundColor: '#ffffff' } },
					_react2.default.createElement(
						_VerticalLayout2.default,
						{ style: { alignItems: 'stretch' } },
						pageList,
						_react2.default.createElement('input', { style: listStyles.edit, placeholder: '请输入页码', onFocus: function () {
								_this2.focus = true;
							}.bind(this), onBlur: function () {
								_this2.focus = false;
							}.bind(this), onKeyDown: this.pageKeyEnter.bind(this) })
					)
				)
			), this.pageListElem);
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = {
				pageStyle: {
					alignSelf: 'stretch',
					alignItems: 'center',
					justifyContent: 'flex-start',
					paddingTop: 20,
					paddingBottom: 30
				},
				pageList: {
					listStyle: 'none',
					margin: '0 22',
					padding: 0
				},
				link: {
					width: 30,
					height: 30,
					borderWidth: 1,
					borderStyle: 'solid',
					borderColor: color.c04,
					backgroundColor: '#ffffff',
					alignItems: 'center',
					justifyContent: 'center',
					marginRight: 6
				},
				number: {
					width: 96,
					height: 30,
					borderWidth: 1,
					borderStyle: 'solid',
					cursor: 'pointer',
					color: color.c12,
					fontSize: 12,
					alignItems: 'center',
					justifyContent: 'space-between',
					marginRight: 6,
					paddingLeft: 12,
					paddingRight: 5,
					boxSizing: 'border-box'
				}
			};
			return _react2.default.createElement(
				_HorizontalLayout2.default,
				{ style: this.style(styles.pageStyle) },
				_react2.default.createElement(
					_Link2.default,
					{ style: Object.assign({}, styles.link, { borderColor: this.state.hoverBtn == 1 ? color.c05 : color.c04 }), onClick: this.pageStart.bind(this), onMouseOver: this.hoverOverBtn.bind(this, 1), onMouseOut: this.hoverOutBtn.bind(this) },
					_react2.default.createElement(_FontIcon2.default, { icon: 'icon-to-start', style: { fontSize: 12, color: this.state.hoverBtn == 1 ? color.c05 : color.c07, cursor: 'pointer' } })
				),
				_react2.default.createElement(
					_Link2.default,
					{ style: Object.assign({}, styles.link, { borderColor: this.state.hoverBtn == 2 ? color.c05 : color.c04 }), onClick: this.pagePrev.bind(this), onMouseOver: this.hoverOverBtn.bind(this, 2), onMouseOut: this.hoverOutBtn.bind(this) },
					_react2.default.createElement(_FontIcon2.default, { icon: 'icon-left-open-2', style: { fontSize: 12, color: this.state.hoverBtn == 2 ? color.c05 : color.c07, cursor: 'pointer' } })
				),
				_react2.default.createElement(
					_HorizontalLayout2.default,
					{ ref: 'pageListUI', style: Object.assign({}, styles.number, { borderColor: this.state.showList ? this.props.theme : this.state.hoverBtn == 3 ? color.c05 : color.c04 }), onClick: this.toggleShowList.bind(this, !this.state.showList), onMouseOver: this.hoverOverBtn.bind(this, 3), onMouseOut: this.hoverOutBtn.bind(this) },
					this.state.activePage,
					_react2.default.createElement(
						_VerticalLayout2.default,
						null,
						_react2.default.createElement(_FontIcon2.default, { icon: 'icon-up-dir-1', style: { fontSize: 10, color: color.c07, cursor: 'pointer' } }),
						_react2.default.createElement(_FontIcon2.default, { icon: 'icon-down-dir-1', style: { fontSize: 10, color: color.c07, cursor: 'pointer' } })
					)
				),
				_react2.default.createElement(
					_Link2.default,
					{ style: Object.assign({}, styles.link, { borderColor: this.state.hoverBtn == 4 ? color.c05 : color.c04 }), onClick: this.pageNext.bind(this), onMouseOver: this.hoverOverBtn.bind(this, 4), onMouseOut: this.hoverOutBtn.bind(this) },
					_react2.default.createElement(_FontIcon2.default, { icon: 'icon-right-open-2', style: { fontSize: 12, color: this.state.hoverBtn == 4 ? color.c05 : color.c07, cursor: 'pointer' } })
				),
				_react2.default.createElement(
					_Link2.default,
					{ style: Object.assign({}, styles.link, { borderColor: this.state.hoverBtn == 5 ? color.c05 : color.c04 }), onClick: this.pageEnd.bind(this), onMouseOver: this.hoverOverBtn.bind(this, 5), onMouseOut: this.hoverOutBtn.bind(this) },
					_react2.default.createElement(_FontIcon2.default, { icon: 'icon-to-end', style: { fontSize: 12, color: this.state.hoverBtn == 5 ? color.c05 : color.c07, cursor: 'pointer' } })
				)
			);
		}
	}]);

	return TableTurning;
}(_uibase2.default);

module.exports = TableTurning;