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

var Favicon = function (_YXReactUIBase) {
	_inherits(Favicon, _YXReactUIBase);

	function Favicon() {
		_classCallCheck(this, Favicon);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Favicon).apply(this, arguments));
	}

	_createClass(Favicon, [{
		key: 'render',
		value: function render() {
			var styles = {
				divstyle: {
					display: 'flex',
					justifyContent: 'center',
					alignItem: 'center',
					width: this.props.size,
					height: this.props.size,
					borderRadius: '50%',
					overflow: 'hidden'
				},
				imgstyle: {
					width: this.props.size,
					minHeight: this.props.size
				}
			};

			return _react2.default.createElement(
				'div',
				{ style: this.style(styles.divstyle) },
				_react2.default.createElement('img', { style: styles.imgstyle, src: this.props.src })
			);
		}
	}], [{
		key: 'propTypes',
		get: function get() {
			return {
				src: _react2.default.PropTypes.string,
				size: _react2.default.PropTypes.number
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				src: '/images/icon-face.png',
				size: 40
			};
		}
	}]);

	return Favicon;
}(_uibase2.default);

module.exports = Favicon;