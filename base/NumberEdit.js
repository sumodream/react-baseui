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

var NumberEdit = function (_YXReactUIBase) {
	_inherits(NumberEdit, _YXReactUIBase);

	function NumberEdit() {
		_classCallCheck(this, NumberEdit);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(NumberEdit).apply(this, arguments));
	}

	_createClass(NumberEdit, [{
		key: 'onValueChange',
		value: function onValueChange(evt) {
			var value = evt.target.value;
			//TODO: check value is valid number
			if (this.props.onValueChange) {
				this.props.onValueChange(value);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('input', { type: 'text', style: this.style({ width: 100, height: 34, fontSize: 12, flex: '1 0 auto', paddingLeft: 12 }), onChange: this.onValueChange.bind(this), value: this.props.value, defaultValue: this.props.default });
		}
	}]);

	return NumberEdit;
}(_uibase2.default);

module.exports = NumberEdit;