import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import HorizontalLayout from './HorizontalLayout'
import VerticalLayout from './VerticalLayout'
import FontIcon from './FontIcon'
import Link from './Link'
import color from '../common/color'
class CollapseList extends ReactUIBase{
	static get propTypes(){
		return {
			title: React.PropTypes.string,
			icon: React.PropTypes.string,
			list: React.PropTypes.arrayOf(React.PropTypes.object),
			default: React.PropTypes.number, //默认选中的列表索引
			fold: React.PropTypes.bool,
			onValueChange: React.PropTypes.func,
			theme:React.PropTypes.oneOf(['primary','danger','success','warning','info','default','infoBlack','infoWhite','infoGray','disabled']),
		}
	}

	static get defaultProps() {
		return {
			theme:'default',
			title: '折叠列表',
			fold: false,
			default:-1,
			list:[
				{
					item:'测试数据1',
					href:'',
					icon:''
				},
				{
					item:'测试数据2'
				},
				{
					item:'测试数据3'
				}
			]
		};
	}

	constructor(props) {
	    super(props);
	    this.state={
	    	showContent: props.fold,
	    	activeItem: props.default,
	    	hoverItem: props.default,
	    	theme:CollapseList.theme[props.theme]
	    }
		
	}
	toggleContent(){
		this.setState({
			showContent: !this.state.showContent
		})
	}
	
	componentWillReceiveProps(nextProps){
		this.setState({
			showContent:nextProps.fold,
			activeItem: nextProps.default
		});
	}

	render(){
		var objStyle=this.state.theme;
		var styles={
			titleStyle:{
				paddingLeft:30,
				height: 52,
				color: '#333333',
				boxSizing:'border-box',
				alignItems:'center',
				fontSize:14,
				cursor:'pointer'
			},
			toggleIcon:{
				marginRight: 20,
				fontSize: 16,
				color:objStyle.color,
				alignSelf: 'center',
				marginLeft: 10
			},
			icon: {
				color:objStyle.color,
				fontSize: 16,
				marginRight:4,
				alignSelf: 'center'
			}

		};
		var listContent = (()=>{
			let listLast = this.props.list.length-1;
			let list = this.props.list.map((item,idx)=>{
				return (
					<Link key={idx} 
						onMouseOver={((idx,evt)=>{
								this.setState({
									hoverItem: idx
								});
							}).bind(this,idx)
						} 
						onMouseOut={
							((idx,evt)=>{
								this.setState({
									hoverItem: -1
								});
							}).bind(this,idx)
						} 
						onClick={
							((idx)=>{
								if(this.props.onValueChange){
									this.props.onValueChange(idx);
								}
							this.setState({
								activeItem: idx
							})
						}).bind(this,idx)}
						href={item.href?item.href:''}
						icon={item.icon?item.icon:''}
						style={{flexGrow:1,paddingLeft:this.props.icon?50:38, backgroundColor:idx==this.state.activeItem?objStyle.color:(idx==this.state.hoverItem?objStyle.color:'#FFFFFF'), fontSize:12, color:idx==this.state.activeItem?'#ffffff':(idx==this.state.hoverItem?'#ffffff':'#333333'),height:40,display:'flex',flexDirection:'row',alignItems:'center',textDecoration:'none',borderBottom:'1px solid #f2f2f2'}}>{item.item}</Link>
					)
			});
			return (<VerticalLayout style={{alignItems:'stretch'}}>{list}</VerticalLayout>)
		})();
		return (
			<VerticalLayout style={this.style({alignItems:'stretch'})}>
			<HorizontalLayout style={styles.titleStyle} onClick={this.toggleContent.bind(this)}>
				<HorizontalLayout>
				{this.props.icon?<i className={"fontello  "+this.props.icon} style={styles.icon}></i>:''}
				{this.props.title}
				</HorizontalLayout>
				<FontIcon style={styles.toggleIcon} icon={this.state.showContent?'icon-up-open-2':'icon-down-open-2'} />
			</HorizontalLayout>
			{this.state.showContent?listContent:null}
			</VerticalLayout>
			)
	} 
}
CollapseList.theme = {
			primary:{
				color: color.b03,
			},
			danger:{
				color: color.b08,
			},
			success:{
				color: color.b04,
			},
			warning:{
				color: color.b06,
			},
			info:{
				color: color.c03,
			},
			default:{
				color: color.a06,
			},
			infoBlack:{
				color: color.c01,
			},
			infoWhite:{
				color: color.c13,
			},
			infoGray:{
				color: color.c15,
			},
			disabled:{
				color: color.c03,
			}
		};
module.exports = CollapseList;