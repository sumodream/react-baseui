import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import HorizontalLayout from './HorizontalLayout'
import FontIcon from './FontIcon'
import color from '../common/color'
class Checkbox extends ReactUIBase{
	static get propTypes() {
		return {
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default']),
			images:React.PropTypes.object,
			list:React.PropTypes.array,
			onValueChange: React.PropTypes.func,
			itemStyle: React.PropTypes.object
		}
	}
	static get defaultProps() {
	    return {
			theme:'primary',
			list:[
				{
					item:'语文',
					checked: false,
					disabled: true
				},
				{
					item:'数学',
					disabled: false
				},
				{
					item:'英语',
					checked: true
				}
			]
	    }
	}
	constructor(props){
		super(props);
		var checkList = [];
		for(var i=0;i<props.list.length;i++){
			let isChecked = props.list[i].checked?true:false;
			checkList.push(isChecked);
		}
		this.state={
			list: checkList,
			theme : Checkbox.theme[props.theme]
		};

	}
	componentWillReceiveProps(nextProps){
		var checkList = [];
		for(var i=0;i<nextProps.list.length;i++){
			let isChecked = nextProps.list[i].checked?true:false;
			checkList.push(isChecked);
		}
		this.state = {
			list: checkList,
			theme:Checkbox.theme[nextProps.theme]
		};
	}
	
	onValueChange(index){
		var checkList = this.state.list;
		checkList[index] = !checkList[index];
		this.setState({
			list: checkList
		});
		if(this.props.onValueChange){
			this.props.onValueChange(checkList,index);
		}
	}

	render(){
		if(!this.props.list || this.props.list.length==0){
			return <div>空</div>
		}
		var styles = {
			checkbox:{
				cursor: 'pointer',
				marginRight: 16,
				alignItems:'center',
				WebkitUserSelect: 'none'
			},
			icon: {
				fontSize: 16,
				marginRight: 6
			},
			img:{
				display:'inline-block',
				width: 16,
				marginRight: 6
			}
		};
		var items = this.props.list.map((item,index)=>{
            let isChecked = this.state.list[index];
			var icon = isChecked?'icon-checkbox-yes':'icon-checkbox-none';
            let iconStyle = Object.assign({},styles.icon,{color: isChecked? this.state.theme.color : color.c07});
			let imgStatus = isChecked?'checked':'unchecked';
			let sign = this.props.images&&this.props.images[imgStatus]?<img style={styles.img} src={this.props.images[imgStatus]} />:<i style={iconStyle} className={icon} />;
			return (
				<HorizontalLayout style={Object.assign({},styles.checkbox,{opacity:item.disabled?0.6:1},this.props.itemStyle)}  key={index} onClick={item.disabled?"":this.onValueChange.bind(this,index)}>
					{sign}<div>{item.item}</div>
				</HorizontalLayout>
			)
		});
		return (
			<HorizontalLayout style={this.style({fontSize: 14,color: '#4d4d4d'})}>
				{items}
			</HorizontalLayout>
			)
	}

}
Checkbox.theme = {
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

module.exports = Checkbox;