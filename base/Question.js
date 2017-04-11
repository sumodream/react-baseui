'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

var _FontIcon = require('./FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Question = function (_YXReactUIBase) {
	_inherits(Question, _YXReactUIBase);

	_createClass(Question, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				quesNum: _react2.default.PropTypes.number, //题目题号传入
				data: _react2.default.PropTypes.object, //题目接口数据
				options: _react2.default.PropTypes.object //组件配置条件
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				quesNum: 1,
				data: {
					questionObj: {
						comment: "本题考查勾股定理及勾股定理的逆定理的应用．解题关键是得出中线${AD}$是${BC}$上的高线．",
						refer_exampapers: [{
							region: "",
							id: 4003135487,
							name: "《第18章 勾股定理》2010年单元综合测试（1）",
							year: 2010
						}, {
							region: "江西",
							id: 3957063679,
							name: "2009-2010学年江西省吉安市朝宗实验学校八年级（下）期中数学试卷",
							year: 2010
						}, {
							region: "",
							id: 3987275775,
							name: "《第18章 勾股定理》期末复习水平测试（A）",
							year: 0
						}],
						blocks: {
							types: ["选择题"],
							explanations: ["根据勾股定理的逆定理可知${BC}$上的中线${AD}$同时是${BC}$上的高线，根据勾股定理求出${AC}$的长，从而判断${\triangle ABC}$的形状．"],
							solutions: ["解：∵${AD}$是${BC}$上的中线，${AB= 17cm}$，${BC= 30cm}$，${AD= 8cm}$，<br />∴${BD= CD= \dfrac{1}{2}BC= 15}$，<br />∴${15^{2}+ 8^{2}= 17^{2}}$，故是直角三角形．<br />∴${AC= \sqrt{15^{2}+ 8^{2}}= 17}$．<br />∵${17^{2}+ 17^{2}\neq 30^{2}}$，<br />∴${\triangle ABC}$为等腰三角形．<br />故选${B}$．"],
							answers: ["B"],
							stems: [{
								options: {
									A: "直角三角形",
									C: "等腰直角三角形",
									B: "等腰三角形",
									D: "等边三角形"
								},
								stem: "已知${\triangle ABC}$中，${AB= 17cm}$，${BC= 30cm}$，${BC}$上的中线${AD= 8cm}$，则${\triangle ABC}$为（　　）"
							}]
						},
						description: "",
						type: "选择题",
						period: "初中",
						knowledges: [{
							chance: 0.0272,
							score: 0.14,
							id: 2004746239,
							name: "勾股定理的逆定理"
						}],
						difficulty: 3,
						refer_times: 3,
						quality: 8,
						id: 426110207,
						subject: "数学"
					},
					submissionObj: [{
						type: "choice",
						value: "B"
					}],
					score: 1
				},
				options: {
					fold: true, // 是否显示查看解析按钮
					showRefer: true, //是否显示年份与省份
					showAnswer: true, //是否显示【解答】
					showExplan: true, //是否显示【解析】
					showKnowledge: false, //是否显示【考点】
					showDifficulty: false, //是否显示【难度】
					showSubmission: true //是否显示【学生答案】
				}
			};
		}
	}]);

	function Question(props) {
		_classCallCheck(this, Question);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Question).call(this, props));

		_this.options = Object.assign({}, {
			fold: true, // 是否显示查看解析按钮
			showRefer: true, //是否显示年份与省份
			showAnswer: true, //是否显示【解答】
			showExplan: true, //是否显示【解析】
			showKnowledge: false, //是否显示【考点】
			showDifficulty: false, //是否显示【难度】
			showSubmission: false //是否显示【学生答案】
		}, props.options);
		_this.state = {
			toggleShow: false
		};
		return _this;
	}

	_createClass(Question, [{
		key: 'createMarkup',
		value: function createMarkup(value) {
			return { __html: value };
		}
	}, {
		key: 'toggleShowMark',
		value: function toggleShowMark() {
			this.setState({
				toggleShow: !this.state.toggleShow
			});
			if (typeof window != 'undefined') {
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
				MathJax.Hub.Configured();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var data = this.props.data.questionObj;
			if (typeof window != 'undefined') {
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
				MathJax.Hub.Configured();
			}
			var styles = {
				button: {
					display: 'flex',
					width: 110,
					height: 30,
					marginBottom: 10,
					marginLeft: 20,
					alignItems: 'center',
					justifyContent: 'center',
					border: 'thin solid #e7e7e7',
					boxSizing: 'border-box',
					fontSize: 14,
					color: '#333',
					cursor: 'pointer'
				},
				contentWrap: {
					width: '100%',
					marginLeft: 20,
					marginRight: 20,
					fontSize: 14,
					borderTop: 'thin solid #f2f2f2',
					boxSizing: 'border-box'
				},
				title: {
					fontSize: 15,
					margin: '30px 0 20px -8px'
				}
			};
			var listWrapper = function listWrapper(title, content) {
				return _react2.default.createElement(
					_VerticalLayout2.default,
					{ style: styles.contentWrap },
					_react2.default.createElement(
						'h4',
						{ style: styles.title },
						'【',
						title,
						'】'
					),
					_react2.default.createElement(
						'div',
						{ style: { width: '100%', paddingBottom: 30, boxSizing: 'border-box' } },
						content
					)
				);
			};
			//问题描述
			var questionDes = this.props.quesNum ? this.props.quesNum + '.' : '';
			questionDes += this.options.showRefer && data.refer_exampapers && data.refer_exampapers.length > 0 ? '<span style=\"display:inline-block;color:#1daef8;margin-right:5px;margin-left:3px;\">(' + data.refer_exampapers[0].year + '.' + data.refer_exampapers[0].region + ')</span>' : '';
			questionDes += data.description ? data.description : '';
			if (data.type == '选择题') {
				//选择题
				var dataQues = function () {
					var options = '';
					data.blocks.stems.forEach(function (item) {
						questionDes += item.stem;
						Object.keys(item.options).sort(function (a, b) {
							return a > b ? 1 : a == b ? 0 : -1;
						}).forEach(function (key) {
							options += '<div style=\"display:inline-block;margin:20px 20px 0 0;\">' + key + '.' + item.options[key] + '</div>';
						});
					});
					return _react2.default.createElement(
						_VerticalLayout2.default,
						{ style: { paddingBottom: 30 } },
						_react2.default.createElement('div', { style: { paddingLeft: 20, fontSize: 14, color: '#333', lineHeight: 2 }, dangerouslySetInnerHTML: _this2.createMarkup(questionDes) }),
						_react2.default.createElement(_HorizontalLayout2.default, { style: { paddingLeft: 20, fontSize: 14, color: '#333', flexWrap: 'wrap', justifyContent: 'space-between' }, dangerouslySetInnerHTML: _this2.createMarkup(options) })
					);
				}();
				var studentSubmission = '';
			} else {
				//解答题或其它题目
				var dataQues = function () {
					data.blocks.stems.forEach(function (item) {
						questionDes += '<div>' + item.stem + '</div>';
					});
					return _react2.default.createElement(
						_VerticalLayout2.default,
						null,
						_react2.default.createElement('div', { style: { paddingLeft: 20, fontSize: 14, color: '#333', lineHeight: 2 }, dangerouslySetInnerHTML: _this2.createMarkup(questionDes) })
					);
				}();
				//学生答案
				var submission = this.props.data.submissionObj;
				var studentSubmission = function () {
					if (_this2.options.showSubmission && submission) {
						var content = submission.map(function (sub, idx) {
							var subContent = '';
							if (sub.type == 'image') {
								subContent = _react2.default.createElement('img', { style: { maxWidth: '100%', width: '100%' }, src: sub.value, alt: '学生的回答' });
							} else {
								subContent = _react2.default.createElement(
									'span',
									{ style: { lineHeight: 1.5, wordWrap: 'break-word', boxSizing: 'border-box' } },
									sub.value
								);
							}
							return _react2.default.createElement(
								'div',
								{ key: idx, style: { width: '100%' } },
								subContent
							);
						});
						return listWrapper('学生的回答', content);
					} else {
						return '';
					}
				}();
			}
			//解答
			var answers = function () {
				if (_this2.options.showAnswer && data.blocks.solutions && data.blocks.solutions.length) {
					var content = data.blocks.solutions.map(function (solution, idx) {
						return _react2.default.createElement('span', { key: idx, style: { display: 'block', width: '100%', lineHeight: 1.5, boxSizing: 'border-box' }, dangerouslySetInnerHTML: _this2.createMarkup(solution) });
					});
					return listWrapper('解答', content);
				} else {
					return '';
				}
			}();
			//解析
			var explanations = function () {
				if (_this2.options.showExplan && data.blocks.explanations && data.blocks.explanations.length) {
					var content = data.blocks.explanations.map(function (solution, idx) {
						return _react2.default.createElement('span', { key: idx, style: { display: 'block', width: '100%', boxSizing: 'border-box' }, dangerouslySetInnerHTML: _this2.createMarkup(solution) });
					});
					return listWrapper('解析', content);
				} else {
					return '';
				}
			}();
			//考点
			var knowledges = function () {
				if (_this2.options.showKnowledge && data.knowledges && data.knowledges.length) {
					var content = data.knowledges.map(function (item, idx) {
						return _react2.default.createElement(
							_Link2.default,
							{ key: idx, href: 'http://hfs.yunxiao.com/src/gotiku/html/knowledge.html?knowledge_id=' + item.id, target: '_blank', style: { fontSize: 14, marginRight: 20 }, theme: 'warning' },
							item.name
						);
					});
					return listWrapper('考点', _react2.default.createElement(
						_HorizontalLayout2.default,
						{ style: { width: '100%' } },
						content
					));
				} else {
					return '';
				}
			}();
			//难度
			var difficulty = function () {
				if (_this2.options.showDifficulty) {
					var starArr = [];
					var diffNum = data.difficulty;
					for (var i = 1; i <= 5; i++) {
						if (i <= diffNum) {
							starArr.push(1);
						} else {
							starArr.push(0);
						}
					}
					var diffStar = starArr.map(function (item, idx) {
						if (item) {
							return _react2.default.createElement(_FontIcon2.default, { icon: 'icon-star', style: { fontSize: 12, color: '#f7be38', marginRight: 3 } });
						} else {
							return _react2.default.createElement(_FontIcon2.default, { icon: 'icon-star', style: { fontSize: 12, color: '#eeeeee', marginRight: 3 } });
						}
					});
					var content = _react2.default.createElement(
						_HorizontalLayout2.default,
						null,
						diffStar
					);
					return listWrapper('难度', content);
				} else {
					return '';
				}
			}();
			return _react2.default.createElement(
				_VerticalLayout2.default,
				{ style: this.style({ alignItems: 'stretch' }) },
				dataQues,
				this.options.fold ? this.state.toggleShow ? _react2.default.createElement(
					_VerticalLayout2.default,
					null,
					studentSubmission,
					answers,
					explanations,
					knowledges,
					difficulty,
					_react2.default.createElement(
						'div',
						{ style: styles.button, onClick: this.toggleShowMark.bind(this) },
						'收起解析',
						_react2.default.createElement(_FontIcon2.default, { style: { color: '#b6bac3', marginLeft: 8 }, icon: 'icon-up-open-2' })
					)
				) : _react2.default.createElement(
					'div',
					{ style: styles.button, onClick: this.toggleShowMark.bind(this) },
					'查看解析',
					_react2.default.createElement(_FontIcon2.default, { style: { color: '#b6bac3', marginLeft: 8 }, icon: 'icon-down-open-2' })
				) : ''
			);
		}
	}]);

	return Question;
}(_uibase2.default);

module.exports = Question;