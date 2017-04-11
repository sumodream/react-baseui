'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment2 = require('moment');

var _moment3 = _interopRequireDefault(_moment2);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

var _FontIcon = require('./FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var color = require('../common/color');

var Calendar = function (_YXReactUIBase) {
	_inherits(Calendar, _YXReactUIBase);

	_createClass(Calendar, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				date: _react2.default.PropTypes.string,
				minDate: _react2.default.PropTypes.string,
				maxDate: _react2.default.PropTypes.string,
				chooseDay: _react2.default.PropTypes.func
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				date: (0, _moment3.default)().format('YYYY-MM-DD')
			};
		}
	}]);

	function Calendar(props) {
		_classCallCheck(this, Calendar);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Calendar).call(this, props));

		_this.state = {
			toDay: {
				yyyy: '',
				mm: '',
				dd: '',
				ymd: '',
				md: ''
			},
			monthEn: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
			weeksArray: []
		};
		return _this;
	}

	_createClass(Calendar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.getNowDate(this.props.date);
			this.createMonthArray();
		}
	}, {
		key: 'getNowDate',
		value: function getNowDate(dateStr) {
			var toDay = this.state.toDay;
			var year = (0, _moment3.default)(dateStr).year();
			var month = (0, _moment3.default)(dateStr).month();
			// the day of the month
			var date = (0, _moment3.default)(dateStr).date();
			toDay.yyyy = year;
			toDay.mm = month;
			toDay.dd = date;
			toDay.ymd = (0, _moment3.default)(dateStr).format('YYYY-MM-DD');
			toDay.md = (0, _moment3.default)(dateStr).format('MM-DD');
			toDay.mmEn = this.state.monthEn[month];
			this.setState({
				toDay: toDay
			});
		}
	}, {
		key: 'createMonthArray',
		value: function createMonthArray(year, month) {
			var weekArray = [];
			var weeksArray = [];
			var _moment = new _moment3.default();
			var toDay = this.state.toDay;
			var _year = year ? year : toDay.yyyy;
			var _month = month ? month : toDay.mm;
			_moment.set({
				'year': _year,
				'month': _month,
				'date': 1
			});
			var dayInfo = {};
			// 获得月的第一天是一周的第几天
			var dayOfWeek = _moment.day();
			for (var d = dayOfWeek - 1; d >= 0; d--) {
				_moment = _moment.add(-1, 'd');
				dayInfo.yyyy = _moment.year();
				dayInfo.mm = _moment.month();
				dayInfo.dd = _moment.date();
				dayInfo.day = d;
				dayInfo.ymd = _moment.format('YYYY-MM-DD');
				dayInfo.mmEn = this.state.monthEn[_moment.month()];
				weekArray[d] = dayInfo;
				dayInfo = {};
			}

			_moment = new _moment3.default().set({
				'year': _year,
				'month': _month
			});
			dayInfo = {};
			var days = _moment.daysInMonth();
			for (var _d = 1; _d < days + 1; _d++) {
				_moment.set('date', _d);
				var day = _moment.day();
				dayInfo.yyyy = _year;
				dayInfo.mm = _month;
				dayInfo.dd = _d;
				dayInfo.day = day;
				dayInfo.ymd = _moment.format('YYYY-MM-DD');
				dayInfo.mmEn = this.state.monthEn[_month];
				if (day == 6) {
					weekArray[day] = dayInfo;
					weeksArray.push(weekArray.concat());
					weekArray = [];
				} else {
					weekArray[day] = dayInfo;
				}
				dayInfo = {};
			}
			// 向后补充
			dayOfWeek = _moment.day();
			for (var _d2 = dayOfWeek + 1; _d2 <= 6; _d2++) {
				_moment = _moment.add(1, 'd');
				dayInfo.yyyy = _moment.year();
				dayInfo.mm = _moment.month();
				dayInfo.dd = _moment.date();
				dayInfo.day = _d2;
				dayInfo.ymd = _moment.format('YYYY-MM-DD');
				dayInfo.mmEn = this.state.monthEn[_moment.month()];
				weekArray[_d2] = dayInfo;
				dayInfo = {};
			}
			weeksArray.push(weekArray.concat());

			this.setState({
				weeksArray: weeksArray
			});
		}
	}, {
		key: 'handlePreMonth',
		value: function handlePreMonth() {
			var toDay = this.state.toDay;
			var _year = toDay.yyyy;
			var _month = toDay.mm;
			if (_month == 0) {
				_year -= 1;
				_month = 11;
			} else {
				_month -= 1;
			}
			toDay.yyyy = _year;
			toDay.mm = _month;
			toDay.mmEn = this.state.monthEn[_month];
			this.setState({
				toDay: toDay
			});
			this.createMonthArray();
		}
	}, {
		key: 'handleNextMonth',
		value: function handleNextMonth() {
			var toDay = this.state.toDay;
			var _year = toDay.yyyy;
			var _month = toDay.mm;
			if (_month == 11) {
				_year += 1;
				_month = 0;
			} else {
				_month += 1;
			}
			toDay.yyyy = _year;
			toDay.mm = _month;
			toDay.mmEn = this.state.monthEn[_month];
			this.setState({
				toDay: toDay
			});
			this.createMonthArray();
		}
	}, {
		key: 'chooseDay',
		value: function chooseDay(day, e) {
			e.preventDefault();
			e.stopPropagation();

			var minDate = this.props.minDate;
			var maxDate = this.props.maxDate;

			if (minDate && day.ymd < minDate) {
				return;
			} else if (maxDate && day.ymd > maxDate) {
				return;
			}

			var toDay = this.state.toDay;
			if (toDay.mm != day.mm) {
				return;
			}

			if (this.props.chooseDay) {
				this.props.chooseDay(day.ymd);
			} else {
				this.setState({
					toDay: day
				});
			}
		}
	}, {
		key: 'onClick',
		value: function onClick(e) {
			e.preventDefault();
			e.stopPropagation();
		}
	}, {
		key: 'renderDay',
		value: function renderDay(day, key) {
			var toDay = this.state.toDay;
			var isToday = function isToday() {
				if (toDay.ymd == day.ymd) {
					return true;
				} else {
					return false;
				}
			};
			var dayClass = {
				'day-item': true,
				'now': isToday()
			};
			var style = {
				daySelected: {
					width: 20,
					height: 20,
					borderRadius: '50%',
					backgroundColor: color.b03,
					color: color.c01,
					lineHeight: '20px',
					marginRight: 16,
					cursor: 'pointer'
				},
				dayUnSelected: {
					width: 20,
					height: 20,
					borderRadius: '50%',
					backgroundColor: color.c01,
					color: color.c13,
					lineHeight: '20px',
					marginRight: 16,
					cursor: 'pointer'
				},
				dayDisable: {
					width: 20,
					height: 20,
					borderRadius: '50%',
					backgroundColor: color.c01,
					color: color.c06,
					lineHeight: '20px',
					marginRight: 16
				}
			};

			var divStyle = style.dayDisable;

			var minDate = this.props.minDate;
			var maxDate = this.props.maxDate;
			if (minDate && day.ymd < minDate) {
				divStyle = style.dayDisable;
			} else if (maxDate && day.ymd > maxDate) {
				divStyle = style.dayDisable;
			} else if (toDay.mm != day.mm) {
				divStyle = style.dayDisable;
			} else if (isToday()) {
				divStyle = style.daySelected;
			} else {
				divStyle = style.dayUnSelected;
			}

			return _react2.default.createElement(
				'span',
				{ key: key, style: divStyle, onClick: this.chooseDay.bind(this, day) },
				day.dd
			);
		}
	}, {
		key: 'renderWeek',
		value: function renderWeek(week, key) {
			var day = week.map(this.renderDay.bind(this));
			var style = {
				day: {
					display: 'flex',
					margin: '5 -4',
					textAlign: 'center'
				}
			};
			return _react2.default.createElement(
				'span',
				{ key: key, style: style.day },
				day
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var toDay = this.state.toDay;
			var weeksArray = this.state.weeksArray;
			var week = weeksArray.map(this.renderWeek.bind(this));
			var style = {
				calBorder: {
					border: '1px solid',
					borderColor: color.c06,
					padding: '20px 10px 10px 10px',
					fontSize: 14,
					borderRadius: 5,
					color: color.c13,
					width: 250,
					margin: '8px -10px',
					backgroundColor: '#fff'
				},
				year: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: 250,
					marginBottom: 15,
					alignSelf: 'center'
				},
				fontSelected: {
					color: color.b03,
					fontSize: 20,
					cursor: 'pointer'
				},
				fontUnSelected: {
					color: color.c06,
					fontSize: 20,
					cursor: 'text'
				},
				week: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: 230,
					marginBottom: 5,
					alignSelf: 'center'
				}
			};
			return(
				//测试数据
				_react2.default.createElement(
					_VerticalLayout2.default,
					{ style: this.style(style.calBorder), onClick: this.onClick.bind(this) },
					_react2.default.createElement(
						_HorizontalLayout2.default,
						{ style: style.year },
						_react2.default.createElement(
							'span',
							{ onClick: this.handlePreMonth.bind(this) },
							_react2.default.createElement(_FontIcon2.default, { icon: 'icon-left-open-3', style: style.fontSelected })
						),
						_react2.default.createElement(
							'span',
							{ style: { fontSize: 16 } },
							_react2.default.createElement(
								'span',
								null,
								toDay.yyyy,
								'年'
							),
							_react2.default.createElement(
								'span',
								null,
								toDay.mmEn,
								'月'
							)
						),
						_react2.default.createElement(
							'span',
							{ onClick: this.handleNextMonth.bind(this) },
							_react2.default.createElement(_FontIcon2.default, { icon: 'icon-right-open-3', hoverColor: color.b03, style: style.fontSelected })
						)
					),
					_react2.default.createElement(
						_HorizontalLayout2.default,
						{ style: style.week },
						_react2.default.createElement(
							'span',
							null,
							'日'
						),
						_react2.default.createElement(
							'span',
							null,
							'一'
						),
						_react2.default.createElement(
							'span',
							null,
							'二'
						),
						_react2.default.createElement(
							'span',
							null,
							'三'
						),
						_react2.default.createElement(
							'span',
							null,
							'四'
						),
						_react2.default.createElement(
							'span',
							null,
							'五'
						),
						_react2.default.createElement(
							'span',
							null,
							'六'
						)
					),
					_react2.default.createElement(
						_VerticalLayout2.default,
						{ style: { margin: 10 } },
						week
					)
				)
			);
		}
	}]);

	return Calendar;
}(_uibase2.default);

module.exports = Calendar;