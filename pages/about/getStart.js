import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import Button from '../../src/Button'

var input = `
# React使用上手

\`\`\`js
npm install baseui
var base = require('baseui');
<base.Button />
\`\`\`

`;

class GetStart extends Component {
	static get displayName() {
		return '快速上手';
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

module.exports = GetStart;