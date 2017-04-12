'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import color from '../common/color'

var Textarea = function (_YXReactUIBase) {
	_inherits(Textarea, _YXReactUIBase);

	_createClass(Textarea, [{
		key: 'onFocus',
		value: function onFocus(evt) {
			this.setState({
				active: true
			});
			if (this.props.onFocus) {
				this.props.onFocus(evt);
			}
		}
	}, {
		key: 'onBlur',
		value: function onBlur(evt) {
			this.setState({
				active: false
			});
			if (this.props.onBlur) {
				this.props.onBlur(evt);
			}
		}
	}, {
		key: 'onInputKeyDown',
		value: function onInputKeyDown(evt) {
			if (this.props.onKeyDown) {
				this.props.onKeyDown(evt);
			}
		}
	}, {
		key: 'onValueChange',
		value: function onValueChange(evt) {
			if (this.props.onValueChange) {
				this.props.onValueChange(evt.target.value);
			}
		}
	}], [{
		key: 'propTypes',
		get: function get() {
			return {
				theme: _react2.default.PropTypes.string
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				theme: 'primary'
			};
		}
	}]);

	function Textarea(props) {
		_classCallCheck(this, Textarea);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Textarea).call(this, props));

		_this.state = {
			active: false
		};
		return _this;
	}

	_createClass(Textarea, [{
		key: 'render',
		value: function render() {
			var styles = {
				width: 330,
				height: 150,
				boxSizing: 'border-box',
				backgroundColor: '#fff',
				fontSize: 14,
				padding: 12,
				border: 'thin solid',
				borderColor: this.state.active ? Textarea.theme[this.props.theme].border : '#b1b1b1',
				borderRadius: 2,
				lineHeight: 1.5,
				outline: 'none',
				textAlign: 'justify',
				color: '#000'
			};
			return _react2.default.createElement('textarea', { type: 'text', placeholder: this.props.placeholder, rows: this.props.rows, cols: this.props.cols, style: this.style(styles), onKeyDown: this.onInputKeyDown.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onChange: this.onValueChange.bind(this), value: this.props.value });
		}
	}]);

	return Textarea;
}(_uibase2.default);

Textarea.theme = {
	primary: {
		border: color.b03
	},
	danger: {
		border: color.b08
	},
	success: {
		border: color.b04
	},
	warning: {
		border: color.b06
	},
	info: {
		border: color.c03
	},
	default: {
		border: color.a06
	},
	infoBlack: {
		border: color.c01
	},
	infoWhite: {
		border: color.c13
	},
	infoGray: {
		border: color.c15
	},
	disabled: {
		border: color.c03
	}
};
module.exports = Textarea;