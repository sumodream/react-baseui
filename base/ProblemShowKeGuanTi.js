'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ECharts = require('./ECharts');

var _ECharts2 = _interopRequireDefault(_ECharts);

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeGuanTi = function (_YXReactUIBase) {
	_inherits(KeGuanTi, _YXReactUIBase);

	function KeGuanTi(props) {
		_classCallCheck(this, KeGuanTi);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(KeGuanTi).call(this, props));

		_this.state = {
			collapse: true,
			studentshow: false,
			selectAnswer: 0
		};
		_this.styles = {
			probBorder: {
				display: 'flex',
				alignSelf: 'stretch',
				backgroundColor: '#fff',
				flexDirection: 'column',
				border: 'thin solid #eee',
				borderRadius: 2
			},
			probTitle: {
				display: 'flex',
				paddingLeft: 30,
				height: 40,
				alignItems: 'center',
				color: '#333',
				fontSize: 14,
				backgroundColor: "#fafafa",
				borderBottom: 'thin solid #eee'
			},
			probBanner: {
				padding: '20px 30px 30px'
			},
			paperWarning: {
				fontSize: 14,
				padding: '10px 20px 0',
				color: '#6a6a6a'
			},
			toggleBtn: {
				display: 'flex',
				width: 106,
				height: 32,
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: 14,
				color: '#333',
				cursor: 'pointer',
				border: 'thin solid #e7e7e7'
			},
			showAnswer: {
				margin: '20px 30px 0',
				paddingTop: 30,
				borderTop: 'thin solid #f2f2f2',
				fontSize: 14
			},
			rightAnswer: {
				display: 'flex',
				flexDirection: 'row',
				marginBottom: 30
			},
			numAns: {
				backgroundColor: '#f2f2f2',
				padding: 10,
				border: 'thin solid #e7e7e7',
				fontSize: 12,
				borderLeft: 0,
				borderRight: 0
			},
			ansUser: {
				display: 'flex',
				flexDirection: 'row',
				padding: 10,
				flexWrap: 'wrap',
				margin: '5px 0'
			},
			rightAnswerName: {
				padding: '5px 10',
				color: '#fff',
				border: 'thin solid #e7e7e7',
				backgroundColor: '#59bde5',
				marginRight: 10,
				fontSize: 12,
				marginBottom: 5,
				borderRadius: 5,
				width: 50,
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center'
			},
			yellow: {
				color: '#F7BE38',
				fontSize: 14
			},
			blue: {
				color: '#59bde5',
				fontSize: 14
			},
			orange: {
				color: '#d2553f',
				fontSize: 14
			},
			fontBase: {
				fontSize: 12
			},
			imageContent: {
				width: '80%',
				padding: 10
			},
			answerCharts: {
				height: 200
			}
		};
		return _this;
	}

	_createClass(KeGuanTi, [{
		key: 'answerDesc',
		value: function answerDesc(answer) {
			if (answer == '-') {
				answer = "未填";
			}
			return answer;
		}
	}, {
		key: 'onChartClicked',
		value: function onChartClicked(evt) {
			var styles = this.styles;
			var selectAnswer = evt.dataIndex;
			var users = this.data.detail[selectAnswer].users.map(function (each, idx) {
				return _react2.default.createElement(
					'div',
					{ key: idx, style: styles.rightAnswerName },
					each
				);
			});
			var detail = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ style: styles.numAns },
					' ',
					_react2.default.createElement(
						'span',
						{ style: styles.yellow },
						this.data.id
					),
					'    ',
					_react2.default.createElement(
						'span',
						{ style: styles.orange },
						this.answerDesc(this.data.detail[selectAnswer].answer),
						' '
					),
					'    ',
					_react2.default.createElement(
						'span',
						{ style: styles.orange },
						this.data.detail[selectAnswer].users.length
					),
					'  人    占比  ',
					_react2.default.createElement(
						'span',
						{ style: styles.blue },
						(this.data.detail[selectAnswer].users.length * 100 / this.total).toFixed(2),
						'%'
					)
				),
				_react2.default.createElement(
					'div',
					{ style: styles.ansUser },
					users
				)
			);
			this.showDialog("单项成绩详情", detail);
			/*this.setState({
   	studentshow: true,
   	selectAnswer: evt.dataIndex
   });*/
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (!this.props.data) return null;
			this.data = this.props.data;
			//题号： string
			this.quesNum = this.props.quesNum ? this.props.quesNum : '';
			this.data.detail.sort(function (a, b) {
				return b.users.length - a.users.length;
			});
			var styles = this.styles;
			var rightNum = 0;
			this.data.detail.forEach(function (item) {
				if (JSON.stringify(item.score) == JSON.stringify(_this2.data.score)) rightNum += item.users.length;
			});
			var wrongNum = 0;
			this.data.detail.forEach(function (item) {
				if (JSON.stringify(item.score) != JSON.stringify(_this2.data.score)) wrongNum += item.users.length;
			});
			var total = rightNum + wrongNum;
			this.total = total;
			var avgScore = (rightNum * this.data.score / total).toFixed(2);
			var maxchoiceLen = 0;
			this.data.detail.forEach(function (item) {
				maxchoiceLen = item.answer.length > maxchoiceLen ? item.answer.length : maxchoiceLen;
			});
			var classRatio = rightNum / (rightNum + wrongNum);
			var detailLength = this.data.detail.length;
			var option = {
				xAxis: {
					type: 'value',
					axisTick: {
						show: false
					},
					max: total,
					splitLine: {
						show: false
					},
					axisLine: {
						show: false
					},
					axisLabel: {
						show: false
					}
				},
				yAxis: {
					type: 'category',
					data: this.data.detail.map(function (item) {
						return _this2.answerDesc(item.answer);
					}),
					splitLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLine: {
						show: false
					}
				},
				grid: {
					right: 120,
					y: 0,
					x: 20 + 20 * maxchoiceLen,
					height: 180
				},
				series: [{
					type: 'bar',
					barWidth: 20,
					data: this.data.detail.map(function (item) {
						return item.users.length;
					}),
					itemStyle: {
						borderRadius: 5,
						normal: {
							color: '#59bde5',
							label: {
								show: true,
								position: 'right',
								formatter: function (value) {
									return value.data + "人 占比" + (value.data * 100 / total).toFixed(2) + "%";
								}.bind(this),
								textStyle: {
									color: '#333'
								}
							}
						}
					}
				}]
			};
			var config = {
				event: [{
					type: 'click',
					handler: this.onChartClicked.bind(this)
				}]
			};
			return _react2.default.createElement(
				'div',
				{ style: styles.probBorder },
				_react2.default.createElement(
					'div',
					{ style: styles.probTitle },
					_react2.default.createElement(
						'span',
						null,
						this.quesNum ? _react2.default.createElement(
							'span',
							{ style: { marginRight: 20 } },
							this.quesNum
						) : '',
						'平均得分 : ',
						avgScore,
						'分 (答对',
						rightNum,
						'人/答错',
						wrongNum,
						'人/班级得分率 ',
						classRatio.toFixed(2),
						')'
					)
				),
				_react2.default.createElement(
					'div',
					{ style: styles.imageContent },
					this.data.url ? _react2.default.createElement('img', { style: { padding: 10, maxWidth: '100%', boxSizing: 'border-box' }, src: this.data.url }) : _react2.default.createElement(
						'div',
						{ style: styles.paperWarning },
						'该考试可能还没有上传原卷'
					)
				),
				this.state.collapse ? null : _react2.default.createElement(
					'div',
					{ style: styles.showAnswer },
					_react2.default.createElement(
						'div',
						{ style: styles.rightAnswer },
						_react2.default.createElement(
							'span',
							null,
							'【正确答案】 '
						),
						_react2.default.createElement(
							'span',
							null,
							this.answerDesc(this.data.answer)
						)
					),
					_react2.default.createElement(
						'div',
						{ style: styles.rightAnswer },
						_react2.default.createElement(
							'span',
							null,
							'【选择详情】 点击柱状图可查看学生名单'
						)
					),
					_react2.default.createElement(
						'div',
						{ style: { height: detailLength > 8 ? detailLength * 25 : 200, overflow: 'hidden' } },
						_react2.default.createElement(_ECharts2.default, { config: config, options: option })
					)
				),
				_react2.default.createElement(
					'div',
					{ style: styles.probBanner },
					_react2.default.createElement(
						'a',
						{ style: styles.toggleBtn, onClick: function (evt) {
								evt.preventDefault();
								_this2.setState({ collapse: !_this2.state.collapse, studentshow: false });
							}.bind(this) },
						this.state.collapse ? _react2.default.createElement(
							'span',
							null,
							'展开解析 ',
							_react2.default.createElement('span', { className: 'icon-down-open-2' })
						) : _react2.default.createElement(
							'span',
							null,
							'收起解析 ',
							_react2.default.createElement('span', { className: 'icon-up-open-2' })
						)
					)
				)
			);
		}
	}], [{
		key: 'defaultProps',
		get: function get() {
			return {
				data: { "id": "第1题", "score": 3, "schoolRate": 96.57701711491443, "answer": "B-3.0", "detail": [{ "answer": "B", "score": 3, "users": ["李嘉栋", "杜奕成", "谢志健", "冯灵馨", "黄智成", "郭兰知仪", "陈文玥", "钟郑洲", "钟仪轩", "冯筠棋", "李传伟", "邱洋", "李沁祯", "张秋雯", "李章粮", "蔡振文", "谭兴", "张茜怡", "郭兰艺", "钟郑杭", "黄文浩", "周志宇", "黄梓玮", "胡琼月", "孙屿琪", "曾文涛", "李芯卉", "夏晓蕊", "张芷扬", "李灏聪", "李锦涵", "杨军", "苏兰", "肖晗", "刘传尧", "黄新奇", "胡超越", "张舒阳", "钟浩欣", "李康平", "曾令红", "黄巧雅", "孙丽丰", "刘炯男", "曾利妍", "徐远铭", "陈辉弘", "许嘉玥", "邱博涵"] }], "url": "http://haofenshu.kssws.ks-cdn.com/file/vs/7831/1.png", "choices": ["B"] }
			};
		}
	}]);

	return KeGuanTi;
}(_uibase2.default);

module.exports = KeGuanTi;