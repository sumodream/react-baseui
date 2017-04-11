'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

var _FontIcon = require('./FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = require('../common/color');

var CircleChoose = function (_YXReactUIBase) {
	_inherits(CircleChoose, _YXReactUIBase);

	_createClass(CircleChoose, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				default: _react2.default.PropTypes.number,
				onClick: _react2.default.PropTypes.func,
				value: _react2.default.PropTypes.number,
				size: _react2.default.PropTypes.number
				// 添加 对/半对/错 的枚举值
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				default: -1,
				size: 50
			};
		}
	}]);

	function CircleChoose(props) {
		_classCallCheck(this, CircleChoose);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CircleChoose).call(this, props));

		_this.state = {
			hoverIndex: -1,
			selectedIndex: props.default
		};
		return _this;
	}

	_createClass(CircleChoose, [{
		key: 'onclick',
		value: function onclick(index) {
			if (this.props.onClick) {
				this.props.onClick(index);
			}
			this.setState({
				selectedIndex: index
			});
		}
	}, {
		key: 'onmouseover',
		value: function onmouseover(index) {
			this.setState({
				hoverIndex: index
			});
		}
	}, {
		key: 'onmouseout',
		value: function onmouseout() {
			this.setState({
				hoverIndex: -1
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = {
				right: {
					marginBottom: this.props.size / 2.5,
					cursor: 'pointer',
					width: this.props.size,
					height: this.props.size,
					fontSize: this.props.size / 1.6,
					borderRadius: '50%',
					color: color.b04,
					backgroundColor: color.c01,
					border: '1px solid #e7e7e7'
				},
				rightdefault: {
					marginBottom: this.props.size / 2.5,
					cursor: 'pointer',
					width: this.props.size,
					height: this.props.size,
					fontSize: this.props.size / 1.6,
					borderRadius: '50%',
					color: color.c01,
					backgroundColor: color.b04,
					border: '1px solid ' + color.b04
				},
				halfright: {
					marginBottom: this.props.size / 2.5,
					cursor: 'pointer',
					width: this.props.size,
					height: this.props.size,
					fontSize: this.props.size / 1.6,
					borderRadius: '50%',
					color: color.b06,
					backgroundColor: color.c01,
					border: '1px solid #e7e7e7'
				},
				halfrightdefault: {
					marginBottom: this.props.size / 2.5,
					cursor: 'pointer',
					width: this.props.size,
					height: this.props.size,
					fontSize: this.props.size / 1.6,
					borderRadius: '50%',
					color: color.c01,
					backgroundColor: color.b06,
					border: '1px solid ' + color.b06
				},
				wrong: {
					marginBottom: this.props.size / 2.5,
					cursor: 'pointer',
					width: this.props.size,
					height: this.props.size,
					fontSize: this.props.size / 1.6,
					borderRadius: '50%',
					color: color.b08,
					backgroundColor: color.c01,
					border: '1px solid #e7e7e7'
				},
				wrongdefault: {
					marginBottom: this.props.size / 2.5,
					cursor: 'pointer',
					width: this.props.size,
					height: this.props.size,
					fontSize: this.props.size / 1.6,
					borderRadius: '50%',
					color: color.c01,
					backgroundColor: color.b08,
					border: '1px solid ' + color.b08
				},
				icon: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: this.props.size
				}
			};
			var index = this.props.value != null ? this.props.value : this.state.selectedIndex;
			return _react2.default.createElement(
				_VerticalLayout2.default,
				{ style: this.style(styles) },
				_react2.default.createElement(
					'span',
					{ style: this.state.hoverIndex == 0 ? styles.rightdefault : index == 0 ? styles.rightdefault : styles.right, onClick: this.onclick.bind(this, 0), onMouseOver: this.onmouseover.bind(this, 0), onMouseOut: this.onmouseout.bind(this) },
					_react2.default.createElement(_FontIcon2.default, { icon: 'icon-icon-right', style: styles.icon })
				),
				_react2.default.createElement(
					'span',
					{ style: this.state.hoverIndex == 1 ? styles.halfrightdefault : index == 1 ? styles.halfrightdefault : styles.halfright, onClick: this.onclick.bind(this, 1), onMouseOver: this.onmouseover.bind(this, 1), onMouseOut: this.onmouseout.bind(this) },
					_react2.default.createElement(_FontIcon2.default, { icon: 'icon-icon-half-right', style: styles.icon })
				),
				_react2.default.createElement(
					'span',
					{ style: this.state.hoverIndex == 2 ? styles.wrongdefault : index == 2 ? styles.wrongdefault : styles.wrong, onClick: this.onclick.bind(this, 2), onMouseOver: this.onmouseover.bind(this, 2), onMouseOut: this.onmouseout.bind(this) },
					_react2.default.createElement(_FontIcon2.default, { icon: 'icon-icon-wrong', style: styles.icon })
				)
			);
		}
	}]);

	return CircleChoose;
}(_uibase2.default);

module.exports = CircleChoose;