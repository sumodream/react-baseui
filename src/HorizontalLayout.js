import React, { Component } from 'react'
import ReactUIBase from '../framework/uibase'

class HorizontalLayout extends ReactUIBase{
	render(){
		var style={
			container:{
				display:'flex',
				flexDirection:'row',
				alignItems:'flex-start',
			},
		}
		return <div {...this.props} style={this.style(style.container)}>{this.props.children}</div>
	}
}
module.exports = HorizontalLayout;