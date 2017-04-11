'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ECharts = require('./ECharts');

var _ECharts2 = _interopRequireDefault(_ECharts);

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _SVGEditor = require('./SVGEditor');

var _SVGEditor2 = _interopRequireDefault(_SVGEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DaTiKaWithRemark = function (_YXReactUIBase) {
	_inherits(DaTiKaWithRemark, _YXReactUIBase);

	function DaTiKaWithRemark() {
		_classCallCheck(this, DaTiKaWithRemark);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(DaTiKaWithRemark).apply(this, arguments));
	}

	_createClass(DaTiKaWithRemark, [{
		key: 'render',
		value: function render() {
			var detail = this.props.data;
			var remarks = detail.remark ? detail.remark : [];
			var elements = remarks.map(function (item) {
				var src = '/images/good.png';
				switch (item.type) {
					case 2:
						src = "/images/rightTag.png";
						break;
					case 3:
						src = "/images/wrongTag.png";
						break;
					case 4:
						src = "/images/hrightTag.png";
						break;
				}
				return { type: '图片', x: item.x, y: item.y, src: src };
			});
			return _react2.default.createElement(_SVGEditor2.default, { key: new Date().getTime(), width: 800, elements: elements, showShapes: false, showToolbar: false, editimage: this.props.data.answer });
		}
	}]);

	return DaTiKaWithRemark;
}(_uibase2.default);

var ShowZhuGuanTiAnswer = function (_YXReactUIBase2) {
	_inherits(ShowZhuGuanTiAnswer, _YXReactUIBase2);

	function ShowZhuGuanTiAnswer(props) {
		_classCallCheck(this, ShowZhuGuanTiAnswer);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ShowZhuGuanTiAnswer).call(this, props));

		_this2.state = { selectDetail: null };
		return _this2;
	}

	_createClass(ShowZhuGuanTiAnswer, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			if (this.state.selectDetail) {
				var detail = this.state.selectDetail;
				console.log(detail.remark, detail.remark2);
			}
			var styles = this.props.styles;
			var data = this.props.data;
			var users = data.details.map(function (each, idx) {
				return _react2.default.createElement(
					'a',
					{ onClick: function () {
							_this3.setState({ selectDetail: data.details[idx] });
						}.bind(_this3, idx), key: idx },
					_react2.default.createElement(
						'div',
						{ style: each === _this3.state.selectDetail ? styles.activeAnswerName : styles.rightAnswerName },
						_react2.default.createElement(
							'span',
							null,
							each.users.join("，")
						),
						_react2.default.createElement(
							'span',
							null,
							'(',
							each.score,
							'分)'
						)
					)
				);
			});
			var detail = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ style: styles.numAns },
					_react2.default.createElement(
						'span',
						{ style: styles.fontBase },
						'   ',
						_react2.default.createElement(
							'span',
							{ style: styles.yellow },
							this.props.id
						),
						'   '
					),
					_react2.default.createElement(
						'span',
						{ style: styles.fontBase },
						'   ',
						data.desc,
						'：'
					),
					_react2.default.createElement(
						'span',
						{ style: styles.orange },
						data.details.length,
						'人'
					),
					_react2.default.createElement(
						'span',
						{ style: styles.fontBase },
						'   占比：',
						_react2.default.createElement(
							'span',
							{ style: styles.blue },
							(data.details.length * 100 / this.props.total).toFixed(2),
							'%'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ style: styles.ansUser },
					users
				),
				this.state.selectDetail ? _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(DaTiKaWithRemark, { data: this.state.selectDetail })
				) : null
			);
			return detail;
		}
	}]);

	return ShowZhuGuanTiAnswer;
}(_uibase2.default);

module.exports = ShowZhuGuanTiAnswer;