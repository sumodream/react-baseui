'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = require('../common/color');

var Dialog = function (_React$Component) {
	_inherits(Dialog, _React$Component);

	function Dialog() {
		_classCallCheck(this, Dialog);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).apply(this, arguments));
	}

	_createClass(Dialog, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ style: { position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'row' } },
				_react2.default.createElement(
					'div',
					{ style: { display: 'flex', flexDirection: 'row', maxWidth: '80%', maxHeight: '80%', boxShadow: '0 3px 9px rgba(0,0,0,.5)' } },
					_react2.default.createElement(
						'div',
						{ style: Object.assign({}, { backgroundColor: 'white', borderRadius: 4, display: 'flex', flexDirection: 'column' }, this.props.style) },
						_react2.default.createElement(
							'div',
							{ style: { height: 50, flexShrink: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' } },
							_react2.default.createElement(
								'span',
								{ style: { fontSize: 16, color: color.c12 } },
								this.props.title
							)
						),
						_react2.default.createElement('div', { style: { height: 1, backgroundColor: color.c04, alignSelf: 'stretch' } }),
						_react2.default.createElement(
							'div',
							{ style: { padding: "10 30", overflow: 'auto' } },
							this.props.cnt
						),
						this.props.btnui
					),
					_react2.default.createElement(
						'div',
						{ style: { position: 'relative', left: -20, top: -15, alignSelf: 'flex-start' } },
						_react2.default.createElement('div', { style: { position: 'absolute', left: 8, top: 8, width: 16, height: 16, backgroundColor: 'white' } }),
						_react2.default.createElement('i', { onClick: this.props.cancel, style: { position: 'absolute', left: 0, right: 0, fontSize: 30 }, className: "fontello icon-cancel-2" })
					)
				)
			);
		}
	}]);

	return Dialog;
}(_react2.default.Component);

