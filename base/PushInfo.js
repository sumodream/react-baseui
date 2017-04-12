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

var PushInfo = function (_YXReactUIBase) {
    _inherits(PushInfo, _YXReactUIBase);

    _createClass(PushInfo, null, [{
        key: 'propTypes',
        get: function get() {
            return {
                theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'default'])
            };
        }
    }, {
        key: 'defaultProps',
        get: function get() {
            return {
                theme: 'danger',
                children: '10'
            };
        }
    }]);

    function PushInfo(props) {
        _classCallCheck(this, PushInfo);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PushInfo).call(this, props));

        _this.state = {
            theme: PushInfo.theme[props.theme]
        };
        return _this;
    }

    _createClass(PushInfo, [{
        key: 'render',
        value: function render() {
            var objStyle = this.state.theme;
            var style = {
                background: objStyle.bg,
                color: objStyle.color,
                width: "24px",
                height: "16px",
                borderRadius: "8px",
                fontSize: "12px",
                fontStyle: "normal",
                lineHeight: "16px",
                textAlign: "center"
            };
            return _react2.default.createElement(
                'span',
                { style: this.style(style) },
                this.props.children
            );
        }
    }]);

    return PushInfo;
}(_uibase2.default);

PushInfo.theme = {
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
    default: {
        bg: color.c01,
        color: color.b03
    }
};
module.exports = PushInfo;