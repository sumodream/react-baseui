import React from 'react'
import VerticalLayout from '../../src/VerticalLayout'

class TryItYouself extends React.Component {
	static get displayName() {
		return 'Try It Yourself';
	}

	updateTaValue(val){
		this.tavalue = val;
	}

	TIYRender(){
		var code=`
			class TestReact extends React.Component{
				render(){
					var base = require('yxbaseui');
					return (
						${this.tavalue}
					)
				}
			}
			ReactDOM.render(<TestReact/>, document.getElementById('tiyresult'));
		`;
		eval(babel(code).code);
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
		var base = require('yxbaseui');
		return (
			<VerticalLayout style={styles.wrap}>
				<base.Textarea style={{width:'100%',height:300}} onValueChange={this.updateTaValue.bind(this)}></base.Textarea>
	       		<base.Button style={{margin:10}} onClick={this.TIYRender.bind(this)}>Show Me</base.Button>
				<div id='tiyresult' style={{width:'100%',height:'100vh'}} />
	        </VerticalLayout>
		)
	}
}

module.exports = TryItYouself;