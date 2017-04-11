import YXReactUIBase from '../framework/uibase'
import React from 'react'
import VerticalLayout from './VerticalLayout'
var color = require('../common/color');
class Folder extends YXReactUIBase{
	static get propTypes() {
		return {
			title:React.PropTypes.string,
			borderLeft: React.PropTypes.bool,
			theme:React.PropTypes.oneOf(['primary','danger','success','warning','info','default','infoBlack','infoWhite','infoGray','disabled']),
		}
	}
	static get defaultProps() {
	    return {
	    	borderLeft:false,
	    	title: '无标题',
	    	theme:'primary',
	    }
	}
	constructor(props) {
	    super(props);
	    this.state={
	    	theme:Folder.theme[props.theme]
	    }
		
	}
	render(){
		var objStyle=this.state.theme;
		var styles = {
			layout:{
				marginTop: 30,
				padding: '0 30px',
				alignItems:'stretch',
				textAlign:'left'
			},
			title:{
				display:'flex',
				flexFlow: 'row',
				padding: 10,
				marginBottom:10,
				fontSize: 14,
				color:'#333333',
				borderLeft:this.props.borderLeft?'4px solid'+objStyle.color:'',
			},
		};
		return (
			<VerticalLayout style={this.style(styles.layout)}>
			<span style={styles.title}>{this.props.title}</span>
			{this.props.children}
			</VerticalLayout>
		)
	}
}
Folder.theme = {
			primary:{
				color: color.b03,
			},
			danger:{
				color: color.b08,
			},
			success:{
				color: color.b04,
			},
			warning:{
				color: color.b06,
			},
			info:{
				color: color.c03,
			},
			default:{
				color: color.a06,
			},
			infoBlack:{
				color: color.c01,
			},
			infoWhite:{
				color: color.c13,
			},
			infoGray:{
				color: color.c15,
			},
			disabled:{
				color: color.c03,
			}
		};
module.exports = Folder;