import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Calendar from './Calendar'
import FontIcon from './FontIcon'
import moment from 'moment'
let color = require('../common/color');
class ComboCalendar extends ReactUIBase {

    static get propTypes() {
        return {
            minDate: React.PropTypes.string,
            maxDate: React.PropTypes.string,
            date: React.PropTypes.string,
            onValueChange: React.PropTypes.func
        }
    }
    static get defaultProps() {
        return {
            date:moment().format('YYYY-MM-DD')
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            str: props.date
        }
    }
    chooseDay(dateStr) {
        this.setState({
            str: dateStr
        });
        this.cancel();
        if(this.props.onValueChange){
            this.props.onValueChange(dateStr);
        }
    }

    renderPopup() {
        var bodyrect = document.body.getBoundingClientRect()
        var pos = ReactDOM.findDOMNode(this.refs.comboCanlendar).getBoundingClientRect();
        var listOriginStyle = {
            position: 'absolute',
            left: pos.left,
            top: pos.top + pos.height,
        }
        var listStyle = Object.assign({}, listOriginStyle, this.props.listStyle);
        ReactDOM.render(
            <div  onClick={this.cancel.bind(this)} style={{position:'absolute',left:window.pageXOffset,top:window.pageYOffset,width:bodyrect.width,height:bodyrect.height, display:'flex',flexDirection:'column'}}>
                <div style={listStyle}>
                    <Calendar minDate={this.props.minDate} maxDate={this.props.maxDate} date={this.state.str} chooseDay={this.chooseDay.bind(this)} style={{marginTop:20}}></Calendar>
                </div>
            </div>,
            this.valueElem
        );
    }
    cancel(e) {
        if (typeof this.valueElem == 'undefined') return;
        ReactDOM.unmountComponentAtNode(this.valueElem);
        this.valueElem.parentNode.removeChild(this.valueElem);
        this.valueElem = undefined;
    }
    onFocus(e) {
        if (typeof this.valueElem == 'undefined') {
            this.valueElem = document.createElement('div');
            document.body.appendChild(this.valueElem);
        }
        this.renderPopup();
        e.preventDefault();
        e.stopPropagation();
    }
    render() {
        return ( < div style = {this.style(
                {
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
                })
            }
            onClick = {
                this.onFocus.bind(this)
            } >
            <span type="text" ref='comboCanlendar' style={{fontSize:12,color:'#333'}}>{this.state.str}</span> < FontIcon icon = 'icon-calendar' > </FontIcon> </div>
        )
    }
}
            
module.exports = ComboCalendar;
