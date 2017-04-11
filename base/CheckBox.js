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

var color = require('../common/color');

var Checkbox = function (_YXReactUIBase) {
	_inherits(Checkbox, _YXReactUIBase);

	_createClass(Checkbox, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default']),
				images: _react2.default.PropTypes.object,
				list: _react2.default.PropTypes.array,
				onValueChange: _react2.default.PropTypes.func,
				itemStyle: _react2.default.PropTypes.object
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				theme: 'primary',
				list: [{
					item: '语文',
					checked: false,
					disabled: true
				}, {
					item: '数学',
					disabled: false
				}, {
					item: '英语',
					checked: true
				}]
			};
		}
	}]);

	function Checkbox(props) {
		_classCallCheck(this, Checkbox);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, props));

		var checkList = [];
		for (var i = 0; i < props.list.length; i++) {
			var isChecked = props.list[i].checked ? true : false;
			checkList.push(isChecked);
		}
		_this.state = {
			list: checkList,
			theme: Checkbox.theme[props.theme]
		};

		return _this;
	}

	_createClass(Checkbox, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var checkList = [];
			for (var i = 0; i < nextProps.list.length; i++) {
				var isChecked = nextProps.list[i].checked ? true : false;
				checkList.push(isChecked);
			}
			this.state = {
				list: checkList,
				theme: Checkbox.theme[nextProps.theme]
			};
		}
	}, {
		key: 'onValueChange',
		value: function onValueChange(index) {
			var checkList = this.state.list;
			checkList[index] = !checkList[index];
			this.setState({
				list: checkList
			});
			if (this.props.onValueChange) {
				this.props.onValueChange(checkList, index);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (!this.props.list || this.props.list.length == 0) {
				return _react2.default.createElement(
					'div',
					null,
					'空'
				);
			}
			var styles = {
				checkbox: {
					cursor: 'pointer',
					marginRight: 16,
					alignItems: 'center',
					WebkitUserSelect: 'none'
				},
				icon: {
					fontSize: 16,
					marginRight: 6
				},
				img: {
					display: 'inline-block',
					width: 16,
					marginRight: 6
				}
			};
			var items = this.props.list.map(function (item, index) {
				var isChecked = _this2.state.list[index];
				var icon = isChecked ? 'icon-checkbox-yes' : 'icon-checkbox-none';
				var iconStyle = Object.assign({}, styles.icon, { color: isChecked ? _this2.state.theme.color : color.c07 });
				var imgStatus = isChecked ? 'checked' : 'unchecked';
				var sign = _this2.props.images && _this2.props.images[imgStatus] ? _react2.default.createElement('img', { style: styles.img, src: _this2.props.images[imgStatus] }) : _react2.default.createElement('i', { style: iconStyle, className: icon });
				return _react2.default.createElement(
					_HorizontalLayout2.default,
					{ style: Object.assign({}, styles.checkbox, { opacity: item.disabled ? 0.6 : 1 }, _this2.props.itemStyle), key: index, onClick: item.disabled ? "" : _this2.onValueChange.bind(_this2, index) },
					sign,
					_react2.default.createElement(
						'div',
						null,
						item.item
					)
				);
			});
			return _react2.default.createElement(
				_HorizontalLayout2.default,
				{ style: this.style({ fontSize: 14, color: '#4d4d4d' }) },
				items
			);
		}
	}]);

	return Checkbox;
}(_uibase2.default);

Checkbox.theme = {
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
	}
};

module.exports = Checkbox;