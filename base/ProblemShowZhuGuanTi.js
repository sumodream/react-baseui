'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ECharts = require('./ECharts');

var _ECharts2 = _interopRequireDefault(_ECharts);

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _ProblemZhuGuanTiShowGroup = require('./ProblemZhuGuanTiShowGroup');

var _ProblemZhuGuanTiShowGroup2 = _interopRequireDefault(_ProblemZhuGuanTiShowGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZhuGuanTi = function (_YXReactUIBase) {
	_inherits(ZhuGuanTi, _YXReactUIBase);

	function ZhuGuanTi(props) {
		_classCallCheck(this, ZhuGuanTi);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ZhuGuanTi).call(this, props));

		_this.state = {
			collapse: true,
			studentshow: false,
			selectAnswer: 0,
			studentAnswerShow: false,
			selectDetail: null
		};
		_this.excellentIdx = -1;
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
				margin: '5px 0',
				cursor: 'pointer'
			},
			activeAnswerName: {
				padding: '5px 10px',
				color: '#fff',
				border: 'thin solid #e7e7e7',
				backgroundColor: 'blue',
				marginRight: 10,
				fontSize: 12,
				marginBottom: 5,
				borderRadius: 5,
				alignItems: 'center',
				justifyContent: 'center',
				display: 'flex',
				width: 80,
				textAlign: 'center'
			},
			rightAnswerName: {
				padding: '5px 10px',
				color: '#fff',
				border: 'thin solid #e7e7e7',
				backgroundColor: '#59bde5',
				marginRight: 10,
				fontSize: 12,
				marginBottom: 5,
				borderRadius: 5,
				width: 80,
				textAlign: 'center',
				cursor: 'pointer'
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
				height: 180,
				overflow: 'hidden'
			}
		};
		return _this;
	}

	_createClass(ZhuGuanTi, [{
		key: 'showAnswer',
		value: function showAnswer(detail) {
			var detail = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('img', { style: { width: 800 }, src: detail.answer })
			);
			this.showDialog("单个主观题答案", detail);
		}
	}, {
		key: 'onChartClicked',
		value: function onChartClicked(evt) {
			var styles = this.styles;
			var selectAnswer = evt.dataIndex;
			var total = this.data.detail.length;
			var detail = _react2.default.createElement(_ProblemZhuGuanTiShowGroup2.default, { data: this.renderGroup[selectAnswer], styles: this.styles, id: this.data.id, total: total });
			this.showDialog("单项成绩详情", detail);
			/*this.setState({
   	studentshow: true,
   	selectAnswer: evt.dataIndex
   });*/
		}
	}, {
		key: 'nextExcellect',
		value: function nextExcellect(evt) {
			var next = (this.excellentIdx + 1) % this.data.xb.length;
			var styles = this.styles;
			this.excellentIdx = next;
			var detail = _react2.default.createElement(
				'div',
				{ style: { width: 900 } },
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'span',
						{ style: styles.fontBase },
						'   ',
						_react2.default.createElement(
							'span',
							{ style: styles.yellow },
							this.data.id
						),
						'   '
					),
					_react2.default.createElement(
						'span',
						{ style: styles.fontBase },
						'优秀答案'
					),
					_react2.default.createElement('img', { style: { width: '100%', padding: '10px 10px' }, src: this.data.xb[this.excellentIdx] })
				)
			);
			this.showDialog("学霸答案", detail, ['换一个看看'], this.nextExcellect.bind(this));
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (!this.props.data) return null;
			this.data = this.props.data;
			//题号： string
			this.quesNum = this.props.quesNum ? this.props.quesNum : '';
			var styles = this.styles;
			var renderGroup = ['优秀', '良好', '一般'].map(function (name, idx) {
				return {
					desc: name,
					details: _this2.data.detail.filter(function (item) {
						if (idx == 0) return item.score >= _this2.data.score * 0.8;
						if (idx == 1) return item.score < _this2.data.score * 0.8 && item.score >= _this2.data.score * 0.6;
						return item.score < _this2.data.score * 0.6;
					})
				};
			}).sort(function (a, b) {
				return b.details.length - a.details.length;
			});
			this.renderGroup = renderGroup;
			var totalscore = 0;
			var total = this.data.detail.length;
			var rightNum = 0;
			var wrongNum = 0;
			this.data.detail.forEach(function (item) {
				totalscore += item.score;
				if (item.score == _this2.data.score) {
					rightNum += 1;
				} else {
					wrongNum += 1;
				}
			});
			var avgScore = (totalscore / total).toFixed(2);
			var classRatio = totalscore * 100 / (total * this.data.score);
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
					data: renderGroup.map(function (item) {
						return item.desc;
					}),
					axisTick: {
						show: false
					},
					axisLine: {
						show: false
					},
					splitLine: {
						show: false
					}
				},
				grid: {
					right: 120,
					y: 20,
					height: 120
				},
				series: [{
					type: 'bar',
					barWidth: 20,
					data: renderGroup.map(function (item) {
						return item.details.length;
					}),
					itemStyle: {
						borderRadius: 10,
						normal: {
							color: '#59bde5',
							label: {
								show: true,
								position: 'right',
								formatter: function (value) {
									return value.data + "人 占比" + (value.data * 100 / total).toFixed(2) + "%";
								}.bind(this),
								textStyle: {
									color: 'black'
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
							'【优秀答案】'
						),
						_react2.default.createElement(
							'a',
							{ style: { marginLeft: 10, color: '#59bde5', fontSize: 14 }, onClick: this.nextExcellect.bind(this) },
							_react2.default.createElement(
								'span',
								{ style: { cursor: 'pointer' } },
								'查看优秀答案'
							)
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
						{ style: styles.answerCharts },
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
				data: { "id": "第21题", "score": 10, "schoolRate": 70.56234718826406, "detail": [{ "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384113/1.png", "score": 9, "users": ["李嘉栋"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384104/1.png", "score": 10, "users": ["杜奕成"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384117/1.png", "score": 10, "users": ["谢志健"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384114/1.png", "score": 10, "users": ["冯灵馨"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384106/1.png", "score": 10, "users": ["黄智成"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384105/1.png", "score": 10, "users": ["郭兰知仪"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384109/1.png", "score": 10, "users": ["陈文玥"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384127/1.png", "score": 9, "users": ["钟郑洲"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384124/1.png", "score": 9, "users": ["钟仪轩"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384108/1.png", "score": 10, "users": ["冯筠棋"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384122/1.png", "score": 9, "users": ["李传伟"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384130/1.png", "score": 10, "users": ["邱洋"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384153/1.png", "score": 10, "users": ["李沁祯"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384143/1.png", "score": 9, "users": ["张秋雯"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384128/1.png", "score": 10, "users": ["李章粮"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384126/1.png", "score": 8, "users": ["蔡振文"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384107/1.png", "score": 10, "users": ["谭兴"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384121/1.png", "score": 10, "users": ["张茜怡"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384118/1.png", "score": 10, "users": ["郭兰艺"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384129/1.png", "score": 10, "users": ["钟郑杭"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384151/1.png", "score": 8, "users": ["黄文浩"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384110/1.png", "score": 10, "users": ["周志宇"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384141/1.png", "score": 10, "users": ["黄梓玮"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384138/1.png", "score": 8, "users": ["胡琼月"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384135/1.png", "score": 10, "users": ["孙屿琪"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384134/1.png", "score": 10, "users": ["曾文涛"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384123/1.png", "score": 10, "users": ["李芯卉"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384145/1.png", "score": 10, "users": ["夏晓蕊"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384111/1.png", "score": 9, "users": ["张芷扬"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384131/1.png", "score": 10, "users": ["李灏聪"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384119/1.png", "score": 10, "users": ["李锦涵"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384142/1.png", "score": 10, "users": ["杨军"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384133/1.png", "score": 9, "users": ["苏兰"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384136/1.png", "score": 10, "users": ["肖晗"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384152/1.png", "score": 8, "users": ["刘传尧"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384115/1.png", "score": 9, "users": ["黄新奇"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384139/1.png", "score": 10, "users": ["胡超越"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384132/1.png", "score": 10, "users": ["张舒阳"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384112/1.png", "score": 9, "users": ["钟浩欣"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384125/1.png", "score": 7, "users": ["李康平"],
						remark: [{
							type: 3,
							x: 1087,
							y: 395
						}],
						remark2: []

					}, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384149/1.png", "score": 7, "users": ["曾令红"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384144/1.png", "score": 8, "users": ["黄巧雅"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384120/1.png", "score": 8, "users": ["孙丽丰"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384137/1.png", "score": 10, "users": ["刘炯男"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384148/1.png", "score": 7, "users": ["曾利妍"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384140/1.png", "score": 6, "users": ["徐远铭"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384146/1.png", "score": 8, "users": ["陈辉弘"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384150/1.png", "score": 7, "users": ["许嘉玥"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384147/1.png", "score": 10, "users": ["邱博涵"] }], "url": "http://haofenshu.kssws.ks-cdn.com/file/vs/7831/21.png", "xb": ["http://haofenshu.kssws.ks-cdn.com/file/s/13720/384114/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384337/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384105/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384109/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384155/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384351/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384108/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384130/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384153/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384128/1.png"] }
			};
		}
	}]);

	return ZhuGuanTi;
}(_uibase2.default);

module.exports = ZhuGuanTi;