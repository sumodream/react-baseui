import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import HorizontalLayout from './HorizontalLayout'
import FontIcon from './FontIcon'
var color = require('../common/color');
class Radio extends ReactUIBase {
	static get propTypes() {
		return {
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default']),
			images:React.PropTypes.object,
			list:React.PropTypes.array,
			default: React.PropTypes.number,
			onValueChange: React.PropTypes.func,
			itemStyle: React.PropTypes.object
		}
	}
	static get defaultProps() {
		return {
			theme: 'primary',
			default: 0,
			list:[
				{
					item:'男'
				},
				{
					item:'女'
				}
			]
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			active: props.default==null?-1:props.default,
			theme : Radio.theme[props.theme]
		};
	}
	componentWillReceiveProps(nextProps){
		this.state = {
			theme:Radio.theme[nextProps.theme],
			active:nextProps.default==null?-1:nextProps.default
		};
	}
	onValueChange(index){
		this.setState({
			active: index
		});
		if(this.props.onValueChange){
			this.props.onValueChange(index);
		}
	}
	render() {
		if(!this.props.list || this.props.list.length==0){
			return <div>空</div>
		}
		var objStyle = this.state.theme;
		var styles = {
			radio: {
				cursor: 'pointer',
				marginRight: 16,
				alignItems:'center',
				WebkitUserSelect: 'none'
			},
			icon:{
				fontSize: 16,
				marginRight: 6
			},
			img:{
				display:'inline-block',
				width: 16,
				marginRight: 6
			}
		};
		var items = this.props.list.map((item, index) => {
			let isChecked = index == this.state.active;
			var icon = isChecked ? 'icon-radio-yes' : 'icon-radio-none';
			let iconStyle = Object.assign({},styles.icon,{color: isChecked? this.state.theme.color : color.c07});
			let imgStatus = isChecked?'checked':'unchecked';
			let sign = this.props.images&&this.props.images[imgStatus]?<img style={styles.img} src={this.props.images[imgStatus]} />:<i style={iconStyle} className={icon} />;
			return (
				<HorizontalLayout style={Object.assign({},styles.radio,{opacity:item.disabled?0.6:1},this.props.itemStyle)}  key={index} onClick={item.disabled?"":this.onValueChange.bind(this,index)} >
					{sign}<div>{item.item}</div>
				</HorizontalLayout>
			)
		});
		return (
			<HorizontalLayout style={this.style({fontSize:14,color:'#4d4d4d'})}>
			{items}
			</HorizontalLayout>
		)
	}
}
Radio.theme = {
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
			}
		};
module.exports = Radio;