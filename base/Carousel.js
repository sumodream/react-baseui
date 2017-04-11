'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_YXReactUIBase) {
    _inherits(Carousel, _YXReactUIBase);

    _createClass(Carousel, null, [{
        key: 'propTypes',
        get: function get() {
            return {
                width: _react2.default.PropTypes.number,
                height: _react2.default.PropTypes.number,
                list: _react2.default.PropTypes.array,
                time: _react2.default.PropTypes.number,
                effect: _react2.default.PropTypes.oneOf(['scrollX', 'fade']),
                showDots: _react2.default.PropTypes.bool,
                autoPlay: _react2.default.PropTypes.bool,
                onChange: _react2.default.PropTypes.func
            };
        }
    }, {
        key: 'defaultProps',
        get: function get() {
            return {
                width: 500,
                height: 200,
                list: [{
                    item: _react2.default.createElement(
                        'div',
                        null,
                        'hello 1'
                    )
                }, {
                    item: _react2.default.createElement(
                        'div',
                        null,
                        'world 2'
                    )
                }, {
                    item: _react2.default.createElement(
                        'div',
                        null,
                        'nihao 3'
                    )
                }],
                effect: 'scrollX',
                time: 3000,
                showDots: true,
                autoPlay: true
            };
        }
    }]);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).call(this, props));

        _this2.timer = null;
        _this2.setInterval.bind(_this2);
        _this2.state = {
            current: 0
        };
        return _this2;
    }

    _createClass(Carousel, [{
        key: 'setInterval',
        value: function (_setInterval) {
            function setInterval() {
                return _setInterval.apply(this, arguments);
            }

            setInterval.toString = function () {
                return _setInterval.toString();
            };

            return setInterval;
        }(function () {
            var _this3 = this;

            if (this.props.autoPlay) {
                (function () {
                    var _this = _this3;
                    var conLength = _this3.props.list.length;
                    _this3.timer = setInterval(function () {
                        _this.state.current++;
                        if (_this.state.current >= conLength) {
                            _this.state.current = 0;
                        }
                        _this.switchContent(_this.state.current);
                    }, _this.props.time);
                })();
            }
        })
    }, {
        key: 'switchContent',
        value: function switchContent(idx) {
            if (this.props.effect == 'scrollX') {
                this.scrollX(idx);
            }
            if (this.props.onChange) {
                this.props.onChange(idx, this.timer);
            }
            this.setState({
                current: idx
            });
        }
    }, {
        key: 'scrollX',
        value: function scrollX(idx) {
            var _this = this;
            var conLength = this.props.list.length;
            this.wrapDom = _reactDom2.default.findDOMNode(this.refs.wrap);
            if (idx == 0) {
                idx = conLength;
                setTimeout(function () {
                    _this.wrapDom.style.transition = 'initial';
                    _this.wrapDom.style.left = 0;
                }, 700);
            } else {
                this.wrapDom.style.WebkitTransition = 'left 0.6s linear';
                this.wrapDom.style.MozTransition = 'left 0.6s linear';
                this.wrapDom.style.MsTransition = 'left 0.6s linear';
                this.wrapDom.style.OTransition = 'left 0.6s linear';
                this.wrapDom.style.transition = 'left 0.6s linear';
            }
            this.wrapDom.style.left = 0 - this.props.width * idx;
        }
    }, {
        key: 'dotClick',
        value: function dotClick(idx) {
            if (this.state.current != idx) {
                this.switchContent(idx);
            }
        }
    }, {
        key: 'conMouseEnter',
        value: function conMouseEnter(e) {
            e.stopPropagation();
            clearInterval(this.timer);
        }
    }, {
        key: 'conMouseLeave',
        value: function conMouseLeave(e) {
            e.stopPropagation();
            this.setInterval();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setInterval();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _this = this;
            var conLength = this.props.list.length;
            var styles = {
                wrap: {
                    position: 'relative',
                    overflow: 'hidden',
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: '#b1b1b1'
                },
                contents: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: this.props.effect == 'scrollX' ? this.props.width * (conLength + 1) : '100%',
                    height: '100%',
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    WebkitTransform: 'translateZ(0)',
                    MozTransform: 'translateZ(0)',
                    MsTransform: 'translateZ(0)',
                    OTransform: 'translateZ(0)',
                    transform: 'translateZ(0)',
                    WebkitTransition: 'left 0.6s linear',
                    MozTransition: 'left 0.6s linear',
                    MsTransition: 'left 0.6s linear',
                    OTransition: 'left 0.6s linear',
                    transition: 'left 0.6s linear'
                },
                dots: {
                    margin: 0,
                    padding: 0,
                    position: 'absolute',
                    left: '50%',
                    bottom: 20,
                    marginLeft: -(conLength * 14 - 6) / 2,
                    listStyle: 'none'
                }
            };

            var contents = this.props.list.map(function (page, idx) {
                var isCurrent = idx == _this.state.current;
                var style = {};
                if (_this.props.effect == 'fade') {
                    style.content = {
                        position: 'absolute',
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        opacity: isCurrent ? 1 : 0,
                        WebkitTransform: 'translateZ(0)',
                        MozTransform: 'translateZ(0)',
                        MsTransform: 'translateZ(0)',
                        OTransform: 'translateZ(0)',
                        transform: 'translateZ(0)',
                        WebkitTransition: 'opacity 0.6s linear',
                        MozTransition: 'opacity 0.6s linear',
                        OTransition: 'opacity 0.6s linear',
                        transition: 'opacity 0.6s linear'
                    };
                } else if (_this.props.effect == 'scrollX') {
                    style.content = {
                        position: 'relative',
                        float: 'left',
                        display: 'flex',
                        width: _this.props.width,
                        height: _this.props.height
                    };
                }
                return _react2.default.createElement(
                    'li',
                    { style: style && style.content, key: idx },
                    page.item
                );
            });

            var dots = this.props.showDots && this.props.list.map(function (page, idx) {
                var isCurrent = idx == _this.state.current;
                var style = {
                    li: {
                        display: 'inline-block',
                        width: 8,
                        height: 8,
                        backgroundColor: '#fff',
                        opacity: isCurrent ? 1 : .5,
                        borderRadius: '50%',
                        cursor: 'pointer',
                        marginRight: idx == conLength - 1 ? 0 : 6
                    }
                };
                return _react2.default.createElement('li', { style: style.li, key: 'dot' + idx, onClick: _this4.dotClick.bind(_this4, idx) });
            });

            return _react2.default.createElement(
                'div',
                { style: this.style(styles.wrap), onMouseEnter: this.conMouseEnter.bind(this), onMouseLeave: this.conMouseLeave.bind(this) },
                _react2.default.createElement(
                    'ul',
                    { ref: 'wrap', style: styles.contents },
                    contents,
                    contents[0]
                ),
                this.props.showDots ? _react2.default.createElement(
                    'ul',
                    { style: styles.dots },
                    dots
                ) : ''
            );
        }
    }]);

    return Carousel;
}(_uibase2.default);

module.exports = Carousel;