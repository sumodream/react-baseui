import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
class Text extends ReactUIBase{
	render(){
		return <span {...this.props}>{this.props.children}</span>
	}
}
module.exports = Text;