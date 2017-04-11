import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import color from '../common/color'

class FontIcon extends ReactUIBase{
	static get propTypes() {
		return {
			icon: React.PropTypes.string,
            theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default','infoBlue','infoWhite','infoGray','infoBlueBlack','ligterWhite']),
			onClick: React.PropTypes.func
		}
	}
	static get defaultProps() {
	    return {
			icon:'icon-heart'
	    }
	}
	constructor(props){
		super(props);
        if(props.theme){
            this.state = {
                active:false,
                theme:FontIcon.theme[props.theme]
            }
        }else{
            this.state = {
                active:false
            }
        }
	}
	mouseover(){
		this.setState({
			active: true
		});
	}
	mouseout(){
		this.setState({
			active: false
		});
	}
	
	render(){
		let fontStyle = this.style({});
        fontStyle.color = (this.props.theme&&this.state.theme.color)?(this.state.active?this.state.theme.hover:(fontStyle.color?fontStyle.color:this.state.theme.color)):(fontStyle.color?fontStyle.color:'inherit');
		return <i style={fontStyle} onClick={this.props.onClick} className={"fontello  "+this.props.icon} onMouseOver={this.props.theme?this.mouseover.bind(this):''} onMouseOut={this.props.theme?this.mouseout.bind(this):''} />
	}
}
FontIcon.theme={
    primary:{
        color: color.b03,
        hover: color.b16
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
        color: color.c01,
        hover: color.b06
    },
    default:{
        color: color.a06,
        hover: color.a05
    },
    infoBlue:{
        color: color.c01,
        hover: color.a12
    },
    infoWhite:{
        color: color.c01,
        hover: color.a03
    },
    infoBlueBlack:{
        color: color.c01,
        hover: color.a12
    },
    infoGray:{
        color: color.c15,
        hover: color.a03
    },
    ligterWhite:{
        color: color.c03,
        hover: color.c01
    }

}
module.exports = FontIcon;