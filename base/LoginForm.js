'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_YXReactUIBase) {
	_inherits(LoginForm, _YXReactUIBase);

	function LoginForm() {
		_classCallCheck(this, LoginForm);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginForm).apply(this, arguments));
	}

	_createClass(LoginForm, [{
		key: 'onSubmit',
		value: function onSubmit(form) {
			this.refs.form.pass.value = (0, _md2.default)(this.refs.form.pass.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_VerticalLayout2.default,
				{ style: this.style({ display: 'flex', alignItems: 'center', alignSelf: 'stretch', justifyContent: 'space-between', width: '100%', height: '100%' }) },
				_react2.default.createElement(
					_VerticalLayout2.default,
					{ style: { display: 'flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch', height: 100, backgroundColor: '#2DC3E8', width: '100%' } },
					_react2.default.createElement(_Image2.default, { src: 'https://account.yunxiao.com/static/common/images/yunxiaologo.png' })
				),
				_react2.default.createElement(
					_VerticalLayout2.default,
					{ style: { display: 'flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' } },
					_react2.default.createElement(
						'form',
						{ ref: 'form', method: 'post', onSubmit: this.onSubmit.bind(this) },
						_react2.default.createElement(
							_HorizontalLayout2.default,
							{ style: { marginBottom: 20, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' } },
							_react2.default.createElement(
								'span',
								{ style: { marginRight: 20 } },
								'用户:'
							),
							_react2.default.createElement('input', { type: 'text', name: 'account', placeholder: 'Username', style: { minWidth: 240, minHeight: 46, padding: '0px 10px', borderRadius: 5, border: '1px solid #e7e7e7', outline: 'none' } })
						),
						_react2.default.createElement(
							_HorizontalLayout2.default,
							{ style: { marginBottom: 40, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' } },
							_react2.default.createElement(
								'span',
								{ style: { marginRight: 20 } },
								'密码:'
							),
							_react2.default.createElement('input', { type: 'password', name: 'pass', placeholder: 'Password', style: { minWidth: 240, minHeight: 46, padding: '0px 10px', borderRadius: 5, border: '1px solid #e7e7e7', outline: 'none' } })
						),
						_react2.default.createElement(
							_HorizontalLayout2.default,
							{ style: { marginBottom: 20, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } },
							_react2.default.createElement('input', { type: 'submit', name: 'commit', value: '登   录', style: { minWidth: 240, minHeight: 46, padding: '0px 10px', backgroundColor: '#2DC3E8', fontSize: 16, color: '#fff', borderRadius: 5, border: '1px solid #e7e7e7', outline: 'none' } })
						)
					)
				),
				_react2.default.createElement(
					_VerticalLayout2.default,
					{ style: { display: 'flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch', marginBottom: 30 } },
					_react2.default.createElement(
						'p',
						{ style: { fontSize: 12, color: '#6a6a6a' } },
						'©2016 All Rights Reserved. '
					)
				)
			);
		}
	}]);

	return LoginForm;
}(_uibase2.default);

module.exports = LoginForm;