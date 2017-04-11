import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import moment from 'moment'
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'
import FontIcon from './FontIcon'
let color = require('../common/color');
class Calendar extends ReactUIBase {

    static get propTypes() {
        return {
			date: React.PropTypes.string,
			minDate: React.PropTypes.string,
			maxDate: React.PropTypes.string,
			chooseDay: React.PropTypes.func
		}
    }
    static get defaultProps() {
        return {
            date:moment().format('YYYY-MM-DD')
        }
    }

	constructor(props) {
		super(props);
		this.state = ({
			toDay: {
				yyyy: '',
				mm: '',
				dd: '',
				ymd: '',
				md: ''
			},
			monthEn: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
			weeksArray: []
		});
	}
	componentDidMount() {
		this.getNowDate(this.props.date);
		this.createMonthArray();
	}
	getNowDate(dateStr) {
		let toDay = this.state.toDay;
		let year = moment(dateStr).year();
		let month = moment(dateStr).month();
        // the day of the month
		let date = moment(dateStr).date();
		toDay.yyyy = year;
		toDay.mm = month;
		toDay.dd = date;
		toDay.ymd = moment(dateStr).format('YYYY-MM-DD');
		toDay.md = moment(dateStr).format('MM-DD');
		toDay.mmEn = this.state.monthEn[month];
		this.setState({
			toDay: toDay
		});
	}
	createMonthArray(year, month) {
		let weekArray = [];
		let weeksArray = [];
		let _moment = new moment();
		let toDay = this.state.toDay;
		let _year = year ? year : toDay.yyyy;
		let _month = month ? month : toDay.mm;
		_moment.set({
			'year': _year,
			'month': _month,
            'date': 1
		});
		let dayInfo = {};
        // 获得月的第一天是一周的第几天
        let dayOfWeek = _moment.day();
        for(let d=dayOfWeek-1; d>=0; d--){
            _moment =_moment.add(-1,'d');
            dayInfo.yyyy = _moment.year();
            dayInfo.mm = _moment.month();
            dayInfo.dd = _moment.date();
            dayInfo.day = d;
            dayInfo.ymd = _moment.format('YYYY-MM-DD');
            dayInfo.mmEn = this.state.monthEn[_moment.month()];
            weekArray[d] = dayInfo;
            dayInfo = {}
        }

        _moment = new moment().set({
            'year': _year,
            'month': _month
        });
        dayInfo = {};
        let days = _moment.daysInMonth();
		for (let d = 1; d < days + 1; d++) {
			_moment.set('date', d);
			let day = _moment.day();
			dayInfo.yyyy = _year;
			dayInfo.mm = _month;
			dayInfo.dd = d;
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
			dayInfo = {}
		}
        // 向后补充
        dayOfWeek = _moment.day();
        for(let d=dayOfWeek+1; d<=6; d++){
            _moment = _moment.add(1,'d');
            dayInfo.yyyy = _moment.year();
            dayInfo.mm = _moment.month();
            dayInfo.dd = _moment.date();
            dayInfo.day = d;
            dayInfo.ymd = _moment.format('YYYY-MM-DD');
            dayInfo.mmEn = this.state.monthEn[_moment.month()];
            weekArray[d] = dayInfo;
            dayInfo = {}
        }
        weeksArray.push(weekArray.concat());

		this.setState({
			weeksArray: weeksArray
		})
	}
	handlePreMonth() {
		let toDay = this.state.toDay;
		let _year = toDay.yyyy;
		let _month = toDay.mm;
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
		})
		this.createMonthArray()
	}
	handleNextMonth() {
		let toDay = this.state.toDay;
		let _year = toDay.yyyy;
		let _month = toDay.mm;
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
		})
		this.createMonthArray()
	}

    chooseDay(day,e){
		e.preventDefault();
        e.stopPropagation();


        let minDate = this.props.minDate;
        let maxDate = this.props.maxDate;

        if(minDate && day.ymd<minDate){
            return;
        } else if(maxDate && day.ymd>maxDate){
            return;
        }

        let toDay = this.state.toDay;
        if(toDay.mm!=day.mm){
            return;
        }

        if(this.props.chooseDay){
            this.props.chooseDay(day.ymd);
        }
		else{
			this.setState({
				toDay: day
			});
		}
    }

    onClick(e){
        e.preventDefault();
        e.stopPropagation();
    }

	renderDay(day, key) {
		let toDay = this.state.toDay;
		let isToday = (() => {
			if (toDay.ymd == day.ymd) {
				return true;
			} else {
				return false;
			}
		});
		let dayClass = {
			'day-item': true,
			'now': isToday()
		}
		let style = {
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
		}

        let divStyle = style.dayDisable;

        let minDate = this.props.minDate;
        let maxDate = this.props.maxDate;
        if(minDate && day.ymd<minDate){
            divStyle = style.dayDisable;
        } else if(maxDate && day.ymd>maxDate){
            divStyle = style.dayDisable;
        } else if(toDay.mm!=day.mm){
            divStyle = style.dayDisable;
        } else if(isToday()){
            divStyle = style.daySelected;
        } else {
            divStyle = style.dayUnSelected;
        }

		return (
			<span key={key} style={divStyle} onClick={this.chooseDay.bind(this,day)}>
				{day.dd}
			</span>
		)
	}
	renderWeek(week, key) {
		let day = week.map(this.renderDay.bind(this));
		let style = {
			day: {
				display: 'flex',
				margin:'5 -4',
				textAlign:'center'
			}
		}
		return (
			<span key={key} style={style.day}>
				{day}
			</span>
		)
	}
	render() {
		let toDay = this.state.toDay;
		let weeksArray = this.state.weeksArray;
		let week = weeksArray.map(this.renderWeek.bind(this));
		let style = {
			calBorder: {
				border: '1px solid',
				borderColor: color.c06,
				padding: '20px 10px 10px 10px',
				fontSize: 14,
				borderRadius: 5,
				color: color.c13,
				width:250,
				margin:'8px -10px',
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
				cursor: 'pointer',
			},
			fontUnSelected: {
				color: color.c06,
				fontSize: 20,
				cursor: 'text',
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
		return (
			//测试数据
			<VerticalLayout style={this.style(style.calBorder)} onClick={this.onClick.bind(this)}>
				<HorizontalLayout style={style.year}>
					<span onClick={this.handlePreMonth.bind(this)}>
						<FontIcon icon='icon-left-open-3' style={style.fontSelected}></FontIcon>
					</span>
					<span style={{fontSize:16}}>
						<span>{toDay.yyyy}年</span>
						<span>{toDay.mmEn}月</span>
					</span>
                    <span onClick={this.handleNextMonth.bind(this)}>
					    <FontIcon icon='icon-right-open-3' hoverStyle={{color: color.b03}} style={style.fontSelected}></FontIcon>
                    </span>
                </HorizontalLayout>
				<HorizontalLayout style={style.week}>
					<span>日</span>
					<span>一</span>
					<span>二</span>
					<span>三</span>
					<span>四</span>
					<span>五</span>
					<span>六</span>
				</HorizontalLayout>
				<VerticalLayout style={{margin:10}}>
					{week}
				</VerticalLayout>
			</VerticalLayout>
		)
	}
}
module.exports = Calendar;
