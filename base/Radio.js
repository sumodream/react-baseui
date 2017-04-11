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

var Radio = function (_YXReactUIBase) {
	_inherits(Radio, _YXReactUIBase);

	_createClass(Radio, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default']),
				images: _react2.default.PropTypes.object,
				list: _react2.default.PropTypes.array,
				default: _react2.default.PropTypes.number,
				onValueChange: _react2.default.PropTypes.func,
				itemStyle: _react2.default.PropTypes.object
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				theme: 'primary',
				default: 0,
				list: [{
					item: '男'
				}, {
					item: '女'
				}]
			};
		}
	}]);

	function Radio(props) {
		_classCallCheck(this, Radio);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Radio).call(this, props));

		_this.state = {
			active: props.default == null ? -1 : props.default,
			theme: Radio.theme[props.theme]
		};
		return _this;
	}

	_createClass(Radio, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.state = {
				theme: Radio.theme[nextProps.theme],
				active: nextProps.default == null ? -1 : nextProps.default
			};
		}
	}, {
		key: 'onValueChange',
		value: function onValueChange(index) {
			this.setState({
				active: index
			});
			if (this.props.onValueChange) {
				this.props.onValueChange(index);
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
			var objStyle = this.state.theme;
			var styles = {
				radio: {
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
				var isChecked = index == _this2.state.active;
				var icon = isChecked ? 'icon-radio-yes' : 'icon-radio-none';
				var iconStyle = Object.assign({}, styles.icon, { color: isChecked ? _this2.state.theme.color : color.c07 });
				var imgStatus = isChecked ? 'checked' : 'unchecked';
				var sign = _this2.props.images && _this2.props.images[imgStatus] ? _react2.default.createElement('img', { style: styles.img, src: _this2.props.images[imgStatus] }) : _react2.default.createElement('i', { style: iconStyle, className: icon });
				return _react2.default.createElement(
					_HorizontalLayout2.default,
					{ style: Object.assign({}, styles.radio, { opacity: item.disabled ? 0.6 : 1 }, _this2.props.itemStyle), key: index, onClick: item.disabled ? "" : _this2.onValueChange.bind(_this2, index) },
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

	return Radio;
}(_uibase2.default);

Radio.theme = {
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
module.exports = Radio;