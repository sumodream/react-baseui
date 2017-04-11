import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import HorizontalLayout from './HorizontalLayout'
import VerticalLayout from './VerticalLayout'
var color = require('../common/color');
class Collapse extends ReactUIBase{
	static get propTypes(){
		return {
			title: React.PropTypes.string,
			fold: React.PropTypes.bool,
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default','infoBlack','infoWhite','infoGray','disabled']),
		}
	}
	static get defaultProps() {
		return {
			title:'折叠面板',
			showIcon: true,
			theme: 'default'
		};
	}
	constructor(props) {
	    super(props);
	    this.state={
	    	showContent: props.fold,
	    	theme : Collapse.theme[props.theme]
	    }
	}
	toggleContent(){
		this.setState({
			showContent: !this.state.showContent
		})
	}
	render(){
		var objStyle = this.state.theme;
		var styles={
			titleStyle:{
				alignSelf:'stretch',
				alignItems:'center',
				padding:'12px 10px 12px 20px',
				fontSize: 14,
				color:'#333333',
				cursor: 'pointer',
				border:'thin solid #e7e7e7',
				backgroundColor: '#fafafa'
			},
			toggleContent:{
				alignSelf:'stretch',
				padding: 20,
				alignItems:'stretch',
				border:'thin solid #e7e7e7',
				borderTop: 0,
				backgroundColor:'#fff'
			},
			icon: {
				color:objStyle.color,
				marginRight:5,
				fontSize: 12,
			}
		};
		return (
			<VerticalLayout style={this.style({alignSelf:'stretch'})}>
				<HorizontalLayout style={styles.titleStyle} onClick={this.toggleContent.bind(this)}>
					<div style={{flex:'1 0 auto'}}>{this.props.title}</div>
					<i className={this.state.showContent?'icon-up-open-2':'icon-down-open-2'} style={styles.icon}/>
				</HorizontalLayout>
				{this.state.showContent?(
					<VerticalLayout style={styles.toggleContent}>
						{this.props.children}
					</VerticalLayout>
				):null}
			</VerticalLayout>
		)
	}
}
Collapse.theme = {
			primary:{
				color: color.b03
			},
			danger:{
				color: color.b08
			},
			success:{
				color: color.b04
			},
			warning:{
				color: color.b06
			},
			info:{
				color: color.c03
			},
			default:{
				color: color.a06
			},
			infoBlack:{
				color: color.c01
			},
			infoWhite:{
				color: color.c13
			},
			infoGray:{
				color: color.c15
			},
			disabled:{
				color: color.c03
			}
		};
module.exports = Collapse;