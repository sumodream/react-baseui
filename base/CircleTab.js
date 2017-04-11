'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = require('../common/color');

var CircleTab = function (_YXReactUIBase) {
	_inherits(CircleTab, _YXReactUIBase);

	_createClass(CircleTab, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				onSelect: _react2.default.PropTypes.func,
				values: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
				default: _react2.default.PropTypes.number,
				theme: _react2.default.PropTypes.string,
				size: _react2.default.PropTypes.number,
				disabled: _react2.default.PropTypes.bool,
				tooltip: _react2.default.PropTypes.func
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				values: [{ name: '01', litterColor: color.b04 }, { name: '02', litterColor: color.b06 }, { name: '03', litterColor: color.b08 }, { name: '04' }, { name: '05' }],
				onSelect: function onSelect(index) {
					return index;
				},
				default: 0,
				theme: 'primary',
				size: 35,
				disabled: false
			};
		}
	}]);

	function CircleTab(props) {
		_classCallCheck(this, CircleTab);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CircleTab).call(this, props));

		_this.state = {
			selectedTab: props.default,
			theme: CircleTab.theme[props.theme]
		};
		return _this;
	}

	_createClass(CircleTab, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			if (newProps.default != this.state.selectedTab) {
				this.setState({
					selectedTab: newProps.default
				});
			}
		}
	}, {
		key: 'handleSelect',
		value: function handleSelect(index) {
			this.setState({
				selectedTab: index
			});
			if (this.props.onSelect) {
				this.props.onSelect(index);
			}
		}
	}, {
		key: 'onMouseOver',
		value: function onMouseOver(index, ref, e) {
			if (this.props.tooltip) {
				var showElem = this.props.tooltip(index);
				if (typeof this.valueElem == 'undefined') {
					this.valueElem = document.createElement('div');
					document.body.appendChild(this.valueElem);
				}
				this.renderPopup(showElem, ref);
				e.preventDefault();
				e.stopPropagation();
			}
		}
	}, {
		key: 'onMouseOut',
		value: function onMouseOut(e) {
			if (typeof this.valueElem != 'undefined') {
				this.cancel();
			}
		}
	}, {
		key: 'renderPopup',
		value: function renderPopup(showElem, ui) {
			var pos = ReactDOM.findDOMNode(this.refs[ui]).getBoundingClientRect();
			ReactDOM.render(_react2.default.createElement(
				_VerticalLayout2.default,
				{ style: { position: 'absolute', left: window.pageXOffset + pos.left + 40, top: window.pageYOffset + pos.top + 20, width: 120, height: 120, display: 'flex', flexDirection: 'column' } },
				showElem
			), this.valueElem);
		}
	}, {
		key: 'cancel',
		value: function cancel(e) {
			if (typeof this.valueElem == 'undefined') return;
			ReactDOM.unmountComponentAtNode(this.valueElem);
			this.valueElem.parentNode.removeChild(this.valueElem);
			this.valueElem = undefined;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var objStyle = this.state.theme;
			var items = this.props.values.map(function (item, index) {
				var style = {
					selectedTab: {
						cursor: _this2.props.disabled ? 'text' : 'pointer',
						position: "relative",
						fontSize: _this2.props.size / 2.5,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: _this2.props.size,
						height: _this2.props.size,
						borderRadius: '50%',
						color: objStyle.hoverColor && _this2.props.disabled ? '#6a6a6a' : objStyle.hoverColor,
						backgroundColor: objStyle.hoverBg && _this2.props.disabled ? objStyle.bg : objStyle.hoverBg,
						borderWidth: 1,
						borderStyle: 'solid',
						borderColor: objStyle.hoverBg && _this2.props.disabled ? '#e7e7e7' : objStyle.hoverBg
					},
					unselectedTab: {
						cursor: _this2.props.disabled ? 'text' : 'pointer',
						position: "relative",
						fontSize: _this2.props.size / 2.5,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: _this2.props.size,
						height: _this2.props.size,
						borderRadius: '50%',
						border: '1px solid #e7e7e7'
					},
					litterCircle: {
						width: _this2.props.size / 4.3,
						height: _this2.props.size / 4.3,
						borderRadius: '50%',
						position: 'absolute',
						top: 0,
						right: 0,
						backgroundColor: item.litterColor ? item.litterColor : 'rgba(255,255,255,0)',
						border: item.litterColor ? '1px solid #e7e7e7' : 0
					}
				};
				return _react2.default.createElement(
					_HorizontalLayout2.default,
					{ key: index, style: { marginRight: 25, marginBottom: 10 } },
					_react2.default.createElement(
						'span',
						{ style: index == _this2.state.selectedTab ? style.selectedTab : style.unselectedTab,
							onClick: _this2.props.disabled ? null : _this2.handleSelect.bind(_this2, index),
							key: index, ref: 'CircleTabAddon' + index,
							onMouseOver: _this2.onMouseOver.bind(_this2, index, 'CircleTabAddon' + index),
							onMouseOut: _this2.onMouseOut.bind(_this2) },
						item.name,
						_react2.default.createElement('span', { style: style.litterCircle })
					)
				);
			});
			return _react2.default.createElement(
				_HorizontalLayout2.default,
				{ style: this.style({ flexWrap: 'wrap', flex: 1, alignSelf: 'stretch' }) },
				items
			);
		}
	}]);

	return CircleTab;
}(_uibase2.default);

CircleTab.theme = {
	primary: {
		bg: color.c01,
		color: color.c13,
		hoverBg: color.b03,
		hoverColor: color.c01
	},
	danger: {
		bg: color.c01,
		hoverBg: color.b08,
		color: color.c13,
		hoverColor: color.c01
	},
	success: {
		bg: color.c01,
		hoverBg: color.b04,
		color: color.c13,
		hoverColor: color.c01
	},
	warning: {
		bg: color.c01,
		hoverBg: color.b06,
		color: color.c13,
		hoverColor: color.c01
	},
	info: {
		bg: color.c01,
		hoverBg: color.c03,
		color: color.c13,
		hoverColor: color.c01
	},
	default: {
		bg: color.c01,
		hoverBg: color.a06,
		color: color.c13,
		hoverColor: color.c01
	}
};

module.exports = CircleTab;