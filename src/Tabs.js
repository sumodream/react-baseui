import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import HorizontalLayout from './HorizontalLayout'
import Link from './Link'
var color = require('../common/color');
class Tabs extends ReactUIBase {
	static get propTypes() {
		return {
			onSelect: React.PropTypes.func,
			values: React.PropTypes.arrayOf(React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element
			])),
			default: React.PropTypes.number,
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default','infoBlue','infoBlack','infoWhite','infoGray','disabled']),
			width:React.PropTypes.number
		}
	}
	static get defaultProps() {
		return {
			values: [<Link hoverStyle={{color:'#23527c'}}>英语</Link>, '语文'],
			onSelect: index => index,
			default: 0,
			theme:'primary'
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: props.default,
			theme:Tabs.theme[props.theme]
		};
	}
	componentWillReceiveProps(nextProps){
		if(!isNaN(nextProps.default)&&nextProps.default!=this.props.default){
			this.setState({
				selectedTab: nextProps.default,
				default : nextProps.default
			});
		}
	}
	handleSelect(index) {
		this.props.onSelect(index);
		this.setState({
			selectedTab:index
		});
	}
	render() {
		var objStyle=this.state.theme;
		var items = this.props.values.map((item, index) => {
			var styles = {
				selectedTab: {
					marginRight: 20,
					padding: '5px 12px',
					cursor: 'pointer',
					fontSize: 14,
					borderRadius:2,
					border: this.state.selectedTab?(objStyle.border?objStyle.border:0):0,
					borderStyle: objStyle.border?'solid':'none',
					borderColor: this.state.selectedTab&&objStyle.borderColor?objStyle.borderColor:'',
					color: this.state.selectedTab&&objStyle.hoverColor?objStyle.hoverColor:objStyle.color,
					backgroundColor:this.state.selectedTab?objStyle.hover:objStyle.bg,
					border: objStyle.border?objStyle.border:0,
				},
				unselectedTab: {
					marginRight: 20,
					padding: '5px 12px',
					cursor: 'pointer',
					fontSize: 14,
					borderRadius:2,
					color:color.c12
				}
			};
			return (
				<div key={index} style={index==this.state.selectedTab?this.style(styles.selectedTab):this.style(styles.unselectedTab)} onClick={this.handleSelect.bind(this,index)} key={index}>{item}</div>
			)
		});
		return (
			<HorizontalLayout {...this.props} style={{flexWrap:'wrap',width:this.props.width}}>
			{items}
			</HorizontalLayout>
		)
	}
}
Tabs.theme = {
			primary:{
				bg: color.b03,
				color: color.c01,
				hover: color.b03
			},
			danger:{
				bg: color.b08,
				color: color.c01,
				hover: color.b08
			},
			success:{
				bg: color.b04,
				color: color.c01,
				hover: color.b04
			},
			warning:{
				bg: color.b06,
				color: color.c01,
				hover: color.b06
			},
			info:{
				bg: color.c03,
				color: color.c10,
				hover: color.c03
			},
			default:{
				bg: color.a06,
				color: color.c01,
				hover: color.a06
			},
			infoBlue:{
				bg: color.c01,
				color: color.b03,
				hover: color.a12,
				border:1,
				borderColor: color.b03,
				hoverColor: color.c01
			},
			infoWhite:{
				bg: color.c01,
				color: color.c10,
				hover: color.a03,
				border:1,
				boderColor: color.c04,
				hoverColor: color.c01
			},
			infoGray:{
				bg: color.c15,
				color: color.c10,
				hover: color.a03,
				border:1,
				boderColor: color.c04,
				hoverColor: color.c01
			}
		};
module.exports = Tabs;
