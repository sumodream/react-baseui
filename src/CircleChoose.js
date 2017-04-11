import YXReactUIBase from '../framework/uibase'
import React from 'react'
import VerticalLayout from './VerticalLayout'
import FontIcon from './FontIcon'
var color = require('../common/color');
class CircleChoose extends YXReactUIBase {
	static get propTypes() {
		return {
			default: React.PropTypes.number,
            onClick: React.PropTypes.func,
            value: React.PropTypes.number,
            size:React.PropTypes.number
            // 添加 对/半对/错 的枚举值
		}
	}
	static get defaultProps() {
		return {
			default: -1,
			size:50
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			hoverIndex: -1,
			selectedIndex:props.default
		};
	}
	onclick(index) {
		if(this.props.onClick){
			this.props.onClick(index);
		}
		this.setState({
	        selectedIndex: index
	    });
	}
	onmouseover(index){
		this.setState({
			hoverIndex: index
		});
	}
	onmouseout(){
		this.setState({
			hoverIndex: -1
		});
	}
	render() {
		var styles = {
			right: {
				marginBottom: this.props.size/2.5,
				cursor: 'pointer',
				width:this.props.size,
				height:this.props.size,
				fontSize: this.props.size/1.6,
				borderRadius: '50%',
				color: color.b04,
				backgroundColor: color.c01,
				border: '1px solid #e7e7e7',
			},
			rightdefault: {
				marginBottom: this.props.size/2.5,
				cursor: 'pointer',
				width:this.props.size,
				height:this.props.size,
				fontSize: this.props.size/1.6,
				borderRadius: '50%',
				color: color.c01,
				backgroundColor: color.b04,
				border: '1px solid '+color.b04,
			},
			halfright: {
				marginBottom: this.props.size/2.5,
				cursor: 'pointer',
				width:this.props.size,
				height:this.props.size,
				fontSize: this.props.size/1.6,
				borderRadius: '50%',
				color: color.b06,
				backgroundColor: color.c01,
				border: '1px solid #e7e7e7',
			},
			halfrightdefault: {
				marginBottom: this.props.size/2.5,
				cursor: 'pointer',
				width:this.props.size,
				height:this.props.size,
				fontSize: this.props.size/1.6,
				borderRadius: '50%',
				color: color.c01,
				backgroundColor: color.b06,
				border: '1px solid '+color.b06,
			},
			wrong: {
				marginBottom: this.props.size/2.5,
				cursor: 'pointer',
				width:this.props.size,
				height:this.props.size,
				fontSize: this.props.size/1.6,
				borderRadius: '50%',
				color: color.b08,
				backgroundColor: color.c01,
				border: '1px solid #e7e7e7',
			},
			wrongdefault: {
				marginBottom: this.props.size/2.5,
				cursor: 'pointer',
				width:this.props.size,
				height:this.props.size,
				fontSize: this.props.size/1.6,
				borderRadius: '50%',
				color: color.c01,
				backgroundColor: color.b08,
				border: '1px solid '+color.b08,
			},
			icon:{
				display: 'flex',
			    alignItems: 'center',
			    justifyContent: 'center',
			    height: this.props.size,
			}
		};
		let index = this.props.value!=null?this.props.value:this.state.selectedIndex;
		return (
			<VerticalLayout style={this.style(styles)}>
				<span style={this.state.hoverIndex==0?styles.rightdefault:(index==0?styles.rightdefault:styles.right)} onClick={this.onclick.bind(this,0)} onMouseOver={this.onmouseover.bind(this,0)} onMouseOut={this.onmouseout.bind(this)}>
					<FontIcon icon='icon-icon-right' style={styles.icon}></FontIcon>
				</span>
				<span style={this.state.hoverIndex==1?styles.halfrightdefault:(index==1?styles.halfrightdefault:styles.halfright)} onClick={this.onclick.bind(this,1)} onMouseOver={this.onmouseover.bind(this,1)} onMouseOut={this.onmouseout.bind(this)}>
					<FontIcon icon='icon-icon-half-right' style={styles.icon}></FontIcon>
				</span>
				<span style={this.state.hoverIndex==2?styles.wrongdefault:(index==2?styles.wrongdefault:styles.wrong)} onClick={this.onclick.bind(this,2)} onMouseOver={this.onmouseover.bind(this,2)} onMouseOut={this.onmouseout.bind(this)}>
					<FontIcon icon='icon-icon-wrong' style={styles.icon}></FontIcon>
				</span>
			</VerticalLayout>
		)
	}
}
module.exports = CircleChoose;
