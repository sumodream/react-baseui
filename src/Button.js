import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import color from '../common/color'
class Button extends ReactUIBase{
	static get propTypes() {
		return {
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default','infoBlue','infoBlack','infoWhite','infoGray','disabled','green','lightGreen','warningRev']),
			icon:React.PropTypes.string,
			size: React.PropTypes.number,
			disabled: React.PropTypes.bool,
			onClick:React.PropTypes.func
		}
	}
	static get defaultProps() {
	    return {
	    	theme: 'primary',
	    	disabled: false,
			children:'按钮'
	    }
	}
	constructor(props){
		super(props);
		this.state={
			active: false,
			theme : props.disabled?Button.theme['disabled']:Button.theme[props.theme]
		};
	}

	componentWillReceiveProps(nextProps){
        if(this.props.theme!=nextProps.theme || this.props.disabled!=nextProps.disabled){
            this.setState({
                active: false,
                theme : nextProps.disabled?Button.theme['disabled']:Button.theme[nextProps.theme]
            });
        }
	}

	mouserOver(event){
		this.setState({
			active:true
		});
		event.preventDefault();
		event.stopPropagation();
	}

	mouseOut(event){
		this.setState({
			active:false
		});
		event.preventDefault();
		event.stopPropagation();
	}

	render(){
		var objStyle = this.state.theme;
		var styles = {
			btn: {
				display: 'flex',
				minHeight: this.props.size?this.props.size:32,
				minWidth: this.props.size?this.props.size:84,
				alignItems: 'center',
				justifyContent:'center',
				borderRadius:this.props.size?'50%':2,
				border:1,
				borderStyle: objStyle.border?'solid':'none',
				borderColor: this.state.active&&objStyle.borderColor?objStyle.color:objStyle.color,
				fontSize: 14,
				color: this.state.active&&objStyle.colorHover?objStyle.colorHover:objStyle.color,
				backgroundColor:this.state.active?objStyle.bgHover:objStyle.bg,
				cursor:this.props.disabled?'not-allowed':'pointer',
				outline:'none',
				WebkitOutline:'none',
				boxSizing: 'border-box',
				overflow:'hidden'
			},
			icon: {
				marginRight: 3,
				color:'inherit'
			}
			
		}
		return (
			<button style={this.style(styles.btn)} onClick={this.props.disabled?null:this.props.onClick}  onMouseOver={this.props.disabled?null:this.mouserOver.bind(this)} onMouseOut={this.props.disabled?null:this.mouseOut.bind(this)}>
				{this.props.icon?<i className={"fontello  "+this.props.icon} style={styles.icon}></i>:''}
				{this.props.children}
			</button>
		)
	}
}

Button.theme = {
			primary:{
				bg: color.b03,
				color: color.c01,
				bgHover: color.b16
			},
			danger:{
				bg: color.b08,
				color: color.c01,
				bgHover: color.a11
			},
			success:{
				bg: color.b04,
				color: color.c01,
				bgHover: color.a13
			},
			warning:{
				bg: color.b06,
				color: color.c01,
				bgHover: color.a09
			},
			warningRev:{
				bg: color.c01,
				color: color.b06,
				bgHover: color.c02
			},
			info:{
				bg: color.c03,
				color: color.c10,
				bgHover: color.a06,
			},
			default:{
				bg: color.a06,
				color: color.c01,
				bgHover: color.a05
			},
			green:{
				bg: color.b04,
				color: color.c01,
				bgHover: color.b18
			},
			lightGreen:{
				bg: '#57dcbb',
				color: color.c01,
				bgHover: '#39d6af'
			},
			infoBlue:{
				bg: color.c01,
				color: color.b03,
				bgHover: color.a12,
				border:1,
				borderColor: color.b03,
				colorHover: color.c01
			},
			infoBlack:{
				bg: color.c01,
				color: color.c13,
				bgHover: color.c13,
				border:1,
				borderColor: color.c13,
				colorHover: color.c01
			},
			infoWhite:{
				bg: color.c13,
				color: color.c01,
				bgHover: color.c01,
				border:1,
				borderColor: color.c01,
				colorHover: color.c13
			},
			infoGray:{
				bg: color.c15,
				color: color.c10,
				bgHover: color.a03,
				border:1,
				borderColor: color.c10,
				colorHover: color.c01
			},
			disabled:{
				bg: color.c03,
				color: color.c07,
				colorHover: color.c03
			}
		};
module.exports = Button;
