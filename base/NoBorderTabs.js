'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = require('../common/color');

var NoBorderTabs = function (_YXReactUIBase) {
	_inherits(NoBorderTabs, _YXReactUIBase);

	_createClass(NoBorderTabs, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'white', 'default', 'warningText']),
				values: _react2.default.PropTypes.array,
				default: _react2.default.PropTypes.number,
				currentIndex: _react2.default.PropTypes.number,
				onSelect: _react2.default.PropTypes.func
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				values: ["班级0", "班级1", "班级2", "班级3", "班级A101(文)", "班级A101(文)", "班级A101(文)"],
				default: 0,
				theme: 'primary'
			};
		}
	}]);

	function NoBorderTabs(props) {
		_classCallCheck(this, NoBorderTabs);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NoBorderTabs).call(this, props));

		_this.state = {
			selectedTab: props.default,
			theme: NoBorderTabs.theme[props.theme]
		};
		return _this;
	}

	_createClass(NoBorderTabs, [{
		key: 'handleSelect',
		value: function handleSelect(index) {
			if (this.props.onSelect) {
				this.props.onSelect(index);
			}
			this.setState({
				selectedTab: index
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var objStyle = this.state.theme;
			var showIndex = this.props.currentIndex != null ? this.props.currentIndex : this.state.selectedTab;
			var items = this.props.values.map(function (item, index) {
				var len = _this2.props.values.length - 1;
				var style = {
					selectedTab: {
						display: 'flex',
						alignItems: 'center',
						alignSelf: 'stretch',
						justifyContent: 'center',
						margin: index == 0 ? '0 15px 0 0px' : index == len ? '0 0px 0 15px' : '0 15px 0 15px',
						cursor: 'pointer',
						fontSize: 14,
						border: 0,
						borderBottom: objStyle.borderBottom,
						borderStyle: 'solid',
						borderColor: objStyle.borderBottomColor,
						color: objStyle.textHover

					},
					unselectedTab: {
						display: 'flex',
						alignItems: 'center',
						alignSelf: 'stretch',
						justifyContent: 'center',
						margin: index == 0 ? '0 15px 0 0px' : index == len ? '0 0px 0 15px' : '0 15px 0 15px',
						color: objStyle.text,
						cursor: 'pointer',
						fontSize: 14
					}
				};
				return _react2.default.createElement(
					_HorizontalLayout2.default,
					{ key: index, style: { alignSelf: 'stretch' } },
					_react2.default.createElement(
						'div',
						{ style: index == showIndex ? style.selectedTab : style.unselectedTab, onClick: _this2.handleSelect.bind(_this2, index), key: index },
						item
					)
				);
			});
			return _react2.default.createElement(
				_HorizontalLayout2.default,
				_extends({}, this.props, { style: this.style({ alignSelf: 'stretch' }) }),
				items
			);
		}
	}]);

	return NoBorderTabs;
}(_uibase2.default);

NoBorderTabs.theme = {
	primary: {
		text: color.c12,
		textHover: color.b03,
		borderBottom: '2px solid',
		borderBottomColor: color.b03
	},
	danger: {
		text: color.c12,
		textHover: color.b08,
		borderBottom: '2px solid',
		borderBottomColor: color.b08
	},
	success: {
		text: color.c12,
		textHover: color.b04,
		borderBottom: '2px solid',
		borderBottomColor: color.b04
	},
	warning: {
		text: color.c12,
		textHover: color.b06,
		borderBottom: '2px solid',
		borderBottomColor: color.b06
	},
	warningText: {
		text: color.c09,
		textHover: color.c12,
		borderBottom: '2px solid',
		borderBottomColor: color.b06
	},
	info: {
		text: color.c12,
		textHover: color.c03,
		borderBottom: '2px solid',
		borderBottomColor: color.c03
	},
	white: {
		text: color.c01,
		textHover: color.c01,
		borderBottom: '2px solid',
		borderBottomColor: color.c01
	},
	default: {
		text: color.c12,
		textHover: color.a06,
		borderBottom: '2px solid',
		borderBottomColor: color.a06
	}
};
module.exports = NoBorderTabs;