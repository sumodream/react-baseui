import YXReactUIBase from '../framework/uibase'
import React from 'react'
class Text extends YXReactUIBase{
	render(){
		return <span {...this.props}>{this.props.children}</span>
	}
}
module.exports = Text;