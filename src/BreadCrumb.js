import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import HorizontalLayout from './HorizontalLayout'
import Link from './Link'
var color = require('../common/color');
class BreadCrumb extends ReactUIBase {
	static get propTypes() {
		return {
			list: React.PropTypes.array,
			icon:React.PropTypes.string,
			separator:React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element
			]),
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default','infoBlack','infoWhite','infoGray'])
		}
	}
	static get defaultProps() {
		return {
			theme: 'primary',
			icon:'icon-fanhui2',
			separator: <i className="icon-right-open-3"></i>,
			list: [{
				item:'面包屑'
			},{
				item:'当前页'
			}]
		};
	}
	constructor(props) {
		super(props);
		this.state = {
			theme : BreadCrumb.theme[props.theme]
		};
	}
	render() {
		var objStyle = this.state.theme;
		var styles = {
			breadCrumbBar: {
				alignItems: 'center',
				boxSizing: 'border-box',
				fontSize: 14
			},
			icon: {
				color: this.state.select&&objStyle.color?objStyle.color:objStyle.color,
				fontSize: 16,
				marginRight:2
			}
		};
		var _this = this;
		var listLength = this.props.list.length;
		if (listLength == 1) {
			let currentName = '';
			if (typeof this.props.list[0] == 'string') {
				currentName = this.props.list[0];
			} else {
				currentName = this.props.list[0].item;
			}
			var content = (<span style={{color:'#333333'}}>{currentName}</span>);
		} else if (listLength > 1) {
			let listContent = this.props.list.map((item, idx) => {
				if (idx < listLength - 1) {
					return (
						<HorizontalLayout key={idx} style={{alignItems:'center'}}>
							<Link style={{color: '#999999',fontSize: 14}} onClick={item.fuc?item.fuc:null} hoverStyle={{color : objStyle.color}} href={item.href?item.href:''}>
								{item.item}
							</Link>
							{typeof _this.props.separator == 'string'?<span style={{marginLeft: 5,marginRight: 5}}>{_this.props.separator}</span>:_this.props.separator}
						</HorizontalLayout>
					)
				} else {
					return <span key={idx} style={{color: '#333'}}>{item.item}</span>;
				}
			});
			var content = (<HorizontalLayout style={{alignItems:'center',flex:'1 0 auto',color: '#999999',fontSize:14}}>{_this.props.icon?<i className={_this.props.icon} style={styles.icon}></i>:''}{listContent}</HorizontalLayout>);
		}

		return (
			<HorizontalLayout style={this.style(styles.breadCrumbBar)}>
				{content}
			</HorizontalLayout>
		);
	}
}
BreadCrumb.theme = {
			primary:{
				color: color.b03
			},
			danger:{
				color: color.b08
			},
			success:{
				color: color.b04
			},
			warning:{
				color: color.b06
			},
			info:{
				color: color.c03
			},
			default:{
				color: color.a06
			},
			infoBlack:{
				color: color.c01
			},
			infoWhite:{
				color: color.c13
			},
			infoGray:{
				color: color.c15
			}
		};
module.exports = BreadCrumb;