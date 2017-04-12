import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import HorizontalLayout from './HorizontalLayout'
import color from '../common/color'
class NoBorderTabs extends ReactUIBase {
	static get propTypes() {
		return {
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','white','default','warningText']),
			values: React.PropTypes.array,
			default: React.PropTypes.number,
			currentIndex: React.PropTypes.number,
			onSelect: React.PropTypes.func
		}
	}
	static get defaultProps() {
		return {
			values: ["班级0","班级1","班级2","班级3","班级A101(文)","班级A101(文)","班级A101(文)"],
			default: 0,
			theme:'primary'
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: props.default,
			theme:NoBorderTabs.theme[props.theme]
		};
	}
	handleSelect(index) {
		if(this.props.onSelect){
			this.props.onSelect(index);
		}
		this.setState({
			selectedTab:index
		});
	}
	render() {
		var objStyle=this.state.theme;
		let showIndex = this.props.currentIndex!=null?this.props.currentIndex:this.state.selectedTab;
		var items = this.props.values.map((item, index) => {
			let len = this.props.values.length-1;
			var style = {
				selectedTab: {
					display:'flex',
					alignItems:'center',
					alignSelf: 'stretch',
					justifyContent:'center',
					margin:index==0?'0 15px 0 0px':index==len?'0 0px 0 15px':'0 15px 0 15px',
					cursor: 'pointer',
					fontSize: 14,
					border:0,
					borderBottom:objStyle.borderBottom,
					borderStyle: 'solid',
					borderColor: objStyle.borderBottomColor,
					color:objStyle.textHover,

				},
				unselectedTab: {
					display:'flex',
					alignItems:'center',
					alignSelf: 'stretch',
					justifyContent:'center',
					margin:index==0?'0 15px 0 0px':index==len?'0 0px 0 15px':'0 15px 0 15px',
					color:objStyle.text,
					cursor: 'pointer',
					fontSize: 14,
				}
			};
			return (
				<HorizontalLayout key={index} style={{alignSelf: 'stretch'}}>
					<div style={index==showIndex?style.selectedTab:style.unselectedTab} onClick={this.handleSelect.bind(this,index)} key={index}>{item}</div>
				</HorizontalLayout>
			)
		});
		return (
			<HorizontalLayout {...this.props} style={this.style({alignSelf: 'stretch'})}>
				{items}
			</HorizontalLayout>
		)
	}
}
NoBorderTabs.theme = {
	primary:{
		text: color.c12,
		textHover: color.b03,
		borderBottom:'2px solid',
		borderBottomColor:color.b03
	},
	danger:{
		text: color.c12,
		textHover: color.b08,
		borderBottom:'2px solid',
		borderBottomColor:color.b08
	},
	success:{
		text: color.c12,
		textHover: color.b04,
		borderBottom:'2px solid',
		borderBottomColor:color.b04
	},
	warning:{
		text: color.c12,
		textHover: color.b06,
		borderBottom:'2px solid',
		borderBottomColor:color.b06
	},
	warningText:{
		text: color.c09,
		textHover: color.c12,
		borderBottom:'2px solid',
		borderBottomColor:color.b06
	},
	info:{
		text: color.c12,
		textHover: color.c03,
		borderBottom:'2px solid',
		borderBottomColor:color.c03
	},
	white:{
		text: color.c01,
		textHover: color.c01,
		borderBottom: '2px solid',
		borderBottomColor: color.c01
	},
	default:{
		text: color.c12,
		textHover: color.a06,
		borderBottom:'2px solid',
		borderBottomColor:color.a06
	}
};
module.exports = NoBorderTabs;
