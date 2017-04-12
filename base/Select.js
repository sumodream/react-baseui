'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import color from '../common/color'

var Select = function (_YXReactUIBase) {
	_inherits(Select, _YXReactUIBase);

	_createClass(Select, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default', 'infoBlack', 'infoWhite', 'infoGray', 'disabled']),
				placeholder: _react2.default.PropTypes.string,
				onValueChange: _react2.default.PropTypes.func,
				choice: _react2.default.PropTypes.array,
				showLength: _react2.default.PropTypes.number,
				icon: _react2.default.PropTypes.string,
				separator: _react2.default.PropTypes.string,
				default: _react2.default.PropTypes.number,
				itemHoverStyle: _react2.default.PropTypes.object,
				listStyle: _react2.default.PropTypes.object,
				itemStyle: _react2.default.PropTypes.object
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				theme: 'default',
				choice: ['项目1', '项目2'],
				showLength: 6
			};
		}
	}]);

	function Select(props) {
		_classCallCheck(this, Select);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

		_this2.renderPopup.bind(_this2);
		_this2.state = {
			activeIdx: typeof _this2.props.default != 'undefined' ? _this2.props.default : _this2.props.placeholder ? -1 : 0,
			theme: Select.theme[props.theme]
		};
		_this2.overIndex = -1;
		return _this2;
	}

	_createClass(Select, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (typeof nextProps.default != 'undefined') {
				this.setState({ activeIdx: nextProps.default });
			}
		}
	}, {
		key: 'onItemChoose',
		value: function onItemChoose(idx, e) {
			_reactDom2.default.unmountComponentAtNode(this.valueElem);
			this.valueElem = undefined;
			this.setState({ activeIdx: idx });
			if (this.props.onValueChange) this.props.onValueChange(idx);
			e.preventDefault();
			e.stopPropagation();
		}
	}, {
		key: 'cancel',
		value: function cancel(e) {
			_reactDom2.default.unmountComponentAtNode(this.valueElem);
			this.valueElem = undefined;
		}
	}, {
		key: 'renderPopup',
		value: function renderPopup() {
			var _this3 = this;

			var bodyrect = document.body.getBoundingClientRect();
			var pos = _reactDom2.default.findDOMNode(this.refs.valueui).getBoundingClientRect();
			var styles = {
				listOriginStyle: {
					display: 'flex',
					flexDirection: 'column',
					position: 'absolute',
					border: '1px solid #E7E7E7',
					borderTop: 0,
					left: pos.left, top: pos.top + pos.height,
					width: pos.width,
					backgroundColor: 'white',
					color: '#333333',
					fontSize: 12,
					boxSizing: 'border-box'
				},
				listStyle: {
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					flex: '1 0 auto',
					paddingLeft: 12,
					cursor: 'pointer',
					height: 22
				}
			};
			var listStyle = Object.assign({}, styles.listOriginStyle, this.props.listStyle);
			styles.listStyle.backgroundColor = listStyle.backgroundColor ? 'transparent' : '#FFFFFF';
			var values = this.props.choice.map(function (item, idx) {
				var style = Object.assign({}, styles.listStyle, _this3.props.itemStyle);
				if (idx == _this3.overIndex) {
					style.backgroundColor = '#e7e7e7';
					style = Object.assign({}, style, _this3.props.itemHoverStyle);
				}
				return _react2.default.createElement(
					'div',
					{ key: idx, onMouseOver: function (idx, evt) {
							_this3.overIndex = idx;
							_this3.renderPopup();
						}.bind(_this3, idx),
						onMouseOut: function (idx, evt) {
							_this3.overIndex = -1;
							_this3.renderPopup();
						}.bind(_this3, idx),
						onClick: _this3.onItemChoose.bind(_this3, idx), style: style },
					_react2.default.createElement(
						'span',
						null,
						item
					)
				);
			});
			if (this.props.choice.length > this.props.showLength) {
				listStyle.height = styles.listStyle.height * this.props.showLength;
				listStyle.overflowX = 'hidden';
				listStyle.overflowY = 'scroll';
			}

			_reactDom2.default.render(_react2.default.createElement(
				'div',
				{ onClick: this.cancel.bind(this), style: { position: 'absolute', left: window.pageXOffset, top: window.pageYOffset, width: bodyrect.width, height: bodyrect.height, display: 'flex', flexDirection: 'column' } },
				_react2.default.createElement(
					'div',
					{ style: listStyle },
					_react2.default.createElement(
						_VerticalLayout2.default,
						{ style: { alignItems: 'stretch' } },
						values
					)
				)
			), this.valueElem);
		}
	}, {
		key: 'onValueClick',
		value: function onValueClick(e) {
			if (typeof this.valueElem == 'undefined') {
				this.valueElem = document.createElement('div');
				document.body.appendChild(this.valueElem);
			}
			this.renderPopup();
			e.preventDefault();
			e.stopPropagation();
		}
	}, {
		key: 'render',
		value: function render() {
			var objStyle = this.state.theme;
			var _this = this;
			var value = this.state.activeIdx == -1 ? this.props.placeholder : this.props.choice[this.state.activeIdx];
			var styles = {
				breadCrumbBar: {
					alignItems: 'center',
					boxSizing: 'border-box'
				},
				icon: {
					color: objStyle.color,
					fontSize: 16,
					marginRight: 5,
					marginLeft: -5
				}
			};
			return _react2.default.createElement(
				'div',
				{ onClick: this.onValueClick.bind(this), ref: 'valueui', style: this.style({ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 32, boxSizing: 'border-box', padding: '0 12px', fontSize: 12, color: this.state.activeIdx == -1 ? '#B6BAC3' : '#333', border: 'thin solid #E7E7E7' }) },
				this.props.icon ? _react2.default.createElement('i', { className: "fontello  " + this.props.icon, style: styles.icon }) : '',
				_react2.default.createElement(
					'span',
					{ style: { flex: '1 0 auto' } },
					value
				),
				_this.props.separator ? _react2.default.createElement('i', { className: "fontello  " + this.props.separator, style: { marginLeft: 16, color: objStyle.color } }) : ''
			);
		}
	}]);

	return Select;
}(_uibase2.default);

Select.theme = {
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
module.exports = Select;