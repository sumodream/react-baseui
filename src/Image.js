
import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
class Image extends ReactUIBase{
	
	render(){ 
		return <img {...this.props} />
	} 
}
module.exports = Image;