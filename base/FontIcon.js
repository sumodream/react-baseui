'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _color = require('../common/color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FontIcon = function (_YXReactUIBase) {
    _inherits(FontIcon, _YXReactUIBase);

    _createClass(FontIcon, null, [{
        key: 'propTypes',
        get: function get() {
            return {
                icon: _react2.default.PropTypes.string,
                theme: _react2.default.PropTypes.oneOf(['primary', 'danger', 'success', 'warning', 'info', 'default', 'infoBlue', 'infoWhite', 'infoGray', 'infoBlueBlack', 'ligterWhite']),
                onClick: _react2.default.PropTypes.func
            };
        }
    }, {
        key: 'defaultProps',
        get: function get() {
            return {
                icon: 'icon-grade'
            };
        }
    }]);

    function FontIcon(props) {
        _classCallCheck(this, FontIcon);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FontIcon).call(this, props));

        if (props.theme) {
            _this.state = {
                active: false,
                theme: FontIcon.theme[props.theme]
            };
        } else {
            _this.state = {
                active: false
            };
        }
        return _this;
    }

    _createClass(FontIcon, [{
        key: 'mouseover',
        value: function mouseover() {
            this.setState({
                active: true
            });
        }
    }, {
        key: 'mouseout',
        value: function mouseout() {
            this.setState({
                active: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var fontStyle = this.style({});
            fontStyle.color = this.props.theme && this.state.theme.color ? this.state.active ? this.state.theme.hover : fontStyle.color ? fontStyle.color : this.state.theme.color : fontStyle.color ? fontStyle.color : 'inherit';
            return _react2.default.createElement('i', { style: fontStyle, onClick: this.props.onClick, className: "fontello  " + this.props.icon, onMouseOver: this.props.theme ? this.mouseover.bind(this) : '', onMouseOut: this.props.theme ? this.mouseout.bind(this) : '' });
        }
    }]);

    return FontIcon;
}(_uibase2.default);

FontIcon.theme = {
    primary: {
        color: _color2.default.b03,
        hover: _color2.default.b16
    },
    danger: {
        color: _color2.default.b08,
        hover: _color2.default.a11
    },
    success: {
        color: _color2.default.b04,
        hover: _color2.default.a13
    },
    warning: {
        color: _color2.default.b06,
        hover: _color2.default.a09
    },
    info: {
        color: _color2.default.c01,
        hover: _color2.default.b06
    },
    default: {
        color: _color2.default.a06,
        hover: _color2.default.a05
    },
    infoBlue: {
        color: _color2.default.c01,
        hover: _color2.default.a12
    },
    infoWhite: {
        color: _color2.default.c01,
        hover: _color2.default.a03
    },
    infoBlueBlack: {
        color: _color2.default.c01,
        hover: _color2.default.a12
    },
    infoGray: {
        color: _color2.default.c15,
        hover: _color2.default.a03
    },
    ligterWhite: {
        color: _color2.default.c03,
        hover: _color2.default.c01
    }

};
module.exports = FontIcon;