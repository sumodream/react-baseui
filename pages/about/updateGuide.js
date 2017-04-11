import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'

var input = `
# 升级指南

其实我也不知道这里要写啥!

`;

class UpdateGuide extends Component {
	static get displayName() {
		return '升级指南';
	}
	render() {
		var styles = {
			wrap: {
				display: 'flex',
				flexDirection: 'column',
				aligItems: 'stretch',
				alignSelf: 'stretch',
				flex: '1 0 auto',
				overflow: 'hidden'
			}
		};
		var ReactMarkdown = require('react-markdown');
		return (
			<ReactMarkdown source={input} />
		)
	}
}

module.exports = UpdateGuide;