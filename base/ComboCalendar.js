'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _FontIcon = require('./FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = require('../common/color');

var ComboCalendar = function (_YXReactUIBase) {
    _inherits(ComboCalendar, _YXReactUIBase);

    _createClass(ComboCalendar, null, [{
        key: 'propTypes',
        get: function get() {
            return {
                minDate: _react2.default.PropTypes.string,
                maxDate: _react2.default.PropTypes.string,
                date: _react2.default.PropTypes.string,
                onValueChange: _react2.default.PropTypes.func
            };
        }
    }, {
        key: 'defaultProps',
        get: function get() {
            return {
                date: (0, _moment2.default)().format('YYYY-MM-DD')
            };
        }
    }]);

    function ComboCalendar(props) {
        _classCallCheck(this, ComboCalendar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ComboCalendar).call(this, props));

        _this.state = {
            str: props.date
        };
        return _this;
    }

    _createClass(ComboCalendar, [{
        key: 'chooseDay',
        value: function chooseDay(dateStr) {
            this.setState({
                str: dateStr
            });
            this.cancel();
            if (this.props.onValueChange) {
                this.props.onValueChange(dateStr);
            }
        }
    }, {
        key: 'renderPopup',
        value: function renderPopup() {
            var bodyrect = document.body.getBoundingClientRect();
            var pos = _reactDom2.default.findDOMNode(this.refs.comboCanlendar).getBoundingClientRect();
            var listOriginStyle = {
                position: 'absolute',
                left: pos.left,
                top: pos.top + pos.height
            };
            var listStyle = Object.assign({}, listOriginStyle, this.props.listStyle);
            _reactDom2.default.render(_react2.default.createElement(
                'div',
                { onClick: this.cancel.bind(this), style: { position: 'absolute', left: window.pageXOffset, top: window.pageYOffset, width: bodyrect.width, height: bodyrect.height, display: 'flex', flexDirection: 'column' } },
                _react2.default.createElement(
                    'div',
                    { style: listStyle },
                    _react2.default.createElement(_Calendar2.default, { minDate: this.props.minDate, maxDate: this.props.maxDate, date: this.state.str, chooseDay: this.chooseDay.bind(this), style: { marginTop: 20 } })
                )
            ), this.valueElem);
        }
    }, {
        key: 'cancel',
        value: function cancel(e) {
            if (typeof this.valueElem == 'undefined') return;
            _reactDom2.default.unmountComponentAtNode(this.valueElem);
            this.valueElem.parentNode.removeChild(this.valueElem);
            this.valueElem = undefined;
        }
    }, {
        key: 'onFocus',
        value: function onFocus(e) {
            if (typeof this.valueElem == 'undefined') {
                this.valueElem = document.createElement('div');
                document.body.appendChild(this.valueElem);
            }
            this.renderPopup();
            e.preventDefault();
            e.stopPropagation();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.style({
                        border: '1px solid #bfbfbf',
                        width: 160,
                        height: 30,
                        flex: '1 0 auto',
                        padding: '0 10px',
                        borderRadius: 2,
                        color: '#b1b1b1',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        display: 'flex'
                    }),
                    onClick: this.onFocus.bind(this) },
                _react2.default.createElement(
                    'span',
                    { type: 'text', ref: 'comboCanlendar', style: { fontSize: 12, color: '#333' } },
                    this.state.str
                ),
                ' ',
                _react2.default.createElement(
                    _FontIcon2.default,
                    { icon: 'icon-calendar' },
                    ' '
                ),
                ' '
            );
        }
    }]);

    return ComboCalendar;
}(_uibase2.default);

module.exports = ComboCalendar;