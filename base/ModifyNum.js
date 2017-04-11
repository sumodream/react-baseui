'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = require("../common/color");

var ModifyNum = function (_YXReactUIBase) {
    _inherits(ModifyNum, _YXReactUIBase);

    _createClass(ModifyNum, null, [{
        key: 'propTypes',
        get: function get() {
            return {
                theme: _react2.default.PropTypes.string,
                value: _react2.default.PropTypes.number,
                min: _react2.default.PropTypes.number,
                max: _react2.default.PropTypes.number,
                disabled: _react2.default.PropTypes.bool,
                onValueChange: _react2.default.PropTypes.func
            };
        }
    }, {
        key: 'defaultProps',
        get: function get() {
            return {
                theme: 'primary',
                value: 5,
                min: 0,
                disabled: false
            };
        }
    }, {
        key: 'theme',
        get: function get() {
            return {
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
                default: {
                    color: color.a06
                }
            };
        }
    }]);

    function ModifyNum(props) {
        _classCallCheck(this, ModifyNum);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModifyNum).call(this, props));

        _this.state = {
            theme: ModifyNum.theme[props.theme],
            value: props.value,
            hoverIdx: -1
        };
        return _this;
    }

    _createClass(ModifyNum, [{
        key: 'onValueChange',
        value: function onValueChange(evt) {
            if (!this.props.disabled) {
                var value = Number(evt.target.value);
                if (isNaN(value)) {
                    value = 0;
                } else {
                    var min = this.props.min;
                    if (value < min) {
                        value = min;
                    }
                    if (value > this.props.max) {
                        value = this.props.max;
                    }
                }
                this.setState({
                    value: value
                });
            }
        }
    }, {
        key: 'minusNum',
        value: function minusNum() {
            if (this.state.value > this.props.min) {
                this.setState({
                    value: this.state.value - 1
                });
            }
        }
    }, {
        key: 'addNum',
        value: function addNum() {
            if (this.state.value < this.props.max || this.props.max == null) {
                this.setState({
                    value: this.state.value + 1
                });
            }
        }
    }, {
        key: 'mouseover',
        value: function mouseover(idx) {
            this.setState({
                hoverIdx: idx
            });
        }
    }, {
        key: 'mouseout',
        value: function mouseout() {
            this.setState({
                hoverIdx: -1
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.value != nextProps.value) {
                var value = nextProps.value;
                if (nextProps.min != null && nextProps.value < nextProps.min) {
                    value = nextProps.min;
                }
                if (nextProps.max != null && nextProps.value > nextProps.max) {
                    value = nextProps.max;
                }

                this.setState({
                    value: value,
                    hoverIdx: -1
                });
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (this.state.value != nextState.value) {
                if (this.props.onValueChange) {
                    this.props.onValueChange(nextState.value);
                }
                return true;
            }
            if (this.state.hoverIdx != nextState.hoverIdx) {
                return true;
            }
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var value = this.state.value;
            var styles = {
                btn: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 34,
                    height: 30,
                    minWidth: 10,
                    margin: '0 6',
                    border: '1px solid #bfbfbf',
                    boxSizing: 'border-box',
                    color: color.c09,
                    cursor: 'pointer'
                },
                input: {
                    width: 60,
                    height: 30,
                    borderRadius: 2,
                    border: '1px solid #bfbfbf',
                    color: color.c12,
                    fontSize: 13,
                    outline: 'none',
                    textAlign: 'center'
                }
            };
            return _react2.default.createElement(
                _HorizontalLayout2.default,
                { style: this.style() },
                _react2.default.createElement(
                    'div',
                    { style: Object.assign({}, styles.btn, { color: this.state.hoverIdx == 0 ? this.state.theme.color : color.c09 }), onClick: !this.props.disabled && this.minusNum.bind(this), onMouseOver: !this.props.disabled && this.mouseover.bind(this, 0), onMouseOut: this.mouseout.bind(this) },
                    _react2.default.createElement('i', { className: 'icon-min' })
                ),
                !this.props.disabled ? _react2.default.createElement('input', { type: 'text', value: value, onChange: this.onValueChange.bind(this), style: styles.input }) : _react2.default.createElement('input', { type: 'text', readonly: 'readonly', value: value, style: styles.input }),
                _react2.default.createElement(
                    'div',
                    { style: Object.assign({}, styles.btn, { color: this.state.hoverIdx == 1 ? this.state.theme.color : color.c09 }), onClick: !this.props.disabled && this.addNum.bind(this), onMouseOver: !this.props.disabled && this.mouseover.bind(this, 1), onMouseOut: this.mouseout.bind(this) },
                    _react2.default.createElement('i', { className: 'icon-add-3' })
                )
            );
        }
    }]);

    return ModifyNum;
}(_uibase2.default);

module.exports = ModifyNum;