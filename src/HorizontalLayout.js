import React from 'react'
import YXReactUIBase from '../framework/uibase'

class HorizontalLayout extends YXReactUIBase{
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