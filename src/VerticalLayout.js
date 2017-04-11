import React from 'react'
import YXReactUIBase from '../framework/uibase'
var style={
	container:{
		display:'flex',
		flexDirection:'column',
		alignItems:'flex-start',
	},
}
class VerticalLayout extends YXReactUIBase{
	render(){
		var props=Object.assign({},this.props);
		delete props.style;
		return <div style={this.style(style.container)} {...props}>{this.props.children}</div>
	}
}
module.exports = VerticalLayout;