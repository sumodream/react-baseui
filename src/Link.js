import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import color from '../common/color'
class Link extends ReactUIBase{
	static get propTypes() {
		return {
			theme: React.PropTypes.string,
			name: React.PropTypes.string,
			href: React.PropTypes.string,
			target: React.PropTypes.string,
			icon: React.PropTypes.string,
			iconStyle: React.PropTypes.object,
			hoverStyle: React.PropTypes.object,
			disabled: React.PropTypes.bool,
			onClick: React.PropTypes.func
		}
	}
	static get defaultProps() {
	    return {
			target:'_self',
			disabled: false,
			children:''
	    }
	}
	constructor(props){
		super(props);
		this.state = {
			theme:props.disabled?Link.theme['disabled']:(props.theme?Link.theme[props.theme]:''),
			active:false
		};
	}
	componentWillReceiveProps(nextProps){
		this.state = {
			theme:nextProps.disabled?Link.theme['disabled']:(nextProps.theme?Link.theme[nextProps.theme]:''),
			active:false
		};
	}
	changeBg(){
		this.setState({active:true});
		if (this.props.onMouseOver){
			this.props.onMouseOver();
		}
	}
	recoverBg(){
		this.setState({active:false});
		if (this.props.onMouseOut){
			this.props.onMouseOut();
		}
	}
	render(){
		var theme = this.state.theme;
		var link = {
				display:'flex',
				alignItems:'center',
				color: theme?theme.color:'inherit',
				cursor: 'pointer',
				textDecoration: this.props.disabled?'none':(this.state.active?'underline':'none')
			};
		var linkStyle = this.style(link);
		linkStyle.color = this.state.active?(theme?theme.hover:linkStyle.color):linkStyle.color;
		linkStyle.fontSize = linkStyle.fontSize?linkStyle.fontSize:12;
		linkStyle = !this.props.disabled&&!!this.props.hoverStyle && this.state.active ? Object.assign({},linkStyle,this.props.hoverStyle): linkStyle;
		var icon = {
			fontSize: linkStyle.fontSize+2,
			marginRight:4
		};
		return (
			<a style={linkStyle} name={this.props.name} onClick={!this.props.disabled&&this.props.onClick} href={!this.props.disabled&&this.props.href?this.props.href:'javascript:void(0);'} target={this.props.target} onMouseOver={this.changeBg.bind(this)} onMouseOut={this.recoverBg.bind(this)}>
			{this.props.icon?<i style={Object.assign({},icon,this.props.iconStyle)}  className={"fontello  "+this.props.icon} />:''}{this.props.children}
			</a>
			)
			}
		}
Link.theme = {
			primary:{
				color: color.b03,
				hover: color.a12
			},
			danger:{
				color: color.b08,
				hover: color.a11
			},
			success:{
				color: color.b04,
				hover: color.a13
			},
			warning:{
				color: color.b06,
				hover: color.a09
			},
			info:{
				color: color.c03,
				hover: color.c05
			},
			default:{
				color: color.c10,
				hover: color.c12
			},
			disabled:{
				color: color.c08,
				hover: color.c08
			}
		};
module.exports = Link;
