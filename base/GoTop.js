'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _FontIcon = require('./FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

var _color = require('../common/color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoTop = function (_YXReactUIBase) {
	_inherits(GoTop, _YXReactUIBase);

	function GoTop(props) {
		_classCallCheck(this, GoTop);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GoTop).call(this, props));

		_this.state = {
			active: false
		};
		return _this;
	}

	_createClass(GoTop, [{
		key: 'refresh',
		value: function refresh(oldcallback, event) {
			var state = document.body.scrollTop > 200;
			if (this.state.active != state) {
				this.setState({
					active: state
				});
			}
			if (oldcallback) oldcallback(event);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var oldOnScroll = window.onscroll;
			window.onscroll = this.refresh.bind(this, oldOnScroll);
		}
	}, {
		key: 'onClick',
		value: function onClick() {
			if (typeof window != 'undefined') {
				window.scrollTo(0, 0);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = {
				go: {
					position: 'fixed',
					bottom: 100,
					right: 40
				},
				icon: {
					width: 14,
					height: 14,
					padding: '10px 10px',
					cursor: 'pointer',
					fontSize: 14,
					backgroundColor: _color2.default.a19
				}
			};
			/* 在外层样式上调用rs以支持属性编辑器 */
			return _react2.default.createElement(
				_VerticalLayout2.default,
				{ style: this.style(styles.go) },
				this.state.active ? _react2.default.createElement(
					'span',
					{ style: styles.icon, onClick: this.onClick.bind(this) },
					_react2.default.createElement(_FontIcon2.default, { icon: "icon-up-open-2", style: { color: _color2.default.c01, display: 'flex', justifyContent: 'center' } })
				) : null
			);
		}
	}]);

	return GoTop;
}(_uibase2.default);

module.exports = GoTop;