var YXReactUIBase = function (_React$Component2) {
	_inherits(YXReactUIBase, _React$Component2);

	function YXReactUIBase(props) {
		_classCallCheck(this, YXReactUIBase);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(YXReactUIBase).call(this, props));

		_this2.log = {
			log: function log() {
				var _console;

				(_console = console).log.apply(_console, ['log'].concat(Array.prototype.slice.call(arguments)));
			},
			debug: function debug() {
				var _console2;

				(_console2 = console).log.apply(_console2, ['debug'].concat(Array.prototype.slice.call(arguments)));
			},
			error: function error() {
				var _console3;

				(_console3 = console).error.apply(_console3, ['error'].concat(Array.prototype.slice.call(arguments)));
			},
			info: function info() {
				var _console4;

				(_console4 = console).info.apply(_console4, ['info'].concat(Array.prototype.slice.call(arguments)));
			}
		};
		return _this2;
	}

	_createClass(YXReactUIBase, [{
		key: 'selectkey',
		value: function selectkey(props) {
			var selectkey;
			if (!props) props = this.props;
			if (props.selectkey && props.selectkey.data) {
				selectkey = props.selectkey.data.depth.join(".");
				selectkey = selectkey + (selectkey.length == 0 ? "" : ".") + props.selectkey.data.idx;
			}
			return selectkey;
		}

		/**
   *  rs = root_style, it will only be used as compent root style,to append local style with upstyle and sys style
   */

	}, {
		key: 'rs',
		value: function rs(upstyle) {
			var style = this.style(upstyle);

			var selectkey = this.selectkey();

			if (this.props.options && this.props.options.width) {
				var value = Number(this.props.options.width);
				if (value > 0) {
					style = Object.assign({}, style, { width: value });
				}
			}
			if (this.props.options && this.props.options.height) {
				var value = Number(this.props.options.height);
				if (value > 0) {
					style = Object.assign({}, style, { height: value });
				}
			}
			if (this.props.options && this.props.options.backgroundColor) {
				var value = this.props.options.backgroundColor;
				if (value != '') {
					style = Object.assign({}, style, { backgroundColor: value });
				}
			}
			if (this.props.options && this.props.options.padding) {
				var value = this.props.options.padding;
				if (value != '') {
					if (value.indexOf(" ") < 0) {
						value = Number(value);
					}
					style = Object.assign({}, style, { padding: value });
				}
			}
			if (this.props.options && this.props.options.margin) {
				var value = this.props.options.margin;
				if (value != '') {
					if (value.indexOf(" ") < 0) {
						value = Number(value);
					}
					style = Object.assign({}, style, { margin: value });
				}
			}

			var parentType = 0;
			if (this.props.parent == null || this.props.parent.type == 'components__appbase__verticalLayout') {
				parentType = 1;
			} else if (this.props.parent.type == 'components__appbase__horizontalLayout') {
				parentType = 2;
			}
			if (parentType == 1) {
				//Vlayout
				if (this.props.options && typeof this.props.options.halign != 'undefined') {
					var value = Number(this.props.options.halign);
					if (value == 0 /*"左对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'flex-start' });
						}
					if (value == 1 /*"右对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'flex-end' });
						}
					if (value == 2 /*"居中对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'center' });
						}
				}
				if (this.props.options && typeof this.props.options.valign != 'undefined') {
					var value = Number(this.props.options.valign);
					if (value == 0 /*"上对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'flex-start' });
						}
					if (value == 1 /*"下对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'flex-end' });
						}
					if (value == 2 /*"居中对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'center' });
						}
				}
				if (this.props.options && typeof this.props.options.hflex != 'undefined') {
					var value = this.props.options.hflex;
					if (value == true || !isNaN(Number(value)) && Number(value) > 0 /*"拉升"*/) {
							style = Object.assign({}, style, { alignSelf: 'stretch' });
						}
				}
				if (this.props.options && typeof this.props.options.vflex != 'undefined') {
					var value = this.props.options.vflex;
					if (value == true /*"拉升"*/) {
							style = Object.assign({}, style, { flex: '1 0 auto' });
						} else if (!isNaN(Number(value))) {
						style = Object.assign({}, style, { flex: value + ' 0 auto' });
					} else {
						style = Object.assign({}, style, { flex: value });
					}
				}
			} else if (parentType == 2) {
				//Hlayout
				if (this.props.options && typeof this.props.options.halign != 'undefined') {
					var value = Number(this.props.options.halign);
					if (value == 0 /*"左对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'flex-start' });
						}
					if (value == 1 /*"右对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'flex-end' });
						}
					if (value == 2 /*"居中对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'center' });
						}
				}
				if (this.props.options && typeof this.props.options.valign != 'undefined') {
					var value = Number(this.props.options.valign);
					if (value == 0 /*"上对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'flex-start' });
						}
					if (value == 1 /*"下对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'flex-end' });
						}
					if (value == 2 /*"居中对齐"*/) {
							style = Object.assign({}, style, { alignSelf: 'center' });
						}
				}
				if (this.props.options && typeof this.props.options.hflex != 'undefined') {
					var value = this.props.options.hflex;
					if (value == true /*"拉升"*/) {
							style = Object.assign({}, style, { flex: '1 0 auto' });
						} else if (!isNaN(Number(value))) {
						style = Object.assign({}, style, { flex: value + ' 0 auto' });
					} else {
						style = Object.assign({}, style, { flex: value });
					}
				}
				if (this.props.options && typeof this.props.options.vflex != 'undefined') {
					var value = this.props.options.vflex;
					if (value == true || !isNaN(Number(value)) && Number(value) > 0 /*"拉升"*/) {
							style = Object.assign({}, style, { alignSelf: 'stretch' });
						}
				}
			}

			if (selectkey == this.props.yxkey) {
				style = Object.assign({}, style, { borderWidth: 1, borderStyle: 'solid', borderColor: 'red' });
			}

			return this.valiedate(style);
		}

		/*as a base style */

	}, {
		key: 'valiedate',
		value: function valiedate(style) {
			//so far only do this,later do more
			if ('borderWidth' in style && 'border' in style) {
				delete style.border;
			}

			//bugs in do know where,but we'd better check and add px in those things
			function fixPxBug(key) {
				//change "10 20" to "10px 20px"
				if (!(key in style)) return;
				if (typeof style[key] != "string") return;

				var values = style[key].split(" ");
				style[key] = values.map(function (v) {
					if (/^\d+$/.test(v)) {
						return v + "px";
					} else {
						return v;
					}
				}).join(" ");
			}

			fixPxBug("padding");
			fixPxBug("margin");

			return style;
		}
	}, {
		key: 'style',
		value: function style(upstyle) {
			var ret;
			if (this.props.style) {
				ret = Object.assign({}, upstyle, this.props.style);
			} else {
				ret = upstyle;
			}

			if (!ret) ret = {};

			if (typeof ret.flexShrink == "undefined") {
				ret = Object.assign({}, ret, { flexShrink: 0 }); //default do not allow shrink
			}

			return this.valiedate(ret);
		}
	}, {
		key: 'toast',
		value: function toast(cnt) {
			var _this3 = this;

			var endcallback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

			if (typeof this.toastElem == 'undefined') {
				this.toastElem = document.createElement('div');
				document.body.appendChild(this.toastElem);
			}
			_reactDom2.default.render(_react2.default.createElement(
				'div',
				{ style: { position: 'fixed', left: 0, right: 0, bottom: 0, top: 0, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' } },
				_react2.default.createElement(
					'div',
					{ style: { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.65)', color: '#fff', fontSize: 16, borderShadow: '0 0 1px #333', borderRadius: 6, minWidth: 230, padding: 20 } },
					cnt
				)
			), this.toastElem);
			setTimeout(function () {
				if (endcallback) {
					endcallback();
				}
				_reactDom2.default.unmountComponentAtNode(_this3.toastElem);
				_this3.toastElem = undefined;
			}.bind(this), 2000);
		}
	}, {
		key: 'cancelProgress',
		value: function cancelProgress() {
			if (window.progressElem) {
				_reactDom2.default.unmountComponentAtNode(window.progressElem);
				window.progressElem = undefined;
			}
		}
	}, {
		key: 'showProgress',
		value: function showProgress(title) {
			if (typeof window.progressElem == 'undefined') {
				window.progressElem = document.createElement('div');
				document.body.appendChild(window.progressElem);
			}
			_reactDom2.default.render(_react2.default.createElement(
				'div',
				{ style: { position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', flexDirection: 'row' } },
				_react2.default.createElement(
					'div',
					{ style: { display: 'flex', flexDirection: 'row', width: 300, height: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 10 } },
					_react2.default.createElement(
						'div',
						{ style: { display: 'flex', flexDirection: 'row', padding: 20 } },
						_react2.default.createElement('img', { style: { width: 20, height: 20 }, src: '/images/loading.gif' }),
						_react2.default.createElement(
							'span',
							{ style: { fontSize: 16, marginLeft: 10 } },
							title
						)
					)
				)
			), window.progressElem);
		}
	}, {
		key: 'showDialog',
		value: function showDialog(title, cnt, buttons, callback) {
			var _this4 = this;

			var style = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

			if (typeof this.dialogElem == 'undefined') {
				this.dialogElem = document.createElement('div');
				document.body.appendChild(this.dialogElem);
			}
			var btnopts = buttons;
			if (!buttons || buttons.length == 0) {
				btnopts = [];
			}

			var btns = btnopts.map(function (opt, idx) {
				var Button = require("../base/Button");
				if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object') {
					// opt: {
					// 	content:'确定',
					// 	theme:'success'
					// }
					return _react2.default.createElement(
						Button,
						{ style: { marginLeft: idx == 0 ? 0 : 10, marginTop: 20, padding: 6 }, theme: opt.theme ? opt.theme : 'success', key: idx, onClick: function (idx) {
								_this4.cancelDialog();
								callback(idx);
							}.bind(_this4, idx) },
						opt.content
					);
				} else {
					return _react2.default.createElement(
						Button,
						{ style: { marginLeft: idx == 0 ? 0 : 10, marginTop: 20, padding: 6 }, key: idx, onClick: function (idx) {
								_this4.cancelDialog();
								callback(idx);
							}.bind(_this4, idx) },
						opt
					);
				}
			});
			var btnui;
			if (btns.length > 0) {
				btnui = _react2.default.createElement(
					'div',
					{ style: { display: 'flex', alignSelf: 'center', flexShrink: 0, height: 32, alignItems: 'center', flexDirection: 'row', marginBottom: 30 } },
					btns
				);
			}
			document.body.style.overflow = 'hidden';
			_reactDom2.default.render(_react2.default.createElement(Dialog, { title: title, cnt: cnt, btnui: btnui, style: style, cancel: this.cancelDialog.bind(this) }), this.dialogElem);
		}
	}, {
		key: 'cancelDialog',
		value: function cancelDialog() {
			document.body.style.overflow = 'auto';
			_reactDom2.default.unmountComponentAtNode(this.dialogElem);
			this.dialogElem = undefined;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'should not directly call this'
			);
		}
	}]);

	return YXReactUIBase;
}(_react2.default.Component);

module.exports = YXReactUIBase;