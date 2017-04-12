import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import color from '../common/color'
class Textarea extends ReactUIBase{
	static get propTypes() {
		return {
			theme: React.PropTypes.string
		}
	}
	static get defaultProps() {
	    return {
	    	theme: 'primary'
	    }
	}
	onFocus(evt){
		this.setState({
			active: true
		});
		if(this.props.onFocus){
			this.props.onFocus(evt);
		}
	}
	onBlur(evt){
		this.setState({
			active: false
		});
		if(this.props.onBlur){
			this.props.onBlur(evt);
		}
	}
	onInputKeyDown(evt){
		if(this.props.onKeyDown){
			this.props.onKeyDown(evt);
		}
	}
	onValueChange(evt){
		if (this.props.onValueChange){
			this.props.onValueChange(evt.target.value);
		}
	}
	constructor(props){
		super(props);
		this.state={
			active: false
		};
	}
	render(){
		var styles = {
			width: 330,
			height: 150,
			boxSizing:'border-box',
			backgroundColor:'#fff',
			fontSize:14,
			padding:12,
			border: 'thin solid',
			borderColor: this.state.active?Textarea.theme[this.props.theme].border:'#b1b1b1',
			borderRadius:2,
			lineHeight: 1.5,
			outline:'none',
			textAlign:'justify',
			color:'#000'
		}
		return <textarea type="text" placeholder={this.props.placeholder} rows={this.props.rows} cols={this.props.cols} style={this.style(styles)} onKeyDown={this.onInputKeyDown.bind(this)} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} onChange={this.onValueChange.bind(this)} value={this.props.value}></textarea> 
	} 
}
Textarea.theme = {
			primary:{
				border: color.b03,
			},
			danger:{
				border: color.b08,
			},
			success:{
				border: color.b04,
			},
			warning:{
				border: color.b06,
			},
			info:{
				border: color.c03,
			},
			default:{
				border: color.a06,
			},
			infoBlack:{
				border: color.c01,
			},
			infoWhite:{
				border: color.c13,
			},
			infoGray:{
				border: color.c15,
			},
			disabled:{
				border: color.c03,
			}
		};
module.exports = Textarea;