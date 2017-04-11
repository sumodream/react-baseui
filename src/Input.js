import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import HorizontalLayout from './HorizontalLayout'
var color = require('../common/color');
class Input extends ReactUIBase{
	static get propTypes() {
		return {
			type: React.PropTypes.string,
			maxLength: React.PropTypes.number,
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default']),
			size: React.PropTypes.oneOf(['larger','default','small','xSmall']),
			icon: React.PropTypes.string,
			search:React.PropTypes.string,
			disabled: React.PropTypes.bool,
			onChange: React.PropTypes.func
		}
	}
	static get defaultProps() {
	    return {
			type:'text',
			maxLength: 999,
			size: 'default',
			disabled: false
	    }
	}
	constructor(props){
		super(props);
		this.state = {
			theme: props.theme?Input.theme[props.theme]:{color:'#e7e7e7'},
			size: Input.size[props.size],
			focus: false
		};
	}
	onInputFocus(evt){
		if(this.props.onFocus){
			this.props.onFocus(evt);
		}
		this.setState({
			focus: true
		});
	}
	onInputBlur(evt){
		if(this.props.onBlur){
			this.props.onBlur(evt);
		}
		this.setState({
			focus: false
		});
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
	
	render(){ 
		var objStyle = this.state.theme;
		var size = this.state.size;
		var styles = {
			wrap:{
				position:'relative'
			},
			input:{
				width:'100%',
				outline: 'none',
				textOverflow: 'ellipsis',
				color:'#333',
				border:'1px solid',
				borderColor: this.state.focus?objStyle.color:'#e7e7e7',
				borderRadius:2,
				backgroundColor: this.props.disabled?'#fafafa':'#fff',
				boxSizing:'border-box'
			},
			search: {
				position:'absolute',
				top: (size.height-size.fontSize-2)/2,
				right: 2,
				fontSize: size.fontSize+2,
				color: this.state.focus?this.props.theme?objStyle.color:'#B6BAC3':'#B6BAC3',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				alignSelf: 'stretch'
			},
			icon:{
				position:'absolute',
				top: (size.height-size.fontSize-2)/2,
				left: size.paddingLeft-2,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				alignSelf: 'stretch',
				fontSize: size.fontSize+2,
				color: this.state.focus?this.props.theme?objStyle.color:'#B6BAC3':'#B6BAC3'
			}
		};
		let inputStyle = Object.assign({},styles.input,size,{});
		inputStyle.paddingLeft = this.props.icon?(size.paddingLeft*2+size.fontSize):size.paddingLeft;
		inputStyle.paddingRight = this.props.search?(size.paddingLeft*2+size.fontSize):size.paddingLeft;

		return (
			<HorizontalLayout style={this.style(styles.wrap)}>
			{this.props.icon?<i className={"fontello  "+this.props.icon} style={styles.icon}></i>:''}
			<input type={this.props.type} placeholder={this.props.placeholder} maxlength={this.props.maxLength} style={inputStyle} disabled={this.props.disabled?'disabled':false} value={this.props.value} onKeyDown={this.onInputKeyDown.bind(this)} onFocus={this.onInputFocus.bind(this)} onBlur={this.onInputBlur.bind(this)} onChange={this.onValueChange.bind(this)} defaultValue={this.props.default} />
			{this.props.search?<i className={"fontello  "+this.props.search} style={styles.search}></i>:''}
			</HorizontalLayout>
			)
	} 
}
Input.theme = {
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
			}
		};
Input.size = {
	larger:{
		height: 40,
		fontSize: 14,
		paddingLeft: 12
	},
	default:{
		height: 34,
		fontSize: 12,
		paddingLeft: 12
	},
	small:{
		height: 28,
		fontSize: 12,
		paddingLeft: 8
	},
	xSmall:{
		height: 20,
		fontSize: 12,
		paddingLeft: 8
	}
};
module.exports = Input;