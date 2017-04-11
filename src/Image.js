
import YXReactUIBase from '../framework/uibase'
import React from 'react'
class Image extends YXReactUIBase{
	
	render(){ 
		return <img {...this.props} />
	} 
}
module.exports = Image;