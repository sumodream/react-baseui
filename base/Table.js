'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

var _FontIcon = require('./FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _CheckBox = require('./CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_YXReactUIBase) {
	_inherits(Table, _YXReactUIBase);

	_createClass(Table, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				data: _react2.default.PropTypes.object,
				foldable: _react2.default.PropTypes.bool,
				folddefault: _react2.default.PropTypes.bool,
				itemStyle: _react2.default.PropTypes.object, //每列的总体样式
				colStyles: _react2.default.PropTypes.array, //大于0为宽度固定值，小于0为flex值,其他情况flex为1
				sortable: _react2.default.PropTypes.bool,
				optionNum: _react2.default.PropTypes.object //配置序号
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				data: { data: [['col1', 'col2', 'col3'], ['value1', 'value2', 'value3'], ['value3', 'value2', 'value3'], ['value2', 'value2', 'value3'], ['value1', 'value2', 'value3'], ['value1', 'value2', 'value3']] },
				foldable: false,
				folddefault: true,
				sortable: false,
				optionNum: {
					show: false, //是否显示序号,
					page: 2,
					pageLength: 10,
					onNumChange: function onNumChange(arr) {
						//选中选框触发函数 参数为选中索引数组
						console.log('序号函数--', arr);
					}
				}
			};
		}
	}]);

	function Table(props) {
		_classCallCheck(this, Table);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));

		var checkList = [];
		for (var i = 0; i < props.data.data.length - 1; i++) {
			checkList.push(false);
		}
		_this.state = {
			fold: props.folddefault,
			activeTab: 0,
			sortidx: -1,
			sortAscending: true,
			checkAll: false,
			checkList: checkList
		};
		return _this;
	}

	_createClass(Table, [{
		key: 'changeOver',
		value: function changeOver(rowidx) {
			this.setState({
				activeTab: rowidx
			});
		}
	}, {
		key: 'changeOut',
		value: function changeOut(rowidx) {
			this.setState({
				activeTab: -1
			});
		}
	}, {
		key: 'sortData',
		value: function sortData(colidx) {
			var _this2 = this;

			var data = this.props.data;
			if (colidx >= 0) {
				data.data = [data.data[0]].concat(data.data.slice(1, data.data.length).sort(function (a, b) {
					a = a[colidx];
					b = b[colidx];
					if (a.props && "children" in a.props) {
						a = a.props.children;
					}
					if (b.props && "children" in b.props) {
						b = b.props.children;
					}
					if (!isNaN(Number(a))) a = Number(a);
					if (!isNaN(Number(b))) b = Number(b);
					if (_this2.state.sortAscending) {
						return a > b ? -1 : a == b ? 0 : 1;
					} else {
						return b > a ? -1 : a == b ? 0 : 1;
					}
				}));
			}
			this.setState({ sortidx: colidx, sortAscending: !this.state.sortAscending });
		}
	}, {
		key: 'checkAll',
		value: function checkAll() {
			var _this3 = this;

			var checkAll = !this.state.checkAll;
			var checkList = this.state.checkList.map(function () {
				return checkAll;
			});
			this.setState({
				checkAll: checkAll,
				checkList: checkList
			});
			if (this.props.optionNum && this.props.optionNum.onNumChange) {
				(function () {
					var checkListIndex = [];
					checkList.forEach(function (item, idx) {
						if (item) {
							checkListIndex.push(idx);
						}
					});
					_this3.props.optionNum.onNumChange(checkListIndex);
				})();
			}
		}
	}, {
		key: 'checkList',
		value: function checkList(idx) {
			var _this4 = this;

			var checkList = this.state.checkList;
			checkList[idx] = !checkList[idx];
			this.setState({
				checkList: checkList
			});
			if (this.props.optionNum && this.props.optionNum.onNumChange) {
				(function () {
					var checkListIndex = [];
					checkList.forEach(function (item, idx) {
						if (item) {
							checkListIndex.push(idx);
						}
					});
					_this4.props.optionNum.onNumChange(checkListIndex);
				})();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			var data = this.props.data;
			var rows = data.data.map(function (row, rowidx) {
				if (_this5.props.optionNum && _this5.props.optionNum.show) {
					var num = _this5.props.optionNum.page ? (_this5.props.optionNum.page - 1) * _this5.props.optionNum.pageLength : 0;
					if (rowidx == 0) {
						row = [_react2.default.createElement(_CheckBox2.default, { style: { marginLeft: 20, color: 'red' }, list: [{ item: '序号', checked: _this5.state.checkAll }], onValueChange: _this5.checkAll.bind(_this5) })].concat(row);
					} else {
						row = [_react2.default.createElement(_CheckBox2.default, { style: { marginLeft: 20 }, list: [{ item: num + rowidx, checked: _this5.state.checkList[rowidx - 1] }], onValueChange: _this5.checkList.bind(_this5, rowidx - 1) })].concat(row);
					}
				}
				var cols = row.map(function (col, colidx) {
					var propsColStyle = {};
					if (_this5.props.colStyles && _this5.props.colStyles.length > 0) {
						var propsStyle = _this5.props.colStyles[colidx];
						if (propsStyle > 0) {
							propsColStyle.width = propsStyle;
						} else if (propsStyle < 0) {
							propsColStyle.flex = -propsStyle;
						} else {
							propsColStyle.flex = 1;
						}
					} else {
						propsColStyle.flex = 1;
					}
					var colStyle = {
						paddingTop: 10,
						paddingBottom: 10,
						fontSize: 14,
						color: '#333333',
						borderLeftWidth: 1,
						borderRightWidth: colidx == row.length - 1 ? 1 : 0,
						borderLeftStyle: 'solid',
						borderLeftColor: colidx == 0 ? '#e7e7e7' : '#EEEEEE',
						borderRightStyle: 'solid',
						borderRightColor: '#e7e7e7',
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: typeof col == 'string' ? 'center' : 'flex-start',
						boxSizing: 'border-box'
					};
					// if (typeof col=='string'){
					// 	col = <span style={{marginLeft:30}}>{col}</span>;
					// }
					if (_this5.props.sortable && rowidx == 0) {
						return _react2.default.createElement(
							'div',
							{ onClick: _this5.sortData.bind(_this5, colidx), style: Object.assign({}, colStyle, _this5.props.itemStyle, propsColStyle), key: colidx },
							col
						);
					} else {
						return _react2.default.createElement(
							'div',
							{ style: Object.assign({}, colStyle, _this5.props.itemStyle, propsColStyle), key: colidx },
							col
						);
					}
				});
				var rowStyle = {
					alignItems: 'stretch',
					alignSelf: 'stretch',
					minHeight: 40,
					wordWrap: 'break-word',
					lineHeight: 1.2,
					backgroundColor: rowidx == 0 ? '#fafafa' : rowidx == _this5.state.activeTab ? '#f2f2f2' : '#ffffff',
					borderTopWidth: 1,
					borderBottomWidth: rowidx == data.data.length - 1 ? 1 : 0,
					borderTopStyle: 'solid',
					borderTopColor: rowidx == 0 ? '#e7e7e7' : '#EEEEEE',
					borderBottomStyle: 'solid',
					borderBottomColor: '#e7e7e7',
					boxSizing: 'border-box'
				};
				return rowidx == 0 || !_this5.props.foldable || _this5.state.fold ? _react2.default.createElement(
					_HorizontalLayout2.default,
					{ style: rowStyle, key: rowidx, onMouseOver: _this5.changeOver.bind(_this5, rowidx), onMouseOut: _this5.changeOut.bind(_this5, rowidx) },
					cols
				) : null;
			});
			var styles = {
				rowStyle: {
					alignSelf: 'stretch',
					alignItems: 'center',
					justifyContent: 'center',
					height: 40,
					backgroundColor: '#FAFAFA',
					borderTopWidth: 1,
					borderBottomWidth: 1,
					borderLeftWidth: 1,
					borderRightWidth: 1,
					borderTopStyle: 'solid',
					borderTopColor: '#EEEEEE',
					borderBottomStyle: 'solid',
					borderBottomColor: '#e7e7e7',
					borderLeftStyle: 'solid',
					borderLeftColor: '#e7e7e7',
					borderRightStyle: 'solid',
					borderRightColor: '#e7e7e7',
					fontSize: 14,
					cursor: 'pointer',
					color: '#333'
				},
				pageStyle: {
					alignSelf: 'stretch',
					alignItems: 'center',
					justifyContent: 'center',
					paddingTop: 30,
					paddingBottom: 30
				},
				pageList: {
					listStyle: 'none',
					margin: '0 22px',
					padding: 0
				}
			};
			return _react2.default.createElement(
				_VerticalLayout2.default,
				_extends({}, this.props, { style: this.style({ flex: '1 0 auto', alignSelf: 'stretch' }) }),
				rows,
				this.props.foldable ? _react2.default.createElement(
					_HorizontalLayout2.default,
					{ style: styles.rowStyle },
					_react2.default.createElement(
						'div',
						{ style: { display: 'flex', justifyContent: 'center', flex: '1 0 auto' }, onClick: function () {
								_this5.setState({ fold: !_this5.state.fold });
							}.bind(this) },
						this.state.fold ? _react2.default.createElement(
							'span',
							null,
							'收起详情',
							_react2.default.createElement(_FontIcon2.default, { style: { fontSize: 14, color: '#59bde5' }, icon: 'icon-up-open-2' })
						) : _react2.default.createElement(
							'span',
							null,
							'展开详情',
							_react2.default.createElement(_FontIcon2.default, { style: { fontSize: 14, color: '#59bde5' }, icon: 'icon-down-open-2' })
						)
					)
				) : null
			);
		}
	}]);

	return Table;
}(_uibase2.default);

module.exports = Table;