import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
class NumberEdit extends ReactUIBase{
	onValueChange(evt){
		var value = evt.target.value;
		//TODO: check value is valid number
		if (this.props.onValueChange){
			this.props.onValueChange(value);
		}
	}
	render(){ 
		return <input type="text" style={this.style({width:100,height:34,fontSize:12,flex:'1 0 auto',paddingLeft:12})} onChange={this.onValueChange.bind(this)} value={this.props.value} defaultValue={this.props.default} /> 
	} 
}
module.exports = NumberEdit;