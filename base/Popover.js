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

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import color from '../common/color'

var Popover = function (_YXReactUIBase) {
	_inherits(Popover, _YXReactUIBase);

	_createClass(Popover, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default', 'infoBlack', 'infoWhite', 'infoGray', 'warningRev']),
				width: _react2.default.PropTypes.number,
				icon: _react2.default.PropTypes.string,
				title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
				trigger: _react2.default.PropTypes.oneOf(['hover', 'click']),
				content: _react2.default.PropTypes.object,
				placement: _react2.default.PropTypes.oneOf(['left', 'center', 'right'])
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				width: 250,
				title: '气泡',
				theme: 'primary',
				trigger: 'hover',
				placement: 'center',
				content: _react2.default.createElement(
					_VerticalLayout2.default,
					{ style: { width: 250 } },
					_react2.default.createElement(
						_Text2.default,
						null,
						'默认气泡卡片'
					),
					_react2.default.createElement(
						_Text2.default,
						null,
						'嗯,我是默认不带图标的滑入式气泡泡~~'
					)
				)
			};
		}
	}]);

	function Popover(props) {
		_classCallCheck(this, Popover);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Popover).call(this, props));

		_this.renderPopup.bind(_this);
		_this.state = {
			theme: Popover.theme[props.theme],
			placement: Popover.placement[props.placement]
		};
		return _this;
	}

	_createClass(Popover, [{
		key: 'renderPopup',
		value: function renderPopup(elem, ui, src) {
			var bodyrect = document.body.getBoundingClientRect();
			var pos = ReactDOM.findDOMNode(this.refs[ui]).getBoundingClientRect();
			ReactDOM.render(_react2.default.createElement(
				'div',
				null,
				this.props.trigger == 'click' ? _react2.default.createElement(
					'div',
					{ onClick: this.cancel.bind(this), style: { position: 'absolute', left: window.pageXOffset, top: (window.pageYOffset + pos.top + pos.height + 10) / 2, width: bodyrect.width, height: bodyrect.height, display: 'flex', flexDirection: 'column', paddingTop: (window.pageYOffset + pos.top + pos.height + 10) / 2 } },
					_react2.default.createElement(
						_VerticalLayout2.default,
						{ style: { position: 'absolute', left: pos.left - (this.props.width + 40 - pos.width) / 2, display: 'flex', flexDirection: 'column', alignSelf: 'center' } },
						_react2.default.createElement(
							_VerticalLayout2.default,
							{ style: {
									width: this.props.width,
									background: this.state.theme.bg,
									borderRadius: 5,
									border: '1px solid ' + this.state.theme.bg,
									boxShadow: '0 0 12px rgba(0, 0, 0, .5)',
									padding: 20,
									lineHeight: 1.2,
									position: 'relative',
									color: this.state.theme.color,
									textAlign: 'justify',
									fontSize: 14,
									marginLeft: this.state.placement.marginLeft
								} },
							this.props.content,
							_react2.default.createElement(_Text2.default, { style: {
									width: 0,
									height: 0,
									borderStyle: 'solid',
									borderWidth: '0 10px 10px 10px',
									borderColor: 'transparent transparent ' + this.state.theme.bg + ' transparent',
									position: 'absolute',
									marginLeft: this.props.width / this.state.placement.position,
									marginTop: -(this.props.width / 8.33)
								} })
						)
					)
				) : _react2.default.createElement(
					_VerticalLayout2.default,
					{ style: { position: 'absolute', left: pos.left - (this.props.width + 40 - pos.width) / 2, top: window.pageYOffset + pos.top + pos.height + 10, display: 'flex', flexDirection: 'column', alignSelf: 'center' } },
					_react2.default.createElement(
						_VerticalLayout2.default,
						{ style: {
								width: this.props.width,
								background: this.state.theme.bg,
								borderRadius: 5,
								border: '1px solid ' + this.state.theme.bg,
								boxShadow: '0 0 12px rgba(0, 0, 0, .5)',
								padding: 20,
								lineHeight: 1.2,
								position: 'relative',
								color: this.state.theme.color,
								textAlign: 'justify',
								fontSize: 14,
								marginLeft: this.state.placement.marginLeft
							} },
						this.props.content,
						_react2.default.createElement(_Text2.default, { style: {
								width: 0,
								height: 0,
								borderStyle: 'solid',
								borderWidth: '0 10px 10px 10px',
								borderColor: 'transparent transparent ' + this.state.theme.bg + ' transparent',
								position: 'absolute',
								marginLeft: this.props.width / this.state.placement.position,
								marginTop: -(this.props.width / 8.33)
							} })
					)
				)
			), elem);
			this.popElem;
		}
	}, {
		key: 'popMouseOver',
		value: function popMouseOver() {
			if (typeof this.popElem == 'undefined') {
				this.popElem = document.createElement('div');
				document.body.appendChild(this.popElem);
			}
			this.renderPopup(this.popElem, 'popui', this.props.content);
		}
	}, {
		key: 'popMouseOut',
		value: function popMouseOut() {
			ReactDOM.unmountComponentAtNode(this.popElem);
			this.popElem = undefined;
		}
	}, {
		key: 'cancel',
		value: function cancel(e) {
			if (typeof this.popElem == 'undefined') return;
			ReactDOM.unmountComponentAtNode(this.popElem);
			this.popElem.parentNode.removeChild(this.popElem);
			this.popElem = undefined;
		}
	}, {
		key: 'changPop',
		value: function changPop(e) {
			if (typeof this.popElem == 'undefined') {
				this.popElem = document.createElement('div');
				document.body.appendChild(this.popElem);
			}
			this.renderPopup(this.popElem, 'popui', this.props.content);
			e.preventDefault();
			e.stopPropagation();
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = {
				Popover: {
					alignItems: 'center',
					alignSelf: 'stretch',
					justifycontentent: 'center',
					cursor: 'pointer'
				}
			};
			return _react2.default.createElement(
				_VerticalLayout2.default,
				{ style: this.style(styles) },
				_react2.default.createElement(
					_HorizontalLayout2.default,
					{ style: styles.Popover },
					this.props.trigger == 'click' ? _react2.default.createElement(
						'div',
						{ ref: 'popui', onClick: this.changPop.bind(this) },
						this.props.icon ? _react2.default.createElement('i', { className: "fontello  " + this.props.icon }) : '',
						this.props.title ? _react2.default.createElement(
							'span',
							null,
							this.props.title
						) : '',
						this.props.children
					) : _react2.default.createElement(
						'div',
						{ ref: 'popui', onMouseOver: this.popMouseOver.bind(this), onMouseOut: this.popMouseOut.bind(this) },
						this.props.icon ? _react2.default.createElement('i', { className: "fontello  " + this.props.icon }) : '',
						this.props.title ? _react2.default.createElement(
							'span',
							null,
							this.props.title
						) : '',
						this.props.children
					)
				)
			);
		}
	}]);

	return Popover;
}(_uibase2.default);

Popover.placement = {
	right: {
		position: 1.1,
		marginLeft: -114
	},
	center: {
		position: 2.232,
		marginLeft: 0
	},
	left: {
		position: 91.67,
		marginLeft: 114
	}
};
Popover.theme = {
	primary: {
		bg: color.b03,
		color: color.c01
	},
	danger: {
		bg: color.b08,
		color: color.c01
	},
	success: {
		bg: color.b04,
		color: color.c01
	},
	warning: {
		bg: color.b06,
		color: color.c01
	},
	warningRev: {
		bg: color.c01,
		color: color.b06
	},
	info: {
		bg: color.c03,
		color: color.c01
	},
	default: {
		bg: color.a06,
		color: color.c01
	},
	infoBlack: {
		bg: color.c01,
		color: color.c11
	},
	infoWhite: {
		bg: color.c13,
		color: color.c01
	},
	infoGray: {
		bg: color.c15,
		color: color.c01
	}
};
module.exports = Popover